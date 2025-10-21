"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = `http://localhost:8080/api/v1/getRandomImage`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.log(error)
    }
}

getRandomImage();

// const quotes = [
//     {
//         quote: "All hands! Abandon ship!",
//         author: "Captain Picard",       
//     },
//     {
//         quote: "Doh!",
//         author: "Homer Simpson",
//     },
//     {
//         quote: "The internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
//         author: "Eric Schmidt",
//     },
//     {
//         quote: "Learn to do the common things uncommonly well.",
//         author: "George Washington Carver",
//     }
// ]

// function loopThroughQuotes() {
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length) {
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         } else {
//             quoteIndex = 0;
//         }
//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);