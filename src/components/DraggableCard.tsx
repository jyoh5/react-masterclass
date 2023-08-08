import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Card = styled.div<{isDragging: boolean}>`
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 5px;
    background-color: ${props => props.isDragging ? "#74b9ff" : props.theme.cardColor};
    box-shadow: ${props => props.isDragging ? "0px 2px 5px rgba(0,0,0,0.05)" : "none"};
`;

interface IDraggableCardProps {
    toDo: string;
    idx: number;
}

function DraggableCard({toDo, idx}: IDraggableCardProps) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={idx}>
            {(magic, snapshot) => (
                <Card 
                    isDragging={snapshot.isDragging}
                    ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    )
}

// React.memo(props가 변경되지 않았다면 마지막으로 렌더링된 결과를 재사용함)
export default React.memo(DraggableCard);