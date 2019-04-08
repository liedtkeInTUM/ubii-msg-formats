// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/services/serviceReply.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.Services {

  /// <summary>Holder for reflection information generated from proto/services/serviceReply.proto</summary>
  public static partial class ServiceReplyReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/services/serviceReply.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ServiceReplyReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiFwcm90by9zZXJ2aWNlcy9zZXJ2aWNlUmVwbHkucHJvdG8SDXViaWkuc2Vy",
            "dmljZXMaG3Byb3RvL2dlbmVyYWwvc3VjY2Vzcy5wcm90bxoZcHJvdG8vZ2Vu",
            "ZXJhbC9lcnJvci5wcm90bxoacHJvdG8vY2xpZW50cy9jbGllbnQucHJvdG8a",
            "GnByb3RvL2RldmljZXMvZGV2aWNlLnByb3RvGhpwcm90by9zZXJ2ZXJzL3Nl",
            "cnZlci5wcm90bxoccHJvdG8vc2Vzc2lvbnMvc2Vzc2lvbi5wcm90bxokcHJv",
            "dG8vaW50ZXJhY3Rpb25zL2ludGVyYWN0aW9uLnByb3RvGh5wcm90by9nZW5l",
            "cmFsL3N0cmluZ0xpc3QucHJvdG8i9AIKDFNlcnZpY2VSZXBseRIoCgdzdWNj",
            "ZXNzGAEgASgLMhUudWJpaS5nZW5lcmFsLlN1Y2Nlc3NIABIkCgVlcnJvchgC",
            "IAEoCzITLnViaWkuZ2VuZXJhbC5FcnJvckgAEiYKBmNsaWVudBgDIAEoCzIU",
            "LnViaWkuY2xpZW50cy5DbGllbnRIABImCgZkZXZpY2UYBCABKAsyFC51Ymlp",
            "LmRldmljZXMuRGV2aWNlSAASJgoGc2VydmVyGAUgASgLMhQudWJpaS5zZXJ2",
            "ZXJzLlNlcnZlckgAEikKB3Nlc3Npb24YBiABKAsyFi51YmlpLnNlc3Npb25z",
            "LlNlc3Npb25IABI4CgtpbnRlcmFjdGlvbhgHIAEoCzIhLnViaWkuaW50ZXJh",
            "Y3Rpb25zLkludGVyYWN0aW9uTXNnSAASLwoLc3RyaW5nX2xpc3QYCCABKAsy",
            "GC51YmlpLmdlbmVyYWwuU3RyaW5nTGlzdEgAQgYKBHR5cGViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ubii.General.SuccessReflection.Descriptor, global::Ubii.General.ErrorReflection.Descriptor, global::Ubii.Clients.ClientReflection.Descriptor, global::Ubii.Devices.DeviceReflection.Descriptor, global::Ubii.Servers.ServerReflection.Descriptor, global::Ubii.Sessions.SessionReflection.Descriptor, global::Ubii.Interactions.InteractionReflection.Descriptor, global::Ubii.General.StringListReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.Services.ServiceReply), global::Ubii.Services.ServiceReply.Parser, new[]{ "Success", "Error", "Client", "Device", "Server", "Session", "Interaction", "StringList" }, new[]{ "Type" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class ServiceReply : pb::IMessage<ServiceReply> {
    private static readonly pb::MessageParser<ServiceReply> _parser = new pb::MessageParser<ServiceReply>(() => new ServiceReply());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ServiceReply> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.Services.ServiceReplyReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceReply() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceReply(ServiceReply other) : this() {
      switch (other.TypeCase) {
        case TypeOneofCase.Success:
          Success = other.Success.Clone();
          break;
        case TypeOneofCase.Error:
          Error = other.Error.Clone();
          break;
        case TypeOneofCase.Client:
          Client = other.Client.Clone();
          break;
        case TypeOneofCase.Device:
          Device = other.Device.Clone();
          break;
        case TypeOneofCase.Server:
          Server = other.Server.Clone();
          break;
        case TypeOneofCase.Session:
          Session = other.Session.Clone();
          break;
        case TypeOneofCase.Interaction:
          Interaction = other.Interaction.Clone();
          break;
        case TypeOneofCase.StringList:
          StringList = other.StringList.Clone();
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ServiceReply Clone() {
      return new ServiceReply(this);
    }

    /// <summary>Field number for the "success" field.</summary>
    public const int SuccessFieldNumber = 1;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.General.Success Success {
      get { return typeCase_ == TypeOneofCase.Success ? (global::Ubii.General.Success) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Success;
      }
    }

    /// <summary>Field number for the "error" field.</summary>
    public const int ErrorFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.General.Error Error {
      get { return typeCase_ == TypeOneofCase.Error ? (global::Ubii.General.Error) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Error;
      }
    }

    /// <summary>Field number for the "client" field.</summary>
    public const int ClientFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Clients.Client Client {
      get { return typeCase_ == TypeOneofCase.Client ? (global::Ubii.Clients.Client) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Client;
      }
    }

    /// <summary>Field number for the "device" field.</summary>
    public const int DeviceFieldNumber = 4;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Devices.Device Device {
      get { return typeCase_ == TypeOneofCase.Device ? (global::Ubii.Devices.Device) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Device;
      }
    }

    /// <summary>Field number for the "server" field.</summary>
    public const int ServerFieldNumber = 5;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Servers.Server Server {
      get { return typeCase_ == TypeOneofCase.Server ? (global::Ubii.Servers.Server) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Server;
      }
    }

    /// <summary>Field number for the "session" field.</summary>
    public const int SessionFieldNumber = 6;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Sessions.Session Session {
      get { return typeCase_ == TypeOneofCase.Session ? (global::Ubii.Sessions.Session) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Session;
      }
    }

    /// <summary>Field number for the "interaction" field.</summary>
    public const int InteractionFieldNumber = 7;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Interactions.InteractionMsg Interaction {
      get { return typeCase_ == TypeOneofCase.Interaction ? (global::Ubii.Interactions.InteractionMsg) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Interaction;
      }
    }

    /// <summary>Field number for the "string_list" field.</summary>
    public const int StringListFieldNumber = 8;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.General.StringList StringList {
      get { return typeCase_ == TypeOneofCase.StringList ? (global::Ubii.General.StringList) type_ : null; }
      set {
        type_ = value;
        typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.StringList;
      }
    }

    private object type_;
    /// <summary>Enum of possible cases for the "type" oneof.</summary>
    public enum TypeOneofCase {
      None = 0,
      Success = 1,
      Error = 2,
      Client = 3,
      Device = 4,
      Server = 5,
      Session = 6,
      Interaction = 7,
      StringList = 8,
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
      return Equals(other as ServiceReply);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ServiceReply other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Success, other.Success)) return false;
      if (!object.Equals(Error, other.Error)) return false;
      if (!object.Equals(Client, other.Client)) return false;
      if (!object.Equals(Device, other.Device)) return false;
      if (!object.Equals(Server, other.Server)) return false;
      if (!object.Equals(Session, other.Session)) return false;
      if (!object.Equals(Interaction, other.Interaction)) return false;
      if (!object.Equals(StringList, other.StringList)) return false;
      if (TypeCase != other.TypeCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (typeCase_ == TypeOneofCase.Success) hash ^= Success.GetHashCode();
      if (typeCase_ == TypeOneofCase.Error) hash ^= Error.GetHashCode();
      if (typeCase_ == TypeOneofCase.Client) hash ^= Client.GetHashCode();
      if (typeCase_ == TypeOneofCase.Device) hash ^= Device.GetHashCode();
      if (typeCase_ == TypeOneofCase.Server) hash ^= Server.GetHashCode();
      if (typeCase_ == TypeOneofCase.Session) hash ^= Session.GetHashCode();
      if (typeCase_ == TypeOneofCase.Interaction) hash ^= Interaction.GetHashCode();
      if (typeCase_ == TypeOneofCase.StringList) hash ^= StringList.GetHashCode();
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
      if (typeCase_ == TypeOneofCase.Success) {
        output.WriteRawTag(10);
        output.WriteMessage(Success);
      }
      if (typeCase_ == TypeOneofCase.Error) {
        output.WriteRawTag(18);
        output.WriteMessage(Error);
      }
      if (typeCase_ == TypeOneofCase.Client) {
        output.WriteRawTag(26);
        output.WriteMessage(Client);
      }
      if (typeCase_ == TypeOneofCase.Device) {
        output.WriteRawTag(34);
        output.WriteMessage(Device);
      }
      if (typeCase_ == TypeOneofCase.Server) {
        output.WriteRawTag(42);
        output.WriteMessage(Server);
      }
      if (typeCase_ == TypeOneofCase.Session) {
        output.WriteRawTag(50);
        output.WriteMessage(Session);
      }
      if (typeCase_ == TypeOneofCase.Interaction) {
        output.WriteRawTag(58);
        output.WriteMessage(Interaction);
      }
      if (typeCase_ == TypeOneofCase.StringList) {
        output.WriteRawTag(66);
        output.WriteMessage(StringList);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (typeCase_ == TypeOneofCase.Success) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Success);
      }
      if (typeCase_ == TypeOneofCase.Error) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Error);
      }
      if (typeCase_ == TypeOneofCase.Client) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Client);
      }
      if (typeCase_ == TypeOneofCase.Device) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Device);
      }
      if (typeCase_ == TypeOneofCase.Server) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Server);
      }
      if (typeCase_ == TypeOneofCase.Session) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Session);
      }
      if (typeCase_ == TypeOneofCase.Interaction) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Interaction);
      }
      if (typeCase_ == TypeOneofCase.StringList) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(StringList);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ServiceReply other) {
      if (other == null) {
        return;
      }
      switch (other.TypeCase) {
        case TypeOneofCase.Success:
          if (Success == null) {
            Success = new global::Ubii.General.Success();
          }
          Success.MergeFrom(other.Success);
          break;
        case TypeOneofCase.Error:
          if (Error == null) {
            Error = new global::Ubii.General.Error();
          }
          Error.MergeFrom(other.Error);
          break;
        case TypeOneofCase.Client:
          if (Client == null) {
            Client = new global::Ubii.Clients.Client();
          }
          Client.MergeFrom(other.Client);
          break;
        case TypeOneofCase.Device:
          if (Device == null) {
            Device = new global::Ubii.Devices.Device();
          }
          Device.MergeFrom(other.Device);
          break;
        case TypeOneofCase.Server:
          if (Server == null) {
            Server = new global::Ubii.Servers.Server();
          }
          Server.MergeFrom(other.Server);
          break;
        case TypeOneofCase.Session:
          if (Session == null) {
            Session = new global::Ubii.Sessions.Session();
          }
          Session.MergeFrom(other.Session);
          break;
        case TypeOneofCase.Interaction:
          if (Interaction == null) {
            Interaction = new global::Ubii.Interactions.InteractionMsg();
          }
          Interaction.MergeFrom(other.Interaction);
          break;
        case TypeOneofCase.StringList:
          if (StringList == null) {
            StringList = new global::Ubii.General.StringList();
          }
          StringList.MergeFrom(other.StringList);
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
            global::Ubii.General.Success subBuilder = new global::Ubii.General.Success();
            if (typeCase_ == TypeOneofCase.Success) {
              subBuilder.MergeFrom(Success);
            }
            input.ReadMessage(subBuilder);
            Success = subBuilder;
            break;
          }
          case 18: {
            global::Ubii.General.Error subBuilder = new global::Ubii.General.Error();
            if (typeCase_ == TypeOneofCase.Error) {
              subBuilder.MergeFrom(Error);
            }
            input.ReadMessage(subBuilder);
            Error = subBuilder;
            break;
          }
          case 26: {
            global::Ubii.Clients.Client subBuilder = new global::Ubii.Clients.Client();
            if (typeCase_ == TypeOneofCase.Client) {
              subBuilder.MergeFrom(Client);
            }
            input.ReadMessage(subBuilder);
            Client = subBuilder;
            break;
          }
          case 34: {
            global::Ubii.Devices.Device subBuilder = new global::Ubii.Devices.Device();
            if (typeCase_ == TypeOneofCase.Device) {
              subBuilder.MergeFrom(Device);
            }
            input.ReadMessage(subBuilder);
            Device = subBuilder;
            break;
          }
          case 42: {
            global::Ubii.Servers.Server subBuilder = new global::Ubii.Servers.Server();
            if (typeCase_ == TypeOneofCase.Server) {
              subBuilder.MergeFrom(Server);
            }
            input.ReadMessage(subBuilder);
            Server = subBuilder;
            break;
          }
          case 50: {
            global::Ubii.Sessions.Session subBuilder = new global::Ubii.Sessions.Session();
            if (typeCase_ == TypeOneofCase.Session) {
              subBuilder.MergeFrom(Session);
            }
            input.ReadMessage(subBuilder);
            Session = subBuilder;
            break;
          }
          case 58: {
            global::Ubii.Interactions.InteractionMsg subBuilder = new global::Ubii.Interactions.InteractionMsg();
            if (typeCase_ == TypeOneofCase.Interaction) {
              subBuilder.MergeFrom(Interaction);
            }
            input.ReadMessage(subBuilder);
            Interaction = subBuilder;
            break;
          }
          case 66: {
            global::Ubii.General.StringList subBuilder = new global::Ubii.General.StringList();
            if (typeCase_ == TypeOneofCase.StringList) {
              subBuilder.MergeFrom(StringList);
            }
            input.ReadMessage(subBuilder);
            StringList = subBuilder;
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
