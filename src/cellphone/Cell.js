import React, {useState} from 'react';
import cellBG from './images/cellBackground.png';
import cityBG1 from './images/cityBG1.png';
import cityBG2 from './images/cityBG2.png';
import cityBG3 from './images/cityBG3.png';
import cityBG4 from './images/cityBG4.png';

import statsBG from './images/cellStatsBG.png';
import boxingBG from './images/cellSelectBoxing.png';
import caliBG from './images/cellSelectCalisthenics.png';
import liftBG from './images/cellSelectLifting.png';
import runBG from './images/cellSelectRunning.png';
import yogaBG from './images/cellSelectYoga.png';
import typeWorkoutBG from './images/cellTypeSelectWorkout.png';
import midWorkoutBG from './images/cellMidWorkout.png';
import profileBG from './images/cellProfile.png';

import Swipe from './assets/swipe';
   

const Cell = () => {
    const cellScreens = [statsBG, boxingBG, caliBG, liftBG, runBG, yogaBG, typeWorkoutBG, midWorkoutBG, profileBG];
    const cityBGs = [cityBG1, cityBG2, cityBG3, cityBG4];
    const [currentCellIndex, setCurrentCellIndex] = useState(0);
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
  
    const onSwipe = (direction, targetType) => {
      const [currentIdx, setCurrentIdx, images] =
        targetType === 'cell'
          ? [currentCellIndex, setCurrentCellIndex, cellScreens]
          : [currentCityIndex, setCurrentCityIndex, cityBGs];
  
      if (direction === 'left') {
        setCurrentIdx((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else {
        setCurrentIdx((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    };
  
    return (
      <div className="bg-yellow-100 h-screen">
        <img src={cityBGs[currentCityIndex]} alt="city background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <img src={cellScreens[currentCellIndex]} alt="cell screen" className="absolute top-0 left-0 w-full h-full object-cover" />
        <img src={cellBG} alt="cellphone background" className="w-full h-full object-cover absolute" />
        <Swipe onSwipe={onSwipe} />
      </div>
    );
  };
  
  export default Cell;