// import { hero } from "./public";

export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "Threat_report", label: "Threat report" },
  { href: "/", key: "Resources ", label: "Resources  " },
  { href: "/", key: "About_Us", label: "About Us" },
  { href: "/", key: "Contact_Us", label: "Contact Us" },
];

export const cdmapti1 = [
  {
    id: 1,
    title: "Enhanced Email Security",
    content:
      "Enhanced Email Security: Deploying advanced email filtering solutions to detect and block spear-phishing attempts.",
    reference: "",
  },
  {
    id: 2,
    title: "Network Segmentation",
    content:
      "Network Segmentation: Implementing network segmentation to limit lateral movement and contain breaches.",
    reference: "",
  },
  {
    id: 3,
    title: "Endpoint Detection and Response (EDR)",
    content:
      "Endpoint Detection and Response (EDR): Utilizing EDR solutions to monitor and respond to suspicious activities on endpoints.",
    reference: "",
  },
  {
    id: 4,
    title: "Regular Security Audits",
    content:
      "Regular Security Audits: Conducting regular security audits and penetration testing to identify and address vulnerabilities.",
    reference: "",
  },
  {
    id: 5,
    title: "Employee Training",
    content:
      "Employee Training: Providing training and awareness programs to educate employees about phishing tactics and cybersecurity best practices.",
    reference: "",
  },
];

export const points = [
  {
    id: 1,
    title: "Spear Phishing",
    description:
      "APT 1 used spear-phishing emails to gain initial access, often crafting messages that appear to be from trusted sources to trick targets into clicking malicious links or opening infected attachments.",
    reference: { id: 1, text: "1" },
  },
  {
    id: 2,
    title: "Custom Malware",
    description:
      "The group employed custom malware families such as BACKDOOR.BARKIOFDOG and BACKDOOR.DOGCALL, designed to establish persistent access and facilitate data exfiltration.",
    reference: { id: 1, text: "1" },
  },
  {
    id: 3,
    title: "Command and Control (C2) Infrastructure",
    description:
      "APT 1 operated an extensive C2 infrastructure, utilizing compromised servers worldwide to manage operations and evade detection.",
    reference: { id: 6, text: "6" },
  },
  {
    id: 4,
    title: "Data Exfiltration",
    description:
      "The group excelled in identifying valuable data, often compressing and encrypting it to minimize detection during exfiltration.",
    reference: { id: 7, text: "7" },
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "documented APT attacks",
    value: "3000+",
  },
  {
    id: "stats-2",
    title: " known APT groups identified and tracked",
    value: "100+",
  },
];

export const atps = [
  {
    id: "atps-1",
    name: "APT 1",
    title: "Comment Crew",
    img: "/watch.svg",
    link: "apt1",
  },
  {
    id: "atps-2",
    name: "APT 28",
    title: "Fancy bear",
    img: "/danger.svg",
    link: "APT28",
  },
  {
    id: "atps-3",
    name: "APT 29",
    title: "Cozy bear",
    img: "/icn2.png",
    link: "APT29",
  },
  {
    id: "atps-4",
    name: "APT 33",
    title: "Elfin",
    img: "/icn1.png",
    link: "APT33",
  },
];
