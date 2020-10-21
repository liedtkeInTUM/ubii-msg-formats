/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ubii.dataStructure.Color', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ubii.dataStructure.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.dataStructure.Color.displayName = 'proto.ubii.dataStructure.Color';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Color} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ubii.dataStructure.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    r: msg.getR(),
    g: msg.getG(),
    b: msg.getB(),
    a: msg.getA()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ubii.dataStructure.Color}
 */
proto.ubii.dataStructure.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Color;
  return proto.ubii.dataStructure.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Color}
 */
proto.ubii.dataStructure.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setR(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setG(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setB(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setA(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Color} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ubii.dataStructure.Color.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ubii.dataStructure.Color.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getR();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = this.getG();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = this.getB();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = this.getA();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ubii.dataStructure.Color} The clone.
 */
proto.ubii.dataStructure.Color.prototype.cloneMessage = function() {
  return /** @type {!proto.ubii.dataStructure.Color} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional double r = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getR = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.ubii.dataStructure.Color.prototype.setR = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double g = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ubii.dataStructure.Color.prototype.setG = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double b = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ubii.dataStructure.Color.prototype.setB = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double a = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ubii.dataStructure.Color.prototype.setA = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.ubii.dataStructure);
