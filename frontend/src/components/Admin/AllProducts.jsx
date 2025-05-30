// // import React, { useEffect } from "react";
// // import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Link } from "react-router-dom";
// // import { getAllProductsShop } from "../../redux/actions/product";
// // import { deleteProduct } from "../../redux/actions/product";
// // import Loader from "../Layout/Loader";
// // import axios from "axios";
// // import { server } from "../../server";
// // import { useState } from "react";

// // const AllProducts = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get(`${server}/product/admin-all-products`, {withCredentials: true}).then((res) => {
// //         setData(res.data.products);
// //     })
// //   }, []);

// //   const columns = [
// //     { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
// //     {
// //       field: "name",
// //       headerName: "Name",
// //       minWidth: 180,
// //       flex: 1.4,
// //     },
// //     {
// //       field: "price",
// //       headerName: "Price",
// //       minWidth: 100,
// //       flex: 0.6,
// //     },
// //     {
// //       field: "Stock",
// //       headerName: "Stock",
// //       type: "number",
// //       minWidth: 80,
// //       flex: 0.5,
// //     },

// //     {
// //       field: "sold",
// //       headerName: "Sold out",
// //       type: "number",
// //       minWidth: 130,
// //       flex: 0.6,
// //     },
// //     {
// //       field: "Preview",
// //       flex: 0.8,
// //       minWidth: 100,
// //       headerName: "",
// //       type: "number",
// //       sortable: false,
// //       renderCell: (params) => {
// //         return (
// //           <>
// //             <Link to={`/product/${params.id}`}>
// //               <Button>
// //                 <AiOutlineEye size={20} />
// //               </Button>
// //             </Link>
// //           </>
// //         );
// //       },
// //     },
// //   ];

// //   const row = [];

// //   data &&
// //   data.forEach((item) => {
// //       row.push({
// //         id: item?._id,
// //         name: item.name,
// //         price: "US$ " + item.discountPrice,
// //         Stock: item.stock,
// //         sold: item?.sold_out,
// //       });
// //     });

// //   return (
// //     <>
// //         <div className="w-full mx-8 pt-1 mt-10 bg-white">
// //           <DataGrid
// //             rows={row}
// //             columns={columns}
// //             pageSize={10}
// //             disableSelectionOnClick
// //             autoHeight
// //           />
// //         </div>
// //     </>
// //   );
// // };

// // export default AllProducts;



// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import React from "react";
// import { AiOutlineEye } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const AllProducts = () => {
//   const products = [
//     {
//       _id: "prod1",
//       name: "Wireless Headphones",
//       discountPrice: 59.99,
//       stock: 25,
//       sold_out: 10,
//     },
//     {
//       _id: "prod2",
//       name: "Smartwatch Pro",
//       discountPrice: 129.99,
//       stock: 40,
//       sold_out: 20,
//     },
//     {
//       _id: "prod3",
//       name: "Gaming Mouse",
//       discountPrice: 39.99,
//       stock: 100,
//       sold_out: 35,
//     },
//   ];

//   const columns = [
//     { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
//     {
//       field: "name",
//       headerName: "Name",
//       minWidth: 180,
//       flex: 1.4,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       minWidth: 100,
//       flex: 0.6,
//     },
//     {
//       field: "Stock",
//       headerName: "Stock",
//       type: "number",
//       minWidth: 80,
//       flex: 0.5,
//     },
//     {
//       field: "sold",
//       headerName: "Sold out",
//       type: "number",
//       minWidth: 130,
//       flex: 0.6,
//     },
//     {
//       field: "Preview",
//       flex: 0.8,
//       minWidth: 100,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <Link to={`/product/${params.id}`}>
//             <Button>
//               <AiOutlineEye size={20} />
//             </Button>
//           </Link>
//         );
//       },
//     },
//   ];

//   const row = products.map((item) => ({
//     id: item._id,
//     name: item.name,
//     price: "US$ " + item.discountPrice,
//     Stock: item.stock,
//     sold: item.sold_out,
//   }));

//   return (
//     <div className="w-full mx-8 pt-1 mt-10 bg-white">
//       <DataGrid
//         rows={row}
//         columns={columns}
//         pageSize={10}
//         disableSelectionOnClick
//         autoHeight
//       />
//     </div>
//   );
// };

// export default AllProducts;



import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from "../../utils/axiosCongif";

const AllProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    api.get('/products')
    .then((res)=>{
      setProducts(res.data)
    })
    .catch((err)=> console.log(err))
  },[])

  const handleDelete = (id) => {
    const filtered = products?.filter((item) => item._id !== id);
    setProducts(filtered);
    api.delete(`/products/${id}`)
  };
 
  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 50, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 140,
      flex: 1.4,
    },{
        field: "image",
        headerName: "Image",
        minWidth: 100,
        flex: 0.6,
        sortable: false,
        renderCell: (params) => (
          <img
            src={params.value}
            alt="product"
            style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "8px" }}
          />
        ),
      },{
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },{
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      sortable: false,
      renderCell: (params) => (
        <Link to={`/product/${params.id}`}>
          <Button>
            <AiOutlineEye size={20} />
          </Button>
        </Link>
      ),
    },
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

  const rows = products?.map((item) => ({
    id: item._id,
    name: item.name,
    image: item.images?.[0]?.url || "",
    price: "US$ " + item.discountPrice,
    Stock: item.stock,
    sold: item.soldOut,
  }));

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default AllProducts;