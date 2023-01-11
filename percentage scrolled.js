let scrollPercentage = () =>{
    // let scrollProgress = document.getElementById("scrollPercentLabel");
    let progressValue = document.getElementById("percentage-value");

    let pos = document.documentElement.scrollTop;
    let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100/calHeight);
    // console.log(scrollValue);
    progressValue.textContent = scrollValue;
}
window.onscroll = scrollPercentage;