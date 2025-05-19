import { useLocation } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import api from '../utils/axiosCongif';
import { useEffect, useState } from 'react';
import ProductCard from '../components/Route/ProductCard/ProductCard';

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    if (query) {
      api
        .get('/products/search', {
          params: { q: query }
        })
        .then((res) => {
            setProductItems(res.data);
            console.log(res.data)
        })
        .catch((err) => console.error(err));
    }
  }, [query]);

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-3">Search Results for: {query}</h1>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {productItems.length > 0 ? (
          productItems.map((ele, idx) => (
            <ProductCard data={ele} key={idx}/>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
     </div>

      <Footer />
       

    </>
  );
};

export default SearchPage;
