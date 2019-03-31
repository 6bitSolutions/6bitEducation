import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text_907682";
    item['en'] = "Optimising The Future Of Edcuation";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_text2_766670";
    item['en'] = "About Us";
    
    item = {};
    this.items.push(item);
    item['key'] = "home_aboutus_869806";
    item['en'] = "Contact";
    
    item = {};
    this.items.push(item);
    item['key'] = "navbar_text_878118";
    item['en'] = "6 Bit Education";
    
    item = {};
    this.items.push(item);
    item['key'] = "aboutus_text_523449";
    item['en'] = "About Us";
    
    item = {};
    this.items.push(item);
    item['key'] = "aboutus_text_769887";
    item['en'] = "Frustrated at how education is currently conducted, six theoretical physicists came together to change the entire landscape.";
    
    item = {};
    this.items.push(item);
    item['key'] = "peoplesmall_text_872109";
    item['en'] = "[name]";
    
    item = {};
    this.items.push(item);
    item['key'] = "peoplesmall_text2_117470";
    item['en'] = "[about]";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text_289873";
    item['en'] = "Contact";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text2_390688";
    item['en'] = "We’d love to hear from you. Email us at contact@6bit.co.uk";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
