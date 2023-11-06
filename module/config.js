export { getQuote };

const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f46b06a4fdmshb81f961e3995f32p18f17djsn2d1f2604e938',
    }
};

async function getQuote() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.content);
        console.log(data.originator.name);
        document.getElementById('content').innerHTML = data.content;
        document.getElementById('name').innerHTML = '- ' + data.originator.name + ' -';
    } catch (error) {
        console.error(error);
    }
};