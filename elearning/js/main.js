
function truncateCardTitle () {
    var cardList = document.querySelectorAll(".card-body .card-title");
    for(let index = 0; index < cardList.length; index++) {
        let text = cardList[index].innerHTML;
        let newText = truncateString(text,40);
        cardList[index].innerHTML = newText;
    }
}
function truncateString(str, num) {
    if(str.length > num) {
        return str.slice(0, num) + '...'
    }else {
        return str;
    }
}
window.addEventListener("load",function () {
    truncateCardTitle();
})