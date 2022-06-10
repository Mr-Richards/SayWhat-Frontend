export const imageToText = (capturedPhoto) => {
  console.log(capturedPhoto, 'capturedPhoto');
  const base64string = capturedPhoto.base64.replace(/^"(.+(?="$))"$/, '$1');

  const myHeaders = new Headers();
  myHeaders.append('apikey', 'K84624067388957');

  const formdata = new FormData();
  formdata.append('language', 'eng');
  formdata.append('detectOrientation', 'true');
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

  return fetch('https://api.ocr.space/parse/image', requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log('Error from image recognition api', error));
};
