export default class Rating{
  constructor({id, rtg, clicks}){
    this.id = id;
    this.rtg = rtg;
    this.clicks = clicks;
    return this.render();
  }
  render(){
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('ratingDiv');

    const rate = document.createElement('p');
    const rateText = document.createTextNode('Rate this coffee:');
    rate.appendChild(rateText);
    rate.style.textAlign = 'center';

    const stars = document.createElement('div');
    stars.classList.add('stars');

    const star1 = document.createElement('i');
    const star2 = document.createElement('i');
    const star3 = document.createElement('i');
    const star4 = document.createElement('i');
    const star5 = document.createElement('i');

    const average = document.createElement('p');
    const averageText = document.createTextNode('This coffee wasnt rated yet.');
    average.appendChild(averageText);
    average.style.textAlign = 'center';
    
    stars.append(star1, star2, star3, star4, star5);

    fetch(`http://localhost:3000/coffee/${this.id}`)
      .then(res => res.json())
      .then(data => {
        stars.childNodes.forEach((star, index1) => {
          if(index1+1 <= data.rtg/data.clicks){
            star.classList.add('bi', 'bi-star-fill');
          } else if(index1+1 == Math.ceil(data.rtg/data.clicks)){
            console.log(index1);
            star.classList.add('bi', 'bi-star-half');
          } else {
            star.classList.add('bi', 'bi-star');
          };
          if(data.clicks){
            averageText.textContent = `(${(data.rtg/data.clicks).toPrecision(2)}, from ${data.clicks} drinkers)`;
          }
          stars.childNodes.forEach((star, index1) => {
            star.addEventListener('mousemove', () => {
              stars.childNodes.forEach((star, index2) => {
                if(index1 >= index2){  
                  star.classList.add('bi-star-fill');
                  star.classList.remove('bi-star', 'bi-star-half');
                } else {
                  star.classList.remove('bi-star-fill');
                  star.classList.add('bi-star');
                }
              })
            });
            star.addEventListener('click', e => {
      
              const newRating = {
                clicks: data.clicks + 1,
                rtg: data.rtg + index1 + 1
              }
      
              fetch(`http://localhost:3000/coffee/${this.id}`, {
                method: "PATCH",
                header: {
                  "Content-Type":"application/json"
                },
                body: JSON.stringify(newRating)
              });
      
              this.clicks = newRating.clicks;
              this.rtg = newRating.rtg;
      
              averageText.textContent = `(${(this.rtg/this.clicks).toPrecision(2)}, from ${this.clicks} drinkers)`;
            });
          })
        });
      })


    ratingDiv.append(rate, stars, average);

    return ratingDiv;
  }
}