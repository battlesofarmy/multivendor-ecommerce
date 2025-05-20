import React, { useEffect, useState } from "react";
import api from "../../utils/axiosCongif";
import { toast } from "react-toastify";

const ProductUploadForm = ({ shopId }) => {
  const [shopName, setShopName] = useState("");
  const [shopAvatar, setShopAvatar] = useState("");
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
    tags: "",
    startDate: "",
    finishDate: "",
  });
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api
      .get(`/user/${shopId}`)
      .then((res) => {
        setShopName(res.data.shop.name);
        setShopAvatar(res.data.shop.avatar?.url || "");
      })
      .catch((err) => console.log(err));
  }, [shopId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length !== 2) {
      toast.error("Please upload exactly 2 images");
      return;
    }
    setImages(files);
    setPreview(files.map((f) => URL.createObjectURL(f)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length !== 2) return toast.error("Upload exactly 2 images");

    setSubmitting(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));

    const shopData = {
      name: shopName,
      shopId: shopId,
      avatar: { url: shopAvatar },
      description: "Best Shop in the world",
    };
    formData.append("shop", JSON.stringify(shopData));
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch("https://multivendor-ecommerce.vercel.app/products/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      toast.success("Product Added Successfully");
      console.log(data);
    } catch (err) {
      console.error(err);
      toast.error("Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded space-y-6 px-20 py-10">
      <h2 className="text-xl font-bold">Upload Product</h2>

      {["name", "category", "description", "originalPrice", "discountPrice", "stock", "tags"].map((field) => (
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
        <label className="block font-medium">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="w-full border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Finish Date</label>
        <input
          type="date"
          name="finishDate"
          value={form.finishDate}
          onChange={handleChange}
          className="w-full border rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium">Upload 2 Images</label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} required />
        <div className="flex gap-2 mt-2">
          {preview.map((src, idx) => (
            <img key={idx} src={src} alt="preview" className="w-24 h-12 object-cover rounded" />
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 py-2 mt-3 text-white px-4 rounded hover:bg-blue-700"
      >
        {submitting ? "Uploading..." : "Upload Product"}
      </button>
    </form>
  );
};

export default ProductUploadForm;
