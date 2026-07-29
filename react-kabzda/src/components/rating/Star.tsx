import type {RatingValuesType} from './Rating.tsx';


type Props = {
    setRatingValue: (ratingValue: RatingValuesType) => void
    ratingValue: RatingValuesType
    selected: boolean
}
export const Star = ({ratingValue, setRatingValue, selected}: Props) => {
//console.log(ratingValue, selected)
    return (
        <span onClick={() => setRatingValue(ratingValue)}>{selected ? '❤️' : '🖤'}</span>
    )
}