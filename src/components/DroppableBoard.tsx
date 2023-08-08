import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import DraggableCard from "./DraggableCard";


const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
    isDraggingOver: boolean;
    isDraggingFromThisWith:boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${props => props.isDraggingOver ? "#dfe6e9": (props.isDraggingFromThisWith ? "#b2bec3" : "transparent")};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

interface IDroppableBoardProps {
    toDos: string[];
    boardId: string;
}

function DroppableBoard({toDos, boardId}: IDroppableBoardProps) {
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area 
                        isDraggingOver={info.isDraggingOver}
                        isDraggingFromThisWith={Boolean(info.draggingFromThisWith)}
                        ref={magic.innerRef} {...magic.droppableProps}
                    >
                        {toDos.map(((toDo, idx) => (
                            <DraggableCard key={idx} toDo={toDo} idx={idx} />
                        )))}
                    {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
    )
}

export default DroppableBoard;