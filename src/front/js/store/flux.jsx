import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBA8L9H6cbAsiWTuNLJOY7NXSOjObn5djo",
	authDomain: "e-tutor-6dc22.firebaseapp.com",
	projectId: "e-tutor-6dc22",
	storageBucket: "e-tutor-6dc22.appspot.com",
	messagingSenderId: "725051473181",
	appId: "1:725051473181:web:5e282be3125039cc6f75f4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			people: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getPeople: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/people");
					let data = await response.json();
					setStore({
						people: data.results
					});
					
				} catch (error) {
					console.log(error)
				}
			},
		
			getPlanets: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let data = await response.json();
					setStore({
						planets: data.results
					});
					
				} catch (error) {
					console.log(error)
				}
			},

			addUser: async (user) => {
				try {
					const docRef = await addDoc(collection(db, "users"), user);
					console.log("Document written with ID: ", docRef.id);
				  } catch (e) {
					console.error("Error adding document: ", e);
				  }
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
