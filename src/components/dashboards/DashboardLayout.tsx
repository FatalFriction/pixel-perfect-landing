"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import CalendarCard from "./CalendarCard";
import PricingGrid from "../PricingGrid";
import TeamCoaching from "../TeamCoaching";
import TicketForm from "./TicketForm";
import { plan } from "@/src/data/plan";
import { Menu } from "lucide-react";

export type DashboardTab = "dashboard" | "billing" | "support" | "settings";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const title =
    activeTab === "dashboard"
      ? "My Courses"
      : activeTab === "billing"
        ? "Plan & Billing"
        : activeTab === "support"
          ? "Support Ticket"
          : "Settings";

  return (
    <div className="min-h-screen bg-[#1b1a17] text-white relative flex w-fit">
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
        />
      )}

      <Sidebar
        active={activeTab}
        onChange={(v) => {
          setActiveTab(v);
          setMobileOpen(false);
        }}
        mobileOpen={mobileOpen}
      />

      <main className="flex-1 px-5 md:px-12 py-6 md:py-10 relative z-10">
        {/* MOBILE HEADER */}
        <div className="flex md:hidden items-center justify-between mb-6">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6 text-[#CC983F]" />
          </button>

          <div className="flex items-center gap-3">
            <img
              src="/avatar.png"
              className="w-9 h-9 rounded-full border border-[#CC983F]"
            />
            <button className="border border-[#CC983F] px-3 py-1 rounded text-xs">
              Log Out
            </button>
          </div>
        </div>

        {/* MOBILE TITLE */}
        <div className="md:hidden mb-6">
          <p className="text-sm text-gray-400">Hi, User Name</p>
          <h1 className="text-4xl font-bold mt-1">{title}</h1>
        </div>

        {/* DESKTOP HEADER */}
        <div className="hidden md:flex justify-between items-center mb-10">
          <div>
            <p className="text-sm text-gray-400">Hi, User Name</p>
            <h1 className="text-4xl font-bold mt-2">{title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/avatar.png"
              className="w-10 h-10 rounded-full border border-[#CC983F]"
            />
            <button className="border border-[#CC983F] px-4 py-1.5 rounded text-sm">
              Log Out
            </button>
          </div>
        </div>

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="flex flex-col md:grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="flex gap-6 mb-6 text-gray-400 text-sm overflow-x-auto py-2">
                <span className="text-white relative">
                  All
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                </span>
                <span>Active</span>
                <span>Upcoming</span>
                <span>Completed</span>
              </div>

              <p className="text-gray-400 mb-8">
                You’re one step away from leveling up.{" "}
                <span className="text-[#CC983F]">
                  Choose a plan to continue.
                </span>
              </p>

              <div className="h-20 md:h-96 flex items-center justify-center text-gray-600">
                No active courses yet.
              </div>
            </div>

            <CalendarCard />
          </div>
        )}

        {activeTab === "billing" && (
          <div className="flex flex-col md:gap-12">
            {/* PRICING */}
            <div className="w-62">
              <PricingGrid plans={plan} />
            </div>

            {/* TEAM COACHING */}
            <TeamCoaching ctaLink="/contact" ctaText="Contact Us" />

            {/* PAYMENT HISTORY */}
            <div className="pt-4 md:pt-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Payment History
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                No purchases yet. Start your learning journey when you’re ready.
              </p>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="flex flex-col gap-10">
            {/* MOBILE PAGE TITLE */}
            <div className="md:hidden">
              <h1 className="text-4xl font-bold mb-6">Support Ticket</h1>
            </div>

            {/* CREATE TICKET */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Create New Ticket
              </h3>

              <p className="text-gray-400 text-sm md:text-base">
                Fill up all the information here, then click submit button.
              </p>
            </div>

            {/* FORM */}
            <div className="max-w-sm">
              <TicketForm />
            </div>

            {/* HISTORY */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Latest Support History
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Your most recent history of tickets submitted.
              </p>

              <div className="space-y-2 text-sm">
                <div>SR#000001</div>
                <div>SR#000001</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex flex-col gap-10 max-w-lg">
            <div>
              <h3 className="text-2xl font-bold mb-2">Account Settings</h3>
              <p className="text-gray-400 text-sm">
                Manage your profile and preferences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-[#CC983F]/30 rounded-lg p-4">
                <p className="text-sm">Email</p>
                <p className="text-gray-400 text-sm">user@email.com</p>
              </div>

              <div className="border border-[#CC983F]/30 rounded-lg p-4">
                <p className="text-sm">Password</p>
                <p className="text-gray-400 text-sm">••••••••</p>
              </div>

              <button className="bg-[#CC983F] text-black py-3 rounded-lg font-semibold">
                Update Profile
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
