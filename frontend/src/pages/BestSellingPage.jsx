import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const data =  [
    {
      "_id": "68033bd678d08ebe0cecd328",
      "soldOut": "0",
      "createdAt": "2025-04-19T00:26:20.254Z",
      "name": "Dell XPS 13 Laptop",
      "category": "Accesories",
      "description": "Experience the power of the Dell XPS 13 with its sleek design and high-performance capabilities.",
      "originalPrice": "1200",
      "discountPrice": "999",
      "stock": 25,
      "ratings": 5,
      "images": [
        {
          "_id": "68033d8625ac685c51b86cc0",
          "url": "https://rang-bd.com/wp-content/uploads/2024/06/NKM-JWY-00060-3-595x595.webp"
        },
        {
          "_id": "68033d8625ac685c51b86cc1",
          "url": "https://rang-bd.com/wp-content/uploads/2024/06/NKM-JWY-00060-1-scaled.webp"
        }
      ],
      "reviews": [
        {
          "user": {
            "avatar": {
              "url": "https://avatars.githubusercontent.com/u/155252694?v=4"
            },
            "name": "Hank"
          },
          "_id": "680335c9ee728686f727812f",
          "rating": 5,
          "comment": "Exceptional performance and build quality."
        }
      ],
      "shop": {
        "_id": "shop123",
        "name": "NewMarket",
        "avatar": {
          "url": "https://avatars.githubusercontent.com/u/155252694?v=4"
        },
        "description": "Selling high-tech electronics since 2020.",
        "createdAt": "2022-01-01T00:00:00Z"
      }
    }
  ];
  
  // const [data, setData] = useState([]);
  // const { allProducts, isLoading } = useSelector((state) => state.products);
  const { isLoading } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (Array.isArray(allProducts)) {
  //     const sortedData = [...allProducts].sort((a, b) => b.sold_out - a.sold_out);
  //     setData(sortedData);
  //   }
  // }, [allProducts]);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={2} />
          <h2>/best-selling</h2>
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data.length === 0 ? (
                <p className="text-center w-full">No products found.</p>
              ) : (
                data.map((product) => (
                  <ProductCard data={product} key={product._id} />
                ))
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default BestSellingPage;
