import { companies } from '../../constants'
import styles from '../../style'

const TechStack = () => {

  //SLICING OUT SECTION FOR TWO SETS OF ROWS OF COMPANIES LOGOS

  const companiesFirstSection = companies.slice(0, 8)
  const companiesSecondSection = companies.slice(9)

  return (
    <section>
        <div className={`${styles.boxWidth} py-[70px]`}>

            {/* TITLE */}

            <div>
                <h1 className={`${styles.heading1} pt-[20px] pb-[50px] flex justify-center`}>
                    The technology stack of our data quality management team
                </h1>
            </div>

            {/* FIRST COMPANIES SECTION */}
            
            <div className='flex justify-center gap-10 py-[20px]'>
                {companiesFirstSection.map((item) => (
                    <img 
                    src={item.image} 
                    alt="image" 
                    width={100}
                    height={100}
                    />
                ))}
            </div>

            {/* SECOND COMPANIES SECTION */}
            
            <div className='flex justify-center gap-9 py-[20px]'>
                {companiesSecondSection.map((item) => (
                    <img 
                    src={item.image} 
                    alt="image" 
                    width={100}
                    height={100}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default TechStack