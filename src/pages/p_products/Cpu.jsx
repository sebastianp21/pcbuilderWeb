import "./Cpu.css"
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
                 * filter div by core count, perf core clock, perf core bost clock, microar, tdp
                 * , integrated graphics
                 * FOR NAME: delete almost half name with scirpt that from a str behind  
                 * 'GHz' then the clock performnce is also removed from name 
                 * like:
                 * Intel Xeon E5 1650 V3 OEM/Tray 3.5 GHz 6-Core LGA2011-3
                 * to:
                 * Intel Xeon E5 1650 V3 OEM/Tray
                 */}




                {/**
                 * For CPUs, it shows
                 * name core count performanceCoreclock perfCoreBoosClock MicroArquic TDP Integrated Price
                 * use api for transfer specific data
                 */}
                <div className="cpu_products">
                    {cpus.map((cpu,index) =>(
                        <div className="cpu_item_row"key={index}>
                            <div className="cpu_item_specs">{cpu.metadata.name}</div>
                            <div className="cpu_item_specs">{cpu.cores.total}</div>
                            <div className="cpu_item_specs">{cpu.clocks.performance.base}</div>
                            <div className="cpu_item_specs">{cpu.clocks.performance.boost}</div>
                            <div className="cpu_item_specs">{cpu.microarchitecture}</div>
                            <div className="cpu_item_specs">{cpu.tdp}</div>
                            <div className="cpu_item_specs">Price
                                <button>Add</button>
                            </div>
                            
                        </div>
                    ))}
                </div>
                

            </div>
        </>
    )

}


export default Cpu