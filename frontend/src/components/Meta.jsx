import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Airbnb",
  description: "We have the best properties available for you",
  keywords: "airbnb, vacation rentals, cheap stays",
};

export default Meta;
