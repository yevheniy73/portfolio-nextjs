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
            <div className="my-folder-content">
              <FolderContent folderText={"bio.html"} />
            </div>
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
            <div className="my-folder-content">
              <FolderContent folderText={"bio.html"} />
            </div>
            <Folder
              iconFolder="./FolderGreen.svg"
              buttonText="interests"
              buttonId="pro2"
              onClick={() => handleSubClick(3)}
              active={subActiveButton === 3}
            />
            <div className="my-folder-content">
              <FolderContent folderText={"interests.jsx"} />
            </div>
            <Folder
              iconFolder="./FolderBlue.svg"
              buttonText="education"
              buttonId="pro3"
              onClick={() => handleSubClick(4)}
              active={subActiveButton === 4}
            />
            <div className="my-folder-content">
              <FolderContent folderText={"education.txt"} />
            </div>
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
              <FolderContent folderText={"gym.xml"} />
            </div>
            <Folder
              iconFolder="./FolderGreen.svg"
              buttonText="anime"
              buttonId="hob2"
              onClick={() => handleSubClick(6)}
              active={subActiveButton === 6}
            />
            <div className="my-folder-content">
              <FolderContent folderText={"anime.txt"} />
            </div>
            <Folder
              iconFolder="./FolderBlue.svg"
              buttonText="coding"
              buttonId="hob3"
              onClick={() => handleSubClick(7)}
              active={subActiveButton === 7}
            />
            <div className="my-folder-content">
              <FolderContent folderText={"coding.py"} />
            </div>
          </div>
        </div>
      )}
      <ContentButton text="contacts" />
      <div className="my-contacts w-full flex flex-col flex-grow px-[16px] py-[10px]">
        <a href="mailto:kaznovsk@ualberta.ca" className="w-full h-[40px] text-left flex flex-row justify-start items-center">kaznovsk@ualberta.ca</a>
        {/*<a href="/Yevhen_Kaznovskyi_CV2023.pdf" className="w-full h-[40px] text-left flex flex-row justify-start items-center" target="_blank">View Resume</a>*/}
      </div>
    </div>
  </div>
);

export default SideContainer;
