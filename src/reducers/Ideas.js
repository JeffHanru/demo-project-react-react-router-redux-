// Ideas Reducer

const IdeasReducerDefaultState = [{
    id:'1001',
    title:'Dummy idea',
    body:'content for dummy idea'
}];

export default (state = IdeasReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_IDEA':
            return [
                ...state,
                action.idea
            ];
        case 'REMOVE_IDEA':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_IDEA':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    };
                } else {
                    return item;
                };
            });
        default:
            return state;
    }
};
