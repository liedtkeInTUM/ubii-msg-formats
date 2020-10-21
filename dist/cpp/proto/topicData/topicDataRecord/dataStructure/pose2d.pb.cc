// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/pose2d.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "proto/topicData/topicDataRecord/dataStructure/pose2d.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/stubs/port.h>
#include <google/protobuf/stubs/once.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)

namespace ubii {
namespace dataStructure {

namespace {

const ::google::protobuf::Descriptor* Pose2D_descriptor_ = NULL;
const ::google::protobuf::internal::GeneratedMessageReflection*
  Pose2D_reflection_ = NULL;
struct Pose2DOneofInstance {
  const ::ubii::dataStructure::Vector2* direction_;
  float angle_;
}* Pose2D_default_oneof_instance_ = NULL;

}  // namespace


void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() {
  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto();
  const ::google::protobuf::FileDescriptor* file =
    ::google::protobuf::DescriptorPool::generated_pool()->FindFileByName(
      "proto/topicData/topicDataRecord/dataStructure/pose2d.proto");
  GOOGLE_CHECK(file != NULL);
  Pose2D_descriptor_ = file->message_type(0);
  static const int Pose2D_offsets_[4] = {
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Pose2D, position_),
    PROTO2_GENERATED_DEFAULT_ONEOF_FIELD_OFFSET(Pose2D_default_oneof_instance_, direction_),
    PROTO2_GENERATED_DEFAULT_ONEOF_FIELD_OFFSET(Pose2D_default_oneof_instance_, angle_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Pose2D, orientation_),
  };
  Pose2D_reflection_ =
    ::google::protobuf::internal::GeneratedMessageReflection::NewGeneratedMessageReflection(
      Pose2D_descriptor_,
      Pose2D::default_instance_,
      Pose2D_offsets_,
      -1,
      -1,
      -1,
      Pose2D_default_oneof_instance_,
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Pose2D, _oneof_case_[0]),
      sizeof(Pose2D),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Pose2D, _internal_metadata_),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Pose2D, _is_default_instance_));
}

namespace {

GOOGLE_PROTOBUF_DECLARE_ONCE(protobuf_AssignDescriptors_once_);
inline void protobuf_AssignDescriptorsOnce() {
  ::google::protobuf::GoogleOnceInit(&protobuf_AssignDescriptors_once_,
                 &protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedMessage(
      Pose2D_descriptor_, &Pose2D::default_instance());
}

}  // namespace

void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() {
  delete Pose2D::default_instance_;
  delete Pose2D_default_oneof_instance_;
  delete Pose2D_reflection_;
}

void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() {
  static bool already_here = false;
  if (already_here) return;
  already_here = true;
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::ubii::dataStructure::protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector2_2eproto();
  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
    "\n:proto/topicData/topicDataRecord/dataSt"
    "ructure/pose2d.proto\022\022ubii.dataStructure"
    "\032;proto/topicData/topicDataRecord/dataSt"
    "ructure/vector2.proto\"\211\001\n\006Pose2D\022-\n\010posi"
    "tion\030\001 \001(\0132\033.ubii.dataStructure.Vector2\022"
    "0\n\tdirection\030\002 \001(\0132\033.ubii.dataStructure."
    "Vector2H\000\022\017\n\005angle\030\003 \001(\002H\000B\r\n\013orientatio"
    "nb\006proto3", 289);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "proto/topicData/topicDataRecord/dataStructure/pose2d.proto", &protobuf_RegisterTypes);
  Pose2D::default_instance_ = new Pose2D();
  Pose2D_default_oneof_instance_ = new Pose2DOneofInstance();
  Pose2D::default_instance_->InitAsDefaultInstance();
  ::google::protobuf::internal::OnShutdown(&protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto);
}

// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto {
  StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto() {
    protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto();
  }
} static_descriptor_initializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto_;

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Pose2D::kPositionFieldNumber;
const int Pose2D::kDirectionFieldNumber;
const int Pose2D::kAngleFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Pose2D::Pose2D()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Pose2D)
}

void Pose2D::InitAsDefaultInstance() {
  _is_default_instance_ = true;
  position_ = const_cast< ::ubii::dataStructure::Vector2*>(&::ubii::dataStructure::Vector2::default_instance());
  Pose2D_default_oneof_instance_->direction_ = const_cast< ::ubii::dataStructure::Vector2*>(&::ubii::dataStructure::Vector2::default_instance());
  Pose2D_default_oneof_instance_->angle_ = 0;
}

Pose2D::Pose2D(const Pose2D& from)
  : ::google::protobuf::Message(),
    _internal_metadata_(NULL) {
  SharedCtor();
  MergeFrom(from);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Pose2D)
}

