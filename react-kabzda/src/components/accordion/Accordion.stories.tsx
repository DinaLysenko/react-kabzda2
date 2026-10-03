import {Accordion} from './Accordion'
import {useState} from 'react';
import {action} from 'storybook/actions';


export default {
    component: Accordion,
}

const onClickCallback=action('some title was clicked')
export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'} setMenuCollapsed={() => {
        }} menuCollapsed={true} items={[]} onClick={onClickCallback}/>
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'} setMenuCollapsed={() => {
        }} menuCollapsed={false} items={[{value: 1, name: 'Dina'}, {value: 2, name: 'Alex'}, {value: 3, name: 'Pol'}]} onClick={onClickCallback}/>
    )
}
export const AccordionDemo = () => {
    const [menuCollapsed, setMenuCollapsed] = useState(false)
    return (
        <Accordion title={'Collapsed Accordion'} setMenuCollapsed={() => setMenuCollapsed(!menuCollapsed)}
                   menuCollapsed={menuCollapsed} items={[{value: 1, name: 'Dina'}, {value: 2, name: 'Alex'}, {value: 3, name: 'Pol'}]} onClick={onClickCallback}/>
    )
}