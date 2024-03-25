function   UserGreeting(props) {
    if(props.isLoggedIn) {
        return <h1>Welcome back! {props.username} </h1>;
    }
    return <h1>Please sign in.</h1>
}

export default UserGreeting;