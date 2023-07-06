import Header from "../components/header"
import { Outlet } from "react-router-dom"

export default function Runnings() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
