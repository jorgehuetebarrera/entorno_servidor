import { User } from '../../models/index.js';
import { encriptPassword,checkHas } from '../../utils/encrypt.js';

export async function getUserByNameAndPassword(username, password){
  const user = await User.findOne({ username, password });

  if(!user) throw Error('No user found');
  if(!checkHas(password,user.password))throw Error('Invalid password');

  return user;
}

export async function getUsers(filters){
  const { name }= filters;
  const query={
    username: name && new RegExp(name,'i'),
  };

  const cleanedQuery = Object.fromEntries(
    Object.entries(query).filter(([_, a]) => a !== undefined)
  );

  const user = await User.find(cleanedQuery);

  return users;
}

export async function createUser(user){
  const userDoc = new User(user);
  const createdUser = await user.Doc.save();
  return createdUser;
}
