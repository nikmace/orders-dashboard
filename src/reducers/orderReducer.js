import { v4 as uuidv4 } from 'uuid';

export const orderReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ORDER':
            return [...state, {
                orderId: action.order.orderId,
                date: new Date().getTime(),
                name: action.order.name,
                city: action.order.city,
                paymentStatus: action.order.paymentStatus,
                orderStatus: action.order.orderStatus,
                total: action.order.total,
                id: uuidv4(),
            }]
        case 'REMOVE_ORDER':
            return state.filter(order => order.id !== action.order.id);
        case 'FILTER_ORDER':
            return state
        default:
            return state;
    }
}
