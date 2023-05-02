import redStar from "./redStar.png"
import greyStar from "./greyStar.png"

const Rating = (props) => {
  const rangeValue = props.rangeValue;
  const range = [1, 2, 3, 4, 5];


return (
  <div>
    {range.map((rating, index) => (
      <img key={index} src={index < rangeValue ? redStar : greyStar} alt="etoile" />
      )
    )}
  </div>
)
};





export default Rating