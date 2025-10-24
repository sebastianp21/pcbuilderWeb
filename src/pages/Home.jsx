import { Link } from "react-router-dom"
import Waybar from "../components/Waybar"
import './Home.css'

function Home() {

    return (
        <>
        <Waybar/>
        <div className="landpage_container">
            <h1 className="landName">PcBuilder</h1>
            <p>A part picker website for computer components</p>
        </div>
        <Link to="/build">
            <button >Start Build</button>
        </Link>
        </>
    )
}

export default Home