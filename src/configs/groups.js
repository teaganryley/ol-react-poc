import { base, railway } from './layers';

// we only need the Layer itself, plus title and visible
const transformLayer = layerObj => {
  const { visible, title, type} = layerObj.getProperties();
  return ({
    layer: layerObj,
    title,
    type,
    visible,
  });
};

/*
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
*/

const groups = [
  {
    id: 'base', // should match type field in layers
    title: 'Base maps',
    control: 'radio',
  },
  {
    id: 'railway',
    title: 'Railway',
    control: 'check',
  }
];

export { groups, transformLayer };
