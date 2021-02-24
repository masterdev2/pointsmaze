import React from 'react'
import { Card } from '@material-ui/core'

const Point = ({point, pointsSet, rockPoint}) => {
    var x = point.x
    var y = point.y
    var id = `${x}-${y}`
    var styles = {
        height: 92,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
    var name = false
    for(var pointS of pointsSet){
        if(pointS.x === point.x && pointS.y === point.y){
            name = pointS.name
            if(pointS.status === false){
                styles.backgroundColor = 'grey'
            }
        }
    }
    if(rockPoint.x === x && rockPoint.y === y){
        //styles.backgroundColor = 'yellow'
        styles.backgroundImage = `url("../bg.png")`
        styles.backgroundSize = 'cover'
    }
    return (
        <Card >
            <div style={styles} id={id} data-x={x} data-y={y}>{name}</div>
        </Card>
    )
}

export default Point