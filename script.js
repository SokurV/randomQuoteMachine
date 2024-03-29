const BTN_CHANGE = document.querySelector('#new-quote')
const QT_TEXT = document.querySelector('#text')
const QT_AUTHOR = document.querySelector('#author')
const BTN_TWEET = document.querySelector('#tweet-quote')
const APP_WRAPPER = document.querySelector('.container-style')
const COLORS = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

async function updateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      QT_TEXT.textContent = data.content;
      QT_AUTHOR.textContent = data.author;
      BTN_TWEET.setAttribute('href', `https://twitter.com/intent/tweet/?text="${data.content}" \n-${data.author}`)
    } else {
        QT_TEXT.textContent = "An error occured";
      console.log(data);
    }
  }

async function callBack(event){
  //event.preventDefault()
  let color = COLORS[Math.floor(Math.random()*COLORS.length)]

  QT_TEXT.style.color = 'transparent'
  QT_AUTHOR.style.color = 'transparent'
  
  await updateQuote()

  setTimeout(()=>{
    APP_WRAPPER.style.backgroundColor = color
    QT_TEXT.style.color = color
    QT_AUTHOR.style.color = color
  }, 600)

}

document.addEventListener("DOMContentLoaded", () => {
    updateQuote();
  });
 
BTN_CHANGE.addEventListener('click', callBack)
