import React from 'react';
import { SvgXml } from 'react-native-svg';

const SvgIcon = ({ xml, width = 24, height = 24, color }) => {
  if (!xml) return null;
  
  let modifiedXml = xml;
  if (color) {
    modifiedXml = modifiedXml.replace(/fill="[^"]*"/g, `fill="${color}"`);
    modifiedXml = modifiedXml.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
    modifiedXml = modifiedXml.replace(/fill="#[^"]*"/g, `fill="${color}"`);
    modifiedXml = modifiedXml.replace(/stroke="#[^"]*"/g, `stroke="${color}"`);
  }
  
  return <SvgXml xml={modifiedXml} width={width} height={height} />;
};

export default SvgIcon;

