type Props = {
    title: string
    menuCollapsed: boolean
    setMenuCollapsed: (menuCollapsed:boolean) => void
}
export const AccordionTitle=({title,  setMenuCollapsed, menuCollapsed}:Props)=>{
    return (
        <h1 onClick={()=> {
            setMenuCollapsed(!menuCollapsed)
        }}>{title}</h1>
    )
}