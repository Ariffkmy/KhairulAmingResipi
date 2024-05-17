import pandas as pd

# Function to convert Instagram video links to embedded links
def convert_to_embedded_link(video_url):
    return f'<iframe src="{video_url}"></iframe>'

# Read the Excel file containing Instagram video links
df = pd.read_excel('LINK.xlsx')

# Apply the conversion function to each video link
df['Link'] = df['Videolink'].apply(convert_to_embedded_link)

# Write the embedded links to a new Excel file
df.to_excel('embedded_videos.xlsx', index=False)
