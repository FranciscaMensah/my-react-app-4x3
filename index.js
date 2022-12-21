import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import boxesArray from './boxes';
import Box from './Box';

function App (){
    const [boxes, setBoxes] = React.useState(boxesArray);

    const boxesElement = boxes.map((box) => {
       return <Box
                key={box.id}
                isOn={box.on}
                toggle={()=>{toggle(box.id)}}
                />
    }) 

    function toggle(id){
        setBoxes((prevBoxes)=>{
            return prevBoxes.map(box => {
              return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }

    return (
        <div className='boxes--div'>
           {boxesElement}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));







        // setBoxes(prevBoxes => {
        //     const newBoxes = [];
        //     for(let i = 0; i < prevBoxes.length; i++){
        //         const currentBox = prevBoxes[i];
        //         if(currentBox.id === id){
        //             const updatedBox = {
        //                 ...currentBox,
        //                 on: !currentBox.on
        //             }
        //             newBoxes.push(updatedBox);
        //         }else{
        //             newBoxes.push(currentBox);
        //         }
        //     }
        //     return newBoxes; 
        // })