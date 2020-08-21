/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!


goog.provide('proto.ubii.clients.Client');
goog.provide('proto.ubii.clients.ClientList');
goog.provide('proto.ubii.dataStructure.BoolList');
goog.provide('proto.ubii.dataStructure.ButtonEventType');
goog.provide('proto.ubii.dataStructure.Color');
goog.provide('proto.ubii.dataStructure.DoubleList');
goog.provide('proto.ubii.dataStructure.FloatList');
goog.provide('proto.ubii.dataStructure.HandGestureType');
goog.provide('proto.ubii.dataStructure.Image2D');
goog.provide('proto.ubii.dataStructure.Image2D.DataFormat');
goog.provide('proto.ubii.dataStructure.Image2DList');
goog.provide('proto.ubii.dataStructure.Int32List');
goog.provide('proto.ubii.dataStructure.KeyEvent');
goog.provide('proto.ubii.dataStructure.Matrix3x2');
goog.provide('proto.ubii.dataStructure.Matrix4x4');
goog.provide('proto.ubii.dataStructure.MouseEvent');
goog.provide('proto.ubii.dataStructure.MyoEvent');
goog.provide('proto.ubii.dataStructure.Object2D');
goog.provide('proto.ubii.dataStructure.Object2DList');
goog.provide('proto.ubii.dataStructure.Object3D');
goog.provide('proto.ubii.dataStructure.Object3DList');
goog.provide('proto.ubii.dataStructure.Pose2D');
goog.provide('proto.ubii.dataStructure.Pose2D.OrientationCase');
goog.provide('proto.ubii.dataStructure.Pose3D');
goog.provide('proto.ubii.dataStructure.Pose3D.OrientationCase');
goog.provide('proto.ubii.dataStructure.Quaternion');
goog.provide('proto.ubii.dataStructure.StringList');
goog.provide('proto.ubii.dataStructure.TouchEvent');
goog.provide('proto.ubii.dataStructure.Vector2');
goog.provide('proto.ubii.dataStructure.Vector3');
goog.provide('proto.ubii.dataStructure.Vector4');
goog.provide('proto.ubii.dataStructure.Vector8');
goog.provide('proto.ubii.devices.Component');
goog.provide('proto.ubii.devices.Component.IOType');
goog.provide('proto.ubii.devices.ComponentList');
goog.provide('proto.ubii.devices.Device');
goog.provide('proto.ubii.devices.Device.DeviceType');
goog.provide('proto.ubii.devices.DeviceList');
goog.provide('proto.ubii.devices.TopicDemux');
goog.provide('proto.ubii.devices.TopicDemuxList');
goog.provide('proto.ubii.devices.TopicMux');
goog.provide('proto.ubii.devices.TopicMuxList');
goog.provide('proto.ubii.general.Error');
goog.provide('proto.ubii.general.Success');
goog.provide('proto.ubii.interactions.IOFormat');
goog.provide('proto.ubii.interactions.Interaction');
goog.provide('proto.ubii.interactions.InteractionList');
goog.provide('proto.ubii.interactions.InteractionStatus');
goog.provide('proto.ubii.processing.LockstepProcessingReply');
goog.provide('proto.ubii.processing.LockstepProcessingRequest');
goog.provide('proto.ubii.processing.ModuleIO');
goog.provide('proto.ubii.processing.ProcessingMode');
goog.provide('proto.ubii.processing.ProcessingMode.Frequency');
goog.provide('proto.ubii.processing.ProcessingMode.Lockstep');
goog.provide('proto.ubii.processing.ProcessingMode.ModeCase');
goog.provide('proto.ubii.processing.ProcessingMode.TriggerOnInput');
goog.provide('proto.ubii.processing.ProcessingModule');
goog.provide('proto.ubii.processing.ProcessingModule.Language');
goog.provide('proto.ubii.processing.ProcessingModule.Status');
goog.provide('proto.ubii.processing.ProcessingModuleList');
goog.provide('proto.ubii.servers.Server');
goog.provide('proto.ubii.services.Service');
goog.provide('proto.ubii.services.ServiceList');
goog.provide('proto.ubii.services.ServiceReply');
goog.provide('proto.ubii.services.ServiceReply.TypeCase');
goog.provide('proto.ubii.services.ServiceRequest');
goog.provide('proto.ubii.services.ServiceRequest.TypeCase');
goog.provide('proto.ubii.services.request.TopicSubscription');
goog.provide('proto.ubii.sessions.IOMapping');
goog.provide('proto.ubii.sessions.IOMappingList');
goog.provide('proto.ubii.sessions.InteractionInputMapping');
goog.provide('proto.ubii.sessions.InteractionInputMapping.TopicSourceCase');
goog.provide('proto.ubii.sessions.InteractionInputMappingList');
goog.provide('proto.ubii.sessions.InteractionOutputMapping');
goog.provide('proto.ubii.sessions.InteractionOutputMapping.TopicDestinationCase');
goog.provide('proto.ubii.sessions.InteractionOutputMappingList');
goog.provide('proto.ubii.sessions.ProcessMode');
goog.provide('proto.ubii.sessions.Session');
goog.provide('proto.ubii.sessions.SessionList');
goog.provide('proto.ubii.sessions.SessionStatus');
goog.provide('proto.ubii.topicData.Timestamp');
goog.provide('proto.ubii.topicData.TopicData');
goog.provide('proto.ubii.topicData.TopicData.TypeCase');
goog.provide('proto.ubii.topicData.TopicDataRecord');
goog.provide('proto.ubii.topicData.TopicDataRecord.TypeCase');
goog.provide('proto.ubii.topicData.TopicDataRecordList');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.ubii.devices.Component = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.Component.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.Component, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.Component.displayName = 'proto.ubii.devices.Component';
}
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
proto.ubii.devices.ComponentList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.ComponentList.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.ComponentList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.ComponentList.displayName = 'proto.ubii.devices.ComponentList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.Component.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.Component.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.Component.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.Component} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.Component.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageFormat: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ioType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    deviceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    id: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.ubii.devices.Component}
 */
proto.ubii.devices.Component.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.Component;
  return proto.ubii.devices.Component.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.Component} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.Component}
 */
proto.ubii.devices.Component.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageFormat(value);
      break;
    case 3:
      var value = /** @type {!proto.ubii.devices.Component.IOType} */ (reader.readEnum());
      msg.setIoType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.Component.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.Component.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.Component} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.Component.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIoType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ubii.devices.Component.IOType = {
  PUBLISHER: 0,
  SUBSCRIBER: 1
};

/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.devices.Component.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_format = 2;
 * @return {string}
 */
proto.ubii.devices.Component.prototype.getMessageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setMessageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional IOType io_type = 3;
 * @return {!proto.ubii.devices.Component.IOType}
 */
proto.ubii.devices.Component.prototype.getIoType = function() {
  return /** @type {!proto.ubii.devices.Component.IOType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ubii.devices.Component.IOType} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setIoType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string device_id = 4;
 * @return {string}
 */
proto.ubii.devices.Component.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.ubii.devices.Component.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.ubii.devices.Component.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string id = 7;
 * @return {string}
 */
proto.ubii.devices.Component.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Component} returns this
 */
proto.ubii.devices.Component.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.ComponentList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.ComponentList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.ComponentList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.ComponentList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.ComponentList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.devices.Component.toObject, includeInstance)
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
 * @return {!proto.ubii.devices.ComponentList}
 */
proto.ubii.devices.ComponentList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.ComponentList;
  return proto.ubii.devices.ComponentList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.ComponentList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.ComponentList}
 */
proto.ubii.devices.ComponentList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.devices.Component;
      reader.readMessage(value,proto.ubii.devices.Component.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.ComponentList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.ComponentList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.ComponentList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.ComponentList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.devices.Component.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Component elements = 1;
 * @return {!Array<!proto.ubii.devices.Component>}
 */
proto.ubii.devices.ComponentList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.devices.Component>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.Component, 1));
};


/**
 * @param {!Array<!proto.ubii.devices.Component>} value
 * @return {!proto.ubii.devices.ComponentList} returns this
*/
proto.ubii.devices.ComponentList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.devices.Component=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Component}
 */
proto.ubii.devices.ComponentList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.devices.Component, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.ComponentList} returns this
 */
proto.ubii.devices.ComponentList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.devices.Device = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.Device.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.Device, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.Device.displayName = 'proto.ubii.devices.Device';
}
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
proto.ubii.devices.DeviceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.DeviceList.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.DeviceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.DeviceList.displayName = 'proto.ubii.devices.DeviceList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.Device.repeatedFields_ = [4,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.Device.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.Device.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.Device} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.Device.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    deviceType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    componentsList: jspb.Message.toObjectList(msg.getComponentsList(),
    proto.ubii.devices.Component.toObject, includeInstance),
    clientId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.ubii.devices.Device}
 */
proto.ubii.devices.Device.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.Device;
  return proto.ubii.devices.Device.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.Device} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.Device}
 */
proto.ubii.devices.Device.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.ubii.devices.Device.DeviceType} */ (reader.readEnum());
      msg.setDeviceType(value);
      break;
    case 4:
      var value = new proto.ubii.devices.Component;
      reader.readMessage(value,proto.ubii.devices.Component.deserializeBinaryFromReader);
      msg.addComponents(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.Device.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.Device.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.Device} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.Device.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDeviceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getComponentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ubii.devices.Component.serializeBinaryToWriter
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ubii.devices.Device.DeviceType = {
  PARTICIPANT: 0,
  WATCHER: 1
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.devices.Device.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.devices.Device.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DeviceType device_type = 3;
 * @return {!proto.ubii.devices.Device.DeviceType}
 */
proto.ubii.devices.Device.prototype.getDeviceType = function() {
  return /** @type {!proto.ubii.devices.Device.DeviceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ubii.devices.Device.DeviceType} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setDeviceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated Component components = 4;
 * @return {!Array<!proto.ubii.devices.Component>}
 */
proto.ubii.devices.Device.prototype.getComponentsList = function() {
  return /** @type{!Array<!proto.ubii.devices.Component>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.Component, 4));
};


/**
 * @param {!Array<!proto.ubii.devices.Component>} value
 * @return {!proto.ubii.devices.Device} returns this
*/
proto.ubii.devices.Device.prototype.setComponentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ubii.devices.Component=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Component}
 */
proto.ubii.devices.Device.prototype.addComponents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ubii.devices.Component, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.clearComponentsList = function() {
  return this.setComponentsList([]);
};


/**
 * optional string client_id = 5;
 * @return {string}
 */
proto.ubii.devices.Device.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.ubii.devices.Device.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 7;
 * @return {string}
 */
proto.ubii.devices.Device.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.Device} returns this
 */
proto.ubii.devices.Device.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.DeviceList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.DeviceList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.DeviceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.DeviceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.DeviceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.devices.Device.toObject, includeInstance)
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
 * @return {!proto.ubii.devices.DeviceList}
 */
proto.ubii.devices.DeviceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.DeviceList;
  return proto.ubii.devices.DeviceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.DeviceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.DeviceList}
 */
proto.ubii.devices.DeviceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.devices.Device;
      reader.readMessage(value,proto.ubii.devices.Device.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.DeviceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.DeviceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.DeviceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.DeviceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.devices.Device.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Device elements = 1;
 * @return {!Array<!proto.ubii.devices.Device>}
 */
proto.ubii.devices.DeviceList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.devices.Device>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.Device, 1));
};


/**
 * @param {!Array<!proto.ubii.devices.Device>} value
 * @return {!proto.ubii.devices.DeviceList} returns this
*/
proto.ubii.devices.DeviceList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.devices.Device=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Device}
 */
proto.ubii.devices.DeviceList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.devices.Device, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.DeviceList} returns this
 */
proto.ubii.devices.DeviceList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.clients.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.clients.Client.repeatedFields_, null);
};
goog.inherits(proto.ubii.clients.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.clients.Client.displayName = 'proto.ubii.clients.Client';
}
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
proto.ubii.clients.ClientList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.clients.ClientList.repeatedFields_, null);
};
goog.inherits(proto.ubii.clients.ClientList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.clients.ClientList.displayName = 'proto.ubii.clients.ClientList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.clients.Client.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.clients.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.clients.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.clients.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicesList: jspb.Message.toObjectList(msg.getDevicesList(),
    proto.ubii.devices.Device.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.clients.Client;
  return proto.ubii.clients.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.clients.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.ubii.devices.Device;
      reader.readMessage(value,proto.ubii.devices.Device.deserializeBinaryFromReader);
      msg.addDevices(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.clients.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.clients.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.clients.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ubii.devices.Device.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.clients.Client.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.clients.Client.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ubii.devices.Device devices = 3;
 * @return {!Array<!proto.ubii.devices.Device>}
 */
proto.ubii.clients.Client.prototype.getDevicesList = function() {
  return /** @type{!Array<!proto.ubii.devices.Device>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.Device, 3));
};


/**
 * @param {!Array<!proto.ubii.devices.Device>} value
 * @return {!proto.ubii.clients.Client} returns this
*/
proto.ubii.clients.Client.prototype.setDevicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ubii.devices.Device=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Device}
 */
proto.ubii.clients.Client.prototype.addDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ubii.devices.Device, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.clearDevicesList = function() {
  return this.setDevicesList([]);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ubii.clients.Client.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ubii.clients.Client.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.clients.Client} returns this
 */
proto.ubii.clients.Client.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.clients.ClientList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.clients.ClientList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.clients.ClientList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.clients.ClientList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.ClientList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.clients.Client.toObject, includeInstance)
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
 * @return {!proto.ubii.clients.ClientList}
 */
proto.ubii.clients.ClientList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.clients.ClientList;
  return proto.ubii.clients.ClientList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.clients.ClientList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.clients.ClientList}
 */
proto.ubii.clients.ClientList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.clients.Client;
      reader.readMessage(value,proto.ubii.clients.Client.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.clients.ClientList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.clients.ClientList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.clients.ClientList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.ClientList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.clients.Client.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Client elements = 1;
 * @return {!Array<!proto.ubii.clients.Client>}
 */
proto.ubii.clients.ClientList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.clients.Client>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.clients.Client, 1));
};


/**
 * @param {!Array<!proto.ubii.clients.Client>} value
 * @return {!proto.ubii.clients.ClientList} returns this
*/
proto.ubii.clients.ClientList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.clients.Client=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.ClientList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.clients.Client, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.clients.ClientList} returns this
 */
proto.ubii.clients.ClientList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.devices.TopicDemux = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.devices.TopicDemux, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.TopicDemux.displayName = 'proto.ubii.devices.TopicDemux';
}
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
proto.ubii.devices.TopicDemuxList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.TopicDemuxList.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.TopicDemuxList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.TopicDemuxList.displayName = 'proto.ubii.devices.TopicDemuxList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.TopicDemux.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.TopicDemux.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.TopicDemux} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicDemux.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    outputTopicFormat: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ubii.devices.TopicDemux}
 */
proto.ubii.devices.TopicDemux.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.TopicDemux;
  return proto.ubii.devices.TopicDemux.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.TopicDemux} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.TopicDemux}
 */
proto.ubii.devices.TopicDemux.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputTopicFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.TopicDemux.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.TopicDemux.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.TopicDemux} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicDemux.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOutputTopicFormat();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.devices.TopicDemux.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicDemux} returns this
 */
proto.ubii.devices.TopicDemux.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.devices.TopicDemux.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicDemux} returns this
 */
proto.ubii.devices.TopicDemux.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data_type = 3;
 * @return {string}
 */
proto.ubii.devices.TopicDemux.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicDemux} returns this
 */
proto.ubii.devices.TopicDemux.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string output_topic_format = 4;
 * @return {string}
 */
proto.ubii.devices.TopicDemux.prototype.getOutputTopicFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicDemux} returns this
 */
proto.ubii.devices.TopicDemux.prototype.setOutputTopicFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.TopicDemuxList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.TopicDemuxList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.TopicDemuxList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.TopicDemuxList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicDemuxList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.devices.TopicDemux.toObject, includeInstance)
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
 * @return {!proto.ubii.devices.TopicDemuxList}
 */
proto.ubii.devices.TopicDemuxList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.TopicDemuxList;
  return proto.ubii.devices.TopicDemuxList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.TopicDemuxList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.TopicDemuxList}
 */
proto.ubii.devices.TopicDemuxList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.devices.TopicDemux;
      reader.readMessage(value,proto.ubii.devices.TopicDemux.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.TopicDemuxList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.TopicDemuxList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.TopicDemuxList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicDemuxList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.devices.TopicDemux.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TopicDemux elements = 1;
 * @return {!Array<!proto.ubii.devices.TopicDemux>}
 */
proto.ubii.devices.TopicDemuxList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.devices.TopicDemux>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.TopicDemux, 1));
};


/**
 * @param {!Array<!proto.ubii.devices.TopicDemux>} value
 * @return {!proto.ubii.devices.TopicDemuxList} returns this
*/
proto.ubii.devices.TopicDemuxList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.devices.TopicDemux=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.TopicDemux}
 */
proto.ubii.devices.TopicDemuxList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.devices.TopicDemux, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.TopicDemuxList} returns this
 */
proto.ubii.devices.TopicDemuxList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.devices.TopicMux = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.devices.TopicMux, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.TopicMux.displayName = 'proto.ubii.devices.TopicMux';
}
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
proto.ubii.devices.TopicMuxList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.devices.TopicMuxList.repeatedFields_, null);
};
goog.inherits(proto.ubii.devices.TopicMuxList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.devices.TopicMuxList.displayName = 'proto.ubii.devices.TopicMuxList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.TopicMux.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.TopicMux.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.TopicMux} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicMux.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    topicSelector: jspb.Message.getFieldWithDefault(msg, 4, ""),
    identityMatchPattern: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ubii.devices.TopicMux}
 */
proto.ubii.devices.TopicMux.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.TopicMux;
  return proto.ubii.devices.TopicMux.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.TopicMux} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.TopicMux}
 */
proto.ubii.devices.TopicMux.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicSelector(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityMatchPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.TopicMux.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.TopicMux.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.TopicMux} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicMux.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTopicSelector();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIdentityMatchPattern();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.devices.TopicMux.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicMux} returns this
 */
proto.ubii.devices.TopicMux.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.devices.TopicMux.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicMux} returns this
 */
proto.ubii.devices.TopicMux.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string data_type = 3;
 * @return {string}
 */
proto.ubii.devices.TopicMux.prototype.getDataType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicMux} returns this
 */
proto.ubii.devices.TopicMux.prototype.setDataType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string topic_selector = 4;
 * @return {string}
 */
proto.ubii.devices.TopicMux.prototype.getTopicSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicMux} returns this
 */
proto.ubii.devices.TopicMux.prototype.setTopicSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string identity_match_pattern = 5;
 * @return {string}
 */
proto.ubii.devices.TopicMux.prototype.getIdentityMatchPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.devices.TopicMux} returns this
 */
proto.ubii.devices.TopicMux.prototype.setIdentityMatchPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.devices.TopicMuxList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.devices.TopicMuxList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.devices.TopicMuxList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.devices.TopicMuxList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicMuxList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.devices.TopicMux.toObject, includeInstance)
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
 * @return {!proto.ubii.devices.TopicMuxList}
 */
proto.ubii.devices.TopicMuxList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.devices.TopicMuxList;
  return proto.ubii.devices.TopicMuxList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.devices.TopicMuxList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.devices.TopicMuxList}
 */
proto.ubii.devices.TopicMuxList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.devices.TopicMux;
      reader.readMessage(value,proto.ubii.devices.TopicMux.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.devices.TopicMuxList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.devices.TopicMuxList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.devices.TopicMuxList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.devices.TopicMuxList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.devices.TopicMux.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TopicMux elements = 1;
 * @return {!Array<!proto.ubii.devices.TopicMux>}
 */
proto.ubii.devices.TopicMuxList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.devices.TopicMux>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.devices.TopicMux, 1));
};


/**
 * @param {!Array<!proto.ubii.devices.TopicMux>} value
 * @return {!proto.ubii.devices.TopicMuxList} returns this
*/
proto.ubii.devices.TopicMuxList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.devices.TopicMux=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.TopicMux}
 */
proto.ubii.devices.TopicMuxList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.devices.TopicMux, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.devices.TopicMuxList} returns this
 */
proto.ubii.devices.TopicMuxList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.general.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.general.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.general.Error.displayName = 'proto.ubii.general.Error';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.general.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.general.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.general.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.general.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stack: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ubii.general.Error}
 */
proto.ubii.general.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.general.Error;
  return proto.ubii.general.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.general.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.general.Error}
 */
proto.ubii.general.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStack(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.general.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.general.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.general.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.general.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStack();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ubii.general.Error.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.general.Error} returns this
 */
proto.ubii.general.Error.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.ubii.general.Error.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.general.Error} returns this
 */
proto.ubii.general.Error.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string stack = 3;
 * @return {string}
 */
proto.ubii.general.Error.prototype.getStack = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.general.Error} returns this
 */
proto.ubii.general.Error.prototype.setStack = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


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
proto.ubii.general.Success = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.general.Success, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.general.Success.displayName = 'proto.ubii.general.Success';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.general.Success.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.general.Success.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.general.Success} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.general.Success.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ubii.general.Success}
 */
proto.ubii.general.Success.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.general.Success;
  return proto.ubii.general.Success.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.general.Success} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.general.Success}
 */
proto.ubii.general.Success.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.general.Success.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.general.Success.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.general.Success} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.general.Success.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.ubii.general.Success.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.general.Success} returns this
 */
