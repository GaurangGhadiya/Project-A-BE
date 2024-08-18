import bcrypt from 'bcryptjs';


export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };
  
  // Utility function to compare passwords
 export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  };