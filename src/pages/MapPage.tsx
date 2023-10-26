// import React from 'react'

const MapPage = () => {
   //@ts-ignore
  let map: google.maps.Map;

  async function initMap(): Promise<void> {
    //@ts-ignore
    const position = { lat: -7.1629958568226155, lng: -34.825555030682175 };

    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary; //@ts-ignore
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker")  as google.maps.MarkerLibrary;

    map = new Map(document.getElementById("map") as HTMLElement,
    {
      center: position,
      zoom: 14,
      streetViewControl: false,
      // icon: iconBase + 'novo_marcador.png',
    });

    //@ts-ignore
    new google.maps.Marker({
      map: map,
      position: position,
      title: 'ECIT-JP'
    });

    //@ts-ignore
    new google.maps.Marker({
      map: map,
      position: { lat: -7.1929958568226155, lng: -34.825555030682175 },
      title: 'ECIT-JP'
    });

     //@ts-ignore
     new google.maps.Marker({
      map: map,
      position: { lat: -7.1929958568226155, lng: -34.895555030682175 },
      title: 'ECIT-JP'
    });

     //@ts-ignore
      new google.maps.Marker({
      map: map,
      position: { lat: -7.1319958568226155, lng: -34.885555030682175 },
      title: 'ECIT-JP'
    });
  }

  initMap();


  return (
    <>
      <header className='page-header account-page'>
        <h1>Mapa</h1>
      </header>
      <section className="map-section">
        <div id="map"></div>
      </section>
    </>
  )
}

export default MapPage