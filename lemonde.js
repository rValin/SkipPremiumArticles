document.querySelectorAll('.marqueur_restreint').forEach(element => {
    let parent = element.parentElement;

    switch (parent.nodeName) {
        case "FIGURE":
            parent.remove();
            break;
        case "A":
        case "FIGCAPTION":
            parent.parentElement.remove();
            break;
        case "H2":
            parent.parentElement.parentElement.remove();
            break;
    }
});