void Pose2D::SharedCtor() {
    _is_default_instance_ = false;
  _cached_size_ = 0;
  position_ = NULL;
  clear_has_orientation();
}

Pose2D::~Pose2D() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Pose2D)
  SharedDtor();
}

void Pose2D::SharedDtor() {
  if (has_orientation()) {
    clear_orientation();
  }
  if (this != default_instance_) {
    delete position_;
  }
}

void Pose2D::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Pose2D::descriptor() {
  protobuf_AssignDescriptorsOnce();
  return Pose2D_descriptor_;
}

const Pose2D& Pose2D::default_instance() {
  if (default_instance_ == NULL) protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fpose2d_2eproto();
  return *default_instance_;
}

Pose2D* Pose2D::default_instance_ = NULL;

Pose2D* Pose2D::New(::google::protobuf::Arena* arena) const {
  Pose2D* n = new Pose2D;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Pose2D::clear_orientation() {
// @@protoc_insertion_point(one_of_clear_start:ubii.dataStructure.Pose2D)
  switch(orientation_case()) {
    case kDirection: {
      delete orientation_.direction_;
      break;
    }
    case kAngle: {
      // No need to clear
      break;
    }
    case ORIENTATION_NOT_SET: {
      break;
    }
  }
  _oneof_case_[0] = ORIENTATION_NOT_SET;
}


void Pose2D::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Pose2D)
  if (GetArenaNoVirtual() == NULL && position_ != NULL) delete position_;
  position_ = NULL;
  clear_orientation();
}

bool Pose2D::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.Pose2D)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoff(127);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // optional .ubii.dataStructure.Vector2 position = 1;
      case 1: {
        if (tag == 10) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_position()));
        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(18)) goto parse_direction;
        break;
      }

      // optional .ubii.dataStructure.Vector2 direction = 2;
      case 2: {
        if (tag == 18) {
         parse_direction:
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtual(
               input, mutable_direction()));
        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(29)) goto parse_angle;
        break;
      }

      // optional float angle = 3;
      case 3: {
        if (tag == 29) {
         parse_angle:
          clear_orientation();
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   float, ::google::protobuf::internal::WireFormatLite::TYPE_FLOAT>(
                 input, &orientation_.angle_)));
          set_has_angle();
        } else {
          goto handle_unusual;
        }
        if (input->ExpectAtEnd()) goto success;
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0 ||
            ::google::protobuf::internal::WireFormatLite::GetTagWireType(tag) ==
            ::google::protobuf::internal::WireFormatLite::WIRETYPE_END_GROUP) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormatLite::SkipField(input, tag));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.Pose2D)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.Pose2D)
  return false;
#undef DO_
}

void Pose2D::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.Pose2D)
  // optional .ubii.dataStructure.Vector2 position = 1;
  if (this->has_position()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, *this->position_, output);
  }

  // optional .ubii.dataStructure.Vector2 direction = 2;
  if (has_direction()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, *orientation_.direction_, output);
  }

  // optional float angle = 3;
  if (has_angle()) {
    ::google::protobuf::internal::WireFormatLite::WriteFloat(3, this->angle(), output);
  }

  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.Pose2D)
}

::google::protobuf::uint8* Pose2D::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Pose2D)
  // optional .ubii.dataStructure.Vector2 position = 1;
  if (this->has_position()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, *this->position_, false, target);
  }

  // optional .ubii.dataStructure.Vector2 direction = 2;
  if (has_direction()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        2, *orientation_.direction_, false, target);
  }

  // optional float angle = 3;
  if (has_angle()) {
    target = ::google::protobuf::internal::WireFormatLite::WriteFloatToArray(3, this->angle(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Pose2D)
  return target;
}

int Pose2D::ByteSize() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Pose2D)
  int total_size = 0;

  // optional .ubii.dataStructure.Vector2 position = 1;
  if (this->has_position()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        *this->position_);
  }

  switch (orientation_case()) {
    // optional .ubii.dataStructure.Vector2 direction = 2;
    case kDirection: {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
          *orientation_.direction_);
      break;
    }
    // optional float angle = 3;
    case kAngle: {
      total_size += 1 + 4;
      break;
    }
    case ORIENTATION_NOT_SET: {
      break;
    }
  }
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = total_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Pose2D::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Pose2D)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  const Pose2D* source = 
      ::google::protobuf::internal::DynamicCastToGenerated<const Pose2D>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Pose2D)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Pose2D)
    MergeFrom(*source);
  }
}

