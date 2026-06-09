import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateBorder = keyframes`
  0% {
    border-color: #00f2fe;
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.4);
  }
  50% {
    border-color: #7f00ff;
    box-shadow: 0 0 20px rgba(127, 0, 255, 0.6);
  }
  100% {
    border-color: #00f2fe;
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.4);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  border: 3px solid #00f2fe;
  animation: ${rotateBorder} 6s infinite ease-in-out;
  object-fit: cover;
  background-color: #0d0f14;
`;

const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const NameText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const RoleText = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 1.3rem;
  color: #00f2fe;
  font-weight: 500;
  background-color: rgba(0, 242, 254, 0.05);
  border: 1px solid rgba(0, 242, 254, 0.15);
  padding: 2px 8px;
  border-radius: 4px;
  width: fit-content;
`;

const MainInfo = ({ info, lastFunction }) => {
  return (
    <InfoContainer>
      <AvatarWrapper>
        <ProfileImg
          src={'https://1.gravatar.com/avatar/d013f72b5df113ab423e5135bbc2b802?s=150'}
          alt='profile'
          height='60px'
          width='60px'
        />
      </AvatarWrapper>
      <TextDetails>
        <NameText>
          {info.firstname} {info.middlename} {info.lastname}
        </NameText>
        {lastFunction && <RoleText>{lastFunction}</RoleText>}
      </TextDetails>
    </InfoContainer>
  );
};

export default MainInfo;
