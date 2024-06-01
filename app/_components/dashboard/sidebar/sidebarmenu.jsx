'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarMenu=({item})=>{
    const pathname = usePathname()
   
    return(
        <Link href={item.path} className={`menu-container ${pathname === item.path ? 'active':''}`}  >
            {item.icon}
            {item.title}
        </Link>
    )
}
export default SidebarMenu