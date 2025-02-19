// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/quaternion.proto

#include "proto/dataStructure/quaternion.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// This is a temporary google only hack
#ifdef GOOGLE_PROTOBUF_ENFORCE_UNIQUENESS
#include "third_party/protobuf/version.h"
#endif
// @@protoc_insertion_point(includes)

namespace protobuf_proto_2fdataStructure_2fquaternion_2eproto {
extern PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2fdataStructure_2fquaternion_2eproto ::google::protobuf::internal::SCCInfo<0> scc_info_Quaternion;
}  // namespace protobuf_proto_2fdataStructure_2fquaternion_2eproto
namespace ubii {
namespace dataStructure {
class QuaternionDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<Quaternion>
      _instance;
} _Quaternion_default_instance_;
class QuaternionListDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<QuaternionList>
      _instance;
} _QuaternionList_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
namespace protobuf_proto_2fdataStructure_2fquaternion_2eproto {
static void InitDefaultsQuaternion() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::dataStructure::_Quaternion_default_instance_;
    new (ptr) ::ubii::dataStructure::Quaternion();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::dataStructure::Quaternion::InitAsDefaultInstance();
}

::google::protobuf::internal::SCCInfo<0> scc_info_Quaternion =
    {{ATOMIC_VAR_INIT(::google::protobuf::internal::SCCInfoBase::kUninitialized), 0, InitDefaultsQuaternion}, {}};

static void InitDefaultsQuaternionList() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::dataStructure::_QuaternionList_default_instance_;
    new (ptr) ::ubii::dataStructure::QuaternionList();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::dataStructure::QuaternionList::InitAsDefaultInstance();
}

::google::protobuf::internal::SCCInfo<1> scc_info_QuaternionList =
    {{ATOMIC_VAR_INIT(::google::protobuf::internal::SCCInfoBase::kUninitialized), 1, InitDefaultsQuaternionList}, {
      &protobuf_proto_2fdataStructure_2fquaternion_2eproto::scc_info_Quaternion.base,}};

void InitDefaults() {
  ::google::protobuf::internal::InitSCC(&scc_info_Quaternion.base);
  ::google::protobuf::internal::InitSCC(&scc_info_QuaternionList.base);
}

::google::protobuf::Metadata file_level_metadata[2];

const ::google::protobuf::uint32 TableStruct::offsets[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::Quaternion, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::Quaternion, x_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::Quaternion, y_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::Quaternion, z_),
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::Quaternion, w_),
  ~0u,  // no _has_bits_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::QuaternionList, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(::ubii::dataStructure::QuaternionList, elements_),
};
static const ::google::protobuf::internal::MigrationSchema schemas[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::ubii::dataStructure::Quaternion)},
  { 9, -1, sizeof(::ubii::dataStructure::QuaternionList)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&::ubii::dataStructure::_Quaternion_default_instance_),
  reinterpret_cast<const ::google::protobuf::Message*>(&::ubii::dataStructure::_QuaternionList_default_instance_),
};

void protobuf_AssignDescriptors() {
  AddDescriptors();
  AssignDescriptors(
      "proto/dataStructure/quaternion.proto", schemas, file_default_instances, TableStruct::offsets,
      file_level_metadata, NULL, NULL);
}

void protobuf_AssignDescriptorsOnce() {
  static ::google::protobuf::internal::once_flag once;
  ::google::protobuf::internal::call_once(once, protobuf_AssignDescriptors);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_PROTOBUF_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::internal::RegisterAllTypes(file_level_metadata, 2);
}

void AddDescriptorsImpl() {
  InitDefaults();
  static const char descriptor[] GOOGLE_PROTOBUF_ATTRIBUTE_SECTION_VARIABLE(protodesc_cold) = {
      "\n$proto/dataStructure/quaternion.proto\022\022"
      "ubii.dataStructure\"8\n\nQuaternion\022\t\n\001x\030\001 "
      "\001(\001\022\t\n\001y\030\002 \001(\001\022\t\n\001z\030\003 \001(\001\022\t\n\001w\030\004 \001(\001\"B\n\016"
      "QuaternionList\0220\n\010elements\030\001 \003(\0132\036.ubii."
      "dataStructure.Quaternionb\006proto3"
  };
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
      descriptor, 192);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "proto/dataStructure/quaternion.proto", &protobuf_RegisterTypes);
}

