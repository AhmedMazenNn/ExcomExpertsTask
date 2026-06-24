import { useState, useMemo, type ReactNode } from "react";
import { Plus, Minus, Check, Circle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Camera, Plan, Sensor, Protection } from "@/types";
import { cameras as initialCameras, sensors as initialSensors, protections as initialProtections, plans, addOns } from "@/data";
import { CameraCard } from "@/components/checkout/CameraCard";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary";
import { Badge } from "@/components/ui/primitives";

function LiveStreamIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_70_14253)">
        <path d="M10 28.75V23.75" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 28.75V23.75" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26.25 28.75L3.75 28.75" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5.9375C17.5888 5.9375 19.6875 8.03625 19.6875 10.625C19.6875 13.2138 17.5888 15.3125 15 15.3125C12.4112 15.3125 10.3125 13.2138 10.3125 10.625C10.3125 8.03625 12.4112 5.9375 15 5.9375Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9688 18.75C14.71 18.75 14.5 18.96 14.5 19.2188C14.5 19.4775 14.71 19.6875 14.9688 19.6875C15.2275 19.6875 15.4375 19.4775 15.4375 19.2188C15.4375 18.96 15.2275 18.75 14.9688 18.75Z" fill="#6F7882" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3.5625" y="0.75" width="22.875" height="22.875" rx="3.25" stroke="#6F7882" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_70_14253">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ShieldStepIcon() {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.87127 6.03301C4.87127 6.03301 3.30029 6.31376 3.30029 7.63376V17.2382C3.30029 22.3745 10.8766 28.0903 13.4519 29.7881C13.9651 30.1296 14.6291 30.1296 15.1423 29.7881C17.7176 28.0903 25.2939 22.3745 25.2939 17.2382V7.63376C25.2939 6.31376 23.723 6.03301 23.723 6.03301L15.2088 3.36362C14.615 3.17746 13.9792 3.17746 13.3855 3.36362L4.87127 6.03301Z" fill="#F0F0F0" />
      <path d="M6.77498 4.89245C6.80116 4.88761 6.82703 4.88119 6.85244 4.87322L15.3666 2.20382C15.8322 2.05787 16.3307 2.05787 16.7962 2.20382L25.3104 4.87322C25.3358 4.88119 25.3617 4.88761 25.3878 4.89245C25.3889 4.89264 25.3899 4.89283 25.391 4.89303L25.3905 4.89294L25.3897 4.89279L25.3884 4.89257L25.3917 4.89323C25.3971 4.89434 25.4074 4.89655 25.422 4.90003C25.4513 4.90702 25.4967 4.91889 25.5528 4.93678C25.6674 4.97329 25.8137 5.03092 25.9542 5.11502C26.2343 5.2828 26.4153 5.49961 26.4153 5.83576V15.4403C26.4153 16.5622 25.9995 17.7636 25.2829 18.9901C24.5687 20.2127 23.5798 21.4187 22.4943 22.5371C20.3225 24.7748 17.8263 26.5984 16.5637 27.4308L16.5614 27.4324C16.2697 27.6264 15.8931 27.6264 15.6015 27.4324L15.5991 27.4308C14.3365 26.5984 11.8403 24.7748 9.66851 22.5371C8.58304 21.4187 7.59409 20.2127 6.87988 18.9901C6.16334 17.7636 5.74756 16.5622 5.74756 15.4403V5.83576C5.74756 5.49961 5.92848 5.2828 6.20865 5.11502C6.34908 5.03092 6.49538 4.97329 6.60996 4.93678C6.66605 4.91889 6.71153 4.90702 6.74082 4.90003C6.75539 4.89655 6.76572 4.89434 6.77109 4.89323L6.77498 4.89245ZM6.77224 4.89294L6.77218 4.89295C6.77222 4.89294 6.77225 4.89294 6.77229 4.89294L6.77224 4.89294Z" stroke="#6F7882" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiStepIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4417 8.10826C22.4417 8.90825 21.9084 9.44157 21.1084 9.44157H10.4417C9.64173 9.44157 9.1084 8.90825 9.1084 8.10826V2.10834C9.1084 1.30835 9.64173 0.775024 10.4417 0.775024H21.1084C21.9084 0.775024 22.4417 1.30835 22.4417 2.10834V8.10826Z" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5078 4.77502V5.44168" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.1748 4.77502V5.44168" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.9916 15.5084C18.6132 18.8417 12.9375 18.8417 9.55908 15.5084" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.316 19.7751C20.5052 25.5084 11.0457 25.5084 5.23486 19.7751" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30.7749 24.8413C22.3965 32.8412 9.15328 32.7079 0.774902 24.708" stroke="#6F7882" strokeWidth="1.55" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function KeypadStepIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2134 4.22826L9.7351 0.75L6.25684 4.22826" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.80739 7.92396C4.80739 8.32755 4.64707 8.71461 4.36168 8.99999C4.0763 9.28537 3.68924 9.4457 3.28565 9.4457H2.27174C1.86815 9.4457 1.48109 9.28537 1.19571 8.99999C0.910326 8.71461 0.75 8.32755 0.75 7.92396C0.75 7.52037 0.910326 7.13331 1.19571 6.84793C1.48109 6.56255 1.86815 6.40222 2.27174 6.40222H3.28565C3.68924 6.40222 4.0763 6.56255 4.36168 6.84793C4.64707 7.13331 4.80739 7.52037 4.80739 7.92396Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.7639 7.92396C11.7639 8.32755 11.6036 8.71461 11.3182 8.99999C11.0328 9.28537 10.6458 9.4457 10.2422 9.4457H9.22828C8.82469 9.4457 8.43763 9.28537 8.15225 8.99999C7.86687 8.71461 7.70654 8.32755 7.70654 7.92396C7.70654 7.52037 7.86687 7.13331 8.15225 6.84793C8.43763 6.56255 8.82469 6.40222 9.22828 6.40222H10.2422C10.6458 6.40222 11.0328 6.56255 11.3182 6.84793C11.6036 7.13331 11.7639 7.52037 11.7639 7.92396Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.7205 7.92396C18.7205 8.32755 18.5602 8.71461 18.2748 8.99999C17.9894 9.28537 17.6023 9.4457 17.1987 9.4457H16.1848C15.7812 9.4457 15.3942 9.28537 15.1088 8.99999C14.8234 8.71461 14.6631 8.32755 14.6631 7.92396C14.6631 7.52037 14.8234 7.13331 15.1088 6.84793C15.3942 6.56255 15.7812 6.40222 16.1848 6.40222H17.1987C17.6023 6.40222 17.9894 6.56255 18.2748 6.84793C18.5602 7.13331 18.7205 7.52037 18.7205 7.92396Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.80739 13.5761C4.80739 13.9797 4.64707 14.3667 4.36168 14.6521C4.0763 14.9375 3.68924 15.0978 3.28565 15.0978H2.27174C1.86815 15.0978 1.48109 14.9375 1.19571 14.6521C0.910326 14.3667 0.75 13.9797 0.75 13.5761C0.75 13.1725 0.910326 12.7854 1.19571 12.5C1.48109 12.2146 1.86815 12.0543 2.27174 12.0543H3.28565C3.68924 12.0543 4.0763 12.2146 4.36168 12.5C4.64707 12.7854 4.80739 13.1725 4.80739 13.5761Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.7639 13.5761C11.7639 13.9797 11.6036 14.3667 11.3182 14.6521C11.0328 14.9375 10.6458 15.0978 10.2422 15.0978H9.22828C8.82469 15.0978 8.43763 14.9375 8.15225 14.6521C7.86687 14.3667 7.70654 13.9797 7.70654 13.5761C7.70654 13.1725 7.86687 12.7854 8.15225 12.5C8.43763 12.2146 8.82469 12.0543 9.22828 12.0543H10.2422C10.6458 12.0543 11.0328 12.2146 11.3182 12.5C11.6036 12.7854 11.7639 13.1725 11.7639 13.5761Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.7205 13.5761C18.7205 13.9797 18.5602 14.3667 18.2748 14.6521C17.9894 14.9375 17.6023 15.0978 17.1987 15.0978H16.1848C15.7812 15.0978 15.3942 14.9375 15.1088 14.6521C14.8234 14.3667 14.6631 13.9797 14.6631 13.5761C14.6631 13.1725 14.8234 12.7854 15.1088 12.5C15.3942 12.2146 15.7812 12.0543 16.1848 12.0543H17.1987C17.6023 12.0543 17.9894 12.2146 18.2748 12.5C18.5602 12.7854 18.7205 13.1725 18.7205 13.5761Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.80739 19.2283C4.80739 19.6319 4.64707 20.0189 4.36168 20.3043C4.0763 20.5897 3.68924 20.75 3.28565 20.75H2.27174C1.86815 20.75 1.48109 20.5897 1.19571 20.3043C0.910326 20.0189 0.75 19.6319 0.75 19.2283C0.75 18.8247 0.910326 18.4376 1.19571 18.1523C1.48109 17.8669 1.86815 17.7065 2.27174 17.7065H3.28565C3.68924 17.7065 4.0763 17.8669 4.36168 18.1523C4.64707 18.4376 4.80739 18.8247 4.80739 19.2283Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.7639 19.2283C11.7639 19.6319 11.6036 20.0189 11.3182 20.3043C11.0328 20.5897 10.6458 20.75 10.2422 20.75H9.22828C8.82469 20.75 8.43763 20.5897 8.15225 20.3043C7.86687 20.0189 7.70654 19.6319 7.70654 19.2283C7.70654 18.8247 7.86687 18.4376 8.15225 18.1523C8.43763 17.8669 8.82469 17.7065 9.22828 17.7065H10.2422C10.6458 17.7065 11.0328 17.8669 11.3182 18.1523C11.6036 18.4376 11.7639 18.8247 11.7639 19.2283Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.7205 19.2283C18.7205 19.6319 18.5602 20.0189 18.2748 20.3043C17.9894 20.5897 17.6023 20.75 17.1987 20.75H16.1848C15.7812 20.75 15.3942 20.5897 15.1088 20.3043C14.8234 20.0189 14.6631 19.6319 14.6631 19.2283C14.6631 18.8247 14.8234 18.4376 15.1088 18.1523C15.3942 17.8669 15.7812 17.7065 16.1848 17.7065H17.1987C17.6023 17.7065 17.9894 17.8669 18.2748 18.1523C18.5602 18.4376 18.7205 18.8247 18.7205 19.2283Z" stroke="#6F7882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4.12248 0.209382C4.32189 -0.0697919 4.7368 -0.0697896 4.93621 0.209386L8.96458 5.84915C9.20096 6.18009 8.96439 6.63977 8.55771 6.63977L0.500897 6.63977C0.09421 6.63977 -0.142352 6.18008 0.0940317 5.84915L4.12248 0.209382Z" fill="#4E2FD2"/>
    </svg>
  );
}

