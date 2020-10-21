// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/image.proto

#define INTERNAL_SUPPRESS_PROTOBUF_FIELD_DEPRECATION
#include "proto/topicData/topicDataRecord/dataStructure/image.pb.h"

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

const ::google::protobuf::Descriptor* Image2D_descriptor_ = NULL;
const ::google::protobuf::internal::GeneratedMessageReflection*
  Image2D_reflection_ = NULL;
const ::google::protobuf::EnumDescriptor* Image2D_DataFormat_descriptor_ = NULL;
const ::google::protobuf::Descriptor* Image2DList_descriptor_ = NULL;
const ::google::protobuf::internal::GeneratedMessageReflection*
  Image2DList_reflection_ = NULL;

}  // namespace


void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() {
  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto();
  const ::google::protobuf::FileDescriptor* file =
    ::google::protobuf::DescriptorPool::generated_pool()->FindFileByName(
      "proto/topicData/topicDataRecord/dataStructure/image.proto");
  GOOGLE_CHECK(file != NULL);
  Image2D_descriptor_ = file->message_type(0);
  static const int Image2D_offsets_[4] = {
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, width_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, height_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, data_format_),
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, data_),
  };
  Image2D_reflection_ =
    ::google::protobuf::internal::GeneratedMessageReflection::NewGeneratedMessageReflection(
      Image2D_descriptor_,
      Image2D::default_instance_,
      Image2D_offsets_,
      -1,
      -1,
      -1,
      sizeof(Image2D),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, _internal_metadata_),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2D, _is_default_instance_));
  Image2D_DataFormat_descriptor_ = Image2D_descriptor_->enum_type(0);
  Image2DList_descriptor_ = file->message_type(1);
  static const int Image2DList_offsets_[1] = {
    GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2DList, elements_),
  };
  Image2DList_reflection_ =
    ::google::protobuf::internal::GeneratedMessageReflection::NewGeneratedMessageReflection(
      Image2DList_descriptor_,
      Image2DList::default_instance_,
      Image2DList_offsets_,
      -1,
      -1,
      -1,
      sizeof(Image2DList),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2DList, _internal_metadata_),
      GOOGLE_PROTOBUF_GENERATED_MESSAGE_FIELD_OFFSET(Image2DList, _is_default_instance_));
}

namespace {

GOOGLE_PROTOBUF_DECLARE_ONCE(protobuf_AssignDescriptors_once_);
inline void protobuf_AssignDescriptorsOnce() {
  ::google::protobuf::GoogleOnceInit(&protobuf_AssignDescriptors_once_,
                 &protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto);
}

void protobuf_RegisterTypes(const ::std::string&) GOOGLE_ATTRIBUTE_COLD;
void protobuf_RegisterTypes(const ::std::string&) {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedMessage(
      Image2D_descriptor_, &Image2D::default_instance());
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedMessage(
      Image2DList_descriptor_, &Image2DList::default_instance());
}

}  // namespace

void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() {
  delete Image2D::default_instance_;
  delete Image2D_reflection_;
  delete Image2DList::default_instance_;
  delete Image2DList_reflection_;
}

void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() GOOGLE_ATTRIBUTE_COLD;
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() {
  static bool already_here = false;
  if (already_here) return;
  already_here = true;
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  ::google::protobuf::DescriptorPool::InternalAddGeneratedFile(
    "\n9proto/topicData/topicDataRecord/dataSt"
    "ructure/image.proto\022\022ubii.dataStructure\""
    "\241\001\n\007Image2D\022\r\n\005width\030\001 \001(\005\022\016\n\006height\030\002 \001"
    "(\005\022;\n\013data_format\030\003 \001(\0162&.ubii.dataStruc"
    "ture.Image2D.DataFormat\022\014\n\004data\030\004 \001(\014\",\n"
    "\nDataFormat\022\t\n\005GRAY8\020\000\022\010\n\004RGB8\020\001\022\t\n\005RGBA"
    "8\020\002\"<\n\013Image2DList\022-\n\010elements\030\001 \003(\0132\033.u"
    "bii.dataStructure.Image2Db\006proto3", 313);
  ::google::protobuf::MessageFactory::InternalRegisterGeneratedFile(
    "proto/topicData/topicDataRecord/dataStructure/image.proto", &protobuf_RegisterTypes);
  Image2D::default_instance_ = new Image2D();
  Image2DList::default_instance_ = new Image2DList();
  Image2D::default_instance_->InitAsDefaultInstance();
  Image2DList::default_instance_->InitAsDefaultInstance();
  ::google::protobuf::internal::OnShutdown(&protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto);
}

// Force AddDescriptors() to be called at static initialization time.
struct StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto {
  StaticDescriptorInitializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto() {
    protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto();
  }
} static_descriptor_initializer_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto_;

// ===================================================================

