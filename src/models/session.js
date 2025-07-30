import { model, Schema } from 'mongoose';

const sessionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    accessToken: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
      require: true,
    },
    accessTokenValidUntil: {
      type: Date,
      require: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SessionsCollection = model('Sessions', sessionsSchema);
