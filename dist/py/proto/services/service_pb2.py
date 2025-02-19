# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/services/service.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/services/service.proto',
  package='ubii.services',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1cproto/services/service.proto\x12\rubii.services\"|\n\x07Service\x12\r\n\x05topic\x18\x01 \x01(\t\x12\x1e\n\x16request_message_format\x18\x02 \x01(\t\x12\x1f\n\x17response_message_format\x18\x03 \x01(\t\x12\x0c\n\x04tags\x18\x04 \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\"7\n\x0bServiceList\x12(\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x16.ubii.services.Serviceb\x06proto3')
)




_SERVICE = _descriptor.Descriptor(
  name='Service',
  full_name='ubii.services.Service',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topic', full_name='ubii.services.Service.topic', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='request_message_format', full_name='ubii.services.Service.request_message_format', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='response_message_format', full_name='ubii.services.Service.response_message_format', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='ubii.services.Service.tags', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='ubii.services.Service.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=47,
  serialized_end=171,
)


_SERVICELIST = _descriptor.Descriptor(
  name='ServiceList',
  full_name='ubii.services.ServiceList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.services.ServiceList.elements', index=0,
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
  serialized_start=173,
  serialized_end=228,
)

_SERVICELIST.fields_by_name['elements'].message_type = _SERVICE
DESCRIPTOR.message_types_by_name['Service'] = _SERVICE
DESCRIPTOR.message_types_by_name['ServiceList'] = _SERVICELIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Service = _reflection.GeneratedProtocolMessageType('Service', (_message.Message,), dict(
  DESCRIPTOR = _SERVICE,
  __module__ = 'proto.services.service_pb2'
  # @@protoc_insertion_point(class_scope:ubii.services.Service)
  ))
_sym_db.RegisterMessage(Service)

ServiceList = _reflection.GeneratedProtocolMessageType('ServiceList', (_message.Message,), dict(
  DESCRIPTOR = _SERVICELIST,
  __module__ = 'proto.services.service_pb2'
  # @@protoc_insertion_point(class_scope:ubii.services.ServiceList)
  ))
_sym_db.RegisterMessage(ServiceList)


# @@protoc_insertion_point(module_scope)
