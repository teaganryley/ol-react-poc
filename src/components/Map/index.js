import React, { useRef, useState, useEffect } from 'react';
import * as ol from 'ol';
import styled from 'styled-components';
import { MapContext } from './map.context';
import { fromLonLat } from 'ol/proj';
import { layers } from '../../configs/layers';

const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
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
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default Map;
