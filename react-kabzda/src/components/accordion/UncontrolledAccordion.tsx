import {AccordionTitle} from './AccordionTitle.tsx';
import {AccordionBody} from './AccordionBody.tsx';
import {useState} from 'react';

export const UncontrolledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <AccordionTitle title={'Menu'}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>Toggle</button>
            {!collapsed && <AccordionBody/>}
        </>
    )
}