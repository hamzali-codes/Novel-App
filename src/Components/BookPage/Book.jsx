
import HTMLFlipBook from 'react-pageflip';
import React,{ useRef,useEffect,useState } from 'react';

function Image(){
    return(
        <img src='/sword-image.png' className='fixed w-full h-screen object-cover z-[-1] overflow-hidden' alt='background'/>
    );
}

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={`demoPage ${props.className || ""}`} ref={ref}>
            <div>
            
            <p>{props.children}</p>
            
        </div>
        </div>
    );
});

function MyBook() {
    const bookRef = useRef(null);
    const [position,setPosition] = useState('start');

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

    return (
        <div
      className={`transition-transform duration-700 ease-in-out 
      ${position === "start" ? "translate-x-[-200px]" : ""} 
      ${position === "end" ? "translate-x-[200px]" : ""} 
      ${position === "middle" ? "translate-x-0" : ""}`}
    >
        <HTMLFlipBook ref={bookRef} showCover={true} width={500} height={550} maxHeight={550} minHeight={550} maxWidth={500} minWidth={500} size='stretch'  drawShadow={true}
  usePortrait={false} align="center"
    onFlip={(e) =>{
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

  className="shadow-xl mx-auto">
            <Page> <img className='w-full h-full object-cover' src='/Book-cover.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/Credits.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/end.png'/> </Page>
        </HTMLFlipBook>
        </div>
    );
}


export default function SagaBook(){
    return(
    <>
      <Image />
      <div className='flex justify-center items-center w-full h-screen overflow-hidden flex-col '>
        <p className ='text-white mb-[16px] text-[26px] font-medium' style={{fontFamily: "'Roboto Mono', monospace"}}>The Return</p>
      <MyBook/>
      </div>
      
    </>
    );
}



