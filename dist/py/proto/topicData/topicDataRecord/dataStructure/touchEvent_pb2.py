# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataRecord/dataStructure/touchEvent.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.topicData.topicDataRecord.dataStructure import buttonEventType_pb2 as proto_dot_topicData_dot_topicDataRecord_dot_dataStructure_dot_buttonEventType__pb2
from proto.topicData.topicDataRecord.dataStructure import vector2_pb2 as proto_dot_topicData_dot_topicDataRecord_dot_dataStructure_dot_vector2__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/topicData/topicDataRecord/dataStructure/touchEvent.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n>proto/topicData/topicDataRecord/dataStructure/touchEvent.proto\x12\x12ubii.dataStructure\x1a\x43proto/topicData/topicDataRecord/dataStructure/buttonEventType.proto\x1a;proto/topicData/topicDataRecord/dataStructure/vector2.proto\"\xd5\x01\n\nTouchEvent\x12;\n\x04type\x18\x01 \x01(\x0e\x32-.ubii.dataStructure.TouchEvent.TouchEventType\x12-\n\x08position\x18\x02 \x01(\x0b\x32\x1b.ubii.dataStructure.Vector2\x12\n\n\x02id\x18\x03 \x01(\t\x12\r\n\x05\x66orce\x18\x04 \x01(\x02\"@\n\x0eTouchEventType\x12\x0f\n\x0bTOUCH_START\x10\x00\x12\x0e\n\nTOUCH_MOVE\x10\x01\x12\r\n\tTOUCH_END\x10\x02\"B\n\x0eTouchEventList\x12\x30\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x1e.ubii.dataStructure.TouchEventb\x06proto3')
  ,
  dependencies=[proto_dot_topicData_dot_topicDataRecord_dot_dataStructure_dot_buttonEventType__pb2.DESCRIPTOR,proto_dot_topicData_dot_topicDataRecord_dot_dataStructure_dot_vector2__pb2.DESCRIPTOR,])



_TOUCHEVENT_TOUCHEVENTTYPE = _descriptor.EnumDescriptor(
  name='TouchEventType',
  full_name='ubii.dataStructure.TouchEvent.TouchEventType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='TOUCH_START', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOUCH_MOVE', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TOUCH_END', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=366,
  serialized_end=430,
)
_sym_db.RegisterEnumDescriptor(_TOUCHEVENT_TOUCHEVENTTYPE)


_TOUCHEVENT = _descriptor.Descriptor(
  name='TouchEvent',
  full_name='ubii.dataStructure.TouchEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='ubii.dataStructure.TouchEvent.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='position', full_name='ubii.dataStructure.TouchEvent.position', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='ubii.dataStructure.TouchEvent.id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='force', full_name='ubii.dataStructure.TouchEvent.force', index=3,
      number=4, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _TOUCHEVENT_TOUCHEVENTTYPE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=217,
  serialized_end=430,
)


_TOUCHEVENTLIST = _descriptor.Descriptor(
  name='TouchEventList',
  full_name='ubii.dataStructure.TouchEventList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.TouchEventList.elements', index=0,
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
  serialized_start=432,
  serialized_end=498,
)

_TOUCHEVENT.fields_by_name['type'].enum_type = _TOUCHEVENT_TOUCHEVENTTYPE
_TOUCHEVENT.fields_by_name['position'].message_type = proto_dot_topicData_dot_topicDataRecord_dot_dataStructure_dot_vector2__pb2._VECTOR2
_TOUCHEVENT_TOUCHEVENTTYPE.containing_type = _TOUCHEVENT
_TOUCHEVENTLIST.fields_by_name['elements'].message_type = _TOUCHEVENT
DESCRIPTOR.message_types_by_name['TouchEvent'] = _TOUCHEVENT
DESCRIPTOR.message_types_by_name['TouchEventList'] = _TOUCHEVENTLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TouchEvent = _reflection.GeneratedProtocolMessageType('TouchEvent', (_message.Message,), dict(
  DESCRIPTOR = _TOUCHEVENT,
  __module__ = 'proto.topicData.topicDataRecord.dataStructure.touchEvent_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.TouchEvent)
  ))
_sym_db.RegisterMessage(TouchEvent)

TouchEventList = _reflection.GeneratedProtocolMessageType('TouchEventList', (_message.Message,), dict(
  DESCRIPTOR = _TOUCHEVENTLIST,
  __module__ = 'proto.topicData.topicDataRecord.dataStructure.touchEvent_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.TouchEventList)
  ))
_sym_db.RegisterMessage(TouchEventList)


# @@protoc_insertion_point(module_scope)
