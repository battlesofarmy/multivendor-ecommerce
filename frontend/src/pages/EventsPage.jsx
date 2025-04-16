// import React from "react";
// import { useSelector } from "react-redux";
// import EventCard from "../components/Events/EventCard";
// import Header from "../components/Layout/Header";
// import Loader from "../components/Layout/Loader";

// const EventsPage = () => {
//   const { allEvents, isLoading } = useSelector((state) => state.events);
//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div>
//           <Header activeHeading={4} />
//           <EventCard active={true} data={allEvents && allEvents[0]} />
//         </div>
//       )}
//     </>
//   );
// };

// export default EventsPage;



import React, { useState, useEffect } from "react";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const allEvents = [
    {
      _id: "evt-123",
      name: "Mega Discount Flash Sale",
      description: "Get the best products at half price for 24 hours only!",
      originalPrice: 200,
      discountPrice: 100,
      sold_out: 35,
      stock: 100,
      images: [{ url: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/17.jpg" }],
      startDate: "2025-04-15T00:00:00Z",
      endDate: "2025-04-16T00:00:00Z"
    },
    {
      _id: "evt-124",
      name: "Super Electronics Deal",
      description: "Latest gadgets at unbeatable prices!",
      originalPrice: 300,
      discountPrice: 150,
      sold_out: 12,
      stock: 50,
      images: [{ url: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/17.jpg" }],
      startDate: "2025-04-20T00:00:00Z",
      endDate: "2025-04-21T00:00:00Z"
    },
    {
      _id: "evt-125",
      name: "Summer Apparel Sale",
      description: "Trendy summer wear at great discounts!",
      originalPrice: 80,
      discountPrice: 40,
      sold_out: 22,
      stock: 80,
      images: [{ url: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/17.jpg" }],
      startDate: "2025-04-25T00:00:00Z",
      endDate: "2025-04-26T00:00:00Z"
    },
    {
      _id: "evt-126",
      name: "Home Essentials Bonanza",
      description: "Upgrade your home for less.",
      originalPrice: 150,
      discountPrice: 90,
      sold_out: 10,
      stock: 40,
      images: [{ url: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2021-03/17.jpg" }],
      startDate: "2025-04-30T00:00:00Z",
      endDate: "2025-05-01T00:00:00Z"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
