
const IMAGE1 = "https://images.unsplash.com/photo-1669836053928-5b90afddd893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const IMAGE2 = "https://images.unsplash.com/photo-1669836068321-14a727c76d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const IMAGE3 = "https://images.unsplash.com/photo-1670271080081-bd6e50d8c195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const IMAGE4 = "https://images.unsplash.com/photo-1669830512962-6624050ffd6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const img = document.querySelector('img');
console.time('timer');
function changeImageUtil(...images) {
    let index = 0;
    const startEpoch = new Date().getTime();
    const id = setInterval(() => {
        img.setAttribute('src', images[index]);
        index++;
        if (index === images.length) {
            index = 0;
        }
        if (new Date().getTime() > startEpoch + 10000) {
            clearInterval(id);
            console.timeEnd('timer');
        }
    }, 1000);
}

changeImageUtil(IMAGE1,IMAGE2,IMAGE3,IMAGE4);