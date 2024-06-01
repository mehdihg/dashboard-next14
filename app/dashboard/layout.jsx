import Navbar from "../_components/dashboard/navbar/navbar"
import Sidebar from "../_components/dashboard/sidebar/sidebar"

const Layout = ({children})=>{
    return(
        <div className="container flex">
            <div className="grow-[1] bg-secondary p-[20px]">
                <Sidebar/>
            </div>
            <div className="grow-[4] p-[20px]">
                <Navbar/>
                {children}
            </div>
        </div>
    )
}
export default Layout