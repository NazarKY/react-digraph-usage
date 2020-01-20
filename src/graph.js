// @flow

import * as React from 'react';

import {
  GraphView, // required
  type IEdge, // optional
  type INode, // optional
  type LayoutEngineType, // required to change the layoutEngineType, otherwise optional
} from 'react-digraph';

import GraphConfig, {
  edgeTypes,
  EMPTY_EDGE_TYPE,
  EMPTY_TYPE,
  NODE_KEY,
  nodeTypes,
  COMPLEX_CIRCLE_TYPE,
  POLY_TYPE,
  SPECIAL_CHILD_SUBTYPE,
  SPECIAL_EDGE_TYPE,
  SPECIAL_SOLID_TYPE,
  SPECIAL_DASHED_TYPE,
  SPECIAL_DOTTED_TYPE,
  SPECIAL_DASHED_DOTTED_TYPE,
  SKINNY_TYPE,
  SKINNY_SOLID_TYPE,
  SKINNY_SOLID_RED_TYPE,
  SKINNY_SOLID_GREEN_TYPE,
  SKINNY_SOLID_BLUE_TYPE,
  SKINNY_DASHED_TYPE,
  SKINNY_DOTTED_TYPE,
  SKINNY_DASHED_DOTTED_TYPE,
} from './graph-config'; // Configures node/edge types

const nodeTypesNew = {
  special: {
    solid: SPECIAL_SOLID_TYPE,
    dashed: SPECIAL_DASHED_TYPE,
    dotted: SPECIAL_DOTTED_TYPE,
    dashedDotted: SPECIAL_DASHED_DOTTED_TYPE,
  },
  skinny: {
    solid: SKINNY_SOLID_TYPE,
    solidRed: SKINNY_SOLID_RED_TYPE,
    solidGreen: SKINNY_SOLID_GREEN_TYPE,
    solidBlue: SKINNY_SOLID_BLUE_TYPE,
    dashed: SKINNY_DASHED_TYPE,
    dotted: SKINNY_DOTTED_TYPE,
    dashedDotted: SKINNY_DASHED_DOTTED_TYPE,
  },
  complexCircle: {
    solid: COMPLEX_CIRCLE_TYPE,
  },
  circle: {
    solid: EMPTY_TYPE,
  },
  poly: {
    solid: POLY_TYPE,
  },
};

type IGraph = {
  nodes: INode[],
  edges: IEdge[],
};

// NOTE: Edges must have 'source' & 'target' attributes
// In a more realistic use case, the graph would probably originate
// elsewhere in the App or be generated from some other state upstream of this component.
const sample: IGraph = {
  edges: [
    {
      handleText: '5',
      handleTooltipText: '5',
      source: 'start1',
      target: 'a1',
      type: SPECIAL_EDGE_TYPE,
    },
    {
      handleText: '5',
      handleTooltipText: 'This edge connects Node A and Node B',
      source: 'a1',
      target: 'a2',
      type: SPECIAL_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a2',
      target: 'a4',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a1',
      target: 'a3',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a3',
      target: 'a4',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a1',
      target: 'a5',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a4',
      target: 'a1',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '54',
      source: 'a1',
      target: 'a6',
      type: EMPTY_EDGE_TYPE,
    },
    {
      handleText: '24',
      source: 'a1',
      target: 'a7',
      type: EMPTY_EDGE_TYPE,
    },
  ],
  nodes: [
    {
      id: 'start1',
      title: 'Start (0)',
      type: SPECIAL_SOLID_TYPE,
    },
    {
      id: 'a1',
      title: 'Node A (1)',
      type: SPECIAL_SOLID_TYPE,
      x: 258.3976135253906,
      y: 331.9783248901367,
    },
    {
      id: 'a2',
      subtype: SPECIAL_CHILD_SUBTYPE,
      title: 'Node B (2)',
      type: EMPTY_TYPE,
      x: 593.9393920898438,
      y: 260.6060791015625,
    },
    {
      id: 'a3',
      title: 'Node C (3)',
      type: EMPTY_TYPE,
      x: 237.5757598876953,
      y: 61.81818389892578,
    },
    {
      id: 'a4',
      title: 'Node D (4)',
      type: EMPTY_TYPE,
      x: 600.5757598876953,
      y: 600.81818389892578,
    },
    {
      id: 'a5',
      title: 'Node E (5)',
      type: null,
      x: 50.5757598876953,
      y: 500.81818389892578,
    },
    {
      id: 'a6',
      title: 'Node E (6)',
      type: SKINNY_TYPE,
      x: 300,
      y: 600,
    },
    {
      id: 'a7',
      title: 'Node F (7)',
      type: POLY_TYPE,
      x: 0,
      y: 300,
    },
    {
      id: 'a8',
      title: 'Node G (8)',
      type: COMPLEX_CIRCLE_TYPE,
      x: -200,
      y: 400,
    },
  ],
};

