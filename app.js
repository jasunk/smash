

let userData=[]

$.ajax({
    url: 'https://randomuser.me/api/?results=1000',
    dataType: 'json',
    success: function(data) {
      console.log(data);
       userData = data
    }
  });
let nameIndex=0
/* document.body.style.backgroundImage ="url(bilder/ola/"+(parseInt(Math.random()*14).toString())+".png)" */
let cards = document.querySelectorAll('.card');
const dislikeButton = document.getElementById('dislike-btn');
const likeButton = document.getElementById('like-btn');

let currentIndex = 0;

function handleSwipe(direction) {
    let card = cards[currentIndex];
    card.style.transform = `translateX(${direction * 100}vw)`;
    card.style.zIndex=100
    currentIndex++;

    if (currentIndex < cards.length) {
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }
}

dislikeButton.addEventListener('click', () => {
    handleSwipe(-1);
    createNewCard()
});

likeButton.addEventListener('click', () => {
    handleSwipe(1);
    createNewCard()
});

function createNewCard(){
    let newCard = document.createElement("div")
    let info = document.createElement("div")
    info.classList.add("info")
    info.innerHTML =  "<strong>"+ userData.results[nameIndex].name.first + " " + userData.results[nameIndex].name.last + "</strong> " + (parseInt(Math.random()*90+18).toString()) + " år."
    newCard.classList.add("card")
    newCard.style.backgroundImage ="url(bilder/ola/"+(parseInt(Math.random()*14).toString())+".png)"
    document.querySelector(".card-container").appendChild(newCard)
    newCard.append(info)
    cards = document.querySelectorAll('.card');
    console.log(cards)
    nameIndex++
}
