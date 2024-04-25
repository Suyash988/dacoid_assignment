import { useState, useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FaPlus } from 'react-icons/fa';


const WorkoutSchedulePage = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const eventModalRef = useRef<HTMLDivElement>(null);

  const handleEventClick = (info : any) => {
    // Handle event click
    console.log('Event clicked:', info);
  };

  const handleDateClick = (info : any) => {
    // Handle date click
    console.log('Date clicked:', info);
    setShowEventModal(true);
  };

  const handleAddEventClick = () => {
    setShowEventModal(true);
  };

  const handleEventModalClose = () => {
    setShowEventModal(false);
  };

  const handleOutsideClick = (e : MouseEvent) => {
    if (eventModalRef.current && !eventModalRef.current.contains(e.target as Node)) {
      setShowEventModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="container mx-auto mt-8 overflow-x-hidden">
      <h1 className="text-3xl font-bold  text-center mb-10">Workout Schedule</h1>
      <div className="date-scroll-container overflow-x-auto whitespace-nowrap mb-10">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="date-item inline-block px-4 py-4 border rounded-full bg-gradient-to-r from-cyan-200 to-blue-500 text-white mr-2">
            {/* Display your date here */}
            {new Date().toLocaleDateString()}
          </div>
        ))}
      </div>
      <div className="absolute bottom-40 right-16 z-10">
        <button
          onClick={handleAddEventClick}
          className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        slotDuration="00:15:00"
        slotLabelInterval={{ hours: 1 }}
        events={[
          { title: 'Workout 1', start: '2022-04-05T08:00:00', end: '2022-04-05T09:00:00' },
          { title: 'Workout 2', start: '2022-04-05T10:00:00', end: '2022-04-05T11:00:00' },
          { title: 'Workout 3', start: '2022-04-05T12:00:00', end: '2022-04-05T13:00:00' },
        ]}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />
       
      {showEventModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg" ref={eventModalRef}>
            <h2 className="text-xl font-bold mb-4">Add Event</h2>
            <button className="absolute top-4 right-4 text-gray-500" onClick={handleEventModalClose}>Close</button>
          </div>
        </div>
      )}
      
    </div>
    
  );
};

export default WorkoutSchedulePage;