proto.ubii.general.Success.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.ubii.general.Success.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.general.Success} returns this
 */
proto.ubii.general.Success.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


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
proto.ubii.interactions.IOFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.interactions.IOFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.interactions.IOFormat.displayName = 'proto.ubii.interactions.IOFormat';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.interactions.IOFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.interactions.IOFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.interactions.IOFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.IOFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageFormat: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ubii.interactions.IOFormat}
 */
proto.ubii.interactions.IOFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.interactions.IOFormat;
  return proto.ubii.interactions.IOFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.interactions.IOFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.interactions.IOFormat}
 */
proto.ubii.interactions.IOFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.interactions.IOFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.interactions.IOFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.interactions.IOFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.IOFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string internal_name = 1;
 * @return {string}
 */
proto.ubii.interactions.IOFormat.prototype.getInternalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.IOFormat} returns this
 */
proto.ubii.interactions.IOFormat.prototype.setInternalName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_format = 2;
 * @return {string}
 */
proto.ubii.interactions.IOFormat.prototype.getMessageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.IOFormat} returns this
 */
proto.ubii.interactions.IOFormat.prototype.setMessageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


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
proto.ubii.interactions.Interaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.interactions.Interaction.repeatedFields_, null);
};
goog.inherits(proto.ubii.interactions.Interaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.interactions.Interaction.displayName = 'proto.ubii.interactions.Interaction';
}
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
proto.ubii.interactions.InteractionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.interactions.InteractionList.repeatedFields_, null);
};
goog.inherits(proto.ubii.interactions.InteractionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.interactions.InteractionList.displayName = 'proto.ubii.interactions.InteractionList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.interactions.Interaction.repeatedFields_ = [4,5,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.interactions.Interaction.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.interactions.Interaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.interactions.Interaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.Interaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processingCallback: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputFormatsList: jspb.Message.toObjectList(msg.getInputFormatsList(),
    proto.ubii.interactions.IOFormat.toObject, includeInstance),
    outputFormatsList: jspb.Message.toObjectList(msg.getOutputFormatsList(),
    proto.ubii.interactions.IOFormat.toObject, includeInstance),
    onCreated: jspb.Message.getFieldWithDefault(msg, 6, ""),
    processFrequency: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    authorsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    editable: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
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
 * @return {!proto.ubii.interactions.Interaction}
 */
proto.ubii.interactions.Interaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.interactions.Interaction;
  return proto.ubii.interactions.Interaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.interactions.Interaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.interactions.Interaction}
 */
proto.ubii.interactions.Interaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessingCallback(value);
      break;
    case 4:
      var value = new proto.ubii.interactions.IOFormat;
      reader.readMessage(value,proto.ubii.interactions.IOFormat.deserializeBinaryFromReader);
      msg.addInputFormats(value);
      break;
    case 5:
      var value = new proto.ubii.interactions.IOFormat;
      reader.readMessage(value,proto.ubii.interactions.IOFormat.deserializeBinaryFromReader);
      msg.addOutputFormats(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnCreated(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcessFrequency(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthors(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 11:
      var value = /** @type {!proto.ubii.interactions.InteractionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.interactions.Interaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.interactions.Interaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.interactions.Interaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.Interaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessingCallback();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputFormatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ubii.interactions.IOFormat.serializeBinaryToWriter
    );
  }
  f = message.getOutputFormatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ubii.interactions.IOFormat.serializeBinaryToWriter
    );
  }
  f = message.getOnCreated();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProcessFrequency();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getAuthorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getEditable();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.interactions.Interaction.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.interactions.Interaction.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string processing_callback = 3;
 * @return {string}
 */
proto.ubii.interactions.Interaction.prototype.getProcessingCallback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setProcessingCallback = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated IOFormat input_formats = 4;
 * @return {!Array<!proto.ubii.interactions.IOFormat>}
 */
proto.ubii.interactions.Interaction.prototype.getInputFormatsList = function() {
  return /** @type{!Array<!proto.ubii.interactions.IOFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.interactions.IOFormat, 4));
};


/**
 * @param {!Array<!proto.ubii.interactions.IOFormat>} value
 * @return {!proto.ubii.interactions.Interaction} returns this
*/
proto.ubii.interactions.Interaction.prototype.setInputFormatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ubii.interactions.IOFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.IOFormat}
 */
proto.ubii.interactions.Interaction.prototype.addInputFormats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ubii.interactions.IOFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.clearInputFormatsList = function() {
  return this.setInputFormatsList([]);
};


/**
 * repeated IOFormat output_formats = 5;
 * @return {!Array<!proto.ubii.interactions.IOFormat>}
 */
proto.ubii.interactions.Interaction.prototype.getOutputFormatsList = function() {
  return /** @type{!Array<!proto.ubii.interactions.IOFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.interactions.IOFormat, 5));
};


/**
 * @param {!Array<!proto.ubii.interactions.IOFormat>} value
 * @return {!proto.ubii.interactions.Interaction} returns this
*/
proto.ubii.interactions.Interaction.prototype.setOutputFormatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ubii.interactions.IOFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.IOFormat}
 */
proto.ubii.interactions.Interaction.prototype.addOutputFormats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ubii.interactions.IOFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.clearOutputFormatsList = function() {
  return this.setOutputFormatsList([]);
};


/**
 * optional string on_created = 6;
 * @return {string}
 */
proto.ubii.interactions.Interaction.prototype.getOnCreated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setOnCreated = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float process_frequency = 7;
 * @return {number}
 */
proto.ubii.interactions.Interaction.prototype.getProcessFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setProcessFrequency = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated string authors = 8;
 * @return {!Array<string>}
 */
proto.ubii.interactions.Interaction.prototype.getAuthorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setAuthorsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.addAuthors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.clearAuthorsList = function() {
  return this.setAuthorsList([]);
};


/**
 * repeated string tags = 9;
 * @return {!Array<string>}
 */
proto.ubii.interactions.Interaction.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.ubii.interactions.Interaction.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional InteractionStatus status = 11;
 * @return {!proto.ubii.interactions.InteractionStatus}
 */
proto.ubii.interactions.Interaction.prototype.getStatus = function() {
  return /** @type {!proto.ubii.interactions.InteractionStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.ubii.interactions.InteractionStatus} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional bool editable = 12;
 * @return {boolean}
 */
proto.ubii.interactions.Interaction.prototype.getEditable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ubii.interactions.Interaction} returns this
 */
proto.ubii.interactions.Interaction.prototype.setEditable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.interactions.InteractionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.interactions.InteractionList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.interactions.InteractionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.interactions.InteractionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.InteractionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.interactions.Interaction.toObject, includeInstance)
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
 * @return {!proto.ubii.interactions.InteractionList}
 */
proto.ubii.interactions.InteractionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.interactions.InteractionList;
  return proto.ubii.interactions.InteractionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.interactions.InteractionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.interactions.InteractionList}
 */
proto.ubii.interactions.InteractionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.interactions.Interaction;
      reader.readMessage(value,proto.ubii.interactions.Interaction.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.interactions.InteractionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.interactions.InteractionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.interactions.InteractionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interactions.InteractionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.interactions.Interaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Interaction elements = 1;
 * @return {!Array<!proto.ubii.interactions.Interaction>}
 */
proto.ubii.interactions.InteractionList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.interactions.Interaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.interactions.Interaction, 1));
};


/**
 * @param {!Array<!proto.ubii.interactions.Interaction>} value
 * @return {!proto.ubii.interactions.InteractionList} returns this
*/
proto.ubii.interactions.InteractionList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.interactions.Interaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.Interaction}
 */
proto.ubii.interactions.InteractionList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.interactions.Interaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.interactions.InteractionList} returns this
 */
proto.ubii.interactions.InteractionList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


/**
 * @enum {number}
 */
proto.ubii.interactions.InteractionStatus = {
  CREATED: 0,
  INITIALIZED: 1,
  PROCESSING: 2,
  HALTED: 3
};

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
proto.ubii.topicData.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.topicData.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.Timestamp.displayName = 'proto.ubii.topicData.Timestamp';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.topicData.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ubii.topicData.Timestamp}
 */
proto.ubii.topicData.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.Timestamp;
  return proto.ubii.topicData.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.Timestamp}
 */
proto.ubii.topicData.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.topicData.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.ubii.topicData.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.Timestamp} returns this
 */
proto.ubii.topicData.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.ubii.topicData.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.Timestamp} returns this
 */
proto.ubii.topicData.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


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
proto.ubii.dataStructure.StringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.StringList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.StringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.StringList.displayName = 'proto.ubii.dataStructure.StringList';
}
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
proto.ubii.dataStructure.DoubleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.DoubleList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.DoubleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.DoubleList.displayName = 'proto.ubii.dataStructure.DoubleList';
}
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
proto.ubii.dataStructure.FloatList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.FloatList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.FloatList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.FloatList.displayName = 'proto.ubii.dataStructure.FloatList';
}
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
proto.ubii.dataStructure.BoolList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.BoolList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.BoolList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.BoolList.displayName = 'proto.ubii.dataStructure.BoolList';
}
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
proto.ubii.dataStructure.Int32List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Int32List.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Int32List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Int32List.displayName = 'proto.ubii.dataStructure.Int32List';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.StringList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.StringList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.StringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.StringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.StringList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ubii.dataStructure.StringList}
 */
proto.ubii.dataStructure.StringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.StringList;
  return proto.ubii.dataStructure.StringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.StringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.StringList}
 */
proto.ubii.dataStructure.StringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.StringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.StringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.StringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.StringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string elements = 1;
 * @return {!Array<string>}
 */
proto.ubii.dataStructure.StringList.prototype.getElementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.dataStructure.StringList} returns this
 */
proto.ubii.dataStructure.StringList.prototype.setElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.StringList} returns this
 */
proto.ubii.dataStructure.StringList.prototype.addElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.StringList} returns this
 */
proto.ubii.dataStructure.StringList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.DoubleList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.DoubleList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.DoubleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.DoubleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.DoubleList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ubii.dataStructure.DoubleList}
 */
proto.ubii.dataStructure.DoubleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.DoubleList;
  return proto.ubii.dataStructure.DoubleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.DoubleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.DoubleList}
 */
proto.ubii.dataStructure.DoubleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedDouble());
      msg.setElementsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.DoubleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.DoubleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.DoubleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.DoubleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
};


/**
 * repeated double elements = 1;
 * @return {!Array<number>}
 */
proto.ubii.dataStructure.DoubleList.prototype.getElementsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ubii.dataStructure.DoubleList} returns this
 */
proto.ubii.dataStructure.DoubleList.prototype.setElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.DoubleList} returns this
 */
proto.ubii.dataStructure.DoubleList.prototype.addElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.DoubleList} returns this
 */
proto.ubii.dataStructure.DoubleList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.FloatList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.FloatList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.FloatList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.FloatList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.FloatList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ubii.dataStructure.FloatList}
 */
proto.ubii.dataStructure.FloatList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.FloatList;
  return proto.ubii.dataStructure.FloatList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.FloatList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.FloatList}
 */
proto.ubii.dataStructure.FloatList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setElementsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.FloatList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.FloatList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.FloatList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.FloatList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
};


/**
 * repeated float elements = 1;
 * @return {!Array<number>}
 */
proto.ubii.dataStructure.FloatList.prototype.getElementsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ubii.dataStructure.FloatList} returns this
 */
proto.ubii.dataStructure.FloatList.prototype.setElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.FloatList} returns this
 */
proto.ubii.dataStructure.FloatList.prototype.addElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.FloatList} returns this
 */
proto.ubii.dataStructure.FloatList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.BoolList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.BoolList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.BoolList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.BoolList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.BoolList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ubii.dataStructure.BoolList}
 */
proto.ubii.dataStructure.BoolList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.BoolList;
  return proto.ubii.dataStructure.BoolList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.BoolList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.BoolList}
 */
proto.ubii.dataStructure.BoolList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setElementsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.BoolList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.BoolList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.BoolList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.BoolList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
};


/**
 * repeated bool elements = 1;
 * @return {!Array<boolean>}
 */
proto.ubii.dataStructure.BoolList.prototype.getElementsList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.ubii.dataStructure.BoolList} returns this
 */
proto.ubii.dataStructure.BoolList.prototype.setElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.BoolList} returns this
 */
proto.ubii.dataStructure.BoolList.prototype.addElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.BoolList} returns this
 */
proto.ubii.dataStructure.BoolList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Int32List.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Int32List.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Int32List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Int32List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Int32List.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ubii.dataStructure.Int32List}
 */
proto.ubii.dataStructure.Int32List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Int32List;
  return proto.ubii.dataStructure.Int32List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Int32List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Int32List}
 */
proto.ubii.dataStructure.Int32List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt32());
      msg.setElementsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Int32List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Int32List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Int32List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Int32List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      1,
      f
    );
  }
};


/**
 * repeated int32 elements = 1;
 * @return {!Array<number>}
 */
proto.ubii.dataStructure.Int32List.prototype.getElementsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ubii.dataStructure.Int32List} returns this
 */
proto.ubii.dataStructure.Int32List.prototype.setElementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Int32List} returns this
 */
proto.ubii.dataStructure.Int32List.prototype.addElements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.Int32List} returns this
 */
proto.ubii.dataStructure.Int32List.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.dataStructure.Vector2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Vector2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Vector2.displayName = 'proto.ubii.dataStructure.Vector2';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Vector2.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector2.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Vector2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector2;
  return proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Vector2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Vector2.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector2} returns this
 */
proto.ubii.dataStructure.Vector2.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Vector2.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector2} returns this
 */
proto.ubii.dataStructure.Vector2.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


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
proto.ubii.dataStructure.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Vector3.displayName = 'proto.ubii.dataStructure.Vector3';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector3;
  return proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector3} returns this
 */
proto.ubii.dataStructure.Vector3.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector3} returns this
 */
proto.ubii.dataStructure.Vector3.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector3} returns this
 */
proto.ubii.dataStructure.Vector3.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


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
proto.ubii.dataStructure.Vector4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Vector4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Vector4.displayName = 'proto.ubii.dataStructure.Vector4';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Vector4.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector4.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    w: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.ubii.dataStructure.Vector4}
 */
proto.ubii.dataStructure.Vector4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector4;
  return proto.ubii.dataStructure.Vector4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector4}
 */
proto.ubii.dataStructure.Vector4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setW(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Vector4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getW();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Vector4.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector4} returns this
 */
proto.ubii.dataStructure.Vector4.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Vector4.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector4} returns this
 */
proto.ubii.dataStructure.Vector4.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Vector4.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector4} returns this
 */
proto.ubii.dataStructure.Vector4.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double w = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Vector4.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector4} returns this
 */
proto.ubii.dataStructure.Vector4.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


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
proto.ubii.dataStructure.Quaternion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Quaternion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Quaternion.displayName = 'proto.ubii.dataStructure.Quaternion';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Quaternion.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Quaternion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Quaternion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Quaternion.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    w: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.dataStructure.Quaternion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Quaternion;
  return proto.ubii.dataStructure.Quaternion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Quaternion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.dataStructure.Quaternion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setW(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Quaternion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Quaternion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Quaternion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Quaternion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getW();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Quaternion.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Quaternion} returns this
 */
proto.ubii.dataStructure.Quaternion.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Quaternion.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Quaternion} returns this
 */
proto.ubii.dataStructure.Quaternion.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Quaternion.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Quaternion} returns this
 */
proto.ubii.dataStructure.Quaternion.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double w = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Quaternion.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Quaternion} returns this
 */
proto.ubii.dataStructure.Quaternion.prototype.setW = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


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
proto.ubii.dataStructure.Matrix3x2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Matrix3x2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Matrix3x2.displayName = 'proto.ubii.dataStructure.Matrix3x2';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Matrix3x2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Matrix3x2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix3x2.toObject = function(includeInstance, msg) {
  var f, obj = {
    m00: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    m01: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    m10: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    m11: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    m20: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    m21: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.ubii.dataStructure.Matrix3x2}
 */
proto.ubii.dataStructure.Matrix3x2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Matrix3x2;
  return proto.ubii.dataStructure.Matrix3x2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Matrix3x2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Matrix3x2}
 */
