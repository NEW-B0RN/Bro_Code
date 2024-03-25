import PropTypes from "prop-types";
function   UserGreeting(props) {
    return(props.isLoggedIn ? <h2 className="welcome">Welcome {props.username} back!</h2> : <h1 className="sign">Please sign in.</h1>);
}

export default UserGreeting;

UserGreeting.proptypes ={
    isLoggedIn : Propstypes.bool,
    username: PropTypes.string,
  }
  
  UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
  }