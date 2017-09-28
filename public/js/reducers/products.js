export default function playlist(state = [], action) {
    if (action.type === 'ADD_DATA') {
        return state.concat(action.payload);
    }
    return state;
}