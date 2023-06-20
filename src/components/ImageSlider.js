import { useState, useEffect } from 'react';
import seated_kids from'../images/child_seated.jpg'
import feed_kids from '../images/feed_kids.jpg'
import playchess from '../images/playchess.jpg'
import '../styles/ImageSlider.css'
const ImageSlider = () => {
    const textsImages = [
       {
        text:"Better World For Everyone",
        image: feed_kids
       },
       {
        text:"Every Donations Helps",
        image: seated_kids
       },
       {
        text: "Hindu Society of Ottawa-Carleton",
        image: playchess
       }
    ]


    const [currentImageTextIndex, setCurrentImageTextIndex] = useState(0)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageTextIndex((prevIndex) => (prevIndex + 1) % textsImages.length);
      }, 7000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className='image-slider'>
        {textsImages.map((item, index) => (
            <div key={index} className={index === currentImageTextIndex ? 'active' : ''}>
                <img
                    src={item.image}
                    className={index === currentImageTextIndex ? 'active' : ''}
                    alt={`Image and text ${index + 1}`}
                   
                />
                <h2 >{item.text}</h2>
            </div>
          
        ))}
      </div>
    );
  };
  
  export default ImageSlider;