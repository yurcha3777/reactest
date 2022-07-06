export default function Posts({posts}) {
    return (
        <div>
            {
                posts.map(value => <p>{value.body}</p>)
            }
        </div>
    );
}
export {Posts}