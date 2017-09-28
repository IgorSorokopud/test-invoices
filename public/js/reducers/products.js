export default function playlist(state = [], action) {
    if (action.type === 'ADD_PRODUCTS') {
        return state.concat(action.payload);
    }
    return state;
}