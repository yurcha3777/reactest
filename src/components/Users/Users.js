import {useEffect, useState} from "react";
import User from "../User/User";
import './Users.css'

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user,setUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });
    }, [])

    return (<div>
        {
            user && <h4> {user.email}</h4>
        }
        {users.map(user => <User key={user.id} user={user} information={setUsers}
        /> )}
    </div>);
}
