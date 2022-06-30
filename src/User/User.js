export default function User({user,information}) {

    return (
        <div>
            <div className={'block1'}>
                <h2> ID:{user.id}</h2>
                <h4> Name:{user.name}</h4>
                <button onClick={() => {
                    information(user);
                }}>
                    email</button>

            </div>
        </div>
    );
}