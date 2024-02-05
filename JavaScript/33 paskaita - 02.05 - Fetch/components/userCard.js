// import Par from ".../.../"

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

    const email =  document.createElement('p');
    const emailText = document.createTextNode(`Email: ${this.email}`);
    email.appendChild(emailText);

    const age =  document.createElement('p');
    const ageText = document.createTextNode(`Age: ${this.age}`);
    age.appendChild(ageText);

    const location =  document.createElement('p');
    const locationText = document.createTextNode(`Lives in: ${this.city}, ${this.country}`);
    location.appendChild(locationText);

    cardDiv.append(picture, pavarde, email, age, location);
    return cardDiv;
  }
}