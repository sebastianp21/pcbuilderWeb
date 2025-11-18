import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import Waybar from "../components/Waybar"
import './Home.css'

function Home() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect( () => {
        fetch('/api/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    },[]);

    return (
        <>
        <Waybar/>
        <div className="landpage_container">
            <h1 className="landName">PcBuilder</h1>
            <p>A part picker website for computer components.</p>
        </div>
        <Link to="/build">
            <button >Start Build</button>
        </Link>
        <p>The current time is {new Date(currentTime * 1000).toLocaleString()}.</p>
        
        </>
    )
}

export default Home