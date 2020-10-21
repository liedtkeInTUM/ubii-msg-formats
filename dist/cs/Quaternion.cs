// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/quaternion.proto
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.DataStructure {

  /// <summary>Holder for reflection information generated from proto/topicData/topicDataRecord/dataStructure/quaternion.proto</summary>
  public static partial class QuaternionReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/topicData/topicDataRecord/dataStructure/quaternion.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static QuaternionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cj5wcm90by90b3BpY0RhdGEvdG9waWNEYXRhUmVjb3JkL2RhdGFTdHJ1Y3R1",
            "cmUvcXVhdGVybmlvbi5wcm90bxISdWJpaS5kYXRhU3RydWN0dXJlIjgKClF1",
            "YXRlcm5pb24SCQoBeBgBIAEoARIJCgF5GAIgASgBEgkKAXoYAyABKAESCQoB",
            "dxgEIAEoAWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.DataStructure.Quaternion), global::Ubii.DataStructure.Quaternion.Parser, new[]{ "X", "Y", "Z", "W" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Quaternion : pb::IMessage<Quaternion> {
    private static readonly pb::MessageParser<Quaternion> _parser = new pb::MessageParser<Quaternion>(() => new Quaternion());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Quaternion> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.DataStructure.QuaternionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Quaternion() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Quaternion(Quaternion other) : this() {
      x_ = other.x_;
      y_ = other.y_;
      z_ = other.z_;
      w_ = other.w_;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Quaternion Clone() {
      return new Quaternion(this);
    }

    /// <summary>Field number for the "x" field.</summary>
    public const int XFieldNumber = 1;
    private double x_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public double X {
      get { return x_; }
      set {
        x_ = value;
      }
    }

    /// <summary>Field number for the "y" field.</summary>
    public const int YFieldNumber = 2;
    private double y_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public double Y {
      get { return y_; }
      set {
        y_ = value;
      }
    }

    /// <summary>Field number for the "z" field.</summary>
    public const int ZFieldNumber = 3;
    private double z_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public double Z {
      get { return z_; }
      set {
        z_ = value;
      }
    }

    /// <summary>Field number for the "w" field.</summary>
    public const int WFieldNumber = 4;
    private double w_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public double W {
      get { return w_; }
      set {
        w_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Quaternion);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Quaternion other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (X != other.X) return false;
      if (Y != other.Y) return false;
      if (Z != other.Z) return false;
      if (W != other.W) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (X != 0D) hash ^= X.GetHashCode();
      if (Y != 0D) hash ^= Y.GetHashCode();
      if (Z != 0D) hash ^= Z.GetHashCode();
      if (W != 0D) hash ^= W.GetHashCode();
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (X != 0D) {
        output.WriteRawTag(9);
        output.WriteDouble(X);
      }
      if (Y != 0D) {
        output.WriteRawTag(17);
        output.WriteDouble(Y);
      }
      if (Z != 0D) {
        output.WriteRawTag(25);
        output.WriteDouble(Z);
      }
      if (W != 0D) {
        output.WriteRawTag(33);
        output.WriteDouble(W);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (X != 0D) {
        size += 1 + 8;
      }
      if (Y != 0D) {
        size += 1 + 8;
      }
      if (Z != 0D) {
        size += 1 + 8;
      }
      if (W != 0D) {
        size += 1 + 8;
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Quaternion other) {
      if (other == null) {
        return;
      }
      if (other.X != 0D) {
        X = other.X;
      }
      if (other.Y != 0D) {
        Y = other.Y;
      }
      if (other.Z != 0D) {
        Z = other.Z;
      }
      if (other.W != 0D) {
        W = other.W;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            input.SkipLastField();
            break;
          case 9: {
            X = input.ReadDouble();
            break;
          }
          case 17: {
            Y = input.ReadDouble();
            break;
          }
          case 25: {
            Z = input.ReadDouble();
            break;
          }
          case 33: {
            W = input.ReadDouble();
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
