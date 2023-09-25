import styles from "../../style"
import Card from "./Card"
import Button from "./Button"
import {card} from "../../constants"

const CTA = () => {
  return (
    <section className="bg-[#fafafa]">
        <div className={`${styles.boxWidth} py-[20px]`}>
            <div className={`${styles.boxWidth} pt-[110px] `}>

                {/* MAIN CONTENT */}

                <h1 className={`${styles.heading1} mb-[10px] `}>
                    See how we've worked with companies like yours
                </h1>
                <p className={`${styles.paragraph1} pt-[10px] pb-[25px] text-black/60 `}>
                    We helped many small, medium, and large companies with their struggle in building successful 
                    remote software development teams or the whole IT hubs located in Poland.
                </p>
                <div className="flex justify-center py-[20px]">

                    {/* BUTTON */}

                    <Button 
                        text={"Book a free consultancy call"}
                        color={"bg-[#f41c24]"}
                        r={244}
                        g={28}
                        b={36}
                    />
                </div>
            </div>

            {/* CARD SECTION */}
            
            <div className="py-[100px] flex flex-row justify-between ">
                {card.map((item, index) => (
                    <Card 
                        index={index}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default CTA