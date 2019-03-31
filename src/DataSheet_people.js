import DataSheetBase from './DataSheetBase.js';
import datasheet_people_row0_picture from './images/datasheet_people_row0_picture.png';
import datasheet_people_row1_picture from './images/datasheet_people_row1_picture.png';
import datasheet_people_row2_picture from './images/datasheet_people_row2_picture.png';
import datasheet_people_row3_picture from './images/datasheet_people_row3_picture.png';
import datasheet_people_row4_picture from './images/datasheet_people_row4_picture.png';
import datasheet_people_row5_picture from './images/datasheet_people_row5_picture.png';
import datasheet_people_row6_picture from './images/datasheet_people_row6_picture.png';

export default class DataSheet_people extends DataSheetBase {

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
    item['name'] = "Jon";
    item['about'] = " Jon is currently an EdTech development manager. As a result he has contacts in over 100 higher education institutions and knows the intricacies of their needs pertaining to EdTech. He has completed EdTech sales in over 40 universities with 100% success. Add to that a strong background in web development and scientific programming, making Jon the perfect lead for this project.";
    item['picture'] = datasheet_people_row0_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Rob";
    item['about'] = " Rob is a PhD researcher in EdTech, with the subject of his research being the method diversity of student responses. He is a gifted programmer having created a JavaScript mathematics engine and has won a scholarship in EdTech. He has been a lead developer for critical add-ons used by a leading EdTech product world wide.";
    item['picture'] = datasheet_people_row1_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Manjinder";
    item['about'] = " Manjinder has been intricately involved in teaching for many years. He has over 6 years of private tutoring experience, most recently working on designing and delivering crash courses for a Birmingham high school A-level class. When this is combined with over 7 years of programming experience, he is the right choice for design lead as he has seen and learned from the flaws of competitors.";
    item['picture'] = datasheet_people_row2_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Austin";
    item['about'] = " Austin has had a passion for teaching for as long as he can remember. After finishing his PhD, where he won a PGTA scholarship to recognise excellent teaching quality at the university, he went on to complete a PGDipEd. He is a fully qualified teacher. With over 8 years experience in software development and high performance computing, he has the ideal balance of teaching experience and software development. ";
    item['picture'] = datasheet_people_row3_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "George";
    item['about'] = " George is a university level teaching assistant and assessed problem marker. He has been a question author supporting core teaching at UoB and has created over 250 questions. During his undergraduate degree he won the Moreton prize for outstanding academic achievement. He is someone invested in teaching, question designing, and programming.";
    item['picture'] = datasheet_people_row4_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Rich";
    item['about'] = " Rich is an EdTech developer at UoB creating learning material for universities around the world. With a PhD in theoretical physics, he brings a pure mathematical approach to traditionally numerically heavy areas where possible. He has industrial experience with machine learning, having developed algorithms for dozens of applications. As such, he is quintessential as our machine learning specialist. ";
    item['picture'] = datasheet_people_row5_picture;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['name'] = "Nicola";
    item['about'] = " Nicola is Director of Education, College of Engineering & Physical Sciences at UoB. As a result, she has responsibility for the assessment requirements of 5,000 students. She has been recognised for teaching innovation. With over 100 contacts in higher education institutions across the world, she is ideal as our education consultant.";
    item['picture'] = datasheet_people_row6_picture;
    item.key = key++;
  }

}
