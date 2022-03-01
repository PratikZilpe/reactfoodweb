import React from "react";
import { useState } from "react";
// import { useState, useEffect } from "react";
import './RecipeItem.css'
//import RecipesItems from "./RecipesItems"; 

const RecipeItem = () => {

  const myItems = [
    {
      id: "01",
      name: "Vada Pav",
      imgPath: "./Images/vada-pav.jpg",
      images:  new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step1:Heat the oil in a wok over medium heat. Saute garlic and green chile for 30 seconds, then stir in onions and ginger. Cook until onions are brown. Add tomatoes, and cook until pasty. Stir in cauliflower, cabbage, peas, carrots and potatoes. Season with pav bhaji masala. Cover, and cook for 15 minutes, stirring occasionally. Season with salt, and stir in lemon juice
      Step 2: Toast the dinner rolls, and spread lightly with butter. Serve garnished with chopped onion, green chile and cilantro.
      `,
      category: "Indian",
      link: "https://youtu.be/C4pzmjHgqLw",
    },
    {
      id: "02",
      name: "Coconut Fish Curry",
      imgPath: "./Images/coco-fish-curry.jpg",
      images: new URL( "https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg"),
      Recipe: `Step1: Combine curry powder, ground ginger, and ground turmeric in a skillet; toast the spices over medium heat until browned, about 5 minutes. Pour olive oil and garlic into the spice mixture and stir to make a paste.
      Step 2: Stir onion into the spice mixture; cook and stir until the onion is tender, 5 to 7 minutes. Stir about half the coconut milk and half the water into the onion mixture; simmer together for 5 minutes. Add cod to the mixture; continue cooking until the fish is firm, about 5 minutes. Add tomato, remaining coconut milk, and remaining water to the skillet; cook until the tomato is softened, about 5 minutes.
      `,
      category: "Indian",
      link: "https://youtu.be/aROKVWwp43U",
    },
    {
      id: "03",
      name: "Wheat Dosa",
      imgPath: "./images/wheat-dosa.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1:Combine flour, 2 tablespoons oil, salt, and baking soda together in a bowl. Mix for 1 to 2 minutes. Add 1 3/4 cup water and mix until it's lump free, the chunks of flour have dissolved, and the batter has a good consistency, adding more water if needed.
      Step 2:Heat 1 tablespoon oil on a griddle over medium heat. Pour some of the batter onto the griddle; spread the batter in a circular motion, slowly yet steadily. Cook until the edges start to brown, 2 to 3 minutes. Remove from the grill. Repeat with remaining batter, adding more oil between each batch.
      `,
      category: "South Indian",
      link: "https://youtu.be/NBMr5Nzmd0U",
    },
    {
      id: "04",
      name: "Pour Cake",
      imgPath: "./images/pour-cake.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1:Preheat oven to 350 degrees F (190 degrees C). Grease one 9 inch square baking pan.
      Step 2:Whisk together the flour, sugars, baking soda, cocoa and salt. Stir in the vegetable oil, vanilla and vinegar. Pour batter into the prepared pan and pour the water over the top. Draw a fork through the batter to just barely mix.
      Step 3:Bake at 350 degrees F (175 degrees C) for 35 minutes. Let cool slightly and serve warm.
      `,
      category: "Breakfast",
      link: "https://youtu.be/FHqwPRDaciU",
    },
    {
      id: "05",
      name: "Paneer Tikka Masala",
      imgPath: "./Images/ptm.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1:
      Melt butter in a skillet over medium heat; cook and stir paneer until golden, about 5 minutes. Add onions, green bell pepper, jalapeno peppers, cashews, garlic paste, ginger paste, cayenne pepper, cumin, coriander, and garam masala to paneer; cook and stir until fragrant and evenly coated, about 1 minute.
      Step 2:
      Mix tomato sauce, half-and-half, and salt into paneer mixture; simmer until thickened, about 30 minutes.
      `,
      category: "Indian",
      link: "https://youtu.be/Nru8aadeN0I",
    },
    {
      id: "06",
      name: "Cooky Cookies",
      imgPath: "./Images/cc.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1
      Preheat oven to 375 degrees F (190 degrees C).
      Step 2
      Beat butter and sugars until fluffy. Slowly add oil and beat until oil is well incorporated. Add egg and vanilla, beat to mix.
      Step 3
      In a small bowl, combine flour, soda and salt. Add to butter mixture and stir just until mixed. Combine corn flakes, oatmeal, nuts and coconut and add to cookie mixture; mix just until combined.
      `,
      category: "Breakfast",
      link: "https://youtu.be/rGDyX1RhVTQ",
    },
    {
      id: "07",
      name: "Crescent Milk",
      imgPath: "./Images/milk.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1
      Put 8 fluid ounces water, cashews, agave nectar, and vanilla extract in a blender; blend for 2 minutes. Strain mixture through cheesecloth or a fine-mesh sieve into a bowl.
      Step 2
      Blend the strained bits of cashew mixture in the blender with remaining 8 fluid ounces water until smooth. Strain mixture through cheesecloth or sieve again.
      Step 3
      Pour strained liquid into a bottle and add cinnamon; refrigerate until chilled, at least 30 minutes. Shake well before drinking.
       `,
       category: "Breakfast",
      link: "https://youtu.be/WIRAGgdUzIM",
    },
    {
      id: "08",
      name: "Hyderabad Dum Biryani",
      imgPath: "./Images/dum-biryani.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1
      Place black peppercorns, cloves, cardamom, cinnamon sticks, star anise, and kala jeera in a spice grinder; grind into a fine powder.
      Step 2
      Place cilantro and mint leaves in a food processor; pulse until coarsely chopped.
      Step 3
      Combine spice powder, cilantro-mint mixture, yogurt, lemon juice, ginger-garlic paste, chile powder, biryani masala powder, and turmeric in a large bowl. Add chicken; turn to coat evenly. Cover with plastic wrap and let marinate in the refrigerator, about 2 hours.
      Step 4
      Bring water and rice to a boil in a saucepan; add 2 bay leaves. Reduce heat to medium-low, cover, and simmer until rice is partially cooked through and still firm, about 5 minutes. Drain.
      Step 5
      Combine milk and saffron in a small bowl; stir to combine.
       `,
       category: "Indian",
      link: "https://youtu.be/8Fw_zWPbGog",
    },
    {
      id: "09",
      name: "Vanilla Ice Cream",
      imgPath: "./Images/ice-cream.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg"),
      Recipe: `Step 1
      In a large bowl, combine the heavy cream and the half and half. Gradually whisk in the sugar until blended.
      Step 2
      Whisk in the vanilla. Refrigerate, covered, until very cold, at least 3 hours or as long as 3 days.
      Step 3
      Whisk the mixture to blend and pour into the canister of an ice cream maker. Freeze according to the manufacturer's directions. Eat at once or transfer to a covered container and freeze up to 8 hours.
      `,
      category: "Breakfast",
      link: "https://youtu.be/OvXDCzs5ZSE",
    },
    {
      id: "10",
      name: "Peach Drink",
      imgPath: "./Images/drink.jpg",
      images: new URL("https://www.spiceupthecurry.com/wp-content/uploads/2016/07/vada-pav-recipe-6.jpg") ,
      Recipe: `Step 1
      Fill 2 tall glasses with ice cubes. Pour in equal parts peach nectar and orange juice to fill the glasses. Stir.
      `,
      category: "Breakfast",
      link: "https://youtu.be/fiJ0kT2qnCQ",
    },
  ];

    const [searchTerm, setSearchTerms] = useState("");
      
    //const [searchResults, setSearchResults] = useState(myItems);

  // useEffect(() => {
  //   const results = myItems.filter(items =>
  //     items.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerms(event.target.value)
   // setSearchTerms(searchTerm)
   // console.log(event.target.value)
  //  if(searchTerm !== "") {
  //    const newFoodList = myItems.filter()
  //  }
  }

  // const submitForm = (event) => {
  //   event.preventDefault();
  //  // console.log(event)
  //  // console.log(first)
  //  }

  const filterItem = (categItem) => {
      const updatedItems = myItems.filter( (currEle) => {
          return currEle.category === categItem;
      });
      setSearchTerms(updatedItems)
     // setSearchResults(updatedItems)
  }
  
  return (

    <div className="bg_img">
      <div className="menu-tabs container">
          <div className="menu-tab d-flex justify-content-around">
              <button className="btn btn-warning" onClick={ ()=> filterItem('Breakfast')} >Breakfast</button>
              <button className="btn btn-warning" onClick={ ()=> filterItem('South Indian')} >South Indian</button>
              <button className="btn btn-warning" onClick={ ()=> filterItem('Indian')}>Indian</button>
          </div>
      </div>
      <h3 className="mt-4 text-center main-heading link-light">Search Your Food Item Here</h3>
        
            {/* <form className="app_searchForm" onSubmit={submitForm}> */}
            <form className="app_searchForm" >
              <input className="search_input" type="text" placeholder="enter ingridient to search" value={searchTerm} onChange={handleChange} />
              {/* <button className="search_button" type="submit" className="btn btn-outline-primary">Search</button> */}
            </form>   
      <>
    
        {myItems.filter((val) => {
          if(searchTerm === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }  
        }).map((item) => {
              return   <div className="container" key={item.id}>
                    <div className="row">
                        <div className="col-md-12 ">
                        <div className="card">
                            <div className="card-body">
                              
                            
                              <ul key={item.id}>
                                {/* <li>key={Math.random() * 100}</li> */}
                                <span className="font-monospace text-right"><p className="font-monospace text-right">No:{item.id}</p> </span>  
                               {/* <li>Name: {item.name} <span><img src= {item.imgPath} /> </span></li> */}
                                {/* <h3 className="display-5">Name: {item.name} </h3> */}
                                <u><p className="display-5"> {item.name}</p></u>
                                 {/* <li><img className="item_img" src= {item.images} /> </li> */}
                               <img className="foods_img" src= {item.imgPath} alt={item.name} />  
                               <li>Description: <p className="font-monospace"> {item.Recipe}</p></li>
                                {/* <li> Link: <a href={item.link} /> Click here for Youtube Link </li> */}
                                <li ><a href={item.link} target="_blank"  class="link-info" rel="noreferrer">Click here for Youtube Link</a> </li>
                                
                              </ul>
                           </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    })}
        {/* {searchResults} */}

      </>

    </div>

   
  );
};

export default RecipeItem;
