import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { FaUserTie } from 'react-icons/fa';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillBehanceCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { useDarkMode, ThemeIcon } from '../DarkModeContext'; // Adjust the path as necessary
import PPic from '../assets/ashu.png';
import IndianFlag from '../assets/indian.jpg'; // Adjust the path to the PNG file

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`pb-16 lg:py-25 min-h-screen flex items-center flex-col-reverse lg:flex-row gap-1 justify-center ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col gap-2 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0 ">
        <p className="text-2xl font-bold text-red-600">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative">
          I&apos;m
          <span className="text-red-600 ml-4 uppercase">
            Aashutosh Soni
          </span>
        </p>
        <p className="text-xl font-semibold relative uppercase">
          Software Engineer
        </p>
        <p className="text-lg md:text-l font-medium relative">
          I&apos;m a Full Stack Developer & UI/UX Designer residing in <span className="inline-flex items-center"><img src={IndianFlag} alt="Indian Flag" className="h-3 w-auto" />INDIA</span> with a strong passion for web development and designing. Pouring my passion into crafting engaging web applications & design.
        </p>

        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5">
          <Link to="/about">
            <Button variant="gradient" color="red" className="flex gap-2 items-center">
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <a href="https://flowcv.com/resume/ta5o7lqo3e" target="_blank" rel="noreferrer">
            <Button variant="gradient" color="red" className="flex gap-2 items-center">
              <MdOutlineDocumentScanner className="text-white text-lg" />
              Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <img
            src={PPic}
            alt="Ashutosh Soni"
            className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover object-center shadow-lg"
          />
        </div>

        <div className="flex items-center gap-4 md:gap-2 mt-4 ">
          <a href="https://www.linkedin.com/in/beingashusoni/" target="_blank" rel="noreferrer" >
            <AiFillLinkedin className="text-blue-800 text-2xl md:text-2xl " />
          </a>
          <a href="https://github.com/beingashusoni" target="_blank" rel="noreferrer">
            <AiFillGithub className="text-gray-600 text-2xl md:text-2xl" />
          </a>
          <a href="mailto:iamashuarya786@gmail.com">
            <MdEmail className="text-purple-400 text-2xl md:text-2xl" />
          </a>
          <a href="https://www.behance.net/beingashusoni" target="_blank" rel="noreferrer">
            <AiFillBehanceCircle className="text-blue-500 text-2xl md:text-2xl" />
          </a>
          <a href="https://www.instagram.com/beingashusoni/" target="_blank" rel="noreferrer">
            <AiFillInstagram className="text-pink-400 text-2xl md:text-2xl" />
          </a>
          <a href="https://twitter.com/beingashusoni" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle className="text-blue-500 text-2xl md:text-2xl" />
          </a>
        </div>

      </div>

      {/* Dark mode toggle button with theme icons */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Hero;

