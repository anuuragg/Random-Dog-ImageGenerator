const dogImage = document.getElementById('dog-image')
const dogButton = document.getElementById('btn')
const cardContent = document.getElementById('cardContent')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      cardContent.innerHTML = `<img src='${json.message}'
      class="MediaQ"
      style="height: 300px;
      width: 300px;
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
      box-shadow: rgba(34, 34, 36, 0.385) 0px 7px 29px 0px;
      transition: 0.5s all;"
      />`
    })
}


dogButton.onclick = () => getNewDog() 




