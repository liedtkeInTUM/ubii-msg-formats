/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ubii = (function() {

    /**
     * Namespace ubii.
     * @exports ubii
     * @namespace
     */
    var ubii = {};

    ubii.clients = (function() {

        /**
         * Namespace clients.
         * @memberof ubii
         * @namespace
         */
        var clients = {};

        clients.Client = (function() {

            /**
             * Properties of a Client.
             * @memberof ubii.clients
             * @interface IClient
             * @property {string|null} [id] Client id
             * @property {string|null} [name] Client name
             * @property {Array.<ubii.devices.IDevice>|null} [devices] Client devices
             */

            /**
             * Constructs a new Client.
             * @memberof ubii.clients
             * @classdesc Represents a Client.
             * @implements IClient
             * @constructor
             * @param {ubii.clients.IClient=} [properties] Properties to set
             */
            function Client(properties) {
                this.devices = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Client id.
             * @member {string} id
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.id = "";

            /**
             * Client name.
             * @member {string} name
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.name = "";

            /**
             * Client devices.
             * @member {Array.<ubii.devices.IDevice>} devices
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.devices = $util.emptyArray;

            /**
             * Creates a new Client instance using the specified properties.
             * @function create
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient=} [properties] Properties to set
             * @returns {ubii.clients.Client} Client instance
             */
            Client.create = function create(properties) {
                return new Client(properties);
            };

            /**
             * Encodes the specified Client message. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @function encode
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.devices != null && message.devices.length)
                    for (var i = 0; i < message.devices.length; ++i)
                        $root.ubii.devices.Device.encode(message.devices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Client message, length delimited. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Client message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.clients.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.clients.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.clients.Client();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        if (!(message.devices && message.devices.length))
                            message.devices = [];
                        message.devices.push($root.ubii.devices.Device.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Client message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.clients.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.clients.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Client message.
             * @function verify
             * @memberof ubii.clients.Client
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Client.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.devices != null && message.hasOwnProperty("devices")) {
                    if (!Array.isArray(message.devices))
                        return "devices: array expected";
                    for (var i = 0; i < message.devices.length; ++i) {
                        var error = $root.ubii.devices.Device.verify(message.devices[i]);
                        if (error)
                            return "devices." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Client message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.clients.Client
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.clients.Client} Client
             */
            Client.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.clients.Client)
                    return object;
                var message = new $root.ubii.clients.Client();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.devices) {
                    if (!Array.isArray(object.devices))
                        throw TypeError(".ubii.clients.Client.devices: array expected");
                    message.devices = [];
                    for (var i = 0; i < object.devices.length; ++i) {
                        if (typeof object.devices[i] !== "object")
                            throw TypeError(".ubii.clients.Client.devices: object expected");
                        message.devices[i] = $root.ubii.devices.Device.fromObject(object.devices[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Client message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.Client} message Client
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Client.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.devices = [];
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.devices && message.devices.length) {
                    object.devices = [];
                    for (var j = 0; j < message.devices.length; ++j)
                        object.devices[j] = $root.ubii.devices.Device.toObject(message.devices[j], options);
                }
                return object;
            };

            /**
             * Converts this Client to JSON.
             * @function toJSON
             * @memberof ubii.clients.Client
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Client.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Client;
        })();

        clients.ClientList = (function() {

            /**
             * Properties of a ClientList.
             * @memberof ubii.clients
             * @interface IClientList
             * @property {Array.<ubii.clients.IClient>|null} [elements] ClientList elements
             */

            /**
             * Constructs a new ClientList.
             * @memberof ubii.clients
             * @classdesc Represents a ClientList.
             * @implements IClientList
             * @constructor
             * @param {ubii.clients.IClientList=} [properties] Properties to set
             */
            function ClientList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientList elements.
             * @member {Array.<ubii.clients.IClient>} elements
             * @memberof ubii.clients.ClientList
             * @instance
             */
            ClientList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new ClientList instance using the specified properties.
             * @function create
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList=} [properties] Properties to set
             * @returns {ubii.clients.ClientList} ClientList instance
             */
            ClientList.create = function create(properties) {
                return new ClientList(properties);
            };

            /**
             * Encodes the specified ClientList message. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @function encode
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList} message ClientList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.clients.Client.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ClientList message, length delimited. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList} message ClientList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.clients.ClientList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.clients.ClientList} ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.clients.ClientList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.clients.Client.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.clients.ClientList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.clients.ClientList} ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientList message.
             * @function verify
             * @memberof ubii.clients.ClientList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.clients.Client.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ClientList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.clients.ClientList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.clients.ClientList} ClientList
             */
            ClientList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.clients.ClientList)
                    return object;
                var message = new $root.ubii.clients.ClientList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.clients.ClientList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.clients.ClientList.elements: object expected");
                        message.elements[i] = $root.ubii.clients.Client.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ClientList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.ClientList} message ClientList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.clients.Client.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this ClientList to JSON.
             * @function toJSON
             * @memberof ubii.clients.ClientList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClientList;
        })();

        return clients;
    })();

    ubii.devices = (function() {

        /**
         * Namespace devices.
         * @memberof ubii
         * @namespace
         */
        var devices = {};

        devices.Component = (function() {

            /**
             * Properties of a Component.
             * @memberof ubii.devices
             * @interface IComponent
             * @property {string|null} [topic] Component topic
             * @property {string|null} [messageFormat] Component messageFormat
             * @property {ubii.devices.Component.IOType|null} [ioType] Component ioType
             */

            /**
             * Constructs a new Component.
             * @memberof ubii.devices
             * @classdesc Represents a Component.
             * @implements IComponent
             * @constructor
             * @param {ubii.devices.IComponent=} [properties] Properties to set
             */
            function Component(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Component topic.
             * @member {string} topic
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.topic = "";

            /**
             * Component messageFormat.
             * @member {string} messageFormat
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.messageFormat = "";

            /**
             * Component ioType.
             * @member {ubii.devices.Component.IOType} ioType
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.ioType = 0;

            /**
             * Creates a new Component instance using the specified properties.
             * @function create
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent=} [properties] Properties to set
             * @returns {ubii.devices.Component} Component instance
             */
            Component.create = function create(properties) {
                return new Component(properties);
            };

            /**
             * Encodes the specified Component message. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent} message Component message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Component.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageFormat);
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ioType);
                return writer;
            };

            /**
             * Encodes the specified Component message, length delimited. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent} message Component message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Component.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Component message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.Component
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.Component} Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Component.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.Component();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.messageFormat = reader.string();
                        break;
                    case 3:
                        message.ioType = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Component message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.Component
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.Component} Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Component.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Component message.
             * @function verify
             * @memberof ubii.devices.Component
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Component.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    if (!$util.isString(message.messageFormat))
                        return "messageFormat: string expected";
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    switch (message.ioType) {
                    default:
                        return "ioType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a Component message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.Component
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.Component} Component
             */
            Component.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.Component)
                    return object;
                var message = new $root.ubii.devices.Component();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.messageFormat != null)
                    message.messageFormat = String(object.messageFormat);
                switch (object.ioType) {
                case "INPUT":
                case 0:
                    message.ioType = 0;
                    break;
                case "OUTPUT":
                case 1:
                    message.ioType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a Component message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.Component} message Component
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Component.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topic = "";
                    object.messageFormat = "";
                    object.ioType = options.enums === String ? "INPUT" : 0;
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    object.messageFormat = message.messageFormat;
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    object.ioType = options.enums === String ? $root.ubii.devices.Component.IOType[message.ioType] : message.ioType;
                return object;
            };

            /**
             * Converts this Component to JSON.
             * @function toJSON
             * @memberof ubii.devices.Component
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Component.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * IOType enum.
             * @name ubii.devices.Component.IOType
             * @enum {string}
             * @property {number} INPUT=0 INPUT value
             * @property {number} OUTPUT=1 OUTPUT value
             */
            Component.IOType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INPUT"] = 0;
                values[valuesById[1] = "OUTPUT"] = 1;
                return values;
            })();

            return Component;
        })();

        devices.Device = (function() {

            /**
             * Properties of a Device.
             * @memberof ubii.devices
             * @interface IDevice
             * @property {string|null} [id] Device id
             * @property {string|null} [name] Device name
             * @property {ubii.devices.Device.DeviceType|null} [deviceType] Device deviceType
             * @property {Array.<ubii.devices.IComponent>|null} [components] Device components
             * @property {string|null} [clientId] Device clientId
             */

            /**
             * Constructs a new Device.
             * @memberof ubii.devices
             * @classdesc Represents a Device.
             * @implements IDevice
             * @constructor
             * @param {ubii.devices.IDevice=} [properties] Properties to set
             */
            function Device(properties) {
                this.components = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Device id.
             * @member {string} id
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.id = "";

            /**
             * Device name.
             * @member {string} name
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.name = "";

            /**
             * Device deviceType.
             * @member {ubii.devices.Device.DeviceType} deviceType
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.deviceType = 0;

            /**
             * Device components.
             * @member {Array.<ubii.devices.IComponent>} components
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.components = $util.emptyArray;

            /**
             * Device clientId.
             * @member {string} clientId
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.clientId = "";

            /**
             * Creates a new Device instance using the specified properties.
             * @function create
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice=} [properties] Properties to set
             * @returns {ubii.devices.Device} Device instance
             */
            Device.create = function create(properties) {
                return new Device(properties);
            };

            /**
             * Encodes the specified Device message. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deviceType);
                if (message.components != null && message.components.length)
                    for (var i = 0; i < message.components.length; ++i)
                        $root.ubii.devices.Component.encode(message.components[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientId);
                return writer;
            };

            /**
             * Encodes the specified Device message, length delimited. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Device message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.Device();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.deviceType = reader.int32();
                        break;
                    case 4:
                        if (!(message.components && message.components.length))
                            message.components = [];
                        message.components.push($root.ubii.devices.Component.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.clientId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Device message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Device message.
             * @function verify
             * @memberof ubii.devices.Device
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Device.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    switch (message.deviceType) {
                    default:
                        return "deviceType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.components != null && message.hasOwnProperty("components")) {
                    if (!Array.isArray(message.components))
                        return "components: array expected";
                    for (var i = 0; i < message.components.length; ++i) {
                        var error = $root.ubii.devices.Component.verify(message.components[i]);
                        if (error)
                            return "components." + error;
                    }
                }
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    if (!$util.isString(message.clientId))
                        return "clientId: string expected";
                return null;
            };

            /**
             * Creates a Device message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.Device
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.Device} Device
             */
            Device.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.Device)
                    return object;
                var message = new $root.ubii.devices.Device();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.deviceType) {
                case "PARTICIPANT":
                case 0:
                    message.deviceType = 0;
                    break;
                case "WATCHER":
                case 1:
                    message.deviceType = 1;
                    break;
                }
                if (object.components) {
                    if (!Array.isArray(object.components))
                        throw TypeError(".ubii.devices.Device.components: array expected");
                    message.components = [];
                    for (var i = 0; i < object.components.length; ++i) {
                        if (typeof object.components[i] !== "object")
                            throw TypeError(".ubii.devices.Device.components: object expected");
                        message.components[i] = $root.ubii.devices.Component.fromObject(object.components[i]);
                    }
                }
                if (object.clientId != null)
                    message.clientId = String(object.clientId);
                return message;
            };

            /**
             * Creates a plain object from a Device message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.Device} message Device
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Device.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.components = [];
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.deviceType = options.enums === String ? "PARTICIPANT" : 0;
                    object.clientId = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    object.deviceType = options.enums === String ? $root.ubii.devices.Device.DeviceType[message.deviceType] : message.deviceType;
                if (message.components && message.components.length) {
                    object.components = [];
                    for (var j = 0; j < message.components.length; ++j)
                        object.components[j] = $root.ubii.devices.Component.toObject(message.components[j], options);
                }
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    object.clientId = message.clientId;
                return object;
            };

            /**
             * Converts this Device to JSON.
             * @function toJSON
             * @memberof ubii.devices.Device
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Device.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * DeviceType enum.
             * @name ubii.devices.Device.DeviceType
             * @enum {string}
             * @property {number} PARTICIPANT=0 PARTICIPANT value
             * @property {number} WATCHER=1 WATCHER value
             */
            Device.DeviceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PARTICIPANT"] = 0;
                values[valuesById[1] = "WATCHER"] = 1;
                return values;
            })();

            return Device;
        })();

        devices.DeviceList = (function() {

            /**
             * Properties of a DeviceList.
             * @memberof ubii.devices
             * @interface IDeviceList
             * @property {Array.<ubii.devices.IDevice>|null} [elements] DeviceList elements
             */

            /**
             * Constructs a new DeviceList.
             * @memberof ubii.devices
             * @classdesc Represents a DeviceList.
             * @implements IDeviceList
             * @constructor
             * @param {ubii.devices.IDeviceList=} [properties] Properties to set
             */
            function DeviceList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeviceList elements.
             * @member {Array.<ubii.devices.IDevice>} elements
             * @memberof ubii.devices.DeviceList
             * @instance
             */
            DeviceList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new DeviceList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList=} [properties] Properties to set
             * @returns {ubii.devices.DeviceList} DeviceList instance
             */
            DeviceList.create = function create(properties) {
                return new DeviceList(properties);
            };

            /**
             * Encodes the specified DeviceList message. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList} message DeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.Device.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeviceList message, length delimited. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList} message DeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeviceList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.DeviceList} DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.DeviceList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.Device.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeviceList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.DeviceList} DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeviceList message.
             * @function verify
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.Device.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DeviceList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.DeviceList} DeviceList
             */
            DeviceList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.DeviceList)
                    return object;
                var message = new $root.ubii.devices.DeviceList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.DeviceList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.DeviceList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.Device.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DeviceList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.DeviceList} message DeviceList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.Device.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this DeviceList to JSON.
             * @function toJSON
             * @memberof ubii.devices.DeviceList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeviceList;
        })();

        devices.TopicDemux = (function() {

            /**
             * Properties of a TopicDemux.
             * @memberof ubii.devices
             * @interface ITopicDemux
             * @property {string|null} [id] TopicDemux id
             * @property {string|null} [name] TopicDemux name
             * @property {string|null} [dataType] TopicDemux dataType
             * @property {string|null} [outputTopicFormat] TopicDemux outputTopicFormat
             */

            /**
             * Constructs a new TopicDemux.
             * @memberof ubii.devices
             * @classdesc Represents a TopicDemux.
             * @implements ITopicDemux
             * @constructor
             * @param {ubii.devices.ITopicDemux=} [properties] Properties to set
             */
            function TopicDemux(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDemux id.
             * @member {string} id
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.id = "";

            /**
             * TopicDemux name.
             * @member {string} name
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.name = "";

            /**
             * TopicDemux dataType.
             * @member {string} dataType
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.dataType = "";

            /**
             * TopicDemux outputTopicFormat.
             * @member {string} outputTopicFormat
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.outputTopicFormat = "";

            /**
             * Creates a new TopicDemux instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux=} [properties] Properties to set
             * @returns {ubii.devices.TopicDemux} TopicDemux instance
             */
            TopicDemux.create = function create(properties) {
                return new TopicDemux(properties);
            };

            /**
             * Encodes the specified TopicDemux message. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux} message TopicDemux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemux.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.dataType);
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.outputTopicFormat);
                return writer;
            };

            /**
             * Encodes the specified TopicDemux message, length delimited. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux} message TopicDemux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemux.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDemux message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicDemux} TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemux.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicDemux();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.dataType = reader.string();
                        break;
                    case 4:
                        message.outputTopicFormat = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDemux message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicDemux} TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemux.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDemux message.
             * @function verify
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDemux.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isString(message.dataType))
                        return "dataType: string expected";
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    if (!$util.isString(message.outputTopicFormat))
                        return "outputTopicFormat: string expected";
                return null;
            };

            /**
             * Creates a TopicDemux message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicDemux} TopicDemux
             */
            TopicDemux.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicDemux)
                    return object;
                var message = new $root.ubii.devices.TopicDemux();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.dataType != null)
                    message.dataType = String(object.dataType);
                if (object.outputTopicFormat != null)
                    message.outputTopicFormat = String(object.outputTopicFormat);
                return message;
            };

            /**
             * Creates a plain object from a TopicDemux message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.TopicDemux} message TopicDemux
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDemux.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.dataType = "";
                    object.outputTopicFormat = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    object.outputTopicFormat = message.outputTopicFormat;
                return object;
            };

            /**
             * Converts this TopicDemux to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicDemux
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDemux.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDemux;
        })();

        devices.TopicDemuxList = (function() {

            /**
             * Properties of a TopicDemuxList.
             * @memberof ubii.devices
             * @interface ITopicDemuxList
             * @property {Array.<ubii.devices.ITopicDemux>|null} [elements] TopicDemuxList elements
             */

            /**
             * Constructs a new TopicDemuxList.
             * @memberof ubii.devices
             * @classdesc Represents a TopicDemuxList.
             * @implements ITopicDemuxList
             * @constructor
             * @param {ubii.devices.ITopicDemuxList=} [properties] Properties to set
             */
            function TopicDemuxList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDemuxList elements.
             * @member {Array.<ubii.devices.ITopicDemux>} elements
             * @memberof ubii.devices.TopicDemuxList
             * @instance
             */
            TopicDemuxList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicDemuxList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList=} [properties] Properties to set
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList instance
             */
            TopicDemuxList.create = function create(properties) {
                return new TopicDemuxList(properties);
            };

            /**
             * Encodes the specified TopicDemuxList message. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList} message TopicDemuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemuxList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.TopicDemux.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDemuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList} message TopicDemuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemuxList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemuxList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicDemuxList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.TopicDemux.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemuxList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDemuxList message.
             * @function verify
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDemuxList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.TopicDemux.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDemuxList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             */
            TopicDemuxList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicDemuxList)
                    return object;
                var message = new $root.ubii.devices.TopicDemuxList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.TopicDemuxList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.TopicDemuxList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.TopicDemux.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDemuxList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.TopicDemuxList} message TopicDemuxList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDemuxList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.TopicDemux.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicDemuxList to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicDemuxList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDemuxList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDemuxList;
        })();

        devices.TopicMux = (function() {

            /**
             * Properties of a TopicMux.
             * @memberof ubii.devices
             * @interface ITopicMux
             * @property {string|null} [id] TopicMux id
             * @property {string|null} [name] TopicMux name
             * @property {string|null} [dataType] TopicMux dataType
             * @property {string|null} [topicSelector] TopicMux topicSelector
             * @property {string|null} [identityMatchPattern] TopicMux identityMatchPattern
             */

            /**
             * Constructs a new TopicMux.
             * @memberof ubii.devices
             * @classdesc Represents a TopicMux.
             * @implements ITopicMux
             * @constructor
             * @param {ubii.devices.ITopicMux=} [properties] Properties to set
             */
            function TopicMux(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicMux id.
             * @member {string} id
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.id = "";

            /**
             * TopicMux name.
             * @member {string} name
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.name = "";

            /**
             * TopicMux dataType.
             * @member {string} dataType
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.dataType = "";

            /**
             * TopicMux topicSelector.
             * @member {string} topicSelector
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.topicSelector = "";

            /**
             * TopicMux identityMatchPattern.
             * @member {string} identityMatchPattern
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.identityMatchPattern = "";

            /**
             * Creates a new TopicMux instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux=} [properties] Properties to set
             * @returns {ubii.devices.TopicMux} TopicMux instance
             */
            TopicMux.create = function create(properties) {
                return new TopicMux(properties);
            };

            /**
             * Encodes the specified TopicMux message. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux} message TopicMux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMux.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.dataType);
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.topicSelector);
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.identityMatchPattern);
                return writer;
            };

            /**
             * Encodes the specified TopicMux message, length delimited. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux} message TopicMux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMux.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicMux message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicMux} TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMux.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicMux();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.dataType = reader.string();
                        break;
                    case 4:
                        message.topicSelector = reader.string();
                        break;
                    case 5:
                        message.identityMatchPattern = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicMux message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicMux} TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMux.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicMux message.
             * @function verify
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicMux.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isString(message.dataType))
                        return "dataType: string expected";
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    if (!$util.isString(message.topicSelector))
                        return "topicSelector: string expected";
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    if (!$util.isString(message.identityMatchPattern))
                        return "identityMatchPattern: string expected";
                return null;
            };

            /**
             * Creates a TopicMux message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicMux} TopicMux
             */
            TopicMux.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicMux)
                    return object;
                var message = new $root.ubii.devices.TopicMux();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.dataType != null)
                    message.dataType = String(object.dataType);
                if (object.topicSelector != null)
                    message.topicSelector = String(object.topicSelector);
                if (object.identityMatchPattern != null)
                    message.identityMatchPattern = String(object.identityMatchPattern);
                return message;
            };

            /**
             * Creates a plain object from a TopicMux message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.TopicMux} message TopicMux
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicMux.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.dataType = "";
                    object.topicSelector = "";
                    object.identityMatchPattern = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    object.topicSelector = message.topicSelector;
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    object.identityMatchPattern = message.identityMatchPattern;
                return object;
            };

            /**
             * Converts this TopicMux to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicMux
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicMux.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicMux;
        })();

        devices.TopicMuxList = (function() {

            /**
             * Properties of a TopicMuxList.
             * @memberof ubii.devices
             * @interface ITopicMuxList
             * @property {Array.<ubii.devices.ITopicMux>|null} [elements] TopicMuxList elements
             */

            /**
             * Constructs a new TopicMuxList.
             * @memberof ubii.devices
             * @classdesc Represents a TopicMuxList.
             * @implements ITopicMuxList
             * @constructor
             * @param {ubii.devices.ITopicMuxList=} [properties] Properties to set
             */
            function TopicMuxList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicMuxList elements.
             * @member {Array.<ubii.devices.ITopicMux>} elements
             * @memberof ubii.devices.TopicMuxList
             * @instance
             */
            TopicMuxList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicMuxList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList=} [properties] Properties to set
             * @returns {ubii.devices.TopicMuxList} TopicMuxList instance
             */
            TopicMuxList.create = function create(properties) {
                return new TopicMuxList(properties);
            };

            /**
             * Encodes the specified TopicMuxList message. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList} message TopicMuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMuxList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.TopicMux.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicMuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList} message TopicMuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMuxList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMuxList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicMuxList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.TopicMux.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMuxList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicMuxList message.
             * @function verify
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicMuxList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.TopicMux.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicMuxList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             */
            TopicMuxList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicMuxList)
                    return object;
                var message = new $root.ubii.devices.TopicMuxList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.TopicMuxList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.TopicMuxList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.TopicMux.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicMuxList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.TopicMuxList} message TopicMuxList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicMuxList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.TopicMux.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicMuxList to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicMuxList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicMuxList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicMuxList;
        })();

        return devices;
    })();

    ubii.general = (function() {

        /**
         * Namespace general.
         * @memberof ubii
         * @namespace
         */
        var general = {};

        general.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof ubii.general
             * @interface IError
             * @property {string|null} [title] Error title
             * @property {string|null} [message] Error message
             * @property {string|null} [stack] Error stack
             */

            /**
             * Constructs a new Error.
             * @memberof ubii.general
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {ubii.general.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error title.
             * @member {string} title
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.title = "";

            /**
             * Error message.
             * @member {string} message
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Error stack.
             * @member {string} stack
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.stack = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError=} [properties] Properties to set
             * @returns {ubii.general.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.stack != null && message.hasOwnProperty("stack"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stack);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.title = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    case 3:
                        message.stack = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof ubii.general.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.stack != null && message.hasOwnProperty("stack"))
                    if (!$util.isString(message.stack))
                        return "stack: string expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.Error)
                    return object;
                var message = new $root.ubii.general.Error();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.message != null)
                    message.message = String(object.message);
                if (object.stack != null)
                    message.stack = String(object.stack);
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.title = "";
                    object.message = "";
                    object.stack = "";
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.stack != null && message.hasOwnProperty("stack"))
                    object.stack = message.stack;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof ubii.general.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        general.StringList = (function() {

            /**
             * Properties of a StringList.
             * @memberof ubii.general
             * @interface IStringList
             * @property {Array.<string>|null} [elements] StringList elements
             */

            /**
             * Constructs a new StringList.
             * @memberof ubii.general
             * @classdesc Represents a StringList.
             * @implements IStringList
             * @constructor
             * @param {ubii.general.IStringList=} [properties] Properties to set
             */
            function StringList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringList elements.
             * @member {Array.<string>} elements
             * @memberof ubii.general.StringList
             * @instance
             */
            StringList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new StringList instance using the specified properties.
             * @function create
             * @memberof ubii.general.StringList
             * @static
             * @param {ubii.general.IStringList=} [properties] Properties to set
             * @returns {ubii.general.StringList} StringList instance
             */
            StringList.create = function create(properties) {
                return new StringList(properties);
            };

            /**
             * Encodes the specified StringList message. Does not implicitly {@link ubii.general.StringList.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.StringList
             * @static
             * @param {ubii.general.IStringList} message StringList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.elements[i]);
                return writer;
            };

            /**
             * Encodes the specified StringList message, length delimited. Does not implicitly {@link ubii.general.StringList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.StringList
             * @static
             * @param {ubii.general.IStringList} message StringList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.StringList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.StringList} StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.StringList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.StringList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.StringList} StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringList message.
             * @function verify
             * @memberof ubii.general.StringList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (!$util.isString(message.elements[i]))
                            return "elements: string[] expected";
                }
                return null;
            };

            /**
             * Creates a StringList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.StringList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.StringList} StringList
             */
            StringList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.StringList)
                    return object;
                var message = new $root.ubii.general.StringList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.general.StringList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = String(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a StringList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.StringList
             * @static
             * @param {ubii.general.StringList} message StringList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = message.elements[j];
                }
                return object;
            };

            /**
             * Converts this StringList to JSON.
             * @function toJSON
             * @memberof ubii.general.StringList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringList;
        })();

        general.DoubleList = (function() {

            /**
             * Properties of a DoubleList.
             * @memberof ubii.general
             * @interface IDoubleList
             * @property {Array.<number>|null} [elements] DoubleList elements
             */

            /**
             * Constructs a new DoubleList.
             * @memberof ubii.general
             * @classdesc Represents a DoubleList.
             * @implements IDoubleList
             * @constructor
             * @param {ubii.general.IDoubleList=} [properties] Properties to set
             */
            function DoubleList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleList elements.
             * @member {Array.<number>} elements
             * @memberof ubii.general.DoubleList
             * @instance
             */
            DoubleList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new DoubleList instance using the specified properties.
             * @function create
             * @memberof ubii.general.DoubleList
             * @static
             * @param {ubii.general.IDoubleList=} [properties] Properties to set
             * @returns {ubii.general.DoubleList} DoubleList instance
             */
            DoubleList.create = function create(properties) {
                return new DoubleList(properties);
            };

            /**
             * Encodes the specified DoubleList message. Does not implicitly {@link ubii.general.DoubleList.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.DoubleList
             * @static
             * @param {ubii.general.IDoubleList} message DoubleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.double(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified DoubleList message, length delimited. Does not implicitly {@link ubii.general.DoubleList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.DoubleList
             * @static
             * @param {ubii.general.IDoubleList} message DoubleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.DoubleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.DoubleList} DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.DoubleList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.double());
                        } else
                            message.elements.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.DoubleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.DoubleList} DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleList message.
             * @function verify
             * @memberof ubii.general.DoubleList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "number")
                            return "elements: number[] expected";
                }
                return null;
            };

            /**
             * Creates a DoubleList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.DoubleList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.DoubleList} DoubleList
             */
            DoubleList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.DoubleList)
                    return object;
                var message = new $root.ubii.general.DoubleList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.general.DoubleList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Number(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DoubleList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.DoubleList
             * @static
             * @param {ubii.general.DoubleList} message DoubleList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = options.json && !isFinite(message.elements[j]) ? String(message.elements[j]) : message.elements[j];
                }
                return object;
            };

            /**
             * Converts this DoubleList to JSON.
             * @function toJSON
             * @memberof ubii.general.DoubleList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleList;
        })();

        general.FloatList = (function() {

            /**
             * Properties of a FloatList.
             * @memberof ubii.general
             * @interface IFloatList
             * @property {Array.<number>|null} [elements] FloatList elements
             */

            /**
             * Constructs a new FloatList.
             * @memberof ubii.general
             * @classdesc Represents a FloatList.
             * @implements IFloatList
             * @constructor
             * @param {ubii.general.IFloatList=} [properties] Properties to set
             */
            function FloatList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatList elements.
             * @member {Array.<number>} elements
             * @memberof ubii.general.FloatList
             * @instance
             */
            FloatList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new FloatList instance using the specified properties.
             * @function create
             * @memberof ubii.general.FloatList
             * @static
             * @param {ubii.general.IFloatList=} [properties] Properties to set
             * @returns {ubii.general.FloatList} FloatList instance
             */
            FloatList.create = function create(properties) {
                return new FloatList(properties);
            };

            /**
             * Encodes the specified FloatList message. Does not implicitly {@link ubii.general.FloatList.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.FloatList
             * @static
             * @param {ubii.general.IFloatList} message FloatList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.float(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified FloatList message, length delimited. Does not implicitly {@link ubii.general.FloatList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.FloatList
             * @static
             * @param {ubii.general.IFloatList} message FloatList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.FloatList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.FloatList} FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.FloatList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.float());
                        } else
                            message.elements.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.FloatList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.FloatList} FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatList message.
             * @function verify
             * @memberof ubii.general.FloatList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "number")
                            return "elements: number[] expected";
                }
                return null;
            };

            /**
             * Creates a FloatList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.FloatList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.FloatList} FloatList
             */
            FloatList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.FloatList)
                    return object;
                var message = new $root.ubii.general.FloatList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.general.FloatList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Number(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FloatList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.FloatList
             * @static
             * @param {ubii.general.FloatList} message FloatList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = options.json && !isFinite(message.elements[j]) ? String(message.elements[j]) : message.elements[j];
                }
                return object;
            };

            /**
             * Converts this FloatList to JSON.
             * @function toJSON
             * @memberof ubii.general.FloatList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatList;
        })();

        general.BoolList = (function() {

            /**
             * Properties of a BoolList.
             * @memberof ubii.general
             * @interface IBoolList
             * @property {Array.<boolean>|null} [elements] BoolList elements
             */

            /**
             * Constructs a new BoolList.
             * @memberof ubii.general
             * @classdesc Represents a BoolList.
             * @implements IBoolList
             * @constructor
             * @param {ubii.general.IBoolList=} [properties] Properties to set
             */
            function BoolList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolList elements.
             * @member {Array.<boolean>} elements
             * @memberof ubii.general.BoolList
             * @instance
             */
            BoolList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new BoolList instance using the specified properties.
             * @function create
             * @memberof ubii.general.BoolList
             * @static
             * @param {ubii.general.IBoolList=} [properties] Properties to set
             * @returns {ubii.general.BoolList} BoolList instance
             */
            BoolList.create = function create(properties) {
                return new BoolList(properties);
            };

            /**
             * Encodes the specified BoolList message. Does not implicitly {@link ubii.general.BoolList.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.BoolList
             * @static
             * @param {ubii.general.IBoolList} message BoolList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.bool(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified BoolList message, length delimited. Does not implicitly {@link ubii.general.BoolList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.BoolList
             * @static
             * @param {ubii.general.IBoolList} message BoolList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.BoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.BoolList} BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.BoolList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.bool());
                        } else
                            message.elements.push(reader.bool());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.BoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.BoolList} BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolList message.
             * @function verify
             * @memberof ubii.general.BoolList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "boolean")
                            return "elements: boolean[] expected";
                }
                return null;
            };

            /**
             * Creates a BoolList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.BoolList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.BoolList} BoolList
             */
            BoolList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.BoolList)
                    return object;
                var message = new $root.ubii.general.BoolList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.general.BoolList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Boolean(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a BoolList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.BoolList
             * @static
             * @param {ubii.general.BoolList} message BoolList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = message.elements[j];
                }
                return object;
            };

            /**
             * Converts this BoolList to JSON.
             * @function toJSON
             * @memberof ubii.general.BoolList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolList;
        })();

        general.Success = (function() {

            /**
             * Properties of a Success.
             * @memberof ubii.general
             * @interface ISuccess
             * @property {string|null} [title] Success title
             * @property {string|null} [message] Success message
             */

            /**
             * Constructs a new Success.
             * @memberof ubii.general
             * @classdesc Represents a Success.
             * @implements ISuccess
             * @constructor
             * @param {ubii.general.ISuccess=} [properties] Properties to set
             */
            function Success(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Success title.
             * @member {string} title
             * @memberof ubii.general.Success
             * @instance
             */
            Success.prototype.title = "";

            /**
             * Success message.
             * @member {string} message
             * @memberof ubii.general.Success
             * @instance
             */
            Success.prototype.message = "";

            /**
             * Creates a new Success instance using the specified properties.
             * @function create
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess=} [properties] Properties to set
             * @returns {ubii.general.Success} Success instance
             */
            Success.create = function create(properties) {
                return new Success(properties);
            };

            /**
             * Encodes the specified Success message. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess} message Success message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Success.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.title != null && message.hasOwnProperty("title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Success message, length delimited. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess} message Success message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Success.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Success message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.Success
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.Success} Success
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Success.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.Success();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.title = reader.string();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Success message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.general.Success
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.Success} Success
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Success.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Success message.
             * @function verify
             * @memberof ubii.general.Success
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Success.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Success message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.general.Success
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.Success} Success
             */
            Success.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.Success)
                    return object;
                var message = new $root.ubii.general.Success();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Success message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.Success} message Success
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Success.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.title = "";
                    object.message = "";
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Success to JSON.
             * @function toJSON
             * @memberof ubii.general.Success
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Success.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Success;
        })();

        return general;
    })();

    ubii.interactions = (function() {

        /**
         * Namespace interactions.
         * @memberof ubii
         * @namespace
         */
        var interactions = {};

        interactions.Interaction = (function() {

            /**
             * Properties of an Interaction.
             * @memberof ubii.interactions
             * @interface IInteraction
             * @property {string|null} [id] Interaction id
             * @property {string|null} [name] Interaction name
             * @property {string|null} [processingCallback] Interaction processingCallback
             * @property {Array.<ubii.interactions.IIOFormat>|null} [inputFormats] Interaction inputFormats
             * @property {Array.<ubii.interactions.IIOFormat>|null} [outputFormats] Interaction outputFormats
             */

            /**
             * Constructs a new Interaction.
             * @memberof ubii.interactions
             * @classdesc Represents an Interaction.
             * @implements IInteraction
             * @constructor
             * @param {ubii.interactions.IInteraction=} [properties] Properties to set
             */
            function Interaction(properties) {
                this.inputFormats = [];
                this.outputFormats = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Interaction id.
             * @member {string} id
             * @memberof ubii.interactions.Interaction
             * @instance
             */
            Interaction.prototype.id = "";

            /**
             * Interaction name.
             * @member {string} name
             * @memberof ubii.interactions.Interaction
             * @instance
             */
            Interaction.prototype.name = "";

            /**
             * Interaction processingCallback.
             * @member {string} processingCallback
             * @memberof ubii.interactions.Interaction
             * @instance
             */
            Interaction.prototype.processingCallback = "";

            /**
             * Interaction inputFormats.
             * @member {Array.<ubii.interactions.IIOFormat>} inputFormats
             * @memberof ubii.interactions.Interaction
             * @instance
             */
            Interaction.prototype.inputFormats = $util.emptyArray;

            /**
             * Interaction outputFormats.
             * @member {Array.<ubii.interactions.IIOFormat>} outputFormats
             * @memberof ubii.interactions.Interaction
             * @instance
             */
            Interaction.prototype.outputFormats = $util.emptyArray;

            /**
             * Creates a new Interaction instance using the specified properties.
             * @function create
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {ubii.interactions.IInteraction=} [properties] Properties to set
             * @returns {ubii.interactions.Interaction} Interaction instance
             */
            Interaction.create = function create(properties) {
                return new Interaction(properties);
            };

            /**
             * Encodes the specified Interaction message. Does not implicitly {@link ubii.interactions.Interaction.verify|verify} messages.
             * @function encode
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {ubii.interactions.IInteraction} message Interaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interaction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.processingCallback != null && message.hasOwnProperty("processingCallback"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.processingCallback);
                if (message.inputFormats != null && message.inputFormats.length)
                    for (var i = 0; i < message.inputFormats.length; ++i)
                        $root.ubii.interactions.IOFormat.encode(message.inputFormats[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.outputFormats != null && message.outputFormats.length)
                    for (var i = 0; i < message.outputFormats.length; ++i)
                        $root.ubii.interactions.IOFormat.encode(message.outputFormats[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Interaction message, length delimited. Does not implicitly {@link ubii.interactions.Interaction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {ubii.interactions.IInteraction} message Interaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interaction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Interaction message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interactions.Interaction} Interaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interaction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interactions.Interaction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.processingCallback = reader.string();
                        break;
                    case 4:
                        if (!(message.inputFormats && message.inputFormats.length))
                            message.inputFormats = [];
                        message.inputFormats.push($root.ubii.interactions.IOFormat.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.outputFormats && message.outputFormats.length))
                            message.outputFormats = [];
                        message.outputFormats.push($root.ubii.interactions.IOFormat.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Interaction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interactions.Interaction} Interaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interaction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Interaction message.
             * @function verify
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Interaction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.processingCallback != null && message.hasOwnProperty("processingCallback"))
                    if (!$util.isString(message.processingCallback))
                        return "processingCallback: string expected";
                if (message.inputFormats != null && message.hasOwnProperty("inputFormats")) {
                    if (!Array.isArray(message.inputFormats))
                        return "inputFormats: array expected";
                    for (var i = 0; i < message.inputFormats.length; ++i) {
                        var error = $root.ubii.interactions.IOFormat.verify(message.inputFormats[i]);
                        if (error)
                            return "inputFormats." + error;
                    }
                }
                if (message.outputFormats != null && message.hasOwnProperty("outputFormats")) {
                    if (!Array.isArray(message.outputFormats))
                        return "outputFormats: array expected";
                    for (var i = 0; i < message.outputFormats.length; ++i) {
                        var error = $root.ubii.interactions.IOFormat.verify(message.outputFormats[i]);
                        if (error)
                            return "outputFormats." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Interaction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interactions.Interaction} Interaction
             */
            Interaction.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interactions.Interaction)
                    return object;
                var message = new $root.ubii.interactions.Interaction();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.processingCallback != null)
                    message.processingCallback = String(object.processingCallback);
                if (object.inputFormats) {
                    if (!Array.isArray(object.inputFormats))
                        throw TypeError(".ubii.interactions.Interaction.inputFormats: array expected");
                    message.inputFormats = [];
                    for (var i = 0; i < object.inputFormats.length; ++i) {
                        if (typeof object.inputFormats[i] !== "object")
                            throw TypeError(".ubii.interactions.Interaction.inputFormats: object expected");
                        message.inputFormats[i] = $root.ubii.interactions.IOFormat.fromObject(object.inputFormats[i]);
                    }
                }
                if (object.outputFormats) {
                    if (!Array.isArray(object.outputFormats))
                        throw TypeError(".ubii.interactions.Interaction.outputFormats: array expected");
                    message.outputFormats = [];
                    for (var i = 0; i < object.outputFormats.length; ++i) {
                        if (typeof object.outputFormats[i] !== "object")
                            throw TypeError(".ubii.interactions.Interaction.outputFormats: object expected");
                        message.outputFormats[i] = $root.ubii.interactions.IOFormat.fromObject(object.outputFormats[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Interaction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interactions.Interaction
             * @static
             * @param {ubii.interactions.Interaction} message Interaction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Interaction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputFormats = [];
                    object.outputFormats = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.processingCallback = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.processingCallback != null && message.hasOwnProperty("processingCallback"))
                    object.processingCallback = message.processingCallback;
                if (message.inputFormats && message.inputFormats.length) {
                    object.inputFormats = [];
                    for (var j = 0; j < message.inputFormats.length; ++j)
                        object.inputFormats[j] = $root.ubii.interactions.IOFormat.toObject(message.inputFormats[j], options);
                }
                if (message.outputFormats && message.outputFormats.length) {
                    object.outputFormats = [];
                    for (var j = 0; j < message.outputFormats.length; ++j)
                        object.outputFormats[j] = $root.ubii.interactions.IOFormat.toObject(message.outputFormats[j], options);
                }
                return object;
            };

            /**
             * Converts this Interaction to JSON.
             * @function toJSON
             * @memberof ubii.interactions.Interaction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Interaction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Interaction;
        })();

        interactions.InteractionList = (function() {

            /**
             * Properties of an InteractionList.
             * @memberof ubii.interactions
             * @interface IInteractionList
             * @property {Array.<ubii.interactions.IInteraction>|null} [elements] InteractionList elements
             */

            /**
             * Constructs a new InteractionList.
             * @memberof ubii.interactions
             * @classdesc Represents an InteractionList.
             * @implements IInteractionList
             * @constructor
             * @param {ubii.interactions.IInteractionList=} [properties] Properties to set
             */
            function InteractionList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteractionList elements.
             * @member {Array.<ubii.interactions.IInteraction>} elements
             * @memberof ubii.interactions.InteractionList
             * @instance
             */
            InteractionList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new InteractionList instance using the specified properties.
             * @function create
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {ubii.interactions.IInteractionList=} [properties] Properties to set
             * @returns {ubii.interactions.InteractionList} InteractionList instance
             */
            InteractionList.create = function create(properties) {
                return new InteractionList(properties);
            };

            /**
             * Encodes the specified InteractionList message. Does not implicitly {@link ubii.interactions.InteractionList.verify|verify} messages.
             * @function encode
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {ubii.interactions.IInteractionList} message InteractionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.interactions.Interaction.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InteractionList message, length delimited. Does not implicitly {@link ubii.interactions.InteractionList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {ubii.interactions.IInteractionList} message InteractionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteractionList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interactions.InteractionList} InteractionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interactions.InteractionList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.interactions.Interaction.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InteractionList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interactions.InteractionList} InteractionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteractionList message.
             * @function verify
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteractionList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.interactions.Interaction.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InteractionList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interactions.InteractionList} InteractionList
             */
            InteractionList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interactions.InteractionList)
                    return object;
                var message = new $root.ubii.interactions.InteractionList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.interactions.InteractionList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.interactions.InteractionList.elements: object expected");
                        message.elements[i] = $root.ubii.interactions.Interaction.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an InteractionList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interactions.InteractionList
             * @static
             * @param {ubii.interactions.InteractionList} message InteractionList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteractionList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.interactions.Interaction.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this InteractionList to JSON.
             * @function toJSON
             * @memberof ubii.interactions.InteractionList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteractionList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InteractionList;
        })();

        interactions.IOFormat = (function() {

            /**
             * Properties of a IOFormat.
             * @memberof ubii.interactions
             * @interface IIOFormat
             * @property {string|null} [internalName] IOFormat internalName
             * @property {string|null} [messageFormat] IOFormat messageFormat
             */

            /**
             * Constructs a new IOFormat.
             * @memberof ubii.interactions
             * @classdesc Represents a IOFormat.
             * @implements IIOFormat
             * @constructor
             * @param {ubii.interactions.IIOFormat=} [properties] Properties to set
             */
            function IOFormat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOFormat internalName.
             * @member {string} internalName
             * @memberof ubii.interactions.IOFormat
             * @instance
             */
            IOFormat.prototype.internalName = "";

            /**
             * IOFormat messageFormat.
             * @member {string} messageFormat
             * @memberof ubii.interactions.IOFormat
             * @instance
             */
            IOFormat.prototype.messageFormat = "";

            /**
             * Creates a new IOFormat instance using the specified properties.
             * @function create
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {ubii.interactions.IIOFormat=} [properties] Properties to set
             * @returns {ubii.interactions.IOFormat} IOFormat instance
             */
            IOFormat.create = function create(properties) {
                return new IOFormat(properties);
            };

            /**
             * Encodes the specified IOFormat message. Does not implicitly {@link ubii.interactions.IOFormat.verify|verify} messages.
             * @function encode
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {ubii.interactions.IIOFormat} message IOFormat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOFormat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.internalName);
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageFormat);
                return writer;
            };

            /**
             * Encodes the specified IOFormat message, length delimited. Does not implicitly {@link ubii.interactions.IOFormat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {ubii.interactions.IIOFormat} message IOFormat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOFormat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOFormat message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interactions.IOFormat} IOFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOFormat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interactions.IOFormat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.internalName = reader.string();
                        break;
                    case 2:
                        message.messageFormat = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a IOFormat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interactions.IOFormat} IOFormat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOFormat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a IOFormat message.
             * @function verify
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOFormat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    if (!$util.isString(message.internalName))
                        return "internalName: string expected";
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    if (!$util.isString(message.messageFormat))
                        return "messageFormat: string expected";
                return null;
            };

            /**
             * Creates a IOFormat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interactions.IOFormat} IOFormat
             */
            IOFormat.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interactions.IOFormat)
                    return object;
                var message = new $root.ubii.interactions.IOFormat();
                if (object.internalName != null)
                    message.internalName = String(object.internalName);
                if (object.messageFormat != null)
                    message.messageFormat = String(object.messageFormat);
                return message;
            };

            /**
             * Creates a plain object from a IOFormat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interactions.IOFormat
             * @static
             * @param {ubii.interactions.IOFormat} message IOFormat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOFormat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.internalName = "";
                    object.messageFormat = "";
                }
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    object.internalName = message.internalName;
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    object.messageFormat = message.messageFormat;
                return object;
            };

            /**
             * Converts this IOFormat to JSON.
             * @function toJSON
             * @memberof ubii.interactions.IOFormat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOFormat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOFormat;
        })();

        return interactions;
    })();

    ubii.servers = (function() {

        /**
         * Namespace servers.
         * @memberof ubii
         * @namespace
         */
        var servers = {};

        servers.Server = (function() {

            /**
             * Properties of a Server.
             * @memberof ubii.servers
             * @interface IServer
             * @property {string|null} [id] Server id
             * @property {string|null} [name] Server name
             * @property {string|null} [ipEthernet] Server ipEthernet
             * @property {string|null} [ipWlan] Server ipWlan
             * @property {string|null} [portServiceZmq] Server portServiceZmq
             * @property {string|null} [portServiceRest] Server portServiceRest
             * @property {string|null} [portTopicDataZmq] Server portTopicDataZmq
             * @property {string|null} [portTopicDataWs] Server portTopicDataWs
             */

            /**
             * Constructs a new Server.
             * @memberof ubii.servers
             * @classdesc Represents a Server.
             * @implements IServer
             * @constructor
             * @param {ubii.servers.IServer=} [properties] Properties to set
             */
            function Server(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Server id.
             * @member {string} id
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.id = "";

            /**
             * Server name.
             * @member {string} name
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.name = "";

            /**
             * Server ipEthernet.
             * @member {string} ipEthernet
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.ipEthernet = "";

            /**
             * Server ipWlan.
             * @member {string} ipWlan
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.ipWlan = "";

            /**
             * Server portServiceZmq.
             * @member {string} portServiceZmq
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portServiceZmq = "";

            /**
             * Server portServiceRest.
             * @member {string} portServiceRest
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portServiceRest = "";

            /**
             * Server portTopicDataZmq.
             * @member {string} portTopicDataZmq
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portTopicDataZmq = "";

            /**
             * Server portTopicDataWs.
             * @member {string} portTopicDataWs
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portTopicDataWs = "";

            /**
             * Creates a new Server instance using the specified properties.
             * @function create
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer=} [properties] Properties to set
             * @returns {ubii.servers.Server} Server instance
             */
            Server.create = function create(properties) {
                return new Server(properties);
            };

            /**
             * Encodes the specified Server message. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @function encode
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ipEthernet);
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.ipWlan);
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.portServiceZmq);
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.portServiceRest);
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.portTopicDataZmq);
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.portTopicDataWs);
                return writer;
            };

            /**
             * Encodes the specified Server message, length delimited. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Server message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.servers.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.servers.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.servers.Server();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.ipEthernet = reader.string();
                        break;
                    case 4:
                        message.ipWlan = reader.string();
                        break;
                    case 5:
                        message.portServiceZmq = reader.string();
                        break;
                    case 6:
                        message.portServiceRest = reader.string();
                        break;
                    case 7:
                        message.portTopicDataZmq = reader.string();
                        break;
                    case 8:
                        message.portTopicDataWs = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Server message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.servers.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.servers.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Server message.
             * @function verify
             * @memberof ubii.servers.Server
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Server.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    if (!$util.isString(message.ipEthernet))
                        return "ipEthernet: string expected";
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    if (!$util.isString(message.ipWlan))
                        return "ipWlan: string expected";
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    if (!$util.isString(message.portServiceZmq))
                        return "portServiceZmq: string expected";
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    if (!$util.isString(message.portServiceRest))
                        return "portServiceRest: string expected";
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    if (!$util.isString(message.portTopicDataZmq))
                        return "portTopicDataZmq: string expected";
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    if (!$util.isString(message.portTopicDataWs))
                        return "portTopicDataWs: string expected";
                return null;
            };

            /**
             * Creates a Server message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.servers.Server
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.servers.Server} Server
             */
            Server.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.servers.Server)
                    return object;
                var message = new $root.ubii.servers.Server();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.ipEthernet != null)
                    message.ipEthernet = String(object.ipEthernet);
                if (object.ipWlan != null)
                    message.ipWlan = String(object.ipWlan);
                if (object.portServiceZmq != null)
                    message.portServiceZmq = String(object.portServiceZmq);
                if (object.portServiceRest != null)
                    message.portServiceRest = String(object.portServiceRest);
                if (object.portTopicDataZmq != null)
                    message.portTopicDataZmq = String(object.portTopicDataZmq);
                if (object.portTopicDataWs != null)
                    message.portTopicDataWs = String(object.portTopicDataWs);
                return message;
            };

            /**
             * Creates a plain object from a Server message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.Server} message Server
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Server.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.ipEthernet = "";
                    object.ipWlan = "";
                    object.portServiceZmq = "";
                    object.portServiceRest = "";
                    object.portTopicDataZmq = "";
                    object.portTopicDataWs = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    object.ipEthernet = message.ipEthernet;
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    object.ipWlan = message.ipWlan;
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    object.portServiceZmq = message.portServiceZmq;
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    object.portServiceRest = message.portServiceRest;
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    object.portTopicDataZmq = message.portTopicDataZmq;
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    object.portTopicDataWs = message.portTopicDataWs;
                return object;
            };

            /**
             * Converts this Server to JSON.
             * @function toJSON
             * @memberof ubii.servers.Server
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Server.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Server;
        })();

        return servers;
    })();

    ubii.services = (function() {

        /**
         * Namespace services.
         * @memberof ubii
         * @namespace
         */
        var services = {};

        services.request = (function() {

            /**
             * Namespace request.
             * @memberof ubii.services
             * @namespace
             */
            var request = {};

            request.TopicSubscription = (function() {

                /**
                 * Properties of a TopicSubscription.
                 * @memberof ubii.services.request
                 * @interface ITopicSubscription
                 * @property {string|null} [clientId] TopicSubscription clientId
                 * @property {Array.<string>|null} [subscribeTopics] TopicSubscription subscribeTopics
                 * @property {Array.<string>|null} [unsubscribeTopics] TopicSubscription unsubscribeTopics
                 */

                /**
                 * Constructs a new TopicSubscription.
                 * @memberof ubii.services.request
                 * @classdesc Represents a TopicSubscription.
                 * @implements ITopicSubscription
                 * @constructor
                 * @param {ubii.services.request.ITopicSubscription=} [properties] Properties to set
                 */
                function TopicSubscription(properties) {
                    this.subscribeTopics = [];
                    this.unsubscribeTopics = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TopicSubscription clientId.
                 * @member {string} clientId
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.clientId = "";

                /**
                 * TopicSubscription subscribeTopics.
                 * @member {Array.<string>} subscribeTopics
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.subscribeTopics = $util.emptyArray;

                /**
                 * TopicSubscription unsubscribeTopics.
                 * @member {Array.<string>} unsubscribeTopics
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.unsubscribeTopics = $util.emptyArray;

                /**
                 * Creates a new TopicSubscription instance using the specified properties.
                 * @function create
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription=} [properties] Properties to set
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription instance
                 */
                TopicSubscription.create = function create(properties) {
                    return new TopicSubscription(properties);
                };

                /**
                 * Encodes the specified TopicSubscription message. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription} message TopicSubscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TopicSubscription.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
                    if (message.subscribeTopics != null && message.subscribeTopics.length)
                        for (var i = 0; i < message.subscribeTopics.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subscribeTopics[i]);
                    if (message.unsubscribeTopics != null && message.unsubscribeTopics.length)
                        for (var i = 0; i < message.unsubscribeTopics.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.unsubscribeTopics[i]);
                    return writer;
                };

                /**
                 * Encodes the specified TopicSubscription message, length delimited. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription} message TopicSubscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TopicSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TopicSubscription.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.request.TopicSubscription();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.clientId = reader.string();
                            break;
                        case 2:
                            if (!(message.subscribeTopics && message.subscribeTopics.length))
                                message.subscribeTopics = [];
                            message.subscribeTopics.push(reader.string());
                            break;
                        case 3:
                            if (!(message.unsubscribeTopics && message.unsubscribeTopics.length))
                                message.unsubscribeTopics = [];
                            message.unsubscribeTopics.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TopicSubscription.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TopicSubscription message.
                 * @function verify
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TopicSubscription.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        if (!$util.isString(message.clientId))
                            return "clientId: string expected";
                    if (message.subscribeTopics != null && message.hasOwnProperty("subscribeTopics")) {
                        if (!Array.isArray(message.subscribeTopics))
                            return "subscribeTopics: array expected";
                        for (var i = 0; i < message.subscribeTopics.length; ++i)
                            if (!$util.isString(message.subscribeTopics[i]))
                                return "subscribeTopics: string[] expected";
                    }
                    if (message.unsubscribeTopics != null && message.hasOwnProperty("unsubscribeTopics")) {
                        if (!Array.isArray(message.unsubscribeTopics))
                            return "unsubscribeTopics: array expected";
                        for (var i = 0; i < message.unsubscribeTopics.length; ++i)
                            if (!$util.isString(message.unsubscribeTopics[i]))
                                return "unsubscribeTopics: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a TopicSubscription message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 */
                TopicSubscription.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.services.request.TopicSubscription)
                        return object;
                    var message = new $root.ubii.services.request.TopicSubscription();
                    if (object.clientId != null)
                        message.clientId = String(object.clientId);
                    if (object.subscribeTopics) {
                        if (!Array.isArray(object.subscribeTopics))
                            throw TypeError(".ubii.services.request.TopicSubscription.subscribeTopics: array expected");
                        message.subscribeTopics = [];
                        for (var i = 0; i < object.subscribeTopics.length; ++i)
                            message.subscribeTopics[i] = String(object.subscribeTopics[i]);
                    }
                    if (object.unsubscribeTopics) {
                        if (!Array.isArray(object.unsubscribeTopics))
                            throw TypeError(".ubii.services.request.TopicSubscription.unsubscribeTopics: array expected");
                        message.unsubscribeTopics = [];
                        for (var i = 0; i < object.unsubscribeTopics.length; ++i)
                            message.unsubscribeTopics[i] = String(object.unsubscribeTopics[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TopicSubscription message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.TopicSubscription} message TopicSubscription
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TopicSubscription.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.subscribeTopics = [];
                        object.unsubscribeTopics = [];
                    }
                    if (options.defaults)
                        object.clientId = "";
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        object.clientId = message.clientId;
                    if (message.subscribeTopics && message.subscribeTopics.length) {
                        object.subscribeTopics = [];
                        for (var j = 0; j < message.subscribeTopics.length; ++j)
                            object.subscribeTopics[j] = message.subscribeTopics[j];
                    }
                    if (message.unsubscribeTopics && message.unsubscribeTopics.length) {
                        object.unsubscribeTopics = [];
                        for (var j = 0; j < message.unsubscribeTopics.length; ++j)
                            object.unsubscribeTopics[j] = message.unsubscribeTopics[j];
                    }
                    return object;
                };

                /**
                 * Converts this TopicSubscription to JSON.
                 * @function toJSON
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TopicSubscription.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TopicSubscription;
            })();

            return request;
        })();

        services.Service = (function() {

            /**
             * Properties of a Service.
             * @memberof ubii.services
             * @interface IService
             * @property {string|null} [topic] Service topic
             * @property {string|null} [requestMessageFormat] Service requestMessageFormat
             * @property {string|null} [responseMessageFormat] Service responseMessageFormat
             */

            /**
             * Constructs a new Service.
             * @memberof ubii.services
             * @classdesc Represents a Service.
             * @implements IService
             * @constructor
             * @param {ubii.services.IService=} [properties] Properties to set
             */
            function Service(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Service topic.
             * @member {string} topic
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.topic = "";

            /**
             * Service requestMessageFormat.
             * @member {string} requestMessageFormat
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.requestMessageFormat = "";

            /**
             * Service responseMessageFormat.
             * @member {string} responseMessageFormat
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.responseMessageFormat = "";

            /**
             * Creates a new Service instance using the specified properties.
             * @function create
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService=} [properties] Properties to set
             * @returns {ubii.services.Service} Service instance
             */
            Service.create = function create(properties) {
                return new Service(properties);
            };

            /**
             * Encodes the specified Service message. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService} message Service message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Service.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestMessageFormat);
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.responseMessageFormat);
                return writer;
            };

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService} message Service message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Service.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.Service
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.Service} Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Service.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.Service();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.requestMessageFormat = reader.string();
                        break;
                    case 3:
                        message.responseMessageFormat = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.services.Service
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.Service} Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Service.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Service message.
             * @function verify
             * @memberof ubii.services.Service
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Service.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    if (!$util.isString(message.requestMessageFormat))
                        return "requestMessageFormat: string expected";
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    if (!$util.isString(message.responseMessageFormat))
                        return "responseMessageFormat: string expected";
                return null;
            };

            /**
             * Creates a Service message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.Service
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.Service} Service
             */
            Service.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.Service)
                    return object;
                var message = new $root.ubii.services.Service();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.requestMessageFormat != null)
                    message.requestMessageFormat = String(object.requestMessageFormat);
                if (object.responseMessageFormat != null)
                    message.responseMessageFormat = String(object.responseMessageFormat);
                return message;
            };

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.Service} message Service
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Service.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topic = "";
                    object.requestMessageFormat = "";
                    object.responseMessageFormat = "";
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    object.requestMessageFormat = message.requestMessageFormat;
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    object.responseMessageFormat = message.responseMessageFormat;
                return object;
            };

            /**
             * Converts this Service to JSON.
             * @function toJSON
             * @memberof ubii.services.Service
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Service.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Service;
        })();

        services.ServiceReply = (function() {

            /**
             * Properties of a ServiceReply.
             * @memberof ubii.services
             * @interface IServiceReply
             * @property {ubii.general.ISuccess|null} [success] ServiceReply success
             * @property {ubii.general.IError|null} [error] ServiceReply error
             * @property {ubii.clients.IClient|null} [client] ServiceReply client
             * @property {ubii.devices.IDevice|null} [device] ServiceReply device
             * @property {ubii.servers.IServer|null} [server] ServiceReply server
             * @property {ubii.sessions.ISession|null} [session] ServiceReply session
             * @property {ubii.sessions.ISessionList|null} [sessionList] ServiceReply sessionList
             * @property {ubii.interactions.IInteraction|null} [interaction] ServiceReply interaction
             * @property {ubii.interactions.IInteractionList|null} [interactionList] ServiceReply interactionList
             * @property {ubii.general.IStringList|null} [stringList] ServiceReply stringList
             * @property {ubii.devices.ITopicMux|null} [topicMux] ServiceReply topicMux
             * @property {ubii.devices.ITopicMuxList|null} [topicMuxList] ServiceReply topicMuxList
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] ServiceReply topicDemux
             * @property {ubii.devices.ITopicDemuxList|null} [topicDemuxList] ServiceReply topicDemuxList
             */

            /**
             * Constructs a new ServiceReply.
             * @memberof ubii.services
             * @classdesc Represents a ServiceReply.
             * @implements IServiceReply
             * @constructor
             * @param {ubii.services.IServiceReply=} [properties] Properties to set
             */
            function ServiceReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceReply success.
             * @member {ubii.general.ISuccess|null|undefined} success
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.success = null;

            /**
             * ServiceReply error.
             * @member {ubii.general.IError|null|undefined} error
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.error = null;

            /**
             * ServiceReply client.
             * @member {ubii.clients.IClient|null|undefined} client
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.client = null;

            /**
             * ServiceReply device.
             * @member {ubii.devices.IDevice|null|undefined} device
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.device = null;

            /**
             * ServiceReply server.
             * @member {ubii.servers.IServer|null|undefined} server
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.server = null;

            /**
             * ServiceReply session.
             * @member {ubii.sessions.ISession|null|undefined} session
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.session = null;

            /**
             * ServiceReply sessionList.
             * @member {ubii.sessions.ISessionList|null|undefined} sessionList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.sessionList = null;

            /**
             * ServiceReply interaction.
             * @member {ubii.interactions.IInteraction|null|undefined} interaction
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.interaction = null;

            /**
             * ServiceReply interactionList.
             * @member {ubii.interactions.IInteractionList|null|undefined} interactionList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.interactionList = null;

            /**
             * ServiceReply stringList.
             * @member {ubii.general.IStringList|null|undefined} stringList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.stringList = null;

            /**
             * ServiceReply topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicMux = null;

            /**
             * ServiceReply topicMuxList.
             * @member {ubii.devices.ITopicMuxList|null|undefined} topicMuxList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicMuxList = null;

            /**
             * ServiceReply topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicDemux = null;

            /**
             * ServiceReply topicDemuxList.
             * @member {ubii.devices.ITopicDemuxList|null|undefined} topicDemuxList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicDemuxList = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceReply type.
             * @member {"success"|"error"|"client"|"device"|"server"|"session"|"sessionList"|"interaction"|"interactionList"|"stringList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|undefined} type
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            Object.defineProperty(ServiceReply.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["success", "error", "client", "device", "server", "session", "sessionList", "interaction", "interactionList", "stringList", "topicMux", "topicMuxList", "topicDemux", "topicDemuxList"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceReply instance using the specified properties.
             * @function create
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply=} [properties] Properties to set
             * @returns {ubii.services.ServiceReply} ServiceReply instance
             */
            ServiceReply.create = function create(properties) {
                return new ServiceReply(properties);
            };

            /**
             * Encodes the specified ServiceReply message. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && message.hasOwnProperty("success"))
                    $root.ubii.general.Success.encode(message.success, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.general.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.client != null && message.hasOwnProperty("client"))
                    $root.ubii.clients.Client.encode(message.client, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.device != null && message.hasOwnProperty("device"))
                    $root.ubii.devices.Device.encode(message.device, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.server != null && message.hasOwnProperty("server"))
                    $root.ubii.servers.Server.encode(message.server, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.session != null && message.hasOwnProperty("session"))
                    $root.ubii.sessions.Session.encode(message.session, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.sessionList != null && message.hasOwnProperty("sessionList"))
                    $root.ubii.sessions.SessionList.encode(message.sessionList, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.interaction != null && message.hasOwnProperty("interaction"))
                    $root.ubii.interactions.Interaction.encode(message.interaction, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.interactionList != null && message.hasOwnProperty("interactionList"))
                    $root.ubii.interactions.InteractionList.encode(message.interactionList, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.stringList != null && message.hasOwnProperty("stringList"))
                    $root.ubii.general.StringList.encode(message.stringList, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList"))
                    $root.ubii.devices.TopicMuxList.encode(message.topicMuxList, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList"))
                    $root.ubii.devices.TopicDemuxList.encode(message.topicDemuxList, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceReply message, length delimited. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceReply message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.ServiceReply} ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.ServiceReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.success = $root.ubii.general.Success.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.ubii.general.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.client = $root.ubii.clients.Client.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.device = $root.ubii.devices.Device.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.server = $root.ubii.servers.Server.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.session = $root.ubii.sessions.Session.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.sessionList = $root.ubii.sessions.SessionList.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.interaction = $root.ubii.interactions.Interaction.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.interactionList = $root.ubii.interactions.InteractionList.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.stringList = $root.ubii.general.StringList.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.topicMuxList = $root.ubii.devices.TopicMuxList.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.topicDemuxList = $root.ubii.devices.TopicDemuxList.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.ServiceReply} ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceReply message.
             * @function verify
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.success != null && message.hasOwnProperty("success")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.Success.verify(message.success);
                        if (error)
                            return "success." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.client != null && message.hasOwnProperty("client")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.Client.verify(message.client);
                        if (error)
                            return "client." + error;
                    }
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.Device.verify(message.device);
                        if (error)
                            return "device." + error;
                    }
                }
                if (message.server != null && message.hasOwnProperty("server")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.servers.Server.verify(message.server);
                        if (error)
                            return "server." + error;
                    }
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.Session.verify(message.session);
                        if (error)
                            return "session." + error;
                    }
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.SessionList.verify(message.sessionList);
                        if (error)
                            return "sessionList." + error;
                    }
                }
                if (message.interaction != null && message.hasOwnProperty("interaction")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.interactions.Interaction.verify(message.interaction);
                        if (error)
                            return "interaction." + error;
                    }
                }
                if (message.interactionList != null && message.hasOwnProperty("interactionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.interactions.InteractionList.verify(message.interactionList);
                        if (error)
                            return "interactionList." + error;
                    }
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.StringList.verify(message.stringList);
                        if (error)
                            return "stringList." + error;
                    }
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMuxList.verify(message.topicMuxList);
                        if (error)
                            return "topicMuxList." + error;
                    }
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemuxList.verify(message.topicDemuxList);
                        if (error)
                            return "topicDemuxList." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.ServiceReply} ServiceReply
             */
            ServiceReply.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.ServiceReply)
                    return object;
                var message = new $root.ubii.services.ServiceReply();
                if (object.success != null) {
                    if (typeof object.success !== "object")
                        throw TypeError(".ubii.services.ServiceReply.success: object expected");
                    message.success = $root.ubii.general.Success.fromObject(object.success);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.services.ServiceReply.error: object expected");
                    message.error = $root.ubii.general.Error.fromObject(object.error);
                }
                if (object.client != null) {
                    if (typeof object.client !== "object")
                        throw TypeError(".ubii.services.ServiceReply.client: object expected");
                    message.client = $root.ubii.clients.Client.fromObject(object.client);
                }
                if (object.device != null) {
                    if (typeof object.device !== "object")
                        throw TypeError(".ubii.services.ServiceReply.device: object expected");
                    message.device = $root.ubii.devices.Device.fromObject(object.device);
                }
                if (object.server != null) {
                    if (typeof object.server !== "object")
                        throw TypeError(".ubii.services.ServiceReply.server: object expected");
                    message.server = $root.ubii.servers.Server.fromObject(object.server);
                }
                if (object.session != null) {
                    if (typeof object.session !== "object")
                        throw TypeError(".ubii.services.ServiceReply.session: object expected");
                    message.session = $root.ubii.sessions.Session.fromObject(object.session);
                }
                if (object.sessionList != null) {
                    if (typeof object.sessionList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.sessionList: object expected");
                    message.sessionList = $root.ubii.sessions.SessionList.fromObject(object.sessionList);
                }
                if (object.interaction != null) {
                    if (typeof object.interaction !== "object")
                        throw TypeError(".ubii.services.ServiceReply.interaction: object expected");
                    message.interaction = $root.ubii.interactions.Interaction.fromObject(object.interaction);
                }
                if (object.interactionList != null) {
                    if (typeof object.interactionList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.interactionList: object expected");
                    message.interactionList = $root.ubii.interactions.InteractionList.fromObject(object.interactionList);
                }
                if (object.stringList != null) {
                    if (typeof object.stringList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.stringList: object expected");
                    message.stringList = $root.ubii.general.StringList.fromObject(object.stringList);
                }
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                if (object.topicMuxList != null) {
                    if (typeof object.topicMuxList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicMuxList: object expected");
                    message.topicMuxList = $root.ubii.devices.TopicMuxList.fromObject(object.topicMuxList);
                }
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                if (object.topicDemuxList != null) {
                    if (typeof object.topicDemuxList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicDemuxList: object expected");
                    message.topicDemuxList = $root.ubii.devices.TopicDemuxList.fromObject(object.topicDemuxList);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.ServiceReply} message ServiceReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.success != null && message.hasOwnProperty("success")) {
                    object.success = $root.ubii.general.Success.toObject(message.success, options);
                    if (options.oneofs)
                        object.type = "success";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.general.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.type = "error";
                }
                if (message.client != null && message.hasOwnProperty("client")) {
                    object.client = $root.ubii.clients.Client.toObject(message.client, options);
                    if (options.oneofs)
                        object.type = "client";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    object.device = $root.ubii.devices.Device.toObject(message.device, options);
                    if (options.oneofs)
                        object.type = "device";
                }
                if (message.server != null && message.hasOwnProperty("server")) {
                    object.server = $root.ubii.servers.Server.toObject(message.server, options);
                    if (options.oneofs)
                        object.type = "server";
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    object.session = $root.ubii.sessions.Session.toObject(message.session, options);
                    if (options.oneofs)
                        object.type = "session";
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    object.sessionList = $root.ubii.sessions.SessionList.toObject(message.sessionList, options);
                    if (options.oneofs)
                        object.type = "sessionList";
                }
                if (message.interaction != null && message.hasOwnProperty("interaction")) {
                    object.interaction = $root.ubii.interactions.Interaction.toObject(message.interaction, options);
                    if (options.oneofs)
                        object.type = "interaction";
                }
                if (message.interactionList != null && message.hasOwnProperty("interactionList")) {
                    object.interactionList = $root.ubii.interactions.InteractionList.toObject(message.interactionList, options);
                    if (options.oneofs)
                        object.type = "interactionList";
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    object.stringList = $root.ubii.general.StringList.toObject(message.stringList, options);
                    if (options.oneofs)
                        object.type = "stringList";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.type = "topicMux";
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    object.topicMuxList = $root.ubii.devices.TopicMuxList.toObject(message.topicMuxList, options);
                    if (options.oneofs)
                        object.type = "topicMuxList";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.type = "topicDemux";
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    object.topicDemuxList = $root.ubii.devices.TopicDemuxList.toObject(message.topicDemuxList, options);
                    if (options.oneofs)
                        object.type = "topicDemuxList";
                }
                return object;
            };

            /**
             * Converts this ServiceReply to JSON.
             * @function toJSON
             * @memberof ubii.services.ServiceReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceReply;
        })();

        services.ServiceRequest = (function() {

            /**
             * Properties of a ServiceRequest.
             * @memberof ubii.services
             * @interface IServiceRequest
             * @property {string|null} [topic] ServiceRequest topic
             * @property {ubii.clients.IClient|null} [client] ServiceRequest client
             * @property {ubii.devices.IDevice|null} [device] ServiceRequest device
             * @property {ubii.services.request.ITopicSubscription|null} [topicSubscription] ServiceRequest topicSubscription
             * @property {ubii.sessions.ISession|null} [session] ServiceRequest session
             * @property {ubii.sessions.ISessionList|null} [sessionList] ServiceRequest sessionList
             * @property {ubii.interactions.IInteraction|null} [interaction] ServiceRequest interaction
             * @property {ubii.interactions.IInteractionList|null} [interactionList] ServiceRequest interactionList
             * @property {ubii.devices.ITopicMux|null} [topicMux] ServiceRequest topicMux
             * @property {ubii.devices.ITopicMuxList|null} [topicMuxList] ServiceRequest topicMuxList
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] ServiceRequest topicDemux
             * @property {ubii.devices.ITopicDemuxList|null} [topicDemuxList] ServiceRequest topicDemuxList
             */

            /**
             * Constructs a new ServiceRequest.
             * @memberof ubii.services
             * @classdesc Represents a ServiceRequest.
             * @implements IServiceRequest
             * @constructor
             * @param {ubii.services.IServiceRequest=} [properties] Properties to set
             */
            function ServiceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceRequest topic.
             * @member {string} topic
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topic = "";

            /**
             * ServiceRequest client.
             * @member {ubii.clients.IClient|null|undefined} client
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.client = null;

            /**
             * ServiceRequest device.
             * @member {ubii.devices.IDevice|null|undefined} device
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.device = null;

            /**
             * ServiceRequest topicSubscription.
             * @member {ubii.services.request.ITopicSubscription|null|undefined} topicSubscription
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicSubscription = null;

            /**
             * ServiceRequest session.
             * @member {ubii.sessions.ISession|null|undefined} session
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.session = null;

            /**
             * ServiceRequest sessionList.
             * @member {ubii.sessions.ISessionList|null|undefined} sessionList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.sessionList = null;

            /**
             * ServiceRequest interaction.
             * @member {ubii.interactions.IInteraction|null|undefined} interaction
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.interaction = null;

            /**
             * ServiceRequest interactionList.
             * @member {ubii.interactions.IInteractionList|null|undefined} interactionList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.interactionList = null;

            /**
             * ServiceRequest topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicMux = null;

            /**
             * ServiceRequest topicMuxList.
             * @member {ubii.devices.ITopicMuxList|null|undefined} topicMuxList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicMuxList = null;

            /**
             * ServiceRequest topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicDemux = null;

            /**
             * ServiceRequest topicDemuxList.
             * @member {ubii.devices.ITopicDemuxList|null|undefined} topicDemuxList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicDemuxList = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceRequest type.
             * @member {"client"|"device"|"topicSubscription"|"session"|"sessionList"|"interaction"|"interactionList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|undefined} type
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            Object.defineProperty(ServiceRequest.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["client", "device", "topicSubscription", "session", "sessionList", "interaction", "interactionList", "topicMux", "topicMuxList", "topicDemux", "topicDemuxList"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceRequest instance using the specified properties.
             * @function create
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest=} [properties] Properties to set
             * @returns {ubii.services.ServiceRequest} ServiceRequest instance
             */
            ServiceRequest.create = function create(properties) {
                return new ServiceRequest(properties);
            };

            /**
             * Encodes the specified ServiceRequest message. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.client != null && message.hasOwnProperty("client"))
                    $root.ubii.clients.Client.encode(message.client, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.device != null && message.hasOwnProperty("device"))
                    $root.ubii.devices.Device.encode(message.device, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription"))
                    $root.ubii.services.request.TopicSubscription.encode(message.topicSubscription, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.session != null && message.hasOwnProperty("session"))
                    $root.ubii.sessions.Session.encode(message.session, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.sessionList != null && message.hasOwnProperty("sessionList"))
                    $root.ubii.sessions.SessionList.encode(message.sessionList, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.interaction != null && message.hasOwnProperty("interaction"))
                    $root.ubii.interactions.Interaction.encode(message.interaction, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.interactionList != null && message.hasOwnProperty("interactionList"))
                    $root.ubii.interactions.InteractionList.encode(message.interactionList, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList"))
                    $root.ubii.devices.TopicMuxList.encode(message.topicMuxList, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList"))
                    $root.ubii.devices.TopicDemuxList.encode(message.topicDemuxList, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceRequest message, length delimited. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.ServiceRequest} ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.ServiceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.client = $root.ubii.clients.Client.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.device = $root.ubii.devices.Device.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.topicSubscription = $root.ubii.services.request.TopicSubscription.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.session = $root.ubii.sessions.Session.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.sessionList = $root.ubii.sessions.SessionList.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.interaction = $root.ubii.interactions.Interaction.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.interactionList = $root.ubii.interactions.InteractionList.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.topicMuxList = $root.ubii.devices.TopicMuxList.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.topicDemuxList = $root.ubii.devices.TopicDemuxList.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.ServiceRequest} ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceRequest message.
             * @function verify
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.client != null && message.hasOwnProperty("client")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.Client.verify(message.client);
                        if (error)
                            return "client." + error;
                    }
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.Device.verify(message.device);
                        if (error)
                            return "device." + error;
                    }
                }
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.services.request.TopicSubscription.verify(message.topicSubscription);
                        if (error)
                            return "topicSubscription." + error;
                    }
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.Session.verify(message.session);
                        if (error)
                            return "session." + error;
                    }
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.SessionList.verify(message.sessionList);
                        if (error)
                            return "sessionList." + error;
                    }
                }
                if (message.interaction != null && message.hasOwnProperty("interaction")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.interactions.Interaction.verify(message.interaction);
                        if (error)
                            return "interaction." + error;
                    }
                }
                if (message.interactionList != null && message.hasOwnProperty("interactionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.interactions.InteractionList.verify(message.interactionList);
                        if (error)
                            return "interactionList." + error;
                    }
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMuxList.verify(message.topicMuxList);
                        if (error)
                            return "topicMuxList." + error;
                    }
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemuxList.verify(message.topicDemuxList);
                        if (error)
                            return "topicDemuxList." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.ServiceRequest} ServiceRequest
             */
            ServiceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.ServiceRequest)
                    return object;
                var message = new $root.ubii.services.ServiceRequest();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.client != null) {
                    if (typeof object.client !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.client: object expected");
                    message.client = $root.ubii.clients.Client.fromObject(object.client);
                }
                if (object.device != null) {
                    if (typeof object.device !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.device: object expected");
                    message.device = $root.ubii.devices.Device.fromObject(object.device);
                }
                if (object.topicSubscription != null) {
                    if (typeof object.topicSubscription !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicSubscription: object expected");
                    message.topicSubscription = $root.ubii.services.request.TopicSubscription.fromObject(object.topicSubscription);
                }
                if (object.session != null) {
                    if (typeof object.session !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.session: object expected");
                    message.session = $root.ubii.sessions.Session.fromObject(object.session);
                }
                if (object.sessionList != null) {
                    if (typeof object.sessionList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.sessionList: object expected");
                    message.sessionList = $root.ubii.sessions.SessionList.fromObject(object.sessionList);
                }
                if (object.interaction != null) {
                    if (typeof object.interaction !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.interaction: object expected");
                    message.interaction = $root.ubii.interactions.Interaction.fromObject(object.interaction);
                }
                if (object.interactionList != null) {
                    if (typeof object.interactionList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.interactionList: object expected");
                    message.interactionList = $root.ubii.interactions.InteractionList.fromObject(object.interactionList);
                }
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                if (object.topicMuxList != null) {
                    if (typeof object.topicMuxList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicMuxList: object expected");
                    message.topicMuxList = $root.ubii.devices.TopicMuxList.fromObject(object.topicMuxList);
                }
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                if (object.topicDemuxList != null) {
                    if (typeof object.topicDemuxList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicDemuxList: object expected");
                    message.topicDemuxList = $root.ubii.devices.TopicDemuxList.fromObject(object.topicDemuxList);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.ServiceRequest} message ServiceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.topic = "";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.client != null && message.hasOwnProperty("client")) {
                    object.client = $root.ubii.clients.Client.toObject(message.client, options);
                    if (options.oneofs)
                        object.type = "client";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    object.device = $root.ubii.devices.Device.toObject(message.device, options);
                    if (options.oneofs)
                        object.type = "device";
                }
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription")) {
                    object.topicSubscription = $root.ubii.services.request.TopicSubscription.toObject(message.topicSubscription, options);
                    if (options.oneofs)
                        object.type = "topicSubscription";
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    object.session = $root.ubii.sessions.Session.toObject(message.session, options);
                    if (options.oneofs)
                        object.type = "session";
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    object.sessionList = $root.ubii.sessions.SessionList.toObject(message.sessionList, options);
                    if (options.oneofs)
                        object.type = "sessionList";
                }
                if (message.interaction != null && message.hasOwnProperty("interaction")) {
                    object.interaction = $root.ubii.interactions.Interaction.toObject(message.interaction, options);
                    if (options.oneofs)
                        object.type = "interaction";
                }
                if (message.interactionList != null && message.hasOwnProperty("interactionList")) {
                    object.interactionList = $root.ubii.interactions.InteractionList.toObject(message.interactionList, options);
                    if (options.oneofs)
                        object.type = "interactionList";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.type = "topicMux";
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    object.topicMuxList = $root.ubii.devices.TopicMuxList.toObject(message.topicMuxList, options);
                    if (options.oneofs)
                        object.type = "topicMuxList";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.type = "topicDemux";
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    object.topicDemuxList = $root.ubii.devices.TopicDemuxList.toObject(message.topicDemuxList, options);
                    if (options.oneofs)
                        object.type = "topicDemuxList";
                }
                return object;
            };

            /**
             * Converts this ServiceRequest to JSON.
             * @function toJSON
             * @memberof ubii.services.ServiceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceRequest;
        })();

        return services;
    })();

    ubii.sessions = (function() {

        /**
         * Namespace sessions.
         * @memberof ubii
         * @namespace
         */
        var sessions = {};

        sessions.InteractionInputMapping = (function() {

            /**
             * Properties of an InteractionInputMapping.
             * @memberof ubii.sessions
             * @interface IInteractionInputMapping
             * @property {string|null} [name] InteractionInputMapping name
             * @property {string|null} [topic] InteractionInputMapping topic
             * @property {ubii.devices.ITopicMux|null} [topicMux] InteractionInputMapping topicMux
             */

            /**
             * Constructs a new InteractionInputMapping.
             * @memberof ubii.sessions
             * @classdesc Represents an InteractionInputMapping.
             * @implements IInteractionInputMapping
             * @constructor
             * @param {ubii.sessions.IInteractionInputMapping=} [properties] Properties to set
             */
            function InteractionInputMapping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteractionInputMapping name.
             * @member {string} name
             * @memberof ubii.sessions.InteractionInputMapping
             * @instance
             */
            InteractionInputMapping.prototype.name = "";

            /**
             * InteractionInputMapping topic.
             * @member {string} topic
             * @memberof ubii.sessions.InteractionInputMapping
             * @instance
             */
            InteractionInputMapping.prototype.topic = "";

            /**
             * InteractionInputMapping topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.sessions.InteractionInputMapping
             * @instance
             */
            InteractionInputMapping.prototype.topicMux = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * InteractionInputMapping topicSource.
             * @member {"topic"|"topicMux"|undefined} topicSource
             * @memberof ubii.sessions.InteractionInputMapping
             * @instance
             */
            Object.defineProperty(InteractionInputMapping.prototype, "topicSource", {
                get: $util.oneOfGetter($oneOfFields = ["topic", "topicMux"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InteractionInputMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {ubii.sessions.IInteractionInputMapping=} [properties] Properties to set
             * @returns {ubii.sessions.InteractionInputMapping} InteractionInputMapping instance
             */
            InteractionInputMapping.create = function create(properties) {
                return new InteractionInputMapping(properties);
            };

            /**
             * Encodes the specified InteractionInputMapping message. Does not implicitly {@link ubii.sessions.InteractionInputMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {ubii.sessions.IInteractionInputMapping} message InteractionInputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionInputMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InteractionInputMapping message, length delimited. Does not implicitly {@link ubii.sessions.InteractionInputMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {ubii.sessions.IInteractionInputMapping} message InteractionInputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionInputMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteractionInputMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.InteractionInputMapping} InteractionInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionInputMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.InteractionInputMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.topic = reader.string();
                        break;
                    case 3:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InteractionInputMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.InteractionInputMapping} InteractionInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionInputMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteractionInputMapping message.
             * @function verify
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteractionInputMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    properties.topicSource = 1;
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.topicSource === 1)
                        return "topicSource: multiple values";
                    properties.topicSource = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InteractionInputMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.InteractionInputMapping} InteractionInputMapping
             */
            InteractionInputMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.InteractionInputMapping)
                    return object;
                var message = new $root.ubii.sessions.InteractionInputMapping();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.sessions.InteractionInputMapping.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                return message;
            };

            /**
             * Creates a plain object from an InteractionInputMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.InteractionInputMapping
             * @static
             * @param {ubii.sessions.InteractionInputMapping} message InteractionInputMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteractionInputMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    object.topic = message.topic;
                    if (options.oneofs)
                        object.topicSource = "topic";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.topicSource = "topicMux";
                }
                return object;
            };

            /**
             * Converts this InteractionInputMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.InteractionInputMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteractionInputMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InteractionInputMapping;
        })();

        sessions.InteractionInputMappingList = (function() {

            /**
             * Properties of an InteractionInputMappingList.
             * @memberof ubii.sessions
             * @interface IInteractionInputMappingList
             * @property {Array.<ubii.sessions.IInteractionInputMapping>|null} [elements] InteractionInputMappingList elements
             */

            /**
             * Constructs a new InteractionInputMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents an InteractionInputMappingList.
             * @implements IInteractionInputMappingList
             * @constructor
             * @param {ubii.sessions.IInteractionInputMappingList=} [properties] Properties to set
             */
            function InteractionInputMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteractionInputMappingList elements.
             * @member {Array.<ubii.sessions.IInteractionInputMapping>} elements
             * @memberof ubii.sessions.InteractionInputMappingList
             * @instance
             */
            InteractionInputMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new InteractionInputMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {ubii.sessions.IInteractionInputMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.InteractionInputMappingList} InteractionInputMappingList instance
             */
            InteractionInputMappingList.create = function create(properties) {
                return new InteractionInputMappingList(properties);
            };

            /**
             * Encodes the specified InteractionInputMappingList message. Does not implicitly {@link ubii.sessions.InteractionInputMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {ubii.sessions.IInteractionInputMappingList} message InteractionInputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionInputMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.InteractionInputMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InteractionInputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.InteractionInputMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {ubii.sessions.IInteractionInputMappingList} message InteractionInputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionInputMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteractionInputMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.InteractionInputMappingList} InteractionInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionInputMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.InteractionInputMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.InteractionInputMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InteractionInputMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.InteractionInputMappingList} InteractionInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionInputMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteractionInputMappingList message.
             * @function verify
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteractionInputMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.InteractionInputMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InteractionInputMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.InteractionInputMappingList} InteractionInputMappingList
             */
            InteractionInputMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.InteractionInputMappingList)
                    return object;
                var message = new $root.ubii.sessions.InteractionInputMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.InteractionInputMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.InteractionInputMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.InteractionInputMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an InteractionInputMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.InteractionInputMappingList
             * @static
             * @param {ubii.sessions.InteractionInputMappingList} message InteractionInputMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteractionInputMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.InteractionInputMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this InteractionInputMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.InteractionInputMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteractionInputMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InteractionInputMappingList;
        })();

        sessions.InteractionOutputMapping = (function() {

            /**
             * Properties of an InteractionOutputMapping.
             * @memberof ubii.sessions
             * @interface IInteractionOutputMapping
             * @property {string|null} [name] InteractionOutputMapping name
             * @property {string|null} [topic] InteractionOutputMapping topic
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] InteractionOutputMapping topicDemux
             */

            /**
             * Constructs a new InteractionOutputMapping.
             * @memberof ubii.sessions
             * @classdesc Represents an InteractionOutputMapping.
             * @implements IInteractionOutputMapping
             * @constructor
             * @param {ubii.sessions.IInteractionOutputMapping=} [properties] Properties to set
             */
            function InteractionOutputMapping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteractionOutputMapping name.
             * @member {string} name
             * @memberof ubii.sessions.InteractionOutputMapping
             * @instance
             */
            InteractionOutputMapping.prototype.name = "";

            /**
             * InteractionOutputMapping topic.
             * @member {string} topic
             * @memberof ubii.sessions.InteractionOutputMapping
             * @instance
             */
            InteractionOutputMapping.prototype.topic = "";

            /**
             * InteractionOutputMapping topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.sessions.InteractionOutputMapping
             * @instance
             */
            InteractionOutputMapping.prototype.topicDemux = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * InteractionOutputMapping topicDestination.
             * @member {"topic"|"topicDemux"|undefined} topicDestination
             * @memberof ubii.sessions.InteractionOutputMapping
             * @instance
             */
            Object.defineProperty(InteractionOutputMapping.prototype, "topicDestination", {
                get: $util.oneOfGetter($oneOfFields = ["topic", "topicDemux"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InteractionOutputMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {ubii.sessions.IInteractionOutputMapping=} [properties] Properties to set
             * @returns {ubii.sessions.InteractionOutputMapping} InteractionOutputMapping instance
             */
            InteractionOutputMapping.create = function create(properties) {
                return new InteractionOutputMapping(properties);
            };

            /**
             * Encodes the specified InteractionOutputMapping message. Does not implicitly {@link ubii.sessions.InteractionOutputMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {ubii.sessions.IInteractionOutputMapping} message InteractionOutputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionOutputMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InteractionOutputMapping message, length delimited. Does not implicitly {@link ubii.sessions.InteractionOutputMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {ubii.sessions.IInteractionOutputMapping} message InteractionOutputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionOutputMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteractionOutputMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.InteractionOutputMapping} InteractionOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionOutputMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.InteractionOutputMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.topic = reader.string();
                        break;
                    case 3:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InteractionOutputMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.InteractionOutputMapping} InteractionOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionOutputMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteractionOutputMapping message.
             * @function verify
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteractionOutputMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    properties.topicDestination = 1;
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.topicDestination === 1)
                        return "topicDestination: multiple values";
                    properties.topicDestination = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InteractionOutputMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.InteractionOutputMapping} InteractionOutputMapping
             */
            InteractionOutputMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.InteractionOutputMapping)
                    return object;
                var message = new $root.ubii.sessions.InteractionOutputMapping();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.sessions.InteractionOutputMapping.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                return message;
            };

            /**
             * Creates a plain object from an InteractionOutputMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.InteractionOutputMapping
             * @static
             * @param {ubii.sessions.InteractionOutputMapping} message InteractionOutputMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteractionOutputMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    object.topic = message.topic;
                    if (options.oneofs)
                        object.topicDestination = "topic";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.topicDestination = "topicDemux";
                }
                return object;
            };

            /**
             * Converts this InteractionOutputMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.InteractionOutputMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteractionOutputMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InteractionOutputMapping;
        })();

        sessions.InteractionOutputMappingList = (function() {

            /**
             * Properties of an InteractionOutputMappingList.
             * @memberof ubii.sessions
             * @interface IInteractionOutputMappingList
             * @property {Array.<ubii.sessions.IInteractionOutputMapping>|null} [elements] InteractionOutputMappingList elements
             */

            /**
             * Constructs a new InteractionOutputMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents an InteractionOutputMappingList.
             * @implements IInteractionOutputMappingList
             * @constructor
             * @param {ubii.sessions.IInteractionOutputMappingList=} [properties] Properties to set
             */
            function InteractionOutputMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteractionOutputMappingList elements.
             * @member {Array.<ubii.sessions.IInteractionOutputMapping>} elements
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @instance
             */
            InteractionOutputMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new InteractionOutputMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {ubii.sessions.IInteractionOutputMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.InteractionOutputMappingList} InteractionOutputMappingList instance
             */
            InteractionOutputMappingList.create = function create(properties) {
                return new InteractionOutputMappingList(properties);
            };

            /**
             * Encodes the specified InteractionOutputMappingList message. Does not implicitly {@link ubii.sessions.InteractionOutputMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {ubii.sessions.IInteractionOutputMappingList} message InteractionOutputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionOutputMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.InteractionOutputMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified InteractionOutputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.InteractionOutputMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {ubii.sessions.IInteractionOutputMappingList} message InteractionOutputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteractionOutputMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteractionOutputMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.InteractionOutputMappingList} InteractionOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionOutputMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.InteractionOutputMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.InteractionOutputMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InteractionOutputMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.InteractionOutputMappingList} InteractionOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteractionOutputMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteractionOutputMappingList message.
             * @function verify
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteractionOutputMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.InteractionOutputMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an InteractionOutputMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.InteractionOutputMappingList} InteractionOutputMappingList
             */
            InteractionOutputMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.InteractionOutputMappingList)
                    return object;
                var message = new $root.ubii.sessions.InteractionOutputMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.InteractionOutputMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.InteractionOutputMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.InteractionOutputMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an InteractionOutputMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @static
             * @param {ubii.sessions.InteractionOutputMappingList} message InteractionOutputMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteractionOutputMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.InteractionOutputMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this InteractionOutputMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.InteractionOutputMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteractionOutputMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return InteractionOutputMappingList;
        })();

        sessions.IOMapping = (function() {

            /**
             * Properties of a IOMapping.
             * @memberof ubii.sessions
             * @interface IIOMapping
             * @property {string|null} [interactionId] IOMapping interactionId
             * @property {Array.<ubii.sessions.IInteractionInputMapping>|null} [inputMappings] IOMapping inputMappings
             * @property {Array.<ubii.sessions.IInteractionOutputMapping>|null} [outputMappings] IOMapping outputMappings
             */

            /**
             * Constructs a new IOMapping.
             * @memberof ubii.sessions
             * @classdesc Represents a IOMapping.
             * @implements IIOMapping
             * @constructor
             * @param {ubii.sessions.IIOMapping=} [properties] Properties to set
             */
            function IOMapping(properties) {
                this.inputMappings = [];
                this.outputMappings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOMapping interactionId.
             * @member {string} interactionId
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.interactionId = "";

            /**
             * IOMapping inputMappings.
             * @member {Array.<ubii.sessions.IInteractionInputMapping>} inputMappings
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.inputMappings = $util.emptyArray;

            /**
             * IOMapping outputMappings.
             * @member {Array.<ubii.sessions.IInteractionOutputMapping>} outputMappings
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.outputMappings = $util.emptyArray;

            /**
             * Creates a new IOMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping=} [properties] Properties to set
             * @returns {ubii.sessions.IOMapping} IOMapping instance
             */
            IOMapping.create = function create(properties) {
                return new IOMapping(properties);
            };

            /**
             * Encodes the specified IOMapping message. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.interactionId != null && message.hasOwnProperty("interactionId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.interactionId);
                if (message.inputMappings != null && message.inputMappings.length)
                    for (var i = 0; i < message.inputMappings.length; ++i)
                        $root.ubii.sessions.InteractionInputMapping.encode(message.inputMappings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.outputMappings != null && message.outputMappings.length)
                    for (var i = 0; i < message.outputMappings.length; ++i)
                        $root.ubii.sessions.InteractionOutputMapping.encode(message.outputMappings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IOMapping message, length delimited. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.IOMapping} IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.IOMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.interactionId = reader.string();
                        break;
                    case 2:
                        if (!(message.inputMappings && message.inputMappings.length))
                            message.inputMappings = [];
                        message.inputMappings.push($root.ubii.sessions.InteractionInputMapping.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.outputMappings && message.outputMappings.length))
                            message.outputMappings = [];
                        message.outputMappings.push($root.ubii.sessions.InteractionOutputMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a IOMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.IOMapping} IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a IOMapping message.
             * @function verify
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.interactionId != null && message.hasOwnProperty("interactionId"))
                    if (!$util.isString(message.interactionId))
                        return "interactionId: string expected";
                if (message.inputMappings != null && message.hasOwnProperty("inputMappings")) {
                    if (!Array.isArray(message.inputMappings))
                        return "inputMappings: array expected";
                    for (var i = 0; i < message.inputMappings.length; ++i) {
                        var error = $root.ubii.sessions.InteractionInputMapping.verify(message.inputMappings[i]);
                        if (error)
                            return "inputMappings." + error;
                    }
                }
                if (message.outputMappings != null && message.hasOwnProperty("outputMappings")) {
                    if (!Array.isArray(message.outputMappings))
                        return "outputMappings: array expected";
                    for (var i = 0; i < message.outputMappings.length; ++i) {
                        var error = $root.ubii.sessions.InteractionOutputMapping.verify(message.outputMappings[i]);
                        if (error)
                            return "outputMappings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a IOMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.IOMapping} IOMapping
             */
            IOMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.IOMapping)
                    return object;
                var message = new $root.ubii.sessions.IOMapping();
                if (object.interactionId != null)
                    message.interactionId = String(object.interactionId);
                if (object.inputMappings) {
                    if (!Array.isArray(object.inputMappings))
                        throw TypeError(".ubii.sessions.IOMapping.inputMappings: array expected");
                    message.inputMappings = [];
                    for (var i = 0; i < object.inputMappings.length; ++i) {
                        if (typeof object.inputMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMapping.inputMappings: object expected");
                        message.inputMappings[i] = $root.ubii.sessions.InteractionInputMapping.fromObject(object.inputMappings[i]);
                    }
                }
                if (object.outputMappings) {
                    if (!Array.isArray(object.outputMappings))
                        throw TypeError(".ubii.sessions.IOMapping.outputMappings: array expected");
                    message.outputMappings = [];
                    for (var i = 0; i < object.outputMappings.length; ++i) {
                        if (typeof object.outputMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMapping.outputMappings: object expected");
                        message.outputMappings[i] = $root.ubii.sessions.InteractionOutputMapping.fromObject(object.outputMappings[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a IOMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IOMapping} message IOMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputMappings = [];
                    object.outputMappings = [];
                }
                if (options.defaults)
                    object.interactionId = "";
                if (message.interactionId != null && message.hasOwnProperty("interactionId"))
                    object.interactionId = message.interactionId;
                if (message.inputMappings && message.inputMappings.length) {
                    object.inputMappings = [];
                    for (var j = 0; j < message.inputMappings.length; ++j)
                        object.inputMappings[j] = $root.ubii.sessions.InteractionInputMapping.toObject(message.inputMappings[j], options);
                }
                if (message.outputMappings && message.outputMappings.length) {
                    object.outputMappings = [];
                    for (var j = 0; j < message.outputMappings.length; ++j)
                        object.outputMappings[j] = $root.ubii.sessions.InteractionOutputMapping.toObject(message.outputMappings[j], options);
                }
                return object;
            };

            /**
             * Converts this IOMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.IOMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOMapping;
        })();

        sessions.IOMappingList = (function() {

            /**
             * Properties of a IOMappingList.
             * @memberof ubii.sessions
             * @interface IIOMappingList
             * @property {Array.<ubii.sessions.IIOMapping>|null} [elements] IOMappingList elements
             */

            /**
             * Constructs a new IOMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents a IOMappingList.
             * @implements IIOMappingList
             * @constructor
             * @param {ubii.sessions.IIOMappingList=} [properties] Properties to set
             */
            function IOMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOMappingList elements.
             * @member {Array.<ubii.sessions.IIOMapping>} elements
             * @memberof ubii.sessions.IOMappingList
             * @instance
             */
            IOMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new IOMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.IOMappingList} IOMappingList instance
             */
            IOMappingList.create = function create(properties) {
                return new IOMappingList(properties);
            };

            /**
             * Encodes the specified IOMappingList message. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList} message IOMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.IOMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IOMappingList message, length delimited. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList} message IOMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.IOMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a IOMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a IOMappingList message.
             * @function verify
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.IOMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a IOMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             */
            IOMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.IOMappingList)
                    return object;
                var message = new $root.ubii.sessions.IOMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.IOMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.IOMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a IOMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IOMappingList} message IOMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.IOMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this IOMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.IOMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOMappingList;
        })();

        sessions.Session = (function() {

            /**
             * Properties of a Session.
             * @memberof ubii.sessions
             * @interface ISession
             * @property {string|null} [id] Session id
             * @property {string|null} [name] Session name
             * @property {Array.<ubii.interactions.IInteraction>|null} [interactions] Session interactions
             * @property {Array.<ubii.sessions.IIOMapping>|null} [ioMappings] Session ioMappings
             */

            /**
             * Constructs a new Session.
             * @memberof ubii.sessions
             * @classdesc Represents a Session.
             * @implements ISession
             * @constructor
             * @param {ubii.sessions.ISession=} [properties] Properties to set
             */
            function Session(properties) {
                this.interactions = [];
                this.ioMappings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Session id.
             * @member {string} id
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.id = "";

            /**
             * Session name.
             * @member {string} name
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.name = "";

            /**
             * Session interactions.
             * @member {Array.<ubii.interactions.IInteraction>} interactions
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.interactions = $util.emptyArray;

            /**
             * Session ioMappings.
             * @member {Array.<ubii.sessions.IIOMapping>} ioMappings
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.ioMappings = $util.emptyArray;

            /**
             * Creates a new Session instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession=} [properties] Properties to set
             * @returns {ubii.sessions.Session} Session instance
             */
            Session.create = function create(properties) {
                return new Session(properties);
            };

            /**
             * Encodes the specified Session message. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.interactions != null && message.interactions.length)
                    for (var i = 0; i < message.interactions.length; ++i)
                        $root.ubii.interactions.Interaction.encode(message.interactions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.ioMappings != null && message.ioMappings.length)
                    for (var i = 0; i < message.ioMappings.length; ++i)
                        $root.ubii.sessions.IOMapping.encode(message.ioMappings[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.Session();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        if (!(message.interactions && message.interactions.length))
                            message.interactions = [];
                        message.interactions.push($root.ubii.interactions.Interaction.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.ioMappings && message.ioMappings.length))
                            message.ioMappings = [];
                        message.ioMappings.push($root.ubii.sessions.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Session message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Session message.
             * @function verify
             * @memberof ubii.sessions.Session
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Session.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.interactions != null && message.hasOwnProperty("interactions")) {
                    if (!Array.isArray(message.interactions))
                        return "interactions: array expected";
                    for (var i = 0; i < message.interactions.length; ++i) {
                        var error = $root.ubii.interactions.Interaction.verify(message.interactions[i]);
                        if (error)
                            return "interactions." + error;
                    }
                }
                if (message.ioMappings != null && message.hasOwnProperty("ioMappings")) {
                    if (!Array.isArray(message.ioMappings))
                        return "ioMappings: array expected";
                    for (var i = 0; i < message.ioMappings.length; ++i) {
                        var error = $root.ubii.sessions.IOMapping.verify(message.ioMappings[i]);
                        if (error)
                            return "ioMappings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.Session
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.Session} Session
             */
            Session.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.Session)
                    return object;
                var message = new $root.ubii.sessions.Session();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.interactions) {
                    if (!Array.isArray(object.interactions))
                        throw TypeError(".ubii.sessions.Session.interactions: array expected");
                    message.interactions = [];
                    for (var i = 0; i < object.interactions.length; ++i) {
                        if (typeof object.interactions[i] !== "object")
                            throw TypeError(".ubii.sessions.Session.interactions: object expected");
                        message.interactions[i] = $root.ubii.interactions.Interaction.fromObject(object.interactions[i]);
                    }
                }
                if (object.ioMappings) {
                    if (!Array.isArray(object.ioMappings))
                        throw TypeError(".ubii.sessions.Session.ioMappings: array expected");
                    message.ioMappings = [];
                    for (var i = 0; i < object.ioMappings.length; ++i) {
                        if (typeof object.ioMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.Session.ioMappings: object expected");
                        message.ioMappings[i] = $root.ubii.sessions.IOMapping.fromObject(object.ioMappings[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.Session} message Session
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Session.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.interactions = [];
                    object.ioMappings = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.interactions && message.interactions.length) {
                    object.interactions = [];
                    for (var j = 0; j < message.interactions.length; ++j)
                        object.interactions[j] = $root.ubii.interactions.Interaction.toObject(message.interactions[j], options);
                }
                if (message.ioMappings && message.ioMappings.length) {
                    object.ioMappings = [];
                    for (var j = 0; j < message.ioMappings.length; ++j)
                        object.ioMappings[j] = $root.ubii.sessions.IOMapping.toObject(message.ioMappings[j], options);
                }
                return object;
            };

            /**
             * Converts this Session to JSON.
             * @function toJSON
             * @memberof ubii.sessions.Session
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Session.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Session;
        })();

        sessions.SessionList = (function() {

            /**
             * Properties of a SessionList.
             * @memberof ubii.sessions
             * @interface ISessionList
             * @property {Array.<ubii.sessions.ISession>|null} [elements] SessionList elements
             */

            /**
             * Constructs a new SessionList.
             * @memberof ubii.sessions
             * @classdesc Represents a SessionList.
             * @implements ISessionList
             * @constructor
             * @param {ubii.sessions.ISessionList=} [properties] Properties to set
             */
            function SessionList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SessionList elements.
             * @member {Array.<ubii.sessions.ISession>} elements
             * @memberof ubii.sessions.SessionList
             * @instance
             */
            SessionList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new SessionList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList=} [properties] Properties to set
             * @returns {ubii.sessions.SessionList} SessionList instance
             */
            SessionList.create = function create(properties) {
                return new SessionList(properties);
            };

            /**
             * Encodes the specified SessionList message. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList} message SessionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.Session.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SessionList message, length delimited. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList} message SessionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SessionList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.SessionList} SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.SessionList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.Session.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SessionList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.SessionList} SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionList message.
             * @function verify
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.Session.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SessionList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.SessionList} SessionList
             */
            SessionList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.SessionList)
                    return object;
                var message = new $root.ubii.sessions.SessionList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.SessionList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.SessionList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.Session.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SessionList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.SessionList} message SessionList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.Session.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this SessionList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.SessionList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SessionList;
        })();

        return sessions;
    })();

    ubii.topicData = (function() {

        /**
         * Namespace topicData.
         * @memberof ubii
         * @namespace
         */
        var topicData = {};

        topicData.TopicData = (function() {

            /**
             * Properties of a TopicData.
             * @memberof ubii.topicData
             * @interface ITopicData
             * @property {ubii.topicData.ITopicDataRecord|null} [topicDataRecord] TopicData topicDataRecord
             * @property {ubii.topicData.ITopicDataRecordList|null} [topicDataRecordList] TopicData topicDataRecordList
             * @property {ubii.general.IError|null} [error] TopicData error
             */

            /**
             * Constructs a new TopicData.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicData.
             * @implements ITopicData
             * @constructor
             * @param {ubii.topicData.ITopicData=} [properties] Properties to set
             */
            function TopicData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicData topicDataRecord.
             * @member {ubii.topicData.ITopicDataRecord|null|undefined} topicDataRecord
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.topicDataRecord = null;

            /**
             * TopicData topicDataRecordList.
             * @member {ubii.topicData.ITopicDataRecordList|null|undefined} topicDataRecordList
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.topicDataRecordList = null;

            /**
             * TopicData error.
             * @member {ubii.general.IError|null|undefined} error
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicData type.
             * @member {"topicDataRecord"|"topicDataRecordList"|"error"|undefined} type
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            Object.defineProperty(TopicData.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["topicDataRecord", "topicDataRecordList", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicData instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData=} [properties] Properties to set
             * @returns {ubii.topicData.TopicData} TopicData instance
             */
            TopicData.create = function create(properties) {
                return new TopicData(properties);
            };

            /**
             * Encodes the specified TopicData message. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData} message TopicData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord"))
                    $root.ubii.topicData.TopicDataRecord.encode(message.topicDataRecord, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList"))
                    $root.ubii.topicData.TopicDataRecordList.encode(message.topicDataRecordList, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.general.Error.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicData message, length delimited. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData} message TopicData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicData message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicData} TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.error = $root.ubii.general.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicData} TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicData message.
             * @function verify
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.topicData.TopicDataRecord.verify(message.topicDataRecord);
                        if (error)
                            return "topicDataRecord." + error;
                    }
                }
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.topicData.TopicDataRecordList.verify(message.topicDataRecordList);
                        if (error)
                            return "topicDataRecordList." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicData} TopicData
             */
            TopicData.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicData)
                    return object;
                var message = new $root.ubii.topicData.TopicData();
                if (object.topicDataRecord != null) {
                    if (typeof object.topicDataRecord !== "object")
                        throw TypeError(".ubii.topicData.TopicData.topicDataRecord: object expected");
                    message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.fromObject(object.topicDataRecord);
                }
                if (object.topicDataRecordList != null) {
                    if (typeof object.topicDataRecordList !== "object")
                        throw TypeError(".ubii.topicData.TopicData.topicDataRecordList: object expected");
                    message.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.fromObject(object.topicDataRecordList);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.topicData.TopicData.error: object expected");
                    message.error = $root.ubii.general.Error.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.TopicData} message TopicData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    object.topicDataRecord = $root.ubii.topicData.TopicDataRecord.toObject(message.topicDataRecord, options);
                    if (options.oneofs)
                        object.type = "topicDataRecord";
                }
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList")) {
                    object.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.toObject(message.topicDataRecordList, options);
                    if (options.oneofs)
                        object.type = "topicDataRecordList";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.general.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.type = "error";
                }
                return object;
            };

            /**
             * Converts this TopicData to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicData;
        })();

        topicData.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof ubii.topicData
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof ubii.topicData
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {ubii.topicData.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof ubii.topicData.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof ubii.topicData.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp=} [properties] Properties to set
             * @returns {ubii.topicData.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.Timestamp)
                    return object;
                var message = new $root.ubii.topicData.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof ubii.topicData.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        topicData.TopicDataRecord = (function() {

            /**
             * Properties of a TopicDataRecord.
             * @memberof ubii.topicData
             * @interface ITopicDataRecord
             * @property {string|null} [topic] TopicDataRecord topic
             * @property {ubii.topicData.ITimestamp|null} [timestamp] TopicDataRecord timestamp
             * @property {number|null} [double] TopicDataRecord double
             * @property {boolean|null} [bool] TopicDataRecord bool
             * @property {string|null} [string] TopicDataRecord string
             * @property {ubii.dataStructure.IVector2|null} [vector2] TopicDataRecord vector2
             * @property {ubii.dataStructure.IVector3|null} [vector3] TopicDataRecord vector3
             * @property {ubii.dataStructure.IVector4|null} [vector4] TopicDataRecord vector4
             * @property {ubii.dataStructure.IQuaternion|null} [quaternion] TopicDataRecord quaternion
             * @property {ubii.dataStructure.IMatrix3x2|null} [matrix3x2] TopicDataRecord matrix3x2
             * @property {ubii.dataStructure.IMatrix4x4|null} [matrix4x4] TopicDataRecord matrix4x4
             * @property {ubii.dataStructure.IColor|null} [color] TopicDataRecord color
             * @property {ubii.dataStructure.ITouchEvent|null} [touchEvent] TopicDataRecord touchEvent
             * @property {ubii.dataStructure.IKeyEvent|null} [keyEvent] TopicDataRecord keyEvent
             * @property {ubii.dataStructure.IMouseEvent|null} [mouseEvent] TopicDataRecord mouseEvent
             * @property {ubii.dataStructure.IMyoEvent|null} [myoEvent] TopicDataRecord myoEvent
             * @property {ubii.dataStructure.IPose|null} [pose] TopicDataRecord pose
             * @property {ubii.dataStructure.IObject3D|null} [object3D] TopicDataRecord object3D
             */

            /**
             * Constructs a new TopicDataRecord.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicDataRecord.
             * @implements ITopicDataRecord
             * @constructor
             * @param {ubii.topicData.ITopicDataRecord=} [properties] Properties to set
             */
            function TopicDataRecord(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDataRecord topic.
             * @member {string} topic
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.topic = "";

            /**
             * TopicDataRecord timestamp.
             * @member {ubii.topicData.ITimestamp|null|undefined} timestamp
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.timestamp = null;

            /**
             * TopicDataRecord double.
             * @member {number} double
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.double = 0;

            /**
             * TopicDataRecord bool.
             * @member {boolean} bool
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.bool = false;

            /**
             * TopicDataRecord string.
             * @member {string} string
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.string = "";

            /**
             * TopicDataRecord vector2.
             * @member {ubii.dataStructure.IVector2|null|undefined} vector2
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector2 = null;

            /**
             * TopicDataRecord vector3.
             * @member {ubii.dataStructure.IVector3|null|undefined} vector3
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector3 = null;

            /**
             * TopicDataRecord vector4.
             * @member {ubii.dataStructure.IVector4|null|undefined} vector4
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector4 = null;

            /**
             * TopicDataRecord quaternion.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} quaternion
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.quaternion = null;

            /**
             * TopicDataRecord matrix3x2.
             * @member {ubii.dataStructure.IMatrix3x2|null|undefined} matrix3x2
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.matrix3x2 = null;

            /**
             * TopicDataRecord matrix4x4.
             * @member {ubii.dataStructure.IMatrix4x4|null|undefined} matrix4x4
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.matrix4x4 = null;

            /**
             * TopicDataRecord color.
             * @member {ubii.dataStructure.IColor|null|undefined} color
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.color = null;

            /**
             * TopicDataRecord touchEvent.
             * @member {ubii.dataStructure.ITouchEvent|null|undefined} touchEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.touchEvent = null;

            /**
             * TopicDataRecord keyEvent.
             * @member {ubii.dataStructure.IKeyEvent|null|undefined} keyEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.keyEvent = null;

            /**
             * TopicDataRecord mouseEvent.
             * @member {ubii.dataStructure.IMouseEvent|null|undefined} mouseEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.mouseEvent = null;

            /**
             * TopicDataRecord myoEvent.
             * @member {ubii.dataStructure.IMyoEvent|null|undefined} myoEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.myoEvent = null;

            /**
             * TopicDataRecord pose.
             * @member {ubii.dataStructure.IPose|null|undefined} pose
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.pose = null;

            /**
             * TopicDataRecord object3D.
             * @member {ubii.dataStructure.IObject3D|null|undefined} object3D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.object3D = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicDataRecord type.
             * @member {"double"|"bool"|"string"|"vector2"|"vector3"|"vector4"|"quaternion"|"matrix3x2"|"matrix4x4"|"color"|"touchEvent"|"keyEvent"|"mouseEvent"|"myoEvent"|"pose"|"object3D"|undefined} type
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            Object.defineProperty(TopicDataRecord.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["double", "bool", "string", "vector2", "vector3", "vector4", "quaternion", "matrix3x2", "matrix4x4", "color", "touchEvent", "keyEvent", "mouseEvent", "myoEvent", "pose", "object3D"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicDataRecord instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord=} [properties] Properties to set
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord instance
             */
            TopicDataRecord.create = function create(properties) {
                return new TopicDataRecord(properties);
            };

            /**
             * Encodes the specified TopicDataRecord message. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord} message TopicDataRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    $root.ubii.topicData.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.double != null && message.hasOwnProperty("double"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.double);
                if (message.bool != null && message.hasOwnProperty("bool"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.bool);
                if (message.string != null && message.hasOwnProperty("string"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.string);
                if (message.vector2 != null && message.hasOwnProperty("vector2"))
                    $root.ubii.dataStructure.Vector2.encode(message.vector2, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.vector3 != null && message.hasOwnProperty("vector3"))
                    $root.ubii.dataStructure.Vector3.encode(message.vector3, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.vector4 != null && message.hasOwnProperty("vector4"))
                    $root.ubii.dataStructure.Vector4.encode(message.vector4, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    $root.ubii.dataStructure.Quaternion.encode(message.quaternion, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2"))
                    $root.ubii.dataStructure.Matrix3x2.encode(message.matrix3x2, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4"))
                    $root.ubii.dataStructure.Matrix4x4.encode(message.matrix4x4, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.color != null && message.hasOwnProperty("color"))
                    $root.ubii.dataStructure.Color.encode(message.color, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent"))
                    $root.ubii.dataStructure.TouchEvent.encode(message.touchEvent, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent"))
                    $root.ubii.dataStructure.KeyEvent.encode(message.keyEvent, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent"))
                    $root.ubii.dataStructure.MouseEvent.encode(message.mouseEvent, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent"))
                    $root.ubii.dataStructure.MyoEvent.encode(message.myoEvent, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.pose != null && message.hasOwnProperty("pose"))
                    $root.ubii.dataStructure.Pose.encode(message.pose, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.object3D != null && message.hasOwnProperty("object3D"))
                    $root.ubii.dataStructure.Object3D.encode(message.object3D, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDataRecord message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord} message TopicDataRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecord.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicDataRecord();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.timestamp = $root.ubii.topicData.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.double = reader.double();
                        break;
                    case 4:
                        message.bool = reader.bool();
                        break;
                    case 5:
                        message.string = reader.string();
                        break;
                    case 6:
                        message.vector2 = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.vector3 = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.vector4 = $root.ubii.dataStructure.Vector4.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.quaternion = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.color = $root.ubii.dataStructure.Color.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.touchEvent = $root.ubii.dataStructure.TouchEvent.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.keyEvent = $root.ubii.dataStructure.KeyEvent.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.mouseEvent = $root.ubii.dataStructure.MouseEvent.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.myoEvent = $root.ubii.dataStructure.MyoEvent.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.pose = $root.ubii.dataStructure.Pose.decode(reader, reader.uint32());
                        break;
                    case 18:
                        message.object3D = $root.ubii.dataStructure.Object3D.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDataRecord message.
             * @function verify
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDataRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.ubii.topicData.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.double != null && message.hasOwnProperty("double")) {
                    properties.type = 1;
                    if (typeof message.double !== "number")
                        return "double: number expected";
                }
                if (message.bool != null && message.hasOwnProperty("bool")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (typeof message.bool !== "boolean")
                        return "bool: boolean expected";
                }
                if (message.string != null && message.hasOwnProperty("string")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (!$util.isString(message.string))
                        return "string: string expected";
                }
                if (message.vector2 != null && message.hasOwnProperty("vector2")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector2.verify(message.vector2);
                        if (error)
                            return "vector2." + error;
                    }
                }
                if (message.vector3 != null && message.hasOwnProperty("vector3")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector3.verify(message.vector3);
                        if (error)
                            return "vector3." + error;
                    }
                }
                if (message.vector4 != null && message.hasOwnProperty("vector4")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector4.verify(message.vector4);
                        if (error)
                            return "vector4." + error;
                    }
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Quaternion.verify(message.quaternion);
                        if (error)
                            return "quaternion." + error;
                    }
                }
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Matrix3x2.verify(message.matrix3x2);
                        if (error)
                            return "matrix3x2." + error;
                    }
                }
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Matrix4x4.verify(message.matrix4x4);
                        if (error)
                            return "matrix4x4." + error;
                    }
                }
                if (message.color != null && message.hasOwnProperty("color")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Color.verify(message.color);
                        if (error)
                            return "color." + error;
                    }
                }
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.TouchEvent.verify(message.touchEvent);
                        if (error)
                            return "touchEvent." + error;
                    }
                }
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.KeyEvent.verify(message.keyEvent);
                        if (error)
                            return "keyEvent." + error;
                    }
                }
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.MouseEvent.verify(message.mouseEvent);
                        if (error)
                            return "mouseEvent." + error;
                    }
                }
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.MyoEvent.verify(message.myoEvent);
                        if (error)
                            return "myoEvent." + error;
                    }
                }
                if (message.pose != null && message.hasOwnProperty("pose")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Pose.verify(message.pose);
                        if (error)
                            return "pose." + error;
                    }
                }
                if (message.object3D != null && message.hasOwnProperty("object3D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Object3D.verify(message.object3D);
                        if (error)
                            return "object3D." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDataRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             */
            TopicDataRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicDataRecord)
                    return object;
                var message = new $root.ubii.topicData.TopicDataRecord();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.timestamp: object expected");
                    message.timestamp = $root.ubii.topicData.Timestamp.fromObject(object.timestamp);
                }
                if (object.double != null)
                    message.double = Number(object.double);
                if (object.bool != null)
                    message.bool = Boolean(object.bool);
                if (object.string != null)
                    message.string = String(object.string);
                if (object.vector2 != null) {
                    if (typeof object.vector2 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector2: object expected");
                    message.vector2 = $root.ubii.dataStructure.Vector2.fromObject(object.vector2);
                }
                if (object.vector3 != null) {
                    if (typeof object.vector3 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector3: object expected");
                    message.vector3 = $root.ubii.dataStructure.Vector3.fromObject(object.vector3);
                }
                if (object.vector4 != null) {
                    if (typeof object.vector4 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector4: object expected");
                    message.vector4 = $root.ubii.dataStructure.Vector4.fromObject(object.vector4);
                }
                if (object.quaternion != null) {
                    if (typeof object.quaternion !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.quaternion: object expected");
                    message.quaternion = $root.ubii.dataStructure.Quaternion.fromObject(object.quaternion);
                }
                if (object.matrix3x2 != null) {
                    if (typeof object.matrix3x2 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.matrix3x2: object expected");
                    message.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.fromObject(object.matrix3x2);
                }
                if (object.matrix4x4 != null) {
                    if (typeof object.matrix4x4 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.matrix4x4: object expected");
                    message.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.fromObject(object.matrix4x4);
                }
                if (object.color != null) {
                    if (typeof object.color !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.color: object expected");
                    message.color = $root.ubii.dataStructure.Color.fromObject(object.color);
                }
                if (object.touchEvent != null) {
                    if (typeof object.touchEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.touchEvent: object expected");
                    message.touchEvent = $root.ubii.dataStructure.TouchEvent.fromObject(object.touchEvent);
                }
                if (object.keyEvent != null) {
                    if (typeof object.keyEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.keyEvent: object expected");
                    message.keyEvent = $root.ubii.dataStructure.KeyEvent.fromObject(object.keyEvent);
                }
                if (object.mouseEvent != null) {
                    if (typeof object.mouseEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.mouseEvent: object expected");
                    message.mouseEvent = $root.ubii.dataStructure.MouseEvent.fromObject(object.mouseEvent);
                }
                if (object.myoEvent != null) {
                    if (typeof object.myoEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.myoEvent: object expected");
                    message.myoEvent = $root.ubii.dataStructure.MyoEvent.fromObject(object.myoEvent);
                }
                if (object.pose != null) {
                    if (typeof object.pose !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.pose: object expected");
                    message.pose = $root.ubii.dataStructure.Pose.fromObject(object.pose);
                }
                if (object.object3D != null) {
                    if (typeof object.object3D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.object3D: object expected");
                    message.object3D = $root.ubii.dataStructure.Object3D.fromObject(object.object3D);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDataRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.TopicDataRecord} message TopicDataRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDataRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.topic = "";
                    object.timestamp = null;
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.ubii.topicData.Timestamp.toObject(message.timestamp, options);
                if (message.double != null && message.hasOwnProperty("double")) {
                    object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
                    if (options.oneofs)
                        object.type = "double";
                }
                if (message.bool != null && message.hasOwnProperty("bool")) {
                    object.bool = message.bool;
                    if (options.oneofs)
                        object.type = "bool";
                }
                if (message.string != null && message.hasOwnProperty("string")) {
                    object.string = message.string;
                    if (options.oneofs)
                        object.type = "string";
                }
                if (message.vector2 != null && message.hasOwnProperty("vector2")) {
                    object.vector2 = $root.ubii.dataStructure.Vector2.toObject(message.vector2, options);
                    if (options.oneofs)
                        object.type = "vector2";
                }
                if (message.vector3 != null && message.hasOwnProperty("vector3")) {
                    object.vector3 = $root.ubii.dataStructure.Vector3.toObject(message.vector3, options);
                    if (options.oneofs)
                        object.type = "vector3";
                }
                if (message.vector4 != null && message.hasOwnProperty("vector4")) {
                    object.vector4 = $root.ubii.dataStructure.Vector4.toObject(message.vector4, options);
                    if (options.oneofs)
                        object.type = "vector4";
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    object.quaternion = $root.ubii.dataStructure.Quaternion.toObject(message.quaternion, options);
                    if (options.oneofs)
                        object.type = "quaternion";
                }
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2")) {
                    object.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.toObject(message.matrix3x2, options);
                    if (options.oneofs)
                        object.type = "matrix3x2";
                }
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4")) {
                    object.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.toObject(message.matrix4x4, options);
                    if (options.oneofs)
                        object.type = "matrix4x4";
                }
                if (message.color != null && message.hasOwnProperty("color")) {
                    object.color = $root.ubii.dataStructure.Color.toObject(message.color, options);
                    if (options.oneofs)
                        object.type = "color";
                }
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent")) {
                    object.touchEvent = $root.ubii.dataStructure.TouchEvent.toObject(message.touchEvent, options);
                    if (options.oneofs)
                        object.type = "touchEvent";
                }
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent")) {
                    object.keyEvent = $root.ubii.dataStructure.KeyEvent.toObject(message.keyEvent, options);
                    if (options.oneofs)
                        object.type = "keyEvent";
                }
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent")) {
                    object.mouseEvent = $root.ubii.dataStructure.MouseEvent.toObject(message.mouseEvent, options);
                    if (options.oneofs)
                        object.type = "mouseEvent";
                }
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent")) {
                    object.myoEvent = $root.ubii.dataStructure.MyoEvent.toObject(message.myoEvent, options);
                    if (options.oneofs)
                        object.type = "myoEvent";
                }
                if (message.pose != null && message.hasOwnProperty("pose")) {
                    object.pose = $root.ubii.dataStructure.Pose.toObject(message.pose, options);
                    if (options.oneofs)
                        object.type = "pose";
                }
                if (message.object3D != null && message.hasOwnProperty("object3D")) {
                    object.object3D = $root.ubii.dataStructure.Object3D.toObject(message.object3D, options);
                    if (options.oneofs)
                        object.type = "object3D";
                }
                return object;
            };

            /**
             * Converts this TopicDataRecord to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDataRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDataRecord;
        })();

        topicData.TopicDataRecordList = (function() {

            /**
             * Properties of a TopicDataRecordList.
             * @memberof ubii.topicData
             * @interface ITopicDataRecordList
             * @property {Array.<ubii.topicData.ITopicDataRecord>|null} [elements] TopicDataRecordList elements
             */

            /**
             * Constructs a new TopicDataRecordList.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicDataRecordList.
             * @implements ITopicDataRecordList
             * @constructor
             * @param {ubii.topicData.ITopicDataRecordList=} [properties] Properties to set
             */
            function TopicDataRecordList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDataRecordList elements.
             * @member {Array.<ubii.topicData.ITopicDataRecord>} elements
             * @memberof ubii.topicData.TopicDataRecordList
             * @instance
             */
            TopicDataRecordList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicDataRecordList instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList=} [properties] Properties to set
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList instance
             */
            TopicDataRecordList.create = function create(properties) {
                return new TopicDataRecordList(properties);
            };

            /**
             * Encodes the specified TopicDataRecordList message. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList} message TopicDataRecordList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecordList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.topicData.TopicDataRecord.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDataRecordList message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList} message TopicDataRecordList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecordList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecordList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicDataRecordList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.topicData.TopicDataRecord.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecordList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDataRecordList message.
             * @function verify
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDataRecordList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.topicData.TopicDataRecord.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDataRecordList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             */
            TopicDataRecordList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicDataRecordList)
                    return object;
                var message = new $root.ubii.topicData.TopicDataRecordList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.topicData.TopicDataRecordList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.topicData.TopicDataRecordList.elements: object expected");
                        message.elements[i] = $root.ubii.topicData.TopicDataRecord.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDataRecordList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.TopicDataRecordList} message TopicDataRecordList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDataRecordList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.topicData.TopicDataRecord.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicDataRecordList to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicDataRecordList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDataRecordList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDataRecordList;
        })();

        return topicData;
    })();

    ubii.dataStructure = (function() {

        /**
         * Namespace dataStructure.
         * @memberof ubii
         * @namespace
         */
        var dataStructure = {};

        /**
         * ButtonEventType enum.
         * @name ubii.dataStructure.ButtonEventType
         * @enum {string}
         * @property {number} UP=0 UP value
         * @property {number} DOWN=1 DOWN value
         */
        dataStructure.ButtonEventType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UP"] = 0;
            values[valuesById[1] = "DOWN"] = 1;
            return values;
        })();

        dataStructure.Color = (function() {

            /**
             * Properties of a Color.
             * @memberof ubii.dataStructure
             * @interface IColor
             * @property {number|null} [r] Color r
             * @property {number|null} [g] Color g
             * @property {number|null} [b] Color b
             * @property {number|null} [a] Color a
             */

            /**
             * Constructs a new Color.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Color.
             * @implements IColor
             * @constructor
             * @param {ubii.dataStructure.IColor=} [properties] Properties to set
             */
            function Color(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Color r.
             * @member {number} r
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.r = 0;

            /**
             * Color g.
             * @member {number} g
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.g = 0;

            /**
             * Color b.
             * @member {number} b
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.b = 0;

            /**
             * Color a.
             * @member {number} a
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.a = 0;

            /**
             * Creates a new Color instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor=} [properties] Properties to set
             * @returns {ubii.dataStructure.Color} Color instance
             */
            Color.create = function create(properties) {
                return new Color(properties);
            };

            /**
             * Encodes the specified Color message. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor} message Color message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Color.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.r != null && message.hasOwnProperty("r"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.r);
                if (message.g != null && message.hasOwnProperty("g"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.g);
                if (message.b != null && message.hasOwnProperty("b"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.b);
                if (message.a != null && message.hasOwnProperty("a"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.a);
                return writer;
            };

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor} message Color message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Color.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Color} Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Color.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Color();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.r = reader.double();
                        break;
                    case 2:
                        message.g = reader.double();
                        break;
                    case 3:
                        message.b = reader.double();
                        break;
                    case 4:
                        message.a = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Color} Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Color.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Color message.
             * @function verify
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Color.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.r != null && message.hasOwnProperty("r"))
                    if (typeof message.r !== "number")
                        return "r: number expected";
                if (message.g != null && message.hasOwnProperty("g"))
                    if (typeof message.g !== "number")
                        return "g: number expected";
                if (message.b != null && message.hasOwnProperty("b"))
                    if (typeof message.b !== "number")
                        return "b: number expected";
                if (message.a != null && message.hasOwnProperty("a"))
                    if (typeof message.a !== "number")
                        return "a: number expected";
                return null;
            };

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Color} Color
             */
            Color.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Color)
                    return object;
                var message = new $root.ubii.dataStructure.Color();
                if (object.r != null)
                    message.r = Number(object.r);
                if (object.g != null)
                    message.g = Number(object.g);
                if (object.b != null)
                    message.b = Number(object.b);
                if (object.a != null)
                    message.a = Number(object.a);
                return message;
            };

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.Color} message Color
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Color.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.r = 0;
                    object.g = 0;
                    object.b = 0;
                    object.a = 0;
                }
                if (message.r != null && message.hasOwnProperty("r"))
                    object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
                if (message.g != null && message.hasOwnProperty("g"))
                    object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
                return object;
            };

            /**
             * Converts this Color to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Color
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Color.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Color;
        })();

        /**
         * HandGestureType enum.
         * @name ubii.dataStructure.HandGestureType
         * @enum {string}
         * @property {number} REST=0 REST value
         * @property {number} FINGERS_SPREAD=1 FINGERS_SPREAD value
         * @property {number} WAVE_IN=2 WAVE_IN value
         * @property {number} WAVE_OUT=3 WAVE_OUT value
         * @property {number} FIST=4 FIST value
         * @property {number} DOUBLE_TAP=5 DOUBLE_TAP value
         */
        dataStructure.HandGestureType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REST"] = 0;
            values[valuesById[1] = "FINGERS_SPREAD"] = 1;
            values[valuesById[2] = "WAVE_IN"] = 2;
            values[valuesById[3] = "WAVE_OUT"] = 3;
            values[valuesById[4] = "FIST"] = 4;
            values[valuesById[5] = "DOUBLE_TAP"] = 5;
            return values;
        })();

        dataStructure.KeyEvent = (function() {

            /**
             * Properties of a KeyEvent.
             * @memberof ubii.dataStructure
             * @interface IKeyEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] KeyEvent type
             * @property {string|null} [key] KeyEvent key
             */

            /**
             * Constructs a new KeyEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a KeyEvent.
             * @implements IKeyEvent
             * @constructor
             * @param {ubii.dataStructure.IKeyEvent=} [properties] Properties to set
             */
            function KeyEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KeyEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             */
            KeyEvent.prototype.type = 0;

            /**
             * KeyEvent key.
             * @member {string} key
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             */
            KeyEvent.prototype.key = "";

            /**
             * Creates a new KeyEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent instance
             */
            KeyEvent.create = function create(properties) {
                return new KeyEvent(properties);
            };

            /**
             * Encodes the specified KeyEvent message. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent} message KeyEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                return writer;
            };

            /**
             * Encodes the specified KeyEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent} message KeyEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a KeyEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.KeyEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a KeyEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KeyEvent message.
             * @function verify
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };

            /**
             * Creates a KeyEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             */
            KeyEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.KeyEvent)
                    return object;
                var message = new $root.ubii.dataStructure.KeyEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };

            /**
             * Creates a plain object from a KeyEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.KeyEvent} message KeyEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KeyEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.key = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };

            /**
             * Converts this KeyEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KeyEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return KeyEvent;
        })();

        dataStructure.Matrix3x2 = (function() {

            /**
             * Properties of a Matrix3x2.
             * @memberof ubii.dataStructure
             * @interface IMatrix3x2
             * @property {number|null} [m00] Matrix3x2 m00
             * @property {number|null} [m01] Matrix3x2 m01
             * @property {number|null} [m10] Matrix3x2 m10
             * @property {number|null} [m11] Matrix3x2 m11
             * @property {number|null} [m20] Matrix3x2 m20
             * @property {number|null} [m21] Matrix3x2 m21
             */

            /**
             * Constructs a new Matrix3x2.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Matrix3x2.
             * @implements IMatrix3x2
             * @constructor
             * @param {ubii.dataStructure.IMatrix3x2=} [properties] Properties to set
             */
            function Matrix3x2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Matrix3x2 m00.
             * @member {number} m00
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m00 = 0;

            /**
             * Matrix3x2 m01.
             * @member {number} m01
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m01 = 0;

            /**
             * Matrix3x2 m10.
             * @member {number} m10
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m10 = 0;

            /**
             * Matrix3x2 m11.
             * @member {number} m11
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m11 = 0;

            /**
             * Matrix3x2 m20.
             * @member {number} m20
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m20 = 0;

            /**
             * Matrix3x2 m21.
             * @member {number} m21
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m21 = 0;

            /**
             * Creates a new Matrix3x2 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2=} [properties] Properties to set
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2 instance
             */
            Matrix3x2.create = function create(properties) {
                return new Matrix3x2(properties);
            };

            /**
             * Encodes the specified Matrix3x2 message. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2} message Matrix3x2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix3x2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.m00);
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.m01);
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.m10);
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.m11);
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.m20);
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.m21);
                return writer;
            };

            /**
             * Encodes the specified Matrix3x2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2} message Matrix3x2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix3x2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix3x2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Matrix3x2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.m00 = reader.double();
                        break;
                    case 2:
                        message.m01 = reader.double();
                        break;
                    case 3:
                        message.m10 = reader.double();
                        break;
                    case 4:
                        message.m11 = reader.double();
                        break;
                    case 5:
                        message.m20 = reader.double();
                        break;
                    case 6:
                        message.m21 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix3x2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Matrix3x2 message.
             * @function verify
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Matrix3x2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    if (typeof message.m00 !== "number")
                        return "m00: number expected";
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    if (typeof message.m01 !== "number")
                        return "m01: number expected";
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    if (typeof message.m10 !== "number")
                        return "m10: number expected";
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    if (typeof message.m11 !== "number")
                        return "m11: number expected";
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    if (typeof message.m20 !== "number")
                        return "m20: number expected";
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    if (typeof message.m21 !== "number")
                        return "m21: number expected";
                return null;
            };

            /**
             * Creates a Matrix3x2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             */
            Matrix3x2.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Matrix3x2)
                    return object;
                var message = new $root.ubii.dataStructure.Matrix3x2();
                if (object.m00 != null)
                    message.m00 = Number(object.m00);
                if (object.m01 != null)
                    message.m01 = Number(object.m01);
                if (object.m10 != null)
                    message.m10 = Number(object.m10);
                if (object.m11 != null)
                    message.m11 = Number(object.m11);
                if (object.m20 != null)
                    message.m20 = Number(object.m20);
                if (object.m21 != null)
                    message.m21 = Number(object.m21);
                return message;
            };

            /**
             * Creates a plain object from a Matrix3x2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.Matrix3x2} message Matrix3x2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Matrix3x2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.m00 = 0;
                    object.m01 = 0;
                    object.m10 = 0;
                    object.m11 = 0;
                    object.m20 = 0;
                    object.m21 = 0;
                }
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    object.m00 = options.json && !isFinite(message.m00) ? String(message.m00) : message.m00;
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    object.m01 = options.json && !isFinite(message.m01) ? String(message.m01) : message.m01;
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    object.m10 = options.json && !isFinite(message.m10) ? String(message.m10) : message.m10;
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    object.m11 = options.json && !isFinite(message.m11) ? String(message.m11) : message.m11;
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    object.m20 = options.json && !isFinite(message.m20) ? String(message.m20) : message.m20;
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    object.m21 = options.json && !isFinite(message.m21) ? String(message.m21) : message.m21;
                return object;
            };

            /**
             * Converts this Matrix3x2 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Matrix3x2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Matrix3x2;
        })();

        dataStructure.Matrix4x4 = (function() {

            /**
             * Properties of a Matrix4x4.
             * @memberof ubii.dataStructure
             * @interface IMatrix4x4
             * @property {number|null} [m00] Matrix4x4 m00
             * @property {number|null} [m01] Matrix4x4 m01
             * @property {number|null} [m02] Matrix4x4 m02
             * @property {number|null} [m03] Matrix4x4 m03
             * @property {number|null} [m10] Matrix4x4 m10
             * @property {number|null} [m11] Matrix4x4 m11
             * @property {number|null} [m12] Matrix4x4 m12
             * @property {number|null} [m13] Matrix4x4 m13
             * @property {number|null} [m20] Matrix4x4 m20
             * @property {number|null} [m21] Matrix4x4 m21
             * @property {number|null} [m22] Matrix4x4 m22
             * @property {number|null} [m23] Matrix4x4 m23
             * @property {number|null} [m30] Matrix4x4 m30
             * @property {number|null} [m31] Matrix4x4 m31
             * @property {number|null} [m32] Matrix4x4 m32
             * @property {number|null} [m33] Matrix4x4 m33
             */

            /**
             * Constructs a new Matrix4x4.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Matrix4x4.
             * @implements IMatrix4x4
             * @constructor
             * @param {ubii.dataStructure.IMatrix4x4=} [properties] Properties to set
             */
            function Matrix4x4(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Matrix4x4 m00.
             * @member {number} m00
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m00 = 0;

            /**
             * Matrix4x4 m01.
             * @member {number} m01
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m01 = 0;

            /**
             * Matrix4x4 m02.
             * @member {number} m02
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m02 = 0;

            /**
             * Matrix4x4 m03.
             * @member {number} m03
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m03 = 0;

            /**
             * Matrix4x4 m10.
             * @member {number} m10
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m10 = 0;

            /**
             * Matrix4x4 m11.
             * @member {number} m11
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m11 = 0;

            /**
             * Matrix4x4 m12.
             * @member {number} m12
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m12 = 0;

            /**
             * Matrix4x4 m13.
             * @member {number} m13
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m13 = 0;

            /**
             * Matrix4x4 m20.
             * @member {number} m20
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m20 = 0;

            /**
             * Matrix4x4 m21.
             * @member {number} m21
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m21 = 0;

            /**
             * Matrix4x4 m22.
             * @member {number} m22
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m22 = 0;

            /**
             * Matrix4x4 m23.
             * @member {number} m23
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m23 = 0;

            /**
             * Matrix4x4 m30.
             * @member {number} m30
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m30 = 0;

            /**
             * Matrix4x4 m31.
             * @member {number} m31
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m31 = 0;

            /**
             * Matrix4x4 m32.
             * @member {number} m32
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m32 = 0;

            /**
             * Matrix4x4 m33.
             * @member {number} m33
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m33 = 0;

            /**
             * Creates a new Matrix4x4 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4=} [properties] Properties to set
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4 instance
             */
            Matrix4x4.create = function create(properties) {
                return new Matrix4x4(properties);
            };

            /**
             * Encodes the specified Matrix4x4 message. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4} message Matrix4x4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix4x4.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.m00);
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.m01);
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.m02);
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.m03);
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.m10);
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.m11);
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.m12);
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.m13);
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.m20);
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.m21);
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    writer.uint32(/* id 11, wireType 1 =*/89).double(message.m22);
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    writer.uint32(/* id 12, wireType 1 =*/97).double(message.m23);
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    writer.uint32(/* id 13, wireType 1 =*/105).double(message.m30);
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    writer.uint32(/* id 14, wireType 1 =*/113).double(message.m31);
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    writer.uint32(/* id 15, wireType 1 =*/121).double(message.m32);
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    writer.uint32(/* id 16, wireType 1 =*/129).double(message.m33);
                return writer;
            };

            /**
             * Encodes the specified Matrix4x4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4} message Matrix4x4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix4x4.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix4x4.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Matrix4x4();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.m00 = reader.double();
                        break;
                    case 2:
                        message.m01 = reader.double();
                        break;
                    case 3:
                        message.m02 = reader.double();
                        break;
                    case 4:
                        message.m03 = reader.double();
                        break;
                    case 5:
                        message.m10 = reader.double();
                        break;
                    case 6:
                        message.m11 = reader.double();
                        break;
                    case 7:
                        message.m12 = reader.double();
                        break;
                    case 8:
                        message.m13 = reader.double();
                        break;
                    case 9:
                        message.m20 = reader.double();
                        break;
                    case 10:
                        message.m21 = reader.double();
                        break;
                    case 11:
                        message.m22 = reader.double();
                        break;
                    case 12:
                        message.m23 = reader.double();
                        break;
                    case 13:
                        message.m30 = reader.double();
                        break;
                    case 14:
                        message.m31 = reader.double();
                        break;
                    case 15:
                        message.m32 = reader.double();
                        break;
                    case 16:
                        message.m33 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix4x4.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Matrix4x4 message.
             * @function verify
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Matrix4x4.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    if (typeof message.m00 !== "number")
                        return "m00: number expected";
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    if (typeof message.m01 !== "number")
                        return "m01: number expected";
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    if (typeof message.m02 !== "number")
                        return "m02: number expected";
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    if (typeof message.m03 !== "number")
                        return "m03: number expected";
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    if (typeof message.m10 !== "number")
                        return "m10: number expected";
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    if (typeof message.m11 !== "number")
                        return "m11: number expected";
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    if (typeof message.m12 !== "number")
                        return "m12: number expected";
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    if (typeof message.m13 !== "number")
                        return "m13: number expected";
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    if (typeof message.m20 !== "number")
                        return "m20: number expected";
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    if (typeof message.m21 !== "number")
                        return "m21: number expected";
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    if (typeof message.m22 !== "number")
                        return "m22: number expected";
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    if (typeof message.m23 !== "number")
                        return "m23: number expected";
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    if (typeof message.m30 !== "number")
                        return "m30: number expected";
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    if (typeof message.m31 !== "number")
                        return "m31: number expected";
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    if (typeof message.m32 !== "number")
                        return "m32: number expected";
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    if (typeof message.m33 !== "number")
                        return "m33: number expected";
                return null;
            };

            /**
             * Creates a Matrix4x4 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             */
            Matrix4x4.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Matrix4x4)
                    return object;
                var message = new $root.ubii.dataStructure.Matrix4x4();
                if (object.m00 != null)
                    message.m00 = Number(object.m00);
                if (object.m01 != null)
                    message.m01 = Number(object.m01);
                if (object.m02 != null)
                    message.m02 = Number(object.m02);
                if (object.m03 != null)
                    message.m03 = Number(object.m03);
                if (object.m10 != null)
                    message.m10 = Number(object.m10);
                if (object.m11 != null)
                    message.m11 = Number(object.m11);
                if (object.m12 != null)
                    message.m12 = Number(object.m12);
                if (object.m13 != null)
                    message.m13 = Number(object.m13);
                if (object.m20 != null)
                    message.m20 = Number(object.m20);
                if (object.m21 != null)
                    message.m21 = Number(object.m21);
                if (object.m22 != null)
                    message.m22 = Number(object.m22);
                if (object.m23 != null)
                    message.m23 = Number(object.m23);
                if (object.m30 != null)
                    message.m30 = Number(object.m30);
                if (object.m31 != null)
                    message.m31 = Number(object.m31);
                if (object.m32 != null)
                    message.m32 = Number(object.m32);
                if (object.m33 != null)
                    message.m33 = Number(object.m33);
                return message;
            };

            /**
             * Creates a plain object from a Matrix4x4 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.Matrix4x4} message Matrix4x4
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Matrix4x4.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.m00 = 0;
                    object.m01 = 0;
                    object.m02 = 0;
                    object.m03 = 0;
                    object.m10 = 0;
                    object.m11 = 0;
                    object.m12 = 0;
                    object.m13 = 0;
                    object.m20 = 0;
                    object.m21 = 0;
                    object.m22 = 0;
                    object.m23 = 0;
                    object.m30 = 0;
                    object.m31 = 0;
                    object.m32 = 0;
                    object.m33 = 0;
                }
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    object.m00 = options.json && !isFinite(message.m00) ? String(message.m00) : message.m00;
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    object.m01 = options.json && !isFinite(message.m01) ? String(message.m01) : message.m01;
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    object.m02 = options.json && !isFinite(message.m02) ? String(message.m02) : message.m02;
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    object.m03 = options.json && !isFinite(message.m03) ? String(message.m03) : message.m03;
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    object.m10 = options.json && !isFinite(message.m10) ? String(message.m10) : message.m10;
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    object.m11 = options.json && !isFinite(message.m11) ? String(message.m11) : message.m11;
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    object.m12 = options.json && !isFinite(message.m12) ? String(message.m12) : message.m12;
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    object.m13 = options.json && !isFinite(message.m13) ? String(message.m13) : message.m13;
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    object.m20 = options.json && !isFinite(message.m20) ? String(message.m20) : message.m20;
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    object.m21 = options.json && !isFinite(message.m21) ? String(message.m21) : message.m21;
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    object.m22 = options.json && !isFinite(message.m22) ? String(message.m22) : message.m22;
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    object.m23 = options.json && !isFinite(message.m23) ? String(message.m23) : message.m23;
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    object.m30 = options.json && !isFinite(message.m30) ? String(message.m30) : message.m30;
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    object.m31 = options.json && !isFinite(message.m31) ? String(message.m31) : message.m31;
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    object.m32 = options.json && !isFinite(message.m32) ? String(message.m32) : message.m32;
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    object.m33 = options.json && !isFinite(message.m33) ? String(message.m33) : message.m33;
                return object;
            };

            /**
             * Converts this Matrix4x4 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Matrix4x4.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Matrix4x4;
        })();

        dataStructure.MouseEvent = (function() {

            /**
             * Properties of a MouseEvent.
             * @memberof ubii.dataStructure
             * @interface IMouseEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] MouseEvent type
             * @property {number|null} [button] MouseEvent button
             */

            /**
             * Constructs a new MouseEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a MouseEvent.
             * @implements IMouseEvent
             * @constructor
             * @param {ubii.dataStructure.IMouseEvent=} [properties] Properties to set
             */
            function MouseEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MouseEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             */
            MouseEvent.prototype.type = 0;

            /**
             * MouseEvent button.
             * @member {number} button
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             */
            MouseEvent.prototype.button = 0;

            /**
             * Creates a new MouseEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent instance
             */
            MouseEvent.create = function create(properties) {
                return new MouseEvent(properties);
            };

            /**
             * Encodes the specified MouseEvent message. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent} message MouseEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MouseEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.button != null && message.hasOwnProperty("button"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.button);
                return writer;
            };

            /**
             * Encodes the specified MouseEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent} message MouseEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MouseEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MouseEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MouseEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.MouseEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.button = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MouseEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MouseEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MouseEvent message.
             * @function verify
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MouseEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.button != null && message.hasOwnProperty("button"))
                    if (!$util.isInteger(message.button))
                        return "button: integer expected";
                return null;
            };

            /**
             * Creates a MouseEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             */
            MouseEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.MouseEvent)
                    return object;
                var message = new $root.ubii.dataStructure.MouseEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.button != null)
                    message.button = object.button | 0;
                return message;
            };

            /**
             * Creates a plain object from a MouseEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.MouseEvent} message MouseEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MouseEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.button = 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.button != null && message.hasOwnProperty("button"))
                    object.button = message.button;
                return object;
            };

            /**
             * Converts this MouseEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MouseEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MouseEvent;
        })();

        dataStructure.MyoEvent = (function() {

            /**
             * Properties of a MyoEvent.
             * @memberof ubii.dataStructure
             * @interface IMyoEvent
             * @property {ubii.dataStructure.IVector8|null} [emg] MyoEvent emg
             * @property {ubii.dataStructure.IQuaternion|null} [orientation] MyoEvent orientation
             * @property {ubii.dataStructure.IVector3|null} [gyroscope] MyoEvent gyroscope
             * @property {ubii.dataStructure.IVector3|null} [accelerometer] MyoEvent accelerometer
             * @property {ubii.dataStructure.HandGestureType|null} [gesture] MyoEvent gesture
             */

            /**
             * Constructs a new MyoEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a MyoEvent.
             * @implements IMyoEvent
             * @constructor
             * @param {ubii.dataStructure.IMyoEvent=} [properties] Properties to set
             */
            function MyoEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyoEvent emg.
             * @member {ubii.dataStructure.IVector8|null|undefined} emg
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.emg = null;

            /**
             * MyoEvent orientation.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} orientation
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.orientation = null;

            /**
             * MyoEvent gyroscope.
             * @member {ubii.dataStructure.IVector3|null|undefined} gyroscope
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.gyroscope = null;

            /**
             * MyoEvent accelerometer.
             * @member {ubii.dataStructure.IVector3|null|undefined} accelerometer
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.accelerometer = null;

            /**
             * MyoEvent gesture.
             * @member {ubii.dataStructure.HandGestureType} gesture
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.gesture = 0;

            /**
             * Creates a new MyoEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent instance
             */
            MyoEvent.create = function create(properties) {
                return new MyoEvent(properties);
            };

            /**
             * Encodes the specified MyoEvent message. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent} message MyoEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyoEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.emg != null && message.hasOwnProperty("emg"))
                    $root.ubii.dataStructure.Vector8.encode(message.emg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.orientation != null && message.hasOwnProperty("orientation"))
                    $root.ubii.dataStructure.Quaternion.encode(message.orientation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope"))
                    $root.ubii.dataStructure.Vector3.encode(message.gyroscope, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                    $root.ubii.dataStructure.Vector3.encode(message.accelerometer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gesture);
                return writer;
            };

            /**
             * Encodes the specified MyoEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent} message MyoEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyoEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MyoEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyoEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.MyoEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.emg = $root.ubii.dataStructure.Vector8.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.orientation = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.gyroscope = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.accelerometer = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.gesture = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MyoEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyoEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MyoEvent message.
             * @function verify
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MyoEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.emg != null && message.hasOwnProperty("emg")) {
                    var error = $root.ubii.dataStructure.Vector8.verify(message.emg);
                    if (error)
                        return "emg." + error;
                }
                if (message.orientation != null && message.hasOwnProperty("orientation")) {
                    var error = $root.ubii.dataStructure.Quaternion.verify(message.orientation);
                    if (error)
                        return "orientation." + error;
                }
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.gyroscope);
                    if (error)
                        return "gyroscope." + error;
                }
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.accelerometer);
                    if (error)
                        return "accelerometer." + error;
                }
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    switch (message.gesture) {
                    default:
                        return "gesture: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                return null;
            };

            /**
             * Creates a MyoEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             */
            MyoEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.MyoEvent)
                    return object;
                var message = new $root.ubii.dataStructure.MyoEvent();
                if (object.emg != null) {
                    if (typeof object.emg !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.emg: object expected");
                    message.emg = $root.ubii.dataStructure.Vector8.fromObject(object.emg);
                }
                if (object.orientation != null) {
                    if (typeof object.orientation !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.orientation: object expected");
                    message.orientation = $root.ubii.dataStructure.Quaternion.fromObject(object.orientation);
                }
                if (object.gyroscope != null) {
                    if (typeof object.gyroscope !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.gyroscope: object expected");
                    message.gyroscope = $root.ubii.dataStructure.Vector3.fromObject(object.gyroscope);
                }
                if (object.accelerometer != null) {
                    if (typeof object.accelerometer !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.accelerometer: object expected");
                    message.accelerometer = $root.ubii.dataStructure.Vector3.fromObject(object.accelerometer);
                }
                switch (object.gesture) {
                case "REST":
                case 0:
                    message.gesture = 0;
                    break;
                case "FINGERS_SPREAD":
                case 1:
                    message.gesture = 1;
                    break;
                case "WAVE_IN":
                case 2:
                    message.gesture = 2;
                    break;
                case "WAVE_OUT":
                case 3:
                    message.gesture = 3;
                    break;
                case "FIST":
                case 4:
                    message.gesture = 4;
                    break;
                case "DOUBLE_TAP":
                case 5:
                    message.gesture = 5;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MyoEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.MyoEvent} message MyoEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MyoEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.emg = null;
                    object.orientation = null;
                    object.gyroscope = null;
                    object.accelerometer = null;
                    object.gesture = options.enums === String ? "REST" : 0;
                }
                if (message.emg != null && message.hasOwnProperty("emg"))
                    object.emg = $root.ubii.dataStructure.Vector8.toObject(message.emg, options);
                if (message.orientation != null && message.hasOwnProperty("orientation"))
                    object.orientation = $root.ubii.dataStructure.Quaternion.toObject(message.orientation, options);
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope"))
                    object.gyroscope = $root.ubii.dataStructure.Vector3.toObject(message.gyroscope, options);
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                    object.accelerometer = $root.ubii.dataStructure.Vector3.toObject(message.accelerometer, options);
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    object.gesture = options.enums === String ? $root.ubii.dataStructure.HandGestureType[message.gesture] : message.gesture;
                return object;
            };

            /**
             * Converts this MyoEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MyoEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MyoEvent;
        })();

        dataStructure.Object3D = (function() {

            /**
             * Properties of an Object3D.
             * @memberof ubii.dataStructure
             * @interface IObject3D
             * @property {string|null} [id] Object3D id
             * @property {ubii.dataStructure.IPose|null} [pose] Object3D pose
             */

            /**
             * Constructs a new Object3D.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Object3D.
             * @implements IObject3D
             * @constructor
             * @param {ubii.dataStructure.IObject3D=} [properties] Properties to set
             */
            function Object3D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Object3D id.
             * @member {string} id
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.id = "";

            /**
             * Object3D pose.
             * @member {ubii.dataStructure.IPose|null|undefined} pose
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.pose = null;

            /**
             * Creates a new Object3D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Object3D} Object3D instance
             */
            Object3D.create = function create(properties) {
                return new Object3D(properties);
            };

            /**
             * Encodes the specified Object3D message. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D} message Object3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.pose != null && message.hasOwnProperty("pose"))
                    $root.ubii.dataStructure.Pose.encode(message.pose, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Object3D message, length delimited. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D} message Object3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Object3D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Object3D} Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Object3D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.pose = $root.ubii.dataStructure.Pose.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Object3D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Object3D} Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Object3D message.
             * @function verify
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Object3D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.pose != null && message.hasOwnProperty("pose")) {
                    var error = $root.ubii.dataStructure.Pose.verify(message.pose);
                    if (error)
                        return "pose." + error;
                }
                return null;
            };

            /**
             * Creates an Object3D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Object3D} Object3D
             */
            Object3D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Object3D)
                    return object;
                var message = new $root.ubii.dataStructure.Object3D();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.pose != null) {
                    if (typeof object.pose !== "object")
                        throw TypeError(".ubii.dataStructure.Object3D.pose: object expected");
                    message.pose = $root.ubii.dataStructure.Pose.fromObject(object.pose);
                }
                return message;
            };

            /**
             * Creates a plain object from an Object3D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.Object3D} message Object3D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Object3D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.pose = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pose != null && message.hasOwnProperty("pose"))
                    object.pose = $root.ubii.dataStructure.Pose.toObject(message.pose, options);
                return object;
            };

            /**
             * Converts this Object3D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Object3D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Object3D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Object3D;
        })();

        dataStructure.Pose = (function() {

            /**
             * Properties of a Pose.
             * @memberof ubii.dataStructure
             * @interface IPose
             * @property {ubii.dataStructure.IVector3|null} [vector3] Pose vector3
             * @property {ubii.dataStructure.IQuaternion|null} [quaternion] Pose quaternion
             */

            /**
             * Constructs a new Pose.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Pose.
             * @implements IPose
             * @constructor
             * @param {ubii.dataStructure.IPose=} [properties] Properties to set
             */
            function Pose(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pose vector3.
             * @member {ubii.dataStructure.IVector3|null|undefined} vector3
             * @memberof ubii.dataStructure.Pose
             * @instance
             */
            Pose.prototype.vector3 = null;

            /**
             * Pose quaternion.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} quaternion
             * @memberof ubii.dataStructure.Pose
             * @instance
             */
            Pose.prototype.quaternion = null;

            /**
             * Creates a new Pose instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {ubii.dataStructure.IPose=} [properties] Properties to set
             * @returns {ubii.dataStructure.Pose} Pose instance
             */
            Pose.create = function create(properties) {
                return new Pose(properties);
            };

            /**
             * Encodes the specified Pose message. Does not implicitly {@link ubii.dataStructure.Pose.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {ubii.dataStructure.IPose} message Pose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.vector3 != null && message.hasOwnProperty("vector3"))
                    $root.ubii.dataStructure.Vector3.encode(message.vector3, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    $root.ubii.dataStructure.Quaternion.encode(message.quaternion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Pose message, length delimited. Does not implicitly {@link ubii.dataStructure.Pose.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {ubii.dataStructure.IPose} message Pose message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pose message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Pose} Pose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Pose();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.vector3 = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.quaternion = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pose message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Pose} Pose
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pose message.
             * @function verify
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pose.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.vector3 != null && message.hasOwnProperty("vector3")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.vector3);
                    if (error)
                        return "vector3." + error;
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    var error = $root.ubii.dataStructure.Quaternion.verify(message.quaternion);
                    if (error)
                        return "quaternion." + error;
                }
                return null;
            };

            /**
             * Creates a Pose message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Pose} Pose
             */
            Pose.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Pose)
                    return object;
                var message = new $root.ubii.dataStructure.Pose();
                if (object.vector3 != null) {
                    if (typeof object.vector3 !== "object")
                        throw TypeError(".ubii.dataStructure.Pose.vector3: object expected");
                    message.vector3 = $root.ubii.dataStructure.Vector3.fromObject(object.vector3);
                }
                if (object.quaternion != null) {
                    if (typeof object.quaternion !== "object")
                        throw TypeError(".ubii.dataStructure.Pose.quaternion: object expected");
                    message.quaternion = $root.ubii.dataStructure.Quaternion.fromObject(object.quaternion);
                }
                return message;
            };

            /**
             * Creates a plain object from a Pose message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Pose
             * @static
             * @param {ubii.dataStructure.Pose} message Pose
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pose.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.vector3 = null;
                    object.quaternion = null;
                }
                if (message.vector3 != null && message.hasOwnProperty("vector3"))
                    object.vector3 = $root.ubii.dataStructure.Vector3.toObject(message.vector3, options);
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    object.quaternion = $root.ubii.dataStructure.Quaternion.toObject(message.quaternion, options);
                return object;
            };

            /**
             * Converts this Pose to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Pose
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pose.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pose;
        })();

        dataStructure.Quaternion = (function() {

            /**
             * Properties of a Quaternion.
             * @memberof ubii.dataStructure
             * @interface IQuaternion
             * @property {number|null} [x] Quaternion x
             * @property {number|null} [y] Quaternion y
             * @property {number|null} [z] Quaternion z
             * @property {number|null} [w] Quaternion w
             */

            /**
             * Constructs a new Quaternion.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Quaternion.
             * @implements IQuaternion
             * @constructor
             * @param {ubii.dataStructure.IQuaternion=} [properties] Properties to set
             */
            function Quaternion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Quaternion x.
             * @member {number} x
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.x = 0;

            /**
             * Quaternion y.
             * @member {number} y
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.y = 0;

            /**
             * Quaternion z.
             * @member {number} z
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.z = 0;

            /**
             * Quaternion w.
             * @member {number} w
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.w = 0;

            /**
             * Creates a new Quaternion instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion=} [properties] Properties to set
             * @returns {ubii.dataStructure.Quaternion} Quaternion instance
             */
            Quaternion.create = function create(properties) {
                return new Quaternion(properties);
            };

            /**
             * Encodes the specified Quaternion message. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion} message Quaternion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quaternion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                if (message.w != null && message.hasOwnProperty("w"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.w);
                return writer;
            };

            /**
             * Encodes the specified Quaternion message, length delimited. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion} message Quaternion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quaternion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Quaternion message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quaternion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Quaternion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    case 4:
                        message.w = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Quaternion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quaternion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Quaternion message.
             * @function verify
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Quaternion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                if (message.w != null && message.hasOwnProperty("w"))
                    if (typeof message.w !== "number")
                        return "w: number expected";
                return null;
            };

            /**
             * Creates a Quaternion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             */
            Quaternion.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Quaternion)
                    return object;
                var message = new $root.ubii.dataStructure.Quaternion();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                if (object.w != null)
                    message.w = Number(object.w);
                return message;
            };

            /**
             * Creates a plain object from a Quaternion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.Quaternion} message Quaternion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Quaternion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                    object.w = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                if (message.w != null && message.hasOwnProperty("w"))
                    object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
                return object;
            };

            /**
             * Converts this Quaternion to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Quaternion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Quaternion;
        })();

        dataStructure.TouchEvent = (function() {

            /**
             * Properties of a TouchEvent.
             * @memberof ubii.dataStructure
             * @interface ITouchEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] TouchEvent type
             * @property {ubii.dataStructure.IVector2|null} [position] TouchEvent position
             */

            /**
             * Constructs a new TouchEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a TouchEvent.
             * @implements ITouchEvent
             * @constructor
             * @param {ubii.dataStructure.ITouchEvent=} [properties] Properties to set
             */
            function TouchEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TouchEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             */
            TouchEvent.prototype.type = 0;

            /**
             * TouchEvent position.
             * @member {ubii.dataStructure.IVector2|null|undefined} position
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             */
            TouchEvent.prototype.position = null;

            /**
             * Creates a new TouchEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent instance
             */
            TouchEvent.create = function create(properties) {
                return new TouchEvent(properties);
            };

            /**
             * Encodes the specified TouchEvent message. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent} message TouchEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TouchEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.position != null && message.hasOwnProperty("position"))
                    $root.ubii.dataStructure.Vector2.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TouchEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent} message TouchEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TouchEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TouchEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TouchEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.TouchEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.position = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TouchEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TouchEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TouchEvent message.
             * @function verify
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TouchEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.position != null && message.hasOwnProperty("position")) {
                    var error = $root.ubii.dataStructure.Vector2.verify(message.position);
                    if (error)
                        return "position." + error;
                }
                return null;
            };

            /**
             * Creates a TouchEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             */
            TouchEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.TouchEvent)
                    return object;
                var message = new $root.ubii.dataStructure.TouchEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.position != null) {
                    if (typeof object.position !== "object")
                        throw TypeError(".ubii.dataStructure.TouchEvent.position: object expected");
                    message.position = $root.ubii.dataStructure.Vector2.fromObject(object.position);
                }
                return message;
            };

            /**
             * Creates a plain object from a TouchEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.TouchEvent} message TouchEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TouchEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.position = null;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = $root.ubii.dataStructure.Vector2.toObject(message.position, options);
                return object;
            };

            /**
             * Converts this TouchEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TouchEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TouchEvent;
        })();

        dataStructure.Vector2 = (function() {

            /**
             * Properties of a Vector2.
             * @memberof ubii.dataStructure
             * @interface IVector2
             * @property {number|null} [x] Vector2 x
             * @property {number|null} [y] Vector2 y
             */

            /**
             * Constructs a new Vector2.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector2.
             * @implements IVector2
             * @constructor
             * @param {ubii.dataStructure.IVector2=} [properties] Properties to set
             */
            function Vector2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector2 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector2
             * @instance
             */
            Vector2.prototype.x = 0;

            /**
             * Vector2 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector2
             * @instance
             */
            Vector2.prototype.y = 0;

            /**
             * Creates a new Vector2 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector2} Vector2 instance
             */
            Vector2.create = function create(properties) {
                return new Vector2(properties);
            };

            /**
             * Encodes the specified Vector2 message. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2} message Vector2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                return writer;
            };

            /**
             * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2} message Vector2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector2 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector2} Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector2} Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector2 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                return null;
            };

            /**
             * Creates a Vector2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector2} Vector2
             */
            Vector2.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector2)
                    return object;
                var message = new $root.ubii.dataStructure.Vector2();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                return message;
            };

            /**
             * Creates a plain object from a Vector2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.Vector2} message Vector2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                return object;
            };

            /**
             * Converts this Vector2 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector2;
        })();

        dataStructure.Vector3 = (function() {

            /**
             * Properties of a Vector3.
             * @memberof ubii.dataStructure
             * @interface IVector3
             * @property {number|null} [x] Vector3 x
             * @property {number|null} [y] Vector3 y
             * @property {number|null} [z] Vector3 z
             */

            /**
             * Constructs a new Vector3.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector3.
             * @implements IVector3
             * @constructor
             * @param {ubii.dataStructure.IVector3=} [properties] Properties to set
             */
            function Vector3(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector3 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.x = 0;

            /**
             * Vector3 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.y = 0;

            /**
             * Vector3 z.
             * @member {number} z
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.z = 0;

            /**
             * Creates a new Vector3 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector3} Vector3 instance
             */
            Vector3.create = function create(properties) {
                return new Vector3(properties);
            };

            /**
             * Encodes the specified Vector3 message. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3} message Vector3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector3.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                return writer;
            };

            /**
             * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3} message Vector3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector3.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector3 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector3} Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector3.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector3();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector3 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector3} Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector3.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector3 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector3.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                return null;
            };

            /**
             * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector3} Vector3
             */
            Vector3.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector3)
                    return object;
                var message = new $root.ubii.dataStructure.Vector3();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                return message;
            };

            /**
             * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.Vector3} message Vector3
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector3.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                return object;
            };

            /**
             * Converts this Vector3 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector3
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector3.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector3;
        })();

        dataStructure.Vector4 = (function() {

            /**
             * Properties of a Vector4.
             * @memberof ubii.dataStructure
             * @interface IVector4
             * @property {number|null} [x] Vector4 x
             * @property {number|null} [y] Vector4 y
             * @property {number|null} [z] Vector4 z
             * @property {number|null} [w] Vector4 w
             */

            /**
             * Constructs a new Vector4.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector4.
             * @implements IVector4
             * @constructor
             * @param {ubii.dataStructure.IVector4=} [properties] Properties to set
             */
            function Vector4(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector4 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.x = 0;

            /**
             * Vector4 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.y = 0;

            /**
             * Vector4 z.
             * @member {number} z
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.z = 0;

            /**
             * Vector4 w.
             * @member {number} w
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.w = 0;

            /**
             * Creates a new Vector4 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector4} Vector4 instance
             */
            Vector4.create = function create(properties) {
                return new Vector4(properties);
            };

            /**
             * Encodes the specified Vector4 message. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4} message Vector4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector4.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                if (message.w != null && message.hasOwnProperty("w"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.w);
                return writer;
            };

            /**
             * Encodes the specified Vector4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4} message Vector4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector4.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector4 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector4} Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector4.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector4();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    case 4:
                        message.w = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector4 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector4} Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector4.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector4 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector4.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                if (message.w != null && message.hasOwnProperty("w"))
                    if (typeof message.w !== "number")
                        return "w: number expected";
                return null;
            };

            /**
             * Creates a Vector4 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector4} Vector4
             */
            Vector4.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector4)
                    return object;
                var message = new $root.ubii.dataStructure.Vector4();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                if (object.w != null)
                    message.w = Number(object.w);
                return message;
            };

            /**
             * Creates a plain object from a Vector4 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.Vector4} message Vector4
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector4.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                    object.w = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                if (message.w != null && message.hasOwnProperty("w"))
                    object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
                return object;
            };

            /**
             * Converts this Vector4 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector4
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector4.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector4;
        })();

        dataStructure.Vector8 = (function() {

            /**
             * Properties of a Vector8.
             * @memberof ubii.dataStructure
             * @interface IVector8
             * @property {number|null} [v0] Vector8 v0
             * @property {number|null} [v1] Vector8 v1
             * @property {number|null} [v2] Vector8 v2
             * @property {number|null} [v3] Vector8 v3
             * @property {number|null} [v4] Vector8 v4
             * @property {number|null} [v5] Vector8 v5
             * @property {number|null} [v6] Vector8 v6
             * @property {number|null} [v7] Vector8 v7
             */

            /**
             * Constructs a new Vector8.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector8.
             * @implements IVector8
             * @constructor
             * @param {ubii.dataStructure.IVector8=} [properties] Properties to set
             */
            function Vector8(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector8 v0.
             * @member {number} v0
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v0 = 0;

            /**
             * Vector8 v1.
             * @member {number} v1
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v1 = 0;

            /**
             * Vector8 v2.
             * @member {number} v2
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v2 = 0;

            /**
             * Vector8 v3.
             * @member {number} v3
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v3 = 0;

            /**
             * Vector8 v4.
             * @member {number} v4
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v4 = 0;

            /**
             * Vector8 v5.
             * @member {number} v5
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v5 = 0;

            /**
             * Vector8 v6.
             * @member {number} v6
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v6 = 0;

            /**
             * Vector8 v7.
             * @member {number} v7
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v7 = 0;

            /**
             * Creates a new Vector8 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector8} Vector8 instance
             */
            Vector8.create = function create(properties) {
                return new Vector8(properties);
            };

            /**
             * Encodes the specified Vector8 message. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8} message Vector8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector8.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.v0);
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.v1);
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.v2);
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.v3);
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.v4);
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.v5);
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.v6);
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.v7);
                return writer;
            };

            /**
             * Encodes the specified Vector8 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8} message Vector8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector8.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector8 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector8} Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector8.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector8();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.v0 = reader.double();
                        break;
                    case 2:
                        message.v1 = reader.double();
                        break;
                    case 3:
                        message.v2 = reader.double();
                        break;
                    case 4:
                        message.v3 = reader.double();
                        break;
                    case 5:
                        message.v4 = reader.double();
                        break;
                    case 6:
                        message.v5 = reader.double();
                        break;
                    case 7:
                        message.v6 = reader.double();
                        break;
                    case 8:
                        message.v7 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector8 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector8} Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector8.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector8 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector8.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    if (typeof message.v0 !== "number")
                        return "v0: number expected";
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    if (typeof message.v1 !== "number")
                        return "v1: number expected";
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    if (typeof message.v2 !== "number")
                        return "v2: number expected";
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    if (typeof message.v3 !== "number")
                        return "v3: number expected";
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    if (typeof message.v4 !== "number")
                        return "v4: number expected";
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    if (typeof message.v5 !== "number")
                        return "v5: number expected";
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    if (typeof message.v6 !== "number")
                        return "v6: number expected";
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    if (typeof message.v7 !== "number")
                        return "v7: number expected";
                return null;
            };

            /**
             * Creates a Vector8 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector8} Vector8
             */
            Vector8.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector8)
                    return object;
                var message = new $root.ubii.dataStructure.Vector8();
                if (object.v0 != null)
                    message.v0 = Number(object.v0);
                if (object.v1 != null)
                    message.v1 = Number(object.v1);
                if (object.v2 != null)
                    message.v2 = Number(object.v2);
                if (object.v3 != null)
                    message.v3 = Number(object.v3);
                if (object.v4 != null)
                    message.v4 = Number(object.v4);
                if (object.v5 != null)
                    message.v5 = Number(object.v5);
                if (object.v6 != null)
                    message.v6 = Number(object.v6);
                if (object.v7 != null)
                    message.v7 = Number(object.v7);
                return message;
            };

            /**
             * Creates a plain object from a Vector8 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.Vector8} message Vector8
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector8.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.v0 = 0;
                    object.v1 = 0;
                    object.v2 = 0;
                    object.v3 = 0;
                    object.v4 = 0;
                    object.v5 = 0;
                    object.v6 = 0;
                    object.v7 = 0;
                }
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    object.v0 = options.json && !isFinite(message.v0) ? String(message.v0) : message.v0;
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    object.v1 = options.json && !isFinite(message.v1) ? String(message.v1) : message.v1;
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    object.v2 = options.json && !isFinite(message.v2) ? String(message.v2) : message.v2;
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    object.v3 = options.json && !isFinite(message.v3) ? String(message.v3) : message.v3;
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    object.v4 = options.json && !isFinite(message.v4) ? String(message.v4) : message.v4;
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    object.v5 = options.json && !isFinite(message.v5) ? String(message.v5) : message.v5;
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    object.v6 = options.json && !isFinite(message.v6) ? String(message.v6) : message.v6;
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    object.v7 = options.json && !isFinite(message.v7) ? String(message.v7) : message.v7;
                return object;
            };

            /**
             * Converts this Vector8 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector8
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector8.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector8;
        })();

        return dataStructure;
    })();

    return ubii;
})();

module.exports = $root;