const ::google::protobuf::EnumDescriptor* Image2D_DataFormat_descriptor() {
  protobuf_AssignDescriptorsOnce();
  return Image2D_DataFormat_descriptor_;
}
bool Image2D_DataFormat_IsValid(int value) {
  switch(value) {
    case 0:
    case 1:
    case 2:
      return true;
    default:
      return false;
  }
}

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const Image2D_DataFormat Image2D::GRAY8;
const Image2D_DataFormat Image2D::RGB8;
const Image2D_DataFormat Image2D::RGBA8;
const Image2D_DataFormat Image2D::DataFormat_MIN;
const Image2D_DataFormat Image2D::DataFormat_MAX;
const int Image2D::DataFormat_ARRAYSIZE;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Image2D::kWidthFieldNumber;
const int Image2D::kHeightFieldNumber;
const int Image2D::kDataFormatFieldNumber;
const int Image2D::kDataFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Image2D::Image2D()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Image2D)
}

void Image2D::InitAsDefaultInstance() {
  _is_default_instance_ = true;
}

Image2D::Image2D(const Image2D& from)
  : ::google::protobuf::Message(),
    _internal_metadata_(NULL) {
  SharedCtor();
  MergeFrom(from);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Image2D)
}

void Image2D::SharedCtor() {
    _is_default_instance_ = false;
  ::google::protobuf::internal::GetEmptyString();
  _cached_size_ = 0;
  width_ = 0;
  height_ = 0;
  data_format_ = 0;
  data_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}

Image2D::~Image2D() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Image2D)
  SharedDtor();
}

void Image2D::SharedDtor() {
  data_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (this != default_instance_) {
  }
}

void Image2D::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Image2D::descriptor() {
  protobuf_AssignDescriptorsOnce();
  return Image2D_descriptor_;
}

const Image2D& Image2D::default_instance() {
  if (default_instance_ == NULL) protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto();
  return *default_instance_;
}

Image2D* Image2D::default_instance_ = NULL;

Image2D* Image2D::New(::google::protobuf::Arena* arena) const {
  Image2D* n = new Image2D;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Image2D::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Image2D)
#if defined(__clang__)
#define ZR_HELPER_(f) \
  _Pragma("clang diagnostic push") \
  _Pragma("clang diagnostic ignored \"-Winvalid-offsetof\"") \
  __builtin_offsetof(Image2D, f) \
  _Pragma("clang diagnostic pop")
#else
#define ZR_HELPER_(f) reinterpret_cast<char*>(\
  &reinterpret_cast<Image2D*>(16)->f)
#endif

#define ZR_(first, last) do {\
  ::memset(&first, 0,\
           ZR_HELPER_(last) - ZR_HELPER_(first) + sizeof(last));\
} while (0)

  ZR_(width_, height_);
  data_format_ = 0;
  data_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());

#undef ZR_HELPER_
#undef ZR_

}

bool Image2D::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.Image2D)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoff(127);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // optional int32 width = 1;
      case 1: {
        if (tag == 8) {
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int32, ::google::protobuf::internal::WireFormatLite::TYPE_INT32>(
                 input, &width_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(16)) goto parse_height;
        break;
      }

      // optional int32 height = 2;
      case 2: {
        if (tag == 16) {
         parse_height:
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::int32, ::google::protobuf::internal::WireFormatLite::TYPE_INT32>(
                 input, &height_)));

        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(24)) goto parse_data_format;
        break;
      }

      // optional .ubii.dataStructure.Image2D.DataFormat data_format = 3;
      case 3: {
        if (tag == 24) {
         parse_data_format:
          int value;
          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   int, ::google::protobuf::internal::WireFormatLite::TYPE_ENUM>(
                 input, &value)));
          set_data_format(static_cast< ::ubii::dataStructure::Image2D_DataFormat >(value));
        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(34)) goto parse_data;
        break;
      }

      // optional bytes data = 4;
      case 4: {
        if (tag == 34) {
         parse_data:
          DO_(::google::protobuf::internal::WireFormatLite::ReadBytes(
                input, this->mutable_data()));
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
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.Image2D)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.Image2D)
  return false;
#undef DO_
}

void Image2D::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.Image2D)
  // optional int32 width = 1;
  if (this->width() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt32(1, this->width(), output);
  }

  // optional int32 height = 2;
  if (this->height() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteInt32(2, this->height(), output);
  }

  // optional .ubii.dataStructure.Image2D.DataFormat data_format = 3;
  if (this->data_format() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteEnum(
      3, this->data_format(), output);
  }

  // optional bytes data = 4;
  if (this->data().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::WriteBytesMaybeAliased(
      4, this->data(), output);
  }

  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.Image2D)
}

