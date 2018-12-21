import React from 'react';
import Gallery from 'react-grid-gallery';
const PORTRAIT = require('./portrait.json');

export default class PortraitGallery extends React.Component {
  render() {
    return <Gallery images={PORTRAIT} enableImageSelection={false} rowHeight={300} />;
  }
}