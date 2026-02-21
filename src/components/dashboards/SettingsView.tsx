"use client";

export default function SettingsView() {
  return (
    <div className="w-full">

      <h1 className="text-4xl font-bold mb-10">Settings</h1>

      {/* PROFILE */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">Profile</h3>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="flex flex-col items-center">
            <img
              src="/avatar.png"
              className="w-28 h-28 rounded-full border border-[#CC983F]"
            />
            <span className="text-xs text-gray-400 mt-2">50x50px</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 flex-1">

            {["Name","Riot ID","Username","Discord","Email"].map((v) => (
              <div key={v}>
                <label className="text-sm text-gray-400">{v}</label>
                <input
                  className="w-full mt-1 px-3 py-2 rounded bg-[#1b1a17] border border-white/10"
                  placeholder={v}
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="space-y-6">

        <h3 className="text-xl font-semibold">Notification Preferences</h3>
        <p className="text-gray-400 text-sm">
          You can change these settings anytime.
        </p>

        <Pref title="Essential notifications" desc="Always enabled." />

        <Toggle title="Account & security alerts" />
        <Toggle title="Billing & payment updates" />
        <Toggle title="Product updates & new features" />

      </div>

      {/* FOOTER BAR */}
      <div className="fixed md:static bottom-0 left-0 w-full md:w-auto mt-12 bg-[#2a2723] md:bg-transparent px-6 py-4 rounded-xl flex justify-between items-center gap-4">

        <span className="text-sm text-gray-400 hidden md:block">
          You have unsaved changes.
        </span>

        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none border border-[#CC983F] px-6 py-2 rounded">
            Reset Changes
          </button>

          <button className="flex-1 md:flex-none bg-[#CC983F] text-black px-6 py-2 rounded">
            Save
          </button>
        </div>
      </div>

    </div>
  );
}

function Pref({ title, desc }: any) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-400">{desc}</p>
      <hr className="border-white/10 mt-4" />
    </div>
  );
}

function Toggle({ title }: any) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-sm">{title}</p>
      <span className="w-12 h-6 bg-[#CC983F] rounded-full relative">
        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
      </span>
    </div>
  );
}