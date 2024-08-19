import logo from "../assets/logo-ea.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav  className="mb-12 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-3xl">
        <a href="https://www.linkedin.com/in/emre-a-2711b6273/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Zodiac369" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/emreaydgx/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/emre.ogk.1/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar