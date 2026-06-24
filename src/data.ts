import type { Camera, Sensor, Plan, Protection, AddOn } from "./types";
import cam1 from "@/assets/images/camera1.png";
import cam2 from "@/assets/images/camera2.png";
import cam3 from "@/assets/images/camera3.png";
import cam4 from "@/assets/images/camera4.png";
import cam5 from "@/assets/images/camera5.png";
import blackCam1 from "@/assets/images/black_camera1.png";
import blackCam2 from "@/assets/images/black_camera2.png";
import blackCam3 from "@/assets/images/black_camera3.png";
import blackCam5 from "@/assets/images/black_camera5.png";
import greyCam1 from "@/assets/images/grey_camera1.png";
import motionSensor from "@/assets/images/Wyze Sense Motion Sensor.png";
import senseHub from "@/assets/images/Wyze Sense Hub (Required).png";
import contactSensor from "@/assets/images/Wyze Contact Sensor.png";
import keypadImg from "@/assets/images/Wyze Sense Keypad.png";
import microSd from "@/assets/images/Wyze MicroSD Card (256GB).png";
import satisfactionBadge from "@/assets/images/Satisfaction Badge-05 1.png";

export const cameras: Camera[] = [
  {
    id: "cam-v4",
    name: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever in color night vision mode.",
    originalPrice: 35.98,
    price: 27.98,
    saveBadge: "Save 22%",
    image: cam1,
    quantity: 1,
    colors: [
      { name: "White", image: cam1 },
      { name: "Grey", image: greyCam1 },
      { name: "Black", image: blackCam1 },
    ],
  },
  {
    id: "cam-pan-v3",
    name: "Wyze Cam Pan v3",
    description: "360° panorama and 180° tilt security camera.",
    originalPrice: 36.98,
    price: 34.98,
    saveBadge: "Save 5%",
    image: cam2,
    quantity: 2,
    colors: [
      { name: "White", image: cam2 },
      { name: "Black", image: blackCam2 },
    ],
  },
  {
    id: "cam-floodlight-v2",
    name: "Wyze Cam Floodlight v2",
    description: "1440p security camera with a 360-degree wide-angle view for your garage.",
    originalPrice: 98.98,
    price: 69.98,
    saveBadge: "Save 29%",
    image: cam3,
    quantity: 0,
    colors: [
      { name: "White", image: cam3 },
      { name: "Black", image: blackCam3 },
    ],
  },
  {
    id: "cam-duo",
    name: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two different views: front-facing and downward-facing lens with protection.",
    originalPrice: 0,
    price: 69.98,
    image: cam4,
    quantity: 0,
  },
  {
    id: "battery-cam-pro",
    name: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5k HDR. No electricity needed.",
    originalPrice: 0,
    price: 89.98,
    image: cam5,
    quantity: 0,
    colors: [
      { name: "White", image: cam5 },
      { name: "Black", image: blackCam5 },
    ],
  },
];

export const sensors: Sensor[] = [
  {
    id: "motion",
    name: "Wyze Sense Motion Sensor",
    description: "Detect motion and trigger automations. Easy peel-and-stick setup.",
    quantity: 2,
    price: 59.98,
    image: motionSensor,
  },
  {
    id: "hub",
    name: "Wyze Sense Hub [Required]",
    description: "Required bridge for all Wyze Sense devices. Connects via USB.",
    quantity: 1,
    price: 0,
    originalPrice: 29.92,
    image: senseHub,
  },
  {
    id: "contact",
    name: "Wyze Sense Contact Sensor",
    description: "Know when doors or windows open. Compact and wireless.",
    quantity: 0,
    price: 29.98,
    image: contactSensor,
  },
  {
    id: "keypad",
    name: "Wyze Sense Keypad",
    description: "Arm and disarm your system with a custom PIN code.",
    quantity: 0,
    price: 24.98,
    image: keypadImg,
  },
];

export const protections: Protection[] = [
  {
    id: "microsd",
    name: "Wyze MicroSD Card (256GB)",
    description: "Store up to 30 days of continuous recording locally.",
    quantity: 2,
    price: 41.96,
    image: microSd,
  },
  {
    id: "extended-warranty",
    name: "2-Year Extended Warranty",
    description: "Full coverage for accidental damage, drops, and defects.",
    quantity: 0,
    price: 19.99,
    image: microSd,
  },
  {
    id: "mount-kit",
    name: "Universal Mount Kit",
    description: "Heavy-duty aluminum mounting bracket for indoor/outdoor use.",
    quantity: 0,
    price: 14.99,
    image: microSd,
  },
];

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 0,
    originalPrice: 0,
    features: [
      "12-second recording clips",
      "Motion & sound alerts",
      "Limited cloud storage",
      "Live streaming",
    ],
    popular: false,
  },
  {
    id: "cam-plus",
    name: "Cam Plus",
    price: 19.99,
    originalPrice: 29.99,
    features: [
      "Unlimited recording clips",
      "Person, pet, vehicle detection",
      "14-day cloud storage",
      "Priority support",
    ],
    popular: false,
  },
  {
    id: "unlimited",
    name: "Cam Unlimited",
    price: 99.99,
    originalPrice: 129.99,
    features: [
      "Everything in Cam Plus",
      "Unlimited cameras",
      "30-day cloud storage",
      "24/7 continuous recording",
      "Family sharing",
    ],
    popular: true,
  },
  {
    id: "home-monitoring",
    name: "Home Monitoring",
    price: 99.99,
    originalPrice: 119.99,
    features: [
      "Everything in Cam Unlimited",
      "Professional monitoring",
      "Cellular backup",
      "Smoke/CO detection alerts",
      "Emergency dispatch",
    ],
    popular: false,
  },
];

export const addOns: AddOn[] = [
  { id: "shipping", name: "Fast Shipping", price: 0, originalPrice: 5.99 },
];

export { satisfactionBadge };
