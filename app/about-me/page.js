'use client';

import React, { useEffect, useRef, createRef, useState } from 'react';
import SideContainer from '../../components/SideContainer';
import { professionInfoText, aboutText1, aboutText2 } from '../../constants';

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
            <SideContainer
                activeButton={activeButton}
                handleButtonClick={handleButtonClick}
                handleSubClick={handleSubClick}
                contentVisible={contentVisible}
                subActiveButton={subActiveButton}
            />

            <div className="flex flex-row w-full">
                <div className="w-1/2 border-right flex flex-col">
                    <div className="w-full h-[40px] border-bot">{/* Content here */}</div>
                    <div className="flex flex-row flex-grow w-full pl-[35px] gap-4">
                        <div className="grid min-w-[64px] py-[20px]">{gridItems}</div>
                        {contentVisible[0] && (
                            <div className="w-full py-[20px]">
                                {subVisible[0] && (
                                    <span ref={textContentRefs.current[0]} className={`text-content${subVisible[0] ? ' visible' : ''}`}>
                                        <br /> 
                                        {professionInfoText}
                                    </span>
                                )}
                            </div>
                        )}
                        
                        {contentVisible[1] && (
                            <div className="w-full py-[20px]">
                                {subVisible[1] && (
                                    <span ref={textContentRefs.current[1]} className={`text-content${subVisible[1] ? ' visible' : ''}`}>
                                        <br />
                                        {aboutText1}
                                    </span>
                                )}
                                {subVisible[2] && (
                                    <span ref={textContentRefs.current[2]} className={`text-content${subVisible[2] ? ' visible' : ''}`}>
                                        <br />
                                        {aboutText2}
                                    </span>
                                )}
                                {subVisible[3] && (
                                    <span ref={textContentRefs.current[3]} className={`text-content${subVisible[3] ? ' visible' : ''}`}>
                                        <br />
                                        {aboutText2}
                                    </span>
                                )}
                            </div>
                        )}

                        {contentVisible[2] && (
                            <div className="w-full py-[20px]">         
                                {subVisible[4] && (
                                    <span ref={textContentRefs.current[4]} className={`text-content${subVisible[4] ? ' visible' : ''}`}>
                                        <br />
                                        {aboutText2}
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
