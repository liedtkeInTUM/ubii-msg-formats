/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_clients_client_pb = require('../../proto/clients/client_pb.js');
var proto_devices_component_pb = require('../../proto/devices/component_pb.js');
var proto_devices_device_pb = require('../../proto/devices/device_pb.js');
var proto_devices_topicMux_pb = require('../../proto/devices/topicMux_pb.js');
var proto_devices_topicDemux_pb = require('../../proto/devices/topicDemux_pb.js');
var proto_sessions_session_pb = require('../../proto/sessions/session_pb.js');
var proto_services_request_topicSubscription_pb = require('../../proto/services/request/topicSubscription_pb.js');
var proto_processing_processingModule_pb = require('../../proto/processing/processingModule_pb.js');
var proto_processing_lockstepProcessing_pb = require('../../proto/processing/lockstepProcessing_pb.js');
goog.exportSymbol('proto.ubii.services.ServiceRequest', null, global);

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
  PROCESSING_MODULE: 7,
  PROCESSING_MODULE_LIST: 8,
  TOPIC_MUX: 9,
  TOPIC_MUX_LIST: 10,
  TOPIC_DEMUX: 11,
  TOPIC_DEMUX_LIST: 12,
  CLIENT_LIST: 13,
  DEVICE_LIST: 14,
  LOCKSTEP_PROCESSING_REQUEST: 15,
  COMPONENT: 16,
  COMPONENT_LIST: 17
};

/**
 * @return {proto.ubii.services.ServiceRequest.TypeCase}
 */
