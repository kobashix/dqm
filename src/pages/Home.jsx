import Review from "../components/HomePage/Review"
import Teams from "../components/HomePage/Teams"
import Button from "../components/common/Button"
import Navbar from "../components/common/Navbar"
import Showcase from "../components/common/Showcase"
import styles from "../style"

const Home = () => {
  return (
    <>
        <Navbar />
        <Showcase 
        index={0}
        />
        <Teams />
        <Review />
    </>
  )
}

export default Home