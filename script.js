'use strict';
import {moviesData} from "./data.js";

const moviesCounterSeenDiv = document.getElementById('moviesCounterSeen');
const moviesCounterAllDiv = document.getElementById('moviesCounterAll');
const moviesCounter = moviesData.filter(item => item.seen === 'T');

moviesCounterAllDiv.textContent = String(moviesData.length);
moviesCounterSeenDiv.textContent = String(moviesCounter.length);

// <!-- Zliczy wszystkie oraz obejrzane filmy z tablicy „moviesData”,
//  oraz wyświetli te informacje w elementach „moviesCounterSeen” i „moviesCounterAll”.-->
