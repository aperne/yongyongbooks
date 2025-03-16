import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";
import "vis-network/styles/vis-network.css";  // Import network styles

function App() {
  // Create two refs for the networks
  const networkRef1 = useRef(null);  // First graph

  useEffect(() => {
    const container1 = networkRef1.current;  // Container for the first network

    // Data for the first graph
    const data1 = {
      nodes: [
        { id: 1, label: "January, 25", shape:"circle", font: { color: "#FFF", size: 30, bold: true }, x: 0, y: 0, fixed: { x: true, y: true }, hidden:true },
        { id: 2, label: "SOC", shape:"circle" },
        { id: 3, label: "ECO", shape:"circle" },
        { id: 16, label: "PER", shape:"circle" },
        { id: 4, label: "Justice: What's the Right Thing to Do?"},
        { id: 5, label: "The Millionaire Fastlane"},
        { id: 6, label: "Capitalism and Freedom"},
        { id: 7, label: "Economics: The User's Guide"},
        { id: 8, label: "Kick the Ladder"},
        { id: 9, label: "The Sense of Facts"},
        { id: 10, label: "A Wide and Shallow Knowledge for Intellectual Conversation"},
        { id: 11, label: "What Is Right?"},
        { id: 12, label: "The Origins of Totalitarianism"},
        { id: 13, label: "Eichmann in Jerusalem: A Report on the Banality of Evil"},
        { id: 14, label: "The Voice of Primo Levi"},
        { id: 15, label: "The Constitution of Liberty"},
        { id: 17, label: "Seino's Teachings"},
        { id: 18, label: "The Art of Expression"},
        { id: 19, label: "The Way of work"},
      ],
      edges: [
        { from: 2, to: 4 }, // SCO
        { from: 2, to: 9 },
        { from: 2, to: 10},
        { from: 2, to: 11},
        { from: 2, to: 12},
        { from: 2, to: 13},
        { from: 2, to: 14},
        { from: 2, to: 15},
        { from: 3, to: 5 }, // ECO
        { from: 3, to: 6 },
        { from: 3, to: 7 },
        { from: 3, to: 8 },
        { from: 16, to: 17 }, // PER
        { from: 16, to: 18 },
        { from: 16, to: 19 },
      ],
    };

const options = {
  nodes: {
    shape: "box",  // Set node shape to rectangle
    font: {
      color: "#fff",  // Set the text color to white
      family: "Noto Sans KR",  // Set the font family
      size: 16,  // Set the font size
    },
    color: { background: "black" },  // Set node background color to black
    widthConstraint: { minimum: 100 },  // Set a global minimum width for all nodes
    heightConstraint: { minimum: 40 },  // Set a global minimum height for all nodes
  },
  edges: {
    color: { color: "#303030" },  // Set line color to dark gray
    width: 2,  // Set edge width
  },
  physics: {
    enabled: true,  // Enable physics simulation for node movement
    barnesHut: {
      gravitationalConstant: -10000,  // Gravitational constant for repelling nodes
      springConstant: 0.01,  // Spring constant for attracting nodes
      springLength: 100,  // Distance between nodes
    },
    solver: "barnesHut",  // Use the Barnes-Hut algorithm for layout
  },
};


    // Render the first network
    new Network(container1, data1, options);
  }, []);

  return (
    <div>
      <div style={{ height: "1000px", border: "1px solid black" }} ref={networkRef1}></div>
    </div>
  );
}

export default App;
