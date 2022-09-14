import {useEffect, useState} from "react";

import AlbumComponent from "./AlbumComponent";
import {getAlbums} from "../../service";

export default function AlbumsComponent() {
        const [albums,setAlbums] = useState([]);
        useEffect(()=>{
            getAlbums().then(value => setAlbums([...value]))

        },[])
    return (
        <div>
            {
                albums.map(value => <AlbumComponent item={value} key={value.id}/>)
            }
        </div>
    );
}