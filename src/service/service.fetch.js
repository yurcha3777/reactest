let baseUrl = 'https://jsonplaceholder.typicode.com';

const getPosts = () => fetch(baseUrl + '/posts').then(value => value.json())
const getComments = () => fetch(baseUrl + '/comments').then(value => value.json())

export {getPosts,getComments};