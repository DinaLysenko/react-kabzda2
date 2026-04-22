type Props = {
    selected: boolean

}
export const Star = ({selected}: Props) => {
    if (selected) {
        return (
            <span>❤️</span>
        )
    } else {
        return (
            <span>🖤</span>
        )
    }
}