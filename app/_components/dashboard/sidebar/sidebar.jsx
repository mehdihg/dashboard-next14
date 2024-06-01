import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout 
} from "react-icons/md";
import SidebarMenu from "./sidebarmenu";
import Image from "next/image";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className="sidebar-container">
      <div className="user">
        <Image
          className="user-image"
          src={"/noavatar.png"}
          alt=""
          width={40}
          height={40}
        />
        <div className="user-detail">
          <span className="username">John Doe</span>
          <span className="user-title">Adminstrator</span>
        </div>
      </div>
      <ul className="sidebar-list">
        {menuItems.map((item) => {
          return (
            <li key={item.title}>
              <span className="sidebar-title">{item.title}</span>
              {item.list.map((list) => {
                return <SidebarMenu item={list} key={list.title} />;
              })}
            </li>
          );
        })}
      </ul>
      <button className="sidebar-logout">
            <MdLogout/>
            Logout
      </button>
    </div>
  );
};
export default Sidebar;
