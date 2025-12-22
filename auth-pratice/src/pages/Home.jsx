import axios from 'axios';
import { productqueryhook } from '../customHook.jsx/productqueryhook';
const Home = () => {
  let { data, isPending } = productqueryhook();
  return (
    <div>
      {data?.map((elem) => {
        return <h1 key={elem.id} >{elem.title}</h1>
      })}
    </div>
  );
}

export default Home;
