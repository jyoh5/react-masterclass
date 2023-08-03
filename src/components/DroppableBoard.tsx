import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import DraggableCard from "./DraggableCard";

const Board = styled.div`
    background-color: ${props => props.theme.boardColor};
    padding: 20px 10px;
    padding-top: 30px;
    border-radius: 5px;
    min-height: 200px;
`;

interface IDroppableBoardProps {
    toDos: string[];
    boardId: string;
}

function DroppableBoard({toDos, boardId}: IDroppableBoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(magic) => (
                <Board ref={magic.innerRef} {...magic.droppableProps}>
                    {toDos.map(((toDo, idx) => (
                        <DraggableCard key={idx} toDo={toDo} idx={idx} />
                    )))}
                {magic.placeholder}
                </Board>
            )}
        </Droppable>
    )
}

export default DroppableBoard;