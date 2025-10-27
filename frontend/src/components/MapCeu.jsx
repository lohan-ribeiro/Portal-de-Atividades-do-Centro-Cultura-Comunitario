import styles from "./MapCeu.module.css"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"
import { useCallback, useRef, useState } from "react"

function MapCeu() {
    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)

    //Posição do CEU em coordenadas
    const Position = { lat: -23.62195799066044 , lng: -46.501034948373324 }

    const [position] = useState(Position)

    //Armazena o mapa quando ele carrega
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
        setMapReady(true)
    }, []);

    //Centraliza o mapa ao clicar no marcador
    const handleMarkerClick = useCallback((e) => {
        const map = mapRef.current
        if (!map || !e.latLng) return
        map.panTo(e.latLng)
    }, []);

    //botões de zoom
    const zoomIn = () => {
        const map = mapRef.current;
        if (map) map.setZoom(map.getZoom() + 1)
    };

    const zoomOut = () => {
        const map = mapRef.current;
        if (map) map.setZoom(map.getZoom() - 1)
    };

    //botão de voltar a localização do CEU
    const recenter = () => {
        const map = mapRef.current
        if (map) map.panTo(Position)
    };

    //Permitir teclado (Enter ou Espaço ativam o botão)
    const handleKeyDown = (e, action) => {
        if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        action()
        }
    };

  return (
        <div className={styles.container}>
            {/* renderização do mapa e o marcador*/}
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className={styles.mapWrapper}>
                    <Map
                        defaultZoom={13}
                        defaultCenter={Position}
                        onLoad={onMapLoad}
                        mapId="ceu-map"
                    >
                        <Marker position={position} onClick={handleMarkerClick} />
                    </Map>

                    {/* Botões (gerado somente se houver mapa, por isso o "mapReady &&") */}
                    {mapReady && (
                        <div className={styles.controls} role="group" aria-label="Controles do mapa">
                            <button
                                type="button"
                                onClick={zoomIn}
                                onKeyDown={(e) => handleKeyDown(e, zoomIn)}
                                aria-label="Aumentar zoom"
                                className={styles.buttons_map}
                            >
                                <span className={styles.zoom_plus} />
                            </button>

                            <button
                                type="button"
                                onClick={zoomOut}
                                onKeyDown={(e) => handleKeyDown(e, zoomOut)}
                                aria-label="Diminuir zoom"
                                className={styles.buttons_map}
                            >
                                <span className={styles.zoom_minus} />
                            </button>

                            <button
                                type="button"
                                onClick={recenter}
                                onKeyDown={(e) => handleKeyDown(e, recenter)}
                                aria-label="Voltar para o marcador"
                                className={styles.buttons_map}
                            >
                                <span className={styles.center} />
                            </button>
                        </div>
                    )}
                </div>
            </APIProvider>
        </div>
    );
}

export default MapCeu;
