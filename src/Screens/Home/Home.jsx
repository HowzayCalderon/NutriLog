import "../Home/Home.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import './Home.css'

function Home() {

  let heading = "NutriLog"
  let subheading = "Log your daily diet habits and keep track of your nutrition"

  function article1() {
    window.open("https://www.headspace.com/mindfulness/mindful-eating", "_blank")
  }

  return (
    <div className="Home">
      <NavBar />

      <section className="hero">
          <div className="hero-body">
            <div className="container">
                <h1 className="title">
                  { heading }
                </h1>
                <div className="is-two-thirds column is-paddingless">
                  <h2 className="subtitle is-4">{ subheading }</h2>
                </div>
            </div>
          </div>

    <div className="photo-gallery">
      <div className="photo-gallery1" onClick={() => article1()}>
        <img src="https://images.ctfassets.net/v3n26e09qg2r/5rrfiM1EKQuCyCa4GGQSea/1ddb55fe46f929b9539c4a2431b9558d/avacados_-_Mindful_Eating.png?w=500&fm=webp" alt="happy avocado"/>
        <p>asdjsdjkaldfh asdlkjhdsf lasdluhsdfj lfsdhlkdfs sadlfhjk fdsalkhjfds fdsakljhafs hjklfadhjkadf jhadsk lfdsakjhldfs alhadsfkj sadfhdfsaafshjkladfs hladflh asfhjkdfsa adfshjkl dfasjlkhdafsl kadfshl</p>
      </div>

      <div className="photo-gallery2">
        <img src="https://images.ctfassets.net/v3n26e09qg2r/4Dg5FVOOikQgaYuo64s6qY/e296bae9d2d30d59adba0935aeffde41/hs_growth_food_cake_slice.png?w=500&fm=webp" alt="stoked cake slice" />
        <p>asdjsdjkaldfh asdlkjhdsf lasdluhsdfj lfsdhlkdfs sadlfhjk fdsalkhjfds fdsakljhafs hjklfadhjkadf jhadsk lfdsakjhldfs alhadsfkj sadfhdfsaafshjkladfs hladflh asfhjkdfsa adfshjkl dfasjlkhdafsl kadfshl</p>
      </div>

      <div className="photo-gallery3">
        <img src="https://images.ctfassets.net/v3n26e09qg2r/4SRiPVNeqQ6EQooEC6Sws2/c9a121906392d8eda1b236e607868102/artwork-web.png?w=500&fm=webp" alt="jammin' apple" />
        <p className="pClass">asdjsdjkaldfh asdlkjhdsf lasdluhsdfj lfsdhlkdfs sadlfhjk fdsalkhjfds fdsakljhafs hjklfadhjkadf jhadsk lfdsakjhldfs alhadsfkj sadfhdfsaafshjkladfs hladflh asfhjkdfsa adfshjkl dfasjlkhdafsl kadfshl</p>
      </div>
    </div>



      </section>
    </div>
  );
}

export default Home;
