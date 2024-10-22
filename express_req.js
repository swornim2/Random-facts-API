const express = require('express');
const facts = require('./test-mod');  // Import the facts

const app = express();

const getRandom=()=>{
    const getRandomfacts =Math.floor(Math.random()*facts.length);
    return facts[getRandomfacts]
}

app.get('/fact', (request, response) => {
    response.json(getRandom());  // Send the facts as a JSON response
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is running on http://localhost:${process.env.PORT || 3000}/fact`);
});
