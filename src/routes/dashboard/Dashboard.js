import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from "styled-components"
import Footer from '../home/components/Footer';
import Header from '../home/components/Header';

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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/main.js'
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script)
        }
      }, [])

    const SectionTop = styled.section `
        padding-top: 60px;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        @media all and (min-width: 980px) {
            flex-direction: column;
          }
      `

    const SectionMid = styled.section `
      padding: 60px;
      display: flex;
      flex-direction: column-reverse; 
      justify-content: center;
      align-items: center;
      @media all and (min-width: 980px) {
          flex-direction: column;
        }
    `

    
    const SectionBottom = styled.section `
      padding: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media all and (min-width: 980px) {
          flex-direction: column;
          margin-left: 50rem;
        }
    `

    return (
        <>
            <Header />
            <div>
                <SectionTop>
                        <h1>Welcome </h1>
                </SectionTop>
                <SectionMid>  
                    <div>
                        <button className="button" style={{marginBottom: `50%`}} onClick={Logout} >Log Out</button>
                    </div>
                    <div>
                        <button className="button primary" style={{marginBottom: `50%`}} onClick={getRecipes}>Get Recipes</button>
                    </div>
                </SectionMid>
                <SectionBottom>
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
                </SectionBottom>
            </div>
            <Footer />
    </>
    )
}

const Resdiv = styled.div`
border: 2px solid red;
width: 50vw;
height: 100vh;
`
export default Dashboard
