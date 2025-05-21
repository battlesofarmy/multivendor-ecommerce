// import React, { useEffect } from "react";
// import AdminHeader from "../components/Layout/AdminHeader";
// import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
// import { DataGrid } from "@mui/x-data-grid";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfAdmin } from "../redux/actions/order";

// const AdminDashboardOrders = () => {
//   const dispatch = useDispatch();

//   const { adminOrders, adminOrderLoading } = useSelector(
//     (state) => state.order
//   );

//   useEffect(() => {
//     dispatch(getAllOrdersOfAdmin());
//   }, []);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.row.status === "Delivered" ? "greenColor" : "redColor";
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
//         field: "createdAt",
//         headerName: "Order Date",
//         type: "number",
//         minWidth: 130,
//         flex: 0.8,
//       },
//   ];

//   const row = [];
//   adminOrders &&
//     adminOrders?.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
//         total: item?.totalPrice + " $",
//         status: item?.status,
//         createdAt: item?.createdAt.slice(0,10),
//       });
//     });
//   return (
//     <div>
//       <AdminHeader />
//       <div className="w-full flex">
//         <div className="flex items-start justify-between w-full">
//           <div className="w-[80px] 800px:w-[330px]">
//             <AdminSideBar active={2} />
//           </div>

//           <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
//             <div className="w-[97%] flex justify-center">
//               <DataGrid
//                 rows={row}
//                 columns={columns}
//                 pageSize={4}
//                 disableSelectionOnClick
//                 autoHeight
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardOrders;



import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import { DataGrid } from "@mui/x-data-grid";

// Static dummy order data
const staticOrders = [
  {
    _id: "order001",
    cart: [{ qty: 2 }, { qty: 1 }],
    totalPrice: 100,
    status: "Delivered",
    createdAt: "2025-05-18T10:00:00Z",
  },
  {
    _id: "order002",
    cart: [{ qty: 1 }],
    totalPrice: 50,
    status: "Processing",
    createdAt: "2025-05-17T15:30:00Z",
  },
  {
    _id: "order003",
    cart: [{ qty: 3 }, { qty: 2 }],
    totalPrice: 200,
    status: "Delivered",
    createdAt: "2025-05-16T12:45:00Z",
  },
];

const AdminDashboardOrders = () => {
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) =>
        params.row.status === "Delivered" ? "greenColor" : "redColor",
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
      field: "createdAt",
      headerName: "Order Date",
      type: "string",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const rows = staticOrders.map((item) => ({
    id: item._id,
    itemsQty: item.cart.reduce((acc, cur) => acc + cur.qty, 0),
    total: item.totalPrice + " $",
    status: item.status,
    createdAt: item.createdAt.slice(0, 10),
  }));

  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={2} />
          </div>
          <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
            <div className="w-[97%] flex justify-center">
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardOrders;
