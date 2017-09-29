export default function customers(state = [], action) {
    if (action.type === 'INVOICES') {
        return state.concat(action.payload);
    } else if(action.type === 'ADD_INVOICE') {
        return state.concat(action.payload);
    }
    return state;
}