import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../utils/axiosCongif";
import { toast } from "react-toastify";



const ProductUploadForm = ({ shopId }) => {
  const [shopName, setShopName] = useState([]);
  const [shopAvatar, setShopAvatar] = useState([]);

  useEffect(()=>{
     api.get(`/user/${shopId}`)
    .then((res)=> {
      setShopName(res.data.shop.name);
      setShopAvatar(res.data.shop.avatar)
    })
    .catch((err)=> console.log(err));

  },[])

  

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
    ratings: "",
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreview(files.map((f) => URL.createObjectURL(f)));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length !== 2) return alert("Upload exactly 2 images");

    setSubmitting(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));
    
    const shopData =  {
      "name": shopName,
      "shopId": shopId,
      "avatar": {
        "url": shopAvatar
      },
      "description": "Best Shop in the world"
    }   
    formData.append("shop", JSON.stringify(shopData)); 
    // formData.append("shop", shopData); 
    images.forEach((img) => formData.append("images", img));
    
    console.log(shopData); 
    try {
      // const res = await fetch("http://localhost:5000/products/upload", {
      const res = await fetch("https://multivendor-ecommerce.vercel.app/products/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
        toast.success("Product Added Successfully");
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p- bg-white shadow-md rounded space-y-"
    >
      <h2 className="text-xl font-bold">Upload Product</h2>
      {["name", "category", "description", "originalPrice", "discountPrice", "stock", "ratings"].map((field) => (
        <div key={field}>
          <label className="block font-medium capitalize">{field}</label>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full border rounded"
            required
          />
        </div>
      ))}
      <div>
        <label className="block font-medium">Upload 2 Images</label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} required />
        <div className="flex gap-2 ">
          {preview.map((src, idx) => (
            <img key={idx} src={src} alt="preview" className="w-24 h-12 object-cover rounded" />
          ))}
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        {submitting ? "Uploading..." : "Upload Product"}
      </button>
    </form>
  );
};

export default ProductUploadForm;
