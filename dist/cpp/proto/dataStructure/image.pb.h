// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/image.proto

#ifndef PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto
#define PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto

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
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#define PROTOBUF_INTERNAL_EXPORT_protobuf_proto_2fdataStructure_2fimage_2eproto 

namespace protobuf_proto_2fdataStructure_2fimage_2eproto {
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
}  // namespace protobuf_proto_2fdataStructure_2fimage_2eproto
namespace ubii {
namespace dataStructure {
class Image2D;
class Image2DDefaultTypeInternal;
extern Image2DDefaultTypeInternal _Image2D_default_instance_;
class Image2DList;
class Image2DListDefaultTypeInternal;
extern Image2DListDefaultTypeInternal _Image2DList_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
namespace google {
namespace protobuf {
template<> ::ubii::dataStructure::Image2D* Arena::CreateMaybeMessage<::ubii::dataStructure::Image2D>(Arena*);
template<> ::ubii::dataStructure::Image2DList* Arena::CreateMaybeMessage<::ubii::dataStructure::Image2DList>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace ubii {
namespace dataStructure {

enum Image2D_DataFormat {
  Image2D_DataFormat_GRAY8 = 0,
  Image2D_DataFormat_RGB8 = 1,
  Image2D_DataFormat_RGBA8 = 2,
  Image2D_DataFormat_Image2D_DataFormat_INT_MIN_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32min,
  Image2D_DataFormat_Image2D_DataFormat_INT_MAX_SENTINEL_DO_NOT_USE_ = ::google::protobuf::kint32max
};
bool Image2D_DataFormat_IsValid(int value);
const Image2D_DataFormat Image2D_DataFormat_DataFormat_MIN = Image2D_DataFormat_GRAY8;
const Image2D_DataFormat Image2D_DataFormat_DataFormat_MAX = Image2D_DataFormat_RGBA8;
const int Image2D_DataFormat_DataFormat_ARRAYSIZE = Image2D_DataFormat_DataFormat_MAX + 1;

const ::google::protobuf::EnumDescriptor* Image2D_DataFormat_descriptor();
inline const ::std::string& Image2D_DataFormat_Name(Image2D_DataFormat value) {
  return ::google::protobuf::internal::NameOfEnum(
    Image2D_DataFormat_descriptor(), value);
}
inline bool Image2D_DataFormat_Parse(
    const ::std::string& name, Image2D_DataFormat* value) {
  return ::google::protobuf::internal::ParseNamedEnum<Image2D_DataFormat>(
    Image2D_DataFormat_descriptor(), name, value);
}
// ===================================================================

class Image2D : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Image2D) */ {
 public:
  Image2D();
  virtual ~Image2D();

  Image2D(const Image2D& from);

  inline Image2D& operator=(const Image2D& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  Image2D(Image2D&& from) noexcept
    : Image2D() {
    *this = ::std::move(from);
  }

  inline Image2D& operator=(Image2D&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const Image2D& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Image2D* internal_default_instance() {
    return reinterpret_cast<const Image2D*>(
               &_Image2D_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(Image2D* other);
  friend void swap(Image2D& a, Image2D& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline Image2D* New() const final {
    return CreateMaybeMessage<Image2D>(NULL);
  }

  Image2D* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<Image2D>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const Image2D& from);
  void MergeFrom(const Image2D& from);
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
  void InternalSwap(Image2D* other);
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

  typedef Image2D_DataFormat DataFormat;
  static const DataFormat GRAY8 =
    Image2D_DataFormat_GRAY8;
  static const DataFormat RGB8 =
    Image2D_DataFormat_RGB8;
  static const DataFormat RGBA8 =
    Image2D_DataFormat_RGBA8;
  static inline bool DataFormat_IsValid(int value) {
    return Image2D_DataFormat_IsValid(value);
  }
  static const DataFormat DataFormat_MIN =
    Image2D_DataFormat_DataFormat_MIN;
  static const DataFormat DataFormat_MAX =
    Image2D_DataFormat_DataFormat_MAX;
  static const int DataFormat_ARRAYSIZE =
    Image2D_DataFormat_DataFormat_ARRAYSIZE;
  static inline const ::google::protobuf::EnumDescriptor*
  DataFormat_descriptor() {
    return Image2D_DataFormat_descriptor();
  }
  static inline const ::std::string& DataFormat_Name(DataFormat value) {
    return Image2D_DataFormat_Name(value);
  }
  static inline bool DataFormat_Parse(const ::std::string& name,
      DataFormat* value) {
    return Image2D_DataFormat_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  // bytes data = 4;
  void clear_data();
  static const int kDataFieldNumber = 4;
  const ::std::string& data() const;
  void set_data(const ::std::string& value);
  #if LANG_CXX11
  void set_data(::std::string&& value);
  #endif
  void set_data(const char* value);
  void set_data(const void* value, size_t size);
  ::std::string* mutable_data();
  ::std::string* release_data();
  void set_allocated_data(::std::string* data);

  // int32 width = 1;
  void clear_width();
  static const int kWidthFieldNumber = 1;
  ::google::protobuf::int32 width() const;
  void set_width(::google::protobuf::int32 value);

  // int32 height = 2;
  void clear_height();
  static const int kHeightFieldNumber = 2;
  ::google::protobuf::int32 height() const;
  void set_height(::google::protobuf::int32 value);

  // .ubii.dataStructure.Image2D.DataFormat data_format = 3;
  void clear_data_format();
  static const int kDataFormatFieldNumber = 3;
  ::ubii::dataStructure::Image2D_DataFormat data_format() const;
  void set_data_format(::ubii::dataStructure::Image2D_DataFormat value);

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2D)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr data_;
  ::google::protobuf::int32 width_;
  ::google::protobuf::int32 height_;
  int data_format_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fdataStructure_2fimage_2eproto::TableStruct;
};
// -------------------------------------------------------------------

class Image2DList : public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Image2DList) */ {
 public:
  Image2DList();
  virtual ~Image2DList();

  Image2DList(const Image2DList& from);

  inline Image2DList& operator=(const Image2DList& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  Image2DList(Image2DList&& from) noexcept
    : Image2DList() {
    *this = ::std::move(from);
  }

  inline Image2DList& operator=(Image2DList&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor();
  static const Image2DList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Image2DList* internal_default_instance() {
    return reinterpret_cast<const Image2DList*>(
               &_Image2DList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  void Swap(Image2DList* other);
  friend void swap(Image2DList& a, Image2DList& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline Image2DList* New() const final {
    return CreateMaybeMessage<Image2DList>(NULL);
  }

  Image2DList* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<Image2DList>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const Image2DList& from);
  void MergeFrom(const Image2DList& from);
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
  void InternalSwap(Image2DList* other);
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

  // repeated .ubii.dataStructure.Image2D elements = 1;
  int elements_size() const;
  void clear_elements();
  static const int kElementsFieldNumber = 1;
  ::ubii::dataStructure::Image2D* mutable_elements(int index);
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >*
      mutable_elements();
  const ::ubii::dataStructure::Image2D& elements(int index) const;
  ::ubii::dataStructure::Image2D* add_elements();
  const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2DList)
 private:

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D > elements_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::protobuf_proto_2fdataStructure_2fimage_2eproto::TableStruct;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Image2D

// int32 width = 1;
inline void Image2D::clear_width() {
  width_ = 0;
}
inline ::google::protobuf::int32 Image2D::width() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.width)
  return width_;
}
inline void Image2D::set_width(::google::protobuf::int32 value) {
  
  width_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.width)
}

// int32 height = 2;
inline void Image2D::clear_height() {
  height_ = 0;
}
inline ::google::protobuf::int32 Image2D::height() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.height)
  return height_;
}
inline void Image2D::set_height(::google::protobuf::int32 value) {
  
  height_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.height)
}

// .ubii.dataStructure.Image2D.DataFormat data_format = 3;
inline void Image2D::clear_data_format() {
  data_format_ = 0;
}
inline ::ubii::dataStructure::Image2D_DataFormat Image2D::data_format() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data_format)
  return static_cast< ::ubii::dataStructure::Image2D_DataFormat >(data_format_);
}
inline void Image2D::set_data_format(::ubii::dataStructure::Image2D_DataFormat value) {
  
  data_format_ = value;
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data_format)
}

// bytes data = 4;
inline void Image2D::clear_data() {
  data_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Image2D::data() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data)
  return data_.GetNoArena();
}
inline void Image2D::set_data(const ::std::string& value) {
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data)
}
#if LANG_CXX11
inline void Image2D::set_data(::std::string&& value) {
  
  data_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.dataStructure.Image2D.data)
}
#endif
inline void Image2D::set_data(const char* value) {
  GOOGLE_DCHECK(value != NULL);
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Image2D.data)
}
inline void Image2D::set_data(const void* value, size_t size) {
  
  data_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Image2D.data)
}
inline ::std::string* Image2D::mutable_data() {
  
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2D.data)
  return data_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Image2D::release_data() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Image2D.data)
  
  return data_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Image2D::set_allocated_data(::std::string* data) {
  if (data != NULL) {
    
  } else {
    
  }
  data_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), data);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Image2D.data)
}

// -------------------------------------------------------------------

// Image2DList

// repeated .ubii.dataStructure.Image2D elements = 1;
inline int Image2DList::elements_size() const {
  return elements_.size();
}
inline void Image2DList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::dataStructure::Image2D* Image2DList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2DList.elements)
  return elements_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >*
Image2DList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Image2DList.elements)
  return &elements_;
}
inline const ::ubii::dataStructure::Image2D& Image2DList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2DList.elements)
  return elements_.Get(index);
}
inline ::ubii::dataStructure::Image2D* Image2DList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Image2DList.elements)
  return elements_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::ubii::dataStructure::Image2D >&
Image2DList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Image2DList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::ubii::dataStructure::Image2D_DataFormat> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::ubii::dataStructure::Image2D_DataFormat>() {
  return ::ubii::dataStructure::Image2D_DataFormat_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#endif  // PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto
