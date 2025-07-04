import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/api/orders/')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/api/order-items/')
      .then(response => {
        setOrderItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Ecommerce Website</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.customer_name}</li>
        ))}
      </ul>
      <h2>Order Items</h2>
      <ul>
        {orderItems.map(orderItem => (
          <li key={orderItem.id}>{orderItem.product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;