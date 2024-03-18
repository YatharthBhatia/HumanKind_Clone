import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Fund from "../components/fund"
import Danger from "../components/danger"
import Grab from "../components/grab"
import Collectibles from "../components/collectibles"
import Trade from "../components/trade"
import Discover from "../components/discover"
import Stayhuman from "../components/stayhuman"
import Together from "../components/together"
import Join from "../components/join"
import End from "../components/end"
export default function Main() {
  return (
    <div className="w-full flex flex-col">
    <Navbar/>
    <Hero/>
    <Fund/>
    <Danger/>
    <Grab/>
    <Collectibles/>
    <Trade/>
    <Discover/>
    <Stayhuman/>
    <Together/>
    <Join/>
    <End/>
    </div>
  )
}
