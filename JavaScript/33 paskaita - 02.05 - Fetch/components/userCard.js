import Par from "../../29 paskaita - 01.30 - JS Komponentai (ne react) ir moduliai/modules/paragraphs.js";

export default class User{
  constructor({name, picture:{large:diffName}, email, location, dob:{age}}){
    this.fullName = `${name.first} ${name.last}`;
    this.photo = diffName;
    this.email = email;
    this.country = location.country;
    this.city = location.city;
    this.age = age;

    return this.render()
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('randomUserCard');

    const picture = document.createElement('img');
    picture.setAttribute('src', this.photo);
    picture.setAttribute('alt', 'Profile picture');

    const pavarde =  document.createElement('h1');
    const pavardeText = document.createTextNode(this.fullName);
    pavarde.appendChild(pavardeText);

    const email = new Par({tekstas: `Email: ${this.email}`});
    const age = new Par({tekstas: `Age: ${this.age}`});
    const location = new Par({tekstas: `Lives in: ${this.city}, ${this.country}`});

    cardDiv.append(picture, pavarde, email, age, location);
    return cardDiv;
  }
}