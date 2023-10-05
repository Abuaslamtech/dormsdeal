import NavBar from "../components/NavBar";
const Profile = () => {
    return ( 
        <main>
            <NavBar />
            <div className="profile">
                <section className="img">
                    <img src="../resources/map.png" alt="" />
                </section>
                <section className="bio">
                    <h2>Bio</h2>
                    <div>
                        <p>Username: Khalifa</p>
                        <p>My name is Lawal Shuaib, starting from design and ending with ... hmmm ... well there is no ending ...</p>
                    </div>
                </section>
                <section className="basic-info">
                    
                </section>
            </div>
        </main>
     );
}
 
export default Profile;