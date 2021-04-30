import React, { useState } from "react";
import "./AddRecipes.css";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Ingredients from "../home/components/Ingredients";

// const StyledDiv = styled.div `
// 	padding: 10%;
// `
const initialState = {
	id: 1,
	title: "Microwave Ramen",
	image_url: "something.com",
	source: "Garrick's College Roommate",
	contributor: "garrick",
	categories: ["easy", "asian", "noodles"], //= "easy asian Noodles".toLowerCase()split(" ")
	description:
		"A very easy recipe for when you have no time to get your nightly dose of carbs, sodium, and MSG.",
	ingredients: [
		{
			//ingredient_id: 1,
			name: "water",
			quantity: 2,
			unit: "cup",
		},
		{

			//ingredient_id: 666,
			name: "packaged ramen",
			quantity: 1,
			unit: "package",
		},
	],
	steps: [
		{
			step_number: 1,
			instructions:
				"Put water in microwave safe container and heat on high for 5 minutes or until boiling.",
		},
		{
			step_number: 2,
			instructions: "Open flavor packet, empty contents into water, and stir.",
		},
		{
			step_number: 3,
			instructions:
				"Place uncooked noodles into broth, cover, and let sit for 5 minutes.  You may heat it further in microwave, stirring occasionally.",
		},
		{
			step_number: 4,
			instructions: "Allow to cool safely and enjoy.",
		},
	],
};

const AddRecipes = () => {

	// const [ingredient, setIngredient] = useState({});
	const [recipeEdit, setRecipeEdit] = useState("");
	const [newIngredient, setNewIngredient] = useState({});
	const [recipe, setRecipe] = useState(initialState);
	const login = () => {
		// console.log();
	};

	const addIngredient = (recipe, ingredient) => {
		// console.log(recipes.ingredients);
		setRecipe({
			...recipe,
			ingredient: [...recipe.ingredients, ingredient],
		});
		// recipes.ingredients.setState({
		// 	ingredient_id: Date.now(),
		// 	name: "title",
		// 	quantity: 1,
		// 	unit: "package",
		// });
	};

	const change = (e) => {
		console.log(e.target.value);
	};
	return (
		<>
			<Header />
			<div id="main">
				<Form.Group size="lg" controlId="username">
				<Form.Label>Title:</Form.Label>
				<Form.Control
					autoFocus
					type="text"
					value={initialState.title}
					onChange={change}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="username">
				<Form.Label>Image:</Form.Label>
				<Form.Control
					type="text"
					value={initialState.image_url}
					// onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="source">
				<Form.Label>Source:</Form.Label>
				<Form.Control
					type="text"
					value={initialState.source}
					// onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="username">
				<Form.Label>Contributor:</Form.Label>
				<Form.Control
					type="text"
					value={initialState.contributor}
					// onChange={(e) => setUsername(e.target.value)}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="source">
				<Form.Label>Categories:</Form.Label>​
				<Form.Control
					type="text"
					value={initialState.categories}
					// onChange={(e) => setDescription(e.target.value)}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="description">
				<Form.Label>Description:</Form.Label>
				<Form.Control
					type="text"
					value={initialState.description}
					// onChange={(e) => setDescription(e.target.value)}
				/>
			</Form.Group>

			<button onClick={addIngredient(recipe)}>Add New Ingredient</button>
			</div>
			<Footer />
		</>
	);
};

export default AddRecipes;
// {
// 	/* <form>
// 				<label value={initialState.title}>Title: </label>
// 				<input type="text" id="fname" name="fname" />
// 				<label value={initialState.title}>Title: </label>

// 				<input type="text" id="lname" name="lname" />
// 			</form> */
// }
