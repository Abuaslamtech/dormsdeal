const Login = () => {
    return ( 
        <main className="signup">
        <div className="contbox">
          <h2>Login</h2>
          <form action="">
           
            <input type="email" placeholder="Enter Email Address" />
            <input type="password" placeholder="Enter Password" />
            <button type="submit">Sign In</button>
            <div className="regOp">
              <p>
                Not a user? <a href="#">Sign Up</a>
              </p>
              <b>OR</b>
              <p>
                <a href="#">Forgot Password</a>
              </p>
            </div>
          </form>
        </div>
      </main>
     );
}
 
export default Login;