import { Link, useLocation } from 'react-router-dom'; // ใช้ Link แทน link
import { IoHome } from "react-icons/io5";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { TbPackageImport } from "react-icons/tb";
import { FaHouseUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";

import './navbar.css';

const Navbar = ({ show, onLogout, token }) => {
    const location = useLocation();
    
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            {/* แสดงโลโก้ */}
            {/* <img className="logo" src={logo} alt="logo" /> เปิดการใช้งานโลโก้ */}

            <ul>
                {token === 'admin' ? (
                    // เมนูสำหรับ Admin
                    <>
                        <li className={location.pathname === '/Manager/home' ? 'active' : ''}>
                            <Link to="/Manager/home"><IoHome /> Dashboard</Link>
                        </li>
                        <li className={location.pathname === '/Manager/personnel' ? 'active' : ''}>
                            <Link to="/Manager/personnel"><BsFillPersonPlusFill /> จัดการบุคลากร</Link>
                        </li>
                        <li className={location.pathname === '/Manager/angency' ? 'active' : ''}>
                            <Link to="/Manager/angency"><MdManageAccounts /> จัดการหน่วยงาน</Link>
                        </li>
                        <li className={location.pathname === '/Manager/Received' ? 'active' : ''}>
                            <Link to="/Manager/Received"><LuPackagePlus /> รายการนำเข้าสินค้า</Link>
                        </li>
                        <li className={location.pathname === '/Manager/Withdraw' ? 'active' : ''}>
                            <Link to="/Manager/Withdraw"><TbPackageImport /> รายการเบิกสินค้า</Link>
                        </li>
                    </>
                ) : (
                    // เมนูสำหรับ User
                    <>
                        <li className={location.pathname === '/Employee/home' ? 'active' : ''}>
                            <Link to="/Employee/home"><IoHome />Dashboard</Link>
                        </li>
                        <li className={location.pathname === '/Employee/ImportGoods' ? 'active' : ''}>
                            <Link to="/Employee/ImportGoods"><LuPackagePlus /> นำเข้าสินค้า</Link>
                        </li>
                        <li className={location.pathname === '/Employee/PickingHistory' ? 'active' : ''}>
                            <Link to="/Employee/PickingHistory"><MdManageAccounts /> ประวัติการนำเข้าสินค้า</Link>
                        </li>
                        <li className={location.pathname === '/Employee/ExportGoods' ? 'active' : ''}>
                            <Link to="/Employee/ExportGoods"><TbPackageImport /> เบิกสินค้า</Link>
                        </li>
                        <li className={location.pathname === '/Employee/ExportGoodsHis' ? 'active' : ''}>
                            <Link to="/Employee/ExportGoodsHis"><FaHouseUser /> ประวัติการเบิกสินค้า</Link>
                        </li>
                    </>
                )}
                <li><Link to="/login" onClick={onLogout}><RiLogoutBoxLine />ออกจากระบบ</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
