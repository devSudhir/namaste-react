const RestaurantCard = (props) => {
  const {
    resName,
    cuisine,
    image,
    ratingValue,
    reviewCount,
    address,
    costForTwo,
  } = props;
  return (
    <div className="res-card">
      <img src={image} className="res-logo" alt="restaurant image" />
      <h2>{resName}</h2>
      <h3>{costForTwo}</h3>
      <h4>{cuisine}</h4>
      <h5>
        {ratingValue}⭐({reviewCount})
      </h5>
      <span>{address}</span>
    </div>
  );
};
export default RestaurantCard;
