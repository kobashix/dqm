import arrow from '../../assets/icons/right-arrow.svg'

const Button = ({text, color, r, g, b}) => {
  return (

    <button 
    type="button"
    className={`flex flex-row justify-center items-center rounded-md ${color} py-[14px] px-[18px] text-white font-bold drop-shadow-[0_9px_10px_rgba(${r},${g},${b},0.8)] hover:scale-110 transition ease-in duration-500`}
    >
        {/* BUTTON TEXT */}
        
        {text}
        
    {/* ARROW ICON */}

    <img 
    src={arrow}
    alt="right-arrow" 
    width={20}
    height={20}
    className='ml-2'
    />
    </button>
  )
}

export default Button