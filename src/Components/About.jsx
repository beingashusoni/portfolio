import { useDarkMode, ThemeIcon } from "../DarkModeContext";

const About = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`pb-16 lg:py-25 min-h-screen flex items-center flex-col-reverse lg:flex-row gap-1 justify-center ${darkMode ? "dark" : ""}`}>
      <div className="text-justify p-10 md:w-7/12">
        <p className="text-center font-bold text-3xl">About Me</p>
        <div className="h-[2px] w-20 bg-red-600 rounded-full my-1 mx-auto mb-10"></div>

        <p className={`text-lg md:text-xl ${darkMode ? "text-white" : "text-black"}`}>
          I am a dedicated full-stack web developer with a track record of crafting innovative and scalable web applications.
          <br />
          <br />
          My academic background comprises a Bachelor of Technology degree in Information Technology from Madhav Institute of Technology & Science, Gwalior.
          <br />
          <br />I have experience working as a <span className="font-semibold mx-2">Software Developer Intern</span> at BrainOwls Technology Pvt. Ltd. where I specialized in building web applications utilizing React.JS, Node.JS, Express JS, and MongoDB. I adeptly utilized Redux for developing robust and scalable applications. My skill set encompasses proficiency in HTML, CSS, JavaScript, React, Redux, Tailwind CSS, Node.JS, Express.JS, MongoDB, Git, Github, Visual Studio Code, Netlify, and Vercel.
          <br />
          <br />Throughout my journey, I have successfully delivered projects such as a <b>Zuppp! - Upload, Share & Download File</b>, <b>Dribble Template Design</b>, <b>Online Examination System</b>, <b>Weather App</b>, and <b>Movie Recommendation System</b>, showcasing both my technical prowess and meticulous attention to detail.
        </p>
      </div>

      {/* Theme toggle button */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default About;

