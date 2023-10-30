import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="header-container">
          <h1>Foodify</h1>
          <p>Best food place in BD</p>
          <Link to={"/menu"}>
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
