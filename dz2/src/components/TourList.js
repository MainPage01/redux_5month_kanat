import React, { useState, useEffect, useContext } from 'react'
import TourItem from './TourItem';
import axios from 'axios';
import { Context } from '../context';

export default function TourList({ mode }) {
    // const tours = [
    //     {
    //         nameOfTour: 'Каньон "Сказка"',
    //         price: 500,
    //     },
    //     {
    //         nameOfTour: 'Горячие источники',
    //         price: 200,
    //     },
    //     {
    //         nameOfTour: 'Сон-Кол',
    //         price: 400,
    //     },
    // ]

    const [tours, setTours] = useState([])
    const { style, currentStyle } = useContext(Context)

    function getData() {
        //     fetch('https://jsonplaceholder.typicode.com/todos/')
        //         .then(response => response.json())
        //         .then(data => {
        //             setTours(data)
        //         })
        axios.get("https://jsonplaceholder.typicode.com/todos/")
            .then(response => setTours(response.data))
    }

    useEffect(getData, [])

    function items(element, index) {
        return <TourItem key={index} tourName={element.title} />
    }



    return (
        <div style={currentStyle}>
            <h2>ВСЕ ТУРЫ:</h2>
            <ol>
                {tours.slice(0, 20).map(items)}
            </ol>
        </div>
    )
}
