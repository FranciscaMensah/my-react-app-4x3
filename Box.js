import React from 'react';

export default function Box (props){
    const [on, setOn] = React.useState(props.isOn)

    // function toggleBox(){
    //     setOn((prevBoxState)=>{
    //         return !prevBoxState;
    //     })
    // }

    return(
        <div 
            onClick={props.toggle}
            className={props.isOn ? 'box filled' : 'box empty'}></div>
    )
}