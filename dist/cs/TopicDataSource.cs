// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/topicData/topicDataSource.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.TopicData {

  /// <summary>Holder for reflection information generated from proto/topicData/topicDataSource.proto</summary>
  public static partial class TopicDataSourceReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/topicData/topicDataSource.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TopicDataSourceReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiVwcm90by90b3BpY0RhdGEvdG9waWNEYXRhU291cmNlLnByb3RvEg51Ymlp",
            "LnRvcGljRGF0YRodcHJvdG8vZGV2aWNlcy9jb21wb25lbnQucHJvdG8aJXBy",
            "b3RvL3RvcGljRGF0YS90b3BpY0RhdGFSZWNvcmQucHJvdG8iowEKD1RvcGlj",
            "RGF0YVNvdXJjZRIPCgV0b3BpYxgBIAEoCUgAEg8KBXJlZ2V4GAIgASgJSAAS",
            "LAoJY29tcG9uZW50GAMgASgLMhcudWJpaS5kZXZpY2VzLkNvbXBvbmVudEgA",
            "EjgKDXN0YXRpY19yZWNvcmQYBCABKAsyHy51YmlpLnRvcGljRGF0YS5Ub3Bp",
            "Y0RhdGFSZWNvcmRIAEIGCgR0eXBlIkgKE1RvcGljRGF0YVNvdXJjZUxpc3QS",
            "MQoIZWxlbWVudHMYASADKAsyHy51YmlpLnRvcGljRGF0YS5Ub3BpY0RhdGFT",
            "b3VyY2ViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ubii.Devices.ComponentReflection.Descriptor, global::Ubii.TopicData.TopicDataRecordReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.TopicData.TopicDataSource), global::Ubii.TopicData.TopicDataSource.Parser, new[]{ "Topic", "Regex", "Component", "StaticRecord" }, new[]{ "Type" }, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.TopicData.TopicDataSourceList), global::Ubii.TopicData.TopicDataSourceList.Parser, new[]{ "Elements" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class TopicDataSource : pb::IMessage<TopicDataSource> {
    private static readonly pb::MessageParser<TopicDataSource> _parser = new pb::MessageParser<TopicDataSource>(() => new TopicDataSource());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TopicDataSource> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.TopicData.TopicDataSourceReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSource() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSource(TopicDataSource other) : this() {
      switch (other.TypeCase) {
        case TypeOneofCase.Topic:
          Topic = other.Topic;
          break;
        case TypeOneofCase.Regex:
          Regex = other.Regex;
          break;
        case TypeOneofCase.Component:
          Component = other.Component.Clone();
          break;
        case TypeOneofCase.StaticRecord:
          StaticRecord = other.StaticRecord.Clone();
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSource Clone() {
      return new TopicDataSource(this);
    }

    /// <summary>Field number for the "topic" field.</summary>
    public const int TopicFieldNumber = 1;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Topic {
      get { return typeCase_ == TypeOneofCase.Topic ? (string) type_ : ""; }
      set {
        type_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        typeCase_ = TypeOneofCase.Topic;
      }
    }

    /// <summary>Field number for the "regex" field.</summary>
    public const int RegexFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Regex {
      get { return typeCase_ == TypeOneofCase.Regex ? (string) type_ : ""; }
      set {
        type_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
        typeCase_ = TypeOneofCase.Regex;
      }
    }

    /// <summary>Field number for the "component" field.</summary>
    public const int ComponentFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Devices.Component Component {
      get { return typeCase_ == TypeOneofCase.Component ? (global::Ubii.Devices.Component) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Component;
      }
    }

    /// <summary>Field number for the "static_record" field.</summary>
    public const int StaticRecordFieldNumber = 4;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.TopicData.TopicDataRecord StaticRecord {
      get { return typeCase_ == TypeOneofCase.StaticRecord ? (global::Ubii.TopicData.TopicDataRecord) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.StaticRecord;
      }
    }

    private object type_;
    /// <summary>Enum of possible cases for the "type" oneof.</summary>
    public enum TypeOneofCase {
      None = 0,
      Topic = 1,
      Regex = 2,
      Component = 3,
      StaticRecord = 4,
    }
    private TypeOneofCase typeCase_ = TypeOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TypeOneofCase TypeCase {
      get { return typeCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearType() {
      typeCase_ = TypeOneofCase.None;
      type_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TopicDataSource);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TopicDataSource other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Topic != other.Topic) return false;
      if (Regex != other.Regex) return false;
      if (!object.Equals(Component, other.Component)) return false;
      if (!object.Equals(StaticRecord, other.StaticRecord)) return false;
      if (TypeCase != other.TypeCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (typeCase_ == TypeOneofCase.Topic) hash ^= Topic.GetHashCode();
      if (typeCase_ == TypeOneofCase.Regex) hash ^= Regex.GetHashCode();
      if (typeCase_ == TypeOneofCase.Component) hash ^= Component.GetHashCode();
      if (typeCase_ == TypeOneofCase.StaticRecord) hash ^= StaticRecord.GetHashCode();
      hash ^= (int) typeCase_;
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (typeCase_ == TypeOneofCase.Topic) {
        output.WriteRawTag(10);
        output.WriteString(Topic);
      }
      if (typeCase_ == TypeOneofCase.Regex) {
        output.WriteRawTag(18);
        output.WriteString(Regex);
      }
      if (typeCase_ == TypeOneofCase.Component) {
        output.WriteRawTag(26);
        output.WriteMessage(Component);
      }
      if (typeCase_ == TypeOneofCase.StaticRecord) {
        output.WriteRawTag(34);
        output.WriteMessage(StaticRecord);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (typeCase_ == TypeOneofCase.Topic) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Topic);
      }
      if (typeCase_ == TypeOneofCase.Regex) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Regex);
      }
      if (typeCase_ == TypeOneofCase.Component) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Component);
      }
      if (typeCase_ == TypeOneofCase.StaticRecord) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(StaticRecord);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TopicDataSource other) {
      if (other == null) {
        return;
      }
      switch (other.TypeCase) {
        case TypeOneofCase.Topic:
          Topic = other.Topic;
          break;
        case TypeOneofCase.Regex:
          Regex = other.Regex;
          break;
        case TypeOneofCase.Component:
          if (Component == null) {
            Component = new global::Ubii.Devices.Component();
          }
          Component.MergeFrom(other.Component);
          break;
        case TypeOneofCase.StaticRecord:
          if (StaticRecord == null) {
            StaticRecord = new global::Ubii.TopicData.TopicDataRecord();
          }
          StaticRecord.MergeFrom(other.StaticRecord);
          break;
      }

      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Topic = input.ReadString();
            break;
          }
          case 18: {
            Regex = input.ReadString();
            break;
          }
          case 26: {
            global::Ubii.Devices.Component subBuilder = new global::Ubii.Devices.Component();
            if (typeCase_ == TypeOneofCase.Component) {
              subBuilder.MergeFrom(Component);
            }
            input.ReadMessage(subBuilder);
            Component = subBuilder;
            break;
          }
          case 34: {
            global::Ubii.TopicData.TopicDataRecord subBuilder = new global::Ubii.TopicData.TopicDataRecord();
            if (typeCase_ == TypeOneofCase.StaticRecord) {
              subBuilder.MergeFrom(StaticRecord);
            }
            input.ReadMessage(subBuilder);
            StaticRecord = subBuilder;
            break;
          }
        }
      }
    }

  }

  public sealed partial class TopicDataSourceList : pb::IMessage<TopicDataSourceList> {
    private static readonly pb::MessageParser<TopicDataSourceList> _parser = new pb::MessageParser<TopicDataSourceList>(() => new TopicDataSourceList());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TopicDataSourceList> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.TopicData.TopicDataSourceReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSourceList() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSourceList(TopicDataSourceList other) : this() {
      elements_ = other.elements_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TopicDataSourceList Clone() {
      return new TopicDataSourceList(this);
    }

    /// <summary>Field number for the "elements" field.</summary>
    public const int ElementsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Ubii.TopicData.TopicDataSource> _repeated_elements_codec
        = pb::FieldCodec.ForMessage(10, global::Ubii.TopicData.TopicDataSource.Parser);
    private readonly pbc::RepeatedField<global::Ubii.TopicData.TopicDataSource> elements_ = new pbc::RepeatedField<global::Ubii.TopicData.TopicDataSource>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Ubii.TopicData.TopicDataSource> Elements {
      get { return elements_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TopicDataSourceList);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TopicDataSourceList other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!elements_.Equals(other.elements_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= elements_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      elements_.WriteTo(output, _repeated_elements_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += elements_.CalculateSize(_repeated_elements_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TopicDataSourceList other) {
      if (other == null) {
        return;
      }
      elements_.Add(other.elements_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            elements_.AddEntriesFrom(input, _repeated_elements_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
