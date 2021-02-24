import React from 'react'

const Td = ({x, y, selectedPoint, rockPoint}) => {
    var id = `${x}-${y}`
    var styles = {
        border: '1px solid',
        height: 38,
        width: 73
    }
    if(rockPoint.x === x && rockPoint.y === y) styles.backgroundColor = 'black'
    return (
        <td style={styles} id={id} data-x={x} data-y={y}> { (selectedPoint.x === x && selectedPoint.y === y) ? 'xx' : null }</td>
    )
}

export default Td