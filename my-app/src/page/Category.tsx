import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
export default function Category() {
  const params = useParams();
  return <Cards range={params.categoryId || ""} />;
}
