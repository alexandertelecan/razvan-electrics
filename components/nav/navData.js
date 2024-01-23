import {
  MdLocationPin,
  MdLocalPhone,
  MdAccessTimeFilled,
  MdMail,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import { FaMobile } from "react-icons/fa";

const navData = {
  contactNav: [
    {
      icon: <MdLocationPin size="24px" />,
      text: "Warwickshire, UK",
    },
    {
      icon: <MdLocalPhone size="24px" />,
      text: "01789 414 964",
      isLink: true,
      href: "tel:01789414964",
    },
    {
      icon: <MdOutlinePhoneIphone size="24px" />,
      text: "077 111 22 333",
      isLink: true,
      href: "tel:07711122333",
    },
    {
      icon: <MdMail size="24px" />,
      text: "contact@razvanelectrics.co.uk",
      isLink: true,
      href: "mailto:contact@razvanelectrics.co.uk",
    },
    {
      icon: <MdAccessTimeFilled size="24px" />,
      text: "Mon - Fri: 9:00 - 16:00",
    },
  ],
  mainNav: [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Services",
      path: "/services",
    },
    {
      text: "Schedule a Call",
      path: "/schedule-a-call",
    },
  ],
};

export default navData;
