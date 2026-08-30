
import {AccordionBody} from './AccordionBody.tsx';
import {useState} from 'react';
import {AccordionTitle} from './AccordionTitle.tsx';


export const UncontrolledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <AccordionTitle title={'Menu'}
                            collapsed={collapsed}
                            setCollapsed={ setCollapsed}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}