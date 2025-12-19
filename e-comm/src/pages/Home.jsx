
import ProductCard from '../components/cards/ProductCard';
import { productTanstackhook } from '../customhooks/productTanstackhook';
const Home = () => {

  let { data, isPending } = productTanstackhook();


  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {data?.map((data) => {
        return <ProductCard key={data.id} data={data}/>
      })}
    </div>
  );
}

export default Home;
