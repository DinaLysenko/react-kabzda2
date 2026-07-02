import {AccordionTitle} from './AccordionTitle.tsx';
import {AccordionBody} from './AccordionBody.tsx';

type Props = {
    title: string
    collapsed: boolean
}
export const Accordion = ({title, collapsed}: Props) => {
    return (
        <>
            <AccordionTitle title={title}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}