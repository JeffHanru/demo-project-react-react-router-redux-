const defaultRequestState = {
    fetching:false,
    fetched:false,
    users:[],
    error:null
};

export default (state = defaultRequestState, action) => {
    switch(action.type){
        case 'FETCH_USERS_PENDING':
            return {
                ...state,
                fetching:true
            }
        case 'FETCH_USERS_REJECTED':
            return {
                ...state,
                fetching:false,
                error:action.payload
            }
        case 'FETCH_USERS_FULFILLED':
            console.log('FETCH_USERS_FULFULLED triggered')
            return {
                ...state,
                fetching:false,
                fetched:true,
                users:action.payload.data
            }
        case 'FETCH_USERS_ALL_DELETE':
            return{
                ...state,
                users:[]
            }
        default:
            return state
    }
}