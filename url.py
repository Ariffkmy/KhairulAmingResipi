from bs4 import BeautifulSoup
import pandas as pd

# Function to extract video IDs from embedded Instagram links
def extract_video_ids(html_content, sheet_name):
    if not isinstance(html_content, str):
        return []  # Return empty list if the content is not a string
    soup = BeautifulSoup(html_content, 'html.parser')
    blockquotes = soup.find_all('blockquote', class_='instagram-media')
    video_ids = []
    for blockquote in blockquotes:
        permalink = blockquote.get('data-instgrm-permalink')
        if permalink:
            video_id = permalink.split('/')[-2]  # Extract video ID from permalink
            video_ids.append((video_id, sheet_name))
    return video_ids

# Read HTML content from each sheet of the Excel file
def read_excel_sheets(filename):
    with pd.ExcelFile(filename) as xls:
        sheet_names = xls.sheet_names
        video_ids_all = []
        for sheet_name in sheet_names:
            html_contents = pd.read_excel(xls, sheet_name, header=None).values.tolist()
            video_ids_sheet = []
            for html_content in html_contents:
                video_ids_sheet.extend(extract_video_ids(str(html_content[0]), sheet_name))  # Convert to string before parsing
            video_ids_all.extend(video_ids_sheet)
    return video_ids_all

# Read from Excel file and extract video IDs from each sheet
filename = 'inputka.xlsx'  # Adjust the filename as needed
video_ids_all = read_excel_sheets(filename)

# Create a DataFrame to store the video IDs
df = pd.DataFrame(video_ids_all, columns=['Video ID', 'Sheet Name'])

# Write the DataFrame to an Excel file
output_filename = 'instagram_video_ids_with_sheet.xlsx'
df.to_excel(output_filename, index=False)

print(f"Video IDs extracted and saved to '{output_filename}'")
