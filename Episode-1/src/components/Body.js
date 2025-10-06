import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9452387&lng=77.7115841&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("jsondata", jsonData);

    const uniqueRestaurants = [];
    const seenIds = new Set();

    // Now use uniqueRestaurants for rendering

    jsonData.data.cards.forEach((cardObj) => {
      // Find the restaurant data inside each card
      const restaurant = cardObj.card?.card;
      console.log("restaurant", restaurant);

      console.log(
        " restaurant?.gridElements?.restaurants",
        restaurant?.gridElements?.infoWithStyle?.restaurants
      );
      const gridElementsInfos =
        restaurant?.gridElements?.infoWithStyle?.restaurants;
      if (gridElementsInfos && gridElementsInfos.length > 0) {
        gridElementsInfos.forEach((gridElementsInfo) => {
          if (!seenIds.has(gridElementsInfo?.info?.id)) {
            uniqueRestaurants.push({
              id: gridElementsInfo?.info?.id,
              name: gridElementsInfo?.info?.name,
              cuisine: gridElementsInfo?.info?.cuisines?.join(", "),
              image: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${gridElementsInfo?.info?.cloudinaryImageId}`,
              rating: gridElementsInfo?.info?.avgRating,
              reviewCount: gridElementsInfo?.info?.totalRatingsString,
              address: `${gridElementsInfo?.info?.locality}, ${gridElementsInfo?.info?.areaName}`,
              costForTwo: gridElementsInfo?.info?.costForTwo,
            });
            seenIds.add(gridElementsInfo?.info?.id);
          }
        });
      }
    });
    setListOfRestaurants(uniqueRestaurants);
    console.log("uniqueRestaurants", uniqueRestaurants);
  };
  return (
    <div className="body">
      <div className="search"></div>

      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            console.log("top rated button clicked");
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.rating > 4)
            );
          }}
        >
          Top Rated
        </button>
        <button
          className="cost-low-to-high"
          onClick={() => {
            console.log("Cost Low to High button clicked");
            setListOfRestaurants([
              ...listOfRestaurants.sort((a, b) => {
                return a.rating - b.rating;
              }),
            ]);
          }}
        >
          Cost Low to High
        </button>
        <button
          className="cost-high-to-low"
          onClick={() => {
            console.log("cost-high-to-low button clicked");
            setListOfRestaurants([
              ...listOfRestaurants.sort((a, b) => {
                return b.rating - a.rating;
              }),
            ]);
          }}
        >
          Cost High to Low
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              resName={restaurant.name}
              cuisine={restaurant.cuisine}
              image={restaurant.image}
              ratingValue={restaurant.rating}
              reviewCount={restaurant.reviewCount}
              address={restaurant.address}
              costForTwo={restaurant.costForTwo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
