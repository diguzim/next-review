import { useThemes } from "@/hooks";
import { IconContext } from "react-icons";

export const IconProvider = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useThemes();

  return (
    <IconContext.Provider
      value={{
        color: colors.primaryColor,
        size: "2em",
        style: { verticalAlign: 'middle' }
      }}
    >
      {children}
    </IconContext.Provider>
  );
}