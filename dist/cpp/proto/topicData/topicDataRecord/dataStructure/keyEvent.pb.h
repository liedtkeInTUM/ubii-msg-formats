// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/keyEvent.proto

#ifndef PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto__INCLUDED
#define PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto__INCLUDED

#include <string>

#include <google/protobuf/stubs/common.h>

#if GOOGLE_PROTOBUF_VERSION < 3000000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please update
#error your headers.
#endif
#if 3000000 < GOOGLE_PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers.  Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/unknown_field_set.h>
#include "proto/topicData/topicDataRecord/dataStructure/buttonEventType.pb.h"
// @@protoc_insertion_point(includes)

namespace ubii {
namespace dataStructure {

// Internal implementation detail -- do not call these.
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();
void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();

class KeyEvent;

// ===================================================================

class KeyEvent : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.KeyEvent) */ {
 public:
  KeyEvent();
  virtual ~KeyEvent();

  KeyEvent(const KeyEvent& from);

  inline KeyEvent& operator=(const KeyEvent& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const KeyEvent& default_instance();

  void Swap(KeyEvent* other);

  // implements Message ----------------------------------------------

  inline KeyEvent* New() const { return New(NULL); }

  KeyEvent* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const KeyEvent& from);
  void MergeFrom(const KeyEvent& from);
  void Clear();
  bool IsInitialized() const;

  int ByteSize() const;
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input);
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      bool deterministic, ::google::protobuf::uint8* output) const;
  ::google::protobuf::uint8* SerializeWithCachedSizesToArray(::google::protobuf::uint8* output) const {
    return InternalSerializeWithCachedSizesToArray(false, output);
  }
  int GetCachedSize() const { return _cached_size_; }
  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const;
  void InternalSwap(KeyEvent* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return _internal_metadata_.arena();
  }
  inline void* MaybeArenaPtr() const {
    return _internal_metadata_.raw_arena_ptr();
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // optional .ubii.dataStructure.ButtonEventType type = 1;
  void clear_type();
  static const int kTypeFieldNumber = 1;
  ::ubii::dataStructure::ButtonEventType type() const;
  void set_type(::ubii::dataStructure::ButtonEventType value);

  // optional string key = 2;
  void clear_key();
  static const int kKeyFieldNumber = 2;
  const ::std::string& key() const;
  void set_key(const ::std::string& value);
  void set_key(const char* value);
  void set_key(const char* value, size_t size);
  ::std::string* mutable_key();
  ::std::string* release_key();
  void set_allocated_key(::std::string* key);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.KeyEvent)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::internal::ArenaStringPtr key_;
  int type_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto();

  void InitAsDefaultInstance();
  static KeyEvent* default_instance_;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// KeyEvent

// optional .ubii.dataStructure.ButtonEventType type = 1;
inline void KeyEvent::clear_type() {
  type_ = 0;
}
inline ::ubii::dataStructure::ButtonEventType KeyEvent::type() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.KeyEvent.type)
  return static_cast< ::ubii::dataStructure::ButtonEventType >(type_);
}
inline void KeyEvent::set_type(::ubii::dataStructure::ButtonEventType value) {
  
  type_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.KeyEvent.type)
}

// optional string key = 2;
inline void KeyEvent::clear_key() {
  key_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& KeyEvent::key() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.KeyEvent.key)
  return key_.GetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void KeyEvent::set_key(const ::std::string& value) {
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.KeyEvent.key)
}
inline void KeyEvent::set_key(const char* value) {
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.KeyEvent.key)
}
inline void KeyEvent::set_key(const char* value, size_t size) {
  
  key_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.KeyEvent.key)
}
inline ::std::string* KeyEvent::mutable_key() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.KeyEvent.key)
  return key_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* KeyEvent::release_key() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.KeyEvent.key)
  
  return key_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void KeyEvent::set_allocated_key(::std::string* key) {
  if (key != NULL) {
    
  } else {
    
  }
  key_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), key);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.KeyEvent.key)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fkeyEvent_2eproto__INCLUDED
