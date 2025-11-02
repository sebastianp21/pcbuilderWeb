import "./p_products.css"
import Waybar from "../../components/Waybar"
import { useEffect, useState } from "react"

function Cpu() {

    const [cpus, setCpus] = useState([]);
    
    useEffect( () => {
        fetch('/api/cpu')
        .then(res => res.json())
        .then(data => setCpus(data))
},[]);

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
                    {cpus.map((cpu,index) =>(
                        <div className="cpu_item_row"key={index}>
                            <div>{cpu.metadata.name}</div>
                        </div>
                    ))}
                </div>
                

            </div>
        </>
    )

}


export default Cpu