export const textTranslater = (text, language) => {
  const API_KEY = process.env.RAPID_API_KEY + '';

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
    body: JSON.stringify(text),
  };

  return fetch(
    `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=${language}&textType=plain&profanityAction=NoAction`,
    options,
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result, 'text after translation');
      return result;
    })
    .catch((err) => console.error('Error from translate api', err));
};
