

function Rating(props){
 const rangeValue = props.rangeValue
 const range = [1, 2, 3, 4, 5]

 return (
  <div>
    {range.map((rangeElem) => 
    rangeValue >= rangeElem ? <span key={rangeElem.toString()}>O</span> : null
    )}
  </div>
 )
}  

export default Rating