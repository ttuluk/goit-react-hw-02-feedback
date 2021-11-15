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
    const { good, total } = this.state;

    this.setState({
      [option]: this.state[option] + 1,
      total: this.countTotalFeedback(total),
      persantage: this.countPositiveFeedbackPercentage(good, total),
    });
  };

  countTotalFeedback = value => {
    return value + 1;
  };

  countPositiveFeedbackPercentage = (value, total) => {
    if (total > 0) {
      return Math.round((value / total) * 100);
    }
    return 0;
  };

  render() {
    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleClick}
        />
        {this.state.total > 0 ? (
          <Statistics
            options={Object.keys(this.state)}
            onCountFeedback={this.state}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </>
    );
  }
}

export { Feedback };
