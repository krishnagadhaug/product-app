import React, { useState } from 'react'
import NavBar from './NavBar'

const Viewpro = () => {

    const[data,changeData]=useState(
[

{"name":"Head and shoulder","price":"250","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfHSeoPx4dXoz61WFOSkrZwrM5qzGW1pXo2sjSfZmRw&s=10"},
{"name":"Lux","price":"100","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcMEfzbDV1l1AbMS5p6lGOqvHQjyVQhekElxS17T7Mg&s=10"},
{"name":"Plum","price":"200","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYg9fmGgG7A_VAVU383eOHuy0nM4tB5IHC14D4LT-T3A&s=10"},
{"name":"Oreo","price":"90","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cSVDkiOtQR8N4OzydZwvDqc1dnoPYWCnwAv9tYNJdQ&s"},
{"name":"Maggiee","price":"167","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaugMQyKGR-5kn7hH9qc21tF0zC1-AeTn1HLqnA7iAg&s=10"},
{"name":"Dairymilk","price":"230","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxDfdM5iGKytJulJ9h1_u6_XkHg9tXfTItngBDImpYA&s=10"},

]


    
    )
  return (
    <div>

<div className="container">
    <NavBar/>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                {data.map(

                    (value,index)=>{
                        return(
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<div className="card" style={{width: "18rem"}}>

                        <img src={value.avatar}
                        className="card-img-top" alt="..." height="300"/>
                        <div className="card-body">

                        <p><strong>Name:</strong>{value.name}</p>

                            <p><strong>Price:</strong>{value.price}</p>
                            <button className="btn btn-success">
                                Add to cart
                            </button>

                        </div>
                    </div>

                </div>
                
                        )
                    }
                )}
                
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewpro