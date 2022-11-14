var items_bar = document.querySelectorAll('.items-side-bar');
var items_header = document.querySelectorAll('.icon');
var option_menu = document.querySelectorAll('.displayPage');
var themeIcon = document.querySelector('.theme-icon');
// var displayThemeModal = document.querySelector('.theme-modal');
var btn_turn_off_theme = document.querySelector('.turn-off-theme');
var changeImg = document.querySelectorAll('.img img');
var heartIcon = document.querySelectorAll('.icons.heart-icon');
items_bar.forEach(function (item){
    item.addEventListener('click', e=> {
        e.preventDefault();
        for(let indexItems = 0;indexItems < items_bar.length;indexItems++){
            items_bar[indexItems].classList.remove('isActive');
        }
        item.classList.add('isActive');
    })
})
function myFunction (){
    icon.classList.remove('isActive',click_icon);
}
items_header.forEach(function(icon){
    icon.addEventListener('click', e => {
        if(icon.classList.contains('setting')){
            if(icon.classList.contains('isActive')){
                icon.classList.remove('isActive')
                document.addEventListener('click',myFunction)
            }else{
                icon.classList.add('isActive');
            }
        }
        document.removeEventListener('click',myFunction);
    })
})
function remove_isActive_main_page (property){
    for(let index = 0;index < property.length;index++){
        property[index].classList.remove('isActive');  
    }
}
option_menu.forEach( (item,index) => {
    let showContentPages = document.querySelectorAll('.contentpage');
    let id = document.querySelector('.contentpage#id-'+index);
    item.addEventListener('click', e => {
        remove_isActive_main_page(option_menu);
        remove_isActive_main_page(showContentPages);
        item.classList.add('isActive');
        id.classList.add('isActive');
    })
})

function turn_off_theme(){
    if(displayThemeModal.classList.contains('isActive')){
        displayThemeModal.classList.remove('isActive')
    }else{
        displayThemeModal.classList.add('isActive')
    }
}
themeIcon.addEventListener('click', e => {
    turn_off_theme();
})
// displayThemeModal.addEventListener('click', e => {
//     e.stopPropagation();
//     turn_off_theme();
// })
heartIcon.forEach(icon => {
    let icon_tym_first = icon.querySelector('.songs-item-right-tym-first');
    let icon_tym_last = icon.querySelector('.songs-item-right-tym-last');
    icon.addEventListener('click' ,()=> {
        if(icon_tym_first.classList.contains('isShow')){
            icon_tym_first.classList.remove('isShow');
            icon_tym_last.classList.add('isShow');
        }else{
            icon_tym_first.classList.add('isShow');
            icon_tym_last.classList.remove('isShow');
        }
    })
})

// changeImg.forEach((img,index) => {
//     img.addEventListener('click', e => {
//         e.preventDefault();
//         var urlImg = '../images/background-theme/'+index+'.jpg '
//         document.body.style.backgroundImage = "url('../images/6.jpg ')";
//     })
// })

var imgArrs = [
    "./images/songs/0.webp",
    "./images/songs/1.webp",
    "./images/songs/2.webp",
    "./images/songs/3.webp",
    "./images/songs/4.webp",
    "./images/songs/5.webp",
    "./images/songs/6.webp",
    "./images/songs/7.webp",
    "./images/songs/8.webp",
    "./images/songs/9.webp",
    "./images/songs/10.webp",
    "./images/songs/11.webp",
    "./images/songs/12.webp",
    "./images/songs/13.webp",
    "./images/songs/14.webp",
    "./images/songs/15.webp",
];
let index = 0;
var effect_toggle_imgs = function(){
    let indexCurrent = index;
    var img2 = document.getElementById('img-2').src= imgArrs[indexCurrent];
    if(index + 2 <= 15) {
        var img1 = document.getElementById('img-1').src= imgArrs[index + 1];   
        var img0 = document.getElementById('img-0').src= imgArrs[index + 2];  
    }else {
        if(indexCurrent == 14){
            var img1 = document.getElementById('img-1').src= imgArrs[index + 1];   
            var img0 = document.getElementById('img-0').src= imgArrs[0];
        }else if(indexCurrent == 15){
            var img1 = document.getElementById('img-1').src= imgArrs[0];    
            var img0 = document.getElementById('img-0').src= imgArrs[1];
            index = 0;
        }
    }
    index++;
}
setInterval(effect_toggle_imgs, 1000);