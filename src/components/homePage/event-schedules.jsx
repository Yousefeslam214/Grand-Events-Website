import React, { useState } from "react";
import HeadPage from "./HeadPage";

const whyUsData = [
  {
    icon: "map",
    head: "Wst. Conference Center",
    description: "San Francisco, CA",
  },
  {
    icon: "timer",
    head: "San Francisco, CA",
    description: "09:00 AM – 05:00 PM",
  },
  {
    icon: "users",
    head: "Event Schedule",
    description: "Hurryup! few tickets are left",
  },
  {
    icon: "coffee-cup",
    head: "Free Lunch & Snacks",
    description: "Don’t miss it",
  },
];

const eventsData = {
  monday: {
    date: "14 February",
    events: [
      {
        time: "10am - 12:30pm",
        title: "Web Design Principles",
        speaker: "David Warner",
        description:
          "Learn modern web design techniques and best practices for creating responsive websites.",
        location: "Hall 1, Building A, Golden Street, South Africa",
      },
      {
        time: "2pm - 4:30pm",
        title: "UX/UI Workshop",
        speaker: "Sarah Johnson",
        description:
          "Hands-on workshop for improving user experience and interface design skills.",
        location: "Room 302, Design Center",
      },
    ],
  },
  wednesday: {
    date: "16 February",
    events: [
      {
        time: "1pm - 3:30pm",
        title: "Backend Architecture",
        speaker: "Emma Rodriguez",
        description: "Design patterns for building scalable backend systems.",
        location: "Conference Room B",
      },
    ],
  },
  friday: {
    date: "18 February",
    events: [], // No events on Friday
  },
};

const Schedules = () => {
  const [activeDay, setActiveDay] = useState("monday");

  return (
    <section className="bg-[#f4f4f4]">
      <div className="w-full bg-[#ea1e63] pt-10 pb-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {whyUsData.map((item, index) => (
            <WhyUsBox
              key={index}
              icon={item.icon}
              head={item.head}
              description={item.description}
              num={item.num}
            />
          ))}
        </div>
      </div>
      <HeadPage
        content="Event Schedules"
        second="Join the Global Grand Event on Digital Design and Innovation"
      />
      <EventBox activeDay={activeDay} setActiveDay={setActiveDay} />
    </section>
  );
};

const WhyUsBox = ({ icon, head, description, num }) => {
  return (
    <div
      className="
         p-8 rounded-lg text-center 
        transition-all 
      ">
      <div className="icon mb-4 text-5xl text-white">
        <i className={`lni lni-${icon}  black black-color `}></i>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{head}</h3>
      <p className="text-white text-sm mb-2">{description}</p>
      {num && <p className="text-md font-bold text-white">{num}</p>}
    </div>
  );
};

const EventBox = ({ activeDay, setActiveDay }) => {
  // const [activeDay, setActiveDay] = useState("monday");

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col gap-6 md:flex-row lg:flex-row">
      {/* Day Navigation */}
      <div
        className="flex flex-wrap
               flex-col
      mb-8 md:mb-0 md:w-1/4 lg:w-1/4">
        {Object.entries(eventsData).map(([dayKey, dayData]) => (
          <>
            <button
              key={dayKey}
              onClick={() => setActiveDay(dayKey)}
              className={`
                min-w-[200px] min-h-[60] h-[75]
                px-6 py-3 font-medium transition-colors 
                duration-200 ease-in-out
                
                ${
                  activeDay === dayKey
                    ? "bg-[#ea1e63] text-white"
                    : "bg-white text-black hover:bg-[#ea1e63] hover:text-white"
                }
            `}>
              <div className="text-sm uppercase transition-colors duration-500 ease-in-out">
                {dayKey.toUpperCase()}
              </div>
              <div className="text-xs transition-colors duration-500 ease-in-out">
                {dayData.date}
              </div>
            </button>
          </>
        ))}
      </div>
      {/* Events Display */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-3/4 lg:w-3/4">
        {eventsData[activeDay].events.length > 0 ? (
          eventsData[activeDay].events.map((event, index) => (
            <div
              key={index}
              className="p-6 border-b border-gray-400 last:border-b-0 ">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
                <div className="w-full md:w-1/4">
                  <div className="text-[#ea1e63] font-medium">{event.time}</div>
                  <div className="text-sm text-gray-500">
                    {eventsData[activeDay].date}
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {event.title}
                  </h3>
                  <div className="ml-1.5">
                    <p className="text-gray-600 font-medium">{event.speaker}</p>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                    <div className="ml-1.5">
                      <p className="text-sm text-gray-500 mt-3 ">
                        <span className="font-medium">Location:</span>{" "}
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No events scheduled for this day
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedules;
