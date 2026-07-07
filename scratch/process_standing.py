import os
import shutil
from rembg import remove
from PIL import Image

def main():
    workspace_dir = "/home/sourov/Desktop/modern-per"
    public_dir = os.path.join(workspace_dir, "public")
    
    # 1. Back up/rename the current stool model to model_stool_transparent.png
    current_transparent = os.path.join(public_dir, "model_transparent.png")
    stool_transparent = os.path.join(public_dir, "model_stool_transparent.png")
    
    if os.path.exists(current_transparent):
        print(f"Copying current {current_transparent} to {stool_transparent}...")
        shutil.copy(current_transparent, stool_transparent)
    else:
        print("Warning: current model_transparent.png not found!")

    # 2. Process the original standing model image using rembg
    original_standing = "/home/sourov/.gemini/antigravity/brain/ff303ae5-2a40-40b4-9efd-71e1780452d6/media__1783412997524.png"
    if os.path.exists(original_standing):
        print(f"Opening original standing image from {original_standing}...")
        input_image = Image.open(original_standing)
        print("Removing background using rembg...")
        output_image = remove(input_image)
        print(f"Saving background-removed standing image to {current_transparent}...")
        output_image.save(current_transparent)
        print("Standing image processed successfully!")
    else:
        print(f"Error: Original standing image not found at {original_standing}")

if __name__ == "__main__":
    main()
