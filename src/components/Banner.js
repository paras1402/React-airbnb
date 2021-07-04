import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
const Banner = () => {
  const [searchText, setSearchText] = useState("Search Dates");
  return (
    <div className="banner">
      <div className="banner__search">
        {searchText === "Hide" && <Search />}
        <Button
          onClick={(e) =>
            setSearchText(
              searchText === "Search Dates" ? "Hide" : "Search Dates"
            )
          }
          className="banner__searchButton"
          variant="outlined"
        >
          {searchText}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
