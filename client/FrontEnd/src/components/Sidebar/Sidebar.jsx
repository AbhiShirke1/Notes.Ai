import React, { useState } from 'react'
import { BsArrowLeftShort, BsChevronDown, BsSearch, BiTrash,BiHelpCircle} from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CgNotes } from "react-icons/cg";
import { FiHelpCircle, FiSettings, FiTrash2 } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";
import { RiHomeLine } from 'react-icons/ri'

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const[submenuOpen,setSubmenuOpen]=useState(false);
    const Menus=[
        {
            title:'Home'
        },
        {
            title:'Notifications',
            icon:<IoMdNotificationsOutline/>
        },
        {
            title:'Notes',
            icon:<CgNotes/>,
            submenu: true,
            submenuItems:[
                { title:'Submenu 1'},
                { title:'Submenu 2'},
                { title:'Submenu 3'},
            ],
        },
        {
            title:'Trash',
            icon:<FiTrash2/>
        },
        {
            title:'Settings',
            icon:<FiSettings/>
        },
        {
            title:'Help', 
            icon:<FiHelpCircle/>
        },

    ];
    return (
        <>
            <div className={`bg-black h-screen pt-8 p-5 relative text-white ${open ? '' : 'w-20'} ${submenuOpen && 'h-screen'} relative `}>
                
                <div className="inline-flex">
                    <TbNotes className={`mr-2 block text-4xl cursor-pointer float-left duration-500 ${open && 'rotate-[360deg]'}`} />
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>NoteAI.in</h1>
                </div>
                <div className={`flex items-center rounded-md bg-light-white mt-6 ${
                    !open ? 'px-2.5':'px-4'
                } py-2`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`}/>
                    <input type={'search'}
                    placeholder="Search"
                    className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
                    />
                </div>
                <ul className='pt-2'>
                    {Menus.map((menu,index) => (
                        <>
                        <li key={`id-${index}`} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? 'mt-48' : 'mt-3'} `}>
                            <span className='text-2xl block float-left'>
                                {menu.icon ? menu.icon : <RiHomeLine/>}
                            </span>
                            <span className={` text-base font-medium flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                            {menu.submenu && open && (
                                <BsChevronDown className={`${submenuOpen && 'rotate-180'}`} onClick={() => setSubmenuOpen(!submenuOpen)}/>
                            )}
                        </li>
                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem,i)=>(
                                    <li key={i} className="text-gray-300 rounded-md text-sm hover:bg-light-white flex items-center gap-x-4 cursor-pointer p-2 px-5">
                                        {submenuItem.title}

                                    </li>
                                ))}
                            </ul>
                        )}
                        </>
                    )) 
                        
                        
                       
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
