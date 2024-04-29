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
                <span style={{ fontWeight: 'bold' }}>Software Developer Intern</span> <br /> Jan'2024 - Present
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Responsible for developing front-end for numerous websites, optimizing user experience and functionality.</li>
              <li>Managed UI/UX designing, achieving a 20% increase in user satisfaction.</li>
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
                <span style={{ fontWeight: 'bold' }}>Intern</span> <br /> Mar'2023 - Aug'2023 (6 Months)
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Developed website front-end, yielding a 12% increase in page load speed and a 24% rise in user engagement.</li>
              <li>Designed Android app UI, decreasing bounce rate by 21% and increasing user retention by 26%.</li>
              <li>Conducted exhaustive manual testing, identifying and reporting 300+ bugs and functionality issues, successfully resolving 24%, enhancing overall user experience and system stability.</li>
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
                <span style={{ fontWeight: 'bold' }}>Web Developer Intern</span> <br /> Aug'2022 - Jan'2023 (5 Months)
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className={`list-disc font-sans ml-5 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <li>Developed the organization's website, boosting traffic by 20% and user engagement by 10% after launch.</li>
              <li>Generated compelling social media content, elevating follower engagement by 25% and expanding reach by 20% across platforms including Amazon, over 5 months.</li>
              <li>Designed and executed graphic content strategies, resulting in a 30% improvement in brand recognition and a 15% uptick in conversion rates for online campaigns.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;


