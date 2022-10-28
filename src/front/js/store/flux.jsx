import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA8L9H6cbAsiWTuNLJOY7NXSOjObn5djo",
  authDomain: "e-tutor-6dc22.firebaseapp.com",
  projectId: "e-tutor-6dc22",
  storageBucket: "e-tutor-6dc22.appspot.com",
  messagingSenderId: "725051473181",
  appId: "1:725051473181:web:5e282be3125039cc6f75f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//   try {
// 	const docRef = await addDoc(collection(db, "classFavorites"), {
// 		title: "Front-End / HTML-CSS",
// 		duration: " 2 hours",
// 		tutor: "Ignacio Romero",
// 		picture: "https://www.onlinecoursereport.com/wp-content/uploads/2020/06/shutterstock_1150510607-1024x512.jpg"
// 	});
// 	console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
// 	console.error("Error adding document: ", e);
//   }

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      people: [],
      planets: [],
      classFavorites: [],
      tutores: [],
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
            people: data.results,
          });
        } catch (error) {
          console.log(error);
        }
      },

      getPlanets: async () => {
        try {
          let response = await fetch("https://swapi.dev/api/planets");
          let data = await response.json();
          setStore({
            planets: data.results,
          });
        } catch (error) {
          console.log(error);
        }
      },

      addClassFavorites: async () => {
        try {
          const docRef = await addDoc(collection(db, "classFavorites"), {
            title: "Front-End / HTML-CSS",
            duration: " 2 hours",
            tutor: "Ignacio Romero",
            picture:
              "https://www.onlinecoursereport.com/wp-content/uploads/2020/06/shutterstock_1150510607-1024x512.jpg",
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },

      getClassFavorites: async () => {
        const classFavoritesCol = collection(db, "classFavorites");
        const classFavoritesSnapshot = await getDocs(classFavoritesCol);
        // console.log(classFavoritesSnapshot);
        const classFavoritesList = classFavoritesSnapshot.docs.map((doc) =>
          doc.data()
        );
        // return classFavoritesList;
        setStore({ classFavorites: classFavoritesList });
      },

      addUser: async (user) => {
        try {
          const docRef = await addDoc(collection(db, "users"), user);
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },

      getUsers: async () => {
        const usersCol = collection(db, "users");
        const userSnapshot = await getDocs(usersCol);
        // console.log(userSnapshot);
        const userList = userSnapshot.docs.map((doc) => doc.data());
        // return userList;
        setStore({ users: userList });
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getTutores: async () => {
        const tutoresCol = collection(db, "tutores");
        const tutorSnapshot = await getDocs(tutoresCol);
        // console.log(tutorSnapshot);
        const tutorList = tutorSnapshot.docs.map((doc) => doc.data());
        // return userList;
        setStore({ tutores: tutorList });
      },

      // getTutores: async () => {
      //   try {
      //     let response = await fetch("https://randomuser.me/api/?results=10");
      //     let data = await response.json();
      //     console.log(data.results);
      //     console.log("888888888");
      //     setStore({
      //       tutores: data.results,
      //     });
      //     for (let tutor of data.results){
      //       const docRef = await addDoc(collection(db, "tutores"), tutor);
      //       console.log("Document written with ID: ", docRef.id);
      //     }
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },

      // addTutores: async () => {
      //   try {
      //     for (let tutor of tutores){
      //       const docRef = await addDoc(collection(db, "tutores"), tutor);
      //       console.log("Document written with ID: ", docRef.id);
      //     }
      //     // const docRef = await addDoc(collection(db, "users"), user);
      //     // console.log("Document written with ID: ", docRef.id);
      //   } catch (e) {
      //     console.error("Error adding document: ", e);
      //   }
      // },

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
      },
    },
  };
};

export default getState;
