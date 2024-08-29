import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", function (next) {
  if (!this.username && !this.phone && !this.email) {
    next(
      new Error("At least one of username, phone, or email must be provided"),
    );
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

// Function to create a new user
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    console.log("User created successfully");
    return newUser;
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

// Example usage (you can comment this out when not needed)
//createUser({
// name: 'John Doe',
//  email: 'john@example.com',
//  password: 'password123'
// });

export { User, createUser };
