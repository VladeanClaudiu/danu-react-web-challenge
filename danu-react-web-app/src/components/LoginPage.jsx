
function LoginPage(props) {
    const {login} = props;
    return (
        <div className="login-page">
            <img src="./public/danu.svg"/>
            <h1>Login Page</h1>
            <button onClick={login}>Login</button>
        </div>
        
    )
}

export default LoginPage