export type Coordinates = {
  x: number;
  y: number;
  z: number;
};

export type Texture = {
  textureTop: string;
  textureSide: string;
  textureBottom: string;
}

export type Block = Coordinates & Texture;