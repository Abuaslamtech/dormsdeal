import image from "../resources/map.png";
import Slider from "./Slider";

const houses = [
  {
    id: 1,
    name: "Mai Tanki Hostel",
    location: "Behind School Complex",
    furnished: "Yes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi hic dolore, libero earum similique error sequi non aliquam eveniet esse molestiae assumenda quas magnam?",
  },
  {
    id: 2,
    name: "Zamani Hostel",
    location: "Darawa, Opposite Seaton ",
    furnished: "Yes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi hic dolore, libero earum similique error sequi non aliquam eveniet esse molestiae assumenda quas magnam?",
  },
  {
    id: 3,
    name: "Student Villa Hostel",
    location: "Miami Downtown",
    furnished: "Yes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi hic dolore, libero earum similique error sequi non aliquam eveniet esse molestiae assumenda quas magnam?",
  }
];
const Main = () => {
  return (
    <main>
      <h3>Recommended For You !</h3>
      {houses.map((house) => (
        <section className="houses">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="txt">
            <h2>{house.name}</h2>
            <div>
              Location: {house.location} <br />
              Furnished: {house.furnished} <br />
              <p>{house.description}</p>
            </div>
          </div>
        </section>
      ))}
      {/* Reviews */}

      <section className="about">
        <h2>Whats our clients say</h2>
        <Slider />
      </section>
    </main>
  );
};

export default Main;
