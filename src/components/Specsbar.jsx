import './Specsbar.css'

function SpecsOption(specs, children) {
    const[isActive,setIsActive] = useState(false);

    return (
        <>
        <div className='specButton' onClick={
            () => alert(dataSpecsCPU[key])
            }>
            <span>^</span>
            <p className='specsFont'>{specs}</p>
        </div>
        <p>{children}</p>
        </>

    );

}

export default function Specsbar() {

    {/**
        Change const to Name : 'cpu.metadata.name'
        https://react.dev/learn/sharing-state-between-components
        #https://react.dev/learn/sharing-state-between-components 
        */}

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
                        <div className='specButton' onClick={
                            () => alert(dataSpecsCPU[key])
                        }>
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