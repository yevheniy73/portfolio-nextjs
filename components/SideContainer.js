import React from 'react';
import IconBarButton from './IconBarButton';
import ContentButton from './ContentButton';
import Folder from './Folder';
import FolderContent from './FolderContent';

const SideContainer = ({ activeButton, handleButtonClick, handleSubClick, contentVisible, subActiveButton }) => (
  <div id="sideContainer" className="flex flex-row max-w-[310px] min-w-[310px] border-right">

    <div id="aboutSideBar" className="max-w-[70px] min-w-[70px] h-full border-right">
      <IconBarButton
        active={activeButton === 1}
        icon="ri-user-4-fill"
        onClick={() => handleButtonClick(1)}
      />
      <IconBarButton
        active={activeButton === 2}
        icon="ri-terminal-box-fill"
        onClick={() => handleButtonClick(2)}
      />
      <IconBarButton
        active={activeButton === 3}
        icon="ri-gamepad-fill"
        onClick={() => handleButtonClick(3)}
      />
    </div>

    <div id="aboutSideMain" className="flex flex-col w-full">
      {contentVisible[0] && (
        <div>
          <ContentButton text="personal-info" />
          <div className="my-drop-down block w-full border-bot">
            <Folder
              iconFolder="./FolderPeach.svg"
              buttonText="me"
              buttonId="per1"
              onClick={() => handleSubClick(1)}
              active={subActiveButton === 1}
            />
          </div>
        </div>
      )}
      {contentVisible[1] && (
        <div>
          <ContentButton text="profession-info" />
          <div className="my-drop-down block w-full border-bot">
            <Folder
              iconFolder="./FolderPeach.svg"
              buttonText="bio"
              buttonId="pro1"
              onClick={() => handleSubClick(2)}
              active={subActiveButton === 2}
            />
            <Folder
              iconFolder="./FolderGreen.svg"
              buttonText="interests"
              buttonId="pro2"
              onClick={() => handleSubClick(3)}
              active={subActiveButton === 3}
            />
            <Folder
              iconFolder="./FolderBlue.svg"
              buttonText="education"
              buttonId="pro3"
              onClick={() => handleSubClick(4)}
              active={subActiveButton === 4}
            />
          </div>
        </div>
      )}
      {contentVisible[2] && (
        <div>
          <ContentButton text="hobbies-info" />
          <div className="my-drop-down block w-full border-bot">
            <Folder
              iconFolder="./FolderPeach.svg"
              buttonText="gym"
              buttonId="hob1"
              onClick={() => handleSubClick(5)}
              active={subActiveButton === 5}
            />
            <div className="my-folder-content">
              <FolderContent />
            </div>
            <Folder
              iconFolder="./FolderGreen.svg"
              buttonText="anime"
              buttonId="hob2"
              onClick={() => handleSubClick(6)}
              active={subActiveButton === 6}
            />
            <Folder
              iconFolder="./FolderBlue.svg"
              buttonText="coding"
              buttonId="hob3"
              onClick={() => handleSubClick(7)}
              active={subActiveButton === 7}
            />
          </div>
        </div>
      )}
      <ContentButton text="contacts" />
      <div className="my-contacts w-full flex-grow p-[16px]">yevhen@test.com</div>
    </div>
  </div>
);

export default SideContainer;
