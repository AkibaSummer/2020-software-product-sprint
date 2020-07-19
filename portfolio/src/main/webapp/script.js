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

 async function getRandomQuoteUsingAsyncAwait() {
   const response = await fetch('/random-quote');
   const quote = await response.text();
   document.getElementById('quote-container').innerText = quote;
 }

 function toBeNijigen() {
   document.getElementById('NijigenImage').src = "https://api.ixiaowai.cn/api/api.php?" + Math.random();
 }
