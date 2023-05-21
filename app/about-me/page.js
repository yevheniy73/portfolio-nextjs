'use client';

import React, { useEffect, useRef, createRef, useState } from 'react';
import IconBarButton from '../../components/IconBarButton';
import ContentButton from '../../components/ContentButton';
import Section from '../../components/Section';

const About = () => {
    const [activeButton, setActiveButton] = useState(2);
    const [contentVisible, setContentVisible] = useState([false, false, false]);

    const [subActiveButton, setSubActiveButton] = useState(2);
    const [subVisible, setSubVisible] = useState([false, false, false, false, false, false, false]);

    const [lines, setLines] = useState(0);
    const textContentRefs = useRef([]);
    const [initialLoad, setInitialLoad] = useState(true);

    // Initialize the refs for each <span> element
    useEffect(() => {
        textContentRefs.current = Array(subVisible.length)
            .fill()
            .map((_, index) => textContentRefs.current[index] || createRef());

        // Simulate a click on the second section to activate it after the component mounts
        if (initialLoad) {
            handleButtonClick(2);
            handleSubClick(2);
            setInitialLoad(false);
        }
    }, [initialLoad]);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        const newContentVisible = contentVisible.map((_, index) => index + 1 === buttonIndex);
        setContentVisible(newContentVisible);
        handleResize();
    };

    const handleSubClick = (buttonIndex) => {
        setSubActiveButton(buttonIndex);
        const newSubVisible = subVisible.map((_, index) => index + 1 === buttonIndex);
        setSubVisible(newSubVisible);
        handleResize();
    };
      
    const handleResize = () => {
        const textElement = textContentRefs.current[subActiveButton - 1]?.current;
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

        const textElement = textContentRefs.current[subActiveButton - 1]?.current;
        if (subVisible[subActiveButton - 1] && textElement) {
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
    }, [subActiveButton, subVisible]);

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

            <div className="flex flex-row w-full">
                <div className="w-1/2 border-right flex flex-col">
                    <div className="w-full h-[40px] border-bot">{/* Content here */}</div>
                    <div className="flex flex-row flex-grow w-full pl-[35px] gap-4">
                        <div className="grid min-w-[64px] py-[20px]">{gridItems}</div>
                        {contentVisible[0] && (
                            <div className="w-full py-[20px]">
                                {subVisible[0] && (
                                    <span ref={textContentRefs.current[0]} className={`text-content${subVisible[0] ? ' visible' : ''}`}>
                                        <br></br>  
                                        TODO: profession-info
                                    </span>
                                )}
                            </div>
                        )}
                        {contentVisible[1] && (
                            <div className="w-full py-[20px]">
                                {subVisible[1] && (
                                    <span ref={textContentRefs.current[1]} className={`text-content${subVisible[1] ? ' visible' : ''}`}>
                                        <br></br>
                                        Hi, I'm Yevhen! I'm a final year Honors Computing Science student at the University of Alberta,
                                        with over a year of professional experience as a software developer. I am passionate about coding
                                        and constantly seeking new knowledge and skills to stay up-to-date in this rapidly-evolving field.
                                        In my downtime, I enjoy watching anime and staying active at the gym.
                                    </span>
                                )}
                                {subVisible[2] && (
                                    <span ref={textContentRefs.current[2]} className={`text-content${subVisible[2] ? ' visible' : ''}`}>
                                        <br></br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                )}
                                {subVisible[3] && (
                                    <span ref={textContentRefs.current[3]} className={`text-content${subVisible[3] ? ' visible' : ''}`}>
                                        <br></br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                )}
                            </div>
                        )}

                        {contentVisible[2] && (
                            <div className="w-full py-[20px]">         
                                {subVisible[4] && (
                                    <span ref={textContentRefs.current[4]} className={`text-content${subVisible[4] ? ' visible' : ''}`}>
                                        <br></br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="w-[26px] min-w-[26px] h-full border-left"></div>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col">
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
