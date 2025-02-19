// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/object2d.proto

#ifndef PROTOBUF_INCLUDED_proto_2fdataStructure_2fobject2d_2eproto
#define PROTOBUF_INCLUDED_proto_2fdataStructure_2fobject2d_2eproto

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
#include "proto/dataStructure/pose2d.pb.h"
#include "proto/dataStructure/vector2.pb.h"
// @@protoc_insertion_point(includes)
#define PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2fdataStructure_2fobject2d_2eproto 

namespace protobuf_proto_2fdataStructure_2fobject2d_2eproto {
// Internal implementation detail -- do not use these members.
struct TableStruct {
  static const ::google::protobuf::internal::ParseTableField entries[];
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[];
  static const ::google::protobuf::internal::ParseTable schema[2];
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors();
}  // namespace protobuf_proto_2fdataStructure_2fobject2d_2eproto
namespace ubii {
namespace dataStructure {
class Object2D;
class Object2DDefaultTypeInternal;
extern Object2DDefaultTypeInternal _Object2D_default_instance_;
class Object2DList;
class Object2DListDefaultTypeInternal;
extern Object2DListDefaultTypeInternal _Object2DList_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
namespace google {
namespace protobuf {
template<> ::ubii::dataStructure::Object2D* Arena::CreateMaybeMessage<::ubii::dataStructure::Object2D>(Arena*);
template<> ::ubii::dataStructure::Object2DList* Arena::CreateMaybeMessage<::ubii::dataStructure::Object2DList>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace ubii {
namespace dataStructure {

// ===================================================================

class Object2D : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Object2D) */ {
 public:
  Object2D();
  virtual ~Object2D();

  Object2D(const Object2D& from);

  inline Object2D& operator=(const Object2D& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  Object2D(Object2D&& from) noexcept
    : Object2D() {
    *this = ::std::move(from);
  }

  inline Object2D& operator=(Object2D&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const Object2D& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Object2D* internal_default_instance() {
    return reinterpret_cast<const Object2D*>(
               &_Object2D_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(Object2D* other);
  friend void swap(Object2D& a, Object2D& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline Object2D* New() const final {
    return CreateMaybeMessage<Object2D>(NULL);
  }

  Object2D* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<Object2D>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const Object2D& from);
  void MergeFrom(const Object2D& from);
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
  void InternalSwap(Object2D* other);
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

  // string user_data_json = 4;
  void clear_user_data_json();
  static const int kUserDataJsonFieldNumber = 4;
  const ::std::string& user_data_json() const;
  void set_user_data_json(const ::std::string& value);
  #if LANG_CXX11
  void set_user_data_json(::std::string&& value);
  #endif
  void set_user_data_json(const char* value);
  void set_user_data_json(const char* value, size_t size);
  ::std::string* mutable_user_data_json();
  ::std::string* release_user_data_json();
  void set_allocated_user_data_json(::std::string* user_data_json);

  // .ubii.dataStructure.Pose2D pose = 2;
  bool has_pose() const;
  void clear_pose();
  static const int kPoseFieldNumber = 2;
  private:
  const ::ubii::dataStructure::Pose2D& _internal_pose() const;
  public:
  const ::ubii::dataStructure::Pose2D& pose() const;
  ::ubii::dataStructure::Pose2D* release_pose();
  ::ubii::dataStructure::Pose2D* mutable_pose();
  void set_allocated_pose(::ubii::dataStructure::Pose2D* pose);

  // .ubii.dataStructure.Vector2 size = 3;
  bool has_size() const;
  void clear_size();
  static const int kSizeFieldNumber = 3;
  private:
  const ::ubii::dataStructure::Vector2& _internal_size() const;
  public:
  const ::ubii::dataStructure::Vector2& size() const;
  ::ubii::dataStructure::Vector2* release_size();
  ::ubii::dataStructure::Vector2* mutable_size();
  void set_allocated_size(::ubii::dataStructure::Vector2* size);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Object2D)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr id_;
  ::google::protobuf::internal::ArenaStringPtr user_data_json_;
  ::ubii::dataStructure::Pose2D* pose_;
  ::ubii::dataStructure::Vector2* size_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fdataStructure_2fobject2d_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Object2DList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Object2DList) */ {
 public:
  Object2DList();
  virtual ~Object2DList();

  Object2DList(const Object2DList& from);

  inline Object2DList& operator=(const Object2DList& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  Object2DList(Object2DList&& from) noexcept
    : Object2DList() {
    *this = ::std::move(from);
  }

  inline Object2DList& operator=(Object2DList&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const Object2DList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Object2DList* internal_default_instance() {
    return reinterpret_cast<const Object2DList*>(
               &_Object2DList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  void Swap(Object2DList* other);
  friend void swap(Object2DList& a, Object2DList& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline Object2DList* New() const final {
    return CreateMaybeMessage<Object2DList>(NULL);
  }

  Object2DList* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<Object2DList>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const Object2DList& from);
  void MergeFrom(const Object2DList& from);
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
  void InternalSwap(Object2DList* other);
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

  // repeated .ubii.dataStructure.Object2D elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  ::ubii::dataStructure::Object2D* mutable_elements(int index);
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object2D >*
      mutable_elements();
  const ::ubii::dataStructure::Object2D& elements(int index) const;
  ::ubii::dataStructure::Object2D* add_elements();
  const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object2D >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Object2DList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object2D > elements_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fdataStructure_2fobject2d_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Object2D

// string id = 1;
inline void Object2D::clear_id() {
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Object2D::id() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object2D.id)
  return id_.GetNoArena();
}
inline void Object2D::set_id(const ::std::string& value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Object2D.id)
}
#if LANG_CXX11
inline void Object2D::set_id(::std::string&& value) {
  
  id_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.dataStructure.Object2D.id)
}
#endif
inline void Object2D::set_id(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Object2D.id)
}
inline void Object2D::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Object2D.id)
}
inline ::std::string* Object2D::mutable_id() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object2D.id)
  return id_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Object2D::release_id() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object2D.id)
  
  return id_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object2D::set_allocated_id(::std::string* id) {
  if (id != NULL) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object2D.id)
}

// .ubii.dataStructure.Pose2D pose = 2;
inline bool Object2D::has_pose() const {
  return this != internal_default_instance() && pose_ != NULL;
}
inline const ::ubii::dataStructure::Pose2D& Object2D::_internal_pose() const {
  return *pose_;
}
inline const ::ubii::dataStructure::Pose2D& Object2D::pose() const {
  const ::ubii::dataStructure::Pose2D* p = pose_;
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object2D.pose)
  return p != NULL ? *p : *reinterpret_cast<const ::ubii::dataStructure::Pose2D*>(
      &::ubii::dataStructure::_Pose2D_default_instance_);
}
inline ::ubii::dataStructure::Pose2D* Object2D::release_pose() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object2D.pose)
  
