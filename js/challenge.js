let isPaused = false;
let counterInterval;

function counterIncrement(){
    const counter = document.querySelector('#counter');
    counterInterval = setInterval(() => {
        counter.textContent++;
    }, 1000);
}
counterIncrement();

function plus(){
    const plusButton = document.querySelector('#plus');
    const counter = document.querySelector('#counter');
    plusButton.addEventListener('click', () => {
        counter.textContent++;
    })
}
plus();

function minus(){
    const minusButton = document.querySelector('#minus');
    const counter = document.querySelector('#counter');
    minusButton.addEventListener('click', () => {
        if (counter.textContent > 0){
            counter.textContent--;
        }
    })
}
minus();

function likeCounter(){
    const likeButton = document.querySelector('#heart');
    const counter = document.querySelector('#counter');
    likeButton.addEventListener('click', () => {
        const likeList = document.createElement('li');
        likeList.textContent = `Liked: ${counter.textContent}`;
        const ul = document.querySelector('.likes');
        ul.appendChild(likeList);
    })
}
likeCounter();

function pause(){
    const pauseButton = document.querySelector('#pause');
    const plusButton = document.querySelector("#plus");
    const minusButton = document.querySelector("#minus");
    const likeButton = document.querySelector("#heart");
    pauseButton.addEventListener('click', () => {
        if (isPaused) {
            
            counterIncrement();
            pauseButton.textContent = "Pause";
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
        } else {
        
            clearInterval(counterInterval);
            pauseButton.textContent = "Resume";
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
        }
        isPaused = !isPaused; 
    })
}
pause();

function postComment(){
    const inputForm = document.querySelector('#comment-form');
    const inputArea = document.querySelector('#comment-input');
    const commentSection = document.querySelector('#list');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const comment = document.createElement('p');
        comment.textContent = inputArea.value;
        commentSection.appendChild(comment);

    })
}
postComment();