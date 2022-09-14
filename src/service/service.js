let baseUrl = 'https://jsonplaceholder.typicode.com';

const getAlbums = () => fetch(baseUrl + '/albums').then(value => value.json());
const getComments = () => fetch(baseUrl + '/comments').then(value => value.json());
const getTodos = () => fetch(baseUrl + '/todos').then(value => value.json());
const getPostComment = (id) => fetch(baseUrl + '/' + id + '/posts' ).then(value => value.json());

export {getAlbums,getComments,getTodos,getPostComment}

