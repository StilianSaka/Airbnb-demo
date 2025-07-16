import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const { keyword } = useParams();

  return (
    <>
      {keyword && (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <Meta />
      <h1>Welcome to the Home Page</h1>
      {/* You can add other content here */}
    </>
  );
};

export default HomeScreen;
