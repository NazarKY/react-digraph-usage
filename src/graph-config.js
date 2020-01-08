import * as React from 'react';

export const NODE_KEY = 'id'; // Key used to identify nodes
export const EMPTY_TYPE = 'customEmpty'; // Empty node type
export const POLY_TYPE = 'poly';
export const SPECIAL_SOLID_TYPE = 'specialSolid';
export const SPECIAL_DASHED_TYPE = 'specialDashed';
export const SPECIAL_DOTTED_TYPE = 'specialDotted';
export const SPECIAL_DASHED_DOTTED_TYPE = 'specialDashedDotted';
export const SKINNY_TYPE = 'skinny';
export const SKINNY_SOLID_TYPE = 'skinnySolid';

export const SKINNY_SOLID_RED_TYPE = 'skinnySolidRed';
export const SKINNY_SOLID_GREEN_TYPE = 'skinnySolidGreen';
export const SKINNY_SOLID_BLUE_TYPE = 'skinnySolidBlue';

export const SKINNY_DASHED_TYPE = 'skinnyDashed';
export const SKINNY_DOTTED_TYPE = 'skinnyDotted';
export const SKINNY_DASHED_DOTTED_TYPE = 'skinnyDashedDotted';
export const SPECIAL_CHILD_SUBTYPE = 'specialChild';
export const EMPTY_EDGE_TYPE = 'emptyEdge';
export const SPECIAL_EDGE_TYPE = 'specialEdge';
export const COMPLEX_CIRCLE_TYPE = 'complexCircle';

export const nodeTypes = [
  EMPTY_TYPE,
  POLY_TYPE,
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
];
export const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];

const EmptyNodeShape = (
  <symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

const CustomEmptyShape = (
  <symbol viewBox="0 0 100 100" id="customEmpty">
    <circle cx="50" cy="50" r="45" />
  </symbol>
);

const SpecialShapeSolid = (
  <symbol viewBox="-27 0 154 154" id="specialSolid" width="154" height="154">
    <rect
      transform="translate(50) rotate(45)"
      className="solid"
      width="109"
      height="109"
    />
  </symbol>
);

const SpecialShapeDotted = (
  <symbol viewBox="-27 0 154 154" id="specialDotted" width="154" height="154">
    <rect
      transform="translate(50) rotate(45)"
      className="dotted"
      width="109"
      height="109"
    />
  </symbol>
);

const SpecialShapeDashed = (
  <symbol viewBox="-27 0 154 154" id="specialDashed" width="154" height="154">
    <rect
      transform="translate(50) rotate(45)"
      className="dashed"
      width="109"
      height="109"
    />
  </symbol>
);

const SpecialShapeDashedDotted = (
  <symbol
    viewBox="-27 0 154 154"
    id="specialDashedDotted"
    width="154"
    height="154"
  >
    <rect
      transform="translate(50) rotate(45)"
      className="dashedDotted"
      width="109"
      height="109"
    />
  </symbol>
);

const PolyShape = (
  <symbol viewBox="0 0 88 72" id="poly" width="88" height="88">
    <path d="M 0 36 18 0 70 0 88 36 70 72 18 72Z" />
  </symbol>
);

const ComplexCircleShape = (
  <symbol viewBox="0 0 100 100" id="complexCircle" width="100" height="100">
    <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" />
    <circle cx="50" cy="50" r="34" />
    <path
      d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90A40,40,0,1,1,90,50,40,40,0,0,1,50,90Z"
      data-intersect-ignore="true"
    />
  </symbol>
);

const SkinnyShape = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinny">
    <rect x="0" y="0" rx="2" ry="2" width="250" height="108" />
  </symbol>
);

const SkinnyShapeSolid = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnySolid">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="solid"
    />
  </symbol>
);

const SkinnyShapeSolidRed = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnySolidRed">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="solid red"
    />
  </symbol>
);

const SkinnyShapeSolidGreen = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnySolidGreen">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="solid green"
    />
  </symbol>
);