const STEPS = [
  { num: 1, label: "Choose your cameras", icon: LiveStreamIcon },
  { num: 2, label: "Choose your plan", icon: ShieldStepIcon },
  { num: 3, label: "Choose your sensors", icon: WifiStepIcon },
  { num: 4, label: "Add extra protection", icon: KeypadStepIcon },
];

function QtyControl({ value, onDecrement, onIncrement }: { value: number; onDecrement: () => void; onIncrement: () => void }) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={onDecrement}
        className="w-7 h-7 border border-input rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Minus className="w-3 h-3" />
      </button>
      <span className="w-6 text-center text-sm font-semibold">{value}</span>
      <button
        onClick={onIncrement}
        className="w-7 h-7 border border-input rounded-md flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem("bundle-builder-state");
    if (!raw) return null;
    return JSON.parse(raw) as {
      cameras: { id: string; quantity: number; colors?: { name: string; image: string }[] }[];
      plan: string | null;
      sensors: { id: string; quantity: number }[];
      protections: { id: string; quantity: number }[];
    };
  } catch {
    return null;
  }
}

function applySavedCameras(saved: ReturnType<typeof loadSavedState>) {
  if (!saved) return initialCameras.map((c) => ({ ...c }));
  return initialCameras.map((c) => {
    const savedCam = saved.cameras.find((sc) => sc.id === c.id);
    if (savedCam) {
      return { ...c, quantity: savedCam.quantity, colors: savedCam.colors ?? c.colors };
    }
    return { ...c };
  });
}

