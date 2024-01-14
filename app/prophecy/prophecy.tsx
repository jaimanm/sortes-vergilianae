// import { readFileSync } from 'fs';

// export function Prophecy({ book, lineNumber }) {
//     // const book = getRandomNumber(1, 12)
//     // const bookLength = readFileSync('public/Aeneid_Latin/Aeneid_Latin_' + book + '.txt', 'utf-8').split('\n').length
//     // const lineNumber = getRandomNumber(1, bookLength)
//     const numLines = 3
//     const latinLine = getLatin(book, lineNumber, numLines)
//     const englishLine = getEnglish(book, lineNumber, numLines)

//     return (
//         <div className='flex-col justify-center text-2xl mx-16'>
//             <p className='italic text-xl'>Aeneid Book {book}, Lines {lineNumber - 3}-{lineNumber}</p>
//             <br></br>
//             <p>Latin:</p>
//             <ul>
//                 {latinLine.map((line, index) => (
//                     <li key={index}>{line}</li>
//                 ))}
//             </ul>
//             <br></br>
//             <p className=''>English:</p>
//             <ul>
//                 {englishLine.map((line, index) => (
//                     <li key={index}>{line}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// function getLatin(book, lineNumber, numLines) {
//     // get a random Latin line from the Aeneid
//     // the .txt files are in ../../lib/
//     var lines = readFileSync('public/Aeneid_Latin/Aeneid_Latin_' + book + '.txt', 'utf-8').split('\n')

//     // return a random line
//     var line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1))
//     return line
// }
// function getEnglish(book, lineNumber, numLines) {
//     // get a random English line from the Aeneid
//     // the .txt files are in ../../lib/
//     var lines = readFileSync('public/Aeneid_English/Aeneid_English_' + book + '.txt', 'utf-8').split('\n')
    
//     // return a random line
//     var line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1))
//     return line
// }
'use client'

import { useState, useEffect } from 'react';


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function Prophecy() {
    const numLines = 3;
    const [book, setBook] = useState(1);
    const [latinLine, setLatinLine] = useState([]);
    const [englishLine, setEnglishLine] = useState([]);
    const [lineNumber, setLineNumber] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBook(getRandomNumber(1, 12));
    }, []);

    useEffect(() => {
        setLoading(true);
        fetch('Aeneid_Latin/Aeneid_Latin_' + book + '.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                setLineNumber(getRandomNumber(1, lines.length));
                const line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1));
                setLatinLine(line);
            });

        fetch('Aeneid_English/Aeneid_English_' + book + '.txt')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                const line = lines.slice((lineNumber - 1) - numLines, (lineNumber - 1));
                setEnglishLine(line);
                setLoading(false);
            });
    }, [book]);

    if (loading) {
        return <p className='mx-16 text-4xl font-bold italic'>Loading...</p>;
    }

    return (
        <div className='flex-col justify-center text-2xl mx-16 h-auto w-auto'>
            <p className='italic text-xl'>Aeneid Book {book}, Lines {lineNumber - numLines}-{lineNumber}</p>
            <br></br>
            <p>Latin:</p>
            <ul>
                {latinLine.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
            <br></br>
            <p className=''>English:</p>
            <ul>
                {englishLine.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
}