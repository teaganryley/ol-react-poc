import React, { useRef, useState, useEffect } from 'react';
import * as ol from 'ol';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { MapContext } from './map.context';
import { fromLonLat } from 'ol/proj';
import { layers } from '../../configs/layers';

const MapPane = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: navajowhite;
  z-index: 1;
`;

const Map = ({
  children,
  zoom,
  center,
  projection
}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  // renders base layers and basic props on mount
  useEffect(()=> {
    const options = {
      view: new ol.View({
        zoom,
        center: fromLonLat(center, projection),
        projection
      }),
      layers: layers,
      controls: [],
      overlays: [],
    };

    const mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  return (
    <MapContext.Provider value={{ olMap: map }}>
      <MapPane ref={mapRef} className="ol-map">
        {children}
      </MapPane>
    </MapContext.Provider>
  );
};

export default Map;
