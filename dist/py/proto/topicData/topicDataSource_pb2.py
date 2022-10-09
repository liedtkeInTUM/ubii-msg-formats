# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataSource.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.devices import component_pb2 as proto_dot_devices_dot_component__pb2
from proto.topicData import topicDataRecord_pb2 as proto_dot_topicData_dot_topicDataRecord__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/topicData/topicDataSource.proto',
  package='ubii.topicData',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n%proto/topicData/topicDataSource.proto\x12\x0eubii.topicData\x1a\x1dproto/devices/component.proto\x1a%proto/topicData/topicDataRecord.proto\"\xa3\x01\n\x0fTopicDataSource\x12\x0f\n\x05topic\x18\x01 \x01(\tH\x00\x12\x0f\n\x05regex\x18\x02 \x01(\tH\x00\x12,\n\tcomponent\x18\x03 \x01(\x0b\x32\x17.ubii.devices.ComponentH\x00\x12\x38\n\rstatic_record\x18\x04 \x01(\x0b\x32\x1f.ubii.topicData.TopicDataRecordH\x00\x42\x06\n\x04type\"H\n\x13TopicDataSourceList\x12\x31\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x1f.ubii.topicData.TopicDataSourceb\x06proto3')
  ,
  dependencies=[proto_dot_devices_dot_component__pb2.DESCRIPTOR,proto_dot_topicData_dot_topicDataRecord__pb2.DESCRIPTOR,])




_TOPICDATASOURCE = _descriptor.Descriptor(
  name='TopicDataSource',
  full_name='ubii.topicData.TopicDataSource',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='topic', full_name='ubii.topicData.TopicDataSource.topic', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='regex', full_name='ubii.topicData.TopicDataSource.regex', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='component', full_name='ubii.topicData.TopicDataSource.component', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='static_record', full_name='ubii.topicData.TopicDataSource.static_record', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
    _descriptor.OneofDescriptor(
      name='type', full_name='ubii.topicData.TopicDataSource.type',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=128,
  serialized_end=291,
)


_TOPICDATASOURCELIST = _descriptor.Descriptor(
  name='TopicDataSourceList',
  full_name='ubii.topicData.TopicDataSourceList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.topicData.TopicDataSourceList.elements', index=0,
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
  serialized_start=293,
  serialized_end=365,
)

_TOPICDATASOURCE.fields_by_name['component'].message_type = proto_dot_devices_dot_component__pb2._COMPONENT
_TOPICDATASOURCE.fields_by_name['static_record'].message_type = proto_dot_topicData_dot_topicDataRecord__pb2._TOPICDATARECORD
_TOPICDATASOURCE.oneofs_by_name['type'].fields.append(
  _TOPICDATASOURCE.fields_by_name['topic'])
_TOPICDATASOURCE.fields_by_name['topic'].containing_oneof = _TOPICDATASOURCE.oneofs_by_name['type']
_TOPICDATASOURCE.oneofs_by_name['type'].fields.append(
  _TOPICDATASOURCE.fields_by_name['regex'])
_TOPICDATASOURCE.fields_by_name['regex'].containing_oneof = _TOPICDATASOURCE.oneofs_by_name['type']
_TOPICDATASOURCE.oneofs_by_name['type'].fields.append(
  _TOPICDATASOURCE.fields_by_name['component'])
_TOPICDATASOURCE.fields_by_name['component'].containing_oneof = _TOPICDATASOURCE.oneofs_by_name['type']
_TOPICDATASOURCE.oneofs_by_name['type'].fields.append(
  _TOPICDATASOURCE.fields_by_name['static_record'])
_TOPICDATASOURCE.fields_by_name['static_record'].containing_oneof = _TOPICDATASOURCE.oneofs_by_name['type']
_TOPICDATASOURCELIST.fields_by_name['elements'].message_type = _TOPICDATASOURCE
DESCRIPTOR.message_types_by_name['TopicDataSource'] = _TOPICDATASOURCE
DESCRIPTOR.message_types_by_name['TopicDataSourceList'] = _TOPICDATASOURCELIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TopicDataSource = _reflection.GeneratedProtocolMessageType('TopicDataSource', (_message.Message,), dict(
  DESCRIPTOR = _TOPICDATASOURCE,
  __module__ = 'proto.topicData.topicDataSource_pb2'
  # @@protoc_insertion_point(class_scope:ubii.topicData.TopicDataSource)
  ))
_sym_db.RegisterMessage(TopicDataSource)

TopicDataSourceList = _reflection.GeneratedProtocolMessageType('TopicDataSourceList', (_message.Message,), dict(
  DESCRIPTOR = _TOPICDATASOURCELIST,
  __module__ = 'proto.topicData.topicDataSource_pb2'
  # @@protoc_insertion_point(class_scope:ubii.topicData.TopicDataSourceList)
  ))
_sym_db.RegisterMessage(TopicDataSourceList)


# @@protoc_insertion_point(module_scope)
