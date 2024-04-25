
import { FaChevronRight } from 'react-icons/fa';
import CircularProgress from '@mui/material/CircularProgress';

const First = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <a href="#main-content" className="sr-only focus:not-sr-only text-blue-400">Skip</a>
      <img src="./assets/images/cycle.svg" alt="Centered Image" className="w-120 h-120 object-cover rounded-full mb-4" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Get Burn</h2>
        <p className="text-gray-600">Let's keep burning to achive your goals, it hurts only temporarily, if you give up mow you will be in pain forever.</p>
      </div>
      <div className="absolute bottom-8 right-8 flex items-center space-x-2">
        <button className="bg-blue-500 text-white rounded-full p-3 focus:outline-none">
          <FaChevronRight />
        </button>
        <div className="relative">
          <CircularProgress variant="determinate" value={75} size={40} thickness={5} className="text-blue-500" />
          <FaChevronRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
      </div>
    </div>
  );
};

export default First;