::google::protobuf::uint8* Image2D::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Image2D)
  // optional int32 width = 1;
  if (this->width() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt32ToArray(1, this->width(), target);
  }

  // optional int32 height = 2;
  if (this->height() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteInt32ToArray(2, this->height(), target);
  }

  // optional .ubii.dataStructure.Image2D.DataFormat data_format = 3;
  if (this->data_format() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteEnumToArray(
      3, this->data_format(), target);
  }

  // optional bytes data = 4;
  if (this->data().size() > 0) {
    target =
      ::google::protobuf::internal::WireFormatLite::WriteBytesToArray(
        4, this->data(), target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Image2D)
  return target;
}

int Image2D::ByteSize() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Image2D)
  int total_size = 0;

  // optional int32 width = 1;
  if (this->width() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int32Size(
        this->width());
  }

  // optional int32 height = 2;
  if (this->height() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::Int32Size(
        this->height());
  }

  // optional .ubii.dataStructure.Image2D.DataFormat data_format = 3;
  if (this->data_format() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::EnumSize(this->data_format());
  }

  // optional bytes data = 4;
  if (this->data().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::BytesSize(
        this->data());
  }

  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = total_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Image2D::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Image2D)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  const Image2D* source = 
      ::google::protobuf::internal::DynamicCastToGenerated<const Image2D>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Image2D)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Image2D)
    MergeFrom(*source);
  }
}

void Image2D::MergeFrom(const Image2D& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Image2D)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  if (from.width() != 0) {
    set_width(from.width());
  }
  if (from.height() != 0) {
    set_height(from.height());
  }
  if (from.data_format() != 0) {
    set_data_format(from.data_format());
  }
  if (from.data().size() > 0) {

    data_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.data_);
  }
}

void Image2D::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Image2D)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Image2D::CopyFrom(const Image2D& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Image2D)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Image2D::IsInitialized() const {

  return true;
}

void Image2D::Swap(Image2D* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Image2D::InternalSwap(Image2D* other) {
  std::swap(width_, other->width_);
  std::swap(height_, other->height_);
  std::swap(data_format_, other->data_format_);
  data_.Swap(&other->data_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Image2D::GetMetadata() const {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::Metadata metadata;
  metadata.descriptor = Image2D_descriptor_;
  metadata.reflection = Image2D_reflection_;
  return metadata;
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Image2D

// optional int32 width = 1;
void Image2D::clear_width() {
  width_ = 0;
}
 ::google::protobuf::int32 Image2D::width() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.width)
  return width_;
}
 void Image2D::set_width(::google::protobuf::int32 value) {
  
  width_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.width)
}

// optional int32 height = 2;
void Image2D::clear_height() {
  height_ = 0;
}
 ::google::protobuf::int32 Image2D::height() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.height)
  return height_;
}
 void Image2D::set_height(::google::protobuf::int32 value) {
  
  height_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.height)
}

// optional .ubii.dataStructure.Image2D.DataFormat data_format = 3;
void Image2D::clear_data_format() {
  data_format_ = 0;
}
 ::ubii::dataStructure::Image2D_DataFormat Image2D::data_format() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data_format)
  return static_cast< ::ubii::dataStructure::Image2D_DataFormat >(data_format_);
}
 void Image2D::set_data_format(::ubii::dataStructure::Image2D_DataFormat value) {
  
  data_format_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data_format)
}

// optional bytes data = 4;
void Image2D::clear_data() {
  data_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
 const ::std::string& Image2D::data() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data)
  return data_.GetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
 void Image2D::set_data(const ::std::string& value) {
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data)
}
 void Image2D::set_data(const char* value) {
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Image2D.data)
}
 void Image2D::set_data(const void* value, size_t size) {
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Image2D.data)
}
 ::std::string* Image2D::mutable_data() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2D.data)
  return data_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
 ::std::string* Image2D::release_data() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Image2D.data)
  
  return data_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
 void Image2D::set_allocated_data(::std::string* data) {
  if (data != NULL) {
    
  } else {
    
  }
  data_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), data);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Image2D.data)
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// ===================================================================

#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Image2DList::kElementsFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Image2DList::Image2DList()
  : ::google::protobuf::Message(), _internal_metadata_(NULL) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Image2DList)
}

void Image2DList::InitAsDefaultInstance() {
  _is_default_instance_ = true;
}

Image2DList::Image2DList(const Image2DList& from)
  : ::google::protobuf::Message(),
    _internal_metadata_(NULL) {
  SharedCtor();
  MergeFrom(from);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Image2DList)
}

void Image2DList::SharedCtor() {
    _is_default_instance_ = false;
  _cached_size_ = 0;
}

Image2DList::~Image2DList() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Image2DList)
  SharedDtor();
}

void Image2DList::SharedDtor() {
  if (this != default_instance_) {
  }
}

void Image2DList::SetCachedSize(int size) const {
  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
}
const ::google::protobuf::Descriptor* Image2DList::descriptor() {
  protobuf_AssignDescriptorsOnce();
  return Image2DList_descriptor_;
}

