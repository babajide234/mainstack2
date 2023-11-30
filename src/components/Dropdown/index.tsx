import React, { useState } from 'react'
import { Menu } from '../../assets'
import { Settings,ScrollText,Blocks,Bug,LogOut,SquareUser } from 'lucide-react'
import { Link } from 'react-router-dom'

interface UserDetails {
    email: string;
    first_name: string;
    last_name: string;
  }
  
  interface DropdownProps {
    details: UserDetails,
    loading: boolean
  }
  const Dropdown: React.FC<DropdownProps>  = ({details,loading}) => {

    const [dropdown,setDropdown]= useState(false);
  return (
    <div className=" relative">
        <button onClick={()=>setDropdown(!dropdown)} className=" flex items-center py-1 pl-[5px] pr-3 gap-2 bg-gray-100 rounded-full">
            <div className=" bg-monochrome w-8 h-8 rounded-full flex justify-center items-center font-semibold text-white uppercase text-sm">OJ</div>
            <img src={Menu} alt="" className="" />
        </button>
        <div className={` ${dropdown ? 'fle flex-col':' hidden'} transition-all ease-in-out duration-500 absolute  w-[350px] min-h-[400px] p-4 bg-white shadow right-0 top-[70px] rounded-xl`}>
            <div className=" w-full flex  items-center gap-4 mb-5">
                <div className=" bg-monochrome w-10 h-10 rounded-full flex justify-center items-center font-semibold text-white uppercase text-sm">OJ</div>
                <div className="">
                    <h2 className=" font-semibold capitalize leading-[18px]">{loading ? '':details.first_name} {loading ? '':details.last_name}</h2>
                    <p className=" text-gray-500">{loading ? '':details.email}</p>
                </div>
            </div>
                <ul className="">
                    {
                        [
                            {
                                name:"settings",
                                icon:<Settings />,
                                url:"/",
                            },
                            {
                                name:"purchase history",
                                icon:<ScrollText />,
                                url:"/",
                            },
                            {
                                name:"refer and earn",
                                icon:<Settings />,
                                url:"/",
                            },
                            {
                                name:"integrations",
                                icon:<Blocks />,
                                url:"/",
                            },
                            {
                                name:"report bug",
                                icon:<Bug />,
                                url:"/",
                            },
                            {
                                name:"switch account",
                                icon:<SquareUser />,
                                url:"/",
                            },
                            {
                                name:"sign out",
                                icon:<LogOut />,
                                url:"/",
                            },
                        ].map((item, index)=>(

                            <li className="" key={index}>
                                <Link to={item.url} className=' flex items-center gap-4 capitalize py-4 px-2 text-gray-700 font-semibold text-sm hover:bg-gray-50 rounded-lg'> {item.icon} {item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
        </div>
    </div>
  )
}

export default Dropdown