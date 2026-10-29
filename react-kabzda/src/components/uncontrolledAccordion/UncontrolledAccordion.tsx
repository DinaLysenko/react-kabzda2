import {AccordionBody} from './AccordionBody.tsx';
import {useReducer} from 'react';
import {AccordionTitle} from './AccordionTitle.tsx';
import {reducer, TOGGLE_CONSTANT} from './reducer.tsx';


export const UncontrolledAccordion = () => {

    const [collapsed, dispatch] = useReducer(reducer, false);
    return (
        <>
            <AccordionTitle title={'Menu'}
                            collapsed={collapsed}
                            onClick={()=>dispatch({type: TOGGLE_CONSTANT})}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}