import React, { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import ReportHeader from '../ReportHeader';

import {GetDataContext} from '../../Context/GetDataContext'
import './reportBlockSBR.css';
const fs = require('browserify-fs')

function ReportBlockSBR() {

    const {stockBalance} = useContext(GetDataContext);

    const [data , setData] = useState([]);

    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    useEffect( ()=>
    {
        setData(stockBalance);
        console.log(data)
    })
    
    
    return(
        <>
        <div className='reportBlock_containerSBR' id='reportBlock_containerSBR'>
            
            <ReportHeader tital = 'Product Wise Stock Balance Report '/>
            <div className='hr' />

            <div className='inputData_container'>

            </div>

            <br/>

            <div className='tableHeader_container'>
                <table>
                    <tr className='tableHeader'> 
                        <td className='column1'> Product Code </td>
                        <td className='column2'> Product Name </td>
                        <td className='column3'> Pack Size </td>
                        <td className='column4'> Qty </td>
                        <td className='column5'> Cost Price </td>
                        <td className='column6'> Selling Price </td>
                    </tr><br/>
                </table>
            </div>
            

            <div className='data_container'>

                <table>
                    <tbody>
                        
                        
                        {(() => {
                                if (data !== '') {
                                return (
                                    data.map((val, i) => 
                                        <>
                                        <tr >
                                            <td className='column1'> {val.ProductCode}</td>
                                            <td className='column2'> {val.ProductName} </td>
                                            <td className='column3'>  </td>
                                            <td className='column4'> {val.Stock} </td>
                                            <td className='column5'> {currencyFormat(val.CostPrice)} </td>
                                            <td className='column6'> {currencyFormat(val.SellingPrice)} </td>
                                        </tr>
                                        </>
                                    ) 
                                )
                                } else 
                                {
                                return (
                                    <div> <span className="ral"> . . . </span> </div>
                                )
                                }
                            })()}

                    </tbody>
                </table>

            </div>


        </div>
        <br/>
        </>
    );
}

export default ReportBlockSBR;