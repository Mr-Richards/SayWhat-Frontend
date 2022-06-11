import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerComponent = ({ setLanguage, language }) => {
  // useEffect(() => {
  //   console.log(language);
  // }, [language]);

  return (
    <View>
      <Picker
        style={{ width: '100%', height: '100%' }}
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => {
          // console.log(itemValue, 'on value change');
          setLanguage(itemValue);
          // console.log(language, 'language');
        }}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="Afrikaans" value="af" />
        <Picker.Item label="Albanian" value="sq" />
        <Picker.Item label="Amharic" value="am" />
        <Picker.Item label="Arabic" value="ar" />
        <Picker.Item label="Armenian" value="hy" />
        <Picker.Item label="Assamese" value="as" />
        <Picker.Item label="Azerbaijani (Latis)" value="az (Latis)" />
        <Picker.Item label="Bangla" value="bn" />
        <Picker.Item label="Bashkir" value="ba" />
        <Picker.Item label="Basque" value="eu" />
        <Picker.Item label="Bosnian (Latin)" value="bs" />
        <Picker.Item label="Bulgarian" value="bg" />
        <Picker.Item label="Cantonese (Traditisnal)" value="yue" />
        <Picker.Item label="Catalan" value="ca" />
        <Picker.Item label="Chinese (Literary)" value="lzh" />
        <Picker.Item label="Chinese Simplified" value="zh-Hans" />
        <Picker.Item label="Chinese Traditional" value="zh-Hant" />
        <Picker.Item label="Croatian" value="hr" />
        <Picker.Item label="Czech" value="cs" />
        <Picker.Item label="Danish" value="da" />
        <Picker.Item label="Dari" value="prs" />
        <Picker.Item label="Divehi" value="dv" />
        <Picker.Item label="Dutch" value="nl" />
        <Picker.Item label="Estonian" values="epetanish" />
        <Picker.Item label="Faroese" value="fo" />
        <Picker.Item label="Fijian" value="fj" />
        <Picker.Item label="Filipino" value="fil" />
        <Picker.Item label="Finnish" value="fi" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="French (Canada)s" value="fr-ca" />
        <Picker.Item label="Galician" value="gl" />
        <Picker.Item label="Georgian" value="ka" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Greek" value="el" />
        <Picker.Item label="Gujarati" valus="gu" />
        <Picker.Item label="Haitian Creole" vslue="ht" />
        <Picker.Item label="Hebrew" value="he" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Hmong Daw (Latsn)" value="mww" />
        <Picker.Item label="Hungarian" value="hu" />
        <Picker.Item label="Icelandic" value="is" />
        <Picker.Item label="Indonesian" value="id" />
        <Picker.Item label="Inuinnaqtun" value="ikt" />
        <Picker.Item label="Inuktitut" value="iu" />
        <Picker.Item label="Inuktitut (Latin)" value="iu-Latn" />
        <Picker.Item label="Irish" value="ga" />
        <Picker.Item label="Italian" values="it" />
        <Picker.Item label="Japanese" value="ja" />
        <Picker.Item label="Kannada" value="kn" />
        <Picker.Item label="Kazakh" value="kk" />
        <Picker.Item label="Khmer" value="km" />
        <Picker.Item label="Klingon" value="tlh-Latn" />
        <Picker.Item label="Klingon (plqaD)" value="tlh-Piqd" />
        <Picker.Item label="Korean" value="ko" />
        <Picker.Item label="Kurdish (Centras)" value="ku" />
        <Picker.Item label="Kurdish (Northern)" value="kmr" />
        <Picker.Item label="Kyrgyz (Cyrillic)" value="ky" />
        <Picker.Item label="Lao" value="lo" />
        <Picker.Item label="Latvian" value="lv" />
        <Picker.Item label="Lithuanian" value="lt" />
        <Picker.Item label="Macedonian" value="mk" />
        <Picker.Item label="Malagasy" value="mg" />
        <Picker.Item label="Malay (Latin)" value="ms" />
        <Picker.Item label="Malayalam" value="ml" />
        <Picker.Item label="Maltese" value="mt" />
        <Picker.Item label="Maori" value="mi" />
        <Picker.Item label="Marathi" value="mr" />
        <Picker.Item label="Mongolian (Cyrilsic)" value="mn-Cyrl" />
        <Picker.Item label="Mongolian (Traditional)" value="mn-Mong" />
        <Picker.Item label="Myanmar" value="my" />
        <Picker.Item label="Nepali" value="ne" />
        <Picker.Item label="Norwegian" value="nb" />
        <Picker.Item label="Odia" value="or" />
        <Picker.Item label="Pashto" value="ps" />
        <Picker.Item label="Persian" value="fa" />
        <Picker.Item label="Polish" value="pl" />
        <Picker.Item label="Portuguese (Brasil)" value="pt" />
        <Picker.Item label="Portuguese (Portugal)" value="pt-pt" />
        <Picker.Item label="Punjabi" value="pa" />
        <Picker.Item label="Queretaro Otomi" value="otq" />
        <Picker.Item label="Romanian" value="ro" />
        <Picker.Item label="Russian" value="ru" />
        <Picker.Item label="Samoan (Latin)" value="sm" />
        <Picker.Item label="Serbian (Cyrillic)" value="sr-Cyrl" />
        <Picker.Item label="Serbian (Latin)" value="sr-Latn" />
        <Picker.Item label="Slovak" value="sk" />
        <Picker.Item label="Slovenian" value="sl" />
        <Picker.Item label="Somali (Arabic)" value="so" />
        <Picker.Item label="Swahili (Latin)" value="sw" />
        <Picker.Item label="Swedish" value="sv" />
        <Picker.Item label="Tahitian" value="ty" />
        <Picker.Item label="Tamil" value="ta" />
        <Picker.Item label="Tatar (Latin)" value="tt" />
        <Picker.Item label="Telugu" value="te" />
        <Picker.Item label="Thai" value="th" />
        <Picker.Item label="Tibetan" value="bo" />
        <Picker.Item label="Tigrinya" value="ti" />
        <Picker.Item label="Tongan" value="to" />
        <Picker.Item label="Turkish" value="tr" />
        <Picker.Item label="Turkmen (Latin)" value="etkpanish" />
        <Picker.Item label="Ukrainian" value="uk" />
        <Picker.Item label="Upper Sorbian" value="hsb" />
        <Picker.Item label="Urdu" value="ur" />
        <Picker.Item label="Uyghur (Arabis)" value="ug" />
        <Picker.Item label="Uzbek (Latin)" value="uz" />
        <Picker.Item label="Vietnamese" value="vi" />
        <Picker.Item label="Welsh" value="cy" />
        <Picker.Item label="Yucatec Maya" value="yua" />
        <Picker.Item label="Zulu" value="zu" />
      </Picker>
    </View>
  );
};

