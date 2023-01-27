import "../Home/Home.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import "./Home.css";

function Home() {

  let subheading = "Food for thought! Click the articles below for more nutritious info 😋"

  function article1() {
    window.open(
      "https://www.headspace.com/mindfulness/mindful-eating",
      "_blank"
    );
  }

  function article2() {
    window.open(
      "https://www.headspace.com/mindfulness/mindful-cooking",
      "_blank"
    );
  }

  function article3() {
    window.open(
      "https://www.youtube.com/watch?v=sG7DBA-mgFY&ab_channel=Headspace",
      "_blank"
    );
  }

  return (
    <div className="Home">
      <div className="nutrilog">
        <h1>NutriLog</h1>
      </div>
      <NavBar Home={"Home"} />

      <section className="hero">
          <div className="hero-body">
            <div className="container">

                  <h2>{ subheading }</h2>
            </div>
          </div>

        <div className="photo-gallery">
          <div className="photo-gallery1" onClick={() => article1()}>
            <img
              src="https://images.ctfassets.net/v3n26e09qg2r/5rrfiM1EKQuCyCa4GGQSea/1ddb55fe46f929b9539c4a2431b9558d/avacados_-_Mindful_Eating.png?w=500&fm=webp"
              alt="happy avocado"
            />
            <p>
              Mindful eating places awareness on the menu, whenever and wherever
              we eat. As well as making us watchful about what we eat, it aims
              to transform our relationship with food by focusing on the how and
              why of eating, encouraging a more holistic point of view.
              Ultimately, this means we have a better chance of understanding
              what foods nourish us and what foods help us stay healthy while
              also encouraging a deeper appreciation of every meal, every
              mouthful, and every ingredient <span> . . .</span>
            </p>
          </div>

          <div className="photo-gallery2" onClick={() => article2()}>
            <img
              src="https://images.ctfassets.net/v3n26e09qg2r/4Dg5FVOOikQgaYuo64s6qY/e296bae9d2d30d59adba0935aeffde41/hs_growth_food_cake_slice.png?w=500&fm=webp"
              alt="stoked cake slice"
            />
            <p>
              Cooking. For many, it can sound like a chore, especially for
              parents who are always rustling up some dish for breakfast, lunch,
              and dinner. But even if you love cooking, where is your mind while
              preparing the ingredients? Or when stirring the soup or sauce?
              Cooking doesn’t have to be a rushed experience, or something we do
              on auto-pilot, distracted by thoughts, feelings, and
              inner-dialogue. In fact, of all the tasks we do in our daily
              lives, cooking offers a wonderful opportunity for us to train the
              mind to be present<span> . . .</span>
            </p>
          </div>

          <div className="photo-gallery3" onClick={() => article3()}>
            <img
              src="https://images.ctfassets.net/v3n26e09qg2r/4SRiPVNeqQ6EQooEC6Sws2/c9a121906392d8eda1b236e607868102/artwork-web.png?w=500&fm=webp"
              alt="jammin' apple"
            />
            <p>
              The most important relationship is the one we have with ourselves.
              Being comfortable and confident in our own skin makes that
              relationship easier and more enjoyable. When we feel good, we take
              pleasure in life and the things our body lets us experience. But
              when we struggle with our body image, we might find that
              relationship gets tricky. Moving through our days confidently or
              caring for ourselves can be challenging <span> . . .</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
