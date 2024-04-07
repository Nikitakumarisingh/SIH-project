import React, { useState } from 'react';

const UploadImage = ()=>{
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = () => {
    // Here, you can implement logic to handle the submitted image
    if (selectedImage) {
      console.log('Submitted Image:', selectedImage);
      // You can perform further actions like uploading the image or processing it
    } else {
      console.log('No image selected');
    }
  };

  return (
    <div className='uploadImage'>

      <div>
        <label for="inputTag">
          Select Image <br/>
          <i class="fa fa-2x fa-camera"></i>
          <input id="inputTag" type="file" accept="image/*" onChange={handleImageChange} />
          <br/>
          <span id="imageName"></span>
        </label>
      </div>
      

      <button onClick={handleSubmit}>Submit</button>
      {selectedImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;