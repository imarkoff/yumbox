import Header from "./header/header.jsx"
import Item from "./item/item.jsx"
import Slider from "./slider/slider.jsx"
import {allProducts} from "./products.jsx"
import ShopContextProvider from "./context/context.jsx"

const frequentOrders = "frequent-orders"

function App() {

  return (
    <>
    {/* Тут тільки обгорнув у ShopContextProvider щоб робило*/}
    <ShopContextProvider>
      <Header></Header>
      <Slider></Slider>
      <section className={frequentOrders}>
          <h2 className={`${frequentOrders}__title`}>Найчастіше замовляють</h2>
          {allProducts.map((item, i)=>{
          return <Item
              key={i}
              id={item.id}
              img={item.img}
              name={item.name}
              weight={item.weight}
              price={item.price}
              frequentOffers={frequentOrders}
          >
          </Item>
        })}
      </section>
    </ShopContextProvider>
    </>
  );

}

export default App