proto.ubii.services.ServiceRequest.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.services.ServiceRequest.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.services.ServiceRequest.oneofGroups_[0]));
};



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
proto.ubii.services.ServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    client: (f = msg.getClient()) && proto_clients_client_pb.Client.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto_devices_device_pb.Device.toObject(includeInstance, f),
    topicSubscription: (f = msg.getTopicSubscription()) && proto_services_request_topicSubscription_pb.TopicSubscription.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto_sessions_session_pb.Session.toObject(includeInstance, f),
    sessionList: (f = msg.getSessionList()) && proto_sessions_session_pb.SessionList.toObject(includeInstance, f),
    processingModule: (f = msg.getProcessingModule()) && proto_processing_processingModule_pb.ProcessingModule.toObject(includeInstance, f),
    processingModuleList: (f = msg.getProcessingModuleList()) && proto_processing_processingModule_pb.ProcessingModuleList.toObject(includeInstance, f),
    topicMux: (f = msg.getTopicMux()) && proto_devices_topicMux_pb.TopicMux.toObject(includeInstance, f),
    topicMuxList: (f = msg.getTopicMuxList()) && proto_devices_topicMux_pb.TopicMuxList.toObject(includeInstance, f),
    topicDemux: (f = msg.getTopicDemux()) && proto_devices_topicDemux_pb.TopicDemux.toObject(includeInstance, f),
    topicDemuxList: (f = msg.getTopicDemuxList()) && proto_devices_topicDemux_pb.TopicDemuxList.toObject(includeInstance, f),
    clientList: (f = msg.getClientList()) && proto_clients_client_pb.ClientList.toObject(includeInstance, f),
    deviceList: (f = msg.getDeviceList()) && proto_devices_device_pb.DeviceList.toObject(includeInstance, f),
    lockstepProcessingRequest: (f = msg.getLockstepProcessingRequest()) && proto_processing_lockstepProcessing_pb.LockstepProcessingRequest.toObject(includeInstance, f),
    component: (f = msg.getComponent()) && proto_devices_component_pb.Component.toObject(includeInstance, f),
    componentList: (f = msg.getComponentList()) && proto_devices_component_pb.ComponentList.toObject(includeInstance, f)
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
      var value = new proto_clients_client_pb.Client;
      reader.readMessage(value,proto_clients_client_pb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 3:
      var value = new proto_devices_device_pb.Device;
      reader.readMessage(value,proto_devices_device_pb.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 4:
      var value = new proto_services_request_topicSubscription_pb.TopicSubscription;
      reader.readMessage(value,proto_services_request_topicSubscription_pb.TopicSubscription.deserializeBinaryFromReader);
      msg.setTopicSubscription(value);
      break;
    case 5:
      var value = new proto_sessions_session_pb.Session;
      reader.readMessage(value,proto_sessions_session_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 6:
      var value = new proto_sessions_session_pb.SessionList;
      reader.readMessage(value,proto_sessions_session_pb.SessionList.deserializeBinaryFromReader);
      msg.setSessionList(value);
      break;
    case 7:
      var value = new proto_processing_processingModule_pb.ProcessingModule;
      reader.readMessage(value,proto_processing_processingModule_pb.ProcessingModule.deserializeBinaryFromReader);
      msg.setProcessingModule(value);
      break;
    case 8:
      var value = new proto_processing_processingModule_pb.ProcessingModuleList;
      reader.readMessage(value,proto_processing_processingModule_pb.ProcessingModuleList.deserializeBinaryFromReader);
      msg.setProcessingModuleList(value);
      break;
    case 9:
      var value = new proto_devices_topicMux_pb.TopicMux;
      reader.readMessage(value,proto_devices_topicMux_pb.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    case 10:
      var value = new proto_devices_topicMux_pb.TopicMuxList;
      reader.readMessage(value,proto_devices_topicMux_pb.TopicMuxList.deserializeBinaryFromReader);
      msg.setTopicMuxList(value);
      break;
    case 11:
      var value = new proto_devices_topicDemux_pb.TopicDemux;
      reader.readMessage(value,proto_devices_topicDemux_pb.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
      break;
    case 12:
      var value = new proto_devices_topicDemux_pb.TopicDemuxList;
      reader.readMessage(value,proto_devices_topicDemux_pb.TopicDemuxList.deserializeBinaryFromReader);
      msg.setTopicDemuxList(value);
      break;
    case 13:
      var value = new proto_clients_client_pb.ClientList;
      reader.readMessage(value,proto_clients_client_pb.ClientList.deserializeBinaryFromReader);
      msg.setClientList(value);
      break;
    case 14:
      var value = new proto_devices_device_pb.DeviceList;
      reader.readMessage(value,proto_devices_device_pb.DeviceList.deserializeBinaryFromReader);
      msg.setDeviceList(value);
      break;
    case 15:
      var value = new proto_processing_lockstepProcessing_pb.LockstepProcessingRequest;
      reader.readMessage(value,proto_processing_lockstepProcessing_pb.LockstepProcessingRequest.deserializeBinaryFromReader);
      msg.setLockstepProcessingRequest(value);
      break;
    case 16:
      var value = new proto_devices_component_pb.Component;
      reader.readMessage(value,proto_devices_component_pb.Component.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 17:
      var value = new proto_devices_component_pb.ComponentList;
      reader.readMessage(value,proto_devices_component_pb.ComponentList.deserializeBinaryFromReader);
      msg.setComponentList(value);
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
      proto_clients_client_pb.Client.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_devices_device_pb.Device.serializeBinaryToWriter
    );
  }
  f = message.getTopicSubscription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_services_request_topicSubscription_pb.TopicSubscription.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_sessions_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionList();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_sessions_session_pb.SessionList.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModule();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_processing_processingModule_pb.ProcessingModule.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModuleList();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_processing_processingModule_pb.ProcessingModuleList.serializeBinaryToWriter
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_devices_topicMux_pb.TopicMux.serializeBinaryToWriter
    );
  }
  f = message.getTopicMuxList();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_devices_topicMux_pb.TopicMuxList.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_devices_topicDemux_pb.TopicDemux.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemuxList();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_devices_topicDemux_pb.TopicDemuxList.serializeBinaryToWriter
    );
  }
  f = message.getClientList();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_clients_client_pb.ClientList.serializeBinaryToWriter
    );
  }
  f = message.getDeviceList();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_devices_device_pb.DeviceList.serializeBinaryToWriter
    );
  }
  f = message.getLockstepProcessingRequest();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_processing_lockstepProcessing_pb.LockstepProcessingRequest.serializeBinaryToWriter
    );
  }
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_devices_component_pb.Component.serializeBinaryToWriter
    );
  }
  f = message.getComponentList();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_devices_component_pb.ComponentList.serializeBinaryToWriter
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


/** @param {string} value */
proto.ubii.services.ServiceRequest.prototype.setTopic = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ubii.clients.Client client = 2;
 * @return {?proto.ubii.clients.Client}
 */
proto.ubii.services.ServiceRequest.prototype.getClient = function() {
  return /** @type{?proto.ubii.clients.Client} */ (
    jspb.Message.getWrapperField(this, proto_clients_client_pb.Client, 2));
};


