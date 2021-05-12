import React from 'react';

function Block5(props)
{
    return(
        <>
            
            <div className="hrIn"/>
                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b"> Net Sale  </td>
                        <td className="block3_qtyValue" >  </td>
                        <td className="block3_value b" > {props.netSale} </td>
                    </tr>
                    <tr>
                        <td colspan="3"><hr/></td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Cash Sale  </td>
                        <td> {props.cashSaleQty} </td>
                        <td className="block3_value" > {props.cashSale} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Staff Cash Sale  </td>
                        <td> {props.staffCashSaleQty} </td>
                        <td className="block3_value" > {props.staffCashSale} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Cash Refunds  </td>
                        <td> {props.cashRefundsQty} </td>
                        <td className="block3_value" > {props.cashRefunds} </td>
                    </tr>

                </table>
        </>
    );
}

export default Block5;