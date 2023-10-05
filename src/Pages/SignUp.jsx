
const SignUp = () => {
  return (
    <main className="signup">
      <div className="contbox">
        <h2>Sign Up</h2>
        <form action="">
          <input type="text" placeholder="Enter Full Name" />
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Sign Up</button>
          <div className="regOp">
            <p>
              Already a user? <a href="#">Login</a>
            </p>
            <b>OR</b>
            <p>
              Want to become an Agent? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
