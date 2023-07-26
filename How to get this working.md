# CVUT-FEL

CVUT-FEL is a project for creating a website for VOT Challenge.

## Preparations

We assume that your structure looks like this:
<ul><i>
• (parent folder)
    • (folder with name of the tracking object)
        •video
            •photo1.png/.jpeg/.jpg
            •photo2.png/.jpeg/.jpg
            •photo3.png/.jpeg/.jpg
            •photo4.png/.jpeg/.jpg
            •...
        •(other files e.g. ground truth)
    • (folder with name of the tracking object)
    • (folder with name of the tracking object)
    • (folder with name of the tracking object)
    • ...
</ul></i>

Copy this python script, change values of <b>frame_rate, source_folder & compression_factor</b> and run it. This will create folder called Videos with photos from your dataset.

```python
import os
import cv2
import shutil

def compress_and_create_videos(source_folder, output_folder, frame_rate=30, compression_factor=50):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for folder_name in os.listdir(source_folder):
        folder_path = os.path.join(source_folder, folder_name)
        if not os.path.isdir(folder_path):
            continue

        video_name = folder_name + '.mp4'
        video_path = os.path.join(output_folder, video_name)
        video_writer = cv2.VideoWriter(video_path, cv2.VideoWriter_fourcc(*'mp4v'), frame_rate, (640, 480))

        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            if filename.endswith(('.jpg', '.png', '.jpeg')):
                img = cv2.imread(file_path)
                for _ in range(compression_factor):
                    video_writer.write(img)

        video_writer.release()

if __name__ == "__main__":
    source_folder = "path_to_source_folder"
    output_folder = "Videos"
    frame_rate = 30  # Change this to the desired frame rate
    compression_factor = 50  # The higher the value, the more compressed the video will be

    compress_and_create_videos(source_folder, output_folder, frame_rate, compression_factor)
```

## Usage



## Contributing



## License


