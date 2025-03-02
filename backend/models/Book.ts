import { model, Schema, Model, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  authorFirstName: string;
  authorLastName: string;
}

const BookSchema: Schema = new Schema<IBook>({
  title: { type: String, required: true },
  authorFirstName: { type: String, required: true },
  authorLastName: { type: String, required: true }
});

export const Book: Model<IBook> = model<IBook>('Book', BookSchema);