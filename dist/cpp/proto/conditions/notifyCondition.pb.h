// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/conditions/notifyCondition.proto

#ifndef PROTOBUF_INCLUDED_proto_2fconditions_2fnotifyCondition_2eproto
#define PROTOBUF_INCLUDED_proto_2fconditions_2fnotifyCondition_2eproto

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
#include "proto/clients/client.pb.h"
// @@protoc_insertion_point(includes)
#define PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2fconditions_2fnotifyCondition_2eproto 

namespace protobuf_proto_2fconditions_2fnotifyCondition_2eproto {
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
}  // namespace protobuf_proto_2fconditions_2fnotifyCondition_2eproto
namespace ubii {
namespace conditions {
class NotifyCondition;
class NotifyConditionDefaultTypeInternal;
extern NotifyConditionDefaultTypeInternal _NotifyCondition_default_instance_;
}  // namespace conditions
}  // namespace ubii
namespace google {
namespace protobuf {
template<> ::ubii::conditions::NotifyCondition* Arena::CreateMaybeMessage<::ubii::conditions::NotifyCondition>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace ubii {
namespace conditions {

// ===================================================================

class NotifyCondition : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.conditions.NotifyCondition) */ {
 public:
  NotifyCondition();
  virtual ~NotifyCondition();

  NotifyCondition(const NotifyCondition& from);

  inline NotifyCondition& operator=(const NotifyCondition& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  NotifyCondition(NotifyCondition&& from) noexcept
    : NotifyCondition() {
    *this = ::std::move(from);
  }

  inline NotifyCondition& operator=(NotifyCondition&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const NotifyCondition& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const NotifyCondition* internal_default_instance() {
    return reinterpret_cast<const NotifyCondition*>(
               &_NotifyCondition_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(NotifyCondition* other);
  friend void swap(NotifyCondition& a, NotifyCondition& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline NotifyCondition* New() const final {
    return CreateMaybeMessage<NotifyCondition>(NULL);
  }

  NotifyCondition* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<NotifyCondition>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const NotifyCondition& from);
  void MergeFrom(const NotifyCondition& from);
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
  void InternalSwap(NotifyCondition* other);
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

  // string id = 1;
  void clear_id();
  static const int kIdFieldNumber = 1;
  const ::std::string& id() const;
  void set_id(const ::std::string& value);
  #if LANG_CXX11
  void set_id(::std::string&& value);
  #endif
  void set_id(const char* value);
  void set_id(const char* value, size_t size);
  ::std::string* mutable_id();
  ::std::string* release_id();
  void set_allocated_id(::std::string* id);

  // string name = 2;
  void clear_name();
  static const int kNameFieldNumber = 2;
  const ::std::string& name() const;
  void set_name(const ::std::string& value);
  #if LANG_CXX11
  void set_name(::std::string&& value);
  #endif
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  ::std::string* mutable_name();
  ::std::string* release_name();
  void set_allocated_name(::std::string* name);

  // string evaluation_function_stringified = 3;
  void clear_evaluation_function_stringified();
  static const int kEvaluationFunctionStringifiedFieldNumber = 3;
  const ::std::string& evaluation_function_stringified() const;
  void set_evaluation_function_stringified(const ::std::string& value);
  #if LANG_CXX11
  void set_evaluation_function_stringified(::std::string&& value);
  #endif
  void set_evaluation_function_stringified(const char* value);
  void set_evaluation_function_stringified(const char* value, size_t size);
  ::std::string* mutable_evaluation_function_stringified();
  ::std::string* release_evaluation_function_stringified();
  void set_allocated_evaluation_function_stringified(::std::string* evaluation_function_stringified);

  // .ubii.clients.Client client_profile_pub = 4;
  bool has_client_profile_pub() const;
  void clear_client_profile_pub();
  static const int kClientProfilePubFieldNumber = 4;
  private:
  const ::ubii::clients::Client& _internal_client_profile_pub() const;
  public:
  const ::ubii::clients::Client& client_profile_pub() const;
  ::ubii::clients::Client* release_client_profile_pub();
  ::ubii::clients::Client* mutable_client_profile_pub();
  void set_allocated_client_profile_pub(::ubii::clients::Client* client_profile_pub);

  // .ubii.clients.Client client_profile_sub = 5;
  bool has_client_profile_sub() const;
  void clear_client_profile_sub();
  static const int kClientProfileSubFieldNumber = 5;
  private:
  const ::ubii::clients::Client& _internal_client_profile_sub() const;
  public:
  const ::ubii::clients::Client& client_profile_sub() const;
  ::ubii::clients::Client* release_client_profile_sub();
  ::ubii::clients::Client* mutable_client_profile_sub();
  void set_allocated_client_profile_sub(::ubii::clients::Client* client_profile_sub);

  // @@protoc_insertion_point(class_scope:ubii.conditions.NotifyCondition)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr id_;
  ::google::protobuf::internal::ArenaStringPtr name_;
  ::google::protobuf::internal::ArenaStringPtr evaluation_function_stringified_;
  ::ubii::clients::Client* client_profile_pub_;
  ::ubii::clients::Client* client_profile_sub_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fconditions_2fnotifyCondition_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// NotifyCondition

// string id = 1;
inline void NotifyCondition::clear_id() {
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& NotifyCondition::id() const {
  // @@protoc_insertion_point(field_get:ubii.conditions.NotifyCondition.id)
  return id_.GetNoArena();
}
inline void NotifyCondition::set_id(const ::std::string& value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.conditions.NotifyCondition.id)
}
#if LANG_CXX11
inline void NotifyCondition::set_id(::std::string&& value) {
  
  id_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.conditions.NotifyCondition.id)
}
#endif
inline void NotifyCondition::set_id(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.conditions.NotifyCondition.id)
}
inline void NotifyCondition::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.conditions.NotifyCondition.id)
}
inline ::std::string* NotifyCondition::mutable_id() {
  
  // @@protoc_insertion_point(field_mutable:ubii.conditions.NotifyCondition.id)
  return id_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* NotifyCondition::release_id() {
  // @@protoc_insertion_point(field_release:ubii.conditions.NotifyCondition.id)
  
  return id_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void NotifyCondition::set_allocated_id(::std::string* id) {
  if (id != NULL) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:ubii.conditions.NotifyCondition.id)
}

// string name = 2;
inline void NotifyCondition::clear_name() {
  name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& NotifyCondition::name() const {
  // @@protoc_insertion_point(field_get:ubii.conditions.NotifyCondition.name)
  return name_.GetNoArena();
}
inline void NotifyCondition::set_name(const ::std::string& value) {
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.conditions.NotifyCondition.name)
}
#if LANG_CXX11
inline void NotifyCondition::set_name(::std::string&& value) {
  
  name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.conditions.NotifyCondition.name)
}
#endif
inline void NotifyCondition::set_name(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.conditions.NotifyCondition.name)
}
inline void NotifyCondition::set_name(const char* value, size_t size) {
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.conditions.NotifyCondition.name)
}
inline ::std::string* NotifyCondition::mutable_name() {
  
  // @@protoc_insertion_point(field_mutable:ubii.conditions.NotifyCondition.name)
  return name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* NotifyCondition::release_name() {
  // @@protoc_insertion_point(field_release:ubii.conditions.NotifyCondition.name)
  
  return name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void NotifyCondition::set_allocated_name(::std::string* name) {
  if (name != NULL) {
    
  } else {
    
  }
  name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name);
  // @@protoc_insertion_point(field_set_allocated:ubii.conditions.NotifyCondition.name)
}

// string evaluation_function_stringified = 3;
inline void NotifyCondition::clear_evaluation_function_stringified() {
  evaluation_function_stringified_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& NotifyCondition::evaluation_function_stringified() const {
  // @@protoc_insertion_point(field_get:ubii.conditions.NotifyCondition.evaluation_function_stringified)
  return evaluation_function_stringified_.GetNoArena();
}
inline void NotifyCondition::set_evaluation_function_stringified(const ::std::string& value) {
  
  evaluation_function_stringified_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.conditions.NotifyCondition.evaluation_function_stringified)
}
#if LANG_CXX11
inline void NotifyCondition::set_evaluation_function_stringified(::std::string&& value) {
  
  evaluation_function_stringified_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.conditions.NotifyCondition.evaluation_function_stringified)
}
#endif
inline void NotifyCondition::set_evaluation_function_stringified(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  evaluation_function_stringified_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.conditions.NotifyCondition.evaluation_function_stringified)
}
inline void NotifyCondition::set_evaluation_function_stringified(const char* value, size_t size) {
  
  evaluation_function_stringified_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.conditions.NotifyCondition.evaluation_function_stringified)
}
inline ::std::string* NotifyCondition::mutable_evaluation_function_stringified() {
  
  // @@protoc_insertion_point(field_mutable:ubii.conditions.NotifyCondition.evaluation_function_stringified)
  return evaluation_function_stringified_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* NotifyCondition::release_evaluation_function_stringified() {
  // @@protoc_insertion_point(field_release:ubii.conditions.NotifyCondition.evaluation_function_stringified)
  
  return evaluation_function_stringified_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void NotifyCondition::set_allocated_evaluation_function_stringified(::std::string* evaluation_function_stringified) {
  if (evaluation_function_stringified != NULL) {
    
  } else {
    
  }
  evaluation_function_stringified_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), evaluation_function_stringified);
  // @@protoc_insertion_point(field_set_allocated:ubii.conditions.NotifyCondition.evaluation_function_stringified)
}

