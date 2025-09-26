const RestaurantCard = (props) => {
  const { resName, cuisine, image, ratingValue, reviewCount, address } = props;
  return (
    <div className="res-card">
      <img src={image} className="res-logo" alt="restaurant image" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>
        {ratingValue}⭐({reviewCount})
      </h5>
      <span>{address}</span>
    </div>
  );
};
export default RestaurantCard;
