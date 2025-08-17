
import HTMLFlipBook from 'react-pageflip';
import React,{ useRef } from 'react';

function Image(){
    return(
        <img src='/sword-image.png' className='fixed w-full h-screen object-cover z-[-1] overflow-hidden' alt='background'/>
    );
}

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={`demoPage ${props.className || ""}`} ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function MyBook(props) {
    
    return (
        <HTMLFlipBook showCover={true} width={500} height={550} maxHeight={550} minHeight={550} maxWidth={500} minWidth={500} size='stretch'  drawShadow={true}
  usePortrait={false} className="shadow-xl">
            <img src='/Book-cover.png'/>
            <img src='/Credits.png'/>
            <Page className ='bg-[#1A1A1A] border-[0.2px] border-white m-0' number="1">Page text</Page>
            <Page className ='bg-[#1A1A1A] border-[0.2px] border-white m-0 ' number="2">Page text</Page>
            <Page className ='bg-[#1A1A1A] border-[0.2px] border-white m-0' number="3">Page text</Page>
            <Page className ='bg-[#1A1A1A] m-0' number="4">Page text</Page>
        </HTMLFlipBook>
    );
}


export default function SagaBook(){
    return(
    <>
      <Image />
      <div className='flex justify-center items-center w-full h-screen overflow-hidden'>
        <div className="flex justify-center items-center h-[700px]">
      <MyBook/>
      </div>
      </div>
      
    </>
    );
}



