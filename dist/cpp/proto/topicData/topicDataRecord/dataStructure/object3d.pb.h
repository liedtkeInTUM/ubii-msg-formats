// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/object3d.proto

#ifndef PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto__INCLUDED
#define PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto__INCLUDED

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
#include "proto/topicData/topicDataRecord/dataStructure/pose3d.pb.h"
#include "proto/topicData/topicDataRecord/dataStructure/vector3.pb.h"
// @@protoc_insertion_point(includes)

namespace ubii {
namespace dataStructure {

// Internal implementation detail -- do not call these.
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();

class Object3D;
class Object3DList;

// ===================================================================

class Object3D : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Object3D) */ {
 public:
  Object3D();
  virtual ~Object3D();

  Object3D(const Object3D& from);

  inline Object3D& operator=(const Object3D& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const Object3D& default_instance();

  void Swap(Object3D* other);

  // implements Message ----------------------------------------------

  inline Object3D* New() const { return New(NULL); }

  Object3D* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const Object3D& from);
  void MergeFrom(const Object3D& from);
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
  void InternalSwap(Object3D* other);
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

  // optional string id = 1;
  void clear_id();
  static const int kIdFieldNumber = 1;
  const ::std::string& id() const;
  void set_id(const ::std::string& value);
  void set_id(const char* value);
  void set_id(const char* value, size_t size);
  ::std::string* mutable_id();
  ::std::string* release_id();
  void set_allocated_id(::std::string* id);

  // optional .ubii.dataStructure.Pose3D pose = 2;
  bool has_pose() const;
  void clear_pose();
  static const int kPoseFieldNumber = 2;
  const ::ubii::dataStructure::Pose3D& pose() const;
  ::ubii::dataStructure::Pose3D* mutable_pose();
  ::ubii::dataStructure::Pose3D* release_pose();
  void set_allocated_pose(::ubii::dataStructure::Pose3D* pose);

  // optional .ubii.dataStructure.Vector3 size = 3;
  bool has_size() const;
  void clear_size();
  static const int kSizeFieldNumber = 3;
  const ::ubii::dataStructure::Vector3& size() const;
  ::ubii::dataStructure::Vector3* mutable_size();
  ::ubii::dataStructure::Vector3* release_size();
  void set_allocated_size(::ubii::dataStructure::Vector3* size);

  // optional string user_data_json = 4;
  void clear_user_data_json();
  static const int kUserDataJsonFieldNumber = 4;
  const ::std::string& user_data_json() const;
  void set_user_data_json(const ::std::string& value);
  void set_user_data_json(const char* value);
  void set_user_data_json(const char* value, size_t size);
  ::std::string* mutable_user_data_json();
  ::std::string* release_user_data_json();
  void set_allocated_user_data_json(::std::string* user_data_json);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Object3D)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::internal::ArenaStringPtr id_;
  ::ubii::dataStructure::Pose3D* pose_;
  ::ubii::dataStructure::Vector3* size_;
  ::google::protobuf::internal::ArenaStringPtr user_data_json_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();

  void InitAsDefaultInstance();
  static Object3D* default_instance_;
};
// -------------------------------------------------------------------

class Object3DList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Object3DList) */ {
 public:
  Object3DList();
  virtual ~Object3DList();

  Object3DList(const Object3DList& from);

  inline Object3DList& operator=(const Object3DList& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const Object3DList& default_instance();

  void Swap(Object3DList* other);

  // implements Message ----------------------------------------------

  inline Object3DList* New() const { return New(NULL); }

  Object3DList* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const Object3DList& from);
  void MergeFrom(const Object3DList& from);
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
  void InternalSwap(Object3DList* other);
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

  // repeated .ubii.dataStructure.Object3D elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  const ::ubii::dataStructure::Object3D& elements(int index) const;
  ::ubii::dataStructure::Object3D* mutable_elements(int index);
  ::ubii::dataStructure::Object3D* add_elements();
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object3D >*
      mutable_elements();
  const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object3D >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Object3DList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object3D > elements_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto();

