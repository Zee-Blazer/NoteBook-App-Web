
// Component
import MainContainer from '../Component/main-cont.component';
import LeftContainer from '../Component/left-cont.component'; // The left container main styling
import LeftSideOptComponent from './Component/left-side-opt.component'; // The left container lists
import RightContainer from '../Component/right-cont.component'; // The Right container main styling
import RightSideListComponent from './Component/right-side-list.component'; // The right list of notes

export default function Notes() {

    return (
      <MainContainer>

        <LeftContainer>
          <LeftSideOptComponent />
        </LeftContainer>

        {/* Right Container (75%) */}
        <RightContainer>
          <RightSideListComponent />  
        </RightContainer>

      </MainContainer>
    )
}
