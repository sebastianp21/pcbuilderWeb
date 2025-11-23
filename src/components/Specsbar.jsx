import './Specsbar.css'

export default function Specsbar() {



    const dataSpecsCPU = {
        specName : 'Name',
        specCores : 'Core Count',
        specPerfCore : 'Performance Core Clock',
        specPerfCoreBoost : 'Performance Core Boost Clock',
        spechMicroarch : 'Microarchitecture',
        specPrice : 'Price'

    };

    return (
        <>
            <div className="specsbars_cont cpu_item_row">
                
                {Object.keys(dataSpecsCPU).map((key) => (
                    <div className=" specsbars_div" key={key}>
                        <div className='specButton'>
                            <span>^</span>
                            <p className='specsFont'>{dataSpecsCPU[key]}</p>
                        </div>
                        
                    </div>
                ))
                }
            </div>
        </>
    )
}