proto.ubii.dataStructure.Matrix3x2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM00(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM01(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM10(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM11(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM20(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM21(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Matrix3x2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Matrix3x2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix3x2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getM00();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getM01();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getM10();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getM11();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getM20();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getM21();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional double m00 = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM00 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM00 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double m01 = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM01 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM01 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double m10 = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM10 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM10 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double m11 = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM11 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM11 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double m20 = 5;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM20 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM20 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double m21 = 6;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix3x2.prototype.getM21 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix3x2} returns this
 */
proto.ubii.dataStructure.Matrix3x2.prototype.setM21 = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


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
proto.ubii.dataStructure.Matrix4x4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Matrix4x4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Matrix4x4.displayName = 'proto.ubii.dataStructure.Matrix4x4';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Matrix4x4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Matrix4x4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix4x4.toObject = function(includeInstance, msg) {
  var f, obj = {
    m00: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    m01: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    m02: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    m03: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    m10: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    m11: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    m12: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    m13: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    m20: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    m21: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    m22: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    m23: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    m30: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    m31: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    m32: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    m33: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0)
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
 * @return {!proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.dataStructure.Matrix4x4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Matrix4x4;
  return proto.ubii.dataStructure.Matrix4x4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Matrix4x4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.dataStructure.Matrix4x4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM00(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM01(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM02(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM03(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM10(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM11(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM12(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM13(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM20(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM21(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM22(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM23(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM30(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM31(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM32(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM33(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Matrix4x4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Matrix4x4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix4x4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getM00();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getM01();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getM02();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getM03();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getM10();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getM11();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getM12();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getM13();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getM20();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getM21();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getM22();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getM23();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getM30();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getM31();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getM32();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getM33();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
};


/**
 * optional double m00 = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM00 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM00 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double m01 = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM01 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM01 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double m02 = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM02 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM02 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double m03 = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM03 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM03 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double m10 = 5;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM10 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM10 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double m11 = 6;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM11 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM11 = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double m12 = 7;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM12 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM12 = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double m13 = 8;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM13 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM13 = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double m20 = 9;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM20 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM20 = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double m21 = 10;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM21 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM21 = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double m22 = 11;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM22 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM22 = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double m23 = 12;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM23 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM23 = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double m30 = 13;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM30 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM30 = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double m31 = 14;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM31 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM31 = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double m32 = 15;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM32 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM32 = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double m33 = 16;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM33 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM33 = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


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
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Color.displayName = 'proto.ubii.dataStructure.Color';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    r: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    g: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    b: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    a: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Color.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getR();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getG();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getB();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getA();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional double r = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getR = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Color} returns this
 */
proto.ubii.dataStructure.Color.prototype.setR = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double g = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getG = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Color} returns this
 */
proto.ubii.dataStructure.Color.prototype.setG = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double b = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Color} returns this
 */
proto.ubii.dataStructure.Color.prototype.setB = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double a = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Color.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Color} returns this
 */
proto.ubii.dataStructure.Color.prototype.setA = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.ubii.dataStructure.ButtonEventType = {
  UP: 0,
  DOWN: 1
};

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
proto.ubii.dataStructure.TouchEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.TouchEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.TouchEvent.displayName = 'proto.ubii.dataStructure.TouchEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.TouchEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.TouchEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.TouchEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.TouchEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && proto.ubii.dataStructure.Vector2.toObject(includeInstance, f)
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
 * @return {!proto.ubii.dataStructure.TouchEvent}
 */
proto.ubii.dataStructure.TouchEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.TouchEvent;
  return proto.ubii.dataStructure.TouchEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.TouchEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.TouchEvent}
 */
proto.ubii.dataStructure.TouchEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Vector2;
      reader.readMessage(value,proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.TouchEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.TouchEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.TouchEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.TouchEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Vector2.serializeBinaryToWriter
    );
  }
};


/**
 * optional ButtonEventType type = 1;
 * @return {!proto.ubii.dataStructure.ButtonEventType}
 */
proto.ubii.dataStructure.TouchEvent.prototype.getType = function() {
  return /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ubii.dataStructure.ButtonEventType} value
 * @return {!proto.ubii.dataStructure.TouchEvent} returns this
 */
proto.ubii.dataStructure.TouchEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Vector2 position = 2;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.TouchEvent.prototype.getPosition = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector2, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.dataStructure.TouchEvent} returns this
*/
proto.ubii.dataStructure.TouchEvent.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.TouchEvent} returns this
 */
proto.ubii.dataStructure.TouchEvent.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.TouchEvent.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


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
proto.ubii.dataStructure.KeyEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.KeyEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.KeyEvent.displayName = 'proto.ubii.dataStructure.KeyEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.KeyEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.KeyEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.KeyEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.KeyEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    key: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ubii.dataStructure.KeyEvent}
 */
proto.ubii.dataStructure.KeyEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.KeyEvent;
  return proto.ubii.dataStructure.KeyEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.KeyEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.KeyEvent}
 */
proto.ubii.dataStructure.KeyEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.KeyEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.KeyEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.KeyEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.KeyEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ButtonEventType type = 1;
 * @return {!proto.ubii.dataStructure.ButtonEventType}
 */
proto.ubii.dataStructure.KeyEvent.prototype.getType = function() {
  return /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ubii.dataStructure.ButtonEventType} value
 * @return {!proto.ubii.dataStructure.KeyEvent} returns this
 */
proto.ubii.dataStructure.KeyEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.ubii.dataStructure.KeyEvent.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.KeyEvent} returns this
 */
proto.ubii.dataStructure.KeyEvent.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


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
proto.ubii.dataStructure.MouseEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.MouseEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.MouseEvent.displayName = 'proto.ubii.dataStructure.MouseEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.MouseEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.MouseEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.MouseEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.MouseEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    button: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ubii.dataStructure.MouseEvent}
 */
proto.ubii.dataStructure.MouseEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.MouseEvent;
  return proto.ubii.dataStructure.MouseEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.MouseEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.MouseEvent}
 */
proto.ubii.dataStructure.MouseEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setButton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.MouseEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.MouseEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.MouseEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.MouseEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getButton();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional ButtonEventType type = 1;
 * @return {!proto.ubii.dataStructure.ButtonEventType}
 */
proto.ubii.dataStructure.MouseEvent.prototype.getType = function() {
  return /** @type {!proto.ubii.dataStructure.ButtonEventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ubii.dataStructure.ButtonEventType} value
 * @return {!proto.ubii.dataStructure.MouseEvent} returns this
 */
proto.ubii.dataStructure.MouseEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 button = 2;
 * @return {number}
 */
proto.ubii.dataStructure.MouseEvent.prototype.getButton = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.MouseEvent} returns this
 */
proto.ubii.dataStructure.MouseEvent.prototype.setButton = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


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
proto.ubii.dataStructure.Vector8 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Vector8, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Vector8.displayName = 'proto.ubii.dataStructure.Vector8';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Vector8.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector8.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector8} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector8.toObject = function(includeInstance, msg) {
  var f, obj = {
    v0: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    v1: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    v2: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    v3: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    v4: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    v5: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    v6: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    v7: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
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
 * @return {!proto.ubii.dataStructure.Vector8}
 */
proto.ubii.dataStructure.Vector8.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector8;
  return proto.ubii.dataStructure.Vector8.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector8} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector8}
 */
proto.ubii.dataStructure.Vector8.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV0(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV2(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV3(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV4(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV5(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV6(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV7(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Vector8.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector8.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector8} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector8.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getV0();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getV1();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getV2();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getV3();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getV4();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getV5();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getV6();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getV7();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional double v0 = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV0 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV0 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double v1 = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV1 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double v2 = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV2 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV2 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double v3 = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV3 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV3 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double v4 = 5;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV4 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV4 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double v5 = 6;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV5 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV5 = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double v6 = 7;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV6 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV6 = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double v7 = 8;
 * @return {number}
 */
proto.ubii.dataStructure.Vector8.prototype.getV7 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Vector8} returns this
 */
proto.ubii.dataStructure.Vector8.prototype.setV7 = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.ubii.dataStructure.HandGestureType = {
  REST: 0,
  FINGERS_SPREAD: 1,
  WAVE_IN: 2,
  WAVE_OUT: 3,
  FIST: 4,
  DOUBLE_TAP: 5
};

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
proto.ubii.dataStructure.MyoEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.MyoEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.MyoEvent.displayName = 'proto.ubii.dataStructure.MyoEvent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.MyoEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.MyoEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.MyoEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.MyoEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    emg: (f = msg.getEmg()) && proto.ubii.dataStructure.Vector8.toObject(includeInstance, f),
    orientation: (f = msg.getOrientation()) && proto.ubii.dataStructure.Quaternion.toObject(includeInstance, f),
    gyroscope: (f = msg.getGyroscope()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f),
    accelerometer: (f = msg.getAccelerometer()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f),
    gesture: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ubii.dataStructure.MyoEvent}
 */
proto.ubii.dataStructure.MyoEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.MyoEvent;
  return proto.ubii.dataStructure.MyoEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.MyoEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.MyoEvent}
 */
proto.ubii.dataStructure.MyoEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Vector8;
      reader.readMessage(value,proto.ubii.dataStructure.Vector8.deserializeBinaryFromReader);
      msg.setEmg(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Quaternion;
      reader.readMessage(value,proto.ubii.dataStructure.Quaternion.deserializeBinaryFromReader);
      msg.setOrientation(value);
      break;
    case 3:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setGyroscope(value);
      break;
    case 4:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setAccelerometer(value);
      break;
    case 5:
      var value = /** @type {!proto.ubii.dataStructure.HandGestureType} */ (reader.readEnum());
      msg.setGesture(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.MyoEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.MyoEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.MyoEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.MyoEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmg();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.dataStructure.Vector8.serializeBinaryToWriter
    );
  }
  f = message.getOrientation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getGyroscope();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getAccelerometer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getGesture();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional Vector8 emg = 1;
 * @return {?proto.ubii.dataStructure.Vector8}
 */
proto.ubii.dataStructure.MyoEvent.prototype.getEmg = function() {
  return /** @type{?proto.ubii.dataStructure.Vector8} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector8, 1));
};


/**
 * @param {?proto.ubii.dataStructure.Vector8|undefined} value
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
*/
proto.ubii.dataStructure.MyoEvent.prototype.setEmg = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
 */
proto.ubii.dataStructure.MyoEvent.prototype.clearEmg = function() {
  return this.setEmg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.MyoEvent.prototype.hasEmg = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion orientation = 2;
 * @return {?proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.dataStructure.MyoEvent.prototype.getOrientation = function() {
  return /** @type{?proto.ubii.dataStructure.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Quaternion, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Quaternion|undefined} value
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
*/
proto.ubii.dataStructure.MyoEvent.prototype.setOrientation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
 */
proto.ubii.dataStructure.MyoEvent.prototype.clearOrientation = function() {
  return this.setOrientation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.MyoEvent.prototype.hasOrientation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector3 gyroscope = 3;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.MyoEvent.prototype.getGyroscope = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 3));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
*/
proto.ubii.dataStructure.MyoEvent.prototype.setGyroscope = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
 */
proto.ubii.dataStructure.MyoEvent.prototype.clearGyroscope = function() {
  return this.setGyroscope(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.MyoEvent.prototype.hasGyroscope = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Vector3 accelerometer = 4;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.MyoEvent.prototype.getAccelerometer = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 4));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
*/
proto.ubii.dataStructure.MyoEvent.prototype.setAccelerometer = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
 */
proto.ubii.dataStructure.MyoEvent.prototype.clearAccelerometer = function() {
  return this.setAccelerometer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.MyoEvent.prototype.hasAccelerometer = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional HandGestureType gesture = 5;
 * @return {!proto.ubii.dataStructure.HandGestureType}
 */
proto.ubii.dataStructure.MyoEvent.prototype.getGesture = function() {
  return /** @type {!proto.ubii.dataStructure.HandGestureType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ubii.dataStructure.HandGestureType} value
 * @return {!proto.ubii.dataStructure.MyoEvent} returns this
 */
proto.ubii.dataStructure.MyoEvent.prototype.setGesture = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


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
proto.ubii.dataStructure.Pose2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.dataStructure.Pose2D.oneofGroups_);
};
goog.inherits(proto.ubii.dataStructure.Pose2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Pose2D.displayName = 'proto.ubii.dataStructure.Pose2D';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.dataStructure.Pose2D.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ubii.dataStructure.Pose2D.OrientationCase = {
  ORIENTATION_NOT_SET: 0,
  DIRECTION: 2,
  ANGLE: 3
};

/**
 * @return {proto.ubii.dataStructure.Pose2D.OrientationCase}
 */
proto.ubii.dataStructure.Pose2D.prototype.getOrientationCase = function() {
  return /** @type {proto.ubii.dataStructure.Pose2D.OrientationCase} */(jspb.Message.computeOneofCase(this, proto.ubii.dataStructure.Pose2D.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Pose2D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Pose2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Pose2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Pose2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.ubii.dataStructure.Vector2.toObject(includeInstance, f),
    direction: (f = msg.getDirection()) && proto.ubii.dataStructure.Vector2.toObject(includeInstance, f),
    angle: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.dataStructure.Pose2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Pose2D;
  return proto.ubii.dataStructure.Pose2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Pose2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.dataStructure.Pose2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Vector2;
      reader.readMessage(value,proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Vector2;
      reader.readMessage(value,proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAngle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Pose2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Pose2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Pose2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Pose2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.dataStructure.Vector2.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Vector2.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional Vector2 position = 1;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Pose2D.prototype.getPosition = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector2, 1));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
*/
proto.ubii.dataStructure.Pose2D.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
 */
proto.ubii.dataStructure.Pose2D.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose2D.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vector2 direction = 2;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Pose2D.prototype.getDirection = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector2, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
*/
proto.ubii.dataStructure.Pose2D.prototype.setDirection = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.dataStructure.Pose2D.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
 */
proto.ubii.dataStructure.Pose2D.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose2D.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float angle = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Pose2D.prototype.getAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
 */
proto.ubii.dataStructure.Pose2D.prototype.setAngle = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ubii.dataStructure.Pose2D.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose2D} returns this
 */
proto.ubii.dataStructure.Pose2D.prototype.clearAngle = function() {
  return jspb.Message.setOneofField(this, 3, proto.ubii.dataStructure.Pose2D.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose2D.prototype.hasAngle = function() {
  return jspb.Message.getField(this, 3) != null;
};


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
proto.ubii.dataStructure.Pose3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.dataStructure.Pose3D.oneofGroups_);
};
goog.inherits(proto.ubii.dataStructure.Pose3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Pose3D.displayName = 'proto.ubii.dataStructure.Pose3D';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.dataStructure.Pose3D.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ubii.dataStructure.Pose3D.OrientationCase = {
  ORIENTATION_NOT_SET: 0,
  QUATERNION: 2,
  EULER: 3
};

/**
 * @return {proto.ubii.dataStructure.Pose3D.OrientationCase}
 */
proto.ubii.dataStructure.Pose3D.prototype.getOrientationCase = function() {
  return /** @type {proto.ubii.dataStructure.Pose3D.OrientationCase} */(jspb.Message.computeOneofCase(this, proto.ubii.dataStructure.Pose3D.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Pose3D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Pose3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Pose3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Pose3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f),
    quaternion: (f = msg.getQuaternion()) && proto.ubii.dataStructure.Quaternion.toObject(includeInstance, f),
    euler: (f = msg.getEuler()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f)
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
 * @return {!proto.ubii.dataStructure.Pose3D}
 */
proto.ubii.dataStructure.Pose3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Pose3D;
  return proto.ubii.dataStructure.Pose3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Pose3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Pose3D}
 */
proto.ubii.dataStructure.Pose3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Quaternion;
      reader.readMessage(value,proto.ubii.dataStructure.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternion(value);
      break;
    case 3:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setEuler(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Pose3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Pose3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Pose3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Pose3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getQuaternion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getEuler();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vector3 position = 1;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Pose3D.prototype.getPosition = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 1));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
*/
proto.ubii.dataStructure.Pose3D.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
 */
proto.ubii.dataStructure.Pose3D.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose3D.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Quaternion quaternion = 2;
 * @return {?proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.dataStructure.Pose3D.prototype.getQuaternion = function() {
  return /** @type{?proto.ubii.dataStructure.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Quaternion, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Quaternion|undefined} value
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
*/
proto.ubii.dataStructure.Pose3D.prototype.setQuaternion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.dataStructure.Pose3D.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
 */
proto.ubii.dataStructure.Pose3D.prototype.clearQuaternion = function() {
  return this.setQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose3D.prototype.hasQuaternion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector3 euler = 3;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Pose3D.prototype.getEuler = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 3));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
*/
proto.ubii.dataStructure.Pose3D.prototype.setEuler = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.dataStructure.Pose3D.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Pose3D} returns this
 */
proto.ubii.dataStructure.Pose3D.prototype.clearEuler = function() {
  return this.setEuler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Pose3D.prototype.hasEuler = function() {
  return jspb.Message.getField(this, 3) != null;
};


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
proto.ubii.dataStructure.Object2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Object2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object2D.displayName = 'proto.ubii.dataStructure.Object2D';
}
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
proto.ubii.dataStructure.Object2DList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Object2DList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Object2DList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object2DList.displayName = 'proto.ubii.dataStructure.Object2DList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Object2D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pose: (f = msg.getPose()) && proto.ubii.dataStructure.Pose2D.toObject(includeInstance, f),
    size: (f = msg.getSize()) && proto.ubii.dataStructure.Vector2.toObject(includeInstance, f),
    userDataJson: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object2D;
  return proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Pose2D;
      reader.readMessage(value,proto.ubii.dataStructure.Pose2D.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = new proto.ubii.dataStructure.Vector2;
      reader.readMessage(value,proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserDataJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Object2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Pose2D.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.dataStructure.Vector2.serializeBinaryToWriter
    );
  }
  f = message.getUserDataJson();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.dataStructure.Object2D.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pose2D pose = 2;
 * @return {?proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.dataStructure.Object2D.prototype.getPose = function() {
  return /** @type{?proto.ubii.dataStructure.Pose2D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Pose2D, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Pose2D|undefined} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
*/
proto.ubii.dataStructure.Object2D.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object2D.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector2 size = 3;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Object2D.prototype.getSize = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector2, 3));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
*/
proto.ubii.dataStructure.Object2D.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object2D.prototype.hasSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user_data_json = 4;
 * @return {string}
 */
proto.ubii.dataStructure.Object2D.prototype.getUserDataJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.setUserDataJson = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Object2DList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Object2DList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object2DList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object2DList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2DList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.dataStructure.Object2D.toObject, includeInstance)
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
 * @return {!proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.dataStructure.Object2DList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object2DList;
  return proto.ubii.dataStructure.Object2DList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object2DList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.dataStructure.Object2DList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Object2D;
      reader.readMessage(value,proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Object2DList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object2DList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object2DList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2DList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.dataStructure.Object2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object2D elements = 1;
 * @return {!Array<!proto.ubii.dataStructure.Object2D>}
 */
proto.ubii.dataStructure.Object2DList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.dataStructure.Object2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.dataStructure.Object2D, 1));
};


/**
 * @param {!Array<!proto.ubii.dataStructure.Object2D>} value
 * @return {!proto.ubii.dataStructure.Object2DList} returns this
*/
proto.ubii.dataStructure.Object2DList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.dataStructure.Object2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2DList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.dataStructure.Object2D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.Object2DList} returns this
 */
proto.ubii.dataStructure.Object2DList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.dataStructure.Object3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Object3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object3D.displayName = 'proto.ubii.dataStructure.Object3D';
}
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
proto.ubii.dataStructure.Object3DList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Object3DList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Object3DList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object3DList.displayName = 'proto.ubii.dataStructure.Object3DList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Object3D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object3D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pose: (f = msg.getPose()) && proto.ubii.dataStructure.Pose3D.toObject(includeInstance, f),
    size: (f = msg.getSize()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f),
    userDataJson: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ubii.dataStructure.Object3D}
 */
proto.ubii.dataStructure.Object3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object3D;
  return proto.ubii.dataStructure.Object3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object3D}
 */
proto.ubii.dataStructure.Object3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ubii.dataStructure.Pose3D;
      reader.readMessage(value,proto.ubii.dataStructure.Pose3D.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserDataJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Object3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object3D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.dataStructure.Pose3D.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getUserDataJson();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.dataStructure.Object3D.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object3D} returns this
 */
proto.ubii.dataStructure.Object3D.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pose3D pose = 2;
 * @return {?proto.ubii.dataStructure.Pose3D}
 */
proto.ubii.dataStructure.Object3D.prototype.getPose = function() {
  return /** @type{?proto.ubii.dataStructure.Pose3D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Pose3D, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Pose3D|undefined} value
 * @return {!proto.ubii.dataStructure.Object3D} returns this
*/
proto.ubii.dataStructure.Object3D.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object3D} returns this
 */
proto.ubii.dataStructure.Object3D.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object3D.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector3 size = 3;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Object3D.prototype.getSize = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 3));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.dataStructure.Object3D} returns this
*/
proto.ubii.dataStructure.Object3D.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object3D} returns this
 */
proto.ubii.dataStructure.Object3D.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object3D.prototype.hasSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user_data_json = 4;
 * @return {string}
 */
proto.ubii.dataStructure.Object3D.prototype.getUserDataJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object3D} returns this
 */
proto.ubii.dataStructure.Object3D.prototype.setUserDataJson = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Object3DList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Object3DList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object3DList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object3DList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object3DList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.dataStructure.Object3D.toObject, includeInstance)
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
 * @return {!proto.ubii.dataStructure.Object3DList}
 */
proto.ubii.dataStructure.Object3DList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object3DList;
  return proto.ubii.dataStructure.Object3DList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object3DList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object3DList}
 */
proto.ubii.dataStructure.Object3DList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Object3D;
      reader.readMessage(value,proto.ubii.dataStructure.Object3D.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Object3DList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object3DList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object3DList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object3DList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.dataStructure.Object3D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object3D elements = 1;
 * @return {!Array<!proto.ubii.dataStructure.Object3D>}
 */
proto.ubii.dataStructure.Object3DList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.dataStructure.Object3D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.dataStructure.Object3D, 1));
};


/**
 * @param {!Array<!proto.ubii.dataStructure.Object3D>} value
 * @return {!proto.ubii.dataStructure.Object3DList} returns this
*/
proto.ubii.dataStructure.Object3DList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.dataStructure.Object3D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Object3D}
 */
proto.ubii.dataStructure.Object3DList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.dataStructure.Object3D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.Object3DList} returns this
 */
proto.ubii.dataStructure.Object3DList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.dataStructure.Image2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Image2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Image2D.displayName = 'proto.ubii.dataStructure.Image2D';
}
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
proto.ubii.dataStructure.Image2DList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Image2DList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Image2DList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Image2DList.displayName = 'proto.ubii.dataStructure.Image2DList';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Image2D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Image2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Image2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Image2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dataFormat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    data: msg.getData_asB64()
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
 * @return {!proto.ubii.dataStructure.Image2D}
 */
proto.ubii.dataStructure.Image2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Image2D;
  return proto.ubii.dataStructure.Image2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Image2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Image2D}
 */
proto.ubii.dataStructure.Image2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {!proto.ubii.dataStructure.Image2D.DataFormat} */ (reader.readEnum());
      msg.setDataFormat(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Image2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Image2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Image2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Image2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDataFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ubii.dataStructure.Image2D.DataFormat = {
  GRAY8: 0,
  RGB8: 1,
  RGBA8: 2
};

/**
 * optional int32 width = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Image2D.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Image2D} returns this
 */
proto.ubii.dataStructure.Image2D.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Image2D.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Image2D} returns this
 */
proto.ubii.dataStructure.Image2D.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DataFormat data_format = 3;
 * @return {!proto.ubii.dataStructure.Image2D.DataFormat}
 */
proto.ubii.dataStructure.Image2D.prototype.getDataFormat = function() {
  return /** @type {!proto.ubii.dataStructure.Image2D.DataFormat} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ubii.dataStructure.Image2D.DataFormat} value
 * @return {!proto.ubii.dataStructure.Image2D} returns this
 */
proto.ubii.dataStructure.Image2D.prototype.setDataFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ubii.dataStructure.Image2D.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.ubii.dataStructure.Image2D.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Image2D.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ubii.dataStructure.Image2D} returns this
 */
proto.ubii.dataStructure.Image2D.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Image2DList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Image2DList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Image2DList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Image2DList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Image2DList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.dataStructure.Image2D.toObject, includeInstance)
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
 * @return {!proto.ubii.dataStructure.Image2DList}
 */
proto.ubii.dataStructure.Image2DList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Image2DList;
  return proto.ubii.dataStructure.Image2DList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Image2DList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Image2DList}
 */
proto.ubii.dataStructure.Image2DList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Image2D;
      reader.readMessage(value,proto.ubii.dataStructure.Image2D.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.dataStructure.Image2DList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Image2DList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Image2DList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Image2DList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.dataStructure.Image2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Image2D elements = 1;
 * @return {!Array<!proto.ubii.dataStructure.Image2D>}
 */
proto.ubii.dataStructure.Image2DList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.dataStructure.Image2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.dataStructure.Image2D, 1));
};


/**
 * @param {!Array<!proto.ubii.dataStructure.Image2D>} value
 * @return {!proto.ubii.dataStructure.Image2DList} returns this
*/
proto.ubii.dataStructure.Image2DList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.dataStructure.Image2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Image2D}
 */
proto.ubii.dataStructure.Image2DList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.dataStructure.Image2D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.Image2DList} returns this
 */
proto.ubii.dataStructure.Image2DList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.sessions.InteractionInputMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.sessions.InteractionInputMapping.oneofGroups_);
};
goog.inherits(proto.ubii.sessions.InteractionInputMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.InteractionInputMapping.displayName = 'proto.ubii.sessions.InteractionInputMapping';
}
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
proto.ubii.sessions.InteractionInputMappingList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.InteractionInputMappingList.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.InteractionInputMappingList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.InteractionInputMappingList.displayName = 'proto.ubii.sessions.InteractionInputMappingList';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.sessions.InteractionInputMapping.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ubii.sessions.InteractionInputMapping.TopicSourceCase = {
  TOPIC_SOURCE_NOT_SET: 0,
  TOPIC: 2,
  TOPIC_MUX: 3
};

