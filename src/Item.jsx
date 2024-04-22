function Item({ user, clickCallback }) {
    return (
        <div className="card">
            <h3>{user.name}</h3>
            <p>{user.language}</p>
            <button onClick={() => clickCallback(user.id)}>Get details</button>
        </div>
    )
}

export default Item
