const dummyPromise = new Promise((resolve, reject) => {
    reject('failed'); 
});

dummyPromise
    .then(response => console.log('Response:', response))
    .catch(error => console.log('Error:', error)); 
const fs = require('fs/promises');

async function writeFile() {
    await fs.writeFile('file.txt', 'Hello Niveus!');
    console.log('File written successfully!');
}

writeFile();
