import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/activities">Go to activities dashboard</Link>
    </div>
  );
};

export default HomePage;
