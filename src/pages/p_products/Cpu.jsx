import "./p_products.css"
import Waybar from "../../components/Waybar"

function Cpu() {
    

    return (
        <>
            <Waybar/>
            <div className="land_p">
                <div className="land_p_title">
                    <h1 className="p_title" >CPUs</h1>
                </div>
                {/**
                 * For CPUs, it shows
                 * name core count performanceCoreclock perfCoreBoosClock MicroArquic TDP Integrated Price
                 * use api for transfer specific data
                 */}

                <div>

                </div>

            </div>
        </>
    )

}


export default Cpu