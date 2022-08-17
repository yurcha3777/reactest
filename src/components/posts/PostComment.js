export default function PostComment({item}) {
    return (
        <div>
            <h3>{item.id}</h3>
            <h4>{item.body}</h4>
        </div>
    );
}