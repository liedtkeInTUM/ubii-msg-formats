// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/myoEvent.proto

#ifndef PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto__INCLUDED
#define PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto__INCLUDED

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
#include "proto/topicData/topicDataRecord/dataStructure/vector8.pb.h"
#include "proto/topicData/topicDataRecord/dataStructure/vector3.pb.h"
#include "proto/topicData/topicDataRecord/dataStructure/quaternion.pb.h"
#include "proto/topicData/topicDataRecord/dataStructure/handGestureType.pb.h"
// @@protoc_insertion_point(includes)

namespace ubii {
namespace dataStructure {

// Internal implementation detail -- do not call these.
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();
void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();

class MyoEvent;

// ===================================================================

class MyoEvent : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.MyoEvent) */ {
 public:
  MyoEvent();
  virtual ~MyoEvent();

  MyoEvent(const MyoEvent& from);

  inline MyoEvent& operator=(const MyoEvent& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const MyoEvent& default_instance();

  void Swap(MyoEvent* other);

  // implements Message ----------------------------------------------

  inline MyoEvent* New() const { return New(NULL); }

  MyoEvent* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const MyoEvent& from);
  void MergeFrom(const MyoEvent& from);
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
  void InternalSwap(MyoEvent* other);
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

  // optional .ubii.dataStructure.Vector8 emg = 1;
  bool has_emg() const;
  void clear_emg();
  static const int kEmgFieldNumber = 1;
  const ::ubii::dataStructure::Vector8& emg() const;
  ::ubii::dataStructure::Vector8* mutable_emg();
  ::ubii::dataStructure::Vector8* release_emg();
  void set_allocated_emg(::ubii::dataStructure::Vector8* emg);

  // optional .ubii.dataStructure.Quaternion orientation = 2;
  bool has_orientation() const;
  void clear_orientation();
  static const int kOrientationFieldNumber = 2;
  const ::ubii::dataStructure::Quaternion& orientation() const;
  ::ubii::dataStructure::Quaternion* mutable_orientation();
  ::ubii::dataStructure::Quaternion* release_orientation();
  void set_allocated_orientation(::ubii::dataStructure::Quaternion* orientation);

  // optional .ubii.dataStructure.Vector3 gyroscope = 3;
  bool has_gyroscope() const;
  void clear_gyroscope();
  static const int kGyroscopeFieldNumber = 3;
  const ::ubii::dataStructure::Vector3& gyroscope() const;
  ::ubii::dataStructure::Vector3* mutable_gyroscope();
  ::ubii::dataStructure::Vector3* release_gyroscope();
  void set_allocated_gyroscope(::ubii::dataStructure::Vector3* gyroscope);

  // optional .ubii.dataStructure.Vector3 accelerometer = 4;
  bool has_accelerometer() const;
  void clear_accelerometer();
  static const int kAccelerometerFieldNumber = 4;
  const ::ubii::dataStructure::Vector3& accelerometer() const;
  ::ubii::dataStructure::Vector3* mutable_accelerometer();
  ::ubii::dataStructure::Vector3* release_accelerometer();
  void set_allocated_accelerometer(::ubii::dataStructure::Vector3* accelerometer);

  // optional .ubii.dataStructure.HandGestureType gesture = 5;
  void clear_gesture();
  static const int kGestureFieldNumber = 5;
  ::ubii::dataStructure::HandGestureType gesture() const;
  void set_gesture(::ubii::dataStructure::HandGestureType value);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.MyoEvent)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::ubii::dataStructure::Vector8* emg_;
  ::ubii::dataStructure::Quaternion* orientation_;
  ::ubii::dataStructure::Vector3* gyroscope_;
  ::ubii::dataStructure::Vector3* accelerometer_;
  int gesture_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto();

  void InitAsDefaultInstance();
  static MyoEvent* default_instance_;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// MyoEvent

// optional .ubii.dataStructure.Vector8 emg = 1;
inline bool MyoEvent::has_emg() const {
  return !_is_default_instance_ && emg_ != NULL;
}
inline void MyoEvent::clear_emg() {
  if (GetArenaNoVirtual() == NULL && emg_ != NULL) delete emg_;
  emg_ = NULL;
}
inline const ::ubii::dataStructure::Vector8& MyoEvent::emg() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MyoEvent.emg)
  return emg_ != NULL ? *emg_ : *default_instance_->emg_;
}
inline ::ubii::dataStructure::Vector8* MyoEvent::mutable_emg() {
  
  if (emg_ == NULL) {
    emg_ = new ::ubii::dataStructure::Vector8;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.MyoEvent.emg)
  return emg_;
}
inline ::ubii::dataStructure::Vector8* MyoEvent::release_emg() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.MyoEvent.emg)
  
  ::ubii::dataStructure::Vector8* temp = emg_;
  emg_ = NULL;
  return temp;
}
inline void MyoEvent::set_allocated_emg(::ubii::dataStructure::Vector8* emg) {
  delete emg_;
  emg_ = emg;
  if (emg) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.MyoEvent.emg)
}

