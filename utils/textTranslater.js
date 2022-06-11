export const textTranslater = (text, language) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '24a4c869d8mshd3fb790cde740c9p16d903jsndc5d572472f9',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
    },
    body: JSON.stringify(text),
  };

  return (
    fetch(
      `https://microsoft-translator-text.p.rapidapi.com/translate?api-version=3.0&to%5B0%5D=${language}&textType=plain&profanityAction=NoAction`,
      options,
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        return result;
      })
      // .then((response) => console.log(response))
      .catch((err) => console.error('Error from translate api', err))
  );
};