  void InitAsDefaultInstance();
  static Object3DList* default_instance_;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// Object3D

// optional string id = 1;
inline void Object3D::clear_id() {
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Object3D::id() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object3D.id)
  return id_.GetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object3D::set_id(const ::std::string& value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Object3D.id)
}
inline void Object3D::set_id(const char* value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Object3D.id)
}
inline void Object3D::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Object3D.id)
}
inline ::std::string* Object3D::mutable_id() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object3D.id)
  return id_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Object3D::release_id() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object3D.id)
  
  return id_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object3D::set_allocated_id(::std::string* id) {
  if (id != NULL) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object3D.id)
}

// optional .ubii.dataStructure.Pose3D pose = 2;
inline bool Object3D::has_pose() const {
  return !_is_default_instance_ && pose_ != NULL;
}
inline void Object3D::clear_pose() {
  if (GetArenaNoVirtual() == NULL && pose_ != NULL) delete pose_;
  pose_ = NULL;
}
inline const ::ubii::dataStructure::Pose3D& Object3D::pose() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object3D.pose)
  return pose_ != NULL ? *pose_ : *default_instance_->pose_;
}
inline ::ubii::dataStructure::Pose3D* Object3D::mutable_pose() {
  
  if (pose_ == NULL) {
    pose_ = new ::ubii::dataStructure::Pose3D;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object3D.pose)
  return pose_;
}
inline ::ubii::dataStructure::Pose3D* Object3D::release_pose() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object3D.pose)
  
  ::ubii::dataStructure::Pose3D* temp = pose_;
  pose_ = NULL;
  return temp;
}
inline void Object3D::set_allocated_pose(::ubii::dataStructure::Pose3D* pose) {
  delete pose_;
  pose_ = pose;
  if (pose) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object3D.pose)
}

// optional .ubii.dataStructure.Vector3 size = 3;
inline bool Object3D::has_size() const {
  return !_is_default_instance_ && size_ != NULL;
}
inline void Object3D::clear_size() {
  if (GetArenaNoVirtual() == NULL && size_ != NULL) delete size_;
  size_ = NULL;
}
inline const ::ubii::dataStructure::Vector3& Object3D::size() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object3D.size)
  return size_ != NULL ? *size_ : *default_instance_->size_;
}
inline ::ubii::dataStructure::Vector3* Object3D::mutable_size() {
  
  if (size_ == NULL) {
    size_ = new ::ubii::dataStructure::Vector3;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object3D.size)
  return size_;
}
inline ::ubii::dataStructure::Vector3* Object3D::release_size() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object3D.size)
  
  ::ubii::dataStructure::Vector3* temp = size_;
  size_ = NULL;
  return temp;
}
inline void Object3D::set_allocated_size(::ubii::dataStructure::Vector3* size) {
  delete size_;
  size_ = size;
  if (size) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object3D.size)
}

// optional string user_data_json = 4;
inline void Object3D::clear_user_data_json() {
  user_data_json_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Object3D::user_data_json() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object3D.user_data_json)
  return user_data_json_.GetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object3D::set_user_data_json(const ::std::string& value) {
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Object3D.user_data_json)
}
inline void Object3D::set_user_data_json(const char* value) {
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Object3D.user_data_json)
}
inline void Object3D::set_user_data_json(const char* value, size_t size) {
  
  user_data_json_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Object3D.user_data_json)
}
inline ::std::string* Object3D::mutable_user_data_json() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object3D.user_data_json)
  return user_data_json_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Object3D::release_user_data_json() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Object3D.user_data_json)
  
  return user_data_json_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Object3D::set_allocated_user_data_json(::std::string* user_data_json) {
  if (user_data_json != NULL) {
    
  } else {
    
  }
  user_data_json_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), user_data_json);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Object3D.user_data_json)
}

// -------------------------------------------------------------------

// Object3DList

// repeated .ubii.dataStructure.Object3D elements = 1;
inline int Object3DList::elements_size() const {
  return elements_.size();
}
inline void Object3DList::clear_elements() {
  elements_.Clear();
}
inline const ::ubii::dataStructure::Object3D& Object3DList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Object3DList.elements)
  return elements_.Get(index);
}
inline ::ubii::dataStructure::Object3D* Object3DList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Object3DList.elements)
  return elements_.Mutable(index);
}
inline ::ubii::dataStructure::Object3D* Object3DList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Object3DList.elements)
  return elements_.Add();
}
inline ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object3D >*
Object3DList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Object3DList.elements)
  return &elements_;
}
inline const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Object3D >&
Object3DList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Object3DList.elements)
  return elements_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fobject3d_2eproto__INCLUDED
