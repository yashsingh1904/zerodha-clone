import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchOrders = () => {
      axios
        .get("https://zerodha-clone-xwf0.onrender.com/allOrders", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setAllOrder(res.data))
        .catch((err) => {
          console.error("Orders fetch error:", err);
          if (err.response?.status === 401 || err.response?.status === 400) {
            window.location.href = "http://localhost:3001/login";
          }
        });
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orders">
      {allOrder.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrder.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrder.map((order, index) => (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>
                      <span className={order.mode === "BUY" ? "buy-tag" : "sell-tag"}>
                        {order.mode}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;