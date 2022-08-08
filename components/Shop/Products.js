
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyItems = [
  {
    id: 'p1',
    title: 'FaceWash',
    price: 6,
    description: 'Clear Oil Skin'
  },
  {
    id: 'p2',
    title: 'SunCream',
    price: 12,
    description: 'Protect from UV rays'
  }
]


const Products = (props) => {
  /*const [fetchData, setFetchData] = useState([])

  useEffect(() => {
    const fetchProducts =  async () => {
      const response = await fetch('https://react-redux-7e9f1-default-rtdb.firebaseio.com/product.json')
      const responseData = await response.json()
  
      const loadedProducts = []
  
      for(const key in responseData){
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          price: responseData[key].price,
          description: responseData[key].description
        })
      }

      setFetchData(loadedProducts)
    }
  
    fetchProducts()
  },[])
  */
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyItems.map((item) => (
          <ProductItem
            key = {item.id}
            id = {item.id}
            title= {item.title}
            price= {item.price}
            description={item.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
