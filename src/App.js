import React, { useEffect, useState } from 'react'
import Tr from './Tr'
 const App = () => {
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  
  const [rockPoint, setRockPoint] = useState({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
  const [selectedPoint, setSelectedPoint] = useState({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
  while(selectedPoint.x === rockPoint.x && selectedPoint.y === rockPoint.y){
    selectedPoint({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
  }

  const [selectedPoints, setSelectedPoints] = useState([])

  const movePoint = () => {
    var x = selectedPoint.x
    var y = selectedPoint.y
    var rCh = parseInt(Math.random()*5)
    if(rCh === 1) setRockPoint({x: parseInt(Math.random()*9), y: parseInt(Math.random()*9)})
    while( (x === selectedPoint.x && y === selectedPoint.y) ||  (x === rockPoint.x && y === rockPoint.y)){
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
    setSelectedPoint({ x, y })
    return true
  }

  return (
    <div>
      <h1>Maze Travel</h1>
      <button onClick={movePoint} >move</button>
      <table>
        <thead></thead>
        <tbody>
          {points.map((point, i) => (
            <Tr rockPoint={rockPoint} selectedPoint={selectedPoint} x={point}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
