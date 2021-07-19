import React, { useContext } from 'react';
import Order from '../components/Order';

import { OrderContext } from '../context/OrderContext';

const Orders = () => {
    const { orders } = useContext(OrderContext);

    return (
        <section className="orders">
                <article className="orders__table">
                    <input type="checkbox" disabled className="input-checkbox" />
                    <p className="orders__table-orderid">order</p>
                    <p className="orders__table-date">date</p>
                    <p className="orders__table-name">name</p>
                    <p className="orders__table-city">city</p>
                    <p className="orders__table-payment">payment status</p>
                    <p className="orders__table-order">order status</p>
                    <p className="orders__table-total">total</p>
                </article>
                <section className="orders-wrapper">
                    {orders.map(order => {
                        return <Order key={order.id} order={order}/>
                    })}
                </section>
        </section>
    )
}

export default Orders;
