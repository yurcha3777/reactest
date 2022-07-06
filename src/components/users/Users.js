import {useEffect, useState} from "react";
import {getUsers} from "../../service/user.service";
import User from "../user/User";

export default function Users({lift}) {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data})=> setUsers([...data]))
    }, []);

    return (
        <div>

            {
                users.map((user) => <User key={user.id} user={user} lift={lift}/>)
            }
        </div>
    );
}
export {Users};