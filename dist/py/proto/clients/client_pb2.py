# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/clients/client.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.devices import device_pb2 as proto_dot_devices_dot_device__pb2
from proto.processing import processingModule_pb2 as proto_dot_processing_dot_processingModule__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/clients/client.proto',
  package='ubii.clients',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1aproto/clients/client.proto\x12\x0cubii.clients\x1a\x1aproto/devices/device.proto\x1a\'proto/processing/processingModule.proto\"\xe9\x02\n\x06\x43lient\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12%\n\x07\x64\x65vices\x18\x03 \x03(\x0b\x32\x14.ubii.devices.Device\x12\x0c\n\x04tags\x18\x04 \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12=\n\x12processing_modules\x18\x06 \x03(\x0b\x32!.ubii.processing.ProcessingModule\x12$\n\x1cis_dedicated_processing_node\x18\x07 \x01(\x08\x12\x0f\n\x07host_ip\x18\x08 \x01(\t\x12\x15\n\rmetadata_json\x18\t \x01(\t\x12)\n\x05state\x18\n \x01(\x0e\x32\x1a.ubii.clients.Client.State\x12\x0f\n\x07latency\x18\x0b \x01(\x02\"2\n\x05State\x12\n\n\x06\x41\x43TIVE\x10\x00\x12\x0c\n\x08INACTIVE\x10\x01\x12\x0f\n\x0bUNAVAILABLE\x10\x02\"4\n\nClientList\x12&\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x14.ubii.clients.Clientb\x06proto3')
  ,
  dependencies=[proto_dot_devices_dot_device__pb2.DESCRIPTOR,proto_dot_processing_dot_processingModule__pb2.DESCRIPTOR,])



_CLIENT_STATE = _descriptor.EnumDescriptor(
  name='State',
  full_name='ubii.clients.Client.State',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='ACTIVE', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INACTIVE', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UNAVAILABLE', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=425,
  serialized_end=475,
)
_sym_db.RegisterEnumDescriptor(_CLIENT_STATE)


_CLIENT = _descriptor.Descriptor(
  name='Client',
  full_name='ubii.clients.Client',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ubii.clients.Client.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='ubii.clients.Client.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='devices', full_name='ubii.clients.Client.devices', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='ubii.clients.Client.tags', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='ubii.clients.Client.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='processing_modules', full_name='ubii.clients.Client.processing_modules', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='is_dedicated_processing_node', full_name='ubii.clients.Client.is_dedicated_processing_node', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='host_ip', full_name='ubii.clients.Client.host_ip', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='metadata_json', full_name='ubii.clients.Client.metadata_json', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='state', full_name='ubii.clients.Client.state', index=9,
      number=10, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='latency', full_name='ubii.clients.Client.latency', index=10,
      number=11, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CLIENT_STATE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=114,
  serialized_end=475,
)


_CLIENTLIST = _descriptor.Descriptor(
  name='ClientList',
  full_name='ubii.clients.ClientList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.clients.ClientList.elements', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=477,
  serialized_end=529,
)

_CLIENT.fields_by_name['devices'].message_type = proto_dot_devices_dot_device__pb2._DEVICE
_CLIENT.fields_by_name['processing_modules'].message_type = proto_dot_processing_dot_processingModule__pb2._PROCESSINGMODULE
_CLIENT.fields_by_name['state'].enum_type = _CLIENT_STATE
_CLIENT_STATE.containing_type = _CLIENT
_CLIENTLIST.fields_by_name['elements'].message_type = _CLIENT
DESCRIPTOR.message_types_by_name['Client'] = _CLIENT
DESCRIPTOR.message_types_by_name['ClientList'] = _CLIENTLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Client = _reflection.GeneratedProtocolMessageType('Client', (_message.Message,), dict(
  DESCRIPTOR = _CLIENT,
  __module__ = 'proto.clients.client_pb2'
  # @@protoc_insertion_point(class_scope:ubii.clients.Client)
  ))
_sym_db.RegisterMessage(Client)

ClientList = _reflection.GeneratedProtocolMessageType('ClientList', (_message.Message,), dict(
  DESCRIPTOR = _CLIENTLIST,
  __module__ = 'proto.clients.client_pb2'
  # @@protoc_insertion_point(class_scope:ubii.clients.ClientList)
  ))
_sym_db.RegisterMessage(ClientList)


# @@protoc_insertion_point(module_scope)
