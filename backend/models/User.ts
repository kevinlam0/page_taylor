import { IBook } from "./Book";
import { Schema, model, Document, Types, Model } from "mongoose";

export interface IUser extends Document {
  firstName: string,
  lastName: string,
  readBooks: Types.ObjectId[] | IBook[];
}

const UserSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  readBooks: [{ type: Schema.Types.ObjectId, ref: "Book" }]
})

export const UserModel: Model<IUser> = model<IUser>("User", UserSchema);