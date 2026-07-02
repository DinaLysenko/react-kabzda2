// type PropsType={
//     on: boolean,
// }
import {useState} from 'react';

export const OnOff = () => {
    const [on, setOn]=useState(false);

   const onStyle={
       width: '20px',
       height: '20px',
       border: '1px solid black',
       padding: '5px',
       display: 'inline-block',
       backgroundColor: on ? 'green' : 'white',
   }
    const offStyle={
        width: '20px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle={
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }
    return (
        <div>
            <div style={onStyle} onClick={()=> {
                setOn(true)
            }}>On</div>
            <div style={offStyle} onClick={()=> {
                setOn(false)
            }}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}