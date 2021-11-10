import React from 'react';
import Value from '../Value';
import styles from './Statistics.module.css';

const Statistics = ({ options, onCountFeedback }) => {
  return (
    <div className={styles.statistic}>
      <h2 className={styles.statistic_title}>Statistics</h2>
      <ul className={styles.statistic_list}>
        {options.map((elem, index) => {
          return (
            <li key={index} className={styles.statistic_item}>
              {elem}: <Value value={onCountFeedback[elem]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
