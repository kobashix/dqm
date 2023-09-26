import Review from "../components/HomePage/Review"
import Teams from "../components/HomePage/Teams"
import Button from "../components/common/Button"
import Navbar from "../components/common/Navbar"
import Showcase from "../components/HomePage/Showcase"
import Hero from '../components/common/Hero'
import Card from "../components/common/Card"
import CTA from "../components/common/CTA"
import TechStack from "../components/HomePage/TechStack"
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero 
          index={0}
          swap={false}
          review={false}
          text={"Schedule a call"}
          color={"bg-[#f41c24]"}
          r={244}
          g={28}
          b={36}
        />
        <Teams />
        <Review />
        <Showcase />
        <CTA />
        <TechStack />
        <Footer /> 
    </>
  )
}

export default Home