/**
 * @return {proto.ubii.sessions.InteractionInputMapping.TopicSourceCase}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.getTopicSourceCase = function() {
  return /** @type {proto.ubii.sessions.InteractionInputMapping.TopicSourceCase} */(jspb.Message.computeOneofCase(this, proto.ubii.sessions.InteractionInputMapping.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.InteractionInputMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.InteractionInputMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionInputMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topicMux: (f = msg.getTopicMux()) && proto.ubii.devices.TopicMux.toObject(includeInstance, f)
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
 * @return {!proto.ubii.sessions.InteractionInputMapping}
 */
proto.ubii.sessions.InteractionInputMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.InteractionInputMapping;
  return proto.ubii.sessions.InteractionInputMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.InteractionInputMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.InteractionInputMapping}
 */
proto.ubii.sessions.InteractionInputMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 3:
      var value = new proto.ubii.devices.TopicMux;
      reader.readMessage(value,proto.ubii.devices.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.InteractionInputMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.InteractionInputMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionInputMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.devices.TopicMux.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.InteractionInputMapping} returns this
 */
proto.ubii.sessions.InteractionInputMapping.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.InteractionInputMapping} returns this
 */
proto.ubii.sessions.InteractionInputMapping.prototype.setTopic = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ubii.sessions.InteractionInputMapping.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.sessions.InteractionInputMapping} returns this
 */
proto.ubii.sessions.InteractionInputMapping.prototype.clearTopic = function() {
  return jspb.Message.setOneofField(this, 2, proto.ubii.sessions.InteractionInputMapping.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 3;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicMux, 3));
};


/**
 * @param {?proto.ubii.devices.TopicMux|undefined} value
 * @return {!proto.ubii.sessions.InteractionInputMapping} returns this
*/
proto.ubii.sessions.InteractionInputMapping.prototype.setTopicMux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.sessions.InteractionInputMapping.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.sessions.InteractionInputMapping} returns this
 */
proto.ubii.sessions.InteractionInputMapping.prototype.clearTopicMux = function() {
  return this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.sessions.InteractionInputMapping.prototype.hasTopicMux = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.InteractionInputMappingList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.InteractionInputMappingList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.InteractionInputMappingList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.InteractionInputMappingList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionInputMappingList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.sessions.InteractionInputMapping.toObject, includeInstance)
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
 * @return {!proto.ubii.sessions.InteractionInputMappingList}
 */
proto.ubii.sessions.InteractionInputMappingList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.InteractionInputMappingList;
  return proto.ubii.sessions.InteractionInputMappingList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.InteractionInputMappingList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.InteractionInputMappingList}
 */
proto.ubii.sessions.InteractionInputMappingList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.sessions.InteractionInputMapping;
      reader.readMessage(value,proto.ubii.sessions.InteractionInputMapping.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.InteractionInputMappingList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.InteractionInputMappingList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.InteractionInputMappingList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionInputMappingList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.sessions.InteractionInputMapping.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InteractionInputMapping elements = 1;
 * @return {!Array<!proto.ubii.sessions.InteractionInputMapping>}
 */
proto.ubii.sessions.InteractionInputMappingList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.InteractionInputMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.InteractionInputMapping, 1));
};


/**
 * @param {!Array<!proto.ubii.sessions.InteractionInputMapping>} value
 * @return {!proto.ubii.sessions.InteractionInputMappingList} returns this
*/
proto.ubii.sessions.InteractionInputMappingList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.sessions.InteractionInputMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.InteractionInputMapping}
 */
proto.ubii.sessions.InteractionInputMappingList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.sessions.InteractionInputMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.InteractionInputMappingList} returns this
 */
proto.ubii.sessions.InteractionInputMappingList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.sessions.InteractionOutputMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.sessions.InteractionOutputMapping.oneofGroups_);
};
goog.inherits(proto.ubii.sessions.InteractionOutputMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.InteractionOutputMapping.displayName = 'proto.ubii.sessions.InteractionOutputMapping';
}
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
proto.ubii.sessions.InteractionOutputMappingList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.InteractionOutputMappingList.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.InteractionOutputMappingList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.InteractionOutputMappingList.displayName = 'proto.ubii.sessions.InteractionOutputMappingList';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.sessions.InteractionOutputMapping.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ubii.sessions.InteractionOutputMapping.TopicDestinationCase = {
  TOPIC_DESTINATION_NOT_SET: 0,
  TOPIC: 2,
  TOPIC_DEMUX: 3
};

/**
 * @return {proto.ubii.sessions.InteractionOutputMapping.TopicDestinationCase}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.getTopicDestinationCase = function() {
  return /** @type {proto.ubii.sessions.InteractionOutputMapping.TopicDestinationCase} */(jspb.Message.computeOneofCase(this, proto.ubii.sessions.InteractionOutputMapping.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.InteractionOutputMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.InteractionOutputMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionOutputMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
    topicDemux: (f = msg.getTopicDemux()) && proto.ubii.devices.TopicDemux.toObject(includeInstance, f)
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
 * @return {!proto.ubii.sessions.InteractionOutputMapping}
 */
proto.ubii.sessions.InteractionOutputMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.InteractionOutputMapping;
  return proto.ubii.sessions.InteractionOutputMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.InteractionOutputMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.InteractionOutputMapping}
 */
proto.ubii.sessions.InteractionOutputMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 3:
      var value = new proto.ubii.devices.TopicDemux;
      reader.readMessage(value,proto.ubii.devices.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.InteractionOutputMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.InteractionOutputMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionOutputMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.devices.TopicDemux.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.InteractionOutputMapping} returns this
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.InteractionOutputMapping} returns this
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.setTopic = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ubii.sessions.InteractionOutputMapping.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.sessions.InteractionOutputMapping} returns this
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.clearTopic = function() {
  return jspb.Message.setOneofField(this, 2, proto.ubii.sessions.InteractionOutputMapping.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.devices.TopicDemux topic_demux = 3;
 * @return {?proto.ubii.devices.TopicDemux}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.getTopicDemux = function() {
  return /** @type{?proto.ubii.devices.TopicDemux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicDemux, 3));
};


/**
 * @param {?proto.ubii.devices.TopicDemux|undefined} value
 * @return {!proto.ubii.sessions.InteractionOutputMapping} returns this
*/
proto.ubii.sessions.InteractionOutputMapping.prototype.setTopicDemux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.sessions.InteractionOutputMapping.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.sessions.InteractionOutputMapping} returns this
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.clearTopicDemux = function() {
  return this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.sessions.InteractionOutputMapping.prototype.hasTopicDemux = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.InteractionOutputMappingList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.InteractionOutputMappingList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.InteractionOutputMappingList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.InteractionOutputMappingList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionOutputMappingList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.sessions.InteractionOutputMapping.toObject, includeInstance)
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
 * @return {!proto.ubii.sessions.InteractionOutputMappingList}
 */
proto.ubii.sessions.InteractionOutputMappingList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.InteractionOutputMappingList;
  return proto.ubii.sessions.InteractionOutputMappingList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.InteractionOutputMappingList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.InteractionOutputMappingList}
 */
proto.ubii.sessions.InteractionOutputMappingList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.sessions.InteractionOutputMapping;
      reader.readMessage(value,proto.ubii.sessions.InteractionOutputMapping.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.InteractionOutputMappingList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.InteractionOutputMappingList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.InteractionOutputMappingList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.InteractionOutputMappingList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.sessions.InteractionOutputMapping.serializeBinaryToWriter
    );
  }
};


/**
 * repeated InteractionOutputMapping elements = 1;
 * @return {!Array<!proto.ubii.sessions.InteractionOutputMapping>}
 */
proto.ubii.sessions.InteractionOutputMappingList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.InteractionOutputMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.InteractionOutputMapping, 1));
};


/**
 * @param {!Array<!proto.ubii.sessions.InteractionOutputMapping>} value
 * @return {!proto.ubii.sessions.InteractionOutputMappingList} returns this
*/
proto.ubii.sessions.InteractionOutputMappingList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.sessions.InteractionOutputMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.InteractionOutputMapping}
 */
proto.ubii.sessions.InteractionOutputMappingList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.sessions.InteractionOutputMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.InteractionOutputMappingList} returns this
 */
proto.ubii.sessions.InteractionOutputMappingList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.sessions.IOMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.IOMapping.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.IOMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.IOMapping.displayName = 'proto.ubii.sessions.IOMapping';
}
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
proto.ubii.sessions.IOMappingList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.IOMappingList.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.IOMappingList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.IOMappingList.displayName = 'proto.ubii.sessions.IOMappingList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.IOMapping.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.IOMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.IOMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.IOMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.IOMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    interactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputMappingsList: jspb.Message.toObjectList(msg.getInputMappingsList(),
    proto.ubii.sessions.InteractionInputMapping.toObject, includeInstance),
    outputMappingsList: jspb.Message.toObjectList(msg.getOutputMappingsList(),
    proto.ubii.sessions.InteractionOutputMapping.toObject, includeInstance)
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
 * @return {!proto.ubii.sessions.IOMapping}
 */
proto.ubii.sessions.IOMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.IOMapping;
  return proto.ubii.sessions.IOMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.IOMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.IOMapping}
 */
proto.ubii.sessions.IOMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractionId(value);
      break;
    case 2:
      var value = new proto.ubii.sessions.InteractionInputMapping;
      reader.readMessage(value,proto.ubii.sessions.InteractionInputMapping.deserializeBinaryFromReader);
      msg.addInputMappings(value);
      break;
    case 3:
      var value = new proto.ubii.sessions.InteractionOutputMapping;
      reader.readMessage(value,proto.ubii.sessions.InteractionOutputMapping.deserializeBinaryFromReader);
      msg.addOutputMappings(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.IOMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.IOMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.IOMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.IOMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInteractionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ubii.sessions.InteractionInputMapping.serializeBinaryToWriter
    );
  }
  f = message.getOutputMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ubii.sessions.InteractionOutputMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string interaction_id = 1;
 * @return {string}
 */
proto.ubii.sessions.IOMapping.prototype.getInteractionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.IOMapping} returns this
 */
proto.ubii.sessions.IOMapping.prototype.setInteractionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated InteractionInputMapping input_mappings = 2;
 * @return {!Array<!proto.ubii.sessions.InteractionInputMapping>}
 */
proto.ubii.sessions.IOMapping.prototype.getInputMappingsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.InteractionInputMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.InteractionInputMapping, 2));
};


/**
 * @param {!Array<!proto.ubii.sessions.InteractionInputMapping>} value
 * @return {!proto.ubii.sessions.IOMapping} returns this
*/
proto.ubii.sessions.IOMapping.prototype.setInputMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ubii.sessions.InteractionInputMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.InteractionInputMapping}
 */
proto.ubii.sessions.IOMapping.prototype.addInputMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ubii.sessions.InteractionInputMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.IOMapping} returns this
 */
proto.ubii.sessions.IOMapping.prototype.clearInputMappingsList = function() {
  return this.setInputMappingsList([]);
};


/**
 * repeated InteractionOutputMapping output_mappings = 3;
 * @return {!Array<!proto.ubii.sessions.InteractionOutputMapping>}
 */
proto.ubii.sessions.IOMapping.prototype.getOutputMappingsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.InteractionOutputMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.InteractionOutputMapping, 3));
};


/**
 * @param {!Array<!proto.ubii.sessions.InteractionOutputMapping>} value
 * @return {!proto.ubii.sessions.IOMapping} returns this
*/
proto.ubii.sessions.IOMapping.prototype.setOutputMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ubii.sessions.InteractionOutputMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.InteractionOutputMapping}
 */
proto.ubii.sessions.IOMapping.prototype.addOutputMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ubii.sessions.InteractionOutputMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.IOMapping} returns this
 */
proto.ubii.sessions.IOMapping.prototype.clearOutputMappingsList = function() {
  return this.setOutputMappingsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.IOMappingList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.IOMappingList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.IOMappingList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.IOMappingList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.IOMappingList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.sessions.IOMapping.toObject, includeInstance)
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
 * @return {!proto.ubii.sessions.IOMappingList}
 */
proto.ubii.sessions.IOMappingList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.IOMappingList;
  return proto.ubii.sessions.IOMappingList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.IOMappingList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.IOMappingList}
 */
proto.ubii.sessions.IOMappingList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.sessions.IOMapping;
      reader.readMessage(value,proto.ubii.sessions.IOMapping.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.IOMappingList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.IOMappingList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.IOMappingList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.IOMappingList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.sessions.IOMapping.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IOMapping elements = 1;
 * @return {!Array<!proto.ubii.sessions.IOMapping>}
 */
proto.ubii.sessions.IOMappingList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.IOMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.IOMapping, 1));
};


/**
 * @param {!Array<!proto.ubii.sessions.IOMapping>} value
 * @return {!proto.ubii.sessions.IOMappingList} returns this
*/
proto.ubii.sessions.IOMappingList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.sessions.IOMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.IOMapping}
 */
proto.ubii.sessions.IOMappingList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.sessions.IOMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.IOMappingList} returns this
 */
proto.ubii.sessions.IOMappingList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.sessions.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.Session.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.Session.displayName = 'proto.ubii.sessions.Session';
}
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
proto.ubii.sessions.SessionList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.sessions.SessionList.repeatedFields_, null);
};
goog.inherits(proto.ubii.sessions.SessionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.sessions.SessionList.displayName = 'proto.ubii.sessions.SessionList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.Session.repeatedFields_ = [3,4,5,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    interactionsList: jspb.Message.toObjectList(msg.getInteractionsList(),
    proto.ubii.interactions.Interaction.toObject, includeInstance),
    ioMappingsList: jspb.Message.toObjectList(msg.getIoMappingsList(),
    proto.ubii.sessions.IOMapping.toObject, includeInstance),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    authorsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    processMode: jspb.Message.getFieldWithDefault(msg, 8, 0),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    editable: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
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
 * @return {!proto.ubii.sessions.Session}
 */
proto.ubii.sessions.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.Session;
  return proto.ubii.sessions.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.Session}
 */
proto.ubii.sessions.Session.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.ubii.interactions.Interaction;
      reader.readMessage(value,proto.ubii.interactions.Interaction.deserializeBinaryFromReader);
      msg.addInteractions(value);
      break;
    case 4:
      var value = new proto.ubii.sessions.IOMapping;
      reader.readMessage(value,proto.ubii.sessions.IOMapping.deserializeBinaryFromReader);
      msg.addIoMappings(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthors(value);
      break;
    case 8:
      var value = /** @type {!proto.ubii.sessions.ProcessMode} */ (reader.readEnum());
      msg.setProcessMode(value);
      break;
    case 9:
      var value = /** @type {!proto.ubii.sessions.SessionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEditable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInteractionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ubii.interactions.Interaction.serializeBinaryToWriter
    );
  }
  f = message.getIoMappingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ubii.sessions.IOMapping.serializeBinaryToWriter
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAuthorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getProcessMode();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getEditable();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.sessions.Session.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.sessions.Session.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ubii.interactions.Interaction interactions = 3;
 * @return {!Array<!proto.ubii.interactions.Interaction>}
 */
proto.ubii.sessions.Session.prototype.getInteractionsList = function() {
  return /** @type{!Array<!proto.ubii.interactions.Interaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.interactions.Interaction, 3));
};


/**
 * @param {!Array<!proto.ubii.interactions.Interaction>} value
 * @return {!proto.ubii.sessions.Session} returns this
*/
proto.ubii.sessions.Session.prototype.setInteractionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ubii.interactions.Interaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.interactions.Interaction}
 */
proto.ubii.sessions.Session.prototype.addInteractions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ubii.interactions.Interaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.clearInteractionsList = function() {
  return this.setInteractionsList([]);
};


/**
 * repeated IOMapping io_mappings = 4;
 * @return {!Array<!proto.ubii.sessions.IOMapping>}
 */
proto.ubii.sessions.Session.prototype.getIoMappingsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.IOMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.IOMapping, 4));
};


/**
 * @param {!Array<!proto.ubii.sessions.IOMapping>} value
 * @return {!proto.ubii.sessions.Session} returns this
*/
proto.ubii.sessions.Session.prototype.setIoMappingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ubii.sessions.IOMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.IOMapping}
 */
proto.ubii.sessions.Session.prototype.addIoMappings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ubii.sessions.IOMapping, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.clearIoMappingsList = function() {
  return this.setIoMappingsList([]);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.ubii.sessions.Session.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.ubii.sessions.Session.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string authors = 7;
 * @return {!Array<string>}
 */
proto.ubii.sessions.Session.prototype.getAuthorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setAuthorsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.addAuthors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.clearAuthorsList = function() {
  return this.setAuthorsList([]);
};


/**
 * optional ProcessMode process_mode = 8;
 * @return {!proto.ubii.sessions.ProcessMode}
 */
proto.ubii.sessions.Session.prototype.getProcessMode = function() {
  return /** @type {!proto.ubii.sessions.ProcessMode} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ubii.sessions.ProcessMode} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setProcessMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional SessionStatus status = 9;
 * @return {!proto.ubii.sessions.SessionStatus}
 */
proto.ubii.sessions.Session.prototype.getStatus = function() {
  return /** @type {!proto.ubii.sessions.SessionStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.ubii.sessions.SessionStatus} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional bool editable = 10;
 * @return {boolean}
 */
proto.ubii.sessions.Session.prototype.getEditable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ubii.sessions.Session} returns this
 */
proto.ubii.sessions.Session.prototype.setEditable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.sessions.SessionList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.sessions.SessionList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.sessions.SessionList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.sessions.SessionList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.SessionList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.sessions.Session.toObject, includeInstance)
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
 * @return {!proto.ubii.sessions.SessionList}
 */
proto.ubii.sessions.SessionList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.sessions.SessionList;
  return proto.ubii.sessions.SessionList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.sessions.SessionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.sessions.SessionList}
 */
proto.ubii.sessions.SessionList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.sessions.Session;
      reader.readMessage(value,proto.ubii.sessions.Session.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.sessions.SessionList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.sessions.SessionList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.sessions.SessionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.sessions.SessionList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.sessions.Session.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Session elements = 1;
 * @return {!Array<!proto.ubii.sessions.Session>}
 */
proto.ubii.sessions.SessionList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.sessions.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.sessions.Session, 1));
};


/**
 * @param {!Array<!proto.ubii.sessions.Session>} value
 * @return {!proto.ubii.sessions.SessionList} returns this
*/
proto.ubii.sessions.SessionList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.sessions.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.sessions.Session}
 */
proto.ubii.sessions.SessionList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.sessions.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.sessions.SessionList} returns this
 */
proto.ubii.sessions.SessionList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


/**
 * @enum {number}
 */
proto.ubii.sessions.ProcessMode = {
  CYCLE_INTERACTIONS: 0,
  INDIVIDUAL_PROCESS_FREQUENCIES: 1
};

/**
 * @enum {number}
 */
