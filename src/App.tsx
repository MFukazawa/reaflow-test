import { Canvas } from "reaflow";

function App() {
  return (
    <div>
      <Canvas
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
  );
}

export default App;
