// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/handGestureType.proto

#include "proto/topicData/topicDataRecord/dataStructure/handGestureType.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace ubii {
namespace dataStructure {
}  // namespace dataStructure
}  // namespace ubii
static constexpr ::PROTOBUF_NAMESPACE_ID::Metadata* file_level_metadata_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto = nullptr;
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto = nullptr;
const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto::offsets[1] = {};
static constexpr ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema* schemas = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::Message* const* file_default_instances = nullptr;

const char descriptor_table_protodef_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\nCproto/topicData/topicDataRecord/dataSt"
  "ructure/handGestureType.proto\022\022ubii.data"
  "Structure*d\n\017HandGestureType\022\010\n\004REST\020\000\022\022"
  "\n\016FINGERS_SPREAD\020\001\022\013\n\007WAVE_IN\020\002\022\014\n\010WAVE_"
  "OUT\020\003\022\010\n\004FIST\020\004\022\016\n\nDOUBLE_TAP\020\005b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_sccs[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_once;
static bool descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto = {
  &descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_initialized, descriptor_table_protodef_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto, "proto/topicData/topicDataRecord/dataStructure/handGestureType.proto", 199,
  &descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_once, descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_sccs, descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto_deps, 0, 0,
  schemas, file_default_instances, TableStruct_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto::offsets,
  file_level_metadata_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto, 0, file_level_enum_descriptors_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto, file_level_service_descriptors_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto), true);
namespace ubii {
namespace dataStructure {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* HandGestureType_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto);
  return file_level_enum_descriptors_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fhandGestureType_2eproto[0];
}
bool HandGestureType_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    default:
      return false;
  }
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace dataStructure
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
