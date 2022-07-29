import { Routes, Route } from "react-router";
import routes from './routes';

const Router = () => {

  return(
    <Routes>
      {routes.map((route, i) => {
        if(route.pageTemplate === true){
          return (
            <Route key={i} exact path={route.path} element={route.element} />
          );
        }else{
          return (
            <Route key={i} exact path={route.path} element={route.element} />
          )
        }
      })}
    </Routes>
  )
};

export default Router;