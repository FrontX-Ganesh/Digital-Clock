import React from "react";
import colorCode from "./Json_data";
import './App.css';

const Apps = () => {
      return(
        <>  
                <table>
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Hex Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colorCode.map( (curEle, index) => {
                                return(
                                    <tr key = {index}>
                                        <td> {curEle.color} </td>
                                        <td> {curEle.value} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </>
      );
}

export default Apps;