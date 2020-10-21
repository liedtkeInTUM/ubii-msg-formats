// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/lists.proto

#ifndef PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto__INCLUDED
#define PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto__INCLUDED

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
void protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

class BoolList;
class DoubleList;
class FloatList;
class Int32List;
class StringList;

// ===================================================================

class StringList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.StringList) */ {
 public:
  StringList();
  virtual ~StringList();

  StringList(const StringList& from);

  inline StringList& operator=(const StringList& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const StringList& default_instance();

  void Swap(StringList* other);

  // implements Message ----------------------------------------------

  inline StringList* New() const { return New(NULL); }

  StringList* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const StringList& from);
  void MergeFrom(const StringList& from);
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
  void InternalSwap(StringList* other);
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

  // repeated string elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  const ::std::string& elements(int index) const;
  ::std::string* mutable_elements(int index);
  void set_elements(int index, const ::std::string& value);
  void set_elements(int index, const char* value);
  void set_elements(int index, const char* value, size_t size);
  ::std::string* add_elements();
  void add_elements(const ::std::string& value);
  void add_elements(const char* value);
  void add_elements(const char* value, size_t size);
  const ::google::protobuf::RepeatedPtrField< ::std::string>& elements() const;
  ::google::protobuf::RepeatedPtrField< ::std::string>* mutable_elements();

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.StringList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedPtrField< ::std::string> elements_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

  void InitAsDefaultInstance();
  static StringList* default_instance_;
};
// -------------------------------------------------------------------

class DoubleList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.DoubleList) */ {
 public:
  DoubleList();
  virtual ~DoubleList();

  DoubleList(const DoubleList& from);

  inline DoubleList& operator=(const DoubleList& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const DoubleList& default_instance();

  void Swap(DoubleList* other);

  // implements Message ----------------------------------------------

  inline DoubleList* New() const { return New(NULL); }

  DoubleList* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const DoubleList& from);
  void MergeFrom(const DoubleList& from);
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
  void InternalSwap(DoubleList* other);
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

  // repeated double elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  double elements(int index) const;
  void set_elements(int index, double value);
  void add_elements(double value);
  const ::google::protobuf::RepeatedField< double >&
      elements() const;
  ::google::protobuf::RepeatedField< double >*
      mutable_elements();

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.DoubleList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedField< double > elements_;
  mutable int _elements_cached_byte_size_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

  void InitAsDefaultInstance();
  static DoubleList* default_instance_;
};
// -------------------------------------------------------------------

class FloatList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.FloatList) */ {
 public:
  FloatList();
  virtual ~FloatList();

  FloatList(const FloatList& from);

  inline FloatList& operator=(const FloatList& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const FloatList& default_instance();

  void Swap(FloatList* other);

  // implements Message ----------------------------------------------

  inline FloatList* New() const { return New(NULL); }

  FloatList* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const FloatList& from);
  void MergeFrom(const FloatList& from);
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
  void InternalSwap(FloatList* other);
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

  // repeated float elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  float elements(int index) const;
  void set_elements(int index, float value);
  void add_elements(float value);
  const ::google::protobuf::RepeatedField< float >&
      elements() const;
  ::google::protobuf::RepeatedField< float >*
      mutable_elements();

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.FloatList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedField< float > elements_;
  mutable int _elements_cached_byte_size_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

  void InitAsDefaultInstance();
  static FloatList* default_instance_;
};
// -------------------------------------------------------------------

class BoolList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.BoolList) */ {
 public:
  BoolList();
  virtual ~BoolList();

  BoolList(const BoolList& from);

  inline BoolList& operator=(const BoolList& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const BoolList& default_instance();

  void Swap(BoolList* other);

  // implements Message ----------------------------------------------

  inline BoolList* New() const { return New(NULL); }

  BoolList* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const BoolList& from);
  void MergeFrom(const BoolList& from);
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
  void InternalSwap(BoolList* other);
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

  // repeated bool elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  bool elements(int index) const;
  void set_elements(int index, bool value);
  void add_elements(bool value);
  const ::google::protobuf::RepeatedField< bool >&
      elements() const;
  ::google::protobuf::RepeatedField< bool >*
      mutable_elements();

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.BoolList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedField< bool > elements_;
  mutable int _elements_cached_byte_size_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

  void InitAsDefaultInstance();
  static BoolList* default_instance_;
};
// -------------------------------------------------------------------

class Int32List : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Int32List) */ {
 public:
  Int32List();
  virtual ~Int32List();

  Int32List(const Int32List& from);

  inline Int32List& operator=(const Int32List& from) {
    CopyFrom(from);
    return *this;
  }

  static const ::google::protobuf::Descriptor* descriptor();
  static const Int32List& default_instance();

  void Swap(Int32List* other);

  // implements Message ----------------------------------------------

  inline Int32List* New() const { return New(NULL); }

  Int32List* New(::google::protobuf::Arena* arena) const;
  void CopyFrom(const ::google::protobuf::Message& from);
  void MergeFrom(const ::google::protobuf::Message& from);
  void CopyFrom(const Int32List& from);
  void MergeFrom(const Int32List& from);
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
  void InternalSwap(Int32List* other);
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

  // repeated int32 elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  ::google::protobuf::int32 elements(int index) const;
  void set_elements(int index, ::google::protobuf::int32 value);
  void add_elements(::google::protobuf::int32 value);
  const ::google::protobuf::RepeatedField< ::google::protobuf::int32 >&
      elements() const;
  ::google::protobuf::RepeatedField< ::google::protobuf::int32 >*
      mutable_elements();

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Int32List)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  bool _is_default_instance_;
  ::google::protobuf::RepeatedField< ::google::protobuf::int32 > elements_;
  mutable int _elements_cached_byte_size_;
  mutable int _cached_size_;
  friend void  protobuf_AddDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_AssignDesc_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();
  friend void protobuf_ShutdownFile_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto();

  void InitAsDefaultInstance();
  static Int32List* default_instance_;
};
// ===================================================================


