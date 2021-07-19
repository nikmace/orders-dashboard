import React, { createContext, useReducer, useEffect } from 'react';
import { orderReducer } from '../reducers/orderReducer';

export const OrderContext = createContext();

const OrderContextProvider = (props) => {
    const [orders, dispatch] = useReducer(orderReducer, [], () => {
        const localData = localStorage.getItem('orders');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders])

    return (
        <OrderContext.Provider value={{orders, dispatch}}>
            { props.children }
        </OrderContext.Provider>
    )
}

export default OrderContextProvider;
