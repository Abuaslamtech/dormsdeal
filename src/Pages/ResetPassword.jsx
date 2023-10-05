const ResetPassword = () => {
    return ( 
        <main className="verif">
        <div className="verbox">
          <h2>Enter your email address to reset your password</h2>
          <input type="text" placeholder="Enter email address" />
          <button type="submit">Reset Password</button>
            <div className="cancel">
                <p>Cancel</p>
            </div>
        </div>
        
      </main> 
     );
}
 
export default ResetPassword;