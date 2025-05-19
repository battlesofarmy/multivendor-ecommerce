// import React, { useState } from "react";

// const ProductUploadForm = ({ shopId }) => {
//   const [form, setForm] = useState({
//     name: "",
//     category: "",
//     description: "",
//     originalPrice: "",
//     discountPrice: "",
//     stock: "",
//     ratings: "",
//   });

//   const [images, setImages] = useState([]);
//   const [preview, setPreview] = useState([]);
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);

//     const previews = files.map((file) => URL.createObjectURL(file));
//     setPreview(previews);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (images.length !== 2) {
//       alert("Please upload exactly 2 images.");
//       return;
//     }

//     setSubmitting(true);

//     const formData = new FormData();
//     formData.append("name", form.name);
//     formData.append("category", form.category);
//     formData.append("description", form.description);
//     formData.append("originalPrice", form.originalPrice);
//     formData.append("discountPrice", form.discountPrice);
//     formData.append("stock", form.stock);
//     formData.append("ratings", form.ratings);
//     formData.append("shopId", shopId);

//     images.forEach((img) => formData.append("images", img));

//     try {
//       const res = await fetch("http://localhost:5000/products", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       alert("Product uploaded successfully!");
//       console.log(data);
//     } catch (error) {
//       alert("Upload failed.");
//       console.error(error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-"
//     >
//       <h2 className="text-lg font-bold">Upload New Product</h2>

//       {["name", "category", "description", "originalPrice", "discountPrice", "stock", "ratings"].map((field) => (
//         <div key={field}>
//           <label className="block font-medium capitalize">{field}</label>
//           <input
//             type={field === "description" ? "textarea" : "text"}
//             name={field}
//             value={form[field]}
//             onChange={handleChange}
//             className="w-full border rounded-md"
//             required
//           />
//         </div>
//       ))}

//       <div>
//         <label className="block font-medium">Images (2 required)</label>
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageChange}
//           className="w-full"
//           required
//         />
//         <div className="flex gap-4 mt-2">
//           {preview.map((src, i) => (
//             <img key={i} src={src} alt={`Preview ${i + 1}`} className="w-24 h-12 object-cover rounded-md" />
//           ))}
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={submitting}
//         className="px-6  bg-blue-600 text-white rounded-md hover:bg-blue-700"
//       >
//         {submitting ? "Uploading..." : "Upload Product"}
//       </button>
//     </form>
//   );
// };

// export default ProductUploadForm;



import React, { useState } from "react";
import { useSelector } from "react-redux";


const ProductUploadForm = ({ shopId }) => {
  const user = useSelector((state)=> state.auth);
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
    formData.append("shopId", user?.uid);
    const shopData =  {
      "name": "Yeasir Store",
      "avatar": {
        "url": "https://avatars.githubusercontent.com/u/155252694?v=4"
      },
      "description": "Selling high-tech electronics since 2020."
    }    
    formData.append("shop",shopData);
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch("http://localhost:5000/products/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("Product uploaded successfully!");
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
