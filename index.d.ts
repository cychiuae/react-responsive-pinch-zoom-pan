declare module "react-response-pinch-zoom-pan" {
  import React from "react";
  interface PinchZoomPanProps {
    initialScale?: number;
    minScale?: number;
    maxScale?: number;
    position?: "center" | "topLeft";
    zoomButtons?: boolean;
    doubleTapBehavior?: "reset" | "zoom";
  }
  class PinchZoomPan extends React.Component<PinchZoomPanProps> {
    public reset(): void;
  }
  export default PinchZoomPan;
}
