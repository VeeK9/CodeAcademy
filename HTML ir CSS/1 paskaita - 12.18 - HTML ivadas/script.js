document
    .querySelector('#specButton')
    .addEventListener('click', (event) => {
        console.log(event);
        event.target.textContent = 'paspaudei :)';
        event.target.style.color = 'green';
        event.target.style.backgroundColor = 'white';

        fetch('./data.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          document.querySelector('#empty').textContent = data.tekstai[Math.floor(Math.random()*3)];
        });
    });