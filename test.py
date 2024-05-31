import requests
from bs4 import BeautifulSoup
import re
import json
import pandas as pd

def get_instagram_videos(username):
    base_url = f"https://www.instagram.com/{username}/"
    response = requests.get(base_url)
    print(response,'--resp')
    
    if response.status_code != 200:
        print("Failed to retrieve the webpage. Status code:", response.status_code)
        return []
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extract shared data from the script tag
    scripts = soup.find_all('script', type="text/javascript")
    shared_data = None
    for script in scripts:
        if script.string and 'window._sharedData' in script.string:
            shared_data = script.string
            break

    if shared_data is None:
        print("Failed to find the shared data script.")
        return []
    
    # Clean the script content to extract JSON
    shared_data = shared_data.split(' = ', 1)[1].rstrip(';')
    
    # Load JSON data
    data = json.loads(shared_data)
    
    # Navigate the JSON to find the video URLs
    user_media = data['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['edges']
    video_urls = []

    for media in user_media:
        node = media['node']
        if node['is_video']:
            video_urls.append(node['video_url'])
            print('Complete')

    return video_urls

def save_to_excel(video_urls, filename):
    df = pd.DataFrame(video_urls, columns=['Video URL'])
    df.to_excel(filename, index=False)
    print(f"Video URLs saved to {filename}")

if __name__ == "__main__":
    username = input("Khairulaming")
    videos = get_instagram_videos(username)
    if videos:
        print("Found video URLs:")
        for url in videos:
            print(url)
        save_to_excel(videos, f"{username}_video_urls_latest.xlsx")
        print('Complete')

    else:
        print("No videos found or unable to retrieve data.")
        print('Complete')

