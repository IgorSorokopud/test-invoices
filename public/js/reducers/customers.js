export default function customers(state = [], action) {
    if (action.type === 'CUSTOMERS') {
        return state.concat(action.payload);
    }
    return state;
}