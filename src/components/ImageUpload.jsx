import React, { useState, forwardRef, useEffect } from "react"; // Add useEffect import

const ImageUploader = forwardRef(
  ({ id = "fileInput", onImageUpload = null, imageUrl = null, customClass = "", showArrowUp = true, ...props }, ref) => {
    const [imagePreview, setImagePreview] = useState(imageUrl);
    // console.log(props); // Remove spread operator
    useEffect(() => {
      if (imageUrl) {
        setImagePreview(imageUrl);
      }
    }, [imageUrl]);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);

        if (onImageUpload) {
          onImageUpload(file);
        }
      } else {
        console.error("Selected file is not an image");
      }
    };

    return (
      <div className="flex flex-col items-center">
        {showArrowUp && (
          <label htmlFor={id} className="cursor-pointer">
            <div
              className={`w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center ${customClass}`}
              style={imagePreview ? { backgroundImage: `url(${imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {!imagePreview && (
                <span className="text-gray-500">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </span>
              )}
            </div>
          </label>
        )}

        <input
          id={id}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
          ref={ref}
          {...props}
          defaultimage={props?.defaultimage} // Change to lowercase if needed
        />
      </div>
    );
  }
);

export default ImageUploader;
