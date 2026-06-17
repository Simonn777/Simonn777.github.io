"use client";

import { Leaf, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const order = ["light", "dark", "earth"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const current = order.includes(theme as (typeof order)[number])
    ? (theme as (typeof order)[number])
    : "light";
  const next = order[(order.indexOf(current) + 1) % order.length];

  return (
    <Button
      aria-label="Theme"
      className="size-10"
      onClick={() => setTheme(next)}
      size="icon"
      type="button"
      variant="outline"
    >
      {current === "light" ? (
        <Sun data-icon="inline-start" />
      ) : current === "dark" ? (
        <Moon data-icon="inline-start" />
      ) : (
        <Leaf data-icon="inline-start" />
      )}
    </Button>
  );
}
