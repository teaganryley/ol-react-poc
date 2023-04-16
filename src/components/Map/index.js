import React, { useRef, useState, useEffect } from 'react';
import * as ol from 'ol';
import styled from 'styled-components';
import { MapContext } from './map.context';
import { fromLonLat } from 'ol/proj';
import { layers } from '../../configs/layers';

const MapPane = styled.div`
  height: 80%;
  width: 80%;
  position: relative;
  background-color: navajowhite;
  z-index: 1;
`;

const Map = ({
  children,
  center,
  extent,
  projection,
  zoom,
}) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  // renders base layers and basic props on mount
  useEffect(()=> {
    const options = {
      view: new ol.View({
        projection: projection,
        center: fromLonLat(center, projection),
        extent,
        zoom,
        minZoom: 2
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
