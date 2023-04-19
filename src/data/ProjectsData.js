import Project from './Project';
import shoping from '../assets/shoping.gif';
import todoit from '../assets/todoit.gif';
import weather from '../assets/weather.gif';
import gol from '../assets/gol.gif';

export const ProjectsData = [
  new Project(0, 'Shoping Cart', "Simulation of a comercial website. The user can browse the products, short them by category and add them to their shoping cart. Uses React and React Router.", shoping, 'https://bofmar.github.io/shoping-cart/', 'https://github.com/bofmar/shoping-cart', ['HTML5', 'CSS3', 'React', 'React Router']),
  new Project(1, 'todo-It', "A simple to use todo application. Allows the creation of Projects, which in turn act as containers for the user created Tasks, which allows for better organization. The app also shows icons for tasks that are close to expiring or have already expired. Created with Javascript and SCSS.", todoit, 'https://bofmar.github.io/todoit/', 'https://github.com/bofmar/todoit', ['HTML5', 'SCSS', 'Javascript']),
  new Project(2, 'Weather App', "A web app that allows the user to see the curent weather in various cities of the world. The data is taken from the open weather map API. Uses Javascript and SCSS.", weather, 'https://bofmar.github.io/weather/', 'https://github.com/bofmar/weather', ['HTML5', 'SCSS', 'JavaScript']),
  new Project(3, "Conway's Game of Life", "A web app demonstrating the famous Game of Life, a zero player cellular automata game, inviented by the mathematician John Horton Conway. Made using vanilla Javascript. A command-line version is also available for download on the repository's page.", gol, 'https://bofmar.github.io/ConwaysGOL-js/', 'https://github.com/bofmar/ConwaysGOL-js', ['HTML5', 'CSS3', 'Javascript']),
];
