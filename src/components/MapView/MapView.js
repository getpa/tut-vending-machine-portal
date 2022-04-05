import './MapView.css';

import VmList from '../../data/vmlist.json';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';

import { Utterances } from 'utterances-react-component'

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

const iconBuilder = (color) => new Leaflet.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: `https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


const icons = [
  "blue",
  "gold",
  "red",
  "green",
  "orange",
  "yellow",
  "violet",
  "grey",
  "black"
].reduce((result, color) => {
  result[color] = iconBuilder(color);
  return result;
}, {});

export function MapView() {
  return (
      <MapContainer center={[34.70146,137.40821]} zoom={17} tap={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          VmList.map(
            vm =>
              <Marker position={vm.position} icon={icons[vm.color]}>
                <Popup>
                  <h2>{vm.name}</h2>
                <Utterances 
                    repo="getpa/tut-vending-machine-portal"
                    issueTerm={vm.name}
                    label="comments"
                    theme="github-light"
                  />
                </Popup>
              </Marker>
          )
        }
      </MapContainer>
  );
}