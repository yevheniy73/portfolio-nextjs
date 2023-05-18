'use client';

import React, { useState, useEffect } from 'react';

const About = () => {

    const [activeButton, setActiveButton] = useState(2);
    const [content1Visible, setContent1Visible] = useState(false);
    const [content2Visible, setContent2Visible] = useState(true);
    const [content3Visible, setContent3Visible] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
        if (buttonIndex === 1) {
            setContent1Visible(true);
            setContent2Visible(false);
            setContent3Visible(false);
        } else if (buttonIndex === 2) {
            setContent1Visible(false);
            setContent2Visible(true);
            setContent3Visible(false);
        } else if (buttonIndex === 3) {
            setContent1Visible(false);
            setContent2Visible(false);
            setContent3Visible(true);
        }
    };

    const [lines, setLines] = useState(0);

    const handleResize = () => {
        const textElement = document.getElementById("text-content");
        const lineHeight = parseInt(getComputedStyle(textElement).lineHeight);
        const elementHeight = textElement.offsetHeight;
        const newLines = Math.ceil(elementHeight / lineHeight);
        setLines(newLines);
    };

    useEffect(() => {
        const textElement = document.getElementById("text-content");
        const resizeObserver = new ResizeObserver(entries => {
            handleResize();
        });

        resizeObserver.observe(textElement);

        window.addEventListener("resize", handleResize);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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
            {/* =======================================================================================*/}
            <div className="flex flex-row max-w-[310px] min-w-[310px] border-right">

                {/*about-me page left icon bar start -----------------------*/}
                <div id="aboutSideBar" className="max-w-[70px] min-w-[70px] h-full border-right">
                    <button
                        type="button"
                        className={`p-0 w-full h-[50px] opacity-40 ${activeButton === 1 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        <i className="ri-terminal-box-fill" />
                    </button>

                    <button
                        type="button"
                        className={`p-0 w-full h-[50px] opacity-40 ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        <i className="ri-game-fill" />
                    </button>

                    <button
                        type="button"
                        className={`p-0 w-full h-[50px] opacity-40 ${activeButton === 3 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(3)}
                    >
                        <i className="ri-gamepad-fill" />
                    </button>
                </div>
                {/*about-me page left icon bar end -------------------------*/}

                <div className="flex flex-col w-full">

                    <button id="personalInfoBtn" type="button" className="w-full h-[40px] border-bot text-left px-4">
                        personal-info
                    </button>
                    <div className="w-full h-[190px] border-bot"></div>

                    <button id="contactsBtn" type="button" className="w-full h-[40px] border-bot text-left px-4">
                        contacts
                    </button>
                    <div className="w-full flex-grow"></div>

                </div>

            </div>
            {/* =======================================================================================*/}
            <div className="flex flex-row w-full">

                {content1Visible && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">
                            {/* Content here */}
                        </div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                            <div className="w-full">
                                {/* Content here */}
                                TODO: profession-info
                            </div>
                        </div>
                    </div>
                )}
                {content2Visible && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">
                            {/* Content here */}
                        </div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">

                            <div className="grid min-w-[64px]">
                                {gridItems}
                            </div>

                            <div className="w-full">
                                <span id="text-content">
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
                {content3Visible && (
                    <div className="w-1/2 border-right flex flex-col">
                        <div className="w-full h-[40px] border-bot">
                            {/* Content here */}
                        </div>
                        <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                            <div className="w-full">
                                {/* Content here */}
                                TODO: hobbies-info
                            </div>
                        </div>
                    </div>
                )}

                {/* ---------------------------------------------------------------------------------------*/}
                <div className="w-1/2 border-right flex flex-col">
                    <div className="w-full h-[40px] border-bot">
                    </div>
                    <div className="flex flex-row flex-grow w-full gap-4 py-[20px] px-[35px]">
                        <div className="w-full">
                            // Code snippet showcase:
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
