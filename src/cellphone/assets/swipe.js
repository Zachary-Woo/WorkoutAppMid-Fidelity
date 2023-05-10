import React from 'react';
import scrollArrow from '../images/scrollArrow.png';
import bgArrow from '../images/backgroundArrow.png';

const Swipe = ({ onSwipe }) => {
    const handleLeftClick = (targetType) => {
      onSwipe('left', targetType);
    };
  
    const handleRightClick = (targetType) => {
      onSwipe('right', targetType);
    };

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div onClick={() => handleRightClick('cell')}>
                <img src={scrollArrow} alt="scroll right arrow" className="absolute -right-1 top-1/2 transform -translate-y-1/2 h-[100px] hover:bg-gray-400 hover:opacity-20" />
            </div>
            <div onClick={() => handleLeftClick('cell')}>
                <img src={scrollArrow} alt="scroll left arrow" className="absolute -left-1 top-1/2 transform -translate-y-1/2 h-[100px] rotate-180 hover:bg-gray-400 hover:opacity-20" />
            </div>

            <div onClick={() => handleRightClick('city')} className='hover:bg-gray-100 hover:opacity-20 hover:rounded-[25px]'>
                <img src={bgArrow} alt="background right arrow" className="absolute right-8 top-[50px] transform -translate-y-1/2 h-[50px] rotate-90" />
            </div>
            <div onClick={() => handleLeftClick('city')} className='hover:bg-gray-100 hover:opacity-20 hover:rounded-[25px]'>
                <img src={bgArrow} alt="background left arrow" className="absolute left-8 top-[50px] transform -translate-y-1/2 h-[50px] -rotate-90" />
            </div>
        </div>
    );
}

export default Swipe;