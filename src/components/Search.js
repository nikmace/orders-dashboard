import React, { useState, useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const Search = () => {
    const [open, setOpen] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('Awaiting Authorization');
    const [orderStatus, setOrderStatus] = useState('Unfulfilled');
    const [total, setTotal] = useState('');

    const { orders, dispatch } = useContext(OrderContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ORDER', order: {
            orderId,
            name,
            city,
            paymentStatus,
            orderStatus,
            total
        }});
        console.log(paymentStatus, orderStatus)
        setOrderId('');
        setName('');
        setCity('');
        setTotal('');
    }

    return (
        <section className="search">
                <article className="search__query">
                    <h3 className="search__query-heading">{orders.length} {orders.length === 1 ? 'Order' : 'Orders'} Found</h3>

                    <div className="search__query-item">
                        <label>Sort by:</label>
                        <select>
                            <option value="Order ID">Order ID</option>
                            <option value="Date">Date</option>
                            <option value="Name">Name</option>
                            <option value="City">City</option>
                        </select>
                    </div>

                    <div className="search__query-item">
                        <label>Filter:</label>
                        <select>
                            <option value="All Orders">All Orders</option>
                        </select>
                    </div>
                </article>

                <article className="search__order">
                    <button className="primary" onClick={() => setOpen(true)}><img src="./images/add-order.png" alt="Add order" /> Add New Order</button>
                    <button>More •••</button>
                </article>

                <div id="myModal" className="modal" style={{display: `${open ? 'block' : 'none'}`}}>

                        <div className="modal-content">
                            <span className="close" onClick={() => setOpen(!open)}>&times;</span>
                            <h4>Create a new Order</h4>
                            <form className="modal-content__form" onSubmit={handleSubmit}>
                                <input className="modal-content__form-input" type="text" placeholder="Order ID" required value={orderId} onChange={(e) => setOrderId(e.target.value)}/>
                                <input className="modal-content__form-input" type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>
                                <input className="modal-content__form-input" type="text" placeholder="City" required value={city} onChange={(e) => setCity(e.target.value)}/>

                                <select className="modal-content__form-select" required value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
                                    <option value="Paid">Paid</option>
                                    <option value="Awaiting Authorization">Awaiting Authorization</option>
                                </select>
                                <select className="modal-content__form-select" required value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}>
                                    <option value="Fulfilled">Fulfilled</option>
                                    <option value="Unfulfilled">Unfulfilled</option>
                                </select>

                                <input className="modal-content__form-input" type="text" placeholder="Total" required value={total} onChange={(e) => setTotal(e.target.value)}/>

                                <input className="modal-content__form-submit" type="submit" value="Create" />
                            </form>
                        </div>

                </div>
        </section>
    )
}

export default Search;
