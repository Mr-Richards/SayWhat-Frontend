const baseURL = 'https://say-what.herokuapp.com/user';

export const createUser = async (user) => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error, 'createuser error');
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error, 'getUserById error');
  }
};
