import { useEffect, useState } from "react";

interface UseThemeLogoOptions {
  inverter?: boolean;
}

export function useThemeLogo(
  darkLogo: string = "/logoPreto.svg",
  lightLogo: string = "/logoBranco.svg",
  options: UseThemeLogoOptions = {}
) {
  const { inverter = false } = options;
  const [logo, setLogo] = useState(lightLogo);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");

    const updateLogo = () => {
      const isDark = mediaQuery.matches;

      let selectedLogo;

      if (inverter) {
        selectedLogo = isDark ? lightLogo : darkLogo;
      } else {
        selectedLogo = isDark ? darkLogo : lightLogo;
      }

      setLogo(selectedLogo);
    };

    updateLogo();
    mediaQuery.addEventListener("change", updateLogo);
    return () => mediaQuery.removeEventListener("change", updateLogo);
  }, [darkLogo, lightLogo, inverter]);

  return logo;
}
