import React from 'react';

function Block2(props)
{
    return(
        <>

            <table className="block2_table">

                <tr>
                    <td className="columnTitle"> <span className="fromDate"> From Date </span> </td>
                    <td className="columnDot"> : </td>
                    <td className="columnData"> {props.fromDate} </td>
                </tr>

                <tr>
                    <td className="columnTitle"> <span className="toDate"> To Date </span> </td>
                    <td className="columnDot"> :  </td>
                    <td className="columnData"> {props.toDate} </td>
                </tr>

                <tr>
                    <td className="columnTitle"> <span className="location"> Location </span> </td>
                    <td className="columnDot"> : </td>
                    <td className="columnData"> {props.location} </td>
                </tr>

                <tr>
                    <td className="columnTitle"> <span className="cashier"> Cashier </span> </td>
                    <td className="columnDot"> : </td>
                    <td className="columnData"> {props.cashier} </td>
                </tr>

                <tr>
                    <td className="columnTitle"><span className="units"> Units </span></td>
                    <td className="columnDot"> : </td>
                    <td className="columnData"> {props.unit} </td>
                </tr>

            </table>
        </>
    );
}

export default Block2;