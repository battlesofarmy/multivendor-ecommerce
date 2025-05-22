import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Loader from "../Layout/Loader";
import api from "../../utils/axiosCongif";

const AllOrders = () => {

  // const orders = [
  //   { _id: "order1", status: "Delivered", totalPrice: 150, cart: [{ qty: 1 }, { qty: 2 }] },
  //   { _id: "order2", status: "Pending", totalPrice: 200, cart: [{ qty: 3 }, { qty: 1 }] },
  //   { _id: "order3", status: "Delivered", totalPrice: 100, cart: [{ qty: 2 }] },
  // ];
  const [orders, setOrders] = useState([]);
  
  useEffect(()=>{
    api.get('/order')
    .then((res)=> {
      setOrders(res.data);
    })
    .catch((err)=> console.log(err))
  },[])

  const isLoading = false; // Set to false as we're not fetching from an API

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 80,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 50,
      flex: 0.3,
    },
    {
      field: "address",
      headerName: "Shipping Address",
      type: "string",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 100,
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

  const row = orders?.map((item) => ({
    id: item._id,
    itemsQty: item.cart.reduce((acc, item) => acc + item.count, 0),
    total: "US$ " + item.totalPrice,
    status: item.status,
    address: item.address.address1,
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
