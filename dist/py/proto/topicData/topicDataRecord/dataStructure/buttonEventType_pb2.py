# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataRecord/dataStructure/buttonEventType.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/topicData/topicDataRecord/dataStructure/buttonEventType.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_pb=_b('\nCproto/topicData/topicDataRecord/dataStructure/buttonEventType.proto\x12\x12ubii.dataStructure*#\n\x0f\x42uttonEventType\x12\x06\n\x02UP\x10\x00\x12\x08\n\x04\x44OWN\x10\x01\x62\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

_BUTTONEVENTTYPE = _descriptor.EnumDescriptor(
  name='ButtonEventType',
  full_name='ubii.dataStructure.ButtonEventType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UP', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DOWN', index=1, number=1,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=91,
  serialized_end=126,
)
_sym_db.RegisterEnumDescriptor(_BUTTONEVENTTYPE)

ButtonEventType = enum_type_wrapper.EnumTypeWrapper(_BUTTONEVENTTYPE)
UP = 0
DOWN = 1


DESCRIPTOR.enum_types_by_name['ButtonEventType'] = _BUTTONEVENTTYPE


# @@protoc_insertion_point(module_scope)
