import { createContext, useContext } from 'react';

const MapContext = createContext();

const useMapContext = () => useContext(MapContext);

export { MapContext, useMapContext };
