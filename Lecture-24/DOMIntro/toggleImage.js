// select the relevant elements
const image = document.querySelector('img');

const IMAGE_URL_1 = "https://images.unsplash.com/photo-1671296368370-a24a6f9148cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const IMAGE_URL_2 = "https://plus.unsplash.com/premium_photo-1671111151055-da84c16500c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

let isTrue = false;

function toggleImage() {
    if (isTrue) {
        image.setAttribute('src', IMAGE_URL_1);
    } else {
        image.setAttribute('src', IMAGE_URL_2);
    }
    isTrue = !isTrue;
}

setInterval(toggleImage, 2000);