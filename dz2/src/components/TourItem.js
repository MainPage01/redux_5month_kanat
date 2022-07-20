import React, { useContext } from 'react'
import TourList from './TourList'
import { Context } from '../context';

export default function TourItem({ tourName }) {
    const { items } = useContext(Context);
    return (
        <li style={{ marginBottom: '10px', fontSize: '20px' }}>{tourName}</li>
    )
}
