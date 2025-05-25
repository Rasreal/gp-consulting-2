"use client";

import { Logos3 } from "@/components/blocks/logos3";

const demoData = {
  logos: [
    {
      id: "logo-1",
      description: "QazCode",
      image: "/logos/qazcode.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Таттелеком",
      image: "/logos/tattelekom.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Почта России",
      image: "/logos/pochtarosii.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Билайн",
      image: "/logos/beeling.png",
      className: "h-7 w-auto",
    }
  ],
};

export function Logos3Demo() {
  return <Logos3 {...demoData} />;
} 