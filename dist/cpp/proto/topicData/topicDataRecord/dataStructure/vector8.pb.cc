// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/vector8.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "proto/topicData/topicDataRecord/dataStructure/vector8.pb.h"

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

const ::google::protobuf::Descriptor* Vector8_descriptor_ = NULL;
const ::google::protobuf::internal::GeneratedMessageReflection*
  Vector8_reflection_ = NULL;

}  // namespace


void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() {
  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto();
  const ::google::protobuf::FileDescriptor* file =
    ::google::protobuf::DescriptorPool::generated_pool()->FindFileByName(
      "proto/topicData/topicDataRecord/dataStructure/vector8.proto");
  GOOGLE_CHECK(file != NULL);
  Vector8_descriptor_ = file->message_type(0);
  static const int Vector8_offsets_[8] = {
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v0_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v1_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v2_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v3_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v4_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v5_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v6_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, v7_),
  };
  Vector8_reflection_ =
    ::google::protobuf::internal::GeneratedMessageReflection::NewGeneratedMessageReflection(
      Vector8_descriptor_,
      Vector8::default_instance_,
      Vector8_offsets_,
      -1,
      -1,
      -1,
      sizeof(Vector8),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, _internal_metadata_),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Vector8, _is_default_instance_));
}

namespace {

GOOGLE_PROTOBUF_DECLARE_ONCE(protobuf_AssignDescriptors_once_);
inline void protobuf_AssignDescriptorsOnce() {
  ::google::protobuf::GoogleOnceInit(&protobuf_AssignDescriptors_once_,
                 &protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedMessage(
      Vector8_descriptor_, &Vector8::default_instance());
}

}  // namespace

void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() {
  delete Vector8::default_instance_;
  delete Vector8_reflection_;
}

void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() {
  static bool already_here = false;
  if (already_here) return;
  already_here = true;
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
    "\n;proto/topicData/topicDataRecord/dataSt"
    "ructure/vector8.proto\022\022ubii.dataStructur"
    "e\"i\n\007Vector8\022\n\n\002v0\030\001 \001(\001\022\n\n\002v1\030\002 \001(\001\022\n\n\002"
    "v2\030\003 \001(\001\022\n\n\002v3\030\004 \001(\001\022\n\n\002v4\030\005 \001(\001\022\n\n\002v5\030\006"
    " \001(\001\022\n\n\002v6\030\007 \001(\001\022\n\n\002v7\030\010 \001(\001b\006proto3", 196);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "proto/topicData/topicDataRecord/dataStructure/vector8.proto", &protobuf_RegisterTypes);
  Vector8::default_instance_ = new Vector8();
  Vector8::default_instance_->InitAsDefaultInstance();
  ::google::protobuf::internal::OnShutdown(&protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto);
}

// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto {
  StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto() {
    protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto();
  }
} static_descriptor_initializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto_;

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Vector8::kV0FieldNumber;
const int Vector8::kV1FieldNumber;
const int Vector8::kV2FieldNumber;
const int Vector8::kV3FieldNumber;
const int Vector8::kV4FieldNumber;
const int Vector8::kV5FieldNumber;
const int Vector8::kV6FieldNumber;
const int Vector8::kV7FieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Vector8::Vector8()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Vector8)
}

void Vector8::InitAsDefaultInstance() {
  _is_default_instance_ = true;
}

Vector8::Vector8(const Vector8& from)
  : ::google::protobuf::Message(),
    _internal_metadata_(NULL) {
  SharedCtor();
  MergeFrom(from);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Vector8)
}

void Vector8::SharedCtor() {
    _is_default_instance_ = false;
  _cached_size_ = 0;
  v0_ = 0;
  v1_ = 0;
  v2_ = 0;
  v3_ = 0;
  v4_ = 0;
  v5_ = 0;
  v6_ = 0;
  v7_ = 0;
}

Vector8::~Vector8() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Vector8)
  SharedDtor();
}

void Vector8::SharedDtor() {
  if (this != default_instance_) {
  }
}

void Vector8::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Vector8::descriptor() {
  protobuf_AssignDescriptorsOnce();
  return Vector8_descriptor_;
}

const Vector8& Vector8::default_instance() {
  if (default_instance_ == NULL) protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fvector8_2eproto();
  return *default_instance_;
}

