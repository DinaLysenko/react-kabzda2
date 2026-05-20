type Props = {
    selected: boolean

}
export const Star = ({selected}: Props) => {
    return (
        <>
            {selected ? <span>❤️</span> : <span>🖤</span>}
        </>
    )
}