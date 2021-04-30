import React, {useState} from 'react'
import axios from 'axios'
import styled from "styled-components"
import Header from '../home/components/Header'


const Dashboard = (props) => {
    const [recipes, setRecipes] = useState([])
    const getRecipes = () => {
        axios.get("https://tt16-secret-recipes.herokuapp.com/api/recipes") 
        .then((res) => setRecipes(res.data))
        .catch((err) => console.log(err))
    }
    const Logout = () => {
        localStorage.clear();
        props.history.push("/");
    }
    console.log(recipes);
    return (
        <>
            <Header />
            <div>
                <section>
                        <h1>Welcome </h1>
                </section>
                <section>  
                    <div>
                        <button className="button" style={{marginBottom: `50%`}} onClick={Logout} >Log Out</button>
                    </div>
                    <div>
                        <button className="button primary" style={{marginBottom: `50%`}} onClick={getRecipes}>Get Recipes</button>
                    </div>
                </section>
                <section>
                    {recipes.map((rec) => {
                        return ( <Resdiv key={rec.id}>
                            <CardImg width="100%" height="40%" src={rec.image_url}/>
                            <h1>Title: {rec.title}</h1>
                            <p>Categories: {rec.categories}</p>
                            <p>Overlord: {rec.source}</p> 
                            <p>Contributor: {rec.contributor}</p>
                            <p>Description: {rec.description}</p>
                        </Resdiv>
                            )    
                    })}
                </section>
            </div>
                {recipes.map((rec) => {
                    return ( <Resdiv key={rec.id}>
                        <h1>Title: {rec.title}</h1>
                        <p>Categories: {rec.categories}</p>
                        <p>Overlord: {rec.source}</p> 
                        <p>Contributor: {rec.contributor}</p>
                        <p>Description: {rec.description}</p>
                        {/* <img width="200px" src={rec.image_url}/> */}
                    </Resdiv>
                        )    
                })}
        </>
    )
}
const Resdiv = styled.div`
    border: 2px solid red;
    width: 50vw;
    height: 100vh;
    border-radius: 0.35em;
    border: solid 3px #49bf9d;
`

const CardImg = styled.img`
    object-fit: cover;
`

export default Dashboard
