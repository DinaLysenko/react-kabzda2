type Props = {
    collapsed: boolean
}
export const AccordionBody=({collapsed}:Props)=>{
    if(collapsed){
      return <span>----</span>
    }
   else return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}