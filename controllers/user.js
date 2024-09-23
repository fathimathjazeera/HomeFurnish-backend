import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../utils/generateToken.js';
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password, 'reqbody');
  const findUser = await userModel.findOne({ email: email });
  try {
    if (findUser) {
      res.status(409)
      .json({
        status: 'error',
        message: 'User with this email already exists',
      });
    } else {
      const user = await userModel.create({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      });
      res.status(200)
      .json({
        status: 'success',
        message: 'Successfully registered.',
      });
      console.log('created');
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500);
    res.json({
      status: 'error',
      message: 'Failed to register user. Please try again later.',
    });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;
  const {ADMIN_EMAIL,ADMIN_PASSWORD} =process.env
  if (ADMIN_EMAIL == email && ADMIN_PASSWORD == password) {
      res.status(200)
      .json({
        status: 'success',
        message: 'Admin successfully loggedIn',
      });
    }else{
      const registeredUser = await userModel.findOne({ email: email });
      if (!registeredUser) {
        res.status(401).json({
          status: 'failed',
          message: 'User not found. Please register first.',
        });
      } else {
        bcrypt.compare(password, registeredUser.password).then((status) => {
          if (status) {
            let user = {
              id: registeredUser._id,
              name: registeredUser.name,
            };
            let token = generateAccessToken(user);
            res.status(200).json({
              status:'success',
              message: 'successfully logged In',
              userId: user.id,
              token: token,
            });
          } else {
            res.status(401).json({
              status: 'failed',
              message: 'Incorrect password login failed',
            });
          }
        });
      }
    }
};




export const  getLivingFurniture = async(req,res)=>{

}
