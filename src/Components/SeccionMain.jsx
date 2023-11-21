import { useState } from "react"

const SeccionMain = ({texto, img, imgColor, ref}) => {

    const [onHover, setOnHover] = useState(false)

    const handleMouseEnter = () => {
        setOnHover(true);
        console.log('xdd');
      };
    
      const handleMouseLeave = () => {
        setOnHover(false);
      };

  return (
    <div class="w-1/3 relative z-10 hover:z-20 hover:scale-105 transition-all" onClick={() => {handleMouseEnter()}} >
        <p className="absolute text-center text-white font-tipo top-[15%] w-full text-2xl px-[15%]">{texto}</p>
        <div class="w-full flex absolute bottom-24 ">
            <button onClick={() => {setOnHover(true)}} class="bg-[#19001B] h-12 mx-auto w-32 rounded-full font-bold text-white py-3 hover:shadow-sm hover:shadow-white hover:scale-110 transition-all font-tipo">Ver</button>
        </div>
        {onHover ? 'HOVEREADO' : 'NO HOVEREADO'}
        <img src={onHover ? img : imgColor}/>
    </div>
  )
}

export default SeccionMain