const wrapper = document.querySelector(".wrapper");

const array = [1, 2, [1.1, 1.2, 1.3], 3];

let generateList = function(array) {
    const ul = document.createElement("ul");
    array.forEach(function(item) {
        let li = document.createElement("li");
        if (!Array.isArray(item)) {
            li.innerText = item;
        } else {
            let innerUl = generateList(item);
            li.appendChild(innerUl);
        }
        ul.appendChild(li);
    });

    return ul;
};

wrapper.appendChild(generateList(array));
