// Slider.js
import React,{useState} from 'react';
import './Slider.css';

const Slider = () => {
  let images=["./admprslide1.jpg","./admprslide2.jpg","./slide2.jpg","./slide3.jpg","./slide4.jpg"]
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div key={index} className={`slider-item scale-${index === 2 ? 'large' : index === 1 ? 'medium' : 'small'}`}>
          <input
            type="radio"
            id={`image-${index}`}
            name="slider"
            checked={selectedImageIndex === index}
            onChange={() => handleImageChange(index)}
          />
          <label htmlFor={`image-${index}`}>
            <img src={image} alt={`Image ${index}`} />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Slider;
