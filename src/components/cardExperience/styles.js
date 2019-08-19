import styled from "styled-components";

const Experience = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.15s ease;

    border: 0;
    color: #FFF;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    margin: 10px;
    padding: 10px;

        &:hover {
            transform: scale(1.2);
        }
`;

export default Experience;
