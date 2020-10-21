// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/pose3d.proto
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.DataStructure {

  /// <summary>Holder for reflection information generated from proto/topicData/topicDataRecord/dataStructure/pose3d.proto</summary>
  public static partial class Pose3DReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/topicData/topicDataRecord/dataStructure/pose3d.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static Pose3DReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cjpwcm90by90b3BpY0RhdGEvdG9waWNEYXRhUmVjb3JkL2RhdGFTdHJ1Y3R1",
            "cmUvcG9zZTNkLnByb3RvEhJ1YmlpLmRhdGFTdHJ1Y3R1cmUaO3Byb3RvL3Rv",
            "cGljRGF0YS90b3BpY0RhdGFSZWNvcmQvZGF0YVN0cnVjdHVyZS92ZWN0b3Iz",
            "LnByb3RvGj5wcm90by90b3BpY0RhdGEvdG9waWNEYXRhUmVjb3JkL2RhdGFT",
            "dHJ1Y3R1cmUvcXVhdGVybmlvbi5wcm90byKqAQoGUG9zZTNEEi0KCHBvc2l0",
            "aW9uGAEgASgLMhsudWJpaS5kYXRhU3RydWN0dXJlLlZlY3RvcjMSNAoKcXVh",
            "dGVybmlvbhgCIAEoCzIeLnViaWkuZGF0YVN0cnVjdHVyZS5RdWF0ZXJuaW9u",
            "SAASLAoFZXVsZXIYAyABKAsyGy51YmlpLmRhdGFTdHJ1Y3R1cmUuVmVjdG9y",
            "M0gAQg0KC29yaWVudGF0aW9uYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ubii.DataStructure.Vector3Reflection.Descriptor, global::Ubii.DataStructure.QuaternionReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.DataStructure.Pose3D), global::Ubii.DataStructure.Pose3D.Parser, new[]{ "Position", "Quaternion", "Euler" }, new[]{ "Orientation" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Pose3D : pb::IMessage<Pose3D> {
    private static readonly pb::MessageParser<Pose3D> _parser = new pb::MessageParser<Pose3D>(() => new Pose3D());
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Pose3D> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.DataStructure.Pose3DReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Pose3D() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Pose3D(Pose3D other) : this() {
      Position = other.position_ != null ? other.Position.Clone() : null;
      switch (other.OrientationCase) {
        case OrientationOneofCase.Quaternion:
          Quaternion = other.Quaternion.Clone();
          break;
        case OrientationOneofCase.Euler:
          Euler = other.Euler.Clone();
          break;
      }

    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Pose3D Clone() {
      return new Pose3D(this);
    }

    /// <summary>Field number for the "position" field.</summary>
    public const int PositionFieldNumber = 1;
    private global::Ubii.DataStructure.Vector3 position_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.DataStructure.Vector3 Position {
      get { return position_; }
      set {
        position_ = value;
      }
    }

    /// <summary>Field number for the "quaternion" field.</summary>
    public const int QuaternionFieldNumber = 2;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.DataStructure.Quaternion Quaternion {
      get { return orientationCase_ == OrientationOneofCase.Quaternion ? (global::Ubii.DataStructure.Quaternion) orientation_ : null; }
      set {
        orientation_ = value;
        orientationCase_ = value == null ? OrientationOneofCase.None : OrientationOneofCase.Quaternion;
      }
    }

    /// <summary>Field number for the "euler" field.</summary>
    public const int EulerFieldNumber = 3;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.DataStructure.Vector3 Euler {
      get { return orientationCase_ == OrientationOneofCase.Euler ? (global::Ubii.DataStructure.Vector3) orientation_ : null; }
      set {
        orientation_ = value;
        orientationCase_ = value == null ? OrientationOneofCase.None : OrientationOneofCase.Euler;
      }
    }

    private object orientation_;
    /// <summary>Enum of possible cases for the "orientation" oneof.</summary>
    public enum OrientationOneofCase {
      None = 0,
      Quaternion = 2,
      Euler = 3,
    }
    private OrientationOneofCase orientationCase_ = OrientationOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public OrientationOneofCase OrientationCase {
      get { return orientationCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearOrientation() {
      orientationCase_ = OrientationOneofCase.None;
      orientation_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Pose3D);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Pose3D other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Position, other.Position)) return false;
      if (!object.Equals(Quaternion, other.Quaternion)) return false;
      if (!object.Equals(Euler, other.Euler)) return false;
      if (OrientationCase != other.OrientationCase) return false;
      return true;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (position_ != null) hash ^= Position.GetHashCode();
      if (orientationCase_ == OrientationOneofCase.Quaternion) hash ^= Quaternion.GetHashCode();
      if (orientationCase_ == OrientationOneofCase.Euler) hash ^= Euler.GetHashCode();
      hash ^= (int) orientationCase_;
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (position_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Position);
      }
      if (orientationCase_ == OrientationOneofCase.Quaternion) {
        output.WriteRawTag(18);
        output.WriteMessage(Quaternion);
      }
      if (orientationCase_ == OrientationOneofCase.Euler) {
        output.WriteRawTag(26);
        output.WriteMessage(Euler);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (position_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Position);
      }
      if (orientationCase_ == OrientationOneofCase.Quaternion) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Quaternion);
      }
      if (orientationCase_ == OrientationOneofCase.Euler) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Euler);
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Pose3D other) {
      if (other == null) {
        return;
      }
      if (other.position_ != null) {
        if (position_ == null) {
          position_ = new global::Ubii.DataStructure.Vector3();
        }
        Position.MergeFrom(other.Position);
      }
      switch (other.OrientationCase) {
        case OrientationOneofCase.Quaternion:
          Quaternion = other.Quaternion;
          break;
        case OrientationOneofCase.Euler:
          Euler = other.Euler;
          break;
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
          case 10: {
            if (position_ == null) {
              position_ = new global::Ubii.DataStructure.Vector3();
            }
            input.ReadMessage(position_);
            break;
          }
          case 18: {
            global::Ubii.DataStructure.Quaternion subBuilder = new global::Ubii.DataStructure.Quaternion();
            if (orientationCase_ == OrientationOneofCase.Quaternion) {
              subBuilder.MergeFrom(Quaternion);
            }
            input.ReadMessage(subBuilder);
            Quaternion = subBuilder;
            break;
          }
          case 26: {
            global::Ubii.DataStructure.Vector3 subBuilder = new global::Ubii.DataStructure.Vector3();
            if (orientationCase_ == OrientationOneofCase.Euler) {
              subBuilder.MergeFrom(Euler);
            }
            input.ReadMessage(subBuilder);
            Euler = subBuilder;
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
