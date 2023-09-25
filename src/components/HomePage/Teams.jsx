import { team } from "../../constants"
import styles from "../../style"

const Teams = ({}) => {
  return (
    <section className={`${styles.boxWidth} py-[80px]`}>
        <div className="flex flex-col justify-between md:flex-row">
            {team.map((item) => (

                // MAIN CONTENT

                <div className="">

                    {/* CONTENT TITLE */}
                    
                    <div className="flex items-center justify-center text-center">
                        <h1 className={`${styles.heading1} text-[40px] py-[10px] max-w-[300px]`}>
                            {item.teamTitle}
                            <br/>
                            <span></span>
                        </h1>
                    </div>
                    <div className="">

                        {/* CONTENT DEV & TIME */}
                        
                        <div className="flex flex-col items-center justify-center py-[10px]">
                            <p className="font-semibold">
                                Developers: {item.developers}
                            </p>
                            <p className="font-semibold text-black/60">
                                Delivery time: {item.time}
                            </p>
                        </div>        

                        {/* CONTENT DESCRIPTION */}
                        
                        <div className={`py-[20px] md:max-w-[350px] `}>
                            <p className=" text-black/60">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Teams