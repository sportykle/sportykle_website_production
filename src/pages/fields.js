import keyboardIcon from "../assets/administratorProfile/keyboard.png";
import organisationIcon from "../assets/administratorProfile/organisation.png";
import codingIcon from "../assets/administratorProfile/coding.png";
import mobileIcon from "../assets/administratorProfile/mobile.png";
import emailIcon from "../assets/administratorProfile/gmail.png";
import addressIcon from "../assets/administratorProfile/location.png";
import cityIcon from "../assets/administratorProfile/city.png";
import countryIcon from "../assets/administratorProfile/country.png";
import stateIcon from "../assets/administratorProfile/state.png";
import webIcon from "../assets/administratorProfile/web.png";
import keypadIcon from "../assets/administratorProfile/keypad.png";

export const fields = [
  {
    name: "institution_type",
    label: "Institution Type",
    placeholder: "Enter Institution Type...",
    icon: keyboardIcon,
    required: { value: true, message: "Institution Type is required" },
    pattern: { value: /^[a-zA-Z ]+$/, message: "Only letters and spaces are allowed" },
  },
  {
    name: "name",
    label: "Organization Name",
    placeholder: "Enter Organization Name...",
    icon: organisationIcon,
    required: { value: true, message: "Organization Name is required" },
    pattern: { value: /^[a-zA-Z0-9 ]+$/, message: "Only letters, numbers, and spaces are allowed" },
  },
  {
    name: "display_name",
    label: "Display Name",
    placeholder: "Enter Display Name...",
    icon: codingIcon,
    required: { value: true, message: "Display Name is required" },
    pattern: { value: /^[a-zA-Z0-9 ]+$/, message: "Only letters, numbers, and spaces are allowed" },
  },
  {
    name: "mobile_no",
    label: "Mobile Number",
    placeholder: "Enter Mobile Number...",
    icon: mobileIcon,
    required: { value: true, message: "Mobile Number is required" },
    pattern: { value: /^[0-9]{10}$/, message: "Mobile Number must be exactly 10 digits" },
  },
  {
    name: "alternative_mobile_no",
    label: "Alternative Mobile Number",
    placeholder: "Enter Alternative Mobile Number...",
    icon: mobileIcon,
    required: { value: false, message: "Alternative Mobile Number is required" },
    pattern: { value: /^[0-9]{10}$/, message: "Alternative Mobile Number must be exactly 10 digits" },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter Email...",
    icon: emailIcon,
    required: { value: true, message: "Email is required" },
    pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email format" },
  },
  {
    name: "address_line_1",
    label: "Address Line 1",
    placeholder: "Enter Address Line 1...",
    icon: addressIcon,
    required: { value: true, message: "Address Line 1 is required" },
    pattern: { value: /^[a-zA-Z0-9 ,.-]+$/, message: "Invalid characters in Address Line 1" },
  },
  {
    name: "address_line_2",
    label: "Address Line 2",
    placeholder: "Enter Address Line 2...",
    icon: addressIcon,
    required: { value: false, message: "" },
    pattern: { value: /^[a-zA-Z0-9 ,.-]*$/, message: "Invalid characters in Address Line 2" },
  },
  {
    name: "city",
    label: "City",
    placeholder: "Enter your City...",
    icon: cityIcon,
    required: { value: false, message: "" },
    pattern: { value: /^[a-zA-Z ]+$/, message: "Only letters and spaces are allowed" },
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Enter your Country...",
    icon: countryIcon,
    required: { value: false, message: "" },
    pattern: { value: /^[a-zA-Z ]+$/, message: "Only letters and spaces are allowed" },
  },
  {
    name: "state",
    label: "State",
    placeholder: "Enter your State...",
    icon: stateIcon,
    required: { value: true, message: "State is required." },
    pattern: { value: /^[a-zA-Z ]+$/, message: "Only letters and spaces are allowed" },
  },
  {
    name: "pincode",
    label: "Pincode",
    placeholder: "Enter your Pincode...",
    icon: keypadIcon,
    required: { value: false, message: "" },
    pattern: { value: /^[0-9]{6}$/, message: "Pincode must be exactly 6 digits" },
  },
  {
    name: "website",
    label: "Website",
    placeholder: "Enter your Website...",
    icon: webIcon,
    required: { value: false, message: "" },
    pattern: { value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})([\/\w .-]*)*\/?$/, message: "Invalid URL format" },
  },
  {
    name: "gst_no",
    label: "GST Number",
    placeholder: "Enter your GST Number...",
    icon: keypadIcon,
  },
];