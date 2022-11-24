
function LoginPage(props) {
    const {login} = props;
    return (
        <div className="login-page">
            <img className="login-logo" src="./danu.svg"/>
            <h1></h1>
            <button className="login-btn" onClick={login}>Login</button>
        </div>
        
    )
}

export default LoginPage