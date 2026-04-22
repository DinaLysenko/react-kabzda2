import {Star} from './Star.tsx';
type Props={
    value: number
}
export const Rating = ({value}:Props) => {
    if(value===5){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true} />
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
        )}
    if(value===4){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true} />
                <Star selected={true}/>
                <Star selected={false}/>
            </div>
        )}
    if(value===3){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true} />
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )}
    if(value===2){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false} />
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )}
    if(value===1){
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false} />
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )}
   else{
       return (
        <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false} />
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    )}
}