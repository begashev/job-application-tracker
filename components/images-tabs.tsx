"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize");
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              variant={activeTab === "organize" ? "default" : "outline"}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                activeTab === "organize"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-gray-200"
              }`}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              variant={activeTab === "hired" ? "default" : "outline"}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                activeTab === "hired"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-gray-200"
              }`}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
              variant={activeTab === "boards" ? "default" : "outline"}
              className={`rounded-lg px-6 py-3 text-sm font-medium transition-all ${
                activeTab === "boards"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-gray-200"
              }`}
            >
              Manage Boards
            </Button>
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}
            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Hired Applications"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}
            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Boards"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