// optional .ubii.dataStructure.Quaternion orientation = 2;
inline bool MyoEvent::has_orientation() const {
  return !_is_default_instance_ && orientation_ != NULL;
}
inline void MyoEvent::clear_orientation() {
  if (GetArenaNoVirtual() == NULL && orientation_ != NULL) delete orientation_;
  orientation_ = NULL;
}
inline const ::ubii::dataStructure::Quaternion& MyoEvent::orientation() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MyoEvent.orientation)
  return orientation_ != NULL ? *orientation_ : *default_instance_->orientation_;
}
inline ::ubii::dataStructure::Quaternion* MyoEvent::mutable_orientation() {
  
  if (orientation_ == NULL) {
    orientation_ = new ::ubii::dataStructure::Quaternion;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.MyoEvent.orientation)
  return orientation_;
}
inline ::ubii::dataStructure::Quaternion* MyoEvent::release_orientation() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.MyoEvent.orientation)
  
  ::ubii::dataStructure::Quaternion* temp = orientation_;
  orientation_ = NULL;
  return temp;
}
inline void MyoEvent::set_allocated_orientation(::ubii::dataStructure::Quaternion* orientation) {
  delete orientation_;
  orientation_ = orientation;
  if (orientation) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.MyoEvent.orientation)
}

// optional .ubii.dataStructure.Vector3 gyroscope = 3;
inline bool MyoEvent::has_gyroscope() const {
  return !_is_default_instance_ && gyroscope_ != NULL;
}
inline void MyoEvent::clear_gyroscope() {
  if (GetArenaNoVirtual() == NULL && gyroscope_ != NULL) delete gyroscope_;
  gyroscope_ = NULL;
}
inline const ::ubii::dataStructure::Vector3& MyoEvent::gyroscope() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MyoEvent.gyroscope)
  return gyroscope_ != NULL ? *gyroscope_ : *default_instance_->gyroscope_;
}
inline ::ubii::dataStructure::Vector3* MyoEvent::mutable_gyroscope() {
  
  if (gyroscope_ == NULL) {
    gyroscope_ = new ::ubii::dataStructure::Vector3;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.MyoEvent.gyroscope)
  return gyroscope_;
}
inline ::ubii::dataStructure::Vector3* MyoEvent::release_gyroscope() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.MyoEvent.gyroscope)
  
  ::ubii::dataStructure::Vector3* temp = gyroscope_;
  gyroscope_ = NULL;
  return temp;
}
inline void MyoEvent::set_allocated_gyroscope(::ubii::dataStructure::Vector3* gyroscope) {
  delete gyroscope_;
  gyroscope_ = gyroscope;
  if (gyroscope) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.MyoEvent.gyroscope)
}

// optional .ubii.dataStructure.Vector3 accelerometer = 4;
inline bool MyoEvent::has_accelerometer() const {
  return !_is_default_instance_ && accelerometer_ != NULL;
}
inline void MyoEvent::clear_accelerometer() {
  if (GetArenaNoVirtual() == NULL && accelerometer_ != NULL) delete accelerometer_;
  accelerometer_ = NULL;
}
inline const ::ubii::dataStructure::Vector3& MyoEvent::accelerometer() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MyoEvent.accelerometer)
  return accelerometer_ != NULL ? *accelerometer_ : *default_instance_->accelerometer_;
}
inline ::ubii::dataStructure::Vector3* MyoEvent::mutable_accelerometer() {
  
  if (accelerometer_ == NULL) {
    accelerometer_ = new ::ubii::dataStructure::Vector3;
  }
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.MyoEvent.accelerometer)
  return accelerometer_;
}
inline ::ubii::dataStructure::Vector3* MyoEvent::release_accelerometer() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.MyoEvent.accelerometer)
  
  ::ubii::dataStructure::Vector3* temp = accelerometer_;
  accelerometer_ = NULL;
  return temp;
}
inline void MyoEvent::set_allocated_accelerometer(::ubii::dataStructure::Vector3* accelerometer) {
  delete accelerometer_;
  accelerometer_ = accelerometer;
  if (accelerometer) {
    
  } else {
    
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.MyoEvent.accelerometer)
}

// optional .ubii.dataStructure.HandGestureType gesture = 5;
inline void MyoEvent::clear_gesture() {
  gesture_ = 0;
}
inline ::ubii::dataStructure::HandGestureType MyoEvent::gesture() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.MyoEvent.gesture)
  return static_cast< ::ubii::dataStructure::HandGestureType >(gesture_);
}
inline void MyoEvent::set_gesture(::ubii::dataStructure::HandGestureType value) {
  
  gesture_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.MyoEvent.gesture)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmyoEvent_2eproto__INCLUDED
