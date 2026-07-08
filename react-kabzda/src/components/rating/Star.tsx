type Props = {
    selected: boolean
    onClick?: () => void
}
export const Star = ({selected, onClick}: Props) => {

    return (
        <>
            {selected ? <span onClick={onClick}>❤️</span> : <span onClick={onClick}>🖤</span>}
        </>
    )
}