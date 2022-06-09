// require('dotenv').config('../.env');

export const ImageToText = (capturedPhoto) => {
  const base64string = capturedPhoto.base64.replace(/^"(.+(?="$))"$/, '$1');

  const myHeaders = new Headers();
  myHeaders.append('apikey', 'K84624067388957');

  const formdata = new FormData();
  formdata.append('language', 'eng');
  formdata.append('isOverlayRequired', 'false');
  formdata.append('iscreatesearchablepdf', 'false');
  formdata.append('issearchablepdfhidetextlayer', 'false');
  formdata.append('filetype', 'jpg');
  formdata.append('base64image', `data:image/jpg;base64,${base64string}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://api.ocr.space/parse/image', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result, 'result'))
    .catch((error) => console.log('error', error));
};
