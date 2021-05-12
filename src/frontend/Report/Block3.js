import React from 'react';

function Block3(props)
{
    return(
        <>
                <table className="block3_tbl" >
                    <tr>
                        <td className="block3_titel b"> Gross Sele  </td>
                        <td className="block3_qtyValue" >  </td>
                        <td className="block3_value b" > {props.grossSale} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Exchange  </td>
                        <td> {props.exchangeQty} </td>
                        <td className="block3_value" > {props.exchange} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Product Discount  </td>
                        <td> {props.productDiscQty} </td>
                        <td className="block3_value" > {props.productDisc} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Sub Total Discount  </td>
                        <td> {props.subTotleDiscQty} </td>
                        <td className="block3_value" > {props.subTotleDisc} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Void*  </td>
                        <td> {props.voidQty} </td>
                        <td className="block3_value" > {props.void} </td>
                    </tr>

                    <tr>
                        <td className="block3_titel"> Cancle* </td>
                        <td> {props.cancleQty} </td>
                        <td className="block3_value" > {props.cancle} </td>
                    </tr>
                    <tr>
                        <td className="block3_titel"> Loyalty Redeem  </td>
                        <td> {props.redeemQty} </td>
                        <td className="block3_value" > {props.redeem} </td>
                    </tr>
                </table>
        </>
    );
}

export default Block3;
 
 