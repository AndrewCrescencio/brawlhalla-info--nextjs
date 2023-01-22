import { useTheme } from "next-themes";
import { IconMoon } from "../icons/IconMoon";
import { IconSun } from "../icons/IconSun";

import { Button } from "./styles";

export function ToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
}
