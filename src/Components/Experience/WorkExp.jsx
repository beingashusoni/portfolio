import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useDarkMode } from "../../DarkModeContext"; 


import BrainowlsImage from "../../assets/brainowls.jpg";
import SwaayamImage from "../../assets/swaayam.jpg";
import DroliaFreshImage from "../../assets/droliafresh.jpg";

const WorkExp = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`max-w-[60rem] flex justify-center items-center mx-auto ${darkMode ? 'dark' : ''}`}>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://brainowls.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  size="lg"
                  src={BrainowlsImage}
                  alt="brainowls"
                />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? 'white' : 'blue-gray'}>
                BrainOwls Technology - Bhopal
              </Typography>
              <Typography className=" my-2" color={darkMode ? 'white' : 'gray'}>
                <span style={{ fontWeight: 'bold' }}>Software Developer Intern</span> <br /> Jan 202 - Present
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Developing Advanced Web Applications and projects.</li>
              <li>Handling UI/UX Designing of the projects.</li>
              <li>
                Responsible for Frontend Development of the Websites and
                Applications.
              </li>
            </ul>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://swaayam.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar size="lg" src={SwaayamImage} alt="swaayam" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? 'white' : 'blue-gray'}>
                Swaayam - Bengaluru
              </Typography>
              <Typography className=" my-2" color={darkMode ? 'white' : 'gray'}>
                <span style={{ fontWeight: 'bold' }}>Technical Intern</span> <br /> Nov 2021 - Aug 2023 (1 Year 10 Months)
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Developed the Frontend for the organization&apos;s official website.</li>
              <li>Crafted the UI design for their official Android Application.</li>
              <li>Conducted thorough manual testing of the Website, App, and other technical components to ensure optimal functionality and performance.</li>
              <li>Reported 200+ Bugs/Functionality issues, and tried to resolve few of them.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a
                href="https://www.droliafresh.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  size="lg"
                  src={DroliaFreshImage}
                  alt="droliafresh"
                />
              </a>
            </TimelineIcon>
            <div className="flex flex-col">
              <Typography variant="h5" color={darkMode ? 'white' : 'blue-gray'}>
                DroliaFresh - Patna
              </Typography>
              <Typography className=" my-2" color={darkMode ? 'white' : 'gray'}>
                <span style={{ fontWeight: 'bold' }}>Web Developer Intern</span> <br /> May 2023 - Jul 2023 (2 Months)
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Developed the frontend for the organization&apos;s official website, ensuring a visually appealing and user-friendly interface.</li>
              <li>Additionally, played a pivotal role in generating engaging social media and graphic content, as well as undertaking video post-production and creation tasks.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;


