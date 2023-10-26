// import React from 'react'

const MapPage = () => {
   //@ts-ignore
  let map: google.maps.Map;

  async function initMap(): Promise<void> {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -7.1629418568226155, lng: -34.825555030682175 },
    // -7.1629418568226155, -34.825555030682175
    zoom: 12,
  });
  }

  initMap();


  return (
    <div id="map"></div>
  )
}

export default MapPage