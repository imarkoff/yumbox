import Header from "./header"
import Item from "./item/item.jsx"
import Slider from "./slider"

import item_pic1 from "./assets/item_img.png"

let allProducts = [
    {
      id: 1,
      name: "21 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 2,
      name: "22 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 3,
      name: "23 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 4,
      name: "24 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    },
    {
      id: 5,
      name: "25 сет",
      img: item_pic1,
      weight: 1500,
      price: 799,
    }
]

const frequentOrders = "frequency_orders"


function App() {

  return (
    <>
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
              price={item.price}>
          </Item>
        })}
      </section>
    </>
  );

}

export default App