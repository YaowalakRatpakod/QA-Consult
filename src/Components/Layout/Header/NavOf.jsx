// import { NavLink } from "react-router-dom";
// import React, { useState } from 'react'
// import { Menu, X } from "lucide-react"

// const NavLinks = () => {
//     return (
//         <>
//             <NavLink className="text-[#7E7878]" to="/dashboardOF">รายการขอคำปรึกษา</NavLink>
//             <NavLink className="text-[#7E7878]" to="/statistic">สถิติ</NavLink>
//             <NavLink className="text-[#7E7878]" to="/historyOF">ประวัติคำถาม</NavLink>
//             <NavLink className="text-[#7E7878]" to="/notificationOF">แจ้งเตือน</NavLink>
//         </>
//     );
// };


// const NavOf = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };
//     return (
//         <>
//             <nav className="flex w-1/3 justify-end text-[#7E7878]">
//                 <div className="hidden w-full justify-between md:flex">
//                     <NavLinks />
//                 </div>
//                 <div className="md:hidden">
//                     <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//                 </div>
//             </nav>
//             {isOpen &&(
//                 <div className="flex basis-0 flex-col items-center">
//                     <NavLinks />
//                 </div>
//             )}
//         </>

//     );
// };
// export default NavOf;