import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavIconProps {
    src: string;
    alt: string;
    navigateTo: string;
    width: string;  
    height: string;
  }
  

const NavigatingFooter: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavIconProps[] = [
    { src: "/assets/Group 1.svg", alt: "Friends", navigateTo: "/friends", width: "22px", height: "35.81px" },
    { src: "/assets/Message-bubble.svg", alt: "Chat", navigateTo: "/", width: "30px", height: "29px" },
    { src: "/assets/Call.svg", alt: "Phone", navigateTo: "/phone", width: "32px", height: "31px" },
  ];

  return (
    <FooterContainer>
      <IconContainer>
        {navItems.map(item => (
          <NavIcon
            key={item.alt}
            src={location.pathname === item.navigateTo ? item.src.replace(".svg", "-active.svg") : item.src}             //현재 위치 추적해서 아이콘 색깔바꾸기
            alt={item.alt}
            onClick={() => navigate(item.navigateTo)}
            width={item.width}
            height={item.height}
          />
        ))}
      </IconContainer>
    </FooterContainer>
  );
};
export default NavigatingFooter;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 42px; 
  background-color: #f7f8fc;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: space-between;
  width: 212px;
`;

const NavIcon = styled.img<{ width: string; height: string}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;