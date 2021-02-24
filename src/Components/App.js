import React, { useEffect, useState } from 'react'
import { Grid, Grow, Button } from '@material-ui/core'

import Point from './Point'
 const App = () => {
  const points = [
    {x: 0, y: 0},{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7},{x: 0, y: 8},{x: 0, y: 9},{x: 0, y: 10},{x: 0, y: 11},
    {x: 1, y: 0},{x: 1, y: 1},{x: 1, y: 2},{x: 1, y: 3},{x: 1, y: 4},{x: 1, y: 5},{x: 1, y: 6},{x: 1, y: 7},{x: 1, y: 9},{x: 1, y: 8},{x: 1, y: 10},{x: 1, y: 11},
    {x: 2, y: 0},{x: 2, y: 1},{x: 2, y: 2},{x: 2, y: 3},{x: 2, y: 4},{x: 2, y: 5},{x: 2, y: 6},{x: 2, y: 7},{x: 2, y: 9},{x: 2, y: 8},{x: 2, y: 10},{x: 2, y: 11},
    {x: 3, y: 0},{x: 3, y: 1},{x: 3, y: 2},{x: 3, y: 3},{x: 3, y: 4},{x: 3, y: 5},{x: 3, y: 6},{x: 3, y: 7},{x: 3, y: 9},{x: 3, y: 8},{x: 3, y: 10},{x: 3, y: 11},
    {x: 4, y: 0},{x: 4, y: 1},{x: 4, y: 2},{x: 4, y: 3},{x: 4, y: 4},{x: 4, y: 5},{x: 4, y: 6},{x: 4, y: 7},{x: 4, y: 9},{x: 4, y: 8},{x: 4, y: 10},{x: 4, y: 11},
    {x: 5, y: 0},{x: 5, y: 1},{x: 5, y: 2},{x: 5, y: 3},{x: 5, y: 4},{x: 5, y: 5},{x: 5, y: 6},{x: 5, y: 7},{x: 5, y: 9},{x: 5, y: 8},{x: 5, y: 10},{x: 5, y: 11},
    {x: 6, y: 0},{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 6, y: 4},{x: 6, y: 5},{x: 6, y: 6},{x: 6, y: 7},{x: 6, y: 9},{x: 6, y: 8},{x: 6, y: 10},{x: 6, y: 11},
    {x: 7, y: 0},{x: 7, y: 1},{x: 7, y: 2},{x: 7, y: 3},{x: 7, y: 4},{x: 7, y: 5},{x: 7, y: 6},{x: 7, y: 7},{x: 7, y: 9},{x: 7, y: 8},{x: 7, y: 10},{x: 7, y: 11},
    {x: 8, y: 0},{x: 8, y: 1},{x: 8, y: 2},{x: 8, y: 3},{x: 8, y: 4},{x: 8, y: 5},{x: 8, y: 6},{x: 8, y: 7},{x: 8, y: 9},{x: 8, y: 8},{x: 8, y: 10},{x: 8, y: 11},
    {x: 9, y: 0},{x: 9, y: 1},{x: 9, y: 2},{x: 9, y: 3},{x: 9, y: 4},{x: 9, y: 5},{x: 9, y: 6},{x: 9, y: 7},{x: 9, y: 9},{x: 9, y: 8},{x: 9, y: 10},{x: 9, y: 11},
    {x: 10, y: 0},{x: 10, y: 1},{x: 10, y: 2},{x: 10, y: 3},{x: 10, y: 4},{x: 10, y: 5},{x: 10, y: 6},{x: 10, y: 7},{x: 10, y: 9},{x: 10, y: 8},{x: 10, y: 10},{x: 10, y: 11},
    {x: 11, y: 0},{x: 11, y: 1},{x: 11, y: 2},{x: 11, y: 3},{x: 11, y: 4},{x: 11, y: 5},{x: 11, y: 6},{x: 11, y: 7},{x: 11, y: 9},{x: 11, y: 8},{x: 11, y: 10},{x: 11, y: 11}
  ] 

  const [rockPoint, setRockPoint] = useState({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
  const [pointsSet, setPointsSet] = useState([])
  
  useEffect(() => {
    var points = []
    for(var i=0; i<8; i++){
      var newPoint = generateCoords(parseInt(Math.random()*9), parseInt(Math.random()*9))
      points.push({ name: `Point${newPoint.x}-${newPoint.y}`,  id: `${newPoint.x}-${newPoint.y}`, x: newPoint.x, y: newPoint.y, status: true })
    }
    setPointsSet(points) 
  }, [])

  const generateCoords = (x1, y1, status) => {
    var x = x1
    var y = y1
    var status = status
    while( (x === x1 && y === y1)){
      var r = parseInt(Math.random()*6)
      switch (r){
        case 0: 
          if(x<9) x++; 
          break
        case 1:
          if(y<9) y++; 
          break
        case 2:
          if(y<9) y++; 
          if(x<9) x++; 
          break
        case 3:
          if(y<9) y++
          if(x>0) x--
          break
        case 4:
          if(y>0) y--
          if(x<9) x++
          break
        case 5:
          if(y>0) y--
          if(x>0) x--
          break
        default:
          break
      }
    }
    if(x === rockPoint.x && y === rockPoint.y) {
     /*  x = x1
      y = y1 */
      console.log('here')
      status = false
    }
    return {x, y, status}
  }
 
  const movePoint = () => {
    var rCh = parseInt(Math.random()*5)
    if(rCh === 1) setRockPoint({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
    var newPointsSet = []
    for(var pointS of pointsSet){
      if(pointS.status){
        var x = pointS.x
        var y = pointS.y
        var p = generateCoords(x, y, pointS.status)
        pointS.x = p.x
        pointS.y = p.y
        pointS.status = p.status
      }
      newPointsSet.push(pointS)
    }
    setPointsSet(newPointsSet)
  }

  return (
    <div>
      <h1>Maze Travel</h1>
      <Button variant="contained" color="secondary" onClick={movePoint}>move</Button>
      <Grow in>
        <Grid container alignItems="stretch" spacing={3}>
          {points.map((point, i) => (
            <Grid item xs={1} >
              <Point rockPoint={rockPoint} pointsSet={pointsSet} point={point}/>
            </Grid>
          ))}
        </Grid>
      </Grow>
    </div>
  )
}

export default App
