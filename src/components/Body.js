import React, { useEffect, useState, useContext } from "react";
import RestrauntCard from "./RestrauntCard";

import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilter = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) => res.avgRating > 4)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_"
    );
    const json = await data.json();

    const swiggyJson =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(swiggyJson);
    setFilteredRestaurants(swiggyJson);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are Offline! Please check your internet connection!
      </h1>
    );

  if (listOfRestaurants.length === 0) return <Shimmer />;
  return (
    <div className="body mx-2 my-8">
      <div className="filter flex ">
        <div className="search flex m-4 p-4 gap-2">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 px-4 py rounded-lg text-black font-small"
            onClick={() => {
              //filter the cards based on the name entered in the search bar.
              console.log(listOfRestaurants);
              const searchResults = listOfRestaurants.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurants(searchResults);
            }}
          >
            Search
          </button>
        </div>
        <div className="py-2 px-4 items-center flex">
          <button
            className="text-sm px-4 py-2 bg-gray-100 rounded-md"
            onClick={handleFilter}
          >
            Top Rated Restraunts
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e)=>setUserInfo(e.target.value)}
            className="border border-black p-2"
          />
        </div>
      </div>
      <div className="flex gap-8 flex-wrap items-center">
        {filteredRestaurants.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestrauntCard
              onClick={<RestaurantMenu />}
              name={res.info.name}
              cuisines={res.info.cuisines.join(",")}
              rating={res.info.avgRating}
              imgId={res.info.cloudinaryImageId}
              cost={res.info.costForTwo}
              ETA={res.info.maxDeliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
