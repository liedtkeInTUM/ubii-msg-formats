// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/services/serviceRequest.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.Services {

  /// <summary>Holder for reflection information generated from proto/services/serviceRequest.proto</summary>
  public static partial class ServiceRequestReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/services/serviceRequest.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ServiceRequestReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiNwcm90by9zZXJ2aWNlcy9zZXJ2aWNlUmVxdWVzdC5wcm90bxINdWJpaS5z",
            "ZXJ2aWNlcxoacHJvdG8vY2xpZW50cy9jbGllbnQucHJvdG8aGnByb3RvL2Rl",
            "dmljZXMvZGV2aWNlLnByb3RvGhxwcm90by9zZXNzaW9ucy9zZXNzaW9uLnBy",
            "b3RvGi5wcm90by9zZXJ2aWNlcy9yZXF1ZXN0L3RvcGljU3Vic2NyaXB0aW9u",
            "LnByb3RvIpECCg5TZXJ2aWNlUmVxdWVzdBINCgV0b3BpYxgBIAEoCRIzChNj",
            "bGllbnRfcmVnaXN0cmF0aW9uGAIgASgLMhQudWJpaS5jbGllbnRzLkNsaWVu",
            "dEgAEjMKE2RldmljZV9yZWdpc3RyYXRpb24YAyABKAsyFC51YmlpLmRldmlj",
            "ZXMuRGV2aWNlSAASRgoSdG9waWNfc3Vic2NyaXB0aW9uGAQgASgLMigudWJp",
            "aS5zZXJ2aWNlcy5yZXF1ZXN0LlRvcGljU3Vic2NyaXB0aW9uSAASNgoUc2Vz",
            "c2lvbl9yZWdpc3RyYXRpb24YBSABKAsyFi51YmlpLnNlc3Npb25zLlNlc3Np",
            "b25IAEIGCgR0eXBlYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ubii.Clients.ClientReflection.Descriptor, global::Ubii.Devices.DeviceReflection.Descriptor, global::Ubii.Sessions.SessionReflection.Descriptor, global::Ubii.Services.Request.TopicSubscriptionReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.Services.ServiceRequest), global::Ubii.Services.ServiceRequest.Parser, new[]{ "Topic", "ClientRegistration", "DeviceRegistration", "TopicSubscription", "SessionRegistration" }, new[]{ "Type" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class ServiceRequest : pb::IMessage<ServiceRequest> {
    private static readonly pb::MessageParser<ServiceRequest> _parser = new pb::MessageParser<ServiceRequest>(() => new ServiceRequest());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ServiceRequest> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.Services.ServiceRequestReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceRequest() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceRequest(ServiceRequest other) : this() {
      topic_ = other.topic_;
      switch (other.TypeCase) {
        case TypeOneofCase.ClientRegistration:
          ClientRegistration = other.ClientRegistration.Clone();
          break;
        case TypeOneofCase.DeviceRegistration:
          DeviceRegistration = other.DeviceRegistration.Clone();
          break;
        case TypeOneofCase.TopicSubscription:
          TopicSubscription = other.TopicSubscription.Clone();
          break;
        case TypeOneofCase.SessionRegistration:
          SessionRegistration = other.SessionRegistration.Clone();
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceRequest Clone() {
      return new ServiceRequest(this);
    }

    /// <summary>Field number for the "topic" field.</summary>
    public const int TopicFieldNumber = 1;
    private string topic_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Topic {
      get { return topic_; }
      set {
        topic_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "client_registration" field.</summary>
    public const int ClientRegistrationFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Clients.Client ClientRegistration {
      get { return typeCase_ == TypeOneofCase.ClientRegistration ? (global::Ubii.Clients.Client) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.ClientRegistration;
      }
    }

    /// <summary>Field number for the "device_registration" field.</summary>
    public const int DeviceRegistrationFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Devices.Device DeviceRegistration {
      get { return typeCase_ == TypeOneofCase.DeviceRegistration ? (global::Ubii.Devices.Device) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.DeviceRegistration;
      }
    }

    /// <summary>Field number for the "topic_subscription" field.</summary>
    public const int TopicSubscriptionFieldNumber = 4;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Services.Request.TopicSubscription TopicSubscription {
      get { return typeCase_ == TypeOneofCase.TopicSubscription ? (global::Ubii.Services.Request.TopicSubscription) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.TopicSubscription;
      }
    }

    /// <summary>Field number for the "session_registration" field.</summary>
    public const int SessionRegistrationFieldNumber = 5;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Sessions.Session SessionRegistration {
      get { return typeCase_ == TypeOneofCase.SessionRegistration ? (global::Ubii.Sessions.Session) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.SessionRegistration;
      }
    }

    private object type_;
    /// <summary>Enum of possible cases for the "type" oneof.</summary>
    public enum TypeOneofCase {
      None = 0,
      ClientRegistration = 2,
      DeviceRegistration = 3,
      TopicSubscription = 4,
      SessionRegistration = 5,
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
      return Equals(other as ServiceRequest);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ServiceRequest other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Topic != other.Topic) return false;
      if (!object.Equals(ClientRegistration, other.ClientRegistration)) return false;
      if (!object.Equals(DeviceRegistration, other.DeviceRegistration)) return false;
      if (!object.Equals(TopicSubscription, other.TopicSubscription)) return false;
      if (!object.Equals(SessionRegistration, other.SessionRegistration)) return false;
      if (TypeCase != other.TypeCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Topic.Length != 0) hash ^= Topic.GetHashCode();
      if (typeCase_ == TypeOneofCase.ClientRegistration) hash ^= ClientRegistration.GetHashCode();
      if (typeCase_ == TypeOneofCase.DeviceRegistration) hash ^= DeviceRegistration.GetHashCode();
      if (typeCase_ == TypeOneofCase.TopicSubscription) hash ^= TopicSubscription.GetHashCode();
      if (typeCase_ == TypeOneofCase.SessionRegistration) hash ^= SessionRegistration.GetHashCode();
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
      if (Topic.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Topic);
      }
      if (typeCase_ == TypeOneofCase.ClientRegistration) {
        output.WriteRawTag(18);
        output.WriteMessage(ClientRegistration);
      }
      if (typeCase_ == TypeOneofCase.DeviceRegistration) {
        output.WriteRawTag(26);
        output.WriteMessage(DeviceRegistration);
      }
      if (typeCase_ == TypeOneofCase.TopicSubscription) {
        output.WriteRawTag(34);
        output.WriteMessage(TopicSubscription);
      }
      if (typeCase_ == TypeOneofCase.SessionRegistration) {
        output.WriteRawTag(42);
        output.WriteMessage(SessionRegistration);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Topic.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Topic);
      }
      if (typeCase_ == TypeOneofCase.ClientRegistration) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ClientRegistration);
      }
      if (typeCase_ == TypeOneofCase.DeviceRegistration) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(DeviceRegistration);
      }
      if (typeCase_ == TypeOneofCase.TopicSubscription) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TopicSubscription);
      }
      if (typeCase_ == TypeOneofCase.SessionRegistration) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(SessionRegistration);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ServiceRequest other) {
      if (other == null) {
        return;
      }
      if (other.Topic.Length != 0) {
        Topic = other.Topic;
      }
      switch (other.TypeCase) {
        case TypeOneofCase.ClientRegistration:
          if (ClientRegistration == null) {
            ClientRegistration = new global::Ubii.Clients.Client();
          }
          ClientRegistration.MergeFrom(other.ClientRegistration);
          break;
        case TypeOneofCase.DeviceRegistration:
          if (DeviceRegistration == null) {
            DeviceRegistration = new global::Ubii.Devices.Device();
          }
          DeviceRegistration.MergeFrom(other.DeviceRegistration);
          break;
        case TypeOneofCase.TopicSubscription:
          if (TopicSubscription == null) {
            TopicSubscription = new global::Ubii.Services.Request.TopicSubscription();
          }
          TopicSubscription.MergeFrom(other.TopicSubscription);
          break;
        case TypeOneofCase.SessionRegistration:
          if (SessionRegistration == null) {
            SessionRegistration = new global::Ubii.Sessions.Session();
          }
          SessionRegistration.MergeFrom(other.SessionRegistration);
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
            global::Ubii.Clients.Client subBuilder = new global::Ubii.Clients.Client();
            if (typeCase_ == TypeOneofCase.ClientRegistration) {
              subBuilder.MergeFrom(ClientRegistration);
            }
            input.ReadMessage(subBuilder);
            ClientRegistration = subBuilder;
            break;
          }
          case 26: {
            global::Ubii.Devices.Device subBuilder = new global::Ubii.Devices.Device();
            if (typeCase_ == TypeOneofCase.DeviceRegistration) {
              subBuilder.MergeFrom(DeviceRegistration);
            }
            input.ReadMessage(subBuilder);
            DeviceRegistration = subBuilder;
            break;
          }
          case 34: {
            global::Ubii.Services.Request.TopicSubscription subBuilder = new global::Ubii.Services.Request.TopicSubscription();
            if (typeCase_ == TypeOneofCase.TopicSubscription) {
              subBuilder.MergeFrom(TopicSubscription);
            }
            input.ReadMessage(subBuilder);
            TopicSubscription = subBuilder;
            break;
          }
          case 42: {
            global::Ubii.Sessions.Session subBuilder = new global::Ubii.Sessions.Session();
            if (typeCase_ == TypeOneofCase.SessionRegistration) {
              subBuilder.MergeFrom(SessionRegistration);
            }
            input.ReadMessage(subBuilder);
            SessionRegistration = subBuilder;
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
