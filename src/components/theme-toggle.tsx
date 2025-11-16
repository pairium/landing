import { Moon, Sun, Monitor } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/stubs/next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="size-4" />;
    if (theme === "dark") return <Moon className="size-4" />;
    return <Monitor className="size-4" />;
  };

  const getLabel = () => {
    if (theme === "light") return "Switch to dark mode";
    if (theme === "dark") return "Switch to system mode";
    return "Switch to light mode";
  };

  return (
    <Toggle
      onClick={cycleTheme}
      aria-label={getLabel()}
      className="size-9 px-0"
    >
      {getIcon()}
    </Toggle>
  );
}
