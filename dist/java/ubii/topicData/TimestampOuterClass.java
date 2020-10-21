// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/timestamp.proto

package ubii.topicData;

public final class TimestampOuterClass {
  private TimestampOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface TimestampOrBuilder extends
      // @@protoc_insertion_point(interface_extends:ubii.topicData.Timestamp)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>optional int64 seconds = 1;</code>
     */
    long getSeconds();

    /**
     * <code>optional int32 nanos = 2;</code>
     */
    int getNanos();
  }
  /**
   * Protobuf type {@code ubii.topicData.Timestamp}
   */
  public  static final class Timestamp extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:ubii.topicData.Timestamp)
      TimestampOrBuilder {
    // Use Timestamp.newBuilder() to construct.
    private Timestamp(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Timestamp() {
      seconds_ = 0L;
      nanos_ = 0;
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return com.google.protobuf.UnknownFieldSet.getDefaultInstance();
    }
    private Timestamp(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      int mutable_bitField0_ = 0;
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            default: {
              if (!input.skipField(tag)) {
                done = true;
              }
              break;
            }
            case 8: {

              seconds_ = input.readInt64();
              break;
            }
            case 16: {

              nanos_ = input.readInt32();
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ubii.topicData.TimestampOuterClass.internal_static_ubii_topicData_Timestamp_descriptor;
    }

    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ubii.topicData.TimestampOuterClass.internal_static_ubii_topicData_Timestamp_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ubii.topicData.TimestampOuterClass.Timestamp.class, ubii.topicData.TimestampOuterClass.Timestamp.Builder.class);
    }

    public static final int SECONDS_FIELD_NUMBER = 1;
    private long seconds_;
    /**
     * <code>optional int64 seconds = 1;</code>
     */
    public long getSeconds() {
      return seconds_;
    }

    public static final int NANOS_FIELD_NUMBER = 2;
    private int nanos_;
    /**
     * <code>optional int32 nanos = 2;</code>
     */
    public int getNanos() {
      return nanos_;
    }

    private byte memoizedIsInitialized = -1;
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (seconds_ != 0L) {
        output.writeInt64(1, seconds_);
      }
      if (nanos_ != 0) {
        output.writeInt32(2, nanos_);
      }
    }

    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (seconds_ != 0L) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt64Size(1, seconds_);
      }
      if (nanos_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(2, nanos_);
      }
      memoizedSize = size;
      return size;
    }

    private static final long serialVersionUID = 0L;
    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof ubii.topicData.TimestampOuterClass.Timestamp)) {
        return super.equals(obj);
      }
      ubii.topicData.TimestampOuterClass.Timestamp other = (ubii.topicData.TimestampOuterClass.Timestamp) obj;

      boolean result = true;
      result = result && (getSeconds()
          == other.getSeconds());
      result = result && (getNanos()
          == other.getNanos());
      return result;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptorForType().hashCode();
      hash = (37 * hash) + SECONDS_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          getSeconds());
      hash = (37 * hash) + NANOS_FIELD_NUMBER;
      hash = (53 * hash) + getNanos();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.topicData.TimestampOuterClass.Timestamp parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(ubii.topicData.TimestampOuterClass.Timestamp prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code ubii.topicData.Timestamp}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:ubii.topicData.Timestamp)
        ubii.topicData.TimestampOuterClass.TimestampOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return ubii.topicData.TimestampOuterClass.internal_static_ubii_topicData_Timestamp_descriptor;
      }

      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return ubii.topicData.TimestampOuterClass.internal_static_ubii_topicData_Timestamp_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                ubii.topicData.TimestampOuterClass.Timestamp.class, ubii.topicData.TimestampOuterClass.Timestamp.Builder.class);
      }

      // Construct using ubii.topicData.TimestampOuterClass.Timestamp.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      public Builder clear() {
        super.clear();
        seconds_ = 0L;

        nanos_ = 0;

        return this;
      }

      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return ubii.topicData.TimestampOuterClass.internal_static_ubii_topicData_Timestamp_descriptor;
      }

      public ubii.topicData.TimestampOuterClass.Timestamp getDefaultInstanceForType() {
        return ubii.topicData.TimestampOuterClass.Timestamp.getDefaultInstance();
      }

      public ubii.topicData.TimestampOuterClass.Timestamp build() {
        ubii.topicData.TimestampOuterClass.Timestamp result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      public ubii.topicData.TimestampOuterClass.Timestamp buildPartial() {
        ubii.topicData.TimestampOuterClass.Timestamp result = new ubii.topicData.TimestampOuterClass.Timestamp(this);
        result.seconds_ = seconds_;
        result.nanos_ = nanos_;
        onBuilt();
        return result;
      }

      public Builder clone() {
        return (Builder) super.clone();
      }
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          Object value) {
        return (Builder) super.setField(field, value);
      }
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return (Builder) super.clearField(field);
      }
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return (Builder) super.clearOneof(oneof);
      }
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, Object value) {
        return (Builder) super.setRepeatedField(field, index, value);
      }
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          Object value) {
        return (Builder) super.addRepeatedField(field, value);
      }
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof ubii.topicData.TimestampOuterClass.Timestamp) {
          return mergeFrom((ubii.topicData.TimestampOuterClass.Timestamp)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(ubii.topicData.TimestampOuterClass.Timestamp other) {
        if (other == ubii.topicData.TimestampOuterClass.Timestamp.getDefaultInstance()) return this;
        if (other.getSeconds() != 0L) {
          setSeconds(other.getSeconds());
        }
        if (other.getNanos() != 0) {
          setNanos(other.getNanos());
        }
        onChanged();
        return this;
      }

      public final boolean isInitialized() {
        return true;
      }

      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        ubii.topicData.TimestampOuterClass.Timestamp parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (ubii.topicData.TimestampOuterClass.Timestamp) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private long seconds_ ;
      /**
       * <code>optional int64 seconds = 1;</code>
       */
      public long getSeconds() {
        return seconds_;
      }
      /**
       * <code>optional int64 seconds = 1;</code>
       */
      public Builder setSeconds(long value) {
        
        seconds_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>optional int64 seconds = 1;</code>
       */
      public Builder clearSeconds() {
        
        seconds_ = 0L;
        onChanged();
        return this;
      }

      private int nanos_ ;
      /**
       * <code>optional int32 nanos = 2;</code>
       */
      public int getNanos() {
        return nanos_;
      }
      /**
       * <code>optional int32 nanos = 2;</code>
       */
      public Builder setNanos(int value) {
        
        nanos_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>optional int32 nanos = 2;</code>
       */
      public Builder clearNanos() {
        
        nanos_ = 0;
        onChanged();
        return this;
      }
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return this;
      }

      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return this;
      }


      // @@protoc_insertion_point(builder_scope:ubii.topicData.Timestamp)
    }

    // @@protoc_insertion_point(class_scope:ubii.topicData.Timestamp)
    private static final ubii.topicData.TimestampOuterClass.Timestamp DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new ubii.topicData.TimestampOuterClass.Timestamp();
    }

    public static ubii.topicData.TimestampOuterClass.Timestamp getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Timestamp>
        PARSER = new com.google.protobuf.AbstractParser<Timestamp>() {
      public Timestamp parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
          return new Timestamp(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<Timestamp> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Timestamp> getParserForType() {
      return PARSER;
    }

    public ubii.topicData.TimestampOuterClass.Timestamp getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ubii_topicData_Timestamp_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ubii_topicData_Timestamp_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n/proto/topicData/topicDataRecord/timest" +
      "amp.proto\022\016ubii.topicData\"+\n\tTimestamp\022\017" +
      "\n\007seconds\030\001 \001(\003\022\r\n\005nanos\030\002 \001(\005b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_ubii_topicData_Timestamp_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ubii_topicData_Timestamp_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ubii_topicData_Timestamp_descriptor,
        new java.lang.String[] { "Seconds", "Nanos", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
