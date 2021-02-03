import * as firebase from 'firebase/app';
import 'firebase/storage'; 
import 'firebase/firestore';

// Your web app's Firebase configuration  
var firebaseConfig = {    
    apiKey: "AIzaSyAeXetUIIcGrM2k70porcN-CfPfvH63g28",    
    authDomain: "firegram-87377.firebaseapp.com",    
    databaseURL: "https://firegram-87377.firebaseio.com",    
    projectId: "firegram-87377",    
    storageBucket: "firegram-87377.appspot.com",    
    messagingSenderId: "1069714719402",    
    appId: "1:1069714719402:web:a029b7312b32f933cc46d3"  
};  
// Initialize Firebase  
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; 