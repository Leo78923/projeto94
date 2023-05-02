const firebaseConfig = {
  apiKey: "AIzaSyDxN1qlMK_XGxL7niEeuYgVGEay8Sp4Tdk",
  authDomain: "teste-43.firebaseapp.com",
  databaseURL: "https://teste-43-default-rtdb.firebaseio.com",
  projectId: "teste-43",
  storageBucket: "teste-43.appspot.com",
  messagingSenderId: "1080328193641",
  appId: "1:1080328193641:web:2f9e881cbd397ef3aa84f8"
};

firebase.initializeApp(firebaseConfig); 

function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}
