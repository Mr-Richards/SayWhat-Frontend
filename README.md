# SayWhat - frontend
A translator app which uses optical character recognition to identify text in a captured photo, automatically recognising the language and translating to a desired language of choice. 

First project learning React Native

## Getting Started
To get up and running follow these steps: 
* run `npm install` from both backend and frontend repos (<a href="https://github.com/Mr-Richards/SayWhat-Backend" target="_blank" rel="noreferrer">backend repo<a />) 
* subscribe and create an api key with Rapid API's <a href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/" target="_blank" rel="noreferrer">Microsoft Translator Text API <a /> 
* sign up to recieve an api key with <a href="https://ocr.space/ocrapi" target="_blank" rel="noreferrer">OCR Spaces Free OCR API <a />
* create a .env file in the frontend repo with the following content:
  
      FREE_OCR_API_KEY_2=#insert your OCR API here#
      RAPID_API_KEY=#insert your Mictosoft Translator Text API here#

(be sure that prettier doesnt format this file - no semi colon or spaces!)
  
* follow <a href="" target="_blank" rel="noreferrer">this<a /> link for a tutorial on how to set up AWS aplify for the authentication service for the back end
* run `npm start` from the frontend repo - then press `i` or `a` to run the app on the iOS simulator or the Android simulator respectively .
* to run the app on mobile be sure to have the expo client installed on your mobile device and scan the QR code provided in the terminal.

## APIs used
### Microsoft Translator Text:
  * part of the Azure Cognitive Services, cloud based machince translation service.
  
### OCR Space Free OCR API:
  * provides a simple way of parsing images and getting the extracted text results returned in a JSON format.
  
  
## Tech Stack
### Front End:
JavaScript
React Native

### Back End:
Node.js
Express 
Sequelize
AWS with Amplify 

### Demo
I created a demonstration video where I do a brief walkthrough of the apps functionallity. <br />
https://youtu.be/6dM_vt9v-dA


