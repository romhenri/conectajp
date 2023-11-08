import { useEffect } from "react"
import '../css/MapPage.css'

const MapPage = () => {
  //@ts-ignore
  let map: google.maps.Map;

  useEffect(() => {
    initSize();
    initMap();
  },)

  const initSize = () => {
    const header: HTMLElement | null = document.querySelector('.map-page .page-header');
    const menu: HTMLElement | null = document.querySelector('.navbar');
    const section: HTMLElement | null = document.querySelector('.map-section');

    if (!header || !menu || !section) {
      console.error("Um dos Elementos não foi encontrado!");
      console.error(header, menu, section);
      return
    }

    const headerHeight = header.clientHeight;
    const menuHeight = menu.clientHeight;
    const windowsHeight = window.innerHeight;

    console.log(menuHeight);
    
    if(window.innerWidth > 800) {
      section.style.height = `${900 - headerHeight - menuHeight}px`
    } else {
      section.style.height = `${windowsHeight - headerHeight - menuHeight}px`
    }
  }

  async function initMap(): Promise<void> {
    const position = {
      lat: -7.1629958568226155,
      lng: -34.825555030682175
    };

    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary; //@ts-ignore
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker")  as google.maps.MarkerLibrary;

    map = new Map(document.querySelector(".map-section") as HTMLElement,
    {
      center: position,
      zoom: 14,
      streetViewControl: false,
    });

    const markersPositions = [
      {lat: -7.1629958568226155, lng: -34.825555030682175},
      {lat: -7.1679343, lng: -34.8314096},
      {lat: -7.1664928, lng: -34.8311878},
      {lat: -7.1645947, lng: -34.8313998}
    ]

    makeMarkers(markersPositions)

    function makeMarkers(positions: Object[]) {
      for (let i= 0; i < positions.length; i++) {
        //@ts-ignore
        new google.maps.Marker(
          {
            map: map,
            position: positions[i],
          }
        )
      }
    }
  }

  window.addEventListener('resize', initSize)

  return (
    <main className="map-page">
      <header className='page-header'>
        <h1>Mapa</h1>
      </header>
      <div className="map-section">
      </div>
      <div className='aux'>
        
      </div>
    </main>
  )
}

export default MapPage