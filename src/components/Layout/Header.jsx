// import { Image } from "antd";
// import { FormOutlined, PhoneOutlined } from '@ant-design/icons';
// import toggle from '../../assets/navbar/samariddin.jpg'
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  
  return (
    <header className="header">
      <div className="lnk">
        <NavLink to="/" className="link_rang">
          About
        </NavLink>
        <NavLink to="skills" className="link_rang">
          Skills
        </NavLink>
        <NavLink to="resume" className="link_rang">
          Resume
        </NavLink>
        <NavLink to="portfolios" className="link_rang">
          Portfolio
        </NavLink>
        <NavLink to="testmonial" className="link_rang">
          Testmonial
        </NavLink>
        <NavLink to="contact" className="link_rang">
          Contact
        </NavLink>
      </div>
      <main style={{padding: "35px 20px"}}>
        <Outlet />
      </main>
    </header>
  );
};

export default Header;
