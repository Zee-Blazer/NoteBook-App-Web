
// Icon
import AddIcon from '@mui/icons-material/Add';

// Component
import DivCont from "../div-cont";

export default function RightSideListComponent() {

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    
                    <button className="ml-2 p-2 bg-blue-500 text-white rounded-full">
                        <AddIcon />
                    </button>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="text-2xl">🌐</div>
                    <div className="text-2xl">📊</div>
                </div>
            </div>
            
            <div className="">
                <DivCont />
                <DivCont />
                <DivCont />
                <DivCont />
                <DivCont />
            </div>
        </>
    )
}
