// import React, { useEffect, useState } from "react";
// import styles from "../../styles/styles";
// import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
// import { MdBorderClear } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfAdmin } from "../../redux/actions/order";
// import Loader from "../Layout/Loader";
// import { getAllSellers } from "../../redux/actions/sellers";

// const AdminDashboardMain = () => {
//   const dispatch = useDispatch();

//   const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
//   const { sellers } = useSelector((state) => state.seller);

//   useEffect(() => {
//     dispatch(getAllOrdersOfAdmin());
//     dispatch(getAllSellers());
//   }, []);

//    const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


//    const adminBalance = adminEarning?.toFixed(2);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.row.status === "Delivered" ? "greenColor" : "redColor";
//       }
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
//       field: "createdAt",
//       headerName: "Order Date",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },
//   ];

//   const row = [];
//   adminOrders &&
//   adminOrders.forEach((item) => {
//       row.push({
//         id: item._id,
//         itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
//         total: item?.totalPrice + " $",
//         status: item?.status,
//         createdAt: item?.createdAt.slice(0,10),
//       });
//     });

//   return (
//    <>
//     {
//       adminOrderLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full p-4">
//         <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
//         <div className="w-full block 800px:flex items-center justify-between">
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <AiOutlineMoneyCollect
//                 size={30}
//                 className="mr-2"
//                 fill="#00000085"
//               />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 Total Earning
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">$ {adminBalance}</h5>
//           </div>
  
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <MdBorderClear size={30} className="mr-2" fill="#00000085" />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 All Sellers
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{sellers && sellers.length}</h5>
//             <Link to="/admin-sellers">
//               <h5 className="pt-4 pl-2 text-[#077f9c]">View Sellers</h5>
//             </Link>
//           </div>
  
//           <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//             <div className="flex items-center">
//               <AiOutlineMoneyCollect
//                 size={30}
//                 className="mr-2"
//                 fill="#00000085"
//               />
//               <h3
//                 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//               >
//                 All Orders
//               </h3>
//             </div>
//             <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminOrders && adminOrders.length}</h5>
//             <Link to="/admin-orders">
//               <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
//             </Link>
//           </div>
//         </div>
  
//         <br />
//         <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
//         <div className="w-full min-h-[45vh] bg-white rounded">
//           <DataGrid
//             rows={row}
//             columns={columns}
//             pageSize={4}
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       </div>
//       )
//     }
//    </>
//   );
// };

// export default AdminDashboardMain;



import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../Layout/Loader";

const AdminDashboardMain = () => {
  const [loading, setLoading] = useState(true);

  // Static mock data
  const staticOrders = [
    {
      _id: "order1",
      status: "Delivered",
      totalPrice: 100,
      createdAt: "2025-05-18T10:00:00Z",
      cart: [
        { qty: 1 },
        { qty: 2 },
      ],
    },
    {
      _id: "order2",
      status: "Processing",
      totalPrice: 50,
      createdAt: "2025-05-17T10:00:00Z",
      cart: [
        { qty: 3 },
      ],
    },
  ];

  const staticSellers = [
    { id: "seller1", name: "Seller A" },
    { id: "seller2", name: "Seller B" },
    { id: "seller3", name: "Seller C" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const adminEarning = staticOrders.reduce((acc, item) => acc + item.totalPrice * 0.1, 0);
  const adminBalance = adminEarning.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
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
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = staticOrders.map((item) => ({
    id: item._id,
    itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
    total: item.totalPrice + " $",
    status: item.status,
    createdAt: item.createdAt.slice(0, 10),
  }));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full p-4">
          <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
          <div className="w-full block 800px:flex items-center justify-between">
            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <AiOutlineMoneyCollect size={30} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  Total Earning
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">$ {adminBalance}</h5>
            </div>

            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <MdBorderClear size={30} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Sellers
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{staticSellers.length}</h5>
              <Link to="/admin-sellers">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Sellers</h5>
              </Link>
            </div>

            <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
              <div className="flex items-center">
                <AiOutlineMoneyCollect size={30} className="mr-2" fill="#00000085" />
                <h3
                  className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
                >
                  All Orders
                </h3>
              </div>
              <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{staticOrders.length}</h5>
              <Link to="/admin-orders">
                <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
              </Link>
            </div>
          </div>

          <br />
          <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
          <div className="w-full min-h-[45vh] bg-white rounded">
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={4}
              disableSelectionOnClick
              autoHeight
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboardMain;
