type PropsType={
    on: boolean,
}
export const OnOff = ({on}: PropsType) => {
   const onStyle={
       width: '20px',
       height: '20px',
       border: '1px solid black',
       padding: '5px',
       display: 'inline-block',
       backgroundColor: on ? 'green' : 'white',
   }
    const offStyle={
        width: '20px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle={
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }
    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}