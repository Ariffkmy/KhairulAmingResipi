import cv2

import numpy as np

from tensorflow.keras.applications import MobileNetV2

from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions

 

# Load pre-trained model

model = MobileNetV2(weights="imagenet")

 

# Open the video file

cap = cv2.VideoCapture('your_video_file.mp4')

 

while cap.isOpened():

    # Read the video frame by frame

    ret, frame = cap.read()

    if not ret:

        break

 

    # Preprocess the frame for the model

    frame = cv2.resize(frame, (224, 224))

    frame = np.expand_dims(frame, axis=0)

    frame = preprocess_input(frame)

 

    # Make a prediction

    preds = model.predict(frame)

    results = decode_predictions(preds)

 

    # Check if the top prediction is food

    if 'food' in results[0][0][1]:

        print("This video is about food.")

        break

 

cap.release()

cv2.destroyAllWindows()