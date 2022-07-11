# SayWhat - Frontend
A translator app which uses optical character recognition to identify text in a captured photo, automatically recognizing the language and translating to a desired language. Users and previous translations are stored in a PostgreSQL database hosted by a Heroku server. User authentication is done by AWS with amplify.

This is my first project learning React Native.

## Getting Started
To get up and running follow these steps: 
* run `npm install` from both backend and frontend root directories (<a href="https://github.com/Mr-Richards/SayWhat-Backend" target="_blank" rel="noreferrer">backend repo<a />).
* subscribe and create an api key with Rapid API's <a href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/" target="_blank" rel="noreferrer">Microsoft Translator Text API. <a /> 
* sign up to recieve an api key with <a href="https://ocr.space/ocrapi" target="_blank" rel="noreferrer">OCR Spaces Free OCR API. <a />
* create a .env file in the frontend repo with the following content:
  
      FREE_OCR_API_KEY_2=#insert your OCR API here#
      RAPID_API_KEY=#insert your Mictosoft Translator Text API here#

(be sure that prettier doesnt format this file - no semi colon or spaces!)
  
* follow <a href="" target="_blank" rel="noreferrer">this<a /> link for a tutorial on how to set up AWS aplify if you wish to create your own authentication service for the login.
* run `npm start` from the frontend repo - then press `i` or `a` to run the app on the iOS simulator or the Android simulator respectively.
* to run the app on mobile be sure to have the expo client installed on your mobile device and scan the QR code provided in the terminal.

## APIs used
### Microsoft Translator Text:
  * part of the Azure Cognitive Services, cloud based machine translation service.
  
### OCR Space Free OCR API:
  * provides a simple way of parsing images and getting the extracted text results returned in a JSON format.
  
  
## Tech Stack
### Front End:
JavaScript <br />
React Native

### Back End:
Node.js <br />
Express <br />
PostgreSQL <br />
Heroku <br />
AWS with Amplify 

## Demo
I created a demonstration video where I do a brief walkthrough of the apps functionallity: <br />
https://youtu.be/6dM_vt9v-dA

## Screenshots
<img src="https://user-images.githubusercontent.com/100375389/178104080-9cd298c9-9251-45e0-a393-30449eb37097.PNG" width="100" height="200" /> <img src="https://user-images.githubusercontent.com/100375389/178104088-2233ebfc-1771-4965-a454-f57ec45a63bd.PNG" width="100" height="200" /> <img src="https://user-images.githubusercontent.com/100375389/178104568-5ab2bc14-5897-42b1-9e30-cef29d727570.PNG" width="100" height="200" /> <img src="https://user-images.githubusercontent.com/100375389/178104126-5d0d6d8f-cfa9-462a-971c-d652f80c763e.PNG" width="100" height="200" /> <img src="https://user-images.githubusercontent.com/100375389/178104131-e513c8d2-fa0c-4fa4-bdcc-dab4a3ae0ddd.PNG" width="100" height="200" /> <img src="https://user-images.githubusercontent.com/100375389/178104137-a4a74113-fef1-4410-9a4f-be97c151e7dc.PNG" width="100" height="200" />

