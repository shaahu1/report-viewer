import React from 'react';
import './dataBlock.css';

function DataBlock(props)
{
    return (
        <>
            <div className = 'dataBlock_container' >

                <center><span className = 'value_container'  > {props.value} </span></center>
                
                <div className = 'marTop'><center><span className = 'titalDataBlock'  > {props.tital} </span></center> </div>
                
                

            </div>
        </>
    );
}

export default DataBlock;