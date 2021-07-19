import React, { useState, useContext } from 'react';
import moment from 'moment';

import { OrderContext } from '../context/OrderContext';

const Order = ({ order }) => {
    const [checked, setChecked] = useState(false);
    const { dispatch } = useContext(OrderContext);

    const handleClick = () => {
        dispatch({ type: 'REMOVE_ORDER', id: order.id})
    }

    return (
        <article 
            className="orders__container" 
            style={{background: `${checked ? '#eee' : '#fff'}`, padding: `${checked ? '0px' : '15px 0px'}`}} 
            onClick={() => setChecked(!checked)}
        >
            <input 
                type="checkbox" 
                className="input-checkbox" 
                checked={checked} 
                onChange={() => setChecked(!checked)}
            />

            <p className="orders__container-orderid">#{order.orderId}</p>
            <p className="orders__container-date">{moment(order.date).format('ll')}</p>
            <p className="orders__container-name">{order.name}</p>
            <p className="orders__container-city">{order.city}</p>
            <p className={`orders__container-payment ${order.paymentStatus === 'Paid' ? 'green' : 'yellow'}`}>{order.paymentStatus}</p>
            <p className={`orders__container-order ${order.orderStatus === 'Fulfilled' ? 'blue' : 'yellow'}`}>{order.orderStatus}</p>
            <p className="orders__container-total">${order.total}</p>
            
            <span 
                hidden={!checked} 
                style={{fontSize: '18px'}} 
                onClick={handleClick}
            >
                ✕
            </span>
        </article>
    )
}

export default Order;
