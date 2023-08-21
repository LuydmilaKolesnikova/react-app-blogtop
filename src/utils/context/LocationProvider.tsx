import { createContext, useState } from "react";

type LocationContextType = {
  location: string;
  setLocation: (location: string) => void;
};

const LocationContext = createContext<LocationContextType>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const LocationProvider = ({ children }: ContextProviderProps) => {
  const [location, setLocation] = useState("");
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
