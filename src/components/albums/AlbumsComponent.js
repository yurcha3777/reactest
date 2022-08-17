import {useEffect, useState} from "react";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent() {
        const [albums,setAlbums] = useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(value => value.json())
                .then(value => setAlbums([...value]))

        },[])
    return (
        <div>
            {
                albums.map(value => <AlbumComponent item={value} key={value.id}/>)
            }
        </div>
    );
}