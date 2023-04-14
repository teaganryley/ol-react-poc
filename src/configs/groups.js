import { base, railway } from './layers';

// we only need the Layer itself, plus title and visible
const transformLayer = layerObj => {
  const { visible, title} = layerObj.getProperties();
  return ({
    layer: layerObj,
    title,
    visible,
  });
};

const groups = [
  {
    title: 'Base maps',
    control: 'radio',
    layers: base.map(layerObj => transformLayer(layerObj)),
  },
  {
    title: 'Railway',
    control: 'check',
    layers: railway.map(layerObj => transformLayer(layerObj)),
  }
];

export { groups };