Vector8* Vector8::default_instance_ = NULL;

Vector8* Vector8::New(::google::protobuf::Arena* arena) const {
  Vector8* n = new Vector8;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Vector8::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Vector8)
#if defined(__clang__)
#define ZR_HELPER_(f) \
  _Pragma("clang diagnostic push") \
  _Pragma("clang diagnostic ignored \"-Winvalid-offsetof\"") \
  __builtin_offsetof(Vector8, f) \
  _Pragma("clang diagnostic pop")
#else
#define ZR_HELPER_(f) reinterpret_cast<char*>(\
  &reinterpret_cast<Vector8*>(16)->f)
#endif

#define ZR_(first, last) do {\
  ::memset(&first, 0,\
           ZR_HELPER_(last) - ZR_HELPER_(first) + sizeof(last));\
} while (0)

  ZR_(v0_, v7_);

#undef ZR_HELPER_
#undef ZR_

}

bool Vector8::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.Vector8)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoff(127);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // optional double v0 = 1;
      case 1: {
        if (tag == 9) {
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v0_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(17)) goto parse_v1;
        break;
      }

      // optional double v1 = 2;
      case 2: {
        if (tag == 17) {
         parse_v1:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v1_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(25)) goto parse_v2;
        break;
      }

      // optional double v2 = 3;
      case 3: {
        if (tag == 25) {
         parse_v2:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v2_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(33)) goto parse_v3;
        break;
      }

      // optional double v3 = 4;
      case 4: {
        if (tag == 33) {
         parse_v3:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v3_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(41)) goto parse_v4;
        break;
      }

      // optional double v4 = 5;
      case 5: {
        if (tag == 41) {
         parse_v4:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v4_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(49)) goto parse_v5;
        break;
      }

      // optional double v5 = 6;
      case 6: {
        if (tag == 49) {
         parse_v5:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v5_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(57)) goto parse_v6;
        break;
      }

      // optional double v6 = 7;
      case 7: {
        if (tag == 57) {
         parse_v6:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v6_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(65)) goto parse_v7;
        break;
      }

      // optional double v7 = 8;
      case 8: {
        if (tag == 65) {
         parse_v7:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   double, ::google::protobuf::internal::WireFormatLite::TYPE_DOUBLE>(
                 input, &v7_)));

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
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.Vector8)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.Vector8)
  return false;
#undef DO_
}

void Vector8::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.Vector8)
  // optional double v0 = 1;
  if (this->v0() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(1, this->v0(), output);
  }

  // optional double v1 = 2;
  if (this->v1() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(2, this->v1(), output);
  }

  // optional double v2 = 3;
  if (this->v2() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(3, this->v2(), output);
  }

  // optional double v3 = 4;
  if (this->v3() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(4, this->v3(), output);
  }

  // optional double v4 = 5;
  if (this->v4() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(5, this->v4(), output);
  }

  // optional double v5 = 6;
  if (this->v5() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(6, this->v5(), output);
  }

  // optional double v6 = 7;
  if (this->v6() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(7, this->v6(), output);
  }

  // optional double v7 = 8;
  if (this->v7() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteDouble(8, this->v7(), output);
  }

  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.Vector8)
}

::google::protobuf::uint8* Vector8::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Vector8)
  // optional double v0 = 1;
  if (this->v0() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(1, this->v0(), target);
  }

  // optional double v1 = 2;
  if (this->v1() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(2, this->v1(), target);
  }

  // optional double v2 = 3;
  if (this->v2() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(3, this->v2(), target);
  }

  // optional double v3 = 4;
  if (this->v3() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(4, this->v3(), target);
  }

  // optional double v4 = 5;
  if (this->v4() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(5, this->v4(), target);
  }

  // optional double v5 = 6;
  if (this->v5() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(6, this->v5(), target);
  }

  // optional double v6 = 7;
  if (this->v6() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(7, this->v6(), target);
  }

  // optional double v7 = 8;
  if (this->v7() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteDoubleToArray(8, this->v7(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Vector8)
  return target;
}

int Vector8::ByteSize() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Vector8)
  int total_size = 0;

  // optional double v0 = 1;
  if (this->v0() != 0) {
    total_size += 1 + 8;
  }

  // optional double v1 = 2;
  if (this->v1() != 0) {
    total_size += 1 + 8;
  }

  // optional double v2 = 3;
  if (this->v2() != 0) {
    total_size += 1 + 8;
  }

  // optional double v3 = 4;
  if (this->v3() != 0) {
    total_size += 1 + 8;
  }

  // optional double v4 = 5;
  if (this->v4() != 0) {
    total_size += 1 + 8;
  }

  // optional double v5 = 6;
  if (this->v5() != 0) {
    total_size += 1 + 8;
  }

  // optional double v6 = 7;
  if (this->v6() != 0) {
    total_size += 1 + 8;
  }

  // optional double v7 = 8;
  if (this->v7() != 0) {
    total_size += 1 + 8;
  }

  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = total_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Vector8::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Vector8)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  const Vector8* source = 
      ::google::protobuf::internal::DynamicCastToGenerated<const Vector8>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Vector8)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Vector8)
    MergeFrom(*source);
  }
}

