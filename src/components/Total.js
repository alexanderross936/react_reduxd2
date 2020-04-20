import React from 'react'


const Total = (props) => {
    const tot = props.cars
    console.log(tot)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            {tot.length}
        </div>
    )
}

export default Total