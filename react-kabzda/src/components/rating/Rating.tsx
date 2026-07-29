import {Star} from './Star.tsx';


export type RatingValuesType = 0 | 1 | 2 | 3 | 4 | 5

type Props = {
    ratingValue: RatingValuesType
    setRatingValue: (ratingValue: RatingValuesType) => void;
}
export const Rating = ({ratingValue, setRatingValue}: Props) => {
    console.log( ratingValue);
    return (
        <div>
            <Star selected={ratingValue > 0} setRatingValue={setRatingValue} ratingValue={1}/>
            <Star selected={ratingValue > 1} setRatingValue={setRatingValue} ratingValue={2}/>
            <Star selected={ratingValue > 2} setRatingValue={setRatingValue} ratingValue={3}/>
            <Star selected={ratingValue > 3} setRatingValue={setRatingValue} ratingValue={4}/>
            <Star selected={ratingValue > 4} setRatingValue={setRatingValue} ratingValue={5}/>
        </div>
    )
}