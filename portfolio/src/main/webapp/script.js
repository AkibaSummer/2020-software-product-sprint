 // Copyright 2019 Google LLC
 //
 // Licensed under the Apache License, Version 2.0 (the "License");
 // you may not use this file except in compliance with the License.
 // You may obtain a copy of the License at
 //
 //     https://www.apache.org/licenses/LICENSE-2.0
 //
 // Unless required by applicable law or agreed to in writing, software
 // distributed under the License is distributed on an "AS IS" BASIS,
 // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 // See the License for the specific language governing permissions and
 // limitations under the License.

 /**
  * Adds a random greeting to the page.
  */
 function addRandomGreeting() {
   const greetings = ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

   // Pick a random greeting.
   const greeting = greetings[Math.floor(Math.random() * greetings.length)];

   // Add it to the page.
   const greetingContainer = document.getElementById('greeting-container');
   greetingContainer.innerText = greeting;
 }

 /**
  * Calculate the greatest common divisor.
  */
 function calculateGCD() {
   function GCD(a, b) {
     var temp;
     while (b != 0) {
       temp = a % b;
       a = b;
       b = temp;
     }
     return a;
   }
   document.getElementById('result').innerText = "The result is " + GCD(document.getElementById('number1').value, document.getElementById('number2').value);
 }

 async function getQuotesUsingAsyncAwait() {
   const response = await fetch('/data');
   const quotes = await response.json();
   var x = ""
   for (i in quotes) {
     x += quotes[i] + "\n";
   }
   document.getElementById('quote-container').innerText = x;
 }

 function toBeNijigen() {
   document.getElementById('NijigenImage').onload = function() {
     document.getElementById('NijigenImage').style = "width:100%;";
   }
   document.getElementById('NijigenImage').src = "https://api.ixiaowai.cn/api/api.php?" + Math.random();
 }

 function showGame() {
   document.getElementById('gameImage').onload = function() {
     document.getElementById('gameImage').style = "width:100%;";
   }
   document.getElementById('gameImage').src = "/image/Mario.jpg";
 }

 async function postComment() {
   await document.getElementById("commentForm").submit();
   await new Promise(r => setTimeout(r, 200));
   comments = JSON.parse(window.frames["handlePost"].document.body.innerText)
   document.getElementById('comments').innerText = parseComments(comments);
 }

 function parseComments(comments) {
   var commentsText = "";
   for (i in comments) {
     commentsText += comments[i].name + "          " + comments[i].timestamp + "\n";
     commentsText += comments[i].comment + "\n";
     commentsText += "\n";
   }
   return commentsText;
 }

 async function getComments() {
   const response = await fetch('/getComments');
   const comments = await response.json();
   document.getElementById('comments').innerText = parseComments(comments);
 }

 $(document).ready(function() {
   getComments();
 })
