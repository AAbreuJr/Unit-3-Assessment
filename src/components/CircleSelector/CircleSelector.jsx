import React from 'react'
import './CircleSelector.css'

const CircleSelector = (props) => {
    return ( 
        <div className="CircleSelector">
            {props.circleNum.map((circle, idx) =>
            <button
                key={idx}
                className={props.circleIdx === idx ? 'selected' : ''}
                onClick={()=> props.handleTheCircles(idx)}
            >
                {props.circleIdx === idx ? `Circle ${idx+1} Selected` : `Select Circle ${idx+1}`}      
            </button>
            )}
        </div>
     );
}
 
export default CircleSelector;