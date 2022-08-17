import {useEffect, useState} from "react";
import TodoComponent from "./TodoComponent";

export default function TodosComponent() {
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => setTodos([...value]))
    },[])
    return (
        <div>
            {
                todos.map(value => <TodoComponent item={value} key={value.id}/>)
            }
        </div>
    );
}