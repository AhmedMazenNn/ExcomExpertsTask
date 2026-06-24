import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Camera, Sensor, Plan, Protection, AddOn } from "@/types";
import { satisfactionBadge } from "@/data";

function PlaneIcon() {
  return (
    <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <path d="M1.74399 4.64527C1.74399 4.64527 0 4.95679 0 6.40364V16.947C0 22.5821 8.41422 28.8541 11.2699 30.7232C11.8397 31.097 12.5762 31.097 13.1459 30.7232C16.0086 28.861 24.4158 22.589 24.4158 16.947V6.40364C24.4158 4.95679 22.6718 4.64527 22.6718 4.64527L13.2432 1.72388C12.5692 1.51619 11.8466 1.51619 11.1726 1.72388L1.74399 4.64527Z" fill="#E7EFFD"/>
      <path d="M3.86317 3.41296C3.86317 3.41296 3.91876 3.39912 3.9535 3.39219L13.3821 0.470801C13.9102 0.304655 14.48 0.304655 15.008 0.470801L24.4367 3.39219C24.4367 3.39219 24.4922 3.40604 24.527 3.41296C24.527 3.41296 24.5409 3.41296 24.5617 3.41988C24.5965 3.42681 24.6451 3.44065 24.7076 3.46142C24.8327 3.50296 24.9925 3.56526 25.1523 3.65526C25.458 3.83525 25.6595 4.07062 25.6595 4.4306V14.9739C25.6595 16.1992 25.201 17.5146 24.4019 18.8645C23.6098 20.2075 22.512 21.5298 21.31 22.7551C18.899 25.2126 16.1267 27.2133 14.7301 28.1202C14.4105 28.3279 14.0005 28.3279 13.6809 28.1202C12.2774 27.2064 9.51202 25.2057 7.10101 22.7482C5.89898 21.5228 4.80117 20.2006 4.00908 18.8576C3.21699 17.5146 2.75146 16.1993 2.75146 14.967V4.4306C2.75146 4.07062 2.94601 3.83525 3.25868 3.65526C3.41154 3.56526 3.57135 3.50296 3.70336 3.46142C3.7659 3.44065 3.81453 3.42681 3.84927 3.41988C3.86317 3.41988 3.87707 3.41988 3.88401 3.41296H3.86317Z" stroke="#0046C7" strokeWidth="0.5"/>
      <path d="M8.14323 10.8547H7.44147L8.14323 12.5023L7.52484 13.9284L6.20469 10.8547H5.50293L7.30945 15.0914H7.74718L8.49759 13.3469L9.24799 15.0914H9.68572L11.4922 10.8547H10.7905L9.47033 13.9561L8.15018 10.8547H8.14323Z" fill="#0046C7"/>
      <path d="M14.8275 10.8547L13.6186 12.9869L12.4096 10.8547H11.6592L13.3128 13.7415V15.0707H13.9521V13.7415L15.5779 10.8547H14.8275Z" fill="#0046C7"/>
      <path d="M19.5176 15.0914H22.8596V14.3645H19.5176V15.0914Z" fill="#0046C7"/>
      <path d="M19.5176 11.5816H22.8596V10.8547H19.5176V11.5816Z" fill="#0046C7"/>
      <path d="M19.5176 13.3263H22.8596V12.5994H19.5176V13.3263Z" fill="#0046C7"/>
      <path d="M15.7723 10.8547V11.5609H17.9749L15.5083 15.0984H19.0935V14.3992H16.8285L19.3159 10.8617H15.7723V10.8547Z" fill="#0046C7"/>
    </svg>
  );
}

