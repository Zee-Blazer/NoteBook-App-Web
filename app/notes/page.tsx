
// Component
import LeftContainer from '../Component/left-cont.component'; // The left container main styling
import LeftSideOptComponent from './Component/left-side-opt.component'; // The left container lists
import RightContainer from '../Component/right-cont.component'; // The Right container main styling
import RightSideListComponent from './Component/right-side-list.component'; // The right list of notes

export default function Notes() {

    return (
        <div className="lg:flex h-screen bg-gray-100 block">
      {/* Left Container (20%) */}
      {/* <div className="lg:w-1/5 p-4 border-r border-gray-300 overflow-y-auto">
        
      </div> */}

      <LeftContainer>
        <LeftSideOptComponent />
      </LeftContainer>

      {/* Right Container (75%) */}
      <RightContainer>
        <RightSideListComponent />  
      </RightContainer>
    </div>
    )
}
