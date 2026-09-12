import {Accordion} from './Accordion'
import {useState} from 'react';


export default {
    component: Accordion,
}


export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'} setMenuCollapsed={() => {
        }} menuCollapsed={true}/>
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'} setMenuCollapsed={() => {
        }} menuCollapsed={false}/>
    )
}
export const AccordionDemo = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    return (
        <Accordion title={'Collapsed Accordion'} setMenuCollapsed={() => setMenuCollapsed(!menuCollapsed)}
                   menuCollapsed={menuCollapsed}/>
    )
}