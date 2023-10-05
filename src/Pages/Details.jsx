import NavBar from "../components/NavBar";
import homePic from "../resources/map.png";

const Details = () => {
  return (
    <>
      <NavBar />
      <img src={homePic} />

      <section className="hd">
        <h2>Mai Tanki Hostel</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem
          mollitia quae quas sequi nisi blanditiis nemo doloremque, repudiandae
          ratione consequatur voluptas aut perspiciatis dolores.
        </p>
        <p>
          <b>Location:</b> Behind School Sport Complex
        </p>
        <p>
          <b>Apartment Type:</b> Room
        </p>
        <p>
          <b>Rent per Annum:</b> N90,000
        </p>
        <p>
          <b>Date Availability:</b> 1-21-2023
        </p>
        <p>
          <b>Availability Length:</b> 1 year
        </p>
        <p>
          <b>Furnished:</b> Yes
        </p>
      </section>
      <section className="agentCont">
        <div className="list">Lawal Shuaib</div>
        <div className="list">shuaiblawal@gmail.com</div>
        <div className="list">08084639681</div>
      </section>
      <section className="comment">
        <label htmlFor="comment">Drop a comment about this room</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Type |"
        ></textarea>
        <button>Send</button>
      </section>
      <section className="reviews">
        <img src={homePic} alt="" />
        <div className="rd">
          <b>Henry Sam</b>
          <div>Starts here</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut facere
            minima illum unde, quaerat porro veritatis quasi suscipit officiis,
            perspiciatis mollitia debitis officia possimus. Nulla repellendus
            adipisci obcaecati maxime sit.
          </p>
        </div>
      </section>
    </>
  );
};

export default Details;
