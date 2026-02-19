"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import CalendarCard from "./CalendarCard";
import PricingGrid from "../PricingGrid";
import { plan } from "@/src/data/plan";
import TeamCoaching from "../TeamCoaching";
import TicketForm from "./TicketForm";

export type DashboardTab = "dashboard" | "billing" | "support";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState<DashboardTab>("dashboard");

  return (
    <div className="min-h-screen bg-[#1b1a17] text-white flex">
      <Sidebar active={activeTab} onChange={setActiveTab} />

      <main className="flex-1 px-6 md:px-12 py-10">
        {/* Top */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm text-gray-400">Hi, User Name</p>

            <h1 className="text-4xl font-bold mt-2 capitalize">
              {activeTab === "dashboard"
                ? "My Courses"
                : activeTab === "billing"
                  ? "Plan & Billing"
                  : "Support Tickets"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="/avatar.png"
              className="w-10 h-10 rounded-full border border-[#CC983F]"
            />

            <button className="border border-[#CC983F] px-4 py-1.5 rounded text-sm hover:bg-[#CC983F]/10">
              Log Out
            </button>
          </div>
        </div>

        {/* CONTENT */}
        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-[1fr_320px] gap-12">
            <div>
              {/* Tabs */}
              <div className="flex gap-6 mb-26 text-gray-400">
                <span className="text-white relative">
                  All
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                </span>
                <span>Active</span>
                <span>Upcoming</span>
                <span>Completed</span>
              </div>

              <p className="text-gray-400 mb-6">
                You’re one step away from leveling up.{" "}
                <span className="text-[#CC983F] cursor-pointer">
                  Choose a plan to continue.
                </span>
              </p>

              <div className="h-96 flex items-center justify-center text-gray-600">
                No active courses yet.
              </div>
            </div>

            <CalendarCard />
          </div>
        )}

        {activeTab === "billing" && (
          <div className="flex flex-col gap-20">
            <p className="text-white">Pick a plan that fits your needs and set up billing.</p>
            <div className="pricing-container">
              <PricingGrid plans={plan} />
              <TeamCoaching ctaLink="/contact" ctaText="Contact Us" />
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-bold mt-2 capitalize">Payment History</h3>
              <p  className="text-md text-gray-400">No purchases yet. Start your learning journey when you’re ready.</p>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold mt-2 capitalize">Create New Ticket</h3>
              <p  className="text-md text-gray-400">Fill up all the information here, then click submit button.</p>
            </div>
            <TicketForm />
            <p className="text-2xl font-bold text-white">Latest Support History</p>
            <p  className="text-md text-gray-400">Your most recent history of tickets submitted.</p>
            <ul>
              <li className="p-4 rounded-lg"></li>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Order #12345</span>
                  <p className="text-sm text-gray-400">Submitted on Jan 1, 2026</p>
                </div>
                <p className="text-xs mt-2">I have an issue with my order. It hasn’t arrived yet.</p>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
