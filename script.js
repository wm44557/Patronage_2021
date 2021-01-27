'use strict';
import {moviesData} from "./data.js";

const moviesCounterSeenDiv = document.getElementById('moviesCounterSeen');
const moviesCounterAllDiv = document.getElementById('moviesCounterAll');
const moviesListContainer = document.getElementById('moviesListContainer');

const moviesCounter = moviesData.filter(item => item.seen === 'T');

moviesCounterAllDiv.textContent = String(moviesData.length);
moviesCounterSeenDiv.textContent = String(moviesCounter.length);

let newElement;
let itemChildListItem;

const appendChild = (tagName, innerHTML, className) => {
    itemChildListItem = document.createElement(tagName)
    itemChildListItem.innerHTML = innerHTML;
    className ? itemChildListItem.className = className : null;
    newElement.appendChild(itemChildListItem);
}

moviesData.forEach(function (item, index) {
        newElement = document.createElement('li');
        newElement.id = `list_item_${item.id}`;
        newElement.className = "movie";

        appendChild('h2', item.title, 'boy');
        appendChild('p', item.year, 'boy');
        appendChild('p', item.summary, 'boy');
        appendChild('p', item.seen, 'boy');

        moviesListContainer.appendChild(newElement);
    }
);

//
// <!-- Stworzy nowy element listy „moviesList” dla każdego elementu tablicy „moviesData”. Elementy listy „moviesList” powinny zawierać wszystkie podstawowe informacje o filmie oraz symbol graficzny reprezentujący informację czy film był lub nie był obejrzany.-->
// <!-- Obsłuży kliknięcie symbolu graficznego:-->
// <!-- Przełączy wartość atrybutu „seen” w „moviesData” dla-->
// <!--danego filmu-->
// <!-- Zaktualizuje symbol na liście-->
// <!-- Zaktualizuje licznik obejrzanych filmów-->