function generateSample(totalNodes) {
  const generatedSample: IGraph = {
    edges: [],
    nodes: [],
  };
  let y = 0;
  let x = 0;

  const numNodes = totalNodes ? totalNodes : 0;

  // generate large array of nodes
  // These loops are fast enough. 1000 nodes = .45ms + .34ms
  // 2000 nodes = .86ms + .68ms
  // implying a linear relationship with number of nodes.
  for (let i = 1; i <= numNodes; i++) {
    if (i % 20 === 0) {
      y++;
      x = 0;
    } else {
      x++;
    }

    generatedSample.nodes.push({
      id: `a${i}`,
      title: `Node ${i}`,
      type: nodeTypes[Math.floor(nodeTypes.length * Math.random())],
      x: 0 + 200 * x,
      y: 0 + 200 * y,
    });
  }
  // link each node to another node
  for (let i = 1; i < numNodes; i++) {
    generatedSample.edges.push({
      source: `a${i}`,
      target: `a${i + 1}`,
      type: edgeTypes[Math.floor(edgeTypes.length * Math.random())],
    });
  }

  return generatedSample;
}

type IGraphProps = {};

type IGraphState = {
  graph: any,
  selected: any,
  totalNodes: number,
  copiedNode: any,
  layoutEngineType?: LayoutEngineType,
};

class Graph extends React.Component<IGraphProps, IGraphState> {
  GraphView;

  constructor(props: IGraphProps) {
    super(props);

    this.state = {
      copiedNode: null,
      graph: sample,
      layoutEngineType: undefined,
      selected: null,
      totalNodes: sample.nodes.length,
      nodeCategoryType: 'skinny',
      nodeStrokeType: 'solid',
      currentColor: 'red',
      nodeSubType: null,
    };

    this.GraphView = React.createRef();
  }

  // Helper to find the index of a given node
  getNodeIndex(searchNode: INode | any) {
    return this.state.graph.nodes.findIndex(node => {
      return node[NODE_KEY] === searchNode[NODE_KEY];
    });
  }

  // Helper to find the index of a given edge
  getEdgeIndex(searchEdge: IEdge) {
    return this.state.graph.edges.findIndex(edge => {
      return (
        edge.source === searchEdge.source && edge.target === searchEdge.target
      );
    });
  }

  // Given a nodeKey, return the corresponding node
  getViewNode(nodeKey: string) {
    const searchNode = {};

    searchNode[NODE_KEY] = nodeKey;
    const i = this.getNodeIndex(searchNode);

    return this.state.graph.nodes[i];
  }

  makeItLarge = () => {
    const graph = this.state.graph;
    const generatedSample = generateSample(this.state.totalNodes);

    graph.nodes = generatedSample.nodes;
    graph.edges = generatedSample.edges;
    this.setState(this.state);
  };

  addStartNode = () => {
    const graph = this.state.graph;

    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [
      {
        id: Date.now(),
        title: 'Node A',
        type:
          nodeTypesNew[this.state.nodeCategoryType][this.state.nodeStrokeType],
        subtype: this.state.nodeSubType,
        x: 0,
        y: 0,
      },
      ...this.state.graph.nodes,
    ];
    this.setState({
      graph,
    });
  };
  deleteStartNode = () => {
    const graph = this.state.graph;

    graph.nodes.splice(0, 1);
    // using a new array like this creates a new memory reference
    // this will force a re-render
    graph.nodes = [...this.state.graph.nodes];
    this.setState({
      graph,
    });
  };

  handleChange = (event: any) => {
    this.setState(
      {
        totalNodes: parseInt(event.target.value || '0', 10),
      },
      this.makeItLarge
    );
  };

  /*
   * Handlers/Interaction
   */

  // Called by 'drag' handler, etc..
  // to sync updates from D3 with the graph
  onUpdateNode = (viewNode: INode) => {
    const graph = this.state.graph;
    const i = this.getNodeIndex(viewNode);

    graph.nodes[i] = viewNode;
    this.setState({ graph });
  };

  // Node 'mouseUp' handler
  onSelectNode = (viewNode: INode | null) => {
    // Deselect events will send Null viewNode
    this.setState({ selected: viewNode });
  };

  // Edge 'mouseUp' handler
  onSelectEdge = (viewEdge: IEdge) => {
    this.setState({ selected: viewEdge });
  };

