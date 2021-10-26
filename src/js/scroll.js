const getFraseBtn = document.querySelector('.btn');

function scrollToFrase() {
    console.log('123');
    document.querySelector('.blockquote-3').scrollIntoView();
}
getFraseBtn.addEventListener('click', scrollToFrase);