import userModel from '../../models/userModel.js';
import { hashPassword, comparePasswords } from '../../helpers/passwordHelper/hashPasswords.js';
import { validateAuth } from '../../helpers/validation/authValidation.js';

export const getUsers = async (req, res) => {
  try {
    
     // Get total count of users with role 'user' (without pagination and searching)
     const totalUsers = await userModel.countDocuments({ role: 'user' });
     
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Validate that page is a positive integer
    if (!Number.isInteger(page) || page < 1) { 
      return res.status(400).json({
        success: false,
        message: 'Invalid page parameter. It must be a positive integer.',
      });
    }

    // Validate that limit is a positive integer
    if (!Number.isInteger(limit) || limit < 1) {
      return res.status(400).json({
        success: false,
        message: 'Invalid limit parameter. It must be a positive integer.',
      });
    }

    // Calculate the skip value for pagination
    const skip = (page - 1) * limit;

    // Search
    const keyword = req.query.search || '';

    // Retrieve users with pagination and searching
    const allUsers = await userModel
      .find({
        $or: [
          { username: { $regex: keyword, $options: 'i' } }, // substring match
          { email: { $regex: keyword, $options: 'i' } },
        ],
        role: 'user', // Filter by role 'user'
      })
      .skip(skip)
      .limit(limit);

 

    res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      totalUsers,
      users: allUsers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error while retrieving users',
      error,
    });
  }
};


// PUT request to update user information
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const { username, email, password, role } = req.body;

    // Hash your passwords
    const hashedPassword = await hashPassword(password);

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { username, email, password: hashedPassword, role },
      { new: true }
    );

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user',error });
  }
};

// DELETE request to delete a user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

// get user by id

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Retrieve the user by ID
    const user = await userModel.findById(userId);

    if (user) {
      res.status(200).json({ success: true, message: 'User retrieved successfully', user });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error while retrieving user', error });
  }
};
