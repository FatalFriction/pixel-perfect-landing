import Image from "next/image";
import { DashboardTab } from "./DashboardLayout";

export default function Sidebar({
  active,
  onChange,
}: {
  active: DashboardTab;
  onChange: (tab: DashboardTab) => void;
}) {
  const Item = ({
    id,
    label,
  }: {
    id: DashboardTab;
    label: string;
  }) => {
    const isActive = active === id;

    return (
      <button
        onClick={() => onChange(id)}
        className={`
          relative flex items-center gap-2 text-sm w-full px-3 py-2 rounded-lg
          transition
          ${
            isActive
              ? "bg-[#282420] text-[#CC983F] shadow-[0_0_20px_rgba(204,152,63,0.4)]"
              : "text-gray-300 hover:bg-white/5"
          }
        `}
      >
        <Image src="/gear.png" width={16} height={16} alt="" />
        {label}

        {isActive && (
          <span className="absolute inset-0 rounded-lg" />
        )}
      </button>
    );
  };

  return (
    <aside className="hidden md:flex w-64 bg-[#2a2723] flex-col justify-between px-6 py-8">

      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <img src="/logo.png" className="w-14" />
          <div>
            <span className="font-semibold text-2xl">Pixel Perfect</span>
            <p className="text-sm text-gray-400">Courses</p>
          </div>
        </div>

        {/* Plan Card */}
        <div className="relative bg-[#9c9a96]/20 rounded-lg p-4 min-h-28 mb-8">
          <div className="flex justify-between items-center">
            <p className="text-sm">No Active Plan</p>
            <span className="text-xs bg-gray-800 px-3 py-0.5 rounded-full">
              Free
            </span>
          </div>

          <button className="absolute bottom-4 right-4 bg-white text-black text-xs px-4 py-2 rounded hover:bg-gray-200">
            Add Plan
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2">
          <Item id="dashboard" label="Dashboard" />
          <Item id="billing" label="Plan & Billing" />
          <Item id="support" label="Support Tickets" />
        </nav>
      </div>

      <div className="text-sm text-red-400 cursor-pointer">Logout</div>
    </aside>
  );
}
