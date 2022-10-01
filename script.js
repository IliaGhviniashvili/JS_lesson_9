let data = [
    {
        id: 1,
        imageurl: "https://techcrunch.com/wp-content/uploads/2022/07/house-of-the-dragon-ka-1920.jpg",
        title: "House of the Dragon",
        url: "https://google.com",
    },
    {
        id: 2,
        imageurl: "https://img.besthqwallpapers.com/Uploads/30-5-2019/94474/game-of-thrones-2019-poster-promotional-materials-daenerys-targaryen.jpg",
        title: "Game of Thrones",
        url: "https://google.com",
    },
    {
        id: 3,
        imageurl: "https://images.alphacoders.com/108/1087630.jpg",
        title: "Breaking Bad",
        url: "https://google.com",
    },
    {
        id: 4,
        imageurl: "https://images.alphacoders.com/106/1069116.jpg",
        title: "Better Call Saul",
        url: "https://google.com",
    },
];


const leftarrow = document.getElementById("left-arrow");
const rightarrow = document.getElementById("right-arrow");
const slidecontent = document.getElementById("slide-content");
let sliderIndex = 0;
let dotElement = document.getElementsByClassName("dot");

function createATag(item){
    const aTag = document.createElement("a");
    aTag.setAttribute("href", item.url);
    aTag.classList.add("slide");
    return aTag;
}
function createImgTag(item){
    const imgTag = document.createElement("div");
    imgTag.style.backgroundImage = `url("${item.imageurl}")`;
    imgTag.classList.add("slide-bg");
    return imgTag;
}
function createH2Tag(item){
    let titleH2 = document.createElement("h2");
    titleH2.innerText = item.title;
    titleH2.classList.add("title");
    return titleH2;
}
function createDots(item){
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dots-parent");

    data.forEach((Element) => {
        const dot = document.createElement("i");
        dot.classList.add("dot");
        dot.classList.add("fa-solid", "fa-circle-dot");
        dot.setAttribute("data-id", Element.id - 1);

        dot.addEventListener("click", function(event){
            let id = event.target.getAttribute("data-id");
            sliderIndex = id;
            setSlide();
        })
        dotsParent.appendChild(dot);
});
    return dotsParent;  
}   

function setSlide(){
    slidecontent.innerHTML = "";
    const tagA = createATag(data[sliderIndex]);
    const tagImg = createImgTag(data[sliderIndex]);
    const h2Title = createH2Tag(data[sliderIndex]);
    const dots = createDots();

    tagA.appendChild(tagImg);
    tagA.appendChild(h2Title);
    slidecontent.appendChild(tagA);
    slidecontent.appendChild(dots); 
    dotwhileactive();
}

function dotwhileactive(){
    dotElement[sliderIndex].classList.add("active");
}

function arrowleftclick(){
    if(sliderIndex == 0){
        sliderIndex = data.length -1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}
function arrowrightclick(){
    if(sliderIndex == data.length -1){
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}


leftarrow.addEventListener("click", arrowleftclick);
rightarrow.addEventListener("click", arrowrightclick);


setInterval(() => {
    arrowrightclick();
}, 3000);

setSlide();






