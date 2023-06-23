import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import data from "./data";
import "./css/styles.css"

export default function App() {
    

    const cards = data.map(experience => {
      return (
        <Cards 
          key={experience.id}
          {...experience}
          />
      )
    })
  return(
      <>
        <div>
          <Header />
          <Hero />
          <section className="cards--list">  
          {cards}
          </section>
        </div>
      </>
    ); 
}
