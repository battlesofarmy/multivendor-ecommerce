// import React, { useEffect } from "react";
// import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { deleteEvent, getAllEventsShop } from "../../redux/actions/event";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { deleteProduct } from "../../redux/actions/product";
// import Loader from "../Layout/Loader";

// const AllEvents = () => {
//   const { events, isLoading } = useSelector((state) => state.events);
//   const { seller } = useSelector((state) => state.seller);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllEventsShop(seller._id));
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteEvent(id));
//     window.location.reload();
//   }

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
//         const d = params.row.name;
//         const product_name = d.replace(/\s+/g, "-");
//         return (
//           <>
//             <Link to={`/product/${product_name}`}>
//               <Button>
//                 <AiOutlineEye size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
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
//             <Button
//             onClick={() => handleDelete(params.id)}
//             >
//               <AiOutlineDelete size={20} />
//             </Button>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   events &&
//   events.forEach((item) => {
//       row.push({
//         id: item._id,
//         name: item.name,
//         price: "US$ " + item.discountPrice,
//         Stock: item.stock,
//         sold: item.sold_out,
//       });
//     });

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       )}
//     </>
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
  // const [events, setEvents] = useState([
  //   {
  //     _id: "event1",
  //     name: "Summer Electronics Sale",
  //     discountPrice: 79.99,
  //     stock: 50,
  //     sold_out: 22,
  //   },
  //   {
  //     _id: "event2",
  //     name: "Black Friday Tech",
  //     discountPrice: 199.99,
  //     stock: 30,
  //     sold_out: 18,
  //   },
  //   {
  //     _id: "event3",
  //     name: "Winter Gadget Fair",
  //     discountPrice: 99.99,
  //     stock: 70,
  //     sold_out: 35,
  //   },
  // ]);

  const handleDelete = (id) => {
    const filtered = events.filter((item) => item._id !== id);
    setEvents(filtered);
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
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
      renderCell: (params) => {
        const productNameSlug = params.row.name.replace(/\s+/g, "-");
        return (
          <Link to={`/product/${productNameSlug}`}>
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
    price: "US$ " + item.discountPrice,
    Stock: item.stock,
    sold: item.sold_out,
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
