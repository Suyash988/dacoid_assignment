import BarAnimation from '@/components/shared/Baranimation';
import { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; // Import the error icon
import Switch from 'react-switch'; 

const Tracker = () => {
  const [toggleState1, setToggleState1] = useState(false); // State for the first switch
  const [toggleState2, setToggleState2] = useState(false); // State for the second switch

  const handleToggle1 = () => {
    setToggleState1(!toggleState1); // Toggle the state for the first switch
  };

  const handleToggle2 = () => {
    setToggleState2(!toggleState2); // Toggle the state for the second switch
  };
    
  return (
    <div className="flex flex-col items-center w-full p-5 overflow-y-auto ">
      <div className="w-full p-5">
        <BarAnimation />
      </div>
      <div className="w-full p-5 bg-gradient-to-r from-cyan-500 to-white-500 text-light-4 flex items-center justify-center rounded-xl">
        <FaExclamationCircle className="mr-2 w-6" />
        <p className="text-sm">You've burned fewer calories than yesterday. <br />Time to get moving!</p>
      </div>
      <div className="flex items-center justify-between w-full p-5 mt-5 h-full">
  
          <h2 className='text-bold'>Upcoming Workout</h2>
          <p className='text-sm text-light-4'>See more</p>
      </div>
      <div className="flex items-center justify-between w-full p-5 mt-5 h-full">
      
        <div className="flex items-center">
          <img src="./assets/images/full.svg" alt="Image 1" className="w-12 h-12 mr-4 rounded-full" />
          <p className=" text-gray-700 p-2">Full body workout  </p>
          <br /> 
            <p className='text-sm text-gray-500 p-2'> Today 3PM</p>
            
         
        </div>
        <div className="flex items-center">
          <Switch
            checked={toggleState1}
            onChange={handleToggle1}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={15}
            width={40}
          />
          <p className="text-lg ml-2">{toggleState1 ? "" : ""}</p>
        </div>
      </div>
      {/* Second switch */}
      <div className="flex items-center justify-between w-full p-5">
        
        <div className="flex items-center">
          <img src="./assets/images/upper.svg" alt="Image 2" className="w-12 h-12 mr-4 rounded-full" />
          <p className=" text-gray-700 p-2">Upper body workout</p>
          <p className='text-sm text-gray-500 p-2'> 4 Feb 3:30PM</p>
        </div>
        <div className="flex items-center">
          <Switch
            checked={toggleState2}
            onChange={handleToggle2}
            onColor="#86d3ff"
            onHandleColor="#2693e9"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={15}
            width={40}
          />
          <p className="text-lg ml-2">{toggleState2 ? "" : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Tracker;