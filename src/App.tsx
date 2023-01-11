import { useState, useRef, useEffect } from "react";
import { Canvas, CanvasRef } from "reaflow";

function App() {
  const [zoom, setZoom] = useState<number>(0.7);
  const ref = useRef<CanvasRef | null>(null);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
        padding: "100px",
      }}
    >
      <h1>Reaflow container</h1>
      <pre
        style={{
          zIndex: 9,
          position: "absolute",
          bottom: 15,
          right: 15,
          background: "rgba(0, 0, 0, .5)",
          padding: 20,
          color: "white",
        }}
      >
        Zoom: {zoom}
        <br />
        <button
          style={{ display: "block", width: "100%", margin: "5px 0" }}
          onClick={() => ref.current.zoomIn()}
        >
          Zoom In
        </button>
        <button
          style={{ display: "block", width: "100%", margin: "5px 0" }}
          onClick={() => ref.current.zoomOut()}
        >
          Zoom Out
        </button>
        <button
          style={{ display: "block", width: "100%" }}
          onClick={() => ref.current.fitCanvas()}
        >
          Fit
        </button>
      </pre>
      <div style={{ width: "800px", background: "black" }}>
        <Canvas
          zoom={zoom}
          ref={ref}
          onZoomChange={(z) => {
            setZoom(z);
          }}
          maxWidth={800}
          maxHeight={600}
          nodes={[
            {
              id: "1",
              text: "1",
            },
            {
              id: "2",
              text: "2",
            },
          ]}
          edges={[
            {
              id: "1-2",
              from: "1",
              to: "2",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
