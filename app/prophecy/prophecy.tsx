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
        const fetchLines = async () => {
            setLoading(true);
            const newBook = getRandomNumber(1, 12);
            setBook(newBook);
            const response = await fetch('Aeneid_Latin/Aeneid_Latin_' + newBook + '.txt');
            const data = await response.text();
            const lines = data.split('\n');
            var randLine = getRandomNumber(1, lines.length);
            while (randLine - numLines < 1) {
                randLine = getRandomNumber(1, lines.length);
            }
            setLineNumber(randLine);
            const lineIndex = randLine - 1;
            const line = lines.slice(lineIndex - numLines, lineIndex);
            setLatinLine(line);

            const responseEnglish = await fetch('Aeneid_English/Aeneid_English_' + newBook + '.txt');
            const dataEnglish = await responseEnglish.text();
            const linesEnglish = dataEnglish.split('\n');
            const lineEnglish = linesEnglish.slice(lineIndex - numLines, lineIndex);
            setEnglishLine(lineEnglish);
            setLoading(false);
        }

        fetchLines();
    }, []);

    if (loading) {
        return <p className='mx-16 text-4xl font-bold italic'>Loading...</p>;
    }

    return (
        <div className='flex-col justify-center text-2xl mx-16 h-auto w-auto'>
            <p className='italic text-xl'>book: {book}, lineNumber: {lineNumber}, numLines: {numLines}</p>
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