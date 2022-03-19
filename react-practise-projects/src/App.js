import "./App.css";
// import cat1 from "./images/cat-one.jfif";
// import cat2 from "./images/cat-two.png";
// import cat3 from "./images/cat-three.jfif";
// import cat4 from "./images/cat-four.jfif";
// import cat5 from "./images/cat-five.jfif";
// import CatContacts from "./props_example/CatContacts";
import ShowTravelData from "./my-travel-journel/ShowTravelData";
import TravelData from "./my-travel-journel/TravelData";
import Header from "./my-travel-journel/Header";
// import ShowData from "./render_objects_in_component/ShowData";
// import Data from "./render_objects_in_component/Data";

function App() {
  const journal_obj = TravelData.map((journal_data) => {
    return <ShowTravelData journal_data_obj={journal_data} />;
  });

  // const obj = Data.map((data) => {
  //   return (
  //     //bad practise
  //     // <ShowData
  //     //   name={data.name}
  //     //   clas={data.clas}
  //     //   age={data.age}
  //     //   roll={data.roll_no}
  //     // />

  //     //good practise
  //     <ShowData all_data={data} />
  //   );
  // });
  return (
    <div className="app">
      <Header />
      {journal_obj}
      {/* {obj} */}
      {/* <CatContacts
        image={cat1}
        name="Mrs. Virender"
        mobile="9914138070"
        email="vk1736@gmail.com"
      />
      <CatContacts
        image={cat2}
        name="Mrs. Lalit"
        mobile="7647748995"
        email="lk1736@gmail.com"
      />
      <CatContacts
        image={cat3}
        name="Mrs. Chaten"
        mobile="99143334070"
        email="ck1736@gmail.com"
      />
      <CatContacts
        image={cat4}
        name="Mrs. Manish"
        mobile="96353738070"
        email="mk1736@gmail.com"
      />
      <CatContacts
        image={cat5}
        name="Mrs. Deepak"
        mobile="6354138070"
        email="dk1736@gmail.com"
      /> */}
    </div>
  );
}

export default App;