// ===================================================================

#if !PROTOBUF_INLINE_NOT_IN_HEADERS
// StringList

// repeated string elements = 1;
inline int StringList::elements_size() const {
  return elements_.size();
}
inline void StringList::clear_elements() {
  elements_.Clear();
}
inline const ::std::string& StringList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.StringList.elements)
  return elements_.Get(index);
}
inline ::std::string* StringList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.StringList.elements)
  return elements_.Mutable(index);
}
inline void StringList::set_elements(int index, const ::std::string& value) {
  // @@protoc_insertion_point(field_set:ubii.dataStructure.StringList.elements)
  elements_.Mutable(index)->assign(value);
}
inline void StringList::set_elements(int index, const char* value) {
  elements_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.StringList.elements)
}
inline void StringList::set_elements(int index, const char* value, size_t size) {
  elements_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.StringList.elements)
}
inline ::std::string* StringList::add_elements() {
  // @@protoc_insertion_point(field_add_mutable:ubii.dataStructure.StringList.elements)
  return elements_.Add();
}
inline void StringList::add_elements(const ::std::string& value) {
  elements_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:ubii.dataStructure.StringList.elements)
}
inline void StringList::add_elements(const char* value) {
  elements_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:ubii.dataStructure.StringList.elements)
}
inline void StringList::add_elements(const char* value, size_t size) {
  elements_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:ubii.dataStructure.StringList.elements)
}
inline const ::google::protobuf::RepeatedPtrField< ::std::string>&
StringList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.StringList.elements)
  return elements_;
}
inline ::google::protobuf::RepeatedPtrField< ::std::string>*
StringList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.StringList.elements)
  return &elements_;
}

// -------------------------------------------------------------------

// DoubleList

// repeated double elements = 1;
inline int DoubleList::elements_size() const {
  return elements_.size();
}
inline void DoubleList::clear_elements() {
  elements_.Clear();
}
inline double DoubleList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.DoubleList.elements)
  return elements_.Get(index);
}
inline void DoubleList::set_elements(int index, double value) {
  elements_.Set(index, value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.DoubleList.elements)
}
inline void DoubleList::add_elements(double value) {
  elements_.Add(value);
  // @@protoc_insertion_point(field_add:ubii.dataStructure.DoubleList.elements)
}
inline const ::google::protobuf::RepeatedField< double >&
DoubleList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.DoubleList.elements)
  return elements_;
}
inline ::google::protobuf::RepeatedField< double >*
DoubleList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.DoubleList.elements)
  return &elements_;
}

// -------------------------------------------------------------------

// FloatList

// repeated float elements = 1;
inline int FloatList::elements_size() const {
  return elements_.size();
}
inline void FloatList::clear_elements() {
  elements_.Clear();
}
inline float FloatList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.FloatList.elements)
  return elements_.Get(index);
}
inline void FloatList::set_elements(int index, float value) {
  elements_.Set(index, value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.FloatList.elements)
}
inline void FloatList::add_elements(float value) {
  elements_.Add(value);
  // @@protoc_insertion_point(field_add:ubii.dataStructure.FloatList.elements)
}
inline const ::google::protobuf::RepeatedField< float >&
FloatList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.FloatList.elements)
  return elements_;
}
inline ::google::protobuf::RepeatedField< float >*
FloatList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.FloatList.elements)
  return &elements_;
}

// -------------------------------------------------------------------

// BoolList

// repeated bool elements = 1;
inline int BoolList::elements_size() const {
  return elements_.size();
}
inline void BoolList::clear_elements() {
  elements_.Clear();
}
inline bool BoolList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.BoolList.elements)
  return elements_.Get(index);
}
inline void BoolList::set_elements(int index, bool value) {
  elements_.Set(index, value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.BoolList.elements)
}
inline void BoolList::add_elements(bool value) {
  elements_.Add(value);
  // @@protoc_insertion_point(field_add:ubii.dataStructure.BoolList.elements)
}
inline const ::google::protobuf::RepeatedField< bool >&
BoolList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.BoolList.elements)
  return elements_;
}
inline ::google::protobuf::RepeatedField< bool >*
BoolList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.BoolList.elements)
  return &elements_;
}

// -------------------------------------------------------------------

// Int32List

// repeated int32 elements = 1;
inline int Int32List::elements_size() const {
  return elements_.size();
}
inline void Int32List::clear_elements() {
  elements_.Clear();
}
inline ::google::protobuf::int32 Int32List::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Int32List.elements)
  return elements_.Get(index);
}
inline void Int32List::set_elements(int index, ::google::protobuf::int32 value) {
  elements_.Set(index, value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Int32List.elements)
}
inline void Int32List::add_elements(::google::protobuf::int32 value) {
  elements_.Add(value);
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Int32List.elements)
}
inline const ::google::protobuf::RepeatedField< ::google::protobuf::int32 >&
Int32List::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Int32List.elements)
  return elements_;
}
inline ::google::protobuf::RepeatedField< ::google::protobuf::int32 >*
Int32List::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Int32List.elements)
  return &elements_;
}

#endif  // !PROTOBUF_INLINE_NOT_IN_HEADERS
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_proto_2ftopicData_2ftopicDataRecord_2fdataStructure_2flists_2eproto__INCLUDED
