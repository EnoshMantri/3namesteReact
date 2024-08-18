import React from "react";
import ReactDOM from "react-dom/client"; // Correct import from 'react-dom/client'


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://imgs.search.brave.com/zIm0fA7HJkcwKycvN5QHANWTZTMMYNNDJQE3KZfSFWs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8zNi8zOC9r/aXRjaGVuLWN1dHRp/bmctYm9hcmQtbG9n/by1mb3ItY29va2lu/Zy1jbGFzcy12ZWN0/b3ItMzEwODM2Mzgu/anBn" alt="Logo" />
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>Complaint</li>
                </ul>
            </div>
        </div>
    );
};

const reslist = [
    {
        name: "Mefihl Restaurant",
        rating: 4.3,
        city: "Hyderabad",
        dish: "Chicken Biryani"
    },
    {
        name: "Spice Garden",
        rating: 4.5,
        city: "Bangalore",
        dish: "Paneer Tikka"
    },
    {
        name: "Sushi World",
        rating: 4.7,
        city: "Mumbai",
        dish: "Sushi"
    },
    {
        name: "The Pasta Place",
        rating: 4.2,
        city: "Delhi",
        dish: "Pasta"
    },
    {
        name: "Taco Haven",
        rating: 4.6,
        city: "Chennai",
        dish: "Tacos"
    },
    {
        name: "Taco Haven",
        rating: 4.6,
        city: "Chennai",
        dish: "Tacos"
    }
    ,
    {
        name: "Taco Haven",
        rating: 4.6,
        city: "Chennai",
        dish: "Tacos"
    }
    ,
    {
        name: "Taco Haven",
        rating: 4.6,
        city: "Chennai",
        dish: "Tacos"
    }
    ,
    {
        name: "Taco Haven",
        rating: 4.6,
        city: "Chennai",
        dish: "Tacos"
    }
];

const Card = (props) => {
    const { name, rating, city, dish } = props.resData;
    return (
        <div className="card">
            <img id="img" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4" alt="Dish" />
            <h4>{name}</h4>
            <h4>{rating}</h4>
            <h4>{city}</h4>
            <h4>{dish}</h4>
        </div>
    );
};

const Body = () => {
    return (
        
            
            <div className="card-div">
                {reslist.map((restaurant, index) => (
                    <Card key={index} resData={restaurant} />
                ))}
            
        </div>
    );
    
};


const AppLayout = () => {
    return (
        <div className ="Applayout">
            <Header />
            <Body />
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // Correct usage of component
