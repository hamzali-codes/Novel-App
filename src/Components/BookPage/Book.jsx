import HTMLFlipBook from 'react-pageflip';
import React, { useRef, useEffect, useState } from 'react';

function Image() {
    return (
        <img 
            src='/sword-image.png' 
            className='fixed w-full h-screen object-cover z-[-1] overflow-hidden' 
            alt='background'
        />
    );
}

const Page = React.forwardRef((props, ref) => {
    return (
        // Always add the default "demoPage" class, and if parent gives extra classes (props.className), add them too
        <div className={"demoPage " + (props.className ? props.className : "")} ref={ref}>  
            <div>
                <p>{props.children}</p>
            </div>
        </div>
    );
});

function MyBook({ active, setActive, onToggleBookmark }) {
    const bookRef = useRef(null);
    const [position, setPosition] = useState('start');
    const [bookmarkedPage, setBookmarkedPage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!bookRef.current) return;

            if (e.key === "ArrowRight") {
                bookRef.current.pageFlip().flipNext();
            }
            if (e.key === "ArrowLeft") {
                bookRef.current.pageFlip().flipPrev();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (bookRef.current && bookmarkedPage !== null) {
            // Add a small delay to ensure the book is fully loaded
            setTimeout(() => {
                try {
                    bookRef.current.pageFlip().flip(bookmarkedPage);
                } catch (error) {
                    console.log("Failed to flip to bookmarked page:", error);
                }
            }, 100);
        }
    }, [bookmarkedPage]);

    // Restore On refresh
    useEffect(() => {
        const savedPage = localStorage.getItem("bookmarkPage");
        if (savedPage != null) {
            const pageNum = parseInt(savedPage);
            // Wait for book to be ready before flipping
            const checkAndFlip = () => {
                if (bookRef.current && bookRef.current.pageFlip) {
                    try {
                        setBookmarkedPage(pageNum);
                        setActive(true);
                    } catch (error) {
                        // If still not ready, try again after a short delay
                        setTimeout(checkAndFlip, 100);
                    }
                } else {
                    setTimeout(checkAndFlip, 100);
                }
            };
            // Start checking after component mounts
            setTimeout(checkAndFlip, 200);
        }
    }, [setActive]);

    // Expose bookRef to parent component
    useEffect(() => {
        if (onToggleBookmark && bookRef.current) {
            onToggleBookmark(bookRef);
        }
    }, [onToggleBookmark]);

    return (
        <div
            className={`transition-transform duration-700 ease-in-out   
                ${position === "start" ? "translate-x-[-240px]" : ""}        
                ${position === "end" ? "translate-x-[240px]" : ""} 
                ${position === "middle" ? "translate-x-0" : ""}`}
        >
            <HTMLFlipBook 
                ref={bookRef} 
                showCover={true} 
                width={475} 
                height={550} 
                maxHeight={550} 
                minHeight={550} 
                maxWidth={475} 
                minWidth={475} 
                size='stretch'  
                drawShadow={true}
                usePortrait={false} 
                align="center"
                onFlip={(e) => {
                    const page = e.data;
                    const total = bookRef.current.pageFlip().getPageCount() - 1;
                    if (page === 0) {
                        setPosition('start');
                    } else if (page === total) {
                        setPosition('end');
                    } else {
                        setPosition('middle');
                    }
                }}
                className="shadow-xl mx-auto"
            >
                <Page> 
                    <img className='w-full h-full object-cover' src='/Book-cover.png'/> 
                </Page>
                <Page> 
                    <img className='w-full h-full object-cover' src='/Credits.png'/> 
                </Page>
                <Page> 
                    <img className='w-full h-full object-cover' src='/borders.png'/> 
                </Page>
                <Page> 
                    <img className='w-full h-full object-cover' src='/borders.png'/> 
                </Page>
                <Page> 
                    <img className='w-full h-full object-cover' src='/borders.png'/> 
                </Page>
                <Page> 
                    <img className='w-full h-full object-cover' src='/end.png'/> 
                </Page>
            </HTMLFlipBook>
        </div>
    );
}

export default function SagaBook() {
    const [active, setActive] = useState(false);
    const [bookRef, setBookRef] = useState(null);

    // Bookmark toggle function
    const toggleBookmark = () => {
        if (!bookRef || !bookRef.current) return;
        
        if (active) {
            localStorage.removeItem("bookmarkPage");
            setActive(false);
        } else {
            try {
                const currentPage = bookRef.current.pageFlip().getCurrentPageIndex();
                localStorage.setItem("bookmarkPage", currentPage.toString());
                setActive(true);
            } catch (error) {
                console.log("Error getting current page:", error);
            }
        }
    };

    return (
        <>
            <Image />
            <div className='flex justify-center items-center w-full h-screen overflow-hidden flex-col '>
                <div className='flex justify-between w-full h-0 '>
                    <svg 
                        className='text-[#D4AF37] cursor-pointer w-8 h-10 ml-[50px] mt-0 overflow-hidden' 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <svg 
                        onClick={toggleBookmark} 
                        className='text-[#D4AF37] hover:h-11  w-7 h-10 mr-[50px] mt-0 cursor-pointer overflow-hidden ' 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill={active ? "#D4AF37": "none"} 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke={active ? "none" : "#D4AF37"} 
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </div>
                <p className ='text-white mb-[10px] mt-0 text-[26px] font-medium' style={{fontFamily: "'Roboto Mono', monospace"}}>The Return</p>
                <MyBook 
                    active={active} 
                    setActive={setActive} 
                    onToggleBookmark={setBookRef}
                />
            </div>
        </>
    );
}