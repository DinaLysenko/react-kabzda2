type Props = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed:boolean) => void
}
export const AccordionTitle=({title, setCollapsed, collapsed}:Props)=>{
    return (
        <h1 onClick={()=> {
            setCollapsed(!collapsed)
        }}>{title}</h1>
    )
}