import { createContext, useState } from "react";

export type LocationContextType = {
  location: string;
  setLocation: (location: string) => void;
};

const LocationContext = createContext<LocationContextType>({location: "/", setLocation: ()=> {}});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const LocationProvider = ({ children }: ContextProviderProps) => {
  const [location, setLocation] = useState<string>("");
  const value = {
    location,
    setLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
