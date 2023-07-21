const { admin } = require("./admin");
const { hash } = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const getUser = async ({ email, username, id }) => {
  try {
    const usersRaw = (await admin.database().ref("/users").get()).val();
    const userKey = Object.keys(usersRaw).find((x) => {
      if (email) return usersRaw[x].email === email;
      if (username) return usersRaw[x].email === username;
      if (id) return usersRaw[x].id === id;
    });
    if (!userKey) {
      console.log("User with that email/username/id not found!");
      return { userKey: null, user: null };
    }
    return { userKey: userKey, user: usersRaw[userKey] };
  } catch (error) {
    console.log(error.message);
    return { userKey: null, user: null };
  }
};

const addUser = async (email, password) => {
  try {
    const hashedPassword = await hash(password, 10);
    const user = {
      id: uuidv4(undefined, undefined, undefined),
      email: email,
      password: hashedPassword,
    };
    const response = await admin.database().ref("/users").push(user);
    if (!response) {
      console.log("Could not add the users!");
      return null;
    }
    return true;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

exports.getUser = getUser;
exports.addUser = addUser;
