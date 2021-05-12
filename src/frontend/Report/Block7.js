import React from 'react';

function Block6(props)
{
    return(
        <>
        
        <div className="hrIn"/>
                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b"> Total Cash Sale  </td>
                        <td className="block3_qtyValue" > </td>
                        <td className="block3_value b" > {props.totalCashSale} </td>
                    </tr>
                    <br/>
                    <tr>
                        <td className="block3_titel"> Paid In  </td>
                        <td> {props.paidInQty} </td>
                        <td className="block3_value" > {props.paidIn} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Paid Out  </td>
                        <td> {props.paidOutQty} </td>
                        <td className="block3_value" > {props.paidOut} </td>
                    </tr>
                </table>
                
                <br/> <br/>
                <div className="hrIn"/>

                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b"> No of Bills  </td>
                        <td></td>
                        <td className="block3_value b" > {props.noOfBills} </td>
                    </tr>
                    
                </table>
        </>
    );
}

export default Block6;