proto.ubii.sessions.SessionStatus = {
  CREATED: 0,
  RUNNING: 1,
  PAUSED: 2,
  STOPPED: 3
};

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
proto.ubii.topicData.TopicDataRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.topicData.TopicDataRecord.oneofGroups_);
};
goog.inherits(proto.ubii.topicData.TopicDataRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.TopicDataRecord.displayName = 'proto.ubii.topicData.TopicDataRecord';
}
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
proto.ubii.topicData.TopicDataRecordList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.topicData.TopicDataRecordList.repeatedFields_, null);
};
goog.inherits(proto.ubii.topicData.TopicDataRecordList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.TopicDataRecordList.displayName = 'proto.ubii.topicData.TopicDataRecordList';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.topicData.TopicDataRecord.oneofGroups_ = [[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]];

/**
 * @enum {number}
 */
proto.ubii.topicData.TopicDataRecord.TypeCase = {
  TYPE_NOT_SET: 0,
  DOUBLE: 3,
  BOOL: 4,
  STRING: 5,
  VECTOR2: 6,
  VECTOR3: 7,
  VECTOR4: 8,
  QUATERNION: 9,
  MATRIX3X2: 10,
  MATRIX4X4: 11,
  COLOR: 12,
  TOUCH_EVENT: 13,
  KEY_EVENT: 14,
  MOUSE_EVENT: 15,
  MYO_EVENT: 16,
  POSE2D: 17,
  POSE3D: 18,
  OBJECT2D: 19,
  OBJECT3D: 20,
  OBJECT2D_LIST: 21,
  OBJECT3D_LIST: 22,
  INT32: 23,
  FLOAT: 24,
  INT32_LIST: 25,
  FLOAT_LIST: 26,
  DOUBLE_LIST: 27,
  STRING_LIST: 28,
  BOOL_LIST: 29,
  IMAGE2D: 30,
  IMAGE2D_LIST: 31,
  SESSION: 32,
  INTERACTION: 33
};

/**
 * @return {proto.ubii.topicData.TopicDataRecord.TypeCase}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.topicData.TopicDataRecord.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.topicData.TopicDataRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.TopicDataRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.TopicDataRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && proto.ubii.topicData.Timestamp.toObject(includeInstance, f),
    pb_double: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bool: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    string: jspb.Message.getFieldWithDefault(msg, 5, ""),
    vector2: (f = msg.getVector2()) && proto.ubii.dataStructure.Vector2.toObject(includeInstance, f),
    vector3: (f = msg.getVector3()) && proto.ubii.dataStructure.Vector3.toObject(includeInstance, f),
    vector4: (f = msg.getVector4()) && proto.ubii.dataStructure.Vector4.toObject(includeInstance, f),
    quaternion: (f = msg.getQuaternion()) && proto.ubii.dataStructure.Quaternion.toObject(includeInstance, f),
    matrix3x2: (f = msg.getMatrix3x2()) && proto.ubii.dataStructure.Matrix3x2.toObject(includeInstance, f),
    matrix4x4: (f = msg.getMatrix4x4()) && proto.ubii.dataStructure.Matrix4x4.toObject(includeInstance, f),
    color: (f = msg.getColor()) && proto.ubii.dataStructure.Color.toObject(includeInstance, f),
    touchEvent: (f = msg.getTouchEvent()) && proto.ubii.dataStructure.TouchEvent.toObject(includeInstance, f),
    keyEvent: (f = msg.getKeyEvent()) && proto.ubii.dataStructure.KeyEvent.toObject(includeInstance, f),
    mouseEvent: (f = msg.getMouseEvent()) && proto.ubii.dataStructure.MouseEvent.toObject(includeInstance, f),
    myoEvent: (f = msg.getMyoEvent()) && proto.ubii.dataStructure.MyoEvent.toObject(includeInstance, f),
    pose2d: (f = msg.getPose2d()) && proto.ubii.dataStructure.Pose2D.toObject(includeInstance, f),
    pose3d: (f = msg.getPose3d()) && proto.ubii.dataStructure.Pose3D.toObject(includeInstance, f),
    object2d: (f = msg.getObject2d()) && proto.ubii.dataStructure.Object2D.toObject(includeInstance, f),
    object3d: (f = msg.getObject3d()) && proto.ubii.dataStructure.Object3D.toObject(includeInstance, f),
    object2dList: (f = msg.getObject2dList()) && proto.ubii.dataStructure.Object2DList.toObject(includeInstance, f),
    object3dList: (f = msg.getObject3dList()) && proto.ubii.dataStructure.Object3DList.toObject(includeInstance, f),
    int32: jspb.Message.getFieldWithDefault(msg, 23, 0),
    pb_float: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
    int32List: (f = msg.getInt32List()) && proto.ubii.dataStructure.Int32List.toObject(includeInstance, f),
    floatList: (f = msg.getFloatList()) && proto.ubii.dataStructure.FloatList.toObject(includeInstance, f),
    doubleList: (f = msg.getDoubleList()) && proto.ubii.dataStructure.DoubleList.toObject(includeInstance, f),
    stringList: (f = msg.getStringList()) && proto.ubii.dataStructure.StringList.toObject(includeInstance, f),
    boolList: (f = msg.getBoolList()) && proto.ubii.dataStructure.BoolList.toObject(includeInstance, f),
    image2d: (f = msg.getImage2d()) && proto.ubii.dataStructure.Image2D.toObject(includeInstance, f),
    image2dList: (f = msg.getImage2dList()) && proto.ubii.dataStructure.Image2DList.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto.ubii.sessions.Session.toObject(includeInstance, f),
    interaction: (f = msg.getInteraction()) && proto.ubii.interactions.Interaction.toObject(includeInstance, f)
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
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.TopicDataRecord;
  return proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.TopicDataRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = new proto.ubii.topicData.Timestamp;
      reader.readMessage(value,proto.ubii.topicData.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDouble(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBool(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setString(value);
      break;
    case 6:
      var value = new proto.ubii.dataStructure.Vector2;
      reader.readMessage(value,proto.ubii.dataStructure.Vector2.deserializeBinaryFromReader);
      msg.setVector2(value);
      break;
    case 7:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
      msg.setVector3(value);
      break;
    case 8:
      var value = new proto.ubii.dataStructure.Vector4;
      reader.readMessage(value,proto.ubii.dataStructure.Vector4.deserializeBinaryFromReader);
      msg.setVector4(value);
      break;
    case 9:
      var value = new proto.ubii.dataStructure.Quaternion;
      reader.readMessage(value,proto.ubii.dataStructure.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternion(value);
      break;
    case 10:
      var value = new proto.ubii.dataStructure.Matrix3x2;
      reader.readMessage(value,proto.ubii.dataStructure.Matrix3x2.deserializeBinaryFromReader);
      msg.setMatrix3x2(value);
      break;
    case 11:
      var value = new proto.ubii.dataStructure.Matrix4x4;
      reader.readMessage(value,proto.ubii.dataStructure.Matrix4x4.deserializeBinaryFromReader);
      msg.setMatrix4x4(value);
      break;
    case 12:
      var value = new proto.ubii.dataStructure.Color;
      reader.readMessage(value,proto.ubii.dataStructure.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 13:
      var value = new proto.ubii.dataStructure.TouchEvent;
      reader.readMessage(value,proto.ubii.dataStructure.TouchEvent.deserializeBinaryFromReader);
      msg.setTouchEvent(value);
      break;
    case 14:
      var value = new proto.ubii.dataStructure.KeyEvent;
      reader.readMessage(value,proto.ubii.dataStructure.KeyEvent.deserializeBinaryFromReader);
      msg.setKeyEvent(value);
      break;
    case 15:
      var value = new proto.ubii.dataStructure.MouseEvent;
      reader.readMessage(value,proto.ubii.dataStructure.MouseEvent.deserializeBinaryFromReader);
      msg.setMouseEvent(value);
      break;
    case 16:
      var value = new proto.ubii.dataStructure.MyoEvent;
      reader.readMessage(value,proto.ubii.dataStructure.MyoEvent.deserializeBinaryFromReader);
      msg.setMyoEvent(value);
      break;
    case 17:
      var value = new proto.ubii.dataStructure.Pose2D;
      reader.readMessage(value,proto.ubii.dataStructure.Pose2D.deserializeBinaryFromReader);
      msg.setPose2d(value);
      break;
    case 18:
      var value = new proto.ubii.dataStructure.Pose3D;
      reader.readMessage(value,proto.ubii.dataStructure.Pose3D.deserializeBinaryFromReader);
      msg.setPose3d(value);
      break;
    case 19:
      var value = new proto.ubii.dataStructure.Object2D;
      reader.readMessage(value,proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader);
      msg.setObject2d(value);
      break;
    case 20:
      var value = new proto.ubii.dataStructure.Object3D;
      reader.readMessage(value,proto.ubii.dataStructure.Object3D.deserializeBinaryFromReader);
      msg.setObject3d(value);
      break;
    case 21:
      var value = new proto.ubii.dataStructure.Object2DList;
      reader.readMessage(value,proto.ubii.dataStructure.Object2DList.deserializeBinaryFromReader);
      msg.setObject2dList(value);
      break;
    case 22:
      var value = new proto.ubii.dataStructure.Object3DList;
      reader.readMessage(value,proto.ubii.dataStructure.Object3DList.deserializeBinaryFromReader);
      msg.setObject3dList(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloat(value);
      break;
    case 25:
      var value = new proto.ubii.dataStructure.Int32List;
      reader.readMessage(value,proto.ubii.dataStructure.Int32List.deserializeBinaryFromReader);
      msg.setInt32List(value);
      break;
    case 26:
      var value = new proto.ubii.dataStructure.FloatList;
      reader.readMessage(value,proto.ubii.dataStructure.FloatList.deserializeBinaryFromReader);
      msg.setFloatList(value);
      break;
    case 27:
      var value = new proto.ubii.dataStructure.DoubleList;
      reader.readMessage(value,proto.ubii.dataStructure.DoubleList.deserializeBinaryFromReader);
      msg.setDoubleList(value);
      break;
    case 28:
      var value = new proto.ubii.dataStructure.StringList;
      reader.readMessage(value,proto.ubii.dataStructure.StringList.deserializeBinaryFromReader);
      msg.setStringList(value);
      break;
    case 29:
      var value = new proto.ubii.dataStructure.BoolList;
      reader.readMessage(value,proto.ubii.dataStructure.BoolList.deserializeBinaryFromReader);
      msg.setBoolList(value);
      break;
    case 30:
      var value = new proto.ubii.dataStructure.Image2D;
      reader.readMessage(value,proto.ubii.dataStructure.Image2D.deserializeBinaryFromReader);
      msg.setImage2d(value);
      break;
    case 31:
      var value = new proto.ubii.dataStructure.Image2DList;
      reader.readMessage(value,proto.ubii.dataStructure.Image2DList.deserializeBinaryFromReader);
      msg.setImage2dList(value);
      break;
    case 32:
      var value = new proto.ubii.sessions.Session;
      reader.readMessage(value,proto.ubii.sessions.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 33:
      var value = new proto.ubii.interactions.Interaction;
      reader.readMessage(value,proto.ubii.interactions.Interaction.deserializeBinaryFromReader);
      msg.setInteraction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.topicData.TopicDataRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.TopicDataRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.topicData.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVector2();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ubii.dataStructure.Vector2.serializeBinaryToWriter
    );
  }
  f = message.getVector3();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getVector4();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ubii.dataStructure.Vector4.serializeBinaryToWriter
    );
  }
  f = message.getQuaternion();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ubii.dataStructure.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getMatrix3x2();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ubii.dataStructure.Matrix3x2.serializeBinaryToWriter
    );
  }
  f = message.getMatrix4x4();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ubii.dataStructure.Matrix4x4.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ubii.dataStructure.Color.serializeBinaryToWriter
    );
  }
  f = message.getTouchEvent();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ubii.dataStructure.TouchEvent.serializeBinaryToWriter
    );
  }
  f = message.getKeyEvent();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ubii.dataStructure.KeyEvent.serializeBinaryToWriter
    );
  }
  f = message.getMouseEvent();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ubii.dataStructure.MouseEvent.serializeBinaryToWriter
    );
  }
  f = message.getMyoEvent();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ubii.dataStructure.MyoEvent.serializeBinaryToWriter
    );
  }
  f = message.getPose2d();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ubii.dataStructure.Pose2D.serializeBinaryToWriter
    );
  }
  f = message.getPose3d();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ubii.dataStructure.Pose3D.serializeBinaryToWriter
    );
  }
  f = message.getObject2d();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.ubii.dataStructure.Object2D.serializeBinaryToWriter
    );
  }
  f = message.getObject3d();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.ubii.dataStructure.Object3D.serializeBinaryToWriter
    );
  }
  f = message.getObject2dList();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ubii.dataStructure.Object2DList.serializeBinaryToWriter
    );
  }
  f = message.getObject3dList();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.ubii.dataStructure.Object3DList.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = message.getInt32List();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.ubii.dataStructure.Int32List.serializeBinaryToWriter
    );
  }
  f = message.getFloatList();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.ubii.dataStructure.FloatList.serializeBinaryToWriter
    );
  }
  f = message.getDoubleList();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.ubii.dataStructure.DoubleList.serializeBinaryToWriter
    );
  }
  f = message.getStringList();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.ubii.dataStructure.StringList.serializeBinaryToWriter
    );
  }
  f = message.getBoolList();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.ubii.dataStructure.BoolList.serializeBinaryToWriter
    );
  }
  f = message.getImage2d();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.ubii.dataStructure.Image2D.serializeBinaryToWriter
    );
  }
  f = message.getImage2dList();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.ubii.dataStructure.Image2DList.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.ubii.sessions.Session.serializeBinaryToWriter
    );
  }
  f = message.getInteraction();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.ubii.interactions.Interaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Timestamp timestamp = 2;
 * @return {?proto.ubii.topicData.Timestamp}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.ubii.topicData.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.ubii.topicData.Timestamp, 2));
};


/**
 * @param {?proto.ubii.topicData.Timestamp|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double double = 3;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setDouble = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearDouble = function() {
  return jspb.Message.setOneofField(this, 3, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasDouble = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool bool = 4;
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setBool = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearBool = function() {
  return jspb.Message.setOneofField(this, 4, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasBool = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string string = 5;
 * @return {string}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setString = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearString = function() {
  return jspb.Message.setOneofField(this, 5, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasString = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ubii.dataStructure.Vector2 vector2 = 6;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector2 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector2, 6));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector2 = function() {
  return this.setVector2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.dataStructure.Vector3 vector3 = 7;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector3 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector3, 7));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector3 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector3 = function() {
  return this.setVector3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector3 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.dataStructure.Vector4 vector4 = 8;
 * @return {?proto.ubii.dataStructure.Vector4}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector4 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector4} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Vector4, 8));
};


/**
 * @param {?proto.ubii.dataStructure.Vector4|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector4 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector4 = function() {
  return this.setVector4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector4 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.dataStructure.Quaternion quaternion = 9;
 * @return {?proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getQuaternion = function() {
  return /** @type{?proto.ubii.dataStructure.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Quaternion, 9));
};


/**
 * @param {?proto.ubii.dataStructure.Quaternion|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setQuaternion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearQuaternion = function() {
  return this.setQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasQuaternion = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.dataStructure.Matrix3x2 matrix3x2 = 10;
 * @return {?proto.ubii.dataStructure.Matrix3x2}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMatrix3x2 = function() {
  return /** @type{?proto.ubii.dataStructure.Matrix3x2} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Matrix3x2, 10));
};


/**
 * @param {?proto.ubii.dataStructure.Matrix3x2|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMatrix3x2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMatrix3x2 = function() {
  return this.setMatrix3x2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMatrix3x2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ubii.dataStructure.Matrix4x4 matrix4x4 = 11;
 * @return {?proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMatrix4x4 = function() {
  return /** @type{?proto.ubii.dataStructure.Matrix4x4} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Matrix4x4, 11));
};


/**
 * @param {?proto.ubii.dataStructure.Matrix4x4|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMatrix4x4 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMatrix4x4 = function() {
  return this.setMatrix4x4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMatrix4x4 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ubii.dataStructure.Color color = 12;
 * @return {?proto.ubii.dataStructure.Color}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getColor = function() {
  return /** @type{?proto.ubii.dataStructure.Color} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Color, 12));
};


/**
 * @param {?proto.ubii.dataStructure.Color|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasColor = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ubii.dataStructure.TouchEvent touch_event = 13;
 * @return {?proto.ubii.dataStructure.TouchEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTouchEvent = function() {
  return /** @type{?proto.ubii.dataStructure.TouchEvent} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.TouchEvent, 13));
};


/**
 * @param {?proto.ubii.dataStructure.TouchEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setTouchEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearTouchEvent = function() {
  return this.setTouchEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasTouchEvent = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ubii.dataStructure.KeyEvent key_event = 14;
 * @return {?proto.ubii.dataStructure.KeyEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getKeyEvent = function() {
  return /** @type{?proto.ubii.dataStructure.KeyEvent} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.KeyEvent, 14));
};


/**
 * @param {?proto.ubii.dataStructure.KeyEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setKeyEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearKeyEvent = function() {
  return this.setKeyEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasKeyEvent = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.dataStructure.MouseEvent mouse_event = 15;
 * @return {?proto.ubii.dataStructure.MouseEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMouseEvent = function() {
  return /** @type{?proto.ubii.dataStructure.MouseEvent} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.MouseEvent, 15));
};


/**
 * @param {?proto.ubii.dataStructure.MouseEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMouseEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMouseEvent = function() {
  return this.setMouseEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMouseEvent = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.dataStructure.MyoEvent myo_event = 16;
 * @return {?proto.ubii.dataStructure.MyoEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMyoEvent = function() {
  return /** @type{?proto.ubii.dataStructure.MyoEvent} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.MyoEvent, 16));
};


/**
 * @param {?proto.ubii.dataStructure.MyoEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMyoEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMyoEvent = function() {
  return this.setMyoEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMyoEvent = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ubii.dataStructure.Pose2D pose2D = 17;
 * @return {?proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getPose2d = function() {
  return /** @type{?proto.ubii.dataStructure.Pose2D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Pose2D, 17));
};


/**
 * @param {?proto.ubii.dataStructure.Pose2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setPose2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearPose2d = function() {
  return this.setPose2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasPose2d = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ubii.dataStructure.Pose3D pose3D = 18;
 * @return {?proto.ubii.dataStructure.Pose3D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getPose3d = function() {
  return /** @type{?proto.ubii.dataStructure.Pose3D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Pose3D, 18));
};


/**
 * @param {?proto.ubii.dataStructure.Pose3D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setPose3d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearPose3d = function() {
  return this.setPose3d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasPose3d = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ubii.dataStructure.Object2D object2D = 19;
 * @return {?proto.ubii.dataStructure.Object2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject2d = function() {
  return /** @type{?proto.ubii.dataStructure.Object2D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Object2D, 19));
};


/**
 * @param {?proto.ubii.dataStructure.Object2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject2d = function() {
  return this.setObject2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject2d = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ubii.dataStructure.Object3D object3D = 20;
 * @return {?proto.ubii.dataStructure.Object3D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject3d = function() {
  return /** @type{?proto.ubii.dataStructure.Object3D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Object3D, 20));
};


/**
 * @param {?proto.ubii.dataStructure.Object3D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject3d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject3d = function() {
  return this.setObject3d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject3d = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ubii.dataStructure.Object2DList object2D_list = 21;
 * @return {?proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject2dList = function() {
  return /** @type{?proto.ubii.dataStructure.Object2DList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Object2DList, 21));
};


/**
 * @param {?proto.ubii.dataStructure.Object2DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject2dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject2dList = function() {
  return this.setObject2dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject2dList = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ubii.dataStructure.Object3DList object3D_list = 22;
 * @return {?proto.ubii.dataStructure.Object3DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject3dList = function() {
  return /** @type{?proto.ubii.dataStructure.Object3DList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Object3DList, 22));
};


/**
 * @param {?proto.ubii.dataStructure.Object3DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject3dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject3dList = function() {
  return this.setObject3dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject3dList = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional int32 int32 = 23;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setInt32 = function(value) {
  return jspb.Message.setOneofField(this, 23, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearInt32 = function() {
  return jspb.Message.setOneofField(this, 23, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasInt32 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional float float = 24;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setFloat = function(value) {
  return jspb.Message.setOneofField(this, 24, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearFloat = function() {
  return jspb.Message.setOneofField(this, 24, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasFloat = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional ubii.dataStructure.Int32List int32_list = 25;
 * @return {?proto.ubii.dataStructure.Int32List}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getInt32List = function() {
  return /** @type{?proto.ubii.dataStructure.Int32List} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Int32List, 25));
};


/**
 * @param {?proto.ubii.dataStructure.Int32List|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setInt32List = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearInt32List = function() {
  return this.setInt32List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasInt32List = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ubii.dataStructure.FloatList float_list = 26;
 * @return {?proto.ubii.dataStructure.FloatList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getFloatList = function() {
  return /** @type{?proto.ubii.dataStructure.FloatList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.FloatList, 26));
};


/**
 * @param {?proto.ubii.dataStructure.FloatList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setFloatList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearFloatList = function() {
  return this.setFloatList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasFloatList = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional ubii.dataStructure.DoubleList double_list = 27;
 * @return {?proto.ubii.dataStructure.DoubleList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getDoubleList = function() {
  return /** @type{?proto.ubii.dataStructure.DoubleList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.DoubleList, 27));
};


/**
 * @param {?proto.ubii.dataStructure.DoubleList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setDoubleList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearDoubleList = function() {
  return this.setDoubleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasDoubleList = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional ubii.dataStructure.StringList string_list = 28;
 * @return {?proto.ubii.dataStructure.StringList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getStringList = function() {
  return /** @type{?proto.ubii.dataStructure.StringList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.StringList, 28));
};


/**
 * @param {?proto.ubii.dataStructure.StringList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setStringList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearStringList = function() {
  return this.setStringList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasStringList = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional ubii.dataStructure.BoolList bool_list = 29;
 * @return {?proto.ubii.dataStructure.BoolList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getBoolList = function() {
  return /** @type{?proto.ubii.dataStructure.BoolList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.BoolList, 29));
};


/**
 * @param {?proto.ubii.dataStructure.BoolList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setBoolList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearBoolList = function() {
  return this.setBoolList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasBoolList = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ubii.dataStructure.Image2D image2D = 30;
 * @return {?proto.ubii.dataStructure.Image2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getImage2d = function() {
  return /** @type{?proto.ubii.dataStructure.Image2D} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Image2D, 30));
};


/**
 * @param {?proto.ubii.dataStructure.Image2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setImage2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearImage2d = function() {
  return this.setImage2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasImage2d = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional ubii.dataStructure.Image2DList image2D_list = 31;
 * @return {?proto.ubii.dataStructure.Image2DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getImage2dList = function() {
  return /** @type{?proto.ubii.dataStructure.Image2DList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.Image2DList, 31));
};


/**
 * @param {?proto.ubii.dataStructure.Image2DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setImage2dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearImage2dList = function() {
  return this.setImage2dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasImage2dList = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional ubii.sessions.Session session = 32;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto.ubii.sessions.Session, 32));
};


/**
 * @param {?proto.ubii.sessions.Session|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasSession = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional ubii.interactions.Interaction interaction = 33;
 * @return {?proto.ubii.interactions.Interaction}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getInteraction = function() {
  return /** @type{?proto.ubii.interactions.Interaction} */ (
    jspb.Message.getWrapperField(this, proto.ubii.interactions.Interaction, 33));
};


