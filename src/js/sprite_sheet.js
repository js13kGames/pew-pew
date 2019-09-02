/** Class to handle sprite sheets. */
class SpriteSheet {
  /** @param {string} image Sprite sheet location. */
  constructor(image) {
    this.image = image;
    this.sprites = [];
  }

  /**
   * @typedef {Object} sprite
   * @property {string} name
   * @property {number} x
   * @property {number} y
   */

  /**
   * Add sprite from the sheet.
   * Name must be unique.
   * @param {sprite} sprite
   */
  addSprite(sprite) {
    this.sprites.push({
      name: sprite.name,
      x: sprite.x,
      y: sprite.y,
    });
  }

  /**
   * Get the position for sprite.
   * @param {string} name Sprite name.
   * @return {sprite|undefined}
   */
  getSprite(name) {
    for (const S of this.sprites) {
      if (S.name === name) {
        return S;
      }
    }
  }
}
