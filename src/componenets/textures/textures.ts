export type Texture = {
  textureTop: string;
  textureSide: string;
  textureBottom: string;
}

export type TexturedBlock = Texture & {
  name: string;
}

export const none: TexturedBlock = {
  name: 'None',
  textureTop: '',
  textureSide: '',
  textureBottom: '',
}


export const grass: TexturedBlock = {
  name: 'Grass',
  textureTop: 'url("textures/grass-top.jpg")',
  textureSide: 'url("textures/grass-side.jpg")',
  textureBottom: 'url("textures/dirt-all.jpg")',
}

export const dirt: TexturedBlock = {
  name: 'Dirt',
  textureTop: 'url("textures/dirt-all.jpg")',
  textureSide: 'url("textures/dirt-all.jpg")',
  textureBottom: 'url("textures/dirt-all.jpg")',
}

export const wood: TexturedBlock = {
  name: 'Wood',
  textureTop: 'url("textures/wood-base.jpg")',
  textureSide: 'url("textures/wood-side.jpg")',
  textureBottom: 'url("textures/wood-base.jpg")',
}

export const blockTypes = [
  none, grass, dirt, wood
]