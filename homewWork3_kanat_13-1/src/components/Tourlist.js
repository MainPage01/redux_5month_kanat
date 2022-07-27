import React from 'react';
import TourItem from './TourItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tourlist({mode}) {

    // const tours = [
    //     {
    //         name: "tale",
    //         price: 100
    //     },
    //     {
    //         name: "property",
    //         price: 100
    //     },
    //     {
    //         name: "main",
    //         price: 3000
    //     }
    // ]

    const [tours, setTours] = useState([])


    function getData(){
        // fetch("https://jsonplaceholder.typicode.com/todos/")

        // .then(response => response.json())
        // .then(data => {
        //     setTours(data)
        // })

        axios.get("https://jsonplaceholder.typicode.com/todos/")
        .then(response => setTours(response.data))


    }

useEffect (getData, [])
   

    function items(element, index) {
        return (
            <TourItem key={ index } tourName={ element.title  } />
        )
    }

    const style ={
        day:{
            color: "black",
            backgroundColor:"white",
        },
        night:{
            padding:"0",
            color: "white",
            backgroundColor:"black",
        }
    }

    const currentStyle =mode.current === "day" ? style.day : style.night
    return (
        <div style={currentStyle}>
            <h2>список туров</h2>
            <ul>
                { tours.map(items) }
            </ul>

        </div>
    );
}

