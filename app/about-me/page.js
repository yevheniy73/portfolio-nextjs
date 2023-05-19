'use client';

import React, { useEffect, useRef, createRef, useState } from 'react';
import IconBarButton from '../../components/IconBarButton';
import ContentButton from '../../components/ContentButton';

const About = () => {
    const [activeButton, setActiveButton] = useState(2);
    const [contentVisible, setContentVisible] = useState([false, true, false]);
    const [lines, setLines] = useState(0);
    const textContentRefs = useRef([]);
    const [initialLoad, setInitialLoad] = useState(true);
  
    // Initialize the refs for each <span> element
    useEffect(() => {
      textContentRefs.current = Array(3)
        .fill()
        .map((_, index) => textContentRefs.current[index] || createRef());
  
      // Simulate a click on the second section to activate it after the component mounts
      if (initialLoad) {
        handleButtonClick(2);
        setInitialLoad(false);
      }
    }, [initialLoad]);
  
    const handleButtonClick = (buttonIndex) => {
      setActiveButton(buttonIndex);
      const newContentVisible = contentVisible.map((_, index) => index + 1 === buttonIndex);
      setContentVisible(newContentVisible);
      handleResize();
    };
  
    const handleResize = () => {
      const textElement = textContentRefs.current[activeButton - 1]?.current;
      if (textElement) {
        const lineHeight = parseInt(getComputedStyle(textElement).lineHeight);
        const elementHeight = textElement.offsetHeight;
        const newLines = Math.ceil(elementHeight / lineHeight);
        setLines(newLines);
      }
    };
  
    useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
  
      const textElement = textContentRefs.current[activeButton - 1]?.current;
      if (contentVisible[activeButton - 1] && textElement) {
        resizeObserver.observe(textElement);
      }
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => {
        if (textElement) {
          resizeObserver.unobserve(textElement);
        }
        window.removeEventListener('resize', handleResize);
      };
    }, [activeButton, contentVisible]);
  
    const gridItems = [];
  
    for (let i = 1; i <= lines + 1; i++) {
      let content = '*';
  
      if (i === 1) {
        content = '/**'; // Replacing the first *
      } else if (i === lines + 1) {
        content = '*/'; // Replacing the last *
      }
  
      gridItems.push(
        <React.Fragment key={i}>
          <div className="grid-cell">{i}</div>
          <div className="grid-cell">{content}</div>
        </React.Fragment>
      );
    }

    return (
        <div className="w-full h-full flex flex-row">
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
                        <div className="w-full h-[190px] border-bot"></div>
                        <ContentButton onClick={() => { }} text="contacts" />
                        <div className="w-full flex-grow"></div>
                    </div>
                )}
                {contentVisible[1] && (
                    <div className="flex flex-col w-full">
                        <ContentButton onClick={() => { }} text="profession-info" />
                        <div className="my-drop-down block w-full h-[190px] border-bot">
                            <button id="pro1" type="button" className="w-full h-[28px] text-left px-4">
                                bio
                            </button>
                            <button id="pro2" type="button" className="w-full h-[28px] text-left px-4">
                                interests
                            </button>
                            <button id="pro3" type="button" className="w-full h-[28px] text-left px-4">
                                education
                            </button>
                        </div>
                        <ContentButton onClick={() => { }} text="contacts" />
                        <div className="w-full flex-grow"></div>
                    </div>
                )}
                {contentVisible[2] && (
                    <div className="flex flex-col w-full">
                        <ContentButton onClick={() => { }} text="hobbies-info" />
                        <div className="w-full h-[190px] border-bot"></div>
                        <ContentButton onClick={() => { }} text="contacts" />
                        <div className="w-full flex-grow"></div>
                    </div>
                )}
            </div>

            <div className="flex flex-row w-full">
                {contentVisible[0] && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">{/* Content here */}</div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                            <div className="grid min-w-[64px]">{gridItems}</div>    
                            <div className="w-full">
                                <span ref={textContentRefs.current[0]} className={`text-content${contentVisible[0] ? ' visible' : ''}`}>
                                    TODO: profession-info
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                {contentVisible[1] && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">{/* Content here */}</div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                            <div className="grid min-w-[64px]">{gridItems}</div>
                            <div className="w-full">
                                {/* Add "visible" class based on contentVisible */}
                                <span ref={textContentRefs.current[1]} className={`text-content${contentVisible[1] ? ' visible' : ''}`}>
                                    <br></br>
                                    Hi, I'm Yevhen! I'm a final year Honors Computing Science student at the University of Alberta,
                                    with over a year of professional experience as a software developer. I am passionate about coding
                                    and constantly seeking new knowledge and skills to stay up-to-date in this rapidly-evolving field.
                                    In my downtime, I enjoy watching anime and staying active at the gym.
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                {contentVisible[2] && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">{/* Content here */}</div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                            <div className="grid min-w-[64px]">{gridItems}</div>  
                            <div className="w-full">
                                <span ref={textContentRefs.current[2]} className={`text-content${contentVisible[2] ? ' visible' : ''}`}>
                                    <br></br>
                                    Hi, I'm Yevhen! I'm a final year Honors Computing Science student at the University of Alberta,
                                    with over a year of professional experience as a software developer. I am passionate about coding
                                </span>   
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-1/2 border-right flex flex-col">
                    <div className="w-full h-[40px] border-bot"></div>
                    <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                        <div className="w-full">
                            {/* Code snippet showcase */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;