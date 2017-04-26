document.addEventListener('DOMContentLoaded', function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoiYWxpbmRsZXkiLCJhIjoiY2l5Y2JlcmViMDBvczMyc2N1eTA4MDd4MSJ9.t0Z60l8r6_8DNbX7xB1bnA';

    var aerisMapBuilder = new aeris.interactive.MapAppBuilder({
        apiId: 'wgE96YE3scTQLKjnqiMsv',
        apiSecret: 'tlyy22v5uBRBcm8lWeP0Y6ZISPLDVKGWXTJH9kYb',
        el: '#map-canvas',
        modules: {
            map: {
                zoom: 7,
                center: [39, -105.5],
                baseLayer: new aeris.maps.layers.MapBox({
                    mapBoxId: 'mapbox.satellite'
                })
            },
            pointData: {
                objects: [
                    {
                        type: 'Lightning',
                        group: 'Points',
                        cluster: true
                    }
                ]
            },
            layers: {
                objects: [
                    {
                        type: "Radar",
                        selected: true,
                        opacity: 0.6,
                        zindex: 1,
                        group: "Radar"
                    },
                    {
                        type: "SatelliteGlobal",
                        selected: false,
                        opacity: 0.2,
                        zindex: 2,
                        group: "Satellite"
                    }
                ]
            }
        }
    });

    aerisMapBuilder.start();

});
