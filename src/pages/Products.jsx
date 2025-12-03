import "./Products.css"
import Waybar from "../components/Waybar"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

function Products() {
    

    return (
        <>
            <Waybar/>
            <div className="land_products">
                <div className="land_products_title">
                    <h1 className="products_title" >Products category</h1>
                </div>
                <div className="land_products">
                    <h2>Core</h2>
                    <ul>
                        <Link to={"/products/cpu"}><li>CPUs</li></Link>
                        <Link to={"/products/moth"}><li>Motherboards</li></Link>
                        {/* <li>Motherboards</li> */}
                        <li>CPU Coolers</li>
                        <li>Memory</li>
                        <li>Storage</li>
                        <li>Video Cards</li>
                        <li>Cases</li>
                        <li>Power Supplies</li>
                        <li>Operating Systems</li>
                        <li>Monitors</li>
                    </ul>

                    <h2>Expansion Cards / Networking</h2>
                    <ul>
                        <li>Sound Cards</li>
                        <li>Wired Network Adapters</li>
                        <li>Wireless Network Adapters</li>
                    </ul>

                    <h2>Continue ...</h2>
                </div>
                {/*add pc components
                is based on products page 
                
                */}
            </div>
        </>
    )

}

export default Products