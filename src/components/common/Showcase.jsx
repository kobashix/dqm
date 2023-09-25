import styles from '../../style'
import Button from './Button'
import { showcase } from '../../constants'

const Showcase = ({index}) => {
  return (
    <section className={`${styles.boxWidth} py-[20px] `}>

        {/* CONTAINER SHOWCASE */}

        <div className='flex flex-col lg:flex-row'>

            {/* SHOWCASE CONTENT */}

            <div className={`${styles.flexStart} flex-col pr-[80px]`}>
                <h1 className={`${styles.heading1} mb-[10px] `}>
                    {showcase[index].title}
                </h1>
                <p className={`${styles.paragraph1} pt-[10px] pb-[25px] text-black/60 `}>
                    {showcase[index].description}
                </p>

                {/* SHOWCASE BUTTON */}

                <div className=''>
                    <Button 
                    text="Schedule a Call"
                    color="bg-[#f41c24]"
                    r={244}
                    g={28}
                    b={36}
                    />
                </div>
            </div>

            {/* SHOWCASE IMAGE */}

            <div className='mt-[20px] pt-[10px] '>
                <img 
                src={showcase[index].image} 
                alt="image"
                width={1700}
                height="auto"
                />
            </div>
        </div>
    </section>
  )
}

export default Showcase