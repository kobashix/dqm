import star from '../../assets/icons/star.svg'
import Showcase from '../common/Showcase'
import styles from '../../style'
import { reviewLogo } from '../../constants'

const Review = () => {
  return (
    <section>
        <div className='bg-[#fafafa] py-[40px]'>

            {/* REVIEW SECTION */}

            <div className={`${styles.boxWidth} flex justify-center lg:flex-row flex-col`}>
                <div className='flex flex-col items-center justify-center pr-[50px]'>

                    {/* RATING */}

                    <div className='py-[20px]'>
                        <h1 className={`${styles.heading1} font-bold text-[60px]`}>
                            4.8 / 5
                        </h1>
                    </div>

                    {/* RATING STAR */}

                    <div className='flex gap-2 py-[10px]'>
                        <img 
                        src={star} 
                        alt=""
                        width={50} 
                        />
                        <img 
                        src={star} 
                        alt=""
                        width={50} 
                        />
                        <img 
                        src={star} 
                        alt=""
                        width={50} 
                        />
                        <img 
                        src={star} 
                        alt=""
                        width={50} 
                        />
                        <img 
                        src={star} 
                        alt=""
                        width={50} 
                        />
                    </div>
                    <div className='py-[10px]'>
                        <p className='text-black/60'>
                            Based on 44 reviews on Clutch & Google Maps
                        </p>
                    </div>
                </div>

                {/* SHOWCASE */}
                
                <div className='lg:max-w-[600px]'>
                    <Showcase 
                    index={1}
                    swap={true}
                    review={true}
                    text={"Book a Consultation"}
                    color={"bg-black"}
                    r={0}
                    g={0}   
                    b={0}
                    />
                </div>
            </div>

            {/* BRAND SECTION */}

            <div className={`${styles.boxWidth} `}>
                <div className='flex flex-row justify-between py-[60px]'>
                {reviewLogo.map((link) => (
                    <div className='flex flex-wrap items-center justify-center'>
                        <div className='max-w-[200px]'>
                            <img 
                            src={link.image} 
                            alt="image" 
                            />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review