const createComments = (objTwo) => {
    return fetch('http://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(objTwo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())
}

export {createComments};