void AddDescriptors() {
  static ::google::protobuf::internal::once_flag once;
  ::google::protobuf::internal::call_once(once, AddDescriptorsImpl);
}
// Force AddDescriptors() to be called at dynamic initialization time.
struct StaticDescriptorInitializer {
  StaticDescriptorInitializer() {
    AddDescriptors();
  }
} static_descriptor_initializer;
}  // namespace protobuf_proto_2fdataStructure_2fquaternion_2eproto
namespace ubii {
namespace dataStructure {

// ===================================================================

void Quaternion::InitAsDefaultInstance() {
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Quaternion::kXFieldNumber;
const int Quaternion::kYFieldNumber;
const int Quaternion::kZFieldNumber;
const int Quaternion::kWFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Quaternion::Quaternion()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  ::google::protobuf::internal::InitSCC(
      &protobuf_proto_2fdataStructure_2fquaternion_2eproto::scc_info_Quaternion.base);
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Quaternion)
}
Quaternion::Quaternion(const Quaternion& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::memcpy(&x_, &from.x_,
    static_cast<size_t>(reinterpret_cast<char*>(&w_) -
    reinterpret_cast<char*>(&x_)) + sizeof(w_));
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Quaternion)
}

void Quaternion::SharedCtor() {
  ::memset(&x_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&w_) -
      reinterpret_cast<char*>(&x_)) + sizeof(w_));
}

Quaternion::~Quaternion() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Quaternion)
  SharedDtor();
}

void Quaternion::SharedDtor() {
}

void Quaternion::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const ::google::protobuf::Descriptor* Quaternion::descriptor() {
  ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::file_level_metadata[kIndexInFileMessages].descriptor;
}

const Quaternion& Quaternion::default_instance() {
  ::google::protobuf::internal::InitSCC(&protobuf_proto_2fdataStructure_2fquaternion_2eproto::scc_info_Quaternion.base);
  return *internal_default_instance();
}


void Quaternion::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Quaternion)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  ::memset(&x_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&w_) -
      reinterpret_cast<char*>(&x_)) + sizeof(w_));
  _internal_metadata_.Clear();
}

bool Quaternion::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.Quaternion)
  for (;;) {
    ::std::pair<::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // double x = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(9u /* 9 & 0xFF */)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &x_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // double y = 2;
      case 2: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(17u /* 17 & 0xFF */)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &y_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // double z = 3;
      case 3: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(25u /* 25 & 0xFF */)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &z_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // double w = 4;
      case 4: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(33u /* 33 & 0xFF */)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &w_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, _internal_metadata_.mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.Quaternion)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.Quaternion)
  return false;
#undef DO_
}

void Quaternion::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.Quaternion)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // double x = 1;
  if (this->x() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(1, this->x(), output);
  }

  // double y = 2;
  if (this->y() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(2, this->y(), output);
  }

  // double z = 3;
  if (this->z() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(3, this->z(), output);
  }

  // double w = 4;
  if (this->w() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(4, this->w(), output);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), output);
  }
  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.Quaternion)
}

::google::protobuf::uint8* Quaternion::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic; // Unused
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Quaternion)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // double x = 1;
  if (this->x() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(1, this->x(), target);
  }

  // double y = 2;
  if (this->y() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(2, this->y(), target);
  }

  // double z = 3;
  if (this->z() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(3, this->z(), target);
  }

  // double w = 4;
  if (this->w() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(4, this->w(), target);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Quaternion)
  return target;
}

size_t Quaternion::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Quaternion)
  size_t total_size = 0;

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()));
  }
  // double x = 1;
  if (this->x() != 0) {
    total_size += 1 + 8;
  }

  // double y = 2;
  if (this->y() != 0) {
    total_size += 1 + 8;
  }

  // double z = 3;
  if (this->z() != 0) {
    total_size += 1 + 8;
  }

  // double w = 4;
  if (this->w() != 0) {
    total_size += 1 + 8;
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Quaternion::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Quaternion)
  GOOGLE_DCHECK_NE(&from, this);
  const Quaternion* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const Quaternion>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Quaternion)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Quaternion)
    MergeFrom(*source);
  }
}

void Quaternion::MergeFrom(const Quaternion& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Quaternion)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.x() != 0) {
    set_x(from.x());
  }
  if (from.y() != 0) {
    set_y(from.y());
  }
  if (from.z() != 0) {
    set_z(from.z());
  }
  if (from.w() != 0) {
    set_w(from.w());
  }
}

void Quaternion::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Quaternion)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Quaternion::CopyFrom(const Quaternion& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Quaternion)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Quaternion::IsInitialized() const {
  return true;
}

