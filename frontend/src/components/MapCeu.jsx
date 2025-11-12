import { APIProvider, Map, AdvancedMarker, useMap } from "@vis.gl/react-google-maps"
import { useCallback, useEffect, useState } from "react"

import styles from "./MapCeu.module.css"


function MapControlsAndMarker({ Position }) {
    const map = useMap() 
    const [mapReady, setMapReady] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    // Armazena o mapa quando ele carrega
    useEffect(() => {
        if (map) {
            setMapReady(true)
        }
    }, [map])

    // Centraliza o mapa ao clicar no marcador
    const handleMarkerClick = useCallback((e) => {
        if (!map || !e.latLng) return
        map.panTo(e.latLng)
    }, [map])

    const withAnimationLock = (action) => {
        if (isAnimating) return
        setIsAnimating(true)
        action()
        setTimeout(() => setIsAnimating(false), 400)
    }

    // botões de zoom
    const zoomIn = () => {
        if (map) map.setZoom(map.getZoom() + 1)
    }

    const zoomOut = () => {
        if (map) map.setZoom(map.getZoom() - 1)
    }

    // botão de voltar a localização do CEU
    const recenter = () => {
        if (map) map.panTo(Position)
    }

    // Permitir teclado (Enter ou Espaço ativam o botão)
    const handleKeyDown = (e, action) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            action()
        }
    }

    return (
        <>
            <AdvancedMarker
                position={Position}
                onClick={handleMarkerClick}
                title="CEU Rosa da China"
            />
            {!mapReady && (
                <div className={styles.loading}>Carregando mapa...</div>
            )}

            {/* Botões gerado somente se houver mapa, por isso o "mapReady &&" */}
            {mapReady && (
                <div className={styles.controls} role="group">
                    <button
                        type="button"
                        onClick={() => withAnimationLock(zoomIn)}
                        onKeyDown={(e) => handleKeyDown(e, zoomIn)}
                        aria-label="Aumentar zoom"
                        className={styles.buttons_map}
                    >
                        <span className={styles.zoom_plus} />
                    </button>

                    <button
                        type="button"
                        onClick={() => withAnimationLock(zoomOut)}
                        onKeyDown={(e) => handleKeyDown(e, zoomOut)}
                        aria-label="Diminuir zoom"
                        className={styles.buttons_map}
                    >
                        <span className={styles.zoom_minus} />
                    </button>

                    <button
                        type="button"
                        onClick={() => withAnimationLock(recenter)}
                        onKeyDown={(e) => handleKeyDown(e, recenter)}
                        className={styles.buttons_map}
                        aria-label="Centralizar mapa"
                    >
                        <span className={styles.center} />
                    </button>
                </div>
            )}
        </>
    )
}

function MapCeu() {
    //Posição do CEU em coordenadas
    const Position = { lat: -23.62195799066044, lng: -46.501034948373324 }

    return (
        <div className={styles.container}>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className={styles.mapWrapper}>
                    <Map
                        defaultZoom={17}
                        defaultCenter={Position}
                        mapId="ceu-map"
                    >
                        <MapControlsAndMarker Position={Position} />
                    </Map>
                </div>
            </APIProvider>
        </div>
    )
}

export default MapCeu
