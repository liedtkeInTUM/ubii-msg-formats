// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/matrix3x2.proto

#ifndef PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto__INCLUDED
#define PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto__INCLUDED

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
// @@protoc_insertion_point(includes)

namespace ubii {
namespace dataStructure {

// Internal implementation detail -- do not call these.
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();
void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();

class Matrix3x2;

// ===================================================================

class Matrix3x2 : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Matrix3x2) */ {
 public:
  Matrix3x2();
  virtual ~Matrix3x2();

  Matrix3x2(const Matrix3x2& from);

  inline Matrix3x2& operator=(const Matrix3x2& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const Matrix3x2& default_instance();

  void Swap(Matrix3x2* other);

  // implements Message ----------------------------------------------

  inline Matrix3x2* New() const { return New(NULL); }

  Matrix3x2* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const Matrix3x2& from);
  void MergeFrom(const Matrix3x2& from);
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
  void InternalSwap(Matrix3x2* other);
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

  // optional double m00 = 1;
  void clear_m00();
  static const int kM00FieldNumber = 1;
  double m00() const;
  void set_m00(double value);

  // optional double m01 = 2;
  void clear_m01();
  static const int kM01FieldNumber = 2;
  double m01() const;
  void set_m01(double value);

  // optional double m10 = 3;
  void clear_m10();
  static const int kM10FieldNumber = 3;
  double m10() const;
  void set_m10(double value);

  // optional double m11 = 4;
  void clear_m11();
  static const int kM11FieldNumber = 4;
  double m11() const;
  void set_m11(double value);

  // optional double m20 = 5;
  void clear_m20();
  static const int kM20FieldNumber = 5;
  double m20() const;
  void set_m20(double value);

  // optional double m21 = 6;
  void clear_m21();
  static const int kM21FieldNumber = 6;
  double m21() const;
  void set_m21(double value);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Matrix3x2)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  double m00_;
  double m01_;
  double m10_;
  double m11_;
  double m20_;
  double m21_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto();

  void InitAsDefaultInstance();
  static Matrix3x2* default_instance_;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// Matrix3x2

// optional double m00 = 1;
inline void Matrix3x2::clear_m00() {
  m00_ = 0;
}
inline double Matrix3x2::m00() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m00)
  return m00_;
}
inline void Matrix3x2::set_m00(double value) {
  
  m00_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m00)
}

// optional double m01 = 2;
inline void Matrix3x2::clear_m01() {
  m01_ = 0;
}
inline double Matrix3x2::m01() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m01)
  return m01_;
}
inline void Matrix3x2::set_m01(double value) {
  
  m01_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m01)
}

// optional double m10 = 3;
inline void Matrix3x2::clear_m10() {
  m10_ = 0;
}
inline double Matrix3x2::m10() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m10)
  return m10_;
}
inline void Matrix3x2::set_m10(double value) {
  
  m10_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m10)
}

// optional double m11 = 4;
inline void Matrix3x2::clear_m11() {
  m11_ = 0;
}
inline double Matrix3x2::m11() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m11)
  return m11_;
}
inline void Matrix3x2::set_m11(double value) {
  
  m11_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m11)
}

// optional double m20 = 5;
inline void Matrix3x2::clear_m20() {
  m20_ = 0;
}
inline double Matrix3x2::m20() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m20)
  return m20_;
}
inline void Matrix3x2::set_m20(double value) {
  
  m20_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m20)
}

// optional double m21 = 6;
inline void Matrix3x2::clear_m21() {
  m21_ = 0;
}
inline double Matrix3x2::m21() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Matrix3x2.m21)
  return m21_;
}
inline void Matrix3x2::set_m21(double value) {
  
  m21_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Matrix3x2.m21)
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2fmatrix3x2_2eproto__INCLUDED
