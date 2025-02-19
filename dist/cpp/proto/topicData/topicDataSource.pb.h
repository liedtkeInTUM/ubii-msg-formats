// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataSource.proto

#ifndef PROTOBUF_INCLUDED_proto_2ftopicData_2ftopicDataSource_2eproto
#define PROTOBUF_INCLUDED_proto_2ftopicData_2ftopicDataSource_2eproto

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
#include "proto/devices/component.pb.h"
#include "proto/topicData/topicDataRecord.pb.h"
// @@protoc_insertion_point(includes)
#define PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2ftopicData_2ftopicDataSource_2eproto 

namespace protobuf_proto_2ftopicData_2ftopicDataSource_2eproto {
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
}  // namespace protobuf_proto_2ftopicData_2ftopicDataSource_2eproto
namespace ubii {
namespace topicData {
class TopicDataSource;
class TopicDataSourceDefaultTypeInternal;
extern TopicDataSourceDefaultTypeInternal _TopicDataSource_default_instance_;
class TopicDataSourceList;
class TopicDataSourceListDefaultTypeInternal;
extern TopicDataSourceListDefaultTypeInternal _TopicDataSourceList_default_instance_;
}  // namespace topicData
}  // namespace ubii
namespace google {
namespace protobuf {
template<> ::ubii::topicData::TopicDataSource* Arena::CreateMaybeMessage<::ubii::topicData::TopicDataSource>(Arena*);
template<> ::ubii::topicData::TopicDataSourceList* Arena::CreateMaybeMessage<::ubii::topicData::TopicDataSourceList>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace ubii {
namespace topicData {

// ===================================================================

class TopicDataSource : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.topicData.TopicDataSource) */ {
 public:
  TopicDataSource();
  virtual ~TopicDataSource();

  TopicDataSource(const TopicDataSource& from);

  inline TopicDataSource& operator=(const TopicDataSource& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  TopicDataSource(TopicDataSource&& from) noexcept
    : TopicDataSource() {
    *this = ::std::move(from);
  }

  inline TopicDataSource& operator=(TopicDataSource&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const TopicDataSource& default_instance();

  enum TypeCase {
    kTopic = 1,
    kRegex = 2,
    kComponent = 3,
    kStaticRecord = 4,
    TYPE_NOT_SET = 0,
  };

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const TopicDataSource* internal_default_instance() {
    return reinterpret_cast<const TopicDataSource*>(
               &_TopicDataSource_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(TopicDataSource* other);
  friend void swap(TopicDataSource& a, TopicDataSource& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline TopicDataSource* New() const final {
    return CreateMaybeMessage<TopicDataSource>(NULL);
  }

  TopicDataSource* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<TopicDataSource>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const TopicDataSource& from);
  void MergeFrom(const TopicDataSource& from);
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
  void InternalSwap(TopicDataSource* other);
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

  // string topic = 1;
  private:
  bool has_topic() const;
  public:
  void clear_topic();
  static const int kTopicFieldNumber = 1;
  const ::std::string& topic() const;
  void set_topic(const ::std::string& value);
  #if LANG_CXX11
  void set_topic(::std::string&& value);
  #endif
  void set_topic(const char* value);
  void set_topic(const char* value, size_t size);
  ::std::string* mutable_topic();
  ::std::string* release_topic();
  void set_allocated_topic(::std::string* topic);

  // string regex = 2;
  private:
  bool has_regex() const;
  public:
  void clear_regex();
  static const int kRegexFieldNumber = 2;
  const ::std::string& regex() const;
  void set_regex(const ::std::string& value);
  #if LANG_CXX11
  void set_regex(::std::string&& value);
  #endif
  void set_regex(const char* value);
  void set_regex(const char* value, size_t size);
  ::std::string* mutable_regex();
  ::std::string* release_regex();
  void set_allocated_regex(::std::string* regex);

  // .ubii.devices.Component component = 3;
  bool has_component() const;
  void clear_component();
  static const int kComponentFieldNumber = 3;
  private:
  const ::ubii::devices::Component& _internal_component() const;
  public:
  const ::ubii::devices::Component& component() const;
  ::ubii::devices::Component* release_component();
  ::ubii::devices::Component* mutable_component();
  void set_allocated_component(::ubii::devices::Component* component);

  // .ubii.topicData.TopicDataRecord static_record = 4;
  bool has_static_record() const;
  void clear_static_record();
  static const int kStaticRecordFieldNumber = 4;
  private:
  const ::ubii::topicData::TopicDataRecord& _internal_static_record() const;
  public:
  const ::ubii::topicData::TopicDataRecord& static_record() const;
  ::ubii::topicData::TopicDataRecord* release_static_record();
  ::ubii::topicData::TopicDataRecord* mutable_static_record();
  void set_allocated_static_record(::ubii::topicData::TopicDataRecord* static_record);

  void clear_type();
  TypeCase type_case() const;
  // @@protoc_insertion_point(class_scope:ubii.topicData.TopicDataSource)
 private:
  void set_has_topic();
  void set_has_regex();
  void set_has_component();
  void set_has_static_record();

  inline bool has_type() const;
  inline void clear_has_type();

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  union TypeUnion {
    TypeUnion() {}
    ::google::protobuf::internal::ArenaStringPtr topic_;
    ::google::protobuf::internal::ArenaStringPtr regex_;
    ::ubii::devices::Component* component_;
    ::ubii::topicData::TopicDataRecord* static_record_;
  } type_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  ::google::protobuf::uint32 _oneof_case_[1];

  friend struct ::protobuf_proto_2ftopicData_2ftopicDataSource_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class TopicDataSourceList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.topicData.TopicDataSourceList) */ {
 public:
  TopicDataSourceList();
  virtual ~TopicDataSourceList();

  TopicDataSourceList(const TopicDataSourceList& from);

  inline TopicDataSourceList& operator=(const TopicDataSourceList& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  TopicDataSourceList(TopicDataSourceList&& from) noexcept
    : TopicDataSourceList() {
    *this = ::std::move(from);
  }

  inline TopicDataSourceList& operator=(TopicDataSourceList&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const TopicDataSourceList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const TopicDataSourceList* internal_default_instance() {
    return reinterpret_cast<const TopicDataSourceList*>(
               &_TopicDataSourceList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  void Swap(TopicDataSourceList* other);
  friend void swap(TopicDataSourceList& a, TopicDataSourceList& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline TopicDataSourceList* New() const final {
    return CreateMaybeMessage<TopicDataSourceList>(NULL);
  }

  TopicDataSourceList* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<TopicDataSourceList>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const TopicDataSourceList& from);
  void MergeFrom(const TopicDataSourceList& from);
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
  void InternalSwap(TopicDataSourceList* other);
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

  // repeated .ubii.topicData.TopicDataSource elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  ::ubii::topicData::TopicDataSource* mutable_elements(int index);
  ::google::protobuf::RepeatedPtrField< ::ubii::topicData::TopicDataSource >*
      mutable_elements();
  const ::ubii::topicData::TopicDataSource& elements(int index) const;
  ::ubii::topicData::TopicDataSource* add_elements();
  const ::google::protobuf::RepeatedPtrField< ::ubii::topicData::TopicDataSource >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.topicData.TopicDataSourceList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::ubii::topicData::TopicDataSource > elements_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2ftopicData_2ftopicDataSource_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// TopicDataSource

// string topic = 1;
inline bool TopicDataSource::has_topic() const {
  return type_case() == kTopic;
}
inline void TopicDataSource::set_has_topic() {
  _oneof_case_[0] = kTopic;
}
inline void TopicDataSource::clear_topic() {
  if (has_topic()) {
    type_.topic_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
    clear_has_type();
  }
}
inline const ::std::string& TopicDataSource::topic() const {
  // @@protoc_insertion_point(field_get:ubii.topicData.TopicDataSource.topic)
  if (has_topic()) {
    return type_.topic_.GetNoArena();
  }
  return *&::google::protobuf::internal::GetEmptyStringAlreadyInited();
}
inline void TopicDataSource::set_topic(const ::std::string& value) {
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.topic)
  if (!has_topic()) {
    clear_type();
    set_has_topic();
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.topic_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.topic)
}
#if LANG_CXX11
inline void TopicDataSource::set_topic(::std::string&& value) {
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.topic)
  if (!has_topic()) {
    clear_type();
    set_has_topic();
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.topic_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.topicData.TopicDataSource.topic)
}
#endif
inline void TopicDataSource::set_topic(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  if (!has_topic()) {
    clear_type();
    set_has_topic();
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.topic_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.topicData.TopicDataSource.topic)
}
inline void TopicDataSource::set_topic(const char* value, size_t size) {
  if (!has_topic()) {
    clear_type();
    set_has_topic();
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.topic_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.topicData.TopicDataSource.topic)
}
inline ::std::string* TopicDataSource::mutable_topic() {
  if (!has_topic()) {
    clear_type();
    set_has_topic();
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  // @@protoc_insertion_point(field_mutable:ubii.topicData.TopicDataSource.topic)
  return type_.topic_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* TopicDataSource::release_topic() {
  // @@protoc_insertion_point(field_release:ubii.topicData.TopicDataSource.topic)
  if (has_topic()) {
    clear_has_type();
    return type_.topic_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  } else {
    return NULL;
  }
}
inline void TopicDataSource::set_allocated_topic(::std::string* topic) {
  if (!has_topic()) {
    type_.topic_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clear_type();
  if (topic != NULL) {
    set_has_topic();
    type_.topic_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), topic);
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.topicData.TopicDataSource.topic)
}

// string regex = 2;
inline bool TopicDataSource::has_regex() const {
  return type_case() == kRegex;
}
inline void TopicDataSource::set_has_regex() {
  _oneof_case_[0] = kRegex;
}
inline void TopicDataSource::clear_regex() {
  if (has_regex()) {
    type_.regex_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
    clear_has_type();
  }
}
inline const ::std::string& TopicDataSource::regex() const {
  // @@protoc_insertion_point(field_get:ubii.topicData.TopicDataSource.regex)
  if (has_regex()) {
    return type_.regex_.GetNoArena();
  }
  return *&::google::protobuf::internal::GetEmptyStringAlreadyInited();
}
inline void TopicDataSource::set_regex(const ::std::string& value) {
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.regex)
  if (!has_regex()) {
    clear_type();
    set_has_regex();
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.regex_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.regex)
}
#if LANG_CXX11
inline void TopicDataSource::set_regex(::std::string&& value) {
  // @@protoc_insertion_point(field_set:ubii.topicData.TopicDataSource.regex)
  if (!has_regex()) {
    clear_type();
    set_has_regex();
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.regex_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.topicData.TopicDataSource.regex)
}
#endif
inline void TopicDataSource::set_regex(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  if (!has_regex()) {
    clear_type();
    set_has_regex();
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.regex_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.topicData.TopicDataSource.regex)
}
inline void TopicDataSource::set_regex(const char* value, size_t size) {
  if (!has_regex()) {
    clear_type();
    set_has_regex();
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  type_.regex_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.topicData.TopicDataSource.regex)
}
inline ::std::string* TopicDataSource::mutable_regex() {
  if (!has_regex()) {
    clear_type();
    set_has_regex();
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  // @@protoc_insertion_point(field_mutable:ubii.topicData.TopicDataSource.regex)
  return type_.regex_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* TopicDataSource::release_regex() {
  // @@protoc_insertion_point(field_release:ubii.topicData.TopicDataSource.regex)
  if (has_regex()) {
    clear_has_type();
    return type_.regex_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  } else {
    return NULL;
  }
}
inline void TopicDataSource::set_allocated_regex(::std::string* regex) {
  if (!has_regex()) {
    type_.regex_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clear_type();
  if (regex != NULL) {
    set_has_regex();
    type_.regex_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), regex);
  }
  // @@protoc_insertion_point(field_set_allocated:ubii.topicData.TopicDataSource.regex)
}

// .ubii.devices.Component component = 3;
inline bool TopicDataSource::has_component() const {
  return type_case() == kComponent;
}
inline void TopicDataSource::set_has_component() {
  _oneof_case_[0] = kComponent;
}
inline const ::ubii::devices::Component& TopicDataSource::_internal_component() const {
  return *type_.component_;
}
inline ::ubii::devices::Component* TopicDataSource::release_component() {
  // @@protoc_insertion_point(field_release:ubii.topicData.TopicDataSource.component)
  if (has_component()) {
    clear_has_type();
      ::ubii::devices::Component* temp = type_.component_;
    type_.component_ = NULL;
    return temp;
  } else {
    return NULL;
  }
}
inline const ::ubii::devices::Component& TopicDataSource::component() const {
  // @@protoc_insertion_point(field_get:ubii.topicData.TopicDataSource.component)
  return has_component()
      ? *type_.component_
      : *reinterpret_cast< ::ubii::devices::Component*>(&::ubii::devices::_Component_default_instance_);
}
inline ::ubii::devices::Component* TopicDataSource::mutable_component() {
  if (!has_component()) {
    clear_type();
    set_has_component();
    type_.component_ = CreateMaybeMessage< ::ubii::devices::Component >(
        GetArenaNoVirtual());
  }
  // @@protoc_insertion_point(field_mutable:ubii.topicData.TopicDataSource.component)
  return type_.component_;
}

// .ubii.topicData.TopicDataRecord static_record = 4;
inline bool TopicDataSource::has_static_record() const {
  return type_case() == kStaticRecord;
}
inline void TopicDataSource::set_has_static_record() {
  _oneof_case_[0] = kStaticRecord;
}
inline const ::ubii::topicData::TopicDataRecord& TopicDataSource::_internal_static_record() const {
  return *type_.static_record_;
}
inline ::ubii::topicData::TopicDataRecord* TopicDataSource::release_static_record() {
  // @@protoc_insertion_point(field_release:ubii.topicData.TopicDataSource.static_record)
  if (has_static_record()) {
    clear_has_type();
      ::ubii::topicData::TopicDataRecord* temp = type_.static_record_;
    type_.static_record_ = NULL;
    return temp;
  } else {
    return NULL;
  }
}
inline const ::ubii::topicData::TopicDataRecord& TopicDataSource::static_record() const {
  // @@protoc_insertion_point(field_get:ubii.topicData.TopicDataSource.static_record)
  return has_static_record()
      ? *type_.static_record_
      : *reinterpret_cast< ::ubii::topicData::TopicDataRecord*>(&::ubii::topicData::_TopicDataRecord_default_instance_);
}
inline ::ubii::topicData::TopicDataRecord* TopicDataSource::mutable_static_record() {
  if (!has_static_record()) {
    clear_type();
    set_has_static_record();
    type_.static_record_ = CreateMaybeMessage< ::ubii::topicData::TopicDataRecord >(
        GetArenaNoVirtual());
  }
  // @@protoc_insertion_point(field_mutable:ubii.topicData.TopicDataSource.static_record)
  return type_.static_record_;
}

inline bool TopicDataSource::has_type() const {
  return type_case() != TYPE_NOT_SET;
}
inline void TopicDataSource::clear_has_type() {
  _oneof_case_[0] = TYPE_NOT_SET;
}
inline TopicDataSource::TypeCase TopicDataSource::type_case() const {
  return TopicDataSource::TypeCase(_oneof_case_[0]);
}
// -------------------------------------------------------------------

// TopicDataSourceList

// repeated .ubii.topicData.TopicDataSource elements = 1;
inline int TopicDataSourceList::elements_size() const {
  return elements_.size();
}
inline void TopicDataSourceList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::topicData::TopicDataSource* TopicDataSourceList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.topicData.TopicDataSourceList.elements)
  return elements_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::ubii::topicData::TopicDataSource >*
TopicDataSourceList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.topicData.TopicDataSourceList.elements)
  return &elements_;
}
inline const ::ubii::topicData::TopicDataSource& TopicDataSourceList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.topicData.TopicDataSourceList.elements)
  return elements_.Get(index);
}
inline ::ubii::topicData::TopicDataSource* TopicDataSourceList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.topicData.TopicDataSourceList.elements)
  return elements_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::ubii::topicData::TopicDataSource >&
TopicDataSourceList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.topicData.TopicDataSourceList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace topicData
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_INCLUDED_proto_2ftopicData_2ftopicDataSource_2eproto
