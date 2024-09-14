import home from "../images/home.png";
import favorite from "../images/favorite.png";
import search from "../images/search.png";
import calculator from "../images/calculator.png";
import soon from "../images/soon.png";

const navItems = [
  { name: "Início", icon: home, selected: true },
  { name: "Casas Salvas", icon: favorite, selected: false },
  { name: "Pesquisas Salvas", icon: search, selected: false },
  { name: "Calculadora", icon: calculator, selected: false },
  { name: "Coming soon", icon: soon, selected: false },
];

export default navItems;
