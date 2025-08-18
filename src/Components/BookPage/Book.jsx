
import HTMLFlipBook from 'react-pageflip';
import React,{ useRef,useEffect } from 'react';

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
        <HTMLFlipBook ref={bookRef} showCover={true} width={500} height={550} maxHeight={550} minHeight={550} maxWidth={500} minWidth={500} size='stretch'  drawShadow={true}
  usePortrait={false} className="shadow-xl ">
            <Page> <img className='w-full h-full object-cover' src='/Book-cover.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/Credits.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/borders.png'/> </Page>
            <Page> <img className='w-full h-full object-cover' src='/end.png'/> </Page>
        </HTMLFlipBook>
    );
}


export default function SagaBook(){
    return(
    <>
      <Image />
      <div className='flex justify-center items-center w-full h-screen overflow-hidden'>
      <MyBook/>
      </div>
      
      
    </>
    );
}



