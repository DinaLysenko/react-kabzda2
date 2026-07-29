import {AccordionTitle} from './AccordionTitle.tsx';
import {AccordionBody} from './AccordionBody.tsx';

type Props = {
    title: string
    menuCollapsed: boolean
    setMenuCollapsed: (menuCollapsed: boolean) => void
}
export const Accordion = ({title, menuCollapsed, setMenuCollapsed}: Props) => {
    return (
        <>
            <AccordionTitle title={title} setMenuCollapsed={setMenuCollapsed} menuCollapsed={menuCollapsed}/>
            {!menuCollapsed && <AccordionBody/>}
        </>
    )
}