import React from 'react'

function RecipesItems(props) {
 console.log(props)

 const myItems = [
  {
    id: "01",
    name: "egg",
    description: "Rich In Protein",
    link: "#",
  },
  {
    id: "03",
    name: "fish",
    description: "Good For Health",
    link: "#",
  },
  {
    id: "02",
    name: "vegitable",
    description: "Used in daily life",
    link: "#",
  },
  {
    id: "04",
    name: "Fruits",
    description: "Can be Used in daily life",
    link: "#",
  },
  {
    id: "05",
    name: "Chicken",
    description: "Used in daily life",
    link: "#",
  },

];

    //   const filteredData = myItems.filter((foo) => {
    //     //if no input the return the original
    //  return  foo.name = props.food
    // })

   // console.log(filteredData)


      
  return (
    <>
    {myItems.map((item) => {
          return   <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                          
                      
                           <ul>
                            <li>Name: {item.name} <br/></li>
                            <li>Description: {item.description}<br/></li>
                            <li> link: {item.link}<br/></li>
                          </ul>
                          
                      {/* Name: {myItems.name} <br/>
                      Description: {myItems.desc}<br/>
                     link: {myItems.link}<br/> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                 })}
    </>
    
  )
}












export default RecipesItems