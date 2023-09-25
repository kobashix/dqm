import styles from "../../style"
import { card } from "../../constants"

const Card = ({index}) => {
  return (
    <div className="inline-block max-w-[320px] bg-white">
        <div className={`${styles.flexStart} border rounded-xl border-[#ccece4] flex-col p-[30px] shadow-xl`}>

            {/* ICON */}

            <div className="py-[10px]">
                <img 
                src={card[index].icon} 
                alt="" 
                width={60}
                />
            </div>

            {/* CONTENT */}

            <div className="">
                <h3 className='font-bold py-[5px]'>
                    {card[index].title}
                </h3>
                <p className='font-normal text-black/60  py-[10px]'>
                    {card[index].description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card