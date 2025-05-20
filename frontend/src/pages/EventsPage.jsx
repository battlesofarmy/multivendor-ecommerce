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
import Footer from "../components/Layout/Footer";

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
      images: [{ url: "https://qs8tu1vnt8dcwhac.public.blob.vercel-storage.com/product-1747700198777-Huawei-Nova-14-Pro-Blue.webp" }],
      startDate: "2025-04-15T00:00:00Z",
      endDate: "2025-04-16T00:00:00Z"
    },{
      _id: "evt-123",
      name: "Mega Discount Flash Sale",
      description: "Get the best products at half price for 24 hours only!",
      originalPrice: 200,
      discountPrice: 100,
      sold_out: 35,
      stock: 100,
      images: [{ url: "https://qs8tu1vnt8dcwhac.public.blob.vercel-storage.com/product-1747700198777-Huawei-Nova-14-Pro-Blue.webp" }],
      startDate: "2025-04-15T00:00:00Z",
      endDate: "2025-04-16T00:00:00Z"
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
            <div className="container mx-auto">
              {
                allEvents?.map((ele)=>
                  <EventCard active={true} data={ele} />
                )
              }
            </div>
            <Footer/>
          </div>
        )}
    </>
  );
};

export default EventsPage;
