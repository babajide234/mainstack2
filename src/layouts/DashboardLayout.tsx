import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <>
    <div className=" px-4 pt-20  relative">
        <Navbar/>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default DashboardLayout