function applySavedPlan(saved: ReturnType<typeof loadSavedState>) {
  if (!saved?.plan) return plans[2];
  return plans.find((p) => p.id === saved.plan) ?? plans[2];
}

function applySavedSensors(saved: ReturnType<typeof loadSavedState>) {
  if (!saved) return initialSensors.map((s) => ({ ...s }));
  return initialSensors.map((s) => {
    const savedSensor = saved.sensors.find((ss) => ss.id === s.id);
    return savedSensor ? { ...s, quantity: savedSensor.quantity } : { ...s };
  });
}

function applySavedProtections(saved: ReturnType<typeof loadSavedState>) {
  if (!saved) return initialProtections.map((p) => ({ ...p }));
  return initialProtections.map((p) => {
    const savedProt = saved.protections.find((sp) => sp.id === p.id);
    return savedProt ? { ...p, quantity: savedProt.quantity } : { ...p };
  });
}

export default function Index() {
  const savedState = useMemo(() => loadSavedState(), []);

  const [selectedCameras, setSelectedCameras] = useState<Camera[]>(
    () => applySavedCameras(savedState)
  );
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(
    () => applySavedPlan(savedState)
  );
  const [selectedSensors, setSelectedSensors] = useState<Sensor[]>(
    () => applySavedSensors(savedState)
  );
  const [selectedProtections, setSelectedProtections] = useState<Protection[]>(
    () => applySavedProtections(savedState)
  );
  const [activeStep, setActiveStep] = useState(1);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([1]);

  const updateCamera = (id: string, quantity: number) => {
    setSelectedCameras((prev) =>
      prev.map((c) => (c.id === id ? { ...c, quantity: Math.max(0, quantity) } : c))
    );
  };

  const updateSensor = (id: string, quantity: number) => {
    setSelectedSensors((prev) =>
      prev.map((s) => (s.id === id ? { ...s, quantity: Math.max(0, quantity) } : s))
    );
  };

  const updateProtection = (id: string, quantity: number) => {
    setSelectedProtections((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(0, quantity) } : p))
    );
  };

  const totalQuantity = useMemo(
    () => selectedCameras.reduce((sum, c) => sum + c.quantity, 0),
    [selectedCameras]
  );

  const sensorQuantity = useMemo(
    () => selectedSensors.reduce((sum, s) => sum + s.quantity, 0),
    [selectedSensors]
  );

  const protectionQuantity = useMemo(
    () => selectedProtections.reduce((sum, p) => sum + p.quantity, 0),
    [selectedProtections]
  );

  type CartItem = { name: string; quantity: number; price: number; image?: string };
  const cartItems = useMemo(() => {
    const items: CartItem[] = selectedCameras
      .filter((c) => c.quantity > 0)
      .map((c) => ({ name: c.name, quantity: c.quantity, price: c.price, image: c.image }));

    items.push(...selectedSensors
      .filter((s) => s.quantity > 0)
      .map((s) => ({ name: s.name, quantity: s.quantity, price: s.price, image: s.image })));

    items.push(...selectedProtections
      .filter((p) => p.quantity > 0)
      .map((p) => ({ name: p.name, quantity: p.quantity, price: p.price, image: p.image })));

    if (selectedPlan) {
      items.push({ name: selectedPlan.name, quantity: 1, price: selectedPlan.price });
    }

    items.push(...addOns.map((a) => ({ name: a.name, quantity: 1, price: a.price })));

    return items;
  }, [selectedCameras, selectedSensors, selectedProtections, selectedPlan]);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const originalSubtotal = useMemo(() => {
    let total = 0;
    selectedCameras.forEach((c) => {
      if (c.quantity > 0) {
        total += (c.originalPrice > 0 ? c.originalPrice : c.price) * c.quantity;
      }
    });
    selectedSensors.forEach((s) => (total += s.price * s.quantity));
    selectedProtections.forEach((p) => (total += p.price * p.quantity));
    if (selectedPlan?.originalPrice) total += selectedPlan.originalPrice;
    return total;
  }, [selectedCameras, selectedSensors, selectedProtections, selectedPlan]);

  const savings = originalSubtotal - subtotal;

  const toggleStep = (stepNum: number) => {
    setActiveStep(stepNum);
    setExpandedSteps((prev) =>
      prev.includes(stepNum) ? prev.filter((s) => s !== stepNum) : [...prev, stepNum]
    );
  };

  const saveSystem = () => {
    const state = {
      cameras: selectedCameras.map(({ id, quantity, colors }) => ({ id, quantity, colors })),
      plan: selectedPlan?.id ?? null,
      sensors: selectedSensors.map(({ id, quantity }) => ({ id, quantity })),
      protections: selectedProtections.map(({ id, quantity }) => ({ id, quantity })),
    };
    localStorage.setItem("bundle-builder-state", JSON.stringify(state));
    alert("Your system has been saved! Reload the page to restore it.");
  };

  const isExpanded = (stepNum: number) => expandedSteps.includes(stepNum);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-0 m-0">

        <div className="space-y-0">
          {STEPS.map((step, index) => {
            const expanded = isExpanded(step.num);
            const Icon = (step as { icon?: () => ReactNode }).icon;

            return (
              <div key={step.num}>
                {index > 0 && <div className="border-t border-border" />}

                <div
                  className={cn(
                    "transition-colors",
                    expanded ? "bg-section-bg rounded-lg my-3" : "py-[18px]"
                  )}
                >
                  <div className={cn("flex items-center justify-between gap-2", expanded && "px-4 pt-4")}>
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="w-6 h-6 flex items-center justify-center shrink-0">
                        {Icon && <Icon />}
                      </span>
                      <h2
                        className={cn(
                          "text-xl sm:text-[28px] leading-none tracking-normal font-normal",
                          expanded || activeStep === step.num
                            ? "text-[#0B0D10]"
                            : "text-muted-foreground"
                        )}
                      >
                        {step.label}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {step.num === 1 && (
                        <span className="text-[14px] leading-[16px] text-primary font-normal text-center">
                          {totalQuantity} selected
                        </span>
                      )}
                      {step.num === 2 && selectedPlan && (
                        <span className="text-[14px] leading-[16px] text-primary font-normal text-center">
                          {selectedPlan ? "1 selected" : "0 selected"}
                        </span>
                      )}
                      {step.num === 3 && (
                        <span className="text-[14px] leading-[16px] text-primary font-normal text-center">
                          {sensorQuantity} selected
                        </span>
                      )}
                      {step.num === 4 && (
                        <span className="text-[14px] leading-[16px] text-primary font-normal text-center">
                          {protectionQuantity} selected
                        </span>
                      )}
                      <button
                        onClick={() => toggleStep(step.num)}
                        className="p-1 rounded-md hover:bg-black/5 transition-colors"
                        aria-label={expanded ? "Collapse section" : "Expand section"}
                      >
                        <ArrowIcon
                          className={cn(
                            "transition-transform duration-200",
                            expanded && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                  </div>

                  {expanded && step.num === 1 && (
                    <div className="px-4 pb-4 pt-4">
                      <div className="grid gap-[15px] w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(224.6px, 1fr))" }}>
                        {selectedCameras.map((camera) => (
                          <CameraCard
                            key={camera.id}
                            camera={camera}
                            onUpdateQuantity={updateCamera}
                          />
                        ))}
                      </div>

                      <div className="flex justify-center mt-6">
                        <button
                          onClick={() => toggleStep(2)}
                          className=" w-full max-w-[266px] h-[39px] bg-background border border-primary text-primary font-semibold text-sm rounded-[7px] px-6 py-[5px] hover:bg-primary/5 transition-colors"
                        >
                          Next: Choose your plan
                        </button>
                      </div>
                    </div>
                  )}

                  {expanded && step.num === 2 && (
                    <div className="px-4 pb-4 pt-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px]">
                        {plans.map((plan) => {
                          const isSelected = selectedPlan?.id === plan.id;
                          return (
                            <button
                              key={plan.id}
                              onClick={() => setSelectedPlan(plan)}
                              className={cn(
                                "relative flex flex-col items-start text-left border-2 transition-all min-h-[331.1px] rounded-[10px] px-[11px] py-[15px]",
                                isSelected
                                  ? "border-primary bg-primary/5 shadow-sm"
                                  : "border-border bg-background hover:border-primary/40"
                              )}
                            >
                              {plan.popular && (
                                <Badge variant="default" className="absolute -top-2.5 right-3 text-[10px] px-2 py-0.5 bg-primary">
                                  Popular
                                </Badge>
                              )}
                              {plan.price === 0 ? (
                                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center mb-3">
                                  <Sparkles className="w-4 h-4 text-success" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                  <Sparkles className="w-4 h-4 text-primary" />
                                </div>
                              )}
                              <h3 className="text-sm font-bold text-foreground mb-0.5">{plan.name}</h3>
                              <div className="mb-2">
                                {plan.originalPrice && plan.originalPrice > plan.price ? (
                                  <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-extrabold text-foreground">${plan.price}</span>
                                    <span className="text-xs text-muted-foreground line-through">${plan.originalPrice}</span>
                                    {plan.originalPrice > 0 && (
                                      <span className="text-[10px] font-semibold text-success">
                                        Save {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                                      </span>
                                    )}
                                  </div>
                                ) : plan.price > 0 ? (
                                  <span className="text-lg font-extrabold text-foreground">${plan.price}</span>
                                ) : (
                                  <span className="text-sm font-bold text-success">Free</span>
                                )}
                                <span className="text-[10px] text-muted-foreground ml-1">/yr</span>
                              </div>
                              <div className="w-full h-px bg-border my-2" />
                              <ul className="space-y-1.5">
                                {plan.features?.slice(0, 4).map((f, i) => (
                                  <li key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                                    <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                              {isSelected && (
                                <div className="mt-3 w-full">
                                  <div className="flex items-center justify-center gap-1.5 text-primary text-xs font-semibold">
                                    <Circle className="w-2 h-2 fill-primary" />
                                    Selected
                                  </div>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-center mt-6">
                        <button
                          onClick={() => toggleStep(3)}
                          className=" w-full max-w-[266px] h-[39px] bg-primary text-primary-foreground font-semibold text-sm rounded-[7px] px-6 py-[5px] hover:opacity-90 transition-opacity"
                        >
                          Next: Choose your sensors
                        </button>
                      </div>
                    </div>
                  )}

                  {expanded && step.num === 3 && (
                    <div className="px-4 pb-4 pt-4">
                      <div className="grid gap-[15px] w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(224.6px, 1fr))" }}>
                        {selectedSensors.map((sensor) => (
                          <div
                            key={sensor.id}
                            className={cn(
                              "min-h-[331.1px] bg-card rounded-[10px] px-[11px] py-[15px] flex flex-col transition-all",
                              sensor.quantity > 0
                                ? "border-2 border-primary"
                                : "border border-border"
                            )}
                          >
                            {sensor.image && (
                              <div className="h-[100px] flex items-center justify-center mb-3">
                                <img
                                  src={sensor.image}
                                  alt={sensor.name}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            )}
                            <h3 className="text-[18px] font-semibold text-foreground leading-none tracking-[0.6px] mb-1">
                              {sensor.name}
                            </h3>
                            {sensor.description && (
                              <p className="text-[14px] text-muted-foreground leading-[130%] tracking-[0.6px] font-medium mb-2">
                                {sensor.description}
                              </p>
                            )}
                            <div className="mt-auto flex items-center justify-between">
                              <QtyControl
                                value={sensor.quantity}
                                onDecrement={() => updateSensor(sensor.id, sensor.quantity - 1)}
                                onIncrement={() => updateSensor(sensor.id, sensor.quantity + 1)}
                              />
                              <div className="flex items-center gap-1 shrink-0">
                                {sensor.originalPrice && sensor.originalPrice > 0 && (
                                  <span className="text-[16px] text-[#D8392B] line-through leading-none tracking-[0.6px] whitespace-nowrap">
                                    ${sensor.originalPrice.toFixed(2)}
                                  </span>
                                )}
                                <span className="text-sm font-normal text-foreground leading-tight whitespace-nowrap">
                                  {sensor.price === 0 ? "FREE" : `$${sensor.price.toFixed(2)}`}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center mt-6">
                        <button
                          onClick={() => toggleStep(4)}
                          className=" w-full max-w-[266px] h-[39px] bg-primary text-primary-foreground font-semibold text-sm rounded-[7px] px-6 py-[5px] hover:opacity-90 transition-opacity"
                        >
                          Next: Add extra protection
                        </button>
                      </div>
                    </div>
                  )}

                  {expanded && step.num === 4 && (
                    <div className="px-4 pb-4 pt-4">
                      <div className="grid gap-[15px] w-full" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(224.6px, 1fr))" }}>
                        {selectedProtections.map((item) => (
                          <div
                            key={item.id}
                            className={cn(
                              "min-h-[331.1px] bg-card rounded-[10px] px-[11px] py-[15px] flex flex-col transition-all",
                              item.quantity > 0
                                ? "border-2 border-primary"
                                : "border border-border"
                            )}
                          >
                            {item.image && (
                              <div className="h-[100px] flex items-center justify-center mb-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="max-w-full max-h-full object-contain"
                                />
                              </div>
                            )}
                            <h3 className="text-[18px] font-semibold text-foreground leading-none tracking-[0.6px] mb-1">
                              {item.name}
                            </h3>
                            {item.description && (
                              <p className="text-[14px] text-muted-foreground leading-[130%] tracking-[0.6px] font-medium mb-2">
                                {item.description}
                              </p>
                            )}
                            <div className="mt-auto flex items-center justify-between">
                              <QtyControl
                                value={item.quantity}
                                onDecrement={() => updateProtection(item.id, item.quantity - 1)}
                                onIncrement={() => updateProtection(item.id, item.quantity + 1)}
                              />
                              <div className="flex items-center gap-1 shrink-0">
                                <span className="text-sm font-normal text-foreground leading-tight whitespace-nowrap">
                                  {item.price === 0 ? "FREE" : `$${item.price.toFixed(2)}`}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center mt-3">
                        <button className=" w-full max-w-[266px] h-[39px] bg-primary text-primary-foreground font-semibold text-sm rounded-[7px] px-6 py-[5px] hover:opacity-90 transition-opacity">
                          Complete your system
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <CheckoutSummary
          selectedCameras={selectedCameras}
          sensors={selectedSensors}
          protections={selectedProtections}
          selectedPlan={selectedPlan}
          addOns={addOns}
          subtotal={subtotal}
          originalSubtotal={originalSubtotal}
          savings={savings}
          onUpdateCamera={updateCamera}
          onUpdateSensor={updateSensor}
          onUpdateProtection={updateProtection}
          onSaveSystem={saveSystem}
        />
      </div>
    </div>
  );
}