// .ubii.clients.Client client_profile_pub = 4;
inline bool NotifyCondition::has_client_profile_pub() const {
  return this != internal_default_instance() && client_profile_pub_ != NULL;
}
inline const ::ubii::clients::Client& NotifyCondition::_internal_client_profile_pub() const {
  return *client_profile_pub_;
}
inline const ::ubii::clients::Client& NotifyCondition::client_profile_pub() const {
  const ::ubii::clients::Client* p = client_profile_pub_;
  // @@protoc_insertion_point(field_get:ubii.conditions.NotifyCondition.client_profile_pub)
  return p != NULL ? *p : *reinterpret_cast<const ::ubii::clients::Client*>(
      &::ubii::clients::_Client_default_instance_);
}
inline ::ubii::clients::Client* NotifyCondition::release_client_profile_pub() {
  // @@protoc_insertion_point(field_release:ubii.conditions.NotifyCondition.client_profile_pub)
  
  ::ubii::clients::Client* temp = client_profile_pub_;
  client_profile_pub_ = NULL;
  return temp;
}
inline ::ubii::clients::Client* NotifyCondition::mutable_client_profile_pub() {
  
  if (client_profile_pub_ == NULL) {
    auto* p = CreateMaybeMessage<::ubii::clients::Client>(GetArenaNoVirtual());
    client_profile_pub_ = p;
  }
  // @@protoc_insertion_point(field_mutable:ubii.conditions.NotifyCondition.client_profile_pub)
  return client_profile_pub_;
}
inline void NotifyCondition::set_allocated_client_profile_pub(::ubii::clients::Client* client_profile_pub) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(client_profile_pub_);
  }
  if (client_profile_pub) {
    ::google::protobuf::Arena* submessage_arena = NULL;
    if (message_arena != submessage_arena) {
      client_profile_pub = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, client_profile_pub, submessage_arena);
    }
    
  } else {
    
  }
  client_profile_pub_ = client_profile_pub;
  // @@protoc_insertion_point(field_set_allocated:ubii.conditions.NotifyCondition.client_profile_pub)
}