/** @param {?proto.ubii.clients.Client|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setClient = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearClient = function() {
  this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_devices_device_pb.Device, 3));
};


/** @param {?proto.ubii.devices.Device|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setDevice = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_services_request_topicSubscription_pb.TopicSubscription, 4));
};


/** @param {?proto.ubii.services.request.TopicSubscription|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicSubscription = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicSubscription = function() {
  this.setTopicSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.Session, 5));
};


/** @param {?proto.ubii.sessions.Session|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setSession = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearSession = function() {
  this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.SessionList, 6));
};


/** @param {?proto.ubii.sessions.SessionList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setSessionList = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearSessionList = function() {
  this.setSessionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasSessionList = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.processing.ProcessingModule processing_module = 7;
 * @return {?proto.ubii.processing.ProcessingModule}
 */
proto.ubii.services.ServiceRequest.prototype.getProcessingModule = function() {
  return /** @type{?proto.ubii.processing.ProcessingModule} */ (
    jspb.Message.getWrapperField(this, proto_processing_processingModule_pb.ProcessingModule, 7));
};


/** @param {?proto.ubii.processing.ProcessingModule|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setProcessingModule = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearProcessingModule = function() {
  this.setProcessingModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasProcessingModule = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.processing.ProcessingModuleList processing_module_list = 8;
 * @return {?proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.services.ServiceRequest.prototype.getProcessingModuleList = function() {
  return /** @type{?proto.ubii.processing.ProcessingModuleList} */ (
    jspb.Message.getWrapperField(this, proto_processing_processingModule_pb.ProcessingModuleList, 8));
};


/** @param {?proto.ubii.processing.ProcessingModuleList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setProcessingModuleList = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearProcessingModuleList = function() {
  this.setProcessingModuleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasProcessingModuleList = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 9;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicMux_pb.TopicMux, 9));
};


/** @param {?proto.ubii.devices.TopicMux|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicMux = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicMux = function() {
  this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_devices_topicMux_pb.TopicMuxList, 10));
};


/** @param {?proto.ubii.devices.TopicMuxList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicMuxList = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicMuxList = function() {
  this.setTopicMuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_devices_topicDemux_pb.TopicDemux, 11));
};


/** @param {?proto.ubii.devices.TopicDemux|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicDemux = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicDemux = function() {
  this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_devices_topicDemux_pb.TopicDemuxList, 12));
};


/** @param {?proto.ubii.devices.TopicDemuxList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicDemuxList = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicDemuxList = function() {
  this.setTopicDemuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_clients_client_pb.ClientList, 13));
};


/** @param {?proto.ubii.clients.ClientList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setClientList = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearClientList = function() {
  this.setClientList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
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
    jspb.Message.getWrapperField(this, proto_devices_device_pb.DeviceList, 14));
};


/** @param {?proto.ubii.devices.DeviceList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setDeviceList = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearDeviceList = function() {
  this.setDeviceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasDeviceList = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.processing.LockstepProcessingRequest lockstep_processing_request = 15;
 * @return {?proto.ubii.processing.LockstepProcessingRequest}
 */
proto.ubii.services.ServiceRequest.prototype.getLockstepProcessingRequest = function() {
  return /** @type{?proto.ubii.processing.LockstepProcessingRequest} */ (
    jspb.Message.getWrapperField(this, proto_processing_lockstepProcessing_pb.LockstepProcessingRequest, 15));
};


/** @param {?proto.ubii.processing.LockstepProcessingRequest|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setLockstepProcessingRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearLockstepProcessingRequest = function() {
  this.setLockstepProcessingRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasLockstepProcessingRequest = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.devices.Component component = 16;
 * @return {?proto.ubii.devices.Component}
 */
proto.ubii.services.ServiceRequest.prototype.getComponent = function() {
  return /** @type{?proto.ubii.devices.Component} */ (
    jspb.Message.getWrapperField(this, proto_devices_component_pb.Component, 16));
};


/** @param {?proto.ubii.devices.Component|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setComponent = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearComponent = function() {
  this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ubii.devices.ComponentList component_list = 17;
 * @return {?proto.ubii.devices.ComponentList}
 */
proto.ubii.services.ServiceRequest.prototype.getComponentList = function() {
  return /** @type{?proto.ubii.devices.ComponentList} */ (
    jspb.Message.getWrapperField(this, proto_devices_component_pb.ComponentList, 17));
};


/** @param {?proto.ubii.devices.ComponentList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setComponentList = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearComponentList = function() {
  this.setComponentList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasComponentList = function() {
  return jspb.Message.getField(this, 17) != null;
};


goog.object.extend(exports, proto.ubii.services);
