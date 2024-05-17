import instaloader
from openpyxl import Workbook

def get_instagram_video_embedded_link_with_caption(username):
    # Create an instance of Instaloader
    L = instaloader.Instaloader()

    # Load the profile
    profile = instaloader.Profile.from_username(L.context, username)

    # Create a new Workbook
    wb = Workbook()
    ws = wb.active

    # Set headers for Excel file
    ws.append(["Embedded Link", "Caption"])

    # Iterate over the profile's posts
    for post in profile.get_posts():
        if post.is_video:
            # Get the caption
            caption = post.caption

            # Get the video URL
            video_url = post.video_url

            # Generate embedded link
            embedded_link = video_url

            # Write to Excel file
            ws.append([embedded_link, caption])

    # Save the Excel file
    wb.save(f"Khairulaming_instagram_videos.xlsx")

# Example usage:
instagram_username = "Khairulaming"
get_instagram_video_embedded_link_with_caption(instagram_username)

print('Extract completed')
