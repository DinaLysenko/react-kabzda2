
import {useState} from 'react';
import {OnOff} from './OnOff.tsx';


export default {
    component: OnOff,
}


export const On = () => {
    return (
        <OnOff switchOn={true} setSwitchOn={()=>{}}/>
    )
}
export const Off = () => {
    return (
        <OnOff switchOn={false} setSwitchOn={()=>{}}/>
    )
}
export const OnOffDemo = () => {
    const [switchOn, setSwitchOn] = useState(false)
    return (
        <OnOff switchOn={switchOn} setSwitchOn={()=>{setSwitchOn(!switchOn)}}/>
    )
}