/**
 * @param {?proto.ubii.interactions.Interaction|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setInteraction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearInteraction = function() {
  return this.setInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasInteraction = function() {
  return jspb.Message.getField(this, 33) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.topicData.TopicDataRecordList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.TopicDataRecordList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.TopicDataRecordList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecordList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.topicData.TopicDataRecord.toObject, includeInstance)
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
 * @return {!proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.topicData.TopicDataRecordList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.TopicDataRecordList;
  return proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.TopicDataRecordList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.topicData.TopicDataRecord;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.TopicDataRecordList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TopicDataRecord elements = 1;
 * @return {!Array<!proto.ubii.topicData.TopicDataRecord>}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.topicData.TopicDataRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.topicData.TopicDataRecord, 1));
};


/**
 * @param {!Array<!proto.ubii.topicData.TopicDataRecord>} value
 * @return {!proto.ubii.topicData.TopicDataRecordList} returns this
*/
proto.ubii.topicData.TopicDataRecordList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.topicData.TopicDataRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.topicData.TopicDataRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.topicData.TopicDataRecordList} returns this
 */
proto.ubii.topicData.TopicDataRecordList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.processing.LockstepProcessingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.LockstepProcessingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.LockstepProcessingRequest.displayName = 'proto.ubii.processing.LockstepProcessingRequest';
}
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
proto.ubii.processing.LockstepProcessingReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.LockstepProcessingReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.LockstepProcessingReply.displayName = 'proto.ubii.processing.LockstepProcessingReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.LockstepProcessingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.LockstepProcessingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.LockstepProcessingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.LockstepProcessingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    records: (f = msg.getRecords()) && proto.ubii.topicData.TopicDataRecordList.toObject(includeInstance, f)
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
 * @return {!proto.ubii.processing.LockstepProcessingRequest}
 */
proto.ubii.processing.LockstepProcessingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.LockstepProcessingRequest;
  return proto.ubii.processing.LockstepProcessingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.LockstepProcessingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.LockstepProcessingRequest}
 */
proto.ubii.processing.LockstepProcessingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.topicData.TopicDataRecordList;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader);
      msg.setRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.LockstepProcessingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.LockstepProcessingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.LockstepProcessingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.LockstepProcessingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecords();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter
    );
  }
};


/**
 * optional ubii.topicData.TopicDataRecordList records = 1;
 * @return {?proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.processing.LockstepProcessingRequest.prototype.getRecords = function() {
  return /** @type{?proto.ubii.topicData.TopicDataRecordList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.topicData.TopicDataRecordList, 1));
};


/**
 * @param {?proto.ubii.topicData.TopicDataRecordList|undefined} value
 * @return {!proto.ubii.processing.LockstepProcessingRequest} returns this
*/
proto.ubii.processing.LockstepProcessingRequest.prototype.setRecords = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.LockstepProcessingRequest} returns this
 */
proto.ubii.processing.LockstepProcessingRequest.prototype.clearRecords = function() {
  return this.setRecords(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.LockstepProcessingRequest.prototype.hasRecords = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.LockstepProcessingReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.LockstepProcessingReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.LockstepProcessingReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.LockstepProcessingReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    records: (f = msg.getRecords()) && proto.ubii.topicData.TopicDataRecordList.toObject(includeInstance, f)
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
 * @return {!proto.ubii.processing.LockstepProcessingReply}
 */
proto.ubii.processing.LockstepProcessingReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.LockstepProcessingReply;
  return proto.ubii.processing.LockstepProcessingReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.LockstepProcessingReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.LockstepProcessingReply}
 */
proto.ubii.processing.LockstepProcessingReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.topicData.TopicDataRecordList;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader);
      msg.setRecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.LockstepProcessingReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.LockstepProcessingReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.LockstepProcessingReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.LockstepProcessingReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecords();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter
    );
  }
};


/**
 * optional ubii.topicData.TopicDataRecordList records = 1;
 * @return {?proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.processing.LockstepProcessingReply.prototype.getRecords = function() {
  return /** @type{?proto.ubii.topicData.TopicDataRecordList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.topicData.TopicDataRecordList, 1));
};


/**
 * @param {?proto.ubii.topicData.TopicDataRecordList|undefined} value
 * @return {!proto.ubii.processing.LockstepProcessingReply} returns this
*/
proto.ubii.processing.LockstepProcessingReply.prototype.setRecords = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.LockstepProcessingReply} returns this
 */
proto.ubii.processing.LockstepProcessingReply.prototype.clearRecords = function() {
  return this.setRecords(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.LockstepProcessingReply.prototype.hasRecords = function() {
  return jspb.Message.getField(this, 1) != null;
};


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
proto.ubii.processing.ProcessingMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.processing.ProcessingMode.oneofGroups_);
};
goog.inherits(proto.ubii.processing.ProcessingMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingMode.displayName = 'proto.ubii.processing.ProcessingMode';
}
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
proto.ubii.processing.ProcessingMode.Frequency = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.ProcessingMode.Frequency, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingMode.Frequency.displayName = 'proto.ubii.processing.ProcessingMode.Frequency';
}
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
proto.ubii.processing.ProcessingMode.Lockstep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.ProcessingMode.Lockstep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingMode.Lockstep.displayName = 'proto.ubii.processing.ProcessingMode.Lockstep';
}
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
proto.ubii.processing.ProcessingMode.TriggerOnInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.ProcessingMode.TriggerOnInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingMode.TriggerOnInput.displayName = 'proto.ubii.processing.ProcessingMode.TriggerOnInput';
}
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
proto.ubii.processing.ModuleIO = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.processing.ModuleIO, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ModuleIO.displayName = 'proto.ubii.processing.ModuleIO';
}
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
proto.ubii.processing.ProcessingModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.processing.ProcessingModule.repeatedFields_, null);
};
goog.inherits(proto.ubii.processing.ProcessingModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingModule.displayName = 'proto.ubii.processing.ProcessingModule';
}
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
proto.ubii.processing.ProcessingModuleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.processing.ProcessingModuleList.repeatedFields_, null);
};
goog.inherits(proto.ubii.processing.ProcessingModuleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.processing.ProcessingModuleList.displayName = 'proto.ubii.processing.ProcessingModuleList';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.processing.ProcessingMode.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ubii.processing.ProcessingMode.ModeCase = {
  MODE_NOT_SET: 0,
  FREQUENCY: 1,
  LOCKSTEP: 2,
  TRIGGER_ON_INPUT: 3
};

/**
 * @return {proto.ubii.processing.ProcessingMode.ModeCase}
 */
proto.ubii.processing.ProcessingMode.prototype.getModeCase = function() {
  return /** @type {proto.ubii.processing.ProcessingMode.ModeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.processing.ProcessingMode.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingMode.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    frequency: (f = msg.getFrequency()) && proto.ubii.processing.ProcessingMode.Frequency.toObject(includeInstance, f),
    lockstep: (f = msg.getLockstep()) && proto.ubii.processing.ProcessingMode.Lockstep.toObject(includeInstance, f),
    triggerOnInput: (f = msg.getTriggerOnInput()) && proto.ubii.processing.ProcessingMode.TriggerOnInput.toObject(includeInstance, f)
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
 * @return {!proto.ubii.processing.ProcessingMode}
 */
proto.ubii.processing.ProcessingMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingMode;
  return proto.ubii.processing.ProcessingMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingMode}
 */
proto.ubii.processing.ProcessingMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.processing.ProcessingMode.Frequency;
      reader.readMessage(value,proto.ubii.processing.ProcessingMode.Frequency.deserializeBinaryFromReader);
      msg.setFrequency(value);
      break;
    case 2:
      var value = new proto.ubii.processing.ProcessingMode.Lockstep;
      reader.readMessage(value,proto.ubii.processing.ProcessingMode.Lockstep.deserializeBinaryFromReader);
      msg.setLockstep(value);
      break;
    case 3:
      var value = new proto.ubii.processing.ProcessingMode.TriggerOnInput;
      reader.readMessage(value,proto.ubii.processing.ProcessingMode.TriggerOnInput.deserializeBinaryFromReader);
      msg.setTriggerOnInput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrequency();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.processing.ProcessingMode.Frequency.serializeBinaryToWriter
    );
  }
  f = message.getLockstep();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.processing.ProcessingMode.Lockstep.serializeBinaryToWriter
    );
  }
  f = message.getTriggerOnInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.processing.ProcessingMode.TriggerOnInput.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingMode.Frequency.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingMode.Frequency.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingMode.Frequency} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.Frequency.toObject = function(includeInstance, msg) {
  var f, obj = {
    hertz: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ubii.processing.ProcessingMode.Frequency}
 */
proto.ubii.processing.ProcessingMode.Frequency.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingMode.Frequency;
  return proto.ubii.processing.ProcessingMode.Frequency.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingMode.Frequency} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingMode.Frequency}
 */
proto.ubii.processing.ProcessingMode.Frequency.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHertz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingMode.Frequency.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingMode.Frequency.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingMode.Frequency} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.Frequency.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHertz();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 hertz = 1;
 * @return {number}
 */
proto.ubii.processing.ProcessingMode.Frequency.prototype.getHertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.processing.ProcessingMode.Frequency} returns this
 */
proto.ubii.processing.ProcessingMode.Frequency.prototype.setHertz = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingMode.Lockstep.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingMode.Lockstep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingMode.Lockstep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.Lockstep.toObject = function(includeInstance, msg) {
  var f, obj = {
    processRequestEndpoint: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ubii.processing.ProcessingMode.Lockstep}
 */
proto.ubii.processing.ProcessingMode.Lockstep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingMode.Lockstep;
  return proto.ubii.processing.ProcessingMode.Lockstep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingMode.Lockstep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingMode.Lockstep}
 */
proto.ubii.processing.ProcessingMode.Lockstep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessRequestEndpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingMode.Lockstep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingMode.Lockstep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingMode.Lockstep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.Lockstep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessRequestEndpoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string process_request_endpoint = 1;
 * @return {string}
 */
proto.ubii.processing.ProcessingMode.Lockstep.prototype.getProcessRequestEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingMode.Lockstep} returns this
 */
proto.ubii.processing.ProcessingMode.Lockstep.prototype.setProcessRequestEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingMode.TriggerOnInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingMode.TriggerOnInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    minDelayMs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    allInputsNeedUpdate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.ubii.processing.ProcessingMode.TriggerOnInput}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingMode.TriggerOnInput;
  return proto.ubii.processing.ProcessingMode.TriggerOnInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingMode.TriggerOnInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingMode.TriggerOnInput}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinDelayMs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllInputsNeedUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingMode.TriggerOnInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingMode.TriggerOnInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinDelayMs();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAllInputsNeedUpdate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 min_delay_ms = 1;
 * @return {number}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.getMinDelayMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.processing.ProcessingMode.TriggerOnInput} returns this
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.setMinDelayMs = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool all_inputs_need_update = 2;
 * @return {boolean}
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.getAllInputsNeedUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ubii.processing.ProcessingMode.TriggerOnInput} returns this
 */
proto.ubii.processing.ProcessingMode.TriggerOnInput.prototype.setAllInputsNeedUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Frequency frequency = 1;
 * @return {?proto.ubii.processing.ProcessingMode.Frequency}
 */
proto.ubii.processing.ProcessingMode.prototype.getFrequency = function() {
  return /** @type{?proto.ubii.processing.ProcessingMode.Frequency} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingMode.Frequency, 1));
};


/**
 * @param {?proto.ubii.processing.ProcessingMode.Frequency|undefined} value
 * @return {!proto.ubii.processing.ProcessingMode} returns this
*/
proto.ubii.processing.ProcessingMode.prototype.setFrequency = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ubii.processing.ProcessingMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.ProcessingMode} returns this
 */
proto.ubii.processing.ProcessingMode.prototype.clearFrequency = function() {
  return this.setFrequency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.ProcessingMode.prototype.hasFrequency = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Lockstep lockstep = 2;
 * @return {?proto.ubii.processing.ProcessingMode.Lockstep}
 */
proto.ubii.processing.ProcessingMode.prototype.getLockstep = function() {
  return /** @type{?proto.ubii.processing.ProcessingMode.Lockstep} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingMode.Lockstep, 2));
};


/**
 * @param {?proto.ubii.processing.ProcessingMode.Lockstep|undefined} value
 * @return {!proto.ubii.processing.ProcessingMode} returns this
*/
proto.ubii.processing.ProcessingMode.prototype.setLockstep = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.processing.ProcessingMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.ProcessingMode} returns this
 */
proto.ubii.processing.ProcessingMode.prototype.clearLockstep = function() {
  return this.setLockstep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.ProcessingMode.prototype.hasLockstep = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TriggerOnInput trigger_on_input = 3;
 * @return {?proto.ubii.processing.ProcessingMode.TriggerOnInput}
 */
proto.ubii.processing.ProcessingMode.prototype.getTriggerOnInput = function() {
  return /** @type{?proto.ubii.processing.ProcessingMode.TriggerOnInput} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingMode.TriggerOnInput, 3));
};


/**
 * @param {?proto.ubii.processing.ProcessingMode.TriggerOnInput|undefined} value
 * @return {!proto.ubii.processing.ProcessingMode} returns this
*/
proto.ubii.processing.ProcessingMode.prototype.setTriggerOnInput = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.processing.ProcessingMode.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.ProcessingMode} returns this
 */
proto.ubii.processing.ProcessingMode.prototype.clearTriggerOnInput = function() {
  return this.setTriggerOnInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.ProcessingMode.prototype.hasTriggerOnInput = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ModuleIO.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ModuleIO.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ModuleIO} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ModuleIO.toObject = function(includeInstance, msg) {
  var f, obj = {
    internalName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageFormat: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ubii.processing.ModuleIO}
 */
proto.ubii.processing.ModuleIO.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ModuleIO;
  return proto.ubii.processing.ModuleIO.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ModuleIO} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ModuleIO}
 */
proto.ubii.processing.ModuleIO.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ModuleIO.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ModuleIO.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ModuleIO} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ModuleIO.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInternalName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string internal_name = 1;
 * @return {string}
 */
proto.ubii.processing.ModuleIO.prototype.getInternalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ModuleIO} returns this
 */
proto.ubii.processing.ModuleIO.prototype.setInternalName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_format = 2;
 * @return {string}
 */
proto.ubii.processing.ModuleIO.prototype.getMessageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ModuleIO} returns this
 */
proto.ubii.processing.ModuleIO.prototype.setMessageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.processing.ProcessingModule.repeatedFields_ = [3,4,9,10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingModule.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    authorsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    processingMode: (f = msg.getProcessingMode()) && proto.ubii.processing.ProcessingMode.toObject(includeInstance, f),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.ubii.processing.ModuleIO.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.ubii.processing.ModuleIO.toObject, includeInstance),
    language: jspb.Message.getFieldWithDefault(msg, 11, 0),
    onProcessingStringified: jspb.Message.getFieldWithDefault(msg, 12, ""),
    onCreatedStringified: jspb.Message.getFieldWithDefault(msg, 13, ""),
    onHaltedStringified: jspb.Message.getFieldWithDefault(msg, 14, ""),
    onDestroyedStringified: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.ubii.processing.ProcessingModule}
 */
proto.ubii.processing.ProcessingModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingModule;
  return proto.ubii.processing.ProcessingModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingModule}
 */
proto.ubii.processing.ProcessingModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthors(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 7:
      var value = /** @type {!proto.ubii.processing.ProcessingModule.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = new proto.ubii.processing.ProcessingMode;
      reader.readMessage(value,proto.ubii.processing.ProcessingMode.deserializeBinaryFromReader);
      msg.setProcessingMode(value);
      break;
    case 9:
      var value = new proto.ubii.processing.ModuleIO;
      reader.readMessage(value,proto.ubii.processing.ModuleIO.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 10:
      var value = new proto.ubii.processing.ModuleIO;
      reader.readMessage(value,proto.ubii.processing.ModuleIO.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 11:
      var value = /** @type {!proto.ubii.processing.ProcessingModule.Language} */ (reader.readEnum());
      msg.setLanguage(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnProcessingStringified(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnCreatedStringified(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnHaltedStringified(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnDestroyedStringified(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getProcessingMode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ubii.processing.ProcessingMode.serializeBinaryToWriter
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.ubii.processing.ModuleIO.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.ubii.processing.ModuleIO.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getOnProcessingStringified();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOnCreatedStringified();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getOnHaltedStringified();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getOnDestroyedStringified();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ubii.processing.ProcessingModule.Status = {
  INITIALIZED: 0,
  CREATED: 1,
  PROCESSING: 2,
  HALTED: 3,
  DESTROYED: 4
};

/**
 * @enum {number}
 */
proto.ubii.processing.ProcessingModule.Language = {
  CPP: 0,
  PY: 1,
  JS: 2,
  CS: 3,
  JAVA: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string authors = 3;
 * @return {!Array<string>}
 */
proto.ubii.processing.ProcessingModule.prototype.getAuthorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setAuthorsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.addAuthors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.clearAuthorsList = function() {
  return this.setAuthorsList([]);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ubii.processing.ProcessingModule.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string client_id = 6;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Status status = 7;
 * @return {!proto.ubii.processing.ProcessingModule.Status}
 */
proto.ubii.processing.ProcessingModule.prototype.getStatus = function() {
  return /** @type {!proto.ubii.processing.ProcessingModule.Status} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.ubii.processing.ProcessingModule.Status} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ProcessingMode processing_mode = 8;
 * @return {?proto.ubii.processing.ProcessingMode}
 */
proto.ubii.processing.ProcessingModule.prototype.getProcessingMode = function() {
  return /** @type{?proto.ubii.processing.ProcessingMode} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingMode, 8));
};


/**
 * @param {?proto.ubii.processing.ProcessingMode|undefined} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
*/
proto.ubii.processing.ProcessingModule.prototype.setProcessingMode = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.clearProcessingMode = function() {
  return this.setProcessingMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.processing.ProcessingModule.prototype.hasProcessingMode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated ModuleIO inputs = 9;
 * @return {!Array<!proto.ubii.processing.ModuleIO>}
 */
proto.ubii.processing.ProcessingModule.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.ubii.processing.ModuleIO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.processing.ModuleIO, 9));
};


/**
 * @param {!Array<!proto.ubii.processing.ModuleIO>} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
*/
proto.ubii.processing.ProcessingModule.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.ubii.processing.ModuleIO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.processing.ModuleIO}
 */
proto.ubii.processing.ProcessingModule.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.ubii.processing.ModuleIO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated ModuleIO outputs = 10;
 * @return {!Array<!proto.ubii.processing.ModuleIO>}
 */
proto.ubii.processing.ProcessingModule.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.ubii.processing.ModuleIO>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.processing.ModuleIO, 10));
};


/**
 * @param {!Array<!proto.ubii.processing.ModuleIO>} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
*/
proto.ubii.processing.ProcessingModule.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ubii.processing.ModuleIO=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.processing.ModuleIO}
 */
proto.ubii.processing.ProcessingModule.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ubii.processing.ModuleIO, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * optional Language language = 11;
 * @return {!proto.ubii.processing.ProcessingModule.Language}
 */
proto.ubii.processing.ProcessingModule.prototype.getLanguage = function() {
  return /** @type {!proto.ubii.processing.ProcessingModule.Language} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.ubii.processing.ProcessingModule.Language} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string on_processing_stringified = 12;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getOnProcessingStringified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setOnProcessingStringified = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string on_created_stringified = 13;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getOnCreatedStringified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setOnCreatedStringified = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string on_halted_stringified = 14;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getOnHaltedStringified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setOnHaltedStringified = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string on_destroyed_stringified = 15;
 * @return {string}
 */
proto.ubii.processing.ProcessingModule.prototype.getOnDestroyedStringified = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.processing.ProcessingModule} returns this
 */
proto.ubii.processing.ProcessingModule.prototype.setOnDestroyedStringified = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.processing.ProcessingModuleList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.processing.ProcessingModuleList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.processing.ProcessingModuleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.processing.ProcessingModuleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingModuleList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.processing.ProcessingModule.toObject, includeInstance)
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
 * @return {!proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.processing.ProcessingModuleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.processing.ProcessingModuleList;
  return proto.ubii.processing.ProcessingModuleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.processing.ProcessingModuleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.processing.ProcessingModuleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.processing.ProcessingModule;
      reader.readMessage(value,proto.ubii.processing.ProcessingModule.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.processing.ProcessingModuleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.processing.ProcessingModuleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.processing.ProcessingModuleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.processing.ProcessingModuleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.processing.ProcessingModule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProcessingModule elements = 1;
 * @return {!Array<!proto.ubii.processing.ProcessingModule>}
 */
proto.ubii.processing.ProcessingModuleList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.processing.ProcessingModule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.processing.ProcessingModule, 1));
};


/**
 * @param {!Array<!proto.ubii.processing.ProcessingModule>} value
 * @return {!proto.ubii.processing.ProcessingModuleList} returns this
*/
proto.ubii.processing.ProcessingModuleList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.processing.ProcessingModule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.processing.ProcessingModule}
 */
proto.ubii.processing.ProcessingModuleList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.processing.ProcessingModule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.processing.ProcessingModuleList} returns this
 */