void Quaternion::Swap(Quaternion* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Quaternion::InternalSwap(Quaternion* other) {
  using std::swap;
  swap(x_, other->x_);
  swap(y_, other->y_);
  swap(z_, other->z_);
  swap(w_, other->w_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
}

::google::protobuf::Metadata Quaternion::GetMetadata() const {
  protobuf_proto_2fdataStructure_2fquaternion_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::file_level_metadata[kIndexInFileMessages];
}


// ===================================================================

void QuaternionList::InitAsDefaultInstance() {
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int QuaternionList::kElementsFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

QuaternionList::QuaternionList()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  ::google::protobuf::internal::InitSCC(
      &protobuf_proto_2fdataStructure_2fquaternion_2eproto::scc_info_QuaternionList.base);
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.QuaternionList)
}
QuaternionList::QuaternionList(const QuaternionList& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(NULL),
      elements_(from.elements_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.QuaternionList)
}

void QuaternionList::SharedCtor() {
}

QuaternionList::~QuaternionList() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.QuaternionList)
  SharedDtor();
}

void QuaternionList::SharedDtor() {
}

void QuaternionList::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const ::google::protobuf::Descriptor* QuaternionList::descriptor() {
  ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::file_level_metadata[kIndexInFileMessages].descriptor;
}

const QuaternionList& QuaternionList::default_instance() {
  ::google::protobuf::internal::InitSCC(&protobuf_proto_2fdataStructure_2fquaternion_2eproto::scc_info_QuaternionList.base);
  return *internal_default_instance();
}


void QuaternionList::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.QuaternionList)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  elements_.Clear();
  _internal_metadata_.Clear();
}

bool QuaternionList::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.QuaternionList)
  for (;;) {
    ::std::pair<::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // repeated .ubii.dataStructure.Quaternion elements = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) ==
            static_cast< ::google::protobuf::uint8>(10u /* 10 & 0xFF */)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
                input, add_elements()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, _internal_metadata_.mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.QuaternionList)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.QuaternionList)
  return false;
#undef DO_
}

void QuaternionList::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.QuaternionList)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .ubii.dataStructure.Quaternion elements = 1;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->elements_size()); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1,
      this->elements(static_cast<int>(i)),
      output);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), output);
  }
  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.QuaternionList)
}

::google::protobuf::uint8* QuaternionList::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  (void)deterministic; // Unused
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.QuaternionList)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .ubii.dataStructure.Quaternion elements = 1;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->elements_size()); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        1, this->elements(static_cast<int>(i)), deterministic, target);
  }

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.QuaternionList)
  return target;
}

size_t QuaternionList::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.QuaternionList)
  size_t total_size = 0;

  if ((_internal_metadata_.have_unknown_fields() &&  ::google::protobuf::internal::GetProto3PreserveUnknownsDefault())) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        (::google::protobuf::internal::GetProto3PreserveUnknownsDefault()   ? _internal_metadata_.unknown_fields()   : _internal_metadata_.default_instance()));
  }
  // repeated .ubii.dataStructure.Quaternion elements = 1;
  {
    unsigned int count = static_cast<unsigned int>(this->elements_size());
    total_size += 1UL * count;
    for (unsigned int i = 0; i < count; i++) {
      total_size +=
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          this->elements(static_cast<int>(i)));
    }
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void QuaternionList::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.QuaternionList)
  GOOGLE_DCHECK_NE(&from, this);
  const QuaternionList* source =
      ::google::protobuf::internal::DynamicCastToGenerated<const QuaternionList>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.QuaternionList)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.QuaternionList)
    MergeFrom(*source);
  }
}

void QuaternionList::MergeFrom(const QuaternionList& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.QuaternionList)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  elements_.MergeFrom(from.elements_);
}

void QuaternionList::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.QuaternionList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void QuaternionList::CopyFrom(const QuaternionList& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.QuaternionList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool QuaternionList::IsInitialized() const {
  return true;
}

void QuaternionList::Swap(QuaternionList* other) {
  if (other == this) return;
  InternalSwap(other);
}
void QuaternionList::InternalSwap(QuaternionList* other) {
  using std::swap;
  CastToBase(&elements_)->InternalSwap(CastToBase(&other->elements_));
  _internal_metadata_.Swap(&other->_internal_metadata_);
}

::google::protobuf::Metadata QuaternionList::GetMetadata() const {
  protobuf_proto_2fdataStructure_2fquaternion_2eproto::protobuf_AssignDescriptorsOnce();
  return ::protobuf_proto_2fdataStructure_2fquaternion_2eproto::file_level_metadata[kIndexInFileMessages];
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace dataStructure
}  // namespace ubii
namespace google {
namespace protobuf {
template<> GOOGLE_PROTOBUF_ATTRIBUTE_NOINLINE ::ubii::dataStructure::Quaternion* Arena::CreateMaybeMessage< ::ubii::dataStructure::Quaternion >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::dataStructure::Quaternion >(arena);
}
template<> GOOGLE_PROTOBUF_ATTRIBUTE_NOINLINE ::ubii::dataStructure::QuaternionList* Arena::CreateMaybeMessage< ::ubii::dataStructure::QuaternionList >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::dataStructure::QuaternionList >(arena);
}
}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)
