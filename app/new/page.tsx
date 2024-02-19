
// Components
import MainContainer from "../Component/main-cont.component";
import LeftContainer from "../Component/left-cont.component";
import RightContainer from "../Component/right-cont.component";
import Editor from "./Components/editor";

export default function NewNote() {

    return (
        <MainContainer>
            <LeftContainer>
                Hello
            </LeftContainer>

            <RightContainer>
                <Editor />
            </RightContainer>
        </MainContainer>
    )
}
