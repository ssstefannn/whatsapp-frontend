import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCOADLXqQvLXikA8v6gQE4Oo2x1aNAIhlA",
    authDomain: "whatsapp-clone-6d2b5.firebaseapp.com",
    projectId: "whatsapp-clone-6d2b5",
    storageBucket: "whatsapp-clone-6d2b5.appspot.com",
    messagingSenderId: "473999087895",
    appId: "1:473999087895:web:e8fc140d922d0b878bff52"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export {auth};