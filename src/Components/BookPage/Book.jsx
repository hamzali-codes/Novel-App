
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

    return (                                                           // we use translates through x axis because they are smoother.
        <div
      className={`transition-transform duration-700 ease-in-out   
      ${position === "start" ? "translate-x-[-240px]" : ""}        
      ${position === "end" ? "translate-x-[240px]" : ""} 
      ${position === "middle" ? "translate-x-0" : ""}`}
    >
        <HTMLFlipBook ref={bookRef} showCover={true} width={500} height={550} maxHeight={550} minHeight={550} maxWidth={500} minWidth={500} size='stretch'  drawShadow={true}
  usePortrait={false} align="center"
    onFlip={(e) =>{
        const page = e.data;                                                      // Current Page Number
        const total = bookRef.current.pageFlip().getPageCount() - 1;              // We subtract 1 because page number starts from 0 not 1.
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
    const [active,setActive] = useState(false);
    return(
    <>
      <Image />
     
      <div className='flex justify-center items-center w-full h-screen overflow-hidden flex-col '>
        <div className='flex justify-between w-full h-0 '>
         <svg className='text-[#D4AF37] cursor-pointer w-8 h-10 ml-[50px] mt-0 overflow-hidden' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
<svg onClick={()=> setActive(!active)} className='text-[#D4AF37] hover:h-11  w-7 h-10 mr-[50px] mt-0 cursor-pointer overflow-hidden ' xmlns="http://www.w3.org/2000/svg" fill={active ? "#D4AF37": "none"} viewBox="0 0 24 24" stroke-width="1.5" stroke={active ? "none" : "#D4AF37"} >
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
  />
</svg>
 </div>
        <p className ='text-white mb-[16px] mt-0 text-[26px] font-medium' style={{fontFamily: "'Roboto Mono', monospace"}}>The Return</p>
      <MyBook/>
      </div>
      
    </>
    );
}



