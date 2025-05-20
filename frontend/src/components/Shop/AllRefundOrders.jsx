import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllRefundOrders = () => {
  // Hardcoded orders data
  const orders = [
    {
      _id: "1",
      status: "Processing refund",
      cart: [{}, {}, {}],
      totalPrice: 100,
    },
    {
      _id: "2",
      status: "Refund Success",
      cart: [{}],
      totalPrice: 50,
    },
    {
      _id: "3",
      status: "Refund Success", // This one will be filtered out
      cart: [{}, {}],
      totalPrice: 75,
    },
    {
      _id: "4",
      status: "Refund Success", // This one will be filtered out
      cart: [{}, {}],
      totalPrice: 75,
    },{
      _id: "5",
      status: "Processing refund",
      cart: [{}, {}, {}, {}, {}],
      totalPrice: 100,
    }
  ];

  const isLoading = false;

  const refundOrders = orders.filter(
    (item) =>
      item.status === "Processing refund" || item.status === "Refund Success"
  );

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.value === "Delivered" ? "greenColor" : "redColor";
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

  const row = [];

  refundOrders.forEach((item) => {
    row.push({
      id: item._id,
      itemsQty: item.cart.length,
      total: "US$ " + item.totalPrice,
      status: item.status,
    });
  });

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
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

export default AllRefundOrders;
