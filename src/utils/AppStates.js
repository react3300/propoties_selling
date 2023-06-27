import { useState, createContext, useContext } from 'react';
export const StatesContext = createContext();
export const useStatesContext = () => useContext(StatesContext);

export const AppStates = ({ children }) => {
  const [vechileData, setVechileData] = useState([]);
  const [carDataWithImage, setCarDataWithImage] = useState([]);
  const [carNameForDetails, setCarNameForDetails] = useState([]);

  let allStates = {
    vechileData: vechileData,
    setVechileData: setVechileData,
    carDataWithImage: carDataWithImage,
    setCarDataWithImage: setCarDataWithImage, 
    carNameForDetails: carNameForDetails,
    setCarNameForDetails: setCarNameForDetails
  }
  
  return (
    <StatesContext.Provider value={{ allStates }}>
      {children}
    </StatesContext.Provider>
  );
}

export default AppStates;