function FastDeliveryIcon() {
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
      <rect width="41" height="41" rx="5" fill="white"/>
      <path d="M9.625 20.4043H20.5V22.2168H9.625V20.4043ZM7.8125 15.873H16.875V17.6855H7.8125V15.873Z" fill="#0AA288"/>
      <path d="M33.114 20.9535L30.3953 14.6097C30.3254 14.4468 30.2092 14.3078 30.0612 14.2102C29.9132 14.1126 29.7397 14.0606 29.5624 14.0605H26.8437V12.248C26.8437 12.0077 26.7482 11.7772 26.5782 11.6072C26.4083 11.4373 26.1778 11.3418 25.9374 11.3418H11.4374V13.1543H25.0312V24.5332C24.6185 24.7733 24.2573 25.0925 23.9683 25.4726C23.6793 25.8527 23.4683 26.2862 23.3473 26.748H17.6525C17.4319 25.8938 16.9073 25.1493 16.1771 24.6541C15.4469 24.1589 14.5611 23.947 13.6858 24.0582C12.8105 24.1694 12.0059 24.5959 11.4226 25.258C10.8394 25.92 10.5176 26.772 10.5176 27.6543C10.5176 28.5366 10.8394 29.3886 11.4226 30.0506C12.0059 30.7127 12.8105 31.1392 13.6858 31.2504C14.5611 31.3616 15.4469 31.1497 16.1771 30.6545C16.9073 30.1593 17.4319 29.4148 17.6525 28.5605H23.3473C23.5445 29.3383 23.9953 30.0282 24.6286 30.5209C25.2618 31.0137 26.0413 31.2812 26.8437 31.2812C27.646 31.2812 28.4255 31.0137 29.0587 30.5209C29.692 30.0282 30.1428 29.3383 30.34 28.5605H32.2812C32.5215 28.5605 32.752 28.4651 32.922 28.2951C33.0919 28.1252 33.1874 27.8946 33.1874 27.6543V21.3105C33.1874 21.1878 33.1624 21.0663 33.114 20.9535ZM14.1562 29.4668C13.7977 29.4668 13.4473 29.3605 13.1492 29.1613C12.8511 28.9622 12.6188 28.6791 12.4816 28.3479C12.3444 28.0167 12.3085 27.6523 12.3785 27.3007C12.4484 26.9491 12.621 26.6262 12.8745 26.3727C13.128 26.1192 13.451 25.9466 13.8026 25.8766C14.1541 25.8067 14.5186 25.8426 14.8498 25.9798C15.181 26.117 15.464 26.3493 15.6632 26.6473C15.8624 26.9454 15.9687 27.2958 15.9687 27.6543C15.9687 28.135 15.7777 28.596 15.4378 28.9359C15.0979 29.2758 14.6369 29.4668 14.1562 29.4668ZM26.8437 15.873H28.9643L30.9073 20.4043H26.8437V15.873ZM26.8437 29.4668C26.4852 29.4668 26.1348 29.3605 25.8367 29.1613C25.5386 28.9622 25.3063 28.6791 25.1691 28.3479C25.0319 28.0167 24.996 27.6523 25.066 27.3007C25.1359 26.9491 25.3085 26.6262 25.562 26.3727C25.8155 26.1192 26.1385 25.9466 26.4901 25.8766C26.8416 25.8067 27.2061 25.8426 27.5373 25.9798C27.8685 26.117 28.1515 26.3493 28.3507 26.6473C28.5499 26.9454 28.6562 27.2958 28.6562 27.6543C28.6562 28.135 28.4652 28.596 28.1253 28.9359C27.7854 29.2758 27.3244 29.4668 26.8437 29.4668Z" fill="#0AA288"/>
    </svg>
  );
}

interface CheckoutSummaryProps {
  selectedCameras: Camera[];
  sensors: Sensor[];
  protections: Protection[];
  selectedPlan: Plan | null;
  addOns: AddOn[];
  subtotal: number;
  originalSubtotal: number;
  savings: number;
  onUpdateCamera: (id: string, quantity: number) => void;
  onUpdateSensor: (id: string, quantity: number) => void;
  onUpdateProtection: (id: string, quantity: number) => void;
  onSaveSystem?: () => void;
}

function QtyControls({
  value,
  onDecrement,
  onIncrement,
}: {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <button
        onClick={onDecrement}
        className="w-6 h-6 border border-[#E5E5E5] rounded-[4px] flex items-center justify-center bg-white shrink-0"
      >
        <Minus className="w-3 h-3" />
      </button>
      <span className="text-[14px] font-medium text-[#2E2E2E] w-5 text-center">
        {value}
      </span>
      <button
        onClick={onIncrement}
        className="w-6 h-6 border border-[#E5E5E5] rounded-[4px] flex items-center justify-center bg-white shrink-0"
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  );
}

