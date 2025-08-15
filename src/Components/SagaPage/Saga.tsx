function NavigationBar(){
   return(
     <div className='w-full h-screen relative'>
      <img src='/sword-image.png' className='w-full h-screen object-cover z-[-1]'></img>
       <div className='flex w-full h-[12%] items-center gap-[90px] bg-black text-white absolute top-0 left-0 '>
          <img className='h-[115px] w-[130] mt-[31px] ml-[30px] cursor-pointer' src='/logo.png'></img>
          <p className = 'active:border-b-4 border-[#D4AF37] cursor-pointer hover:text-[#D4AF37] h-full flex items-center'style={{fontFamily: '"Inria Sans", sans-serif'}}>Saga</p>
          <p className = 'active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>Characters</p>
          <p className = 'active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>Quiz</p>
          <p className = 'active:border-b-4 border-[#D4AF37] cursor-pointer flex items-center h-full hover:text-[#D4AF37] transition-colors duration-200' style={{fontFamily: '"Inria Sans", sans-serif'}}>About</p>
       </div>
       <div className='border border-white w-full h-[50%]'>

       </div>
     </div>
   );
}














export default function Saga(){
    return(
        <>
         <NavigationBar />
        </>
    );
}