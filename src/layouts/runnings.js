import './index.css'
import { Footer } from "../components/footer"
import Header from "../components/header"
import { Outlet } from "react-router-dom"

export default function Runnings() {
  return (
    <div className="running">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
