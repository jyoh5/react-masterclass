import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Card = styled.div`
    background-color: ${props => props.theme.cardColor};
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 5px;
`;

interface IDraggableCardProps {
    toDo: string;
    idx: number;
}

function DraggableCard({toDo, idx}: IDraggableCardProps) {
    return (
        <Draggable key={toDo} draggableId={toDo} index={idx}>
            {(magic) => (
                <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
                    {toDo}
                </Card>
            )}
        </Draggable>
    )
}

// React.memo(props가 변경되지 않았다면 마지막으로 렌더링된 결과를 재사용함)
export default React.memo(DraggableCard);