// .ubii.clients.Client client_profile_sub = 5;
inline bool NotifyCondition::has_client_profile_sub() const {
  return this != internal_default_instance() && client_profile_sub_ != NULL;
}
inline const ::ubii::clients::Client& NotifyCondition::_internal_client_profile_sub() const {
  return *client_profile_sub_;
}
inline const ::ubii::clients::Client& NotifyCondition::client_profile_sub() const {
  const ::ubii::clients::Client* p = client_profile_sub_;
  // @@protoc_insertion_point(field_get:ubii.conditions.NotifyCondition.client_profile_sub)
  return p != NULL ? *p : *reinterpret_cast<const ::ubii::clients::Client*>(
      &::ubii::clients::_Client_default_instance_);
}
inline ::ubii::clients::Client* NotifyCondition::release_client_profile_sub() {
  // @@protoc_insertion_point(field_release:ubii.conditions.NotifyCondition.client_profile_sub)
  
  ::ubii::clients::Client* temp = client_profile_sub_;
  client_profile_sub_ = NULL;
  return temp;
}
inline ::ubii::clients::Client* NotifyCondition::mutable_client_profile_sub() {
  
  if (client_profile_sub_ == NULL) {
    auto* p = CreateMaybeMessage<::ubii::clients::Client>(GetArenaNoVirtual());
    client_profile_sub_ = p;
  }
  // @@protoc_insertion_point(field_mutable:ubii.conditions.NotifyCondition.client_profile_sub)
  return client_profile_sub_;
}
inline void NotifyCondition::set_allocated_client_profile_sub(::ubii::clients::Client* client_profile_sub) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(client_profile_sub_);
  }
  if (client_profile_sub) {
    ::google::protobuf::Arena* submessage_arena = NULL;
    if (message_arena != submessage_arena) {
      client_profile_sub = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, client_profile_sub, submessage_arena);
    }
    
  } else {
    
  }
  client_profile_sub_ = client_profile_sub;
  // @@protoc_insertion_point(field_set_allocated:ubii.conditions.NotifyCondition.client_profile_sub)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace conditions
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_INCLUDED_proto_2fconditions_2fnotifyCondition_2eproto
