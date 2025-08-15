function Image(){
    return(
        <img src='/sword-image.png' className='fixed w-full h-screen object-cover z-[-1] overflow-hidden'></img>
    );
}

function NavigationBar(){
   return( 
    
    <div className='flex w-full h-[13%] items-center gap-[90px] bg-black text-white'>
          <img className='h-[115px] w-[130] mt-[31px] ml-[30px] cursor-pointer' src='/logo.png'></img>
          <p className = 'text-[18px] active:border-b-4 border-[#D4AF37] cursor-pointer hover:text-[#D4AF37] h-full flex items-center'style={{fontFamily: '"Inria Sans", sans-serif'}}>Saga</p>
          <p className = 'text-[18px] active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>Characters</p>
          <p className = 'text-[18px] active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>Quiz</p>
          <p className = 'text-[18px] active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>About</p>
       </div>
       
   );
}

function Title(){
    return(
      <div className=' w-full mt-[10px] flex flex-col justify-center text-center items-center '>
        <p className='text-[#D4AF37] text-[50px] font-medium' style={{fontFamily: '"Changa", sans-serif', 
        textShadow: `
      -2px -2px 0 #000,
       2px -2px 0 #000,
      -2px 2px 0 #000,
       2px 2px 0 #000
    `}}>The Sword Village</p>
        <p className='text-white text-[28px] font-bold' style={{fontFamily: '"Inria Sans", sans-serif'}}>CHAPTERS</p>
      </div>
    );

}

function Chapters(){
    return(
        <div className='flex w-full mt-[10px] justify-evenly'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-white text-[24px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>CHAPTER 1</p>
            <img className='h-[295px] w-[206px]' src='/Chapter-1.png'></img>
            <button className='hover:bg-[#271f04] transition-colors duration-200 h-[40px] w-[208px] mt-[12px] text-white cursor-pointer bg-[#21221C] rounded-[2px] text-[20px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>Start Reading</button>
          </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-white text-[24px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>CHAPTER 2</p>
            <img className='h-[295px] w-[206px]' src='/Chapter-2.png'></img>
            <button className='hover:bg-[#271f04] h-[40px] w-[208px] mt-[12px] text-white cursor-pointer bg-[#21221C] rounded-[2px] text-[20px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>Start Reading</button>
          </div>

        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-white text-[24px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>CHAPTER 3</p>
            <img className='h-[295px] w-[206px]' src='/Chapter-3.png'></img>
            <button className='hover:bg-[#271f04] h-[40px] w-[208px] mt-[12px] text-white cursor-pointer bg-[#21221C] rounded-[2px] text-[20px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>Start Reading</button>
          </div>
          
        <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-white text-[24px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>CHAPTER 4</p>
            <img className='h-[295px] w-[206px]' src='/Chapter-4.png'></img>
            <button className='hover:bg-[#271f04] h-[40px] w-[208px] mt-[12px] text-white cursor-pointer bg-[#21221C] rounded-[2px] text-[20px]' style={{fontFamily: '"Inria Sans", sans-serif'}}>Start Reading</button>
          </div>
        </div>
    );
}

export default function Saga(){
    return(
        <div className='w-full h-screen'>
         <Image />
         <NavigationBar />
         <Title />
         <Chapters />
        </div>
    );
}