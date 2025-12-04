function change() {
    const items = document.querySelectorAll('.content');
    items.forEach(item => item.classList.toggle('big'));
}

function change2() {
    const item2 = document.querySelector('#content2');
    item2.classList.toggle('big');
}