const lis = document.querySelectorAll('li');

for (let li of lis) {
    li.addEventListener('click', () => {
        li.innerText = li.innerText.toUpperCase();
    });
}