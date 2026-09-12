
import {useState} from 'react';

import {Rating, type RatingValuesType} from './Rating.tsx';


export default {
    component: Rating,
}


export const Rating0 = () => {
    return (
        <Rating ratingValue={0} setRatingValue={()=>{}}/>
    )
}
export const Rating1 = () => {
    return (
        <Rating ratingValue={1} setRatingValue={()=>{}}/>
    )
}
export const Rating2 = () => {
    return (
        <Rating ratingValue={2} setRatingValue={()=>{}}/>
    )
}
export const Rating3 = () => {
    return (
        <Rating ratingValue={3} setRatingValue={()=>{}}/>
    )
}
export const Rating4 = () => {
    return (
        <Rating ratingValue={4} setRatingValue={()=>{}}/>
    )
}
export const Rating5 = () => {
    return (
        <Rating ratingValue={5} setRatingValue={()=>{}}/>
    )
}
export const RatingDemo = () => {
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0)
    return (
        <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>

    )
}