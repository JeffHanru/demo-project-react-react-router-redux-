import axios from 'axios'

export const fetchUsers = () => (
    {
        type:"FETCH_USERS",
        payload:axios.get("http://rest.learncode.academy/api/wstern/users")
    }
);

export const fetchUsersAllDelete = () => ({
    type:'FETCH_USERS_ALL_DELETE'
})