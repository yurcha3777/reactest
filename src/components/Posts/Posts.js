export default function Posts({posts}) {
    return (
        <div>
            {
                posts.map(value => <p key={value.id}> {value.body}</p>)
            }
        </div>
    );
}
export {Posts}