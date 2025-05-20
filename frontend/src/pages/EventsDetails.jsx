import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/axiosCongif';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const SingleEventPage = () => {
      const params = useParams();
    console.log(params.id);
    const [event, setEvent] = useState();
    useEffect(()=>{
        api.get(`/event/${params.id}`)
        .then((res)=> setEvent(res.data))
        .catch((err)=> console.log(err))
    },[params.id])

      // Prevent crash on initial render
  if (!event) return <div className="text-center p-10">Loading event details...</div>;


  const {
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    images,
    startDate,
    finishDate,
    shop,
  } = event;

  return (
    <>
        <Header/>
        <div className="max-w-6xl mx-auto p-4">
            {/* Event Header */}
            <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md p-6">
                {/* Left: Image */}
                <div className="w-full md:w-1/2">
                <img
                    src={images?.[0]?.url}
                    alt={name}
                    className="rounded-xl object-cover w-full max-h-[400px]"
                />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-gray-600">{description}</p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Tags:</span> {tags}
                </p>

                <div className="flex items-center gap-4 mt-4">
                    <span className="text-lg font-semibold text-green-600">
                    US$ {discountPrice}
                    </span>
                    <span className="text-sm line-through text-gray-400">
                    US$ {originalPrice}
                    </span>
                </div>

                <p className="text-sm mt-2">
                    <span className="font-semibold">Stock:</span> {stock}
                </p>

                <div className="text-sm text-gray-500">
                    <p>
                    <span className="font-semibold">Start:</span>{" "}
                    {new Date(startDate).toLocaleDateString()}
                    </p>
                    <p>
                    <span className="font-semibold">End:</span>{" "}
                    {new Date(finishDate).toLocaleDateString()}
                    </p>
                </div>
                </div>
            </div>

            {/* Shop Info */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-md flex items-center gap-6">
                <img
                src={shop.avatar.url}
                alt={shop.name}
                className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                <h2 className="text-xl font-semibold">{shop.name}</h2>
                <p className="text-sm text-gray-600">{shop.description}</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default SingleEventPage;
