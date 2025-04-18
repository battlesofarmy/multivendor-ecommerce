// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import { AiOutlineArrowRight } from "react-icons/ai";

// const AllOrders = () => {
//   // const { orders, isLoading } = useSelector((state) => state.order);
//   const { isLoading } = useSelector((state) => state.order);
//   // const { seller } = useSelector((state) => state.seller);

//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(getAllOrdersOfShop(seller?._id));
//   // }, [dispatch]);

//   const seller = {
//     _id: "seller123",
//   };

//   const orders = [
//     { _id: "order1", status: "Delivered", totalPrice: 150, cart: [{ qty: 1 }, { qty: 2 }] },
//     { _id: "order2", status: "Pending", totalPrice: 200, cart: [{ qty: 3 }, { qty: 1 }] },
//     { _id: "order3", status: "Delivered", totalPrice: 100, cart: [{ qty: 2 }] },
//   ]

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },

//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   orders &&
//     orders.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item.cart.length,
//         total: "US$ " + item.totalPrice,
//         status: item.status,
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

// export default AllOrders;





import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Loader from "../Layout/Loader";

const AllOrders = () => {
  // Example fixed data for seller and orders
  const seller = {
    _id: "seller123",
  };

  const orders = [
    { _id: "order1", status: "Delivered", totalPrice: 150, cart: [{ qty: 1 }, { qty: 2 }] },
    { _id: "order2", status: "Pending", totalPrice: 200, cart: [{ qty: 3 }, { qty: 1 }] },
    { _id: "order3", status: "Delivered", totalPrice: 100, cart: [{ qty: 2 }] },
  ];

  const isLoading = false; // Set to false as we're not fetching from an API

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <Button>
              <AiOutlineArrowRight size={20} />
            </Button>
          </Link>
        );
      },
    },
  ];

  const row = orders.map((item) => ({
    id: item._id,
    itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
    total: "US$ " + item.totalPrice,
    status: item.status,
  }));

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;
