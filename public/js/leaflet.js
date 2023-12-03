/* eslint-disable */
export const displayMap = locations => {
  const map = L.map('map', { zoomControl: true });
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="https://www.mapbox.com">I used a mapbox map for this website. Thanks to the author Voyager Nolabels.</a> contributors',
    },
  ).addTo(map);

  const myIcon = L.icon({
    iconUrl: '/img/pin.png',
    iconSize: [35, 45],
  });

  const points = [];
  locations.forEach(loc => {
    points.push([loc.coordinates[1], loc.coordinates[0]]);
    L.marker([loc.coordinates[1], loc.coordinates[0]], { icon: myIcon })
      .addTo(map)
      .bindPopup(
        `<p class="leafletPopup">Day ${loc.day}: ${loc.description}</p>`,
        {
          autoClose: false,
        },
      )
      .openPopup();
  });

  const bounds = L.latLngBounds(points).pad(0.1);
  map.fitBounds(bounds);

  map.scrollWheelZoom.disable();
};
