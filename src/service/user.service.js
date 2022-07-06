import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',

});

const getUsers = () => {
    return axiosInstance.get('').then(value => value)
}

const getuserPosts = (id) => {
    return axiosInstance.get(`/${id}/posts`).then(value => value.data)
}

export {
    getUsers,
    getuserPosts
}


