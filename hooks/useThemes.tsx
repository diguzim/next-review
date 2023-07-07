import { ThemesContext } from "@/contexts";
import { useContext } from "react";

export const useThemes = () => {
  const { colors } = useContext(ThemesContext);

  return {
    colors
  };
}