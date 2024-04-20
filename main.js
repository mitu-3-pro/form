 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
 import { getDatabase, ref, set, onValue} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js"
//  import 'emoji-picker-element';

 const firebaseConfig = {
   apiKey: "AIzaSyDlQxIR6McAAX4ofvXYDGWqqHV5BswQbPk",
   authDomain: "chatboot-e8d73.firebaseapp.com",
   databaseURL: "https://chatboot-e8d73-default-rtdb.firebaseio.com",
   projectId: "chatboot-e8d73",
   storageBucket: "chatboot-e8d73.appspot.com",
   messagingSenderId: "364776013338",
   appId: "1:364776013338:web:45377ca8951e27d5ccdba3",
   measurementId: "G-QKR19L95H5"
 }; // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

var arr=[];
const db = getDatabase();
const starCountRef = ref(db, 'users');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log("data's value:",data);
    arr=data.message;
    console.log("arr's value:",arr);  
    var chatWindow=document.getElementById('chatWindow');
  chatWindow.innerHTML= " ";
  for(let i=0;i<arr.length;i++){
    console.log("hello",i);
    var chat= document.createElement('p');
    chat.innerHTML= arr[i];
    chatWindow.appendChild(chat);
    console.log("chat messages:",chat);
  }
  })
var Btn=document.getElementById("send");
console.log("hello");
function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, 'users/'), {
    message:arr
  });
}
window.storeFirebaseMessage = function (){
  let message=document.getElementById('message');
  console.log(message);
  arr.push(message.value);
  set(ref(db, 'users/' ), {
    message:arr
  });
  message.value = " ";
}
document.querySelector('emoji-picker')
  .addEventListener('emoji-click', event => console.log(event.detail));