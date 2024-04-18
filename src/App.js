import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const images=[
  "https://unsplash.com/photos/H8dcf-v98mA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHx8fDE3MTIwNTk2MTR8MA&force=true&w=2400",
  "https://unsplash.com/photos/72GwiojCwoI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8a2FzaG1pcnxlbnwwfHx8fDE3MTIwNTk2MTR8MA&force=true&w=2400",
  "https://unsplash.com/photos/DsST40JDEoc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGthc2htaXJ8ZW58MHx8fHwxNzEyMDU5NjE0fDA&force=true&w=2400",
  "https://unsplash.com/photos/3wVlGMGMhd0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGthc2htaXJ8ZW58MHx8fHwxNzEyMDU5NjE0fDA&force=true&w=2400"
];

export default function App(){
  const[current, setCurrent] = useState(0);

  function nextSlide(){
    setCurrent(current === images.length-1 ? 0 : current+1);
  }

  function previousSlide(){
    setCurrent(current === 0 ? images.length-1 : current-1);
  }

  return(
    <div>
      <h2>Image Carousel</h2>
      <div className='slider'>
        <div className='left-arrow' onClick={previousSlide}>
          ⬅
        </div>
        <div className='right-arrow' onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image,index) =>
            current === index && (
              <div key={image} className='slide'>
                <img src={image} alt='image'/>
              </div>
            )
          )}
      </div>
    </div>
  );
}