  // Updates the graph with a new node
  onCreateNode = (x: number, y: number) => {
    const graph = this.state.graph;

    // This is just an example - any sort of logic
    // could be used here to determine node type
    // There is also support for subtypes. (see 'sample' above)
    // The subtype geometry will underlay the 'type' geometry for a node
    const type =
      nodeTypesNew[this.state.nodeCategoryType][this.state.nodeStrokeType]; //Math.random() < 0.25 ? SPECIAL_SOLID_TYPE : EMPTY_TYPE;

    const viewNode = {
      id: Date.now(),
      title: '',
      type,
      x,
      y,
    };

    graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });
  };

  // Deletes a node from the graph
  onDeleteNode = (viewNode: INode, nodeId: string, nodeArr: INode[]) => {
    const graph = this.state.graph;
    // Delete any connected edges
    const newEdges = graph.edges.filter((edge, i) => {
      return (
        edge.source !== viewNode[NODE_KEY] && edge.target !== viewNode[NODE_KEY]
      );
    });

    graph.nodes = nodeArr;
    graph.edges = newEdges;

    this.setState({ graph, selected: null });
  };

  // Creates a new node between two edges
  onCreateEdge = (sourceViewNode: INode, targetViewNode: INode) => {
    const graph = this.state.graph;
    // This is just an example - any sort of logic
    // could be used here to determine edge type
    const type =
      sourceViewNode.type === SPECIAL_SOLID_TYPE
        ? SPECIAL_EDGE_TYPE
        : EMPTY_EDGE_TYPE;

    const viewEdge = {
      source: sourceViewNode[NODE_KEY],
      target: targetViewNode[NODE_KEY],
      type,
    };

    // Only add the edge when the source node is not the same as the target
    if (viewEdge.source !== viewEdge.target) {
      graph.edges = [...graph.edges, viewEdge];
      this.setState({
        graph,
        selected: viewEdge,
      });
    }
  };

  // Called when an edge is reattached to a different target.
  onSwapEdge = (
    sourceViewNode: INode,
    targetViewNode: INode,
    viewEdge: IEdge
  ) => {
    const graph = this.state.graph;
    const i = this.getEdgeIndex(viewEdge);
    const edge = JSON.parse(JSON.stringify(graph.edges[i]));

    edge.source = sourceViewNode[NODE_KEY];
    edge.target = targetViewNode[NODE_KEY];
    graph.edges[i] = edge;
    // reassign the array reference if you want the graph to re-render a swapped edge
    graph.edges = [...graph.edges];

    this.setState({
      graph,
      selected: edge,
    });
  };

  // Called when an edge is deleted
  onDeleteEdge = (viewEdge: IEdge, edges: IEdge[]) => {
    const graph = this.state.graph;

    graph.edges = edges;
    this.setState({
      graph,
      selected: null,
    });
  };

  onUndo = () => {
    // Not implemented
    console.warn('Undo is not currently implemented in the example.');
    // Normally any add, remove, or update would record the action in an array.
    // In order to undo it one would simply call the inverse of the action performed. For instance, if someone
    // called onDeleteEdge with (viewEdge, i, edges) then an undelete would be a splicing the original viewEdge
    // into the edges array at position i.
  };

  onCopySelected = () => {
    if (this.state.selected.source) {
      console.warn('Cannot copy selected edges, try selecting a node instead.');

      return;
    }

    const x = this.state.selected.x + 10;
    const y = this.state.selected.y + 10;

    this.setState({
      copiedNode: { ...this.state.selected, x, y },
    });
  };

  onPasteSelected = () => {
    if (!this.state.copiedNode) {
      console.warn(
        'No node is currently in the copy queue. Try selecting a node and copying it with Ctrl/Command-C'
      );
    }

    const graph = this.state.graph;
    const newNode = { ...this.state.copiedNode, id: Date.now() };

    graph.nodes = [...graph.nodes, newNode];
    this.forceUpdate();
  };

  handleChangeLayoutEngineType = (event: any) => {
    this.setState({
      layoutEngineType: (event.target.value: LayoutEngineType | 'None'),
    });
  };

  handleChangeNodeStrokeType = (event: any) => {
    this.setState({
      nodeStrokeType: event.target.value,
    });
  };

  handleChangeNodeType = (event: any) => {
    this.setState({
      nodeCategoryType: event.target.value,
    });
  };

  handleChangeNodeSubType = (event: any) => {
    this.setState({
      nodeSubType: event.target.value,
    });
  };

  onSelectPanNode = (event: any) => {
    if (this.GraphView) {
      this.GraphView.panToNode(event.target.value, true);
    }
  };

  onDragStart = (event) => {
    event
      .dataTransfer
      .setData('text/plain', event.target.innerText);
  };

  onDragOver = (event) => {
    event.preventDefault();
  };

  onDrop = (event) => {
    const text = event
      .dataTransfer
      .getData('text');

    const graph = this.state.graph;

    const type =
      nodeTypesNew[this.state.nodeCategoryType][this.state.nodeStrokeType];

    const viewNode = {
      id: Date.now(),
      title: text,
      type,
      x: 0,
      y: 0,
    };

    graph.nodes = [...graph.nodes, viewNode];
    this.setState({ graph });

    event
      .dataTransfer
      .clearData();
  };

  /*
   * Render
   */

  render() {
    const { nodes, edges } = this.state.graph;
    const selected = this.state.selected;
    const { NodeTypes, NodeSubtypes, EdgeTypes } = GraphConfig;

    return (
      <div id="graph">
        <div className="graph-header">
          <button onClick={this.addStartNode}>Add Node</button>
          <div className="node-type-selector">
            <span>Node type:</span>
            <select
              name="node-type-selector"
              onChange={this.handleChangeNodeType}
            >
              <option value={'skinny'}>Standard</option>
              <option value={'special'}>Conditional</option>
              <option value={'circle'}>Circle</option>
              <option value={'complexCircle'}>Complex Circle</option>
              <option value={'poly'}>Poly</option>
            </select>
          </div>
          <div className="node-stroke-selector">
            <span>Node border type:</span>
            <select
              name="node-stroke-selector"
              onChange={this.handleChangeNodeStrokeType}
              disabled={(this.state.nodeCategoryType !== 'skinny' && this.state.nodeCategoryType !== 'special') ? true : false}
            >
              <option value={'solid'}>Solid</option>
              <option value={'dotted'}>Dotted</option>
              <option value={'dashed'}>Dashed</option>
              <option value={'dashedDotted'}>Dashed Dotted</option>
              {this.state.nodeCategoryType === 'skinny' ? (
                <option value={'solidRed'}>Solid Red</option>
              ) : null}
              {this.state.nodeCategoryType === 'skinny' ? (
                <option value={'solidGreen'}>Solid Green </option>
              ) : null}
              {this.state.nodeCategoryType === 'skinny' ? (
                <option value={'solidBlue'}>Solid Blue</option>
              ) : null}
            </select>
          </div>
          <div className="node-subtype-selector">
            <span>Node subtype:</span>
            <select
              name="node-subtype-selector"
              onChange={this.handleChangeNodeSubType}
              disabled={this.state.nodeCategoryType === 'skinny' ? true : false}
            >
              <option value={null}>None</option>
              <option value={SPECIAL_CHILD_SUBTYPE}>Rectangle</option>
            </select>
          </div>
          <div className="layout-engine">
            <span>Layout Engine:</span>
            <select
              name="layout-engine-type"
              onChange={this.handleChangeLayoutEngineType}
            >
              <option value={undefined}>None</option>
              <option value={'SnapToGrid'}>Snap to Grid</option>
              <option value={'VerticalTree'}>Vertical Tree</option>
              <option value={'HorizontalTree'}>Horizontal Tree</option>
            </select>
          </div>
        </div>
        <div
          className="work-area"
        >
          <div
            className="graph-dropzone"
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}
          >
            <GraphView
              ref={el => (this.GraphView = el)}
              nodeKey={NODE_KEY}
              nodes={nodes}
              edges={edges}
              selected={selected}
              nodeTypes={NodeTypes}
              nodeSubtypes={NodeSubtypes}
              edgeTypes={EdgeTypes}
              onSelectNode={this.onSelectNode}
              onCreateNode={this.onCreateNode}
              onUpdateNode={this.onUpdateNode}
              onDeleteNode={this.onDeleteNode}
              onSelectEdge={this.onSelectEdge}
              onCreateEdge={this.onCreateEdge}
              onSwapEdge={this.onSwapEdge}
              onDeleteEdge={this.onDeleteEdge}
              onUndo={this.onUndo}
              onCopySelected={this.onCopySelected}
              onPasteSelected={this.onPasteSelected}
              layoutEngineType={this.state.layoutEngineType}
            />
          </div>
          <div
            className="right-panel"
          >
            <select
              className="select-node-type"
              name="node-type-selector"
              onChange={this.handleChangeNodeType}
            >
              <option value={'skinny'}>Analytic</option>
              <option value={'special'}>Conditional</option>
              <option value={'circle'}>Data Source</option>
            </select>

            {this.state.nodeCategoryType === 'skinny' ? (
              <ul>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  analytic1
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  analytic2
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  analytic3
                </span>
                </li>
              </ul>
            ) : null}

            {this.state.nodeCategoryType === 'special' ? (
              <ul>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  conditional1
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  conditional2
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  conditional3
                </span>
                </li>
              </ul>
            ) : null}

            {this.state.nodeCategoryType === 'circle' ? (
              <ul>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  circle1
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  cirlce2
                </span>
                </li>
                <li>
                <span
                  draggable="true"
                  onDragStart={this.onDragStart}
                >
                  circle3
                </span>
                </li>
              </ul>
            ) : null}

          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