void Vector8::MergeFrom(const Vector8& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Vector8)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  if (from.v0() != 0) {
    set_v0(from.v0());
  }
  if (from.v1() != 0) {
    set_v1(from.v1());
  }
  if (from.v2() != 0) {
    set_v2(from.v2());
  }
  if (from.v3() != 0) {
    set_v3(from.v3());
  }
  if (from.v4() != 0) {
    set_v4(from.v4());
  }
  if (from.v5() != 0) {
    set_v5(from.v5());
  }
  if (from.v6() != 0) {
    set_v6(from.v6());
  }
  if (from.v7() != 0) {
    set_v7(from.v7());
  }
}

void Vector8::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Vector8)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Vector8::CopyFrom(const Vector8& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Vector8)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Vector8::IsInitialized() const {

  return true;
}

void Vector8::Swap(Vector8* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Vector8::InternalSwap(Vector8* other) {
  std::swap(v0_, other->v0_);
  std::swap(v1_, other->v1_);
  std::swap(v2_, other->v2_);
  std::swap(v3_, other->v3_);
  std::swap(v4_, other->v4_);
  std::swap(v5_, other->v5_);
  std::swap(v6_, other->v6_);
  std::swap(v7_, other->v7_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Vector8::GetMetadata() const {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::Metadata metadata;
  metadata.descriptor = Vector8_descriptor_;
  metadata.reflection = Vector8_reflection_;
  return metadata;
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Vector8

// optional double v0 = 1;
void Vector8::clear_v0() {
  v0_ = 0;
}
 double Vector8::v0() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v0)
  return v0_;
}
 void Vector8::set_v0(double value) {
  
  v0_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v0)
}

// optional double v1 = 2;
void Vector8::clear_v1() {
  v1_ = 0;
}
 double Vector8::v1() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v1)
  return v1_;
}
 void Vector8::set_v1(double value) {
  
  v1_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v1)
}

// optional double v2 = 3;
void Vector8::clear_v2() {
  v2_ = 0;
}
 double Vector8::v2() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v2)
  return v2_;
}
 void Vector8::set_v2(double value) {
  
  v2_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v2)
}

// optional double v3 = 4;
void Vector8::clear_v3() {
  v3_ = 0;
}
 double Vector8::v3() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v3)
  return v3_;
}
 void Vector8::set_v3(double value) {
  
  v3_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v3)
}

// optional double v4 = 5;
void Vector8::clear_v4() {
  v4_ = 0;
}
 double Vector8::v4() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v4)
  return v4_;
}
 void Vector8::set_v4(double value) {
  
  v4_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v4)
}

// optional double v5 = 6;
void Vector8::clear_v5() {
  v5_ = 0;
}
 double Vector8::v5() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v5)
  return v5_;
}
 void Vector8::set_v5(double value) {
  
  v5_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v5)
}

// optional double v6 = 7;
void Vector8::clear_v6() {
  v6_ = 0;
}
 double Vector8::v6() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v6)
  return v6_;
}
 void Vector8::set_v6(double value) {
  
  v6_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v6)
}

// optional double v7 = 8;
void Vector8::clear_v7() {
  v7_ = 0;
}
 double Vector8::v7() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Vector8.v7)
  return v7_;
}
 void Vector8::set_v7(double value) {
  
  v7_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Vector8.v7)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)
