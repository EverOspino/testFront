'use client'

import SideBarBoton from "./SideBarBoton";
import Image from 'next/image'
import home from '../../../public/home.svg'
import sale from '../../../public/sale.svg'
import user from '../../../public/user.svg'

export default function SideBar() {

    const options = [
        {
            title: 'Home',
            path: '/dashboard',
            icon: <Image className="w-6" src={home} alt="home icon"/>
        },
        {
            title: 'New Sale',
            path: '/dashboard/new-sale',
            icon: <Image className="w-6" src={sale} alt="sale icon"/>
        },
        {
            title: 'Logout',
            path: '/',
            icon: <Image className="w-6" src={user} alt="user icon"/>
        },
    ]

    return (
        <section className="h-screen bg-blue fixed">
            <ul className="flex flex-col items-center mt-10">
                {
                    options.map((item)=>
                        <SideBarBoton options={item} />
                    )
                }
            </ul>

        </section>
    );
}