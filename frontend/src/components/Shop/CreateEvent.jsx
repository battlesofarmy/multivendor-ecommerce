import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { categoriesData } from "../../static/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import api from "../../utils/axiosCongif";

const CreateEvent = () => {
      const { user } = useSelector((state)=> state.auth);
    
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    api.get(`/user/${user?.uid}`)
    .then((res)=> {
      setUserData(res.data);
      console.log(res.data)
    })
    .catch((err)=> console.log(err))
  },[user])

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]
    : "";

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
  };

  const handleStartDateChange = (e) => {
    setStartDate(new Date(e.target.value));
    setEndDate(null);
  };

  const handleEndDateChange = (e) => {
    setEndDate(new Date(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length < 1) return toast.error("Please upload at least one image");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("originalPrice", originalPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("stock", stock);
    formData.append("shop", JSON.stringify({
      name: userData?.shop?.name,
      description: userData?.shop?.description || "best shop",  // <- Add this line
      shopId: userData?.uid,
      avatar: {
        url: userData?.shop?.avatar || "",
      },
    }));

    formData.append("startDate", startDate?.toISOString());
    formData.append("finishDate", endDate?.toISOString());

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      setLoading(true);
      // const res = await fetch("https://multivendor-ecommerce.vercel.app/events/upload", {
      const res = await fetch("http://localhost:5000/events/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      toast.success("Event created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Event</h5>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={name} required onChange={(e) => setName(e.target.value)} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product name..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Description <span className="text-red-500">*</span></label>
          <textarea cols="30" rows="8" type="text" name="description" value={description} required onChange={(e) => setDescription(e.target.value)} className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product description..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Category <span className="text-red-500">*</span></label>
          <select className="w-full mt-2 border h-[35px] rounded-[5px]" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Choose a category">Choose a category</option>
            {categoriesData.map((i) => (
              <option value={i.title} key={i.title}>{i.title}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product tags..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input type="number" name="price" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product price..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Price (With Discount) <span className="text-red-500">*</span></label>
          <input type="number" name="price" value={discountPrice} required onChange={(e) => setDiscountPrice(e.target.value)} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product price with discount..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Product stock <span className="text-red-500">*</span></label>
          <input type="number" name="price" value={stock} required onChange={(e) => setStock(e.target.value)} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your event product stock..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Event Start Date <span className="text-red-500">*</span></label>
          <input type="date" name="startDate" id="start-date" className="appearance-none mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" min={today} onChange={handleStartDateChange} />
        </div>
        <br />
        <div>
          <label className="pb-2">Event End Date <span className="text-red-500">*</span></label>
          <input type="date" name="end_date" id="end-date" className="appearance-none mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" min={minEndDate} onChange={handleEndDateChange} />
        </div>
        <br />
        <div>
          <label className="pb-2">Upload Images <span className="text-red-500">*</span></label>
          <input type="file" name="" id="upload" className="hidden" multiple onChange={handleImageChange} />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {preview.map((src, index) => (
              <img key={index} src={src} alt="" className="h-[120px] w-[120px] object-cover m-2 border" />
            ))}
          </div>
        </div>
        <br />
        <div>
          <input type="submit" value={loading ? "Creating..." : "Create"} disabled={loading} className="mt-2 cursor-pointer appearance-none block w-full px-3 h-[35px] border border-gray-300 bg-blue-600 text-white rounded-[3px] focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