function LineItem({
  name,
  quantity,
  price,
  originalPrice,
  image,
  icon,
  onDecrement,
  onIncrement,
  hideQty,
  isPlan,
}: {
  name: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  image?: string;
  icon?: React.ReactNode;
  onDecrement: () => void;
  onIncrement: () => void;
  hideQty?: boolean;
  isPlan?: boolean;
}) {
  return (
    <div className="flex items-center w-full h-[56px] gap-3 border-b border-border/60 last:border-b-0">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon ? (
          <div className="w-8 h-8 rounded bg-white shrink-0 flex items-center justify-center">
            {icon}
          </div>
        ) : image ? (
          <img src={image} alt={name} className="w-8 h-8 rounded object-contain bg-white shrink-0" />
        ) : (
          <div className="w-8 h-8 rounded bg-white shrink-0 flex items-center justify-center" />
        )}
        <span className={cn(
          "truncate text-[16px] font-medium leading-[1.4] text-[#2E2E2E]",
          isPlan && "font-bold"
        )}>
          {isPlan && name.split(" ").length >= 2 ? (
            <>
              {name.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: "#4E2FD2" }}>{name.split(" ").pop()}</span>
            </>
          ) : (
            name
          )}
        </span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        {!hideQty && (
          <QtyControls
            value={quantity}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        )}
        <div className="flex flex-col items-end gap-[2px] w-[72px] shrink-0">
          {originalPrice && originalPrice > 0 && (
            <span className="text-[14px] font-normal text-[#9CA3AF] line-through leading-none">
              ${(originalPrice * quantity).toFixed(2)}
            </span>
          )}
          <span className="text-[16px] font-semibold text-[#5A3FFF] leading-none">
            {price === 0 ? "FREE" : `$${(price * quantity).toFixed(2)}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CheckoutSummary({
  selectedCameras,
  sensors,
  protections,
  selectedPlan,
  addOns,
  subtotal,
  originalSubtotal,
  savings,
  onUpdateCamera,
  onUpdateSensor,
  onUpdateProtection,
  onSaveSystem,
}: CheckoutSummaryProps) {
  const hasItems = selectedCameras.some((c) => c.quantity > 0);

  return (
    <div className="mt-10 bg-section-bg rounded-lg p-7 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-x-10 gap-y-8">
        <div>
          <h3 className="w-full max-w-[272px] text-[28px] font-semibold leading-none tracking-[0.6px] mb-2" style={{ color: "#1F1F1F" }}>
            Your security system
          </h3>
          <p className="w-full max-w-[552px] text-[16px] font-medium leading-[130%] tracking-[0.6px] mb-8" style={{ color: "#1F1F1FBF" }}>
            Review your personalized protection system designed to keep what matters most safe.
          </p>

          <div className="space-y-1">
            {hasItems && (
              <div>
                <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.08em] mb-3">
                  Cameras
                </h4>
                <div className="mb-5">
                  {selectedCameras
                    .filter((c) => c.quantity > 0)
                    .map((camera) => (
                      <LineItem
                        key={camera.id}
                        name={camera.name}
                        quantity={camera.quantity}
                        price={camera.price}
                        originalPrice={camera.originalPrice}
                        image={camera.image}
                        onDecrement={() => onUpdateCamera(camera.id, camera.quantity - 1)}
                        onIncrement={() => onUpdateCamera(camera.id, camera.quantity + 1)}
                      />
                    ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.08em] mb-3">
                Sensors
              </h4>
              <div className="mb-5">
                {sensors.map((sensor) => (
                  <LineItem
                    key={sensor.id}
                    name={sensor.name}
                    quantity={sensor.quantity}
                    price={sensor.price}
                    image={sensor.image}
                    onDecrement={() => onUpdateSensor(sensor.id, sensor.quantity - 1)}
                    onIncrement={() => onUpdateSensor(sensor.id, sensor.quantity + 1)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.08em] mb-3">
                Accessories
              </h4>
              <div className="mb-5">
                {protections.map((protection) => (
                  <LineItem
                    key={protection.id}
                    name={protection.name}
                    quantity={protection.quantity}
                    price={protection.price}
                    image={protection.image}
                    onDecrement={() => onUpdateProtection(protection.id, protection.quantity - 1)}
                    onIncrement={() => onUpdateProtection(protection.id, protection.quantity + 1)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.08em] mb-3">
                Plan
              </h4>
              <div className="mb-5">
                {selectedPlan && (
                  <LineItem
                    name={selectedPlan.name}
                    quantity={1}
                    price={selectedPlan.price}
                    originalPrice={selectedPlan.originalPrice}
                    icon={<PlaneIcon />}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                    hideQty
                    isPlan
                  />
                )}
                {addOns.map((addon) => (
                  <LineItem
                    key={addon.id}
                    name={addon.name}
                    quantity={1}
                    price={addon.price}
                    originalPrice={addon.originalPrice}
                    icon={<FastDeliveryIcon />}
                    onDecrement={() => {}}
                    onIncrement={() => {}}
                    hideQty
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="hidden sm:flex items-start gap-6 w-full">
            <img
              src={satisfactionBadge}
              alt="100% risk-free guarantee"
              className="w-[110px] h-[110px] shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <h4
                className="text-[20px] font-bold mb-4"
                style={{ color: "#222222" }}
              >
                30-day hassle-free returns
              </h4>
              <p
                className="text-[16px] font-normal leading-[1.4] max-w-[260px]"
                style={{ color: "#555555" }}
              >
                If you&apos;re not totally in love with the product, we will refund you 100%.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full mt-6">
            <div className="h-8 px-3 bg-[#5A3FFF] rounded-[4px] flex items-center shrink-0">
              <span className="text-[14px] font-medium text-white whitespace-nowrap">
                as low as $19.19/mo
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              {originalSubtotal > subtotal && (
                <span className="text-lg sm:text-[24px] font-normal line-through" style={{ color: "#7F7F7F" }}>
                  ${originalSubtotal.toFixed(2)}
                </span>
              )}
              <span className="text-2xl sm:text-[32px] font-bold text-primary leading-none">
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>

          {savings > 0 && (
            <p className="text-center text-[14px] font-semibold mt-3" style={{ color: "#00B894" }}>
              Congrats! You&apos;re saving ${savings.toFixed(2)} on your security bundle!
            </p>
          )}

          <button className="w-full h-12 bg-[#5A3FFF] rounded-[4px] text-white text-[18px] font-semibold text-center mt-3 hover:opacity-90 transition-opacity">
            Checkout
          </button>

          <button onClick={onSaveSystem} className="text-[14px] font-normal underline text-center mt-[10px]" style={{ color: "#666666" }}>
            Save my system for later
          </button>
        </div>
      </div>
    </div>
  );
}
