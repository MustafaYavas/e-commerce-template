import mongoose from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
