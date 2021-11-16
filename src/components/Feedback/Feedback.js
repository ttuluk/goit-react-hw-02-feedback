import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    persantage: 0,
  };

  handleClick = e => {
    const option = e.target.textContent;
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalSum = good + neutral + bad;
    return totalSum;
  };

  countPositiveFeedbackPercentage = total => {
    const value = this.state.good;
    if (total > 0) {
      return Math.round((value / total) * 100);
    }
    return 0;
  };

  render() {
    const totalEl = this.countTotalFeedback();
    const persantageEl = this.countPositiveFeedbackPercentage(totalEl);
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleClick}
        />
        {totalEl > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalEl}
            persantage={persantageEl}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </>
    );
  }
}

export { Feedback };
