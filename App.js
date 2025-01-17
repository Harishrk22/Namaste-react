import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  - Navitems
 * Body
 *  -search
 *  -restarantcontainer
 *      -restaurantCard
 *        -Img
 *        -rating,Name of res,cuisine
 *
 * Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        alt="res-logo"
      ></img>
      <h3>Meghana Foods</h3>
      <h4>South Indian,Burger,Asian</h4>
      <h4>4.4 stars</h4>
      <h4>30 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
