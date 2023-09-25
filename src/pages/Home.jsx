import Button from "../components/common/Button"
import styles from "../style"

const Home = () => {
  return (
    <>
      <div className={`${styles.heading1} ${styles.boxWidth} `}>Nearshore & Offshore</div>
      <div className={`${styles.padding1} ${styles.boxWidth} `}>Whenever you are looking for a full-product development partner, a group of engineers, or a trusted party who will help you establish your own IT department in Poland – we got you covered.</div>
      <div className={`${styles.boxWidth}`}>
        <Button 
        text="Schedule a Call"
        color="bg-[#f41c24]"
        r={244}
        g={28}
        b={36}
        />
      </div>
    </>
  )
}

export default Home