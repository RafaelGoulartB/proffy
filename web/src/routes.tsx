import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import TeacherFormPage from "./pages/TeacherForm";
import TeacherListPage from "./pages/TeacherList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/study" component={TeacherListPage} />
      <Route path="/give-classes" component={TeacherFormPage} />
    </BrowserRouter>
  );
}
