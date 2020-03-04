// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var ubii = ubii || {};

/**
 * @const
 * @namespace
 */
ubii.dataStructures = ubii.dataStructures || {};

/**
 * @constructor
 */
ubii.dataStructures.Vector2 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {ubii.dataStructures.Vector2}
 */
ubii.dataStructures.Vector2.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
ubii.dataStructures.Vector2.prototype.x = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
ubii.dataStructures.Vector2.prototype.y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Vector2.createVector2 = function(builder, x, y) {
  builder.prep(4, 8);
  builder.writeFloat32(y);
  builder.writeFloat32(x);
  return builder.offset();
};

// Exports for Node.js and RequireJS
this.ubii = ubii;
