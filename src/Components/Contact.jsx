import { useState } from 'react';
import { useDarkMode, ThemeIcon } from '../DarkModeContext'; // Adjust the path as necessary
import { Button, Input, Textarea } from '@material-tailwind/react';
import emailjs from 'emailjs-com';
import contactimg from '../assets/contactus.gif';

function handleKeyPress(event) {
  // Prevents the input of any non-numeric characters
  if (event.key === '-' || isNaN(Number(event.key))) {
    event.preventDefault();
  }
}

const Contact = () => {
  const [message, showMessage] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const formClass = darkMode ? 'text-white bg-gray-800' : 'text-gray-900 bg-white';
  const labelClass = darkMode ? 'text-white' : 'text-gray-900';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ifm1won',
        'template_kusfgb8',
        e.target,
        'zbW84Gsto38vdnFIA'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showMessage(true);
  };

  return (
    <div className={`w-full pb-16 lg:py-25 min-h-screen flex flex-col justify-center items-center ${darkMode ? "dark" : ""}`}>
      <h1 className="text-3xl font-bold text-center border-spacing-2 border-b-2 border-b-red-600 my-10">Contact</h1>
      <div className="flex flex-col md:flex-row lg:w-[70%] items-center justify-around">
        <div className="w-[100vw] p-5 lg:w-[500px]">
          <div className={`relative rounded-lg bg-opacity-60 backdrop-blur-sm p-8  sm:p-8 ${formClass}`}>
            <form onSubmit={sendEmail}>
              <div className="mb-6">
                <Input type="text" name="name" label="Enter Your Name" required labelClassName={labelClass} />
              </div>

              <div className="mb-6">
                <Input
                  type="email"
                  name="email"
                  label="Enter Your Email"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address"
                  labelClassName={labelClass}
                />
              </div>

              <div className="mb-6">
                <Input
                  type="text"
                  name="phone"
                  label="Enter Your Phone Number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  onKeyPress={handleKeyPress}
                  labelClassName={labelClass}
                />
              </div>

              <div className="mb-6">
                <Textarea rows="6" name="message" label="Enter Message" required labelClassName={labelClass} />
              </div>
              <div>
                <Button variant="gradient" color="red" fullWidth type="submit">
                  Send Message
                </Button>
                <div>
                  {message ? (
                    <p className="text-green-500 text-center mt-2">Message Sent Successfully</p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-[500px] lg-max:hidden">
          <img className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]" src={contactimg} alt="contactimg" />
        </div>
      </div>

      {/* Dark mode toggle button with theme icons */}
      <button className="absolute top-5 right-5" onClick={toggleDarkMode}>
        <ThemeIcon darkMode={darkMode} />
      </button>
    </div>
  );
};

export default Contact;


