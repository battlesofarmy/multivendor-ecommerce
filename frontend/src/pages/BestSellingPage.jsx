import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";

const BestSellingPage = () => {
  const data = [
    {
      _id: "1",
      name: "Wireless Mouse",
      shop: { _id: "101", name: "Gadget Hub" },
      originalPrice: 30,
      discountPrice: 20,
      stock: 50,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.2,
      sold_out: 120,
      tags: ["electronics", "accessories"],
      category: "Tech",
      description: "Ergonomic wireless mouse with long battery life.",
    },
    {
      _id: "2",
      name: "Bluetooth Headphones",
      shop: { _id: "102", name: "Sound World" },
      originalPrice: 80,
      discountPrice: 65,
      stock: 35,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.7,
      sold_out: 200,
      tags: ["electronics", "audio"],
      category: "Tech",
      description: "High-quality wireless headphones with noise canceling.",
    },
    {
      _id: "3",
      name: "Smart Watch",
      shop: { _id: "103", name: "Time Tech" },
      originalPrice: 120,
      discountPrice: 99,
      stock: 40,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.4,
      sold_out: 180,
      tags: ["wearables", "gadgets"],
      category: "Tech",
      description: "Smart watch with fitness tracking and call support.",
    },
    {
      _id: "4",
      name: "Gaming Keyboard",
      shop: { _id: "104", name: "Pro Gamer" },
      originalPrice: 70,
      discountPrice: 55,
      stock: 20,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.6,
      sold_out: 95,
      tags: ["gaming", "accessories"],
      category: "Tech",
      description: "Mechanical RGB keyboard for gamers.",
    },
    {
      _id: "5",
      name: "LED Monitor 24 inch",
      shop: { _id: "105", name: "Display Mart" },
      originalPrice: 200,
      discountPrice: 150,
      stock: 15,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.3,
      sold_out: 70,
      tags: ["electronics", "display"],
      category: "Tech",
      description: "Full HD LED monitor for work and entertainment.",
    },
    {
      _id: "6",
      name: "Portable Charger 20000mAh",
      shop: { _id: "106", name: "Charge Up" },
      originalPrice: 50,
      discountPrice: 35,
      stock: 80,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.1,
      sold_out: 300,
      tags: ["gadgets", "mobile"],
      category: "Tech",
      description: "High-capacity power bank with fast charging support.",
    },
    {
      _id: "7",
      name: "Noise Cancelling Earbuds",
      shop: { _id: "107", name: "Sound Max" },
      originalPrice: 90,
      discountPrice: 70,
      stock: 45,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.5,
      sold_out: 220,
      tags: ["audio", "gadgets"],
      category: "Tech",
      description: "Compact earbuds with active noise cancellation.",
    },
    {
      _id: "8",
      name: "4K Action Camera",
      shop: { _id: "108", name: "Adventure Gear" },
      originalPrice: 150,
      discountPrice: 120,
      stock: 25,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.4,
      sold_out: 110,
      tags: ["camera", "outdoor"],
      category: "Tech",
      description: "Capture every moment in 4K with waterproof casing.",
    },
    {
      _id: "9",
      name: "Laptop Stand Adjustable",
      shop: { _id: "109", name: "Office Essentials" },
      originalPrice: 35,
      discountPrice: 25,
      stock: 60,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.3,
      sold_out: 140,
      tags: ["office", "accessories"],
      category: "Tech",
      description: "Aluminum stand with adjustable height for laptops.",
    },
    {
      _id: "10",
      name: "Wireless Charging Pad",
      shop: { _id: "110", name: "Mobile Tech" },
      originalPrice: 40,
      discountPrice: 30,
      stock: 100,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.0,
      sold_out: 250,
      tags: ["mobile", "charging"],
      category: "Tech",
      description: "Fast wireless charging pad for multiple devices.",
    },
    {
      _id: "11",
      name: "VR Headset",
      shop: { _id: "111", name: "Virtual Zone" },
      originalPrice: 300,
      discountPrice: 250,
      stock: 10,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.6,
      sold_out: 60,
      tags: ["gaming", "virtual reality"],
      category: "Tech",
      description: "Immersive VR experience with wide compatibility.",
    },
    {
      _id: "12",
      name: "USB-C Hub 6-in-1",
      shop: { _id: "112", name: "Connectify" },
      originalPrice: 60,
      discountPrice: 45,
      stock: 70,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.2,
      sold_out: 160,
      tags: ["accessories", "usb"],
      category: "Tech",
      description: "Expand your laptop ports with this multi-functional hub.",
    },
    {
      _id: "13",
      name: "Smart Light Bulb",
      shop: { _id: "113", name: "HomeTech" },
      originalPrice: 25,
      discountPrice: 18,
      stock: 90,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.3,
      sold_out: 210,
      tags: ["home", "smart devices"],
      category: "Tech",
      description: "Control lights remotely with app or voice assistant.",
    },
    {
      _id: "14",
      name: "Fitness Tracker Band",
      shop: { _id: "114", name: "FitZone" },
      originalPrice: 45,
      discountPrice: 30,
      stock: 55,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.4,
      sold_out: 130,
      tags: ["fitness", "wearables"],
      category: "Tech",
      description: "Track your daily activity, steps, and sleep quality.",
    },
    {
      _id: "15",
      name: "Mini Projector",
      shop: { _id: "115", name: "VisualPro" },
      originalPrice: 220,
      discountPrice: 180,
      stock: 18,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.2,
      sold_out: 85,
      tags: ["home", "display"],
      category: "Tech",
      description: "Compact projector ideal for home movie nights.",
    },
    {
      _id: "16",
      name: "Drone with Camera",
      shop: { _id: "116", name: "Sky Toys" },
      originalPrice: 250,
      discountPrice: 200,
      stock: 12,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.5,
      sold_out: 90,
      tags: ["drone", "camera"],
      category: "Tech",
      description: "HD camera drone for aerial photography and video.",
    },
    {
      _id: "17",
      name: "HDMI Cable 2m",
      shop: { _id: "117", name: "WireZone" },
      originalPrice: 15,
      discountPrice: 10,
      stock: 150,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.1,
      sold_out: 400,
      tags: ["cables", "accessories"],
      category: "Tech",
      description: "High-speed HDMI cable for crystal-clear video transfer.",
    },
    {
      _id: "18",
      name: "Laptop Cooling Pad",
      shop: { _id: "118", name: "CoolGear" },
      originalPrice: 35,
      discountPrice: 25,
      stock: 45,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.2,
      sold_out: 100,
      tags: ["laptop", "accessories"],
      category: "Tech",
      description: "Prevent overheating with this quiet fan cooling pad.",
    },
    {
      _id: "19",
      name: "USB Desk Lamp",
      shop: { _id: "119", name: "LightLab" },
      originalPrice: 20,
      discountPrice: 15,
      stock: 65,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.0,
      sold_out: 130,
      tags: ["lighting", "office"],
      category: "Tech",
      description: "Flexible and energy-saving LED USB lamp for desks.",
    },
    {
      _id: "20",
      name: "Webcam HD 1080p",
      shop: { _id: "120", name: "CamZone" },
      originalPrice: 55,
      discountPrice: 40,
      stock: 28,
      image: "https://admin.regalfurniturebd.com/storage/uploads/fullsize/2019-05/csc-205-7-1-66-a.jpg",
      ratings: 4.3,
      sold_out: 75,
      tags: ["camera", "work-from-home"],
      category: "Tech",
      description: "HD webcam for meetings, streaming, and online classes.",
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
