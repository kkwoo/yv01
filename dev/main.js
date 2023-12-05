// import './style.01.css';
import './style.02.css';
import '@picocss/pico/css/pico.min.css';
// if you wrap m in curly braces, the code fails silently
// import m from 'mithril/mithril.min.js'; // this also works
// from https://mithril.js.org/installation.html
import m from 'mithril';
// require doesn't work either
// var m = require("mithril");
import { firstMC } from './firstMC.js';
import { secondMC } from './secondMC.js';

const root = document.getElementById('app');
m.mount(root, firstMC);