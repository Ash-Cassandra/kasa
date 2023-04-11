import redStar from "./redStar.png"
import greyStar from "./greyStar.png"

const Rating = (props) => {
  const rangeValue = props.rangeValue;
  const range = [1, 2, 3, 4, 5];

const stars = range.map((rating) => {
  if (rating <= rangeValue) {
    return <img src={redStar} alt="etoile" />;
  } else {
    return <img src={greyStar} alt="etoile" />;
  }
});

return (
  <div>
    <div>{stars}</div>
  </div>
);
};





export default Rating