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
                <span style={{ fontWeight: 'bold' }}>Software Developer Intern (Frontend)</span> <br /> Jan'2024 - Jul'2024
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>•Designed 50+ UI components in Figma for the Society Management System, enhancing user satisfaction by 30%.</li>
              <li>Developed 20+ responsive web pages using JavaScript, Tailwind CSS, React & Redux.</li>
              <li>Collaborated with a team of 4, ensuring a 90% on-time delivery, through effective communication and coordination.</li>
              <li>•Utilized Jira and Trello for task management, achieving a 92% completion rate per sprint and maintaining comprehensive documentation.</li>
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
                <span style={{ fontWeight: 'bold' }}>Technical Intern (Part-Time)</span> <br /> Nov'2021 - Aug'2024
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>•Designed UI for the Android app and Frontend of website, resulting in a 20% increase in user satisfaction and 30% reduction in reported issues.</li>
              <li>Conducted rigorous QA/Manual testing, uncovering and resolving 350+ major bugs and several minor fixes, enhancing application stability by 35%.</li>
              <li>•Managed backend operations via the admin dashboard, boosting engagement by 15%, and led the 'Swaayam Seekho' initiative, driving a 25% increase in active users within six months through cross-functional team coordination.</li>
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
                <span style={{ fontWeight: 'bold' }}>Web Developer Intern</span> <br /> May'2023 - Jul'2023
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Crafted the organization's website, boosting traffic by 25% and user engagement by 10% after launch.</li>
              <li>Produced captivating social and graphic content, boosting engagement by 40%, expanding reach by 15%, and elevating brand recognition by 25%, with a 10% increase in campaign conversions.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;


