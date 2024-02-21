import { useSearchParams } from "react-router-dom";

const WikiDetailPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("id"); // test

  return <div>Wiki Detail</div>;
};

export default WikiDetailPage;
