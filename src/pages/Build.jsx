import "./Build.css"
import Waybar from "../components/Waybar"
import { Link } from "react-router-dom"

function Build() {
    

    return (
        <>
            <Waybar/>
            <div className="land_build">
                <div className="land_build_div_title">
                    <h1 className="build_title" >Choose Your Parts</h1>
                </div>
                <div className="build_selectionList">
                    <Link to={"/products/cpu"}><div className="b_component">Cpu</div></Link>
                    <div className="b_component">Motherboard</div>
                    <div className="b_component">Memory</div>
                    <div className="b_component">Storage</div>
                    {/**
                     * Make component for build sections cpu, motherboard selections
                     */}
                </div>

            </div>
        </>
    )

}

export default Build