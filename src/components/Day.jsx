import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

const Day = () => {
  const { day } = useParams();
  const wordList = dummy.words.filter(
    (word) => Number(word.day) === Number(day)
  );

  return (
    <div>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Day;
