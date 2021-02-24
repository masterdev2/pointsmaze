import React from 'react'
import Td from './Td'

const Tr = ({x, selectedPoint, rockPoint}) => {
    const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <tr>
            {points.map((y, i) => (
                <Td rockPoint={rockPoint} selectedPoint={selectedPoint} x={x} y={y}/>
            ))}
        </tr>
    )
}

export default Tr