// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/mouseEvent.proto

#ifndef PROTOBUF_INCLUDED_proto_2fdataStructure_2fmouseEvent_2eproto
#define PROTOBUF_INCLUDED_proto_2fdataStructure_2fmouseEvent_2eproto

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3006001
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3006001 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
#include "proto/dataStructure/buttonEventType.pb.h"
// @@protoc_insertion_point(includes)
#define PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2fdataStructure_2fmouseEvent_2eproto 

namespace protobuf_proto_2fdataStructure_2fmouseEvent_2eproto {
// Internal implementation detail -- do not use these members.
struct TableStruct {
  static const ::google::protobuf::internal::ParseTableField entries[];
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[];
  static const ::google::protobuf::internal::ParseTable schema[1];
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors();
}  // namespace protobuf_proto_2fdataStructure_2fmouseEvent_2eproto
namespace ubii {
namespace dataStructure {
class MouseEvent;
class MouseEventDefaultTypeInternal;
extern MouseEventDefaultTypeInternal _MouseEvent_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
namespace google {
namespace protobuf {
template<> ::ubii::dataStructure::MouseEvent* Arena::CreateMaybeMessage<::ubii::dataStructure::MouseEvent>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace ubii {
namespace dataStructure {

// ===================================================================

class MouseEvent : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.MouseEvent) */ {
 public:
  MouseEvent();
  virtual ~MouseEvent();

  MouseEvent(const MouseEvent& from);

  inline MouseEvent& operator=(const MouseEvent& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  MouseEvent(MouseEvent&& from) noexcept
    : MouseEvent() {
    *this = ::std::move(from);
  }

  inline MouseEvent& operator=(MouseEvent&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const MouseEvent& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const MouseEvent* internal_default_instance() {
    return reinterpret_cast<const MouseEvent*>(
               &_MouseEvent_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(MouseEvent* other);
  friend void swap(MouseEvent& a, MouseEvent& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline MouseEvent* New() const final {
    return CreateMaybeMessage<MouseEvent>(NULL);
  }

  MouseEvent* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<MouseEvent>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const MouseEvent& from);
  void MergeFrom(const MouseEvent& from);
  void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) final;
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const final;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* target) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(MouseEvent* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return NULL;
  }
  inline void* MaybeArenaPtr() const {
    return NULL;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // .ubii.dataStructure.ButtonEventType type = 1;
  void clear_type();
  static const int kTypeFieldNumber = 1;
  ::ubii::dataStructure::ButtonEventType type() const;
  void set_type(::ubii::dataStructure::ButtonEventType value);

  // int32 button = 2;
  void clear_button();
  static const int kButtonFieldNumber = 2;
  ::google::protobuf::int32 button() const;
  void set_button(::google::protobuf::int32 value);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.MouseEvent)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  int type_;
  ::google::protobuf::int32 button_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fdataStructure_2fmouseEvent_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// MouseEvent

// .ubii.dataStructure.ButtonEventType type = 1;
inline void MouseEvent::clear_type() {
  type_ = 0;
}
inline ::ubii::dataStructure::ButtonEventType MouseEvent::type() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MouseEvent.type)
  return static_cast< ::ubii::dataStructure::ButtonEventType >(type_);
}
inline void MouseEvent::set_type(::ubii::dataStructure::ButtonEventType value) {
  
  type_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.MouseEvent.type)
}

// int32 button = 2;
inline void MouseEvent::clear_button() {
  button_ = 0;
}
inline ::google::protobuf::int32 MouseEvent::button() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MouseEvent.button)
  return button_;
}
inline void MouseEvent::set_button(::google::protobuf::int32 value) {
  
  button_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.MouseEvent.button)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_INCLUDED_proto_2fdataStructure_2fmouseEvent_2eproto
