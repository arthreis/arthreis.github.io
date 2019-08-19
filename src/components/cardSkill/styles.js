import styled from "styled-components";

export const Skill = styled.div`
    border-radius: 3px;
    transition: background-color 0.15s ease;
    background: #7289da;
    border: 0;
    color: #FFF;
    font-size: 18px;
    padding: 0 10px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;

    margin: 10px;
    padding: 10px;

        &:hover {
            background: yellow;
            opacity: 0.6;

        }
`;

export const Dot = styled.div`
    height: 25px;
    width: 25px;
    background-color: #2929b8;
    border-radius: 50%;
    display: inline-block;
`;
