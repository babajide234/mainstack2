import React from 'react'
import { Chat, HomeIcon, Logo, Menu, Notification } from '../../assets'
import { NavLink } from "react-router-dom";
import Dropdown from '../Dropdown';
import {useQuery} from '@tanstack/react-query'
import {getUserDetails} from '../../functions.ts';

const Navbar = () => {
  const  { data: userData, isLoading }= useQuery({ queryKey: ['user'], queryFn: getUserDetails })

  return (
    <div className="w-full bg-white shadow-navbar rounded-full fixed top-2 ">
        <div className="w-full flex justify-between items-center px-6 py-[14px]">
            <img src={Logo} alt="" className=" w-9 h-9" />
            <ul className=" flex gap-5">
                {[
                    {
                        name:'home',
                        logo: HomeIcon,
                        url:'/'
                    },
                    {
                        name:'analytics',
                        logo: HomeIcon,
                        url:'/'
                    },
                    {
                        name:'Revenue',
                        logo: HomeIcon,
                        url:'/'
                    },
                    {
                        name:'CRM',
                        logo: HomeIcon,
                        url:'/'
                    },
                    {
                        name:'apps',
                        logo: HomeIcon,
                        url:'/'
                    }
                ].map((item,index) => (
                    <li key={index} className="">
                        <NavLink to={item.url} className=" flex items-center py-2 px-4 rounded-full hover:bg-gray-100 text-gray-[#56616B] capitalize gap-1 font-semibold text-base -leading-[0.4px] transition-all ease-in-out duration-300"> 
                            <img src={item.logo} alt="" className=" w-[20px] h-[20px]" /> 
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className=" flex items-center gap-2">
                <button type='button' className=" p-[10px] flex justify-center items-center hover:bg-gray-50 rounded-full " >
                    <img src={Notification} alt="" className="" />
                </button>
                <button type='button' className=" p-[10px] flex justify-center items-center hover:bg-gray-50 rounded-full  ">
                    <img src={Chat} alt="" className="" />
                </button>
                
                <Dropdown details={ userData} loading={isLoading}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar