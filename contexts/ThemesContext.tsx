import { createContext } from 'react';

import designSystem from '@/styles/designSystem.module.scss';

interface ThemesContextProps {
  colors: {
    [key: string]: string;
  }
}

export const ThemesContext = createContext<ThemesContextProps>({} as ThemesContextProps);

export const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemesContext.Provider
      value={{
        colors: {
          primaryColor: designSystem.primaryColor,
          secondaryColor: designSystem.secondaryColor,
          successColor: designSystem.successColor,
          errorColor: designSystem.errorColor
        }
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
}
