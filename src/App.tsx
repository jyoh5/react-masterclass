import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { toDoState } from "./atoms";
import DroppableBoard from "./components/DroppableBoard";

const Wrapper = styled.div`
    display: flex;
    max-width: 680px;
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
    gap: 10px;
`;




function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = (info: DropResult) => {
        console.log(info);
        const {destination, draggableId, source} = info;
        if (!destination) return;
        if (destination?.droppableId === source.droppableId){
            // same board movement.
            setToDos(allBoards => {
                const boardCopy = [...allBoards[source.droppableId]]
                // step1. delete item on source.index
                const target = boardCopy.splice(source.index, 1);
                // step2. put back the item on the destination.index
                boardCopy.splice(destination?.index, 0, ...target);
                return {...allBoards, [source.droppableId]: boardCopy};
            })
        
        }
        if (destination?.droppableId !== source.droppableId){
            // cross board movement.
            setToDos(allBoards => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const destinationBoard = [...allBoards[destination.droppableId]];
                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination.index, 0, draggableId);
                return {...allBoards, [source.droppableId]: sourceBoard, [destination.droppableId]: destinationBoard}
            })
        }
        
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map(boradId => (
                        <DroppableBoard key={boradId} toDos={toDos[boradId]} boardId={boradId} />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
