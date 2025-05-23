// import { Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid"
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {  AiOutlineEye } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { server } from "../../server";

// const AllEvents = () => {
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//    axios.get(`${server}/event/admin-all-events`, {withCredentials: true}).then((res) =>{
//     setEvents(res.data.events);
//    })
//   }, []);

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
//           <>
//             <Link to={`/product/${params.id}?isEvent=true`}>
//               <Button>
//                 <AiOutlineEye size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   events &&
//     events.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "US$ " + item.discountPrice,
//         Stock: item.stock,
//         sold: item.sold_out,
//       });
//     });

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

// export default AllEvents;



import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import api from '../../utils/axiosCongif'

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(()=>{
    api.get("/event")
    .then((res)=> {
      setEvents(res.data);
      console.log(res.data);
    })
    .catch((err)=> console.log(err))
  },[])

  const handleDelete = (id) => {
    const filtered = events.filter((item) => item._id !== id);
    setEvents(filtered);
    api.delete(`/event/${id}`)
    .then(()=> console.log("event deleted"))
    .catch((err)=> console.log(err))
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 50,
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
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/events/${params.id}`}>
            <Button>
              <AiOutlineEye size={20} />
            </Button>
          </Link>
        );
      },
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

  const rows = events.map((item) => ({
    id: item._id,
    name: item.name,
    image: item.images[0].url,
    price: "US$ " + item.discountPrice,
    Stock: item.stock,
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

export default AllEvents;
