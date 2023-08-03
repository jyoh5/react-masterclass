import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./components/DraggableCard";
import DroppableBoard from "./components/DroppableBoard";

const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;
const Boards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
`;




function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({destination, source}: DropResult) => {
        if (!destination) return
        // setToDos(oldToDos => {
        //     const toDosCopy = [...oldToDos];
        //     // step1. delete item on source.index
        //     const target = toDosCopy.splice(source.index, 1);
        //     // step2. put back the item on the destination.index
        //     toDosCopy.splice(destination?.index, 0, ...target);
        //     return toDosCopy
        // })
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map(boradId => (
                        <DroppableBoard toDos={toDos[boradId]} boardId={boradId} />
                    ))}
                    
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
