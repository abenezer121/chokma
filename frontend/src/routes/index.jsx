import ArticleAdmin from "../pages/Admin/ArticleAdmin";
import BookAdmin from "../pages/Admin/BookAdmin";
import HomeAdmin from "../pages/Admin/HomeAdmin";
import QuestionAdmin from "../pages/Admin/QuestionAdmin";
import UserAdmin from "../pages/Admin/UserAdmin";
import Admin from "../pages/Admin";

import { useRoutes } from "react-router-dom";


export function MainRoutes() {

  const elements = useRoutes([
    {
      path: "/",
      element: <HomeAdmin/>,
    },
    {
      path: "/user",
      element: <UserAdmin/>,
    },
    {
      path: "/book",
      element: <BookAdmin/>,
      
    },

    {
      path: "/article",
      element: <ArticleAdmin/>,
      },
    {
      path: "/question",
      element: <QuestionAdmin/>,
      },
    
  ]);

  return elements;
}