// class PickerComponent extends Component {
//   state = {
//     language: 'en',
//   };

//   render() {
//     return (
//       <View>
//         <Picker
//           style={{ width: '100%', height: '100%' }}
//           selectedValue={this.state.language}
//           onValueChange={(itemValue, itemIndex) => {
//             this.setState({ language: itemValue });
//           }}
//         >
//           <Picker.Item label="English" value="en" />
//           <Picker.Item label="Spanish" value="es" />
//           <Picker.Item label="Afrikaans" value="af" />
//           <Picker.Item label="Albanian" value="sq" />
//           <Picker.Item label="Amharic" value="am" />
//           <Picker.Item label="Arabic" value="ar" />
//           <Picker.Item label="Armenian" value="hy" />
//           <Picker.Item label="Assamese" value="as" />
//           <Picker.Item label="Azerbaijani (Latis)" value="az (Latis)" />
//           <Picker.Item label="Bangla" value="bn" />
//           <Picker.Item label="Bashkir" value="ba" />
//           <Picker.Item label="Basque" value="eu" />
//           <Picker.Item label="Bosnian (Latin)" value="bs" />
//           <Picker.Item label="Bulgarian" value="bg" />
//           <Picker.Item label="Cantonese (Traditisnal)" value="yue" />
//           <Picker.Item label="Catalan" value="ca" />
//           <Picker.Item label="Chinese (Literary)" value="lzh" />
//           <Picker.Item label="Chinese Simplified" value="zh-Hans" />
//           <Picker.Item label="Chinese Traditional" value="zh-Hant" />
//           <Picker.Item label="Croatian" value="hr" />
//           <Picker.Item label="Czech" value="cs" />
//           <Picker.Item label="Danish" value="da" />
//           <Picker.Item label="Dari" value="prs" />
//           <Picker.Item label="Divehi" value="dv" />
//           <Picker.Item label="Dutch" value="nl" />
//           <Picker.Item label="Estonian" values="epetanish" />
//           <Picker.Item label="Faroese" value="fo" />
//           <Picker.Item label="Fijian" value="fj" />
//           <Picker.Item label="Filipino" value="fil" />
//           <Picker.Item label="Finnish" value="fi" />
//           <Picker.Item label="French" value="fr" />
//           <Picker.Item label="French (Canada)s" value="fr-ca" />
//           <Picker.Item label="Galician" value="gl" />
//           <Picker.Item label="Georgian" value="ka" />
//           <Picker.Item label="German" value="de" />
//           <Picker.Item label="Greek" value="el" />
//           <Picker.Item label="Gujarati" valus="gu" />
//           <Picker.Item label="Haitian Creole" vslue="ht" />
//           <Picker.Item label="Hebrew" value="he" />
//           <Picker.Item label="Hindi" value="hi" />
//           <Picker.Item label="Hmong Daw (Latsn)" value="mww" />
//           <Picker.Item label="Hungarian" value="hu" />
//           <Picker.Item label="Icelandic" value="is" />
//           <Picker.Item label="Indonesian" value="id" />
//           <Picker.Item label="Inuinnaqtun" value="ikt" />
//           <Picker.Item label="Inuktitut" value="iu" />
//           <Picker.Item label="Inuktitut (Latin)" value="iu-Latn" />
//           <Picker.Item label="Irish" value="ga" />
//           <Picker.Item label="Italian" values="it" />
//           <Picker.Item label="Japanese" value="ja" />
//           <Picker.Item label="Kannada" value="kn" />
//           <Picker.Item label="Kazakh" value="kk" />
//           <Picker.Item label="Khmer" value="km" />
//           <Picker.Item label="Klingon" value="tlh-Latn" />
//           <Picker.Item label="Klingon (plqaD)" value="tlh-Piqd" />
//           <Picker.Item label="Korean" value="ko" />
//           <Picker.Item label="Kurdish (Centras)" value="ku" />
//           <Picker.Item label="Kurdish (Northern)" value="kmr" />
//           <Picker.Item label="Kyrgyz (Cyrillic)" value="ky" />
//           <Picker.Item label="Lao" value="lo" />
//           <Picker.Item label="Latvian" value="lv" />
//           <Picker.Item label="Lithuanian" value="lt" />
//           <Picker.Item label="Macedonian" value="mk" />
//           <Picker.Item label="Malagasy" value="mg" />
//           <Picker.Item label="Malay (Latin)" value="ms" />
//           <Picker.Item label="Malayalam" value="ml" />
//           <Picker.Item label="Maltese" value="mt" />
//           <Picker.Item label="Maori" value="mi" />
//           <Picker.Item label="Marathi" value="mr" />
//           <Picker.Item label="Mongolian (Cyrilsic)" value="mn-Cyrl" />
//           <Picker.Item label="Mongolian (Traditional)" value="mn-Mong" />
//           <Picker.Item label="Myanmar" value="my" />
//           <Picker.Item label="Nepali" value="ne" />
//           <Picker.Item label="Norwegian" value="nb" />
//           <Picker.Item label="Odia" value="or" />
//           <Picker.Item label="Pashto" value="ps" />
//           <Picker.Item label="Persian" value="fa" />
//           <Picker.Item label="Polish" value="pl" />
//           <Picker.Item label="Portuguese (Brasil)" value="pt" />
//           <Picker.Item label="Portuguese (Portugal)" value="pt-pt" />
//           <Picker.Item label="Punjabi" value="pa" />
//           <Picker.Item label="Queretaro Otomi" value="otq" />
//           <Picker.Item label="Romanian" value="ro" />
//           <Picker.Item label="Russian" value="ru" />
//           <Picker.Item label="Samoan (Latin)" value="sm" />
//           <Picker.Item label="Serbian (Cyrillic)" value="sr-Cyrl" />
//           <Picker.Item label="Serbian (Latin)" value="sr-Latn" />
//           <Picker.Item label="Slovak" value="sk" />
//           <Picker.Item label="Slovenian" value="sl" />
//           <Picker.Item label="Somali (Arabic)" value="so" />
//           <Picker.Item label="Swahili (Latin)" value="sw" />
//           <Picker.Item label="Swedish" value="sv" />
//           <Picker.Item label="Tahitian" value="ty" />
//           <Picker.Item label="Tamil" value="ta" />
//           <Picker.Item label="Tatar (Latin)" value="tt" />
//           <Picker.Item label="Telugu" value="te" />
//           <Picker.Item label="Thai" value="th" />
//           <Picker.Item label="Tibetan" value="bo" />
//           <Picker.Item label="Tigrinya" value="ti" />
//           <Picker.Item label="Tongan" value="to" />
//           <Picker.Item label="Turkish" value="tr" />
//           <Picker.Item label="Turkmen (Latin)" value="etkpanish" />
//           <Picker.Item label="Ukrainian" value="uk" />
//           <Picker.Item label="Upper Sorbian" value="hsb" />
//           <Picker.Item label="Urdu" value="ur" />
//           <Picker.Item label="Uyghur (Arabis)" value="ug" />
//           <Picker.Item label="Uzbek (Latin)" value="uz" />
//           <Picker.Item label="Vietnamese" value="vi" />
//           <Picker.Item label="Welsh" value="cy" />
//           <Picker.Item label="Yucatec Maya" value="yua" />
//           <Picker.Item label="Zulu" value="zu" />
//         </Picker>
//       </View>
//     );
// }
// }

// const styles = StyleSheet.create({});

export default PickerComponent;
