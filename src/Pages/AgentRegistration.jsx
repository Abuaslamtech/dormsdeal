const AgentRegistration = () => {
    return ( 
        <main className="signup">
        <div className="agentbox">
          <h2>Agent Registration</h2>
          <form action="" >
            <div className="agent">
            <input type="text" placeholder="Enter Full Name" />
            <input type="email" placeholder="Enter Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="number" placeholder="National Id Number" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            </div>
            <h2>Guarantor's Information</h2>
            <div className="agent">
                <input type="text" placeholder="Enter Full Name" />
                <input type="email" placeholder="Enter Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <input type="number" placeholder="National Id Number" />
                <input type="text" placeholder="Home Address" />
                <button type="submit">Sign Up</button>
                
            </div>
          </form>
        </div>
      </main>
     );
}
 
export default AgentRegistration;