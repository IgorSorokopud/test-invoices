export default function playlist(state = [], action) {
    if (action.type === 'PRODUCTS') {
        return state.concat(action.payload);
    }
    return state;
}