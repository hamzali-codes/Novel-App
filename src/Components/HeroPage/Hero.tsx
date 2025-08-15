function Video() {
  return (
    <video
      className="h-screen w-full object-fill fixed z-[-1] overflow-hidden"
      autoPlay
      loop
      muted
      src="/video-2.mp4"
      style={{
    filter: `
      contrast(1.1) 
      brightness(0.5) 
      saturate(1.1) 
      hue-rotate(20deg)
    `
  }}
    />
  );
}

function TopContent(){
  return(
    <div className='flex w-full align-center justify-between'>
       <img className=' w-[190px] mt-[20px] ml-[100px] h-[155px] cursor-pointer'
       src='/logo.png'></img>
       <button
  className="flex items-center justify-center font-crimson font-semibold text-[21px] h-[49px] w-[160px]
    text-white bg-[#292929] border border-[#D4AF37] mt-[60px] mr-[100px] rounded-md cursor-pointer
    hover:text-[#D4AF37] hover:bg-[#1e1e1e] transition-colors duration-200"
  style={{ fontFamily: '"Crimson Pro", serif' }}>
  Get Started
</button>

    </div>
  );
}

function MainContent(){
  return(
    <div className='w-full flex items-center justify-center flex-col align-middle ' style={{ height: 'calc(100vh - 284px)' }}>
      
      <p className='text-[#D4AF37] text-[80px] m-0 p-0 font-semibold '  style={{ fontFamily: '"Changa", sans-serif', lineHeight: 0.4,
        textShadow: `
      -2px -2px 0 #000,
       2px -2px 0 #000,
      -2px 2px 0 #000,
       2px 2px 0 #000
    `
       }}>Welcome To The</p>
      <p className='text-[#D4AF37] text-[60px] mb-[14px] p-0 font-semibold' style={{ fontFamily: '"Changa", sans-serif', 
        textShadow: `
      -2px -2px 0 #000,
       2px -2px 0 #000,
      -2px 2px 0 #000,
       2px 2px 0 #000
    `
       }}>Village Of Sword</p>
      
      <p className='mt-5px p-0 text-white text-[22px] font-bold mb-[24px] drop-shadow-[0_0_2px_black] ' style={{fontFamily: "'Anonymous Pro', monospace",
        textShadow: `
      -3px -3px 0 #000,
       3px -3px 0 #000,
      -2px 3px 0 #000,
       3px 3px 0 #000
       `
      }}>Where Quiet Souls Fight Loudest</p>
      <button className=' flex items-center justify-center font-semibold text-[21px] h-[51px] w-[180px] mt-[20px]
        text-white bg-[#292929] border border-[#D4AF37] rounded-md cursor-pointer hover:text-[#D4AF37] hover:bg-[#1e1e1e] transition-colors duration-200' style={{ fontFamily: '"Crimson Pro", serif'  }}>Start Adventure</button>
    </div>
  )
}

export default function Hero(){
    return(
        <>
        <Video />
        <TopContent />
        <MainContent />
        </>
    );
}

