type Props = {
    items: { value: number, name: string }[]
    onClick: (value: number)=> void
}
export const AccordionBody = ({items, onClick}: Props) => {
    return (
        <ul>
            {items.map(item => (<li key={item.value} onClick={()=>onClick(item.value)}>{item.name}</li>))}
        </ul>
    )
}