  ::ubii::dataStructure::Pose2D* temp = pose_;
  pose_ = NULL;
  return temp;
}
inline ::ubii::dataStructure::Pose2D* Object2D::mutable_pose() {
  
  if (pose_ == NULL) {
    auto* p = CreateMaybeMessage<::ubii::dataStructure::Pose2D>(GetArenaNoVirtual());
    pose_ = p;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object2D.pose)
  return pose_;
}
inline void Object2D::set_allocated_pose(::ubii::dataStructure::Pose2D* pose) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(pose_);
  }
  if (pose) {
    ::google::protobuf::Arena* submessage_arena = NULL;
    if (message_arena != submessage_arena) {
      pose = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, pose, submessage_arena);
    }
    
  } else {
    
  }
  pose_ = pose;
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object2D.pose)
}

// .ubii.dataStructure.Vector2 size = 3;
inline bool Object2D::has_size() const {
  return this != internal_default_instance() && size_ != NULL;
}
inline const ::ubii::dataStructure::Vector2& Object2D::_internal_size() const {
  return *size_;
}
inline const ::ubii::dataStructure::Vector2& Object2D::size() const {
  const ::ubii::dataStructure::Vector2* p = size_;
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object2D.size)
  return p != NULL ? *p : *reinterpret_cast<const ::ubii::dataStructure::Vector2*>(
      &::ubii::dataStructure::_Vector2_default_instance_);
}
inline ::ubii::dataStructure::Vector2* Object2D::release_size() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object2D.size)
  
  ::ubii::dataStructure::Vector2* temp = size_;
  size_ = NULL;
  return temp;
}
inline ::ubii::dataStructure::Vector2* Object2D::mutable_size() {
  
  if (size_ == NULL) {
    auto* p = CreateMaybeMessage<::ubii::dataStructure::Vector2>(GetArenaNoVirtual());
    size_ = p;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object2D.size)
  return size_;
}
inline void Object2D::set_allocated_size(::ubii::dataStructure::Vector2* size) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == NULL) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(size_);
  }
  if (size) {
    ::google::protobuf::Arena* submessage_arena = NULL;
    if (message_arena != submessage_arena) {
      size = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, size, submessage_arena);
    }
    
  } else {
    
  }
  size_ = size;
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object2D.size)
}

// string user_data_json = 4;
inline void Object2D::clear_user_data_json() {
  user_data_json_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Object2D::user_data_json() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object2D.user_data_json)
  return user_data_json_.GetNoArena();
}
inline void Object2D::set_user_data_json(const ::std::string& value) {
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Object2D.user_data_json)
}
#if LANG_CXX11
inline void Object2D::set_user_data_json(::std::string&& value) {
  
  user_data_json_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.dataStructure.Object2D.user_data_json)
}
#endif
inline void Object2D::set_user_data_json(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Object2D.user_data_json)
}
inline void Object2D::set_user_data_json(const char* value, size_t size) {
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Object2D.user_data_json)
}
inline ::std::string* Object2D::mutable_user_data_json() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object2D.user_data_json)
  return user_data_json_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Object2D::release_user_data_json() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object2D.user_data_json)
  
  return user_data_json_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object2D::set_allocated_user_data_json(::std::string* user_data_json) {
  if (user_data_json != NULL) {
    
  } else {
    
  }
  user_data_json_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), user_data_json);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object2D.user_data_json)
}

// -------------------------------------------------------------------

// Object2DList

// repeated .ubii.dataStructure.Object2D elements = 1;
inline int Object2DList::elements_size() const {
  return elements_.size();
}
inline void Object2DList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::dataStructure::Object2D* Object2DList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object2DList.elements)
  return elements_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object2D >*
Object2DList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Object2DList.elements)
  return &elements_;
}
inline const ::ubii::dataStructure::Object2D& Object2DList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object2DList.elements)
  return elements_.Get(index);
}
inline ::ubii::dataStructure::Object2D* Object2DList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Object2DList.elements)
  return elements_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object2D >&
Object2DList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Object2DList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_INCLUDED_proto_2fdataStructure_2fobject2d_2eproto
