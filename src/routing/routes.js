import Home from "../views/Home";
import Specializations from '../views/Specializations';
import AboutUs from '../views/AboutUs';
import InvestingForms from '../views/InvestingForms';

const routes = [
  {
    "path": "/",
    "name": "Strona Główna",
    "element": <Home />,
    "pageTemplate": false
  },
  {
    "path": "/o-nas",
    "name": "O nas",
    "element": <AboutUs />,
    "pageTemplate": false
  },
  {
    "path": "/formy-inwestowania",
    "name": "Formy inwestowania",
    "element": <InvestingForms />,
    "pageTemplate": false
  },
  {
    "path": "/specjalizacje",
    "name": "Specjalizacje",
    "element": <Specializations />,
    "pageTemplate": false
  },
]

export default routes;