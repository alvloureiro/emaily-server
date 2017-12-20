module.exports = mongoose => {
  const { Schema } = mongoose;

  const user = {
    googleId: String
  };

  const userSchema = new Schema(user);

  mongoose.model('users', userSchema);
};
