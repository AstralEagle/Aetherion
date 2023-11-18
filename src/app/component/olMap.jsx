'use client'
import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import Static from 'ol/source/ImageStatic';
import OSM from 'ol/source/OSM';

const OpenLayersMap = () => {
    const mapElement = useRef();

    useEffect(() => {
        const imageLayer = new ImageLayer({
            source: new Static({
                url: '/tiles/map.png', // Remplacer avec le chemin de votre image
                projection: 'EPSG:3857',
                imageExtent: [0, 0, 1024, 768] // Remplacer par les dimensions réelles de votre image
            })
        });

        new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({ // Couche de fond (optionnelle)
                    source: new OSM()
                }),
                imageLayer
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    }, []);

    return <div ref={mapElement} style={{ width: '100%', height: '400px' }}></div>;
};

export default OpenLayersMap;
