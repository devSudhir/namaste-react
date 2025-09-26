import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  return (
    <div className="body">
      <div className="search"></div>

      <div className="filter">
        <button
          className="top-rated-btn"
          onClick={() => {
            console.log("top rated button clicked");
            setListOfRestaurants(
              listOfRestaurants.filter(
                (res) => res.aggregateRating.ratingValue > 4
              )
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
                return (
                  a.aggregateRating.ratingValue - b.aggregateRating.ratingValue
                );
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
                return (
                  b.aggregateRating.ratingValue - a.aggregateRating.ratingValue
                );
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
              key={restaurant.name}
              resName={restaurant.name}
              cuisine={restaurant.servesCuisine}
              image={restaurant.image}
              ratingValue={restaurant.aggregateRating.ratingValue}
              reviewCount={restaurant.aggregateRating.reviewCount}
              address={restaurant.address.streetAddress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
