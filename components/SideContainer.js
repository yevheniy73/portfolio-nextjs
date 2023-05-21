import React from 'react';
import IconBarButton from '../components/IconBarButton';
import ContentButton from '../components/ContentButton';
import Section from '../components/Section';

const SideContainer = ({ activeButton, handleButtonClick, handleSubClick, contentVisible, subActiveButton }) => {
  return (
    <div id="sideContainer" className="flex flex-row max-w-[310px] min-w-[310px] border-right">
      <div id="aboutSideBar" className="max-w-[70px] min-w-[70px] h-full border-right">
        <IconBarButton
          active={activeButton === 1}
          icon="ri-terminal-box-fill"
          onClick={() => handleButtonClick(1)}
        />
        <IconBarButton
          active={activeButton === 2}
          icon="ri-game-fill"
          onClick={() => handleButtonClick(2)}
        />
        <IconBarButton
          active={activeButton === 3}
          icon="ri-gamepad-fill"
          onClick={() => handleButtonClick(3)}
        />
      </div>
      {contentVisible[0] && (
        <div className="flex flex-col w-full">
          <ContentButton onClick={() => { }} text="personal-info" />
          <div className="my-drop-down block w-full h-[190px] border-bot">
            <Section
              iconFolder="./FolderPeach.svg"
              buttonText="me"
              buttonId="pro1"
              onClick={() => handleSubClick(1)}
              active={subActiveButton === 1}
            />
          </div>
          <ContentButton onClick={() => { }} text="contacts" />
          <div className="w-full flex-grow"></div>
        </div>
      )}
      {contentVisible[1] && (
        <div className="flex flex-col w-full">
          <ContentButton onClick={() => { }} text="profession-info" />
          <div className="my-drop-down block w-full h-[190px] border-bot">
            <Section
              iconFolder="./FolderPeach.svg"
              buttonText="bio"
              buttonId="pro1"
              onClick={() => handleSubClick(2)}
              active={subActiveButton === 2}
            />
            <Section
              iconFolder="./FolderGreen.svg"
              buttonText="interests"
              buttonId="pro2"
              onClick={() => handleSubClick(3)}
              active={subActiveButton === 3}
            />
            <Section
              iconFolder="./FolderBlue.svg"
              buttonText="education"
              buttonId="pro3"
              onClick={() => handleSubClick(4)}
              active={subActiveButton === 4}
            />
          </div>
          <ContentButton onClick={() => { }} text="contacts" />
          <div className="w-full flex-grow"></div>
        </div>
      )}
      {contentVisible[2] && (
        <div className="flex flex-col w-full">
          <ContentButton onClick={() => { }} text="hobbies-info" />
          <div className="my-drop-down block w-full h-[190px] border-bot">
            <Section
              iconFolder="./FolderPeach.svg"
              buttonText="gym"
              buttonId="hob1"
              onClick={() => handleSubClick(5)}
              active={subActiveButton === 5}
            />
            <Section
              iconFolder="./FolderGreen.svg"
              buttonText="anime"
              buttonId="hob2"
            />
            <Section
              iconFolder="./FolderBlue.svg"
              buttonText="coding"
              buttonId="hob3"
            />
          </div>
          <ContentButton onClick={() => { }} text="contacts" />
          <div className="w-full flex-grow"></div>
        </div>
      )}
    </div>
  );
};

export default SideContainer;
