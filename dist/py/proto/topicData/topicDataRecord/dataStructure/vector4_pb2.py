# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataRecord/dataStructure/vector4.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/topicData/topicDataRecord/dataStructure/vector4.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_pb=_b('\n;proto/topicData/topicDataRecord/dataStructure/vector4.proto\x12\x12ubii.dataStructure\"5\n\x07Vector4\x12\t\n\x01x\x18\x01 \x01(\x01\x12\t\n\x01y\x18\x02 \x01(\x01\x12\t\n\x01z\x18\x03 \x01(\x01\x12\t\n\x01w\x18\x04 \x01(\x01\x62\x06proto3')
)
_sym_db.RegisterFileDescriptor(DESCRIPTOR)




_VECTOR4 = _descriptor.Descriptor(
  name='Vector4',
  full_name='ubii.dataStructure.Vector4',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='x', full_name='ubii.dataStructure.Vector4.x', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='y', full_name='ubii.dataStructure.Vector4.y', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='z', full_name='ubii.dataStructure.Vector4.z', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='w', full_name='ubii.dataStructure.Vector4.w', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=83,
  serialized_end=136,
)

DESCRIPTOR.message_types_by_name['Vector4'] = _VECTOR4

Vector4 = _reflection.GeneratedProtocolMessageType('Vector4', (_message.Message,), dict(
  DESCRIPTOR = _VECTOR4,
  __module__ = 'proto.topicData.topicDataRecord.dataStructure.vector4_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.Vector4)
  ))
_sym_db.RegisterMessage(Vector4)


# @@protoc_insertion_point(module_scope)
