// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { RxCross1 } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "../../styles/styles";
// import Loader from "../Layout/Loader";
// import { server } from "../../server";
// import { toast } from "react-toastify";

// const AllCoupons = () => {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [coupouns,setCoupouns] = useState([]);
//   const [minAmount, setMinAmout] = useState(null);
//   const [maxAmount, setMaxAmount] = useState(null);
//   const [selectedProducts, setSelectedProducts] = useState(null);
//   const [value, setValue] = useState(null);
//   const { seller } = useSelector((state) => state.seller);
//   const { products } = useSelector((state) => state.products);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     setIsLoading(true);
//     axios
//       .get(`${server}/coupon/get-coupon/${seller._id}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         setIsLoading(false);
//         setCoupouns(res.data.couponCodes);
//       })
//       .catch((error) => {
//         setIsLoading(false);
//       });
//   }, [dispatch]);

//   const handleDelete = async (id) => {
//     axios.delete(`${server}/coupon/delete-coupon/${id}`,{withCredentials: true}).then((res) => {
//       toast.success("Coupon code deleted succesfully!")
//     })
//     window.location.reload();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios
//       .post(
//         `${server}/coupon/create-coupon-code`,
//         {
//           name,
//           minAmount,
//           maxAmount,
//           selectedProducts,
//           value,
//           shopId: seller._id,
//         },
//         { withCredentials: true }
//       )
//       .then((res) => {
//        toast.success("Coupon code created successfully!");
//        setOpen(false);
//        window.location.reload();
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   const columns = [
//     { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Coupon Code",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Value",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "Delete",
//       flex: 0.8,
//       minWidth: 120,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Button onClick={() => handleDelete(params.id)}>
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   coupouns &&
//   coupouns.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: item.value + " %",
//         sold: 10,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <div className="w-full flex justify-end">
//             <div
//               className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[5px] mr-3 mb-3`}
//               onClick={() => setOpen(true)}
//             >
//               <span className="text-white">Create Coupon Code</span>
//             </div>
//           </div>
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//           {open && (
//             <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[20000] flex items-center justify-center">
//               <div className="w-[90%] 800px:w-[40%] h-[80vh] bg-white rounded-md shadow p-4">
//                 <div className="w-full flex justify-end">
//                   <RxCross1
//                     size={30}
//                     className="cursor-pointer"
//                     onClick={() => setOpen(false)}
//                   />
//                 </div>
//                 <h5 className="text-[30px] font-Poppins text-center">
//                   Create Coupon code
//                 </h5>
//                 {/* create coupoun code */}
//                 <form onSubmit={handleSubmit} aria-required={true}>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={name}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Enter your coupon code name..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">
//                       Discount Percentenge{" "}
//                       <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="value"
//                       value={value}
//                       required
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setValue(e.target.value)}
//                       placeholder="Enter your coupon code value..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Min Amount</label>
//                     <input
//                       type="number"
//                       name="value"
//                       value={minAmount}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setMinAmout(e.target.value)}
//                       placeholder="Enter your coupon code min amount..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Max Amount</label>
//                     <input
//                       type="number"
//                       name="value"
//                       value={maxAmount}
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                       onChange={(e) => setMaxAmount(e.target.value)}
//                       placeholder="Enter your coupon code max amount..."
//                     />
//                   </div>
//                   <br />
//                   <div>
//                     <label className="pb-2">Selected Product</label>
//                     <select
//                       className="w-full mt-2 border h-[35px] rounded-[5px]"
//                       value={selectedProducts}
//                       onChange={(e) => setSelectedProducts(e.target.value)}
//                     >
//                       <option value="Choose your selected products">
//                         Choose a selected product
//                       </option>
//                       {products &&
//                         products.map((i) => (
//                           <option value={i.name} key={i.name}>
//                             {i.name}
//                           </option>
//                         ))}
//                     </select>
//                   </div>
//                   <br />
//                   <div>
//                     <input
//                       type="submit"
//                       value="Create"
//                       className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllCoupons;




import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { toast } from "react-toastify";
import api from "../../utils/axiosCongif";

const AllCoupons = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [minAmount, setMinAmount] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);

  const [coupons, setCoupons] = useState([]);

  useEffect(()=>{
    api.get('/cupon')
    .then((res)=>{
      setCoupons(res.data);
      console.log(res.data);
    })
    .catch((err)=> console.log(err))
  },[])


  const sampleProducts = [
    { _id: "p1", name: "iPhone 15" },
    { _id: "p2", name: "Macbook Air" },
    { _id: "p3", name: "AirPods Pro" },
  ];

  const handleDelete = (id) => {
    setCoupons((prev) => prev.filter((item) => item._id !== id));
    toast.success("Coupon deleted!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCoupon = {
      _id: Date.now().toString(),
      name,
      value: Number(value),
    };
    setCoupons((prev) => [...prev, newCoupon]);

    api.post('/cupon', newCoupon)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=> console.log(err))


    toast.success("Coupon created!");
    setOpen(false);
    setName("");
    setValue(null);
    setMinAmount(null);
    setMaxAmount(null);
    setSelectedProducts(null);
  };

  const columns = [
    { field: "id", headerName: "Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Coupon Code", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Value", minWidth: 100, flex: 0.6 },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      sortable: false,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.id)}>
          <AiOutlineDelete size={20} />
        </Button>
      ),
    },
  ];

  const rows = coupons.map((item) => ({
    id: item._id,
    name: item.name,
    price: `${item.value} %`,
  }));

  return (
    <>
      <div className="w-full mx-8 pt-1 mt-10 bg-white">
        <div className="w-full flex justify-end">
          <div
            className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[5px] mr-3 mb-3`}
            onClick={() => setOpen(true)}
          >
            <span className="text-white">Create Coupon Code</span>
          </div>
        </div>

        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />

        {open && (
          <div className="fixed top-0 left-0 w-full h-screen bg-[#00000062] z-[20000] flex items-center justify-center">
            <div className="w-[90%] 800px:w-[40%] h-[95vh] bg-white rounded-md shadow px-4 py-2">
              <div className="w-full flex justify-end">
                <RxCross1
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <h5 className="text-[20px] font-Poppins text-center">
                Create Coupon Code
              </h5>
              <form onSubmit={handleSubmit}>
                <br />
                <div>
                  <label className="pb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter coupon name"
                    className="mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px]"
                  />
                </div>
                <br />
                <div>
                  <label className="pb-1">
                    Discount Percentage <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={value ?? ""}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter discount percentage"
                    className="mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px]"
                  />
                </div>
                <br />
                <div>
                  <label className="pb-1">Min Amount</label>
                  <input
                    type="number"
                    value={minAmount ?? ""}
                    onChange={(e) => setMinAmount(e.target.value)}
                    placeholder="Enter minimum amount"
                    className="mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px]"
                  />
                </div>
                <br />
                <div>
                  <label className="pb-1">Max Amount</label>
                  <input
                    type="number"
                    value={maxAmount ?? ""}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    placeholder="Enter maximum amount"
                    className="mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px]"
                  />
                </div>
                <br />
                <div>
                  <label className="pb-1">Selected Product</label>
                  <select
                    value={selectedProducts ?? ""}
                    onChange={(e) => setSelectedProducts(e.target.value)}
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                  >
                    <option value="">Choose a product</option>
                    {sampleProducts.map((product) => (
                      <option value={product.name} key={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <br />
                <input
                  type="submit"
                  value="Create"
                  className="mt-2 block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] cursor-pointer"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllCoupons;
