import { Link } from 'react-router-dom'
import { 
  MenuIcon1,
  MenuIcon2,
  MenuIcon3,
  MenuIcon4,
 } from '../../assets'

const Sidebar = () => {
  return (
    <div className=" flex p-2 fixed left-4 top-[35%] shadow-lg w-[50px] min-h-[200px] justify-center rounded-full">
        <ul className="py-5 relative flex flex-col justify-between">
            <li className="">
                <Link className=' w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 group relative' to={'/'}>
                    <img src={MenuIcon1} alt="" className=" fill-gray-400" />
                    <span className="absolute w-[100px] flex justify-center -top-2 py-4 -right-[120px] scale-0 transition-transform rounded-lg bg-gray-800 p-2 text-sm font-bold text-white group-hover:scale-100 ">Link in bio</span>
                </Link>
            </li>
            <li className="">
                <Link className=' w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 group relative' to={'/'}>
                    <img src={MenuIcon2} alt="" className=" fill-gray-400" />
                    <span className="absolute w-[100px] flex justify-center -top-2 py-4 -right-[120px] scale-0 transition-transform rounded-lg bg-gray-800 p-2 text-sm font-bold text-white group-hover:scale-100 after::content after:absolute after:bottom-0  after:w-0 after:h-0 after:border-20 after:border-solid after:border-transparent after:border-t-gray-800 after:border-b-0  ">Store</span>
                </Link>
            </li>
            <li className="">
                <Link className=' w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 group relative' to={'/'}>
                    <img src={MenuIcon3} alt="" className=" fill-gray-400" />
                    <span className="absolute w-[100px] flex justify-center -top-2 py-4 -right-[120px] scale-0 transition-transform rounded-lg bg-gray-800 p-2 text-sm font-bold text-white group-hover:scale-100 ">Media kit</span>
                </Link>
            </li>
            <li className="">
                <Link className=' w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200 group relative' to={'/'}>
                    <img src={MenuIcon4} alt="" className=" fill-gray-400" />
                    <span className="absolute w-[100px] flex justify-center -top-2 py-4 -right-[120px] scale-0 transition-transform rounded-lg bg-gray-800 p-2 text-sm font-bold text-white group-hover:scale-100 ">Invoicing</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar