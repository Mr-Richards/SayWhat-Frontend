const baseURL = 'http://192.168.1.191:3000/translations';

export const postTranslation = async (translation) => {
  try {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(translation),
    });
    return await response.json();
  } catch (error) {
    console.log(error, 'postTranslation error');
  }
};

export const getTranslationsByUserId = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`);
    return await response.json();
  } catch (error) {
    console.log(error, 'getTranslationsByUserId error');
  }
};