const SkinnyShapeSolidBlue = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnySolidBlue">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="solid blue"
    />
  </symbol>
);

const SkinnyShapeDashed = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnyDashed">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="dashed"
    />
  </symbol>
);

const SkinnyShapeDotted = (
  <symbol viewBox="0 0 250 108" width="250" height="108" id="skinnyDotted">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="dotted"
    />
  </symbol>
);

const SkinnyShapeDashedDotted = (
  <symbol
    viewBox="0 0 250 108"
    width="250"
    height="108"
    id="skinnyDashedDotted"
  >
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="250"
      height="108"
      className="dashedDotted"
    />
  </symbol>
);

const SpecialChildShape = (
  <symbol viewBox="0 0 154 154" id="specialChild">
    <rect
      x="2.5"
      y="0"
      width="154"
      height="154"
      fill="rgba(30, 144, 255, 0.12)"
    />
  </symbol>
);

const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="specialEdge">
    <rect
      transform="rotate(45)"
      x="27.5"
      y="-7.5"
      width="15"
      height="15"
      fill="currentColor"
    />
  </symbol>
);

export default {
  EdgeTypes: {
    emptyEdge: {
      shape: EmptyEdgeShape,
      shapeId: '#emptyEdge',
    },
    specialEdge: {
      shape: SpecialEdgeShape,
      shapeId: '#specialEdge',
    },
  },
  NodeSubtypes: {
    specialChild: {
      shape: SpecialChildShape,
      shapeId: '#specialChild',
    },
  },
  NodeTypes: {
    emptyNode: {
      shape: EmptyNodeShape,
      shapeId: '#emptyNode',
      typeText: 'None',
    },
    empty: {
      shape: CustomEmptyShape,
      shapeId: '#empty',
      typeText: 'None',
    },

    specialSolid: {
      shape: SpecialShapeSolid,
      shapeId: '#specialSolid',
      typeText: 'Special solid',
    },
    specialDotted: {
      shape: SpecialShapeDotted,
      shapeId: '#specialDotted',
      typeText: 'Special dotted',
    },
    specialDashed: {
      shape: SpecialShapeDashed,
      shapeId: '#specialDashed',
      typeText: 'Special dashed',
    },
    specialDashedDotted: {
      shape: SpecialShapeDashedDotted,
      shapeId: '#specialDashedDotted',
      typeText: 'Special dashed dotted',
    },

    skinny: {
      shape: SkinnyShape,
      shapeId: '#skinny',
      typeText: 'Skinny',
    },
    skinnySolid: {
      shape: SkinnyShapeSolid,
      shapeId: '#skinnySolid',
      typeText: 'Skinny solid',
    },
    skinnySolidRed: {
      shape: SkinnyShapeSolidRed,
      shapeId: '#skinnySolidRed',
      typeText: 'Skinny solid red',
    },
    skinnySolidGreen: {
      shape: SkinnyShapeSolidGreen,
      shapeId: '#skinnySolidGreen',
      typeText: 'Skinny solid green',
    },
    skinnySolidBlue: {
      shape: SkinnyShapeSolidBlue,
      shapeId: '#skinnySolidBlue',
      typeText: 'Skinny solid blue',
    },
    skinnyDotted: {
      shape: SkinnyShapeDotted,
      shapeId: '#skinnyDotted',
      typeText: 'Skinny dotted',
    },
    skinnyDashed: {
      shape: SkinnyShapeDashed,
      shapeId: '#skinnyDashed',
      typeText: 'Skinny dashed',
    },
    skinnyDashedDotted: {
      shape: SkinnyShapeDashedDotted,
      shapeId: '#skinnyDashedDotted',
      typeText: 'Skinny dashed dotted',
    },

    poly: {
      shape: PolyShape,
      shapeId: '#poly',
      typeText: 'Poly',
    },
    complexCircle: {
      shape: ComplexCircleShape,
      shapeId: '#complexCircle',
      typeText: '#complexCircle',
    },
  },
};
