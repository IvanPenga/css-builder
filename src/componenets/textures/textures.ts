import { Texture } from "../models/block-types";

export const none: Texture = {
  textureTop: '',
  textureSide: '',
  textureBottom: '',
}

export const grass: Texture = {
  textureTop: 'url("textures/grass-top.jpg")',
  textureSide: 'url("textures/grass-side.jpg")',
  textureBottom: 'url("textures/dirt-all.jpg")',
}

export const dirt: Texture = {
  textureTop: 'url("textures/dirt-all.jpg")',
  textureSide: 'url("textures/dirt-all.jpg")',
  textureBottom: 'url("textures/dirt-all.jpg")',
}

export const wood: Texture = {
  textureTop: 'url("textures/wood-base.jpg")',
  textureSide: 'url("textures/wood-side.jpg")',
  textureBottom: 'url("textures/wood-base.jpg")',
}

export const leaves: Texture = {
  textureTop: 'url("textures/leaves.webp")',
  textureSide: 'url("textures/leaves.webp")',
  textureBottom: 'url("textures/leaves.webp")',
}

export const textures = { none, grass, dirt, wood, leaves }