proto.ubii.processing.ProcessingModuleList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.servers.Server = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.servers.Server, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.servers.Server.displayName = 'proto.ubii.servers.Server';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.servers.Server.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.servers.Server.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.servers.Server} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.servers.Server.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipEthernet: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ipWlan: jspb.Message.getFieldWithDefault(msg, 4, ""),
    portServiceZmq: jspb.Message.getFieldWithDefault(msg, 5, ""),
    portServiceRest: jspb.Message.getFieldWithDefault(msg, 6, ""),
    portTopicDataZmq: jspb.Message.getFieldWithDefault(msg, 7, ""),
    portTopicDataWs: jspb.Message.getFieldWithDefault(msg, 8, ""),
    constantsJson: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.ubii.servers.Server}
 */
proto.ubii.servers.Server.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.servers.Server;
  return proto.ubii.servers.Server.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.servers.Server} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.servers.Server}
 */
proto.ubii.servers.Server.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpEthernet(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpWlan(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortServiceZmq(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortServiceRest(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortTopicDataZmq(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPortTopicDataWs(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setConstantsJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.servers.Server.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.servers.Server.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.servers.Server} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.servers.Server.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpEthernet();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIpWlan();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPortServiceZmq();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPortServiceRest();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPortTopicDataZmq();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPortTopicDataWs();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getConstantsJson();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ip_ethernet = 3;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getIpEthernet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setIpEthernet = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ip_wlan = 4;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getIpWlan = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setIpWlan = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string port_service_zmq = 5;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getPortServiceZmq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setPortServiceZmq = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string port_service_rest = 6;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getPortServiceRest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setPortServiceRest = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string port_topic_data_zmq = 7;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getPortTopicDataZmq = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setPortTopicDataZmq = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string port_topic_data_ws = 8;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getPortTopicDataWs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setPortTopicDataWs = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string constants_json = 9;
 * @return {string}
 */
proto.ubii.servers.Server.prototype.getConstantsJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.servers.Server} returns this
 */
proto.ubii.servers.Server.prototype.setConstantsJson = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


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
proto.ubii.services.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.services.Service.repeatedFields_, null);
};
goog.inherits(proto.ubii.services.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.services.Service.displayName = 'proto.ubii.services.Service';
}
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
proto.ubii.services.ServiceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.services.ServiceList.repeatedFields_, null);
};
goog.inherits(proto.ubii.services.ServiceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.services.ServiceList.displayName = 'proto.ubii.services.ServiceList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.services.Service.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestMessageFormat: jspb.Message.getFieldWithDefault(msg, 2, ""),
    responseMessageFormat: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.ubii.services.Service}
 */
proto.ubii.services.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.Service;
  return proto.ubii.services.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.Service}
 */
proto.ubii.services.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestMessageFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseMessageFormat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestMessageFormat();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponseMessageFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.services.Service.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string request_message_format = 2;
 * @return {string}
 */
proto.ubii.services.Service.prototype.getRequestMessageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.setRequestMessageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string response_message_format = 3;
 * @return {string}
 */
proto.ubii.services.Service.prototype.getResponseMessageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.setResponseMessageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ubii.services.Service.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ubii.services.Service.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.Service} returns this
 */
proto.ubii.services.Service.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.services.ServiceList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.ServiceList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.services.Service.toObject, includeInstance)
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
 * @return {!proto.ubii.services.ServiceList}
 */
proto.ubii.services.ServiceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.ServiceList;
  return proto.ubii.services.ServiceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.ServiceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.ServiceList}
 */
proto.ubii.services.ServiceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.services.Service;
      reader.readMessage(value,proto.ubii.services.Service.deserializeBinaryFromReader);
      msg.addElements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.ServiceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.ServiceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.ServiceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.services.Service.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Service elements = 1;
 * @return {!Array<!proto.ubii.services.Service>}
 */
proto.ubii.services.ServiceList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.services.Service>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.services.Service, 1));
};


/**
 * @param {!Array<!proto.ubii.services.Service>} value
 * @return {!proto.ubii.services.ServiceList} returns this
*/
proto.ubii.services.ServiceList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.services.Service=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.Service}
 */
proto.ubii.services.ServiceList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.services.Service, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.ServiceList} returns this
 */
proto.ubii.services.ServiceList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


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
proto.ubii.services.ServiceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.services.ServiceReply.oneofGroups_);
};
goog.inherits(proto.ubii.services.ServiceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.services.ServiceReply.displayName = 'proto.ubii.services.ServiceReply';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.services.ServiceReply.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]];

/**
 * @enum {number}
 */
proto.ubii.services.ServiceReply.TypeCase = {
  TYPE_NOT_SET: 0,
  SUCCESS: 1,
  ERROR: 2,
  CLIENT: 3,
  DEVICE: 4,
  SERVER: 5,
  SESSION: 6,
  SESSION_LIST: 7,
  INTERACTION: 8,
  INTERACTION_LIST: 9,
  STRING_LIST: 10,
  TOPIC_MUX: 11,
  TOPIC_MUX_LIST: 12,
  TOPIC_DEMUX: 13,
  TOPIC_DEMUX_LIST: 14,
  CLIENT_LIST: 15,
  DEVICE_LIST: 16,
  SERVICE: 17,
  SERVICE_LIST: 18,
  PROCESSING_MODULE: 19,
  PROCESSING_MODULE_LIST: 20,
  LOCKSTEP_PROCESSING_REPLY: 21
};

/**
 * @return {proto.ubii.services.ServiceReply.TypeCase}
 */
proto.ubii.services.ServiceReply.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.services.ServiceReply.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.services.ServiceReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.ServiceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: (f = msg.getSuccess()) && proto.ubii.general.Success.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.ubii.general.Error.toObject(includeInstance, f),
    client: (f = msg.getClient()) && proto.ubii.clients.Client.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto.ubii.devices.Device.toObject(includeInstance, f),
    server: (f = msg.getServer()) && proto.ubii.servers.Server.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto.ubii.sessions.Session.toObject(includeInstance, f),
    sessionList: (f = msg.getSessionList()) && proto.ubii.sessions.SessionList.toObject(includeInstance, f),
    interaction: (f = msg.getInteraction()) && proto.ubii.interactions.Interaction.toObject(includeInstance, f),
    interactionList: (f = msg.getInteractionList()) && proto.ubii.interactions.InteractionList.toObject(includeInstance, f),
    stringList: (f = msg.getStringList()) && proto.ubii.dataStructure.StringList.toObject(includeInstance, f),
    topicMux: (f = msg.getTopicMux()) && proto.ubii.devices.TopicMux.toObject(includeInstance, f),
    topicMuxList: (f = msg.getTopicMuxList()) && proto.ubii.devices.TopicMuxList.toObject(includeInstance, f),
    topicDemux: (f = msg.getTopicDemux()) && proto.ubii.devices.TopicDemux.toObject(includeInstance, f),
    topicDemuxList: (f = msg.getTopicDemuxList()) && proto.ubii.devices.TopicDemuxList.toObject(includeInstance, f),
    clientList: (f = msg.getClientList()) && proto.ubii.clients.ClientList.toObject(includeInstance, f),
    deviceList: (f = msg.getDeviceList()) && proto.ubii.devices.DeviceList.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.ubii.services.Service.toObject(includeInstance, f),
    serviceList: (f = msg.getServiceList()) && proto.ubii.services.ServiceList.toObject(includeInstance, f),
    processingModule: (f = msg.getProcessingModule()) && proto.ubii.processing.ProcessingModule.toObject(includeInstance, f),
    processingModuleList: (f = msg.getProcessingModuleList()) && proto.ubii.processing.ProcessingModuleList.toObject(includeInstance, f),
    lockstepProcessingReply: (f = msg.getLockstepProcessingReply()) && proto.ubii.processing.LockstepProcessingReply.toObject(includeInstance, f)
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
 * @return {!proto.ubii.services.ServiceReply}
 */
proto.ubii.services.ServiceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.ServiceReply;
  return proto.ubii.services.ServiceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.ServiceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.ServiceReply}
 */
proto.ubii.services.ServiceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.general.Success;
      reader.readMessage(value,proto.ubii.general.Success.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 2:
      var value = new proto.ubii.general.Error;
      reader.readMessage(value,proto.ubii.general.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 3:
      var value = new proto.ubii.clients.Client;
      reader.readMessage(value,proto.ubii.clients.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 4:
      var value = new proto.ubii.devices.Device;
      reader.readMessage(value,proto.ubii.devices.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 5:
      var value = new proto.ubii.servers.Server;
      reader.readMessage(value,proto.ubii.servers.Server.deserializeBinaryFromReader);
      msg.setServer(value);
      break;
    case 6:
      var value = new proto.ubii.sessions.Session;
      reader.readMessage(value,proto.ubii.sessions.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 7:
      var value = new proto.ubii.sessions.SessionList;
      reader.readMessage(value,proto.ubii.sessions.SessionList.deserializeBinaryFromReader);
      msg.setSessionList(value);
      break;
    case 8:
      var value = new proto.ubii.interactions.Interaction;
      reader.readMessage(value,proto.ubii.interactions.Interaction.deserializeBinaryFromReader);
      msg.setInteraction(value);
      break;
    case 9:
      var value = new proto.ubii.interactions.InteractionList;
      reader.readMessage(value,proto.ubii.interactions.InteractionList.deserializeBinaryFromReader);
      msg.setInteractionList(value);
      break;
    case 10:
      var value = new proto.ubii.dataStructure.StringList;
      reader.readMessage(value,proto.ubii.dataStructure.StringList.deserializeBinaryFromReader);
      msg.setStringList(value);
      break;
    case 11:
      var value = new proto.ubii.devices.TopicMux;
      reader.readMessage(value,proto.ubii.devices.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    case 12:
      var value = new proto.ubii.devices.TopicMuxList;
      reader.readMessage(value,proto.ubii.devices.TopicMuxList.deserializeBinaryFromReader);
      msg.setTopicMuxList(value);
      break;
    case 13:
      var value = new proto.ubii.devices.TopicDemux;
      reader.readMessage(value,proto.ubii.devices.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
      break;
    case 14:
      var value = new proto.ubii.devices.TopicDemuxList;
      reader.readMessage(value,proto.ubii.devices.TopicDemuxList.deserializeBinaryFromReader);
      msg.setTopicDemuxList(value);
      break;
    case 15:
      var value = new proto.ubii.clients.ClientList;
      reader.readMessage(value,proto.ubii.clients.ClientList.deserializeBinaryFromReader);
      msg.setClientList(value);
      break;
    case 16:
      var value = new proto.ubii.devices.DeviceList;
      reader.readMessage(value,proto.ubii.devices.DeviceList.deserializeBinaryFromReader);
      msg.setDeviceList(value);
      break;
    case 17:
      var value = new proto.ubii.services.Service;
      reader.readMessage(value,proto.ubii.services.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 18:
      var value = new proto.ubii.services.ServiceList;
      reader.readMessage(value,proto.ubii.services.ServiceList.deserializeBinaryFromReader);
      msg.setServiceList(value);
      break;
    case 19:
      var value = new proto.ubii.processing.ProcessingModule;
      reader.readMessage(value,proto.ubii.processing.ProcessingModule.deserializeBinaryFromReader);
      msg.setProcessingModule(value);
      break;
    case 20:
      var value = new proto.ubii.processing.ProcessingModuleList;
      reader.readMessage(value,proto.ubii.processing.ProcessingModuleList.deserializeBinaryFromReader);
      msg.setProcessingModuleList(value);
      break;
    case 21:
      var value = new proto.ubii.processing.LockstepProcessingReply;
      reader.readMessage(value,proto.ubii.processing.LockstepProcessingReply.deserializeBinaryFromReader);
      msg.setLockstepProcessingReply(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.ServiceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.ServiceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.ServiceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ubii.general.Success.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.general.Error.serializeBinaryToWriter
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.clients.Client.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ubii.devices.Device.serializeBinaryToWriter
    );
  }
  f = message.getServer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ubii.servers.Server.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ubii.sessions.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionList();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ubii.sessions.SessionList.serializeBinaryToWriter
    );
  }
  f = message.getInteraction();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ubii.interactions.Interaction.serializeBinaryToWriter
    );
  }
  f = message.getInteractionList();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ubii.interactions.InteractionList.serializeBinaryToWriter
    );
  }
  f = message.getStringList();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ubii.dataStructure.StringList.serializeBinaryToWriter
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ubii.devices.TopicMux.serializeBinaryToWriter
    );
  }
  f = message.getTopicMuxList();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ubii.devices.TopicMuxList.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ubii.devices.TopicDemux.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemuxList();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ubii.devices.TopicDemuxList.serializeBinaryToWriter
    );
  }
  f = message.getClientList();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ubii.clients.ClientList.serializeBinaryToWriter
    );
  }
  f = message.getDeviceList();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ubii.devices.DeviceList.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ubii.services.Service.serializeBinaryToWriter
    );
  }
  f = message.getServiceList();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ubii.services.ServiceList.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModule();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.ubii.processing.ProcessingModule.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModuleList();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.ubii.processing.ProcessingModuleList.serializeBinaryToWriter
    );
  }
  f = message.getLockstepProcessingReply();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ubii.processing.LockstepProcessingReply.serializeBinaryToWriter
    );
  }
};


/**
 * optional ubii.general.Success success = 1;
 * @return {?proto.ubii.general.Success}
 */
proto.ubii.services.ServiceReply.prototype.getSuccess = function() {
  return /** @type{?proto.ubii.general.Success} */ (
    jspb.Message.getWrapperField(this, proto.ubii.general.Success, 1));
};


/**
 * @param {?proto.ubii.general.Success|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearSuccess = function() {
  return this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ubii.general.Error error = 2;
 * @return {?proto.ubii.general.Error}
 */
proto.ubii.services.ServiceReply.prototype.getError = function() {
  return /** @type{?proto.ubii.general.Error} */ (
    jspb.Message.getWrapperField(this, proto.ubii.general.Error, 2));
};


/**
 * @param {?proto.ubii.general.Error|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.clients.Client client = 3;
 * @return {?proto.ubii.clients.Client}
 */
proto.ubii.services.ServiceReply.prototype.getClient = function() {
  return /** @type{?proto.ubii.clients.Client} */ (
    jspb.Message.getWrapperField(this, proto.ubii.clients.Client, 3));
};


/**
 * @param {?proto.ubii.clients.Client|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setClient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasClient = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ubii.devices.Device device = 4;
 * @return {?proto.ubii.devices.Device}
 */
