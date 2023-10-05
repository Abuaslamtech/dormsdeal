import NavBar from "./NavBar";
import { BiFilter } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
const HeaderComp = () => {
  return (
    <div>
      <NavBar />
      <div className="header">
        <div>
          <h2>Welcome to</h2>
          <h1>DormsDeal</h1>
          <p>Let's Find You The Most Suitable Space!</p>
        </div>
        <div className="modal">
          <div className="searchbox">
            <div className="search">
              <input type="search" placeholder="Search" />
            </div>
            <div className="filter">
              <CiSearch />
            </div>
            <div className="filter">
              <BiFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
