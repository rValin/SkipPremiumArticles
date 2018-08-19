document.querySelectorAll('div.premium, div.offer, .home__colead__edspeciale').forEach(element => {element.remove()});
document.querySelectorAll('li.chrono__list__item--abonne').forEach(element => {element.remove()});
document.querySelectorAll('span.premium').forEach(element => {element.parentElement.remove()});

document.querySelectorAll('.skew--premium').forEach(element => {
    let parent = element.parentElement.parentElement.parentElement;
    if (parent.classList.contains('split')) {
        parent.remove();
    } else if (parent.nodeName === 'A' || parent.nodeName === 'DIV') {
        parent.remove();
    }
});