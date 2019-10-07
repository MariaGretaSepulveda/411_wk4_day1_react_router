import React from 'react'
import cars from '../cars.json'
import { Card, Paper, Chip} from '@material-ui/core'
// Container, Paper, Chip //

const Car = (props) => {
var id = props.match.params.id
console.log(cars)
const getCar = cars.find(car => car.id ==  id);
    console.log(getCar)
    
    return (
        <div className='wrapper'>
            <Card className='cardz'>
        <h1>{getCar.Name}</h1>
        <Chip label= {'Acceleration:' + getCar.Acceleration}/>
        <Chip label={'Cylinders:' + getCar.Cylinders}/>
        <Chip label={getCar.Name}/>
        <Chip label={'Displacement: ' + getCar.Displacement}/>
        <Chip label={'Horsepower: ' + getCar.Horsepower}/>
        <Chip label={'Miles_per_Gallon: ' + getCar.Miles_per_Gallon}/>
        <Chip label={'Origin: ' + getCar.Origin}/>
        <Chip label={'Weight: '+ getCar.Year}/>
        </Card>
    
        </div>
    )
}

export default Car

