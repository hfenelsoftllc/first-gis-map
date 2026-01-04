import "./index.css";

import "@arcgis/map-compnents/components/arcgis-map";
import "arcgis/map-components/arcgis-zoom";
import Graphic from "@arcgis/core/Graphic.js";

const viewElement = document.querySelector("arcgis-map");

//wait for the map and view to load
viewElement.addEventListener("arcgisViewReadyChange", async () => {
  if (viewElement.arcgisViewReady) {
    const view = viewElement.arcgisView;
  }

  //create a point graphic
   const pointGraphic = new Graphic({
                geometry: {
                    type: "point",
                    longitude: -118.805,
                    latitude: 34.027
                },
                symbol: {
                    type: "markerSymbol",
                    color: "red",
                    size: "8px",
                    outline: {
                        color: [255, 255, 0],
                        width: 1.5
                    }
                }
            });


  //add the graphic to the view
  viewElement.arcgisView.graphics.add(pointGraphic);
});