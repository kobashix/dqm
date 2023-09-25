import styles from "../../style"
import Hero from "../common/Hero"

const Showcase = () => {
  return (
    <section>
        <div>
            <div>
                <div className={`${styles.boxWidth} pt-[150px] `}>
                    <h1 className={`${styles.heading1} mb-[10px] `}>
                        See how we've worked with companies like yours
                    </h1>
                    <p className={`${styles.paragraph1} pt-[10px] pb-[25px] text-black/60 `}>
                        We helped many small, medium, and large companies with their struggle in building successful 
                        remote software development teams or the whole IT hubs located in Poland.
                    </p>
                </div>
                <div className="py-[110px]">
                    <Hero 
                        index={2}
                        swap={true}
                        review={false}
                        text={"Learn more"}
                        color={"bg-black"}
                        r={0}
                        g={0}   
                        b={0}
                    />
                </div>
                <div className="py-[110px] bg-[#fafafa]">
                    <Hero 
                        index={3}
                        swap={false}
                        review={false}
                        text={"Learn more"}
                        color={"bg-black"}
                        r={0}
                        g={0}   
                        b={0}
                    />
                </div>
                <div className="py-[110px]">
                    <Hero 
                        index={4}
                        swap={true}
                        review={false}
                        text={"Learn more"}
                        color={"bg-black"}
                        r={0}
                        g={0}   
                        b={0}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase