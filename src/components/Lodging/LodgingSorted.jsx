import {useContext} from 'react'
import DataContext from "../../dataContext";
import Sheet from '../Sheet/Sheet';

function  LodgingSorted () {
    const data = useContext(DataContext);
    const dataArray = [];
console.log('data1', data)

    data.map(item => (
        dataArray.push(item)
    ))
console.log("dataArray", dataArray) 
return <Sheet dataArray={dataArray} />
}

export default LodgingSorted