proto.ubii.services.ServiceReply.prototype.getDevice = function() {
  return /** @type{?proto.ubii.devices.Device} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.Device, 4));
};


/**
 * @param {?proto.ubii.devices.Device|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setDevice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ubii.servers.Server server = 5;
 * @return {?proto.ubii.servers.Server}
 */
proto.ubii.services.ServiceReply.prototype.getServer = function() {
  return /** @type{?proto.ubii.servers.Server} */ (
    jspb.Message.getWrapperField(this, proto.ubii.servers.Server, 5));
};


/**
 * @param {?proto.ubii.servers.Server|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setServer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearServer = function() {
  return this.setServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasServer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ubii.sessions.Session session = 6;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.services.ServiceReply.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto.ubii.sessions.Session, 6));
};


/**
 * @param {?proto.ubii.sessions.Session|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSession = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.sessions.SessionList session_list = 7;
 * @return {?proto.ubii.sessions.SessionList}
 */
proto.ubii.services.ServiceReply.prototype.getSessionList = function() {
  return /** @type{?proto.ubii.sessions.SessionList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.sessions.SessionList, 7));
};


/**
 * @param {?proto.ubii.sessions.SessionList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setSessionList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearSessionList = function() {
  return this.setSessionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSessionList = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.interactions.Interaction interaction = 8;
 * @return {?proto.ubii.interactions.Interaction}
 */
proto.ubii.services.ServiceReply.prototype.getInteraction = function() {
  return /** @type{?proto.ubii.interactions.Interaction} */ (
    jspb.Message.getWrapperField(this, proto.ubii.interactions.Interaction, 8));
};


/**
 * @param {?proto.ubii.interactions.Interaction|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setInteraction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearInteraction = function() {
  return this.setInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasInteraction = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.interactions.InteractionList interaction_list = 9;
 * @return {?proto.ubii.interactions.InteractionList}
 */
proto.ubii.services.ServiceReply.prototype.getInteractionList = function() {
  return /** @type{?proto.ubii.interactions.InteractionList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.interactions.InteractionList, 9));
};


/**
 * @param {?proto.ubii.interactions.InteractionList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setInteractionList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearInteractionList = function() {
  return this.setInteractionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasInteractionList = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.dataStructure.StringList string_list = 10;
 * @return {?proto.ubii.dataStructure.StringList}
 */
proto.ubii.services.ServiceReply.prototype.getStringList = function() {
  return /** @type{?proto.ubii.dataStructure.StringList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.dataStructure.StringList, 10));
};


/**
 * @param {?proto.ubii.dataStructure.StringList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setStringList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearStringList = function() {
  return this.setStringList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasStringList = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 11;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.services.ServiceReply.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicMux, 11));
};


/**
 * @param {?proto.ubii.devices.TopicMux|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setTopicMux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearTopicMux = function() {
  return this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicMux = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ubii.devices.TopicMuxList topic_mux_list = 12;
 * @return {?proto.ubii.devices.TopicMuxList}
 */
proto.ubii.services.ServiceReply.prototype.getTopicMuxList = function() {
  return /** @type{?proto.ubii.devices.TopicMuxList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicMuxList, 12));
};


/**
 * @param {?proto.ubii.devices.TopicMuxList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setTopicMuxList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearTopicMuxList = function() {
  return this.setTopicMuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicMuxList = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ubii.devices.TopicDemux topic_demux = 13;
 * @return {?proto.ubii.devices.TopicDemux}
 */
proto.ubii.services.ServiceReply.prototype.getTopicDemux = function() {
  return /** @type{?proto.ubii.devices.TopicDemux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicDemux, 13));
};


/**
 * @param {?proto.ubii.devices.TopicDemux|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setTopicDemux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearTopicDemux = function() {
  return this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicDemux = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ubii.devices.TopicDemuxList topic_demux_list = 14;
 * @return {?proto.ubii.devices.TopicDemuxList}
 */
proto.ubii.services.ServiceReply.prototype.getTopicDemuxList = function() {
  return /** @type{?proto.ubii.devices.TopicDemuxList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicDemuxList, 14));
};


/**
 * @param {?proto.ubii.devices.TopicDemuxList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setTopicDemuxList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearTopicDemuxList = function() {
  return this.setTopicDemuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicDemuxList = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.clients.ClientList client_list = 15;
 * @return {?proto.ubii.clients.ClientList}
 */
proto.ubii.services.ServiceReply.prototype.getClientList = function() {
  return /** @type{?proto.ubii.clients.ClientList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.clients.ClientList, 15));
};


/**
 * @param {?proto.ubii.clients.ClientList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setClientList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearClientList = function() {
  return this.setClientList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasClientList = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.devices.DeviceList device_list = 16;
 * @return {?proto.ubii.devices.DeviceList}
 */
proto.ubii.services.ServiceReply.prototype.getDeviceList = function() {
  return /** @type{?proto.ubii.devices.DeviceList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.DeviceList, 16));
};


/**
 * @param {?proto.ubii.devices.DeviceList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setDeviceList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearDeviceList = function() {
  return this.setDeviceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasDeviceList = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Service service = 17;
 * @return {?proto.ubii.services.Service}
 */
proto.ubii.services.ServiceReply.prototype.getService = function() {
  return /** @type{?proto.ubii.services.Service} */ (
    jspb.Message.getWrapperField(this, proto.ubii.services.Service, 17));
};


/**
 * @param {?proto.ubii.services.Service|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasService = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ServiceList service_list = 18;
 * @return {?proto.ubii.services.ServiceList}
 */
proto.ubii.services.ServiceReply.prototype.getServiceList = function() {
  return /** @type{?proto.ubii.services.ServiceList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.services.ServiceList, 18));
};


/**
 * @param {?proto.ubii.services.ServiceList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setServiceList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearServiceList = function() {
  return this.setServiceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasServiceList = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ubii.processing.ProcessingModule processing_module = 19;
 * @return {?proto.ubii.processing.ProcessingModule}
 */
proto.ubii.services.ServiceReply.prototype.getProcessingModule = function() {
  return /** @type{?proto.ubii.processing.ProcessingModule} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingModule, 19));
};


/**
 * @param {?proto.ubii.processing.ProcessingModule|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setProcessingModule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearProcessingModule = function() {
  return this.setProcessingModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasProcessingModule = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ubii.processing.ProcessingModuleList processing_module_list = 20;
 * @return {?proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.services.ServiceReply.prototype.getProcessingModuleList = function() {
  return /** @type{?proto.ubii.processing.ProcessingModuleList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingModuleList, 20));
};


/**
 * @param {?proto.ubii.processing.ProcessingModuleList|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setProcessingModuleList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearProcessingModuleList = function() {
  return this.setProcessingModuleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasProcessingModuleList = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ubii.processing.LockstepProcessingReply lockstep_processing_reply = 21;
 * @return {?proto.ubii.processing.LockstepProcessingReply}
 */
proto.ubii.services.ServiceReply.prototype.getLockstepProcessingReply = function() {
  return /** @type{?proto.ubii.processing.LockstepProcessingReply} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.LockstepProcessingReply, 21));
};


/**
 * @param {?proto.ubii.processing.LockstepProcessingReply|undefined} value
 * @return {!proto.ubii.services.ServiceReply} returns this
*/
proto.ubii.services.ServiceReply.prototype.setLockstepProcessingReply = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceReply} returns this
 */
proto.ubii.services.ServiceReply.prototype.clearLockstepProcessingReply = function() {
  return this.setLockstepProcessingReply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasLockstepProcessingReply = function() {
  return jspb.Message.getField(this, 21) != null;
};


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
proto.ubii.services.request.TopicSubscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.services.request.TopicSubscription.repeatedFields_, null);
};
goog.inherits(proto.ubii.services.request.TopicSubscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.services.request.TopicSubscription.displayName = 'proto.ubii.services.request.TopicSubscription';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.services.request.TopicSubscription.repeatedFields_ = [2,3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.request.TopicSubscription.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.request.TopicSubscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.request.TopicSubscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.request.TopicSubscription.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subscribeTopicsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    unsubscribeTopicsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    subscribeTopicRegexpList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    unsubscribeTopicRegexpList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ubii.services.request.TopicSubscription}
 */
proto.ubii.services.request.TopicSubscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.request.TopicSubscription;
  return proto.ubii.services.request.TopicSubscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.request.TopicSubscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.request.TopicSubscription}
 */
proto.ubii.services.request.TopicSubscription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubscribeTopics(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnsubscribeTopics(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSubscribeTopicRegexp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addUnsubscribeTopicRegexp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.request.TopicSubscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.request.TopicSubscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.request.TopicSubscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.request.TopicSubscription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubscribeTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getUnsubscribeTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSubscribeTopicRegexpList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getUnsubscribeTopicRegexpList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string client_id = 1;
 * @return {string}
 */
proto.ubii.services.request.TopicSubscription.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.setClientId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string subscribe_topics = 2;
 * @return {!Array<string>}
 */
proto.ubii.services.request.TopicSubscription.prototype.getSubscribeTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.setSubscribeTopicsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.addSubscribeTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.clearSubscribeTopicsList = function() {
  return this.setSubscribeTopicsList([]);
};


/**
 * repeated string unsubscribe_topics = 3;
 * @return {!Array<string>}
 */
proto.ubii.services.request.TopicSubscription.prototype.getUnsubscribeTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.setUnsubscribeTopicsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.addUnsubscribeTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.clearUnsubscribeTopicsList = function() {
  return this.setUnsubscribeTopicsList([]);
};


/**
 * repeated string subscribe_topic_regexp = 4;
 * @return {!Array<string>}
 */
proto.ubii.services.request.TopicSubscription.prototype.getSubscribeTopicRegexpList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.setSubscribeTopicRegexpList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.addSubscribeTopicRegexp = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.clearSubscribeTopicRegexpList = function() {
  return this.setSubscribeTopicRegexpList([]);
};


/**
 * repeated string unsubscribe_topic_regexp = 5;
 * @return {!Array<string>}
 */
proto.ubii.services.request.TopicSubscription.prototype.getUnsubscribeTopicRegexpList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.setUnsubscribeTopicRegexpList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.addUnsubscribeTopicRegexp = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.services.request.TopicSubscription} returns this
 */
proto.ubii.services.request.TopicSubscription.prototype.clearUnsubscribeTopicRegexpList = function() {
  return this.setUnsubscribeTopicRegexpList([]);
};


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
proto.ubii.services.ServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.services.ServiceRequest.oneofGroups_);
};
goog.inherits(proto.ubii.services.ServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.services.ServiceRequest.displayName = 'proto.ubii.services.ServiceRequest';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.services.ServiceRequest.oneofGroups_ = [[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]];

/**
 * @enum {number}
 */
proto.ubii.services.ServiceRequest.TypeCase = {
  TYPE_NOT_SET: 0,
  CLIENT: 2,
  DEVICE: 3,
  TOPIC_SUBSCRIPTION: 4,
  SESSION: 5,
  SESSION_LIST: 6,
  INTERACTION: 7,
  INTERACTION_LIST: 8,
  TOPIC_MUX: 9,
  TOPIC_MUX_LIST: 10,
  TOPIC_DEMUX: 11,
  TOPIC_DEMUX_LIST: 12,
  CLIENT_LIST: 13,
  DEVICE_LIST: 14,
  PROCESSING_MODULE: 15,
  PROCESSING_MODULE_LIST: 16,
  LOCKSTEP_PROCESSING_REQUEST: 17
};

/**
 * @return {proto.ubii.services.ServiceRequest.TypeCase}
 */
proto.ubii.services.ServiceRequest.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.services.ServiceRequest.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.services.ServiceRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.ServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    client: (f = msg.getClient()) && proto.ubii.clients.Client.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto.ubii.devices.Device.toObject(includeInstance, f),
    topicSubscription: (f = msg.getTopicSubscription()) && proto.ubii.services.request.TopicSubscription.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto.ubii.sessions.Session.toObject(includeInstance, f),
    sessionList: (f = msg.getSessionList()) && proto.ubii.sessions.SessionList.toObject(includeInstance, f),
    interaction: (f = msg.getInteraction()) && proto.ubii.interactions.Interaction.toObject(includeInstance, f),
    interactionList: (f = msg.getInteractionList()) && proto.ubii.interactions.InteractionList.toObject(includeInstance, f),
    topicMux: (f = msg.getTopicMux()) && proto.ubii.devices.TopicMux.toObject(includeInstance, f),
    topicMuxList: (f = msg.getTopicMuxList()) && proto.ubii.devices.TopicMuxList.toObject(includeInstance, f),
    topicDemux: (f = msg.getTopicDemux()) && proto.ubii.devices.TopicDemux.toObject(includeInstance, f),
    topicDemuxList: (f = msg.getTopicDemuxList()) && proto.ubii.devices.TopicDemuxList.toObject(includeInstance, f),
    clientList: (f = msg.getClientList()) && proto.ubii.clients.ClientList.toObject(includeInstance, f),
    deviceList: (f = msg.getDeviceList()) && proto.ubii.devices.DeviceList.toObject(includeInstance, f),
    processingModule: (f = msg.getProcessingModule()) && proto.ubii.processing.ProcessingModule.toObject(includeInstance, f),
    processingModuleList: (f = msg.getProcessingModuleList()) && proto.ubii.processing.ProcessingModuleList.toObject(includeInstance, f),
    lockstepProcessingRequest: (f = msg.getLockstepProcessingRequest()) && proto.ubii.processing.LockstepProcessingRequest.toObject(includeInstance, f)
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
 * @return {!proto.ubii.services.ServiceRequest}
 */
proto.ubii.services.ServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.ServiceRequest;
  return proto.ubii.services.ServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.ServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.ServiceRequest}
 */
proto.ubii.services.ServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = new proto.ubii.clients.Client;
      reader.readMessage(value,proto.ubii.clients.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 3:
      var value = new proto.ubii.devices.Device;
      reader.readMessage(value,proto.ubii.devices.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 4:
      var value = new proto.ubii.services.request.TopicSubscription;
      reader.readMessage(value,proto.ubii.services.request.TopicSubscription.deserializeBinaryFromReader);
      msg.setTopicSubscription(value);
      break;
    case 5:
      var value = new proto.ubii.sessions.Session;
      reader.readMessage(value,proto.ubii.sessions.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 6:
      var value = new proto.ubii.sessions.SessionList;
      reader.readMessage(value,proto.ubii.sessions.SessionList.deserializeBinaryFromReader);
      msg.setSessionList(value);
      break;
    case 7:
      var value = new proto.ubii.interactions.Interaction;
      reader.readMessage(value,proto.ubii.interactions.Interaction.deserializeBinaryFromReader);
      msg.setInteraction(value);
      break;
    case 8:
      var value = new proto.ubii.interactions.InteractionList;
      reader.readMessage(value,proto.ubii.interactions.InteractionList.deserializeBinaryFromReader);
      msg.setInteractionList(value);
      break;
    case 9:
      var value = new proto.ubii.devices.TopicMux;
      reader.readMessage(value,proto.ubii.devices.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    case 10:
      var value = new proto.ubii.devices.TopicMuxList;
      reader.readMessage(value,proto.ubii.devices.TopicMuxList.deserializeBinaryFromReader);
      msg.setTopicMuxList(value);
      break;
    case 11:
      var value = new proto.ubii.devices.TopicDemux;
      reader.readMessage(value,proto.ubii.devices.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
      break;
    case 12:
      var value = new proto.ubii.devices.TopicDemuxList;
      reader.readMessage(value,proto.ubii.devices.TopicDemuxList.deserializeBinaryFromReader);
      msg.setTopicDemuxList(value);
      break;
    case 13:
      var value = new proto.ubii.clients.ClientList;
      reader.readMessage(value,proto.ubii.clients.ClientList.deserializeBinaryFromReader);
      msg.setClientList(value);
      break;
    case 14:
      var value = new proto.ubii.devices.DeviceList;
      reader.readMessage(value,proto.ubii.devices.DeviceList.deserializeBinaryFromReader);
      msg.setDeviceList(value);
      break;
    case 15:
      var value = new proto.ubii.processing.ProcessingModule;
      reader.readMessage(value,proto.ubii.processing.ProcessingModule.deserializeBinaryFromReader);
      msg.setProcessingModule(value);
      break;
    case 16:
      var value = new proto.ubii.processing.ProcessingModuleList;
      reader.readMessage(value,proto.ubii.processing.ProcessingModuleList.deserializeBinaryFromReader);
      msg.setProcessingModuleList(value);
      break;
    case 17:
      var value = new proto.ubii.processing.LockstepProcessingRequest;
      reader.readMessage(value,proto.ubii.processing.LockstepProcessingRequest.deserializeBinaryFromReader);
      msg.setLockstepProcessingRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.ServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.ServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.ServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.clients.Client.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.devices.Device.serializeBinaryToWriter
    );
  }
  f = message.getTopicSubscription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ubii.services.request.TopicSubscription.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ubii.sessions.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionList();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ubii.sessions.SessionList.serializeBinaryToWriter
    );
  }
  f = message.getInteraction();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ubii.interactions.Interaction.serializeBinaryToWriter
    );
  }
  f = message.getInteractionList();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ubii.interactions.InteractionList.serializeBinaryToWriter
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ubii.devices.TopicMux.serializeBinaryToWriter
    );
  }
  f = message.getTopicMuxList();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ubii.devices.TopicMuxList.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ubii.devices.TopicDemux.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemuxList();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ubii.devices.TopicDemuxList.serializeBinaryToWriter
    );
  }
  f = message.getClientList();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ubii.clients.ClientList.serializeBinaryToWriter
    );
  }
  f = message.getDeviceList();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ubii.devices.DeviceList.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModule();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ubii.processing.ProcessingModule.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModuleList();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ubii.processing.ProcessingModuleList.serializeBinaryToWriter
    );
  }
  f = message.getLockstepProcessingRequest();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ubii.processing.LockstepProcessingRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.services.ServiceRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ubii.clients.Client client = 2;
 * @return {?proto.ubii.clients.Client}
 */
proto.ubii.services.ServiceRequest.prototype.getClient = function() {
  return /** @type{?proto.ubii.clients.Client} */ (
    jspb.Message.getWrapperField(this, proto.ubii.clients.Client, 2));
};


/**
 * @param {?proto.ubii.clients.Client|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setClient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasClient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.devices.Device device = 3;
 * @return {?proto.ubii.devices.Device}
 */
proto.ubii.services.ServiceRequest.prototype.getDevice = function() {
  return /** @type{?proto.ubii.devices.Device} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.Device, 3));
};


/**
 * @param {?proto.ubii.devices.Device|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setDevice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional request.TopicSubscription topic_subscription = 4;
 * @return {?proto.ubii.services.request.TopicSubscription}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicSubscription = function() {
  return /** @type{?proto.ubii.services.request.TopicSubscription} */ (
    jspb.Message.getWrapperField(this, proto.ubii.services.request.TopicSubscription, 4));
};


/**
 * @param {?proto.ubii.services.request.TopicSubscription|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setTopicSubscription = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearTopicSubscription = function() {
  return this.setTopicSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicSubscription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ubii.sessions.Session session = 5;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.services.ServiceRequest.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto.ubii.sessions.Session, 5));
};


/**
 * @param {?proto.ubii.sessions.Session|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ubii.sessions.SessionList session_list = 6;
 * @return {?proto.ubii.sessions.SessionList}
 */
proto.ubii.services.ServiceRequest.prototype.getSessionList = function() {
  return /** @type{?proto.ubii.sessions.SessionList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.sessions.SessionList, 6));
};


/**
 * @param {?proto.ubii.sessions.SessionList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setSessionList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearSessionList = function() {
  return this.setSessionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasSessionList = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.interactions.Interaction interaction = 7;
 * @return {?proto.ubii.interactions.Interaction}
 */
proto.ubii.services.ServiceRequest.prototype.getInteraction = function() {
  return /** @type{?proto.ubii.interactions.Interaction} */ (
    jspb.Message.getWrapperField(this, proto.ubii.interactions.Interaction, 7));
};


/**
 * @param {?proto.ubii.interactions.Interaction|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setInteraction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearInteraction = function() {
  return this.setInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasInteraction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.interactions.InteractionList interaction_list = 8;
 * @return {?proto.ubii.interactions.InteractionList}
 */
proto.ubii.services.ServiceRequest.prototype.getInteractionList = function() {
  return /** @type{?proto.ubii.interactions.InteractionList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.interactions.InteractionList, 8));
};


/**
 * @param {?proto.ubii.interactions.InteractionList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setInteractionList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearInteractionList = function() {
  return this.setInteractionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasInteractionList = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 9;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicMux, 9));
};


/**
 * @param {?proto.ubii.devices.TopicMux|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setTopicMux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearTopicMux = function() {
  return this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicMux = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.devices.TopicMuxList topic_mux_list = 10;
 * @return {?proto.ubii.devices.TopicMuxList}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicMuxList = function() {
  return /** @type{?proto.ubii.devices.TopicMuxList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicMuxList, 10));
};


/**
 * @param {?proto.ubii.devices.TopicMuxList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setTopicMuxList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearTopicMuxList = function() {
  return this.setTopicMuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicMuxList = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ubii.devices.TopicDemux topic_demux = 11;
 * @return {?proto.ubii.devices.TopicDemux}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicDemux = function() {
  return /** @type{?proto.ubii.devices.TopicDemux} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicDemux, 11));
};


/**
 * @param {?proto.ubii.devices.TopicDemux|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setTopicDemux = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearTopicDemux = function() {
  return this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicDemux = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ubii.devices.TopicDemuxList topic_demux_list = 12;
 * @return {?proto.ubii.devices.TopicDemuxList}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicDemuxList = function() {
  return /** @type{?proto.ubii.devices.TopicDemuxList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.TopicDemuxList, 12));
};


/**
 * @param {?proto.ubii.devices.TopicDemuxList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setTopicDemuxList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearTopicDemuxList = function() {
  return this.setTopicDemuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicDemuxList = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ubii.clients.ClientList client_list = 13;
 * @return {?proto.ubii.clients.ClientList}
 */
proto.ubii.services.ServiceRequest.prototype.getClientList = function() {
  return /** @type{?proto.ubii.clients.ClientList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.clients.ClientList, 13));
};


/**
 * @param {?proto.ubii.clients.ClientList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setClientList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearClientList = function() {
  return this.setClientList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasClientList = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ubii.devices.DeviceList device_list = 14;
 * @return {?proto.ubii.devices.DeviceList}
 */
proto.ubii.services.ServiceRequest.prototype.getDeviceList = function() {
  return /** @type{?proto.ubii.devices.DeviceList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.devices.DeviceList, 14));
};


/**
 * @param {?proto.ubii.devices.DeviceList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setDeviceList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearDeviceList = function() {
  return this.setDeviceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasDeviceList = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.processing.ProcessingModule processing_module = 15;
 * @return {?proto.ubii.processing.ProcessingModule}
 */
proto.ubii.services.ServiceRequest.prototype.getProcessingModule = function() {
  return /** @type{?proto.ubii.processing.ProcessingModule} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingModule, 15));
};


/**
 * @param {?proto.ubii.processing.ProcessingModule|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setProcessingModule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearProcessingModule = function() {
  return this.setProcessingModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasProcessingModule = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.processing.ProcessingModuleList processing_module_list = 16;
 * @return {?proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.services.ServiceRequest.prototype.getProcessingModuleList = function() {
  return /** @type{?proto.ubii.processing.ProcessingModuleList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.ProcessingModuleList, 16));
};


/**
 * @param {?proto.ubii.processing.ProcessingModuleList|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setProcessingModuleList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearProcessingModuleList = function() {
  return this.setProcessingModuleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasProcessingModuleList = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ubii.processing.LockstepProcessingRequest lockstep_processing_request = 17;
 * @return {?proto.ubii.processing.LockstepProcessingRequest}
 */
proto.ubii.services.ServiceRequest.prototype.getLockstepProcessingRequest = function() {
  return /** @type{?proto.ubii.processing.LockstepProcessingRequest} */ (
    jspb.Message.getWrapperField(this, proto.ubii.processing.LockstepProcessingRequest, 17));
};


/**
 * @param {?proto.ubii.processing.LockstepProcessingRequest|undefined} value
 * @return {!proto.ubii.services.ServiceRequest} returns this
*/
proto.ubii.services.ServiceRequest.prototype.setLockstepProcessingRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.services.ServiceRequest} returns this
 */
proto.ubii.services.ServiceRequest.prototype.clearLockstepProcessingRequest = function() {
  return this.setLockstepProcessingRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasLockstepProcessingRequest = function() {
  return jspb.Message.getField(this, 17) != null;
};


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
proto.ubii.topicData.TopicData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.topicData.TopicData.oneofGroups_);
};
goog.inherits(proto.ubii.topicData.TopicData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.TopicData.displayName = 'proto.ubii.topicData.TopicData';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.topicData.TopicData.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.ubii.topicData.TopicData.TypeCase = {
  TYPE_NOT_SET: 0,
  TOPIC_DATA_RECORD: 2,
  TOPIC_DATA_RECORD_LIST: 3,
  ERROR: 4
};

/**
 * @return {proto.ubii.topicData.TopicData.TypeCase}
 */
proto.ubii.topicData.TopicData.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.topicData.TopicData.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.topicData.TopicData.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.topicData.TopicData.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.TopicData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.TopicData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicData.toObject = function(includeInstance, msg) {
  var f, obj = {
    topicDataRecord: (f = msg.getTopicDataRecord()) && proto.ubii.topicData.TopicDataRecord.toObject(includeInstance, f),
    topicDataRecordList: (f = msg.getTopicDataRecordList()) && proto.ubii.topicData.TopicDataRecordList.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.ubii.general.Error.toObject(includeInstance, f)
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
 * @return {!proto.ubii.topicData.TopicData}
 */
proto.ubii.topicData.TopicData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.TopicData;
  return proto.ubii.topicData.TopicData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.TopicData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.TopicData}
 */
proto.ubii.topicData.TopicData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.ubii.topicData.TopicDataRecord;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader);
      msg.setTopicDataRecord(value);
      break;
    case 3:
      var value = new proto.ubii.topicData.TopicDataRecordList;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader);
      msg.setTopicDataRecordList(value);
      break;
    case 4:
      var value = new proto.ubii.general.Error;
      reader.readMessage(value,proto.ubii.general.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.topicData.TopicData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.TopicData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.TopicData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopicDataRecord();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter
    );
  }
  f = message.getTopicDataRecordList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ubii.general.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional TopicDataRecord topic_data_record = 2;
 * @return {?proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicData.prototype.getTopicDataRecord = function() {
  return /** @type{?proto.ubii.topicData.TopicDataRecord} */ (
    jspb.Message.getWrapperField(this, proto.ubii.topicData.TopicDataRecord, 2));
};


/**
 * @param {?proto.ubii.topicData.TopicDataRecord|undefined} value
 * @return {!proto.ubii.topicData.TopicData} returns this
*/
proto.ubii.topicData.TopicData.prototype.setTopicDataRecord = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ubii.topicData.TopicData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicData} returns this
 */
proto.ubii.topicData.TopicData.prototype.clearTopicDataRecord = function() {
  return this.setTopicDataRecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicData.prototype.hasTopicDataRecord = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TopicDataRecordList topic_data_record_list = 3;
 * @return {?proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.topicData.TopicData.prototype.getTopicDataRecordList = function() {
  return /** @type{?proto.ubii.topicData.TopicDataRecordList} */ (
    jspb.Message.getWrapperField(this, proto.ubii.topicData.TopicDataRecordList, 3));
};


/**
 * @param {?proto.ubii.topicData.TopicDataRecordList|undefined} value
 * @return {!proto.ubii.topicData.TopicData} returns this
*/
proto.ubii.topicData.TopicData.prototype.setTopicDataRecordList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ubii.topicData.TopicData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicData} returns this
 */
proto.ubii.topicData.TopicData.prototype.clearTopicDataRecordList = function() {
  return this.setTopicDataRecordList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicData.prototype.hasTopicDataRecordList = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ubii.general.Error error = 4;
 * @return {?proto.ubii.general.Error}
 */
proto.ubii.topicData.TopicData.prototype.getError = function() {
  return /** @type{?proto.ubii.general.Error} */ (
    jspb.Message.getWrapperField(this, proto.ubii.general.Error, 4));
};


/**
 * @param {?proto.ubii.general.Error|undefined} value
 * @return {!proto.ubii.topicData.TopicData} returns this
*/
proto.ubii.topicData.TopicData.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ubii.topicData.TopicData.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicData} returns this
 */
proto.ubii.topicData.TopicData.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicData.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};


