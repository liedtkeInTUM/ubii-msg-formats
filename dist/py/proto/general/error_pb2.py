# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/general/error.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/general/error.proto',
  package='ubii.general',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x19proto/general/error.proto\x12\x0cubii.general\"6\n\x05\x45rror\x12\r\n\x05title\x18\x01 \x01(\t\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\r\n\x05stack\x18\x03 \x01(\t\"2\n\tErrorList\x12%\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x13.ubii.general.Errorb\x06proto3')
)




_ERROR = _descriptor.Descriptor(
  name='Error',
  full_name='ubii.general.Error',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='title', full_name='ubii.general.Error.title', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='message', full_name='ubii.general.Error.message', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='stack', full_name='ubii.general.Error.stack', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  serialized_start=43,
  serialized_end=97,
)


_ERRORLIST = _descriptor.Descriptor(
  name='ErrorList',
  full_name='ubii.general.ErrorList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.general.ErrorList.elements', index=0,
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
  serialized_start=99,
  serialized_end=149,
)

_ERRORLIST.fields_by_name['elements'].message_type = _ERROR
DESCRIPTOR.message_types_by_name['Error'] = _ERROR
DESCRIPTOR.message_types_by_name['ErrorList'] = _ERRORLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Error = _reflection.GeneratedProtocolMessageType('Error', (_message.Message,), dict(
  DESCRIPTOR = _ERROR,
  __module__ = 'proto.general.error_pb2'
  # @@protoc_insertion_point(class_scope:ubii.general.Error)
  ))
_sym_db.RegisterMessage(Error)

ErrorList = _reflection.GeneratedProtocolMessageType('ErrorList', (_message.Message,), dict(
  DESCRIPTOR = _ERRORLIST,
  __module__ = 'proto.general.error_pb2'
  # @@protoc_insertion_point(class_scope:ubii.general.ErrorList)
  ))
_sym_db.RegisterMessage(ErrorList)


# @@protoc_insertion_point(module_scope)
