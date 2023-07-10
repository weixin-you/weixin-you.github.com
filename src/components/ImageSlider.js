import { useState, useEffect } from 'react';
import seated_kids from'../images/child_seated.jpg'
import feed_kids from '../images/feed_kids.jpg'
import playchess from '../images/playchess.jpg'
import '../styles/ImageSlider.css'
const ImageSlider = () => {
    const textsImages = [
       {
        text:"Better World For Everyone",
        text2: "Help the individuals affected",
        image: feed_kids
       },
       {
        text:"Every Donation Helps",
        text2: "Donate now",
        image: seated_kids
       },
       {
        text: "Hindu Society of Ottawa-Carleton",
        text2: "A non-religious, non-profitable, non-political organization",
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
                <h2>{item.text}</h2>
                <p>{item.text2}</p>
            </div>
          
        ))}
      </div>
    );
  };
  
  export default ImageSlider;