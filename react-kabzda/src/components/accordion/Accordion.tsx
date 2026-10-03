import {AccordionTitle} from './AccordionTitle.tsx';
import {AccordionBody} from './AccordionBody.tsx';

type Props = {
    title: string
    menuCollapsed: boolean
    setMenuCollapsed: (menuCollapsed: boolean) => void
    items: {value: number, name: string}[]
    onClick: (value: number) => void
}
export const Accordion = ({title, menuCollapsed, setMenuCollapsed, items, onClick}: Props) => {
    return (
        <>
            <AccordionTitle title={title} setMenuCollapsed={setMenuCollapsed} menuCollapsed={menuCollapsed}/>
            {!menuCollapsed && <AccordionBody items={items} onClick={onClick}/>}
        </>
    )
}