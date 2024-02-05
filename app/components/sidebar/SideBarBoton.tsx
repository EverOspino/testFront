import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBarBoton(prop:{options:{title:string, path:string, icon:JSX.Element}}) {

    const pathName = usePathname();

    return ( 
        <>
            <Link title={prop.options.title} className={`flex justify-center w-full p-5 transition ease-in-out delay-50 hover:bg-blue-hover ${pathName === prop.options.path && 'active'}`} href={prop.options.path}>{prop.options.icon}</Link>
        </>
     );
}

export default SideBarBoton;