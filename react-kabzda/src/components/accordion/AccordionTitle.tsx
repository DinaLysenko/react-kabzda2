type Props = {
    title: string
    onClick: ()=> void
}
export const AccordionTitle=({title, onClick}:Props)=>{
    return (
        <h1 onClick={onClick}>{title}</h1>
    )
}