import type {RatingValuesType} from '../rating/Rating.tsx';


type Props = {
    setValue: (ratingValue: RatingValuesType) => void
    value: RatingValuesType
    selected: boolean
}
export const Star = ({setValue, value, selected}: Props) => {

    return (
        <span onClick={() => setValue(value)}>{selected ? '❤️' : '🖤'}</span>
    )
}