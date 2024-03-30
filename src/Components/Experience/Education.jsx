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
import { useDarkMode } from "../../DarkModeContext"; // Adjust the path as necessary

import DegreeImage from "../../assets/degree.jpg";
import DiplomaImage from "../../assets/diploma.jpg";
import SchoolImage from "../../assets/school.jpg";


const Education = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`max-w-[40rem] flex justify-center items-center mx-auto ${darkMode ? 'dark' : ''}`}>
      <div className={`pb-16 lg:py-25 max-w-[40rem] min-h-screen justify-center items-center ${darkMode ? "dark" : ""}`}>
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a href="https://web.mitsgwalior.in/" target="_blank" rel="noopener noreferrer">
                  <Avatar
                    size="lg"
                    src={DegreeImage}
                    alt="Degree"
                  />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Madhav Institute of Technology and Science, Gwalior
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-14">
              <Typography color={darkMode ? "white" : "gray"} className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                Bachelor of Technology (B.Tech) -
                <br />
                Information Technology, <br /> 2021 - Present
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a href="https://www.polygwalior.ac.in/" target="_blank" rel="noopener noreferrer">
                  <Avatar
                    size="lg"
                    src={DiplomaImage}
                    alt="Diploma"
                  />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                Dr. BR Ambedkar Polytechnic College, Gwalior
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-14">
              <Typography color={darkMode ? "white" : "gray"} className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                Diploma -
                <br />
                Computer Science & Engineering, <br /> 2017 - 2020
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineHeader>
              <TimelineConnector />
              <TimelineIcon className="p-0 hover:scale-105 duration-200">
                <a href="https://www.stmarys.ac.in/" target="_blank" rel="noopener noreferrer">
                  <Avatar
                    size="lg"
                    src={SchoolImage}
                    alt="School"
                  />
                </a>
              </TimelineIcon>
              <Typography variant="h5" color={darkMode ? "white" : "blue-gray"}>
                St. Mary&apos;s Convent School, Sagar
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color={darkMode ? "white" : "gray"} className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-600'}`}>
                High School - 10th <br /> 2015 - 2016
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;


