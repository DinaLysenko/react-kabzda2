type Props = {
    title: string
    collapsed: boolean
    onClick: (collapsed:boolean) => void
}
export const AccordionTitle=({title, onClick, collapsed}:Props)=>{
    return (
        <h1 onClick={()=> {
            onClick(!collapsed)
        }}>{title}</h1>
    )
}