import React, {useContext, useState} from 'react'
import DataContext from "../../dataContext";

function LodgingSorted() {
    const data = useContext(DataContext);
    const dataArray = [];
    const getElementById = (id) => {
        return dataArray.find(item => item.id === id);
    }

    data.map(item => (
        dataArray.push(item)
    ))
console.log("dataArray", dataArray)
   
}

export default LodgingSorted