const Image2DList& Image2DList::default_instance() {
  if (default_instance_ == NULL) protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fimage_2eproto();
  return *default_instance_;
}

Image2DList* Image2DList::default_instance_ = NULL;

Image2DList* Image2DList::New(::google::protobuf::Arena* arena) const {
  Image2DList* n = new Image2DList;
  if (arena != NULL) {
    arena->Own(n);
  }
  return n;
}

void Image2DList::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Image2DList)
  elements_.Clear();
}

bool Image2DList::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!GOOGLE_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:ubii.dataStructure.Image2DList)
  for (;;) {
    ::std::pair< ::google::protobuf::uint32, bool> p = input->ReadTagWithCutoff(127);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // repeated .ubii.dataStructure.Image2D elements = 1;
      case 1: {
        if (tag == 10) {
          DO_(input->IncrementRecursionDepth());
         parse_loop_elements:
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessageNoVirtualNoRecursionDepth(
                input, add_elements()));
        } else {
          goto handle_unusual;
        }
        if (input->ExpectTag(10)) goto parse_loop_elements;
        input->UnsafeDecrementRecursionDepth();
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
  // @@protoc_insertion_point(parse_success:ubii.dataStructure.Image2DList)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:ubii.dataStructure.Image2DList)
  return false;
#undef DO_
}

void Image2DList::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:ubii.dataStructure.Image2DList)
  // repeated .ubii.dataStructure.Image2D elements = 1;
  for (unsigned int i = 0, n = this->elements_size(); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, this->elements(i), output);
  }

  // @@protoc_insertion_point(serialize_end:ubii.dataStructure.Image2DList)
}

::google::protobuf::uint8* Image2DList::InternalSerializeWithCachedSizesToArray(
    bool deterministic, ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Image2DList)
  // repeated .ubii.dataStructure.Image2D elements = 1;
  for (unsigned int i = 0, n = this->elements_size(); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageNoVirtualToArray(
        1, this->elements(i), false, target);
  }

  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Image2DList)
  return target;
}

int Image2DList::ByteSize() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Image2DList)
  int total_size = 0;

  // repeated .ubii.dataStructure.Image2D elements = 1;
  total_size += 1 * this->elements_size();
  for (int i = 0; i < this->elements_size(); i++) {
    total_size +=
      ::google::protobuf::internal::WireFormatLite::MessageSizeNoVirtual(
        this->elements(i));
  }

  GOOGLE_SAFE_CONCURRENT_WRITES_BEGIN();
  _cached_size_ = total_size;
  GOOGLE_SAFE_CONCURRENT_WRITES_END();
  return total_size;
}

void Image2DList::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Image2DList)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  const Image2DList* source = 
      ::google::protobuf::internal::DynamicCastToGenerated<const Image2DList>(
          &from);
  if (source == NULL) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Image2DList)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Image2DList)
    MergeFrom(*source);
  }
}

void Image2DList::MergeFrom(const Image2DList& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Image2DList)
  if (GOOGLE_PREDICT_FALSE(&from == this)) {
    ::google::protobuf::internal::MergeFromFail(__FILE__, __LINE__);
  }
  elements_.MergeFrom(from.elements_);
}

void Image2DList::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Image2DList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Image2DList::CopyFrom(const Image2DList& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Image2DList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Image2DList::IsInitialized() const {

  return true;
}

void Image2DList::Swap(Image2DList* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Image2DList::InternalSwap(Image2DList* other) {
  elements_.UnsafeArenaSwap(&other->elements_);
  _internal_metadata_.Swap(&other->_internal_metadata_);
  std::swap(_cached_size_, other->_cached_size_);
}

::google::protobuf::Metadata Image2DList::GetMetadata() const {
  protobuf_AssignDescriptorsOnce();
  ::google::protobuf::Metadata metadata;
  metadata.descriptor = Image2DList_descriptor_;
  metadata.reflection = Image2DList_reflection_;
  return metadata;
}

#if PROTOBUF_INLINE_NOT_IN_HEADERS
// Image2DList

// repeated .ubii.dataStructure.Image2D elements = 1;
int Image2DList::elements_size() const {
  return elements_.size();
}
void Image2DList::clear_elements() {
  elements_.Clear();
}
const ::ubii::dataStructure::Image2D& Image2DList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2DList.elements)
  return elements_.Get(index);
}
::ubii::dataStructure::Image2D* Image2DList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2DList.elements)
  return elements_.Mutable(index);
}
::ubii::dataStructure::Image2D* Image2DList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Image2DList.elements)
  return elements_.Add();
}
::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >*
Image2DList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Image2DList.elements)
  return &elements_;
}
const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >&
Image2DList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Image2DList.elements)
  return elements_;
}

#endif  // PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)
