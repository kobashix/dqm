import styles from "../../style"
import { navLink } from "../../constants"
import Button from "./Button"
import logo from '../../assets/icons/logo.png'

const Navbar = () => {
  return (
    <section className={`${styles.boxWidth} py-[10px]`}>
      <div className="flex items-center justify-between py-[20px] border-b-2 mb-8">
        <div>
          <img 
          src={logo}
          alt="logo" 
          width={160}
          height={61}
          />
        </div>
        <nav className="mr-32">
          <ul className="flex gap-8">
            {navLink.map((link) => (
              <li className="">
                <a 
                href=""
                className="text-[1.1rem] hover:text-[#f41c24] transition duration-500 ease-in-out]"
                >
                  {link.id}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
        <Button 
          text="Contact Us"
          color="bg-[#f41c24]"
          r={244}
          g={28}
          b={36}
        />
        </div>
      </div>
    </section>
  )
}

export default Navbar