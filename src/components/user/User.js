
export default function User({user,lift}) {
    const onclick = () => {
      lift(user.id)
    }
    return (
        <div>
            <h2>ID:{user.id}</h2>
            <h2>Name:{user.name}</h2>
           <button onClick={onclick}>posts</button>

        </div>);
}
export {User};