void Pose2D::MergeFrom(const Pose2D& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Pose2D)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  switch (from.orientation_case()) {
    case kDirection: {
      mutable_direction()->::ubii::dataStructure::Vector2::MergeFrom(from.direction());
      break;
    }
    case kAngle: {
      set_angle(from.angle());
      break;
    }
    case ORIENTATION_NOT_SET: {
      break;
    }
  }
  if (from.has_position()) {
    mutable_position()->::ubii::dataStructure::Vector2::MergeFrom(from.position());
  }
}

void Pose2D::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Pose2D)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Pose2D::CopyFrom(const Pose2D& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Pose2D)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Pose2D::IsInitialized() const {

  return true;
}

void Pose2D::Swap(Pose2D* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Pose2D::InternalSwap(Pose2D* other) {
  std::swap(position_, other->position_);
  std::swap(orientation_, other->orientation_);
  std::swap(_oneof_case_[0], other->_oneof_case_[0]);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Pose2D::GetMetadata() const {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::Metadata metadata;
  metadata.descriptor = Pose2D_descriptor_;
  metadata.reflection = Pose2D_reflection_;
  return metadata;
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Pose2D

// optional .ubii.dataStructure.Vector2 position = 1;
bool Pose2D::has_position() const {
  return !_is_default_instance_ && position_ != NULL;
}
void Pose2D::clear_position() {
  if (GetArenaNoVirtual() == NULL && position_ != NULL) delete position_;
  position_ = NULL;
}
const ::ubii::dataStructure::Vector2& Pose2D::position() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose2D.position)
  return position_ != NULL ? *position_ : *default_instance_->position_;
}
::ubii::dataStructure::Vector2* Pose2D::mutable_position() {
  
  if (position_ == NULL) {
    position_ = new ::ubii::dataStructure::Vector2;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Pose2D.position)
  return position_;
}
::ubii::dataStructure::Vector2* Pose2D::release_position() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Pose2D.position)
  
  ::ubii::dataStructure::Vector2* temp = position_;
  position_ = NULL;
  return temp;
}
void Pose2D::set_allocated_position(::ubii::dataStructure::Vector2* position) {
  delete position_;
  position_ = position;
  if (position) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Pose2D.position)
}

// optional .ubii.dataStructure.Vector2 direction = 2;
bool Pose2D::has_direction() const {
  return orientation_case() == kDirection;
}
void Pose2D::set_has_direction() {
  _oneof_case_[0] = kDirection;
}
void Pose2D::clear_direction() {
  if (has_direction()) {
    delete orientation_.direction_;
    clear_has_orientation();
  }
}
 const ::ubii::dataStructure::Vector2& Pose2D::direction() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose2D.direction)
  return has_direction()
      ? *orientation_.direction_
      : ::ubii::dataStructure::Vector2::default_instance();
}
::ubii::dataStructure::Vector2* Pose2D::mutable_direction() {
  if (!has_direction()) {
    clear_orientation();
    set_has_direction();
    orientation_.direction_ = new ::ubii::dataStructure::Vector2;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Pose2D.direction)
  return orientation_.direction_;
}
::ubii::dataStructure::Vector2* Pose2D::release_direction() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Pose2D.direction)
  if (has_direction()) {
    clear_has_orientation();
    ::ubii::dataStructure::Vector2* temp = orientation_.direction_;
    orientation_.direction_ = NULL;
    return temp;
  } else {
    return NULL;
  }
}
void Pose2D::set_allocated_direction(::ubii::dataStructure::Vector2* direction) {
  clear_orientation();
  if (direction) {
    set_has_direction();
    orientation_.direction_ = direction;
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Pose2D.direction)
}

// optional float angle = 3;
bool Pose2D::has_angle() const {
  return orientation_case() == kAngle;
}
void Pose2D::set_has_angle() {
  _oneof_case_[0] = kAngle;
}
void Pose2D::clear_angle() {
  if (has_angle()) {
    orientation_.angle_ = 0;
    clear_has_orientation();
  }
}
 float Pose2D::angle() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose2D.angle)
  if (has_angle()) {
    return orientation_.angle_;
  }
  return 0;
}
 void Pose2D::set_angle(float value) {
  if (!has_angle()) {
    clear_orientation();
    set_has_angle();
  }
  orientation_.angle_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Pose2D.angle)
}

bool Pose2D::has_orientation() const {
  return orientation_case() != ORIENTATION_NOT_SET;
}
void Pose2D::clear_has_orientation() {
  _oneof_case_[0] = ORIENTATION_NOT_SET;
}
Pose2D::OrientationCase Pose2D::orientation_case() const {
  return Pose2D::OrientationCase(_oneof_case_[0]);
}
#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)
