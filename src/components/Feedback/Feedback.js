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
    this.setState(prevState => {
      if (e.target.textContent === 'good') {
        return {
          good: prevState.good + 1,
          total: prevState.total + 1,
          persantage: this.countPositiveFeedbackPercentage(
            this.state.good,
            this.state.total,
          ),
        };
      }
      if (e.target.textContent === 'neutral') {
        return {
          neutral: prevState.neutral + 1,
          total: prevState.total + 1,
          persantage: this.countPositiveFeedbackPercentage(
            this.state.good,
            this.state.total,
          ),
        };
      }
      if (e.target.textContent === 'bad') {
        return {
          bad: prevState.bad + 1,
          total: prevState.total + 1,
          persantage: this.countPositiveFeedbackPercentage(
            this.state.good,
            this.state.total,
          ),
        };
      }
    });
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
