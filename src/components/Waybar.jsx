import './Waybar.css'
import { Link } from "react-router-dom"

export default  function Waybar() {

    return (
        <>
            <div className='NavigationHeader'>
                <div className='NavNameDiv'>
                    <Link to="/">
                    <h2 className='NavName'>PcBuilder</h2>
                    </Link>
                </div>

                <div className='SearchBar'>

                    <div className='BarOptionDiv'>
                        <Link to="/build">
                        <h2 className='BarOption'>🛠️ Build</h2>
                        </Link>
                    </div>

                    <div className='BarOptionDiv'>
                        <Link to="/products">
                        <h2 className='BarOption'>Products</h2>
                        </Link>
                    </div>

                    <div className='BarOptionDiv'>
                        <h2 className='BarOption'> Guide</h2>
                    </div>
                </div>
            </div>
        </>
    )
    
}