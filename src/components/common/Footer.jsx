import logo from '../../assets/icons/logo.png'
import { footerLinks } from '../../constants'
import styles from '../../style'
import Button from './Button'

const Footer = () => {
  return (
    <section className='bg-[#333333]'>
      <footer className={`${styles.boxWidth}`}>
        <div className='flex flex-row pb-[20px]'>

          {/* MAIN FOOTER LINK */}

          <div className='flex flex-row'>
            {footerLinks.map((item) => (
              <div className='w-[230px] justify-between py-[10px]'>
                <h4 className='font-semibold text-[#f41c24] py-[5px]'>
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((link) => (
                    <li className="font-normal text-sm text-white/30 py-[5px]">
                      <a 
                        href={''}>
                        {link.id}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='bg-white my-[20px] rounded-xl p-[10px]'>

            {/* FOOTER CTA */}

              <h3 className='font-semibold text-[18px] py-[5px]'>
                Consult a project with an expert
              </h3>
              <input 
              type="text"
              className='py-[5px] border-b-2'
              />
              <div className='py-[10px]'>
                <Button 
                  text="Free Consultation"
                  color="bg-[#f41c24]"
                  r={0}
                  g={0}
                  b={0}
                />
              </div>
            </div>
        </div>
        <div className='flex flex-row py-[30px] items-end justify-between'>
          <div className='max-w-[300px]'>

            {/* FOOTER BRAND LOGO */}

            <div className='py-[25px]'>
              <img 
              src={"https://nxtide.com/wp-content/uploads/2021/02/nxtide-white-logo.png"}
              alt="logo" 
              width={100}
              height={61}
              />
            </div>
            <div>
              <p className='font-normal text-white/60 text-[16px]'>
                We help innovative, forward-thinking companies scale their IT departments.
              </p>
            </div>
          </div>
          
          {/* FOOTER TERMS&COND */}
          
          <div className='max-w-[400px] flex text-center mr-[160px]'>
            <p className='font-normal text-white/60 text-[15px]'>
              All rights reserved by Pragmatic Coders Sp. z o. o.
              Aleja 29 Listopada 20 31-401 Kraków Poland
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer