import React, { Component } from 'react';
import Section from './Section/Section';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,  
  };

  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  }


  countTotalFeedback  () {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const goodFeedBack = this.state.good;
    const result = goodFeedBack * 100 / total;
        
    return parseInt(result, 10);    
  };

  render() {
    return <>
      <Section title="Please leave feedback">
        <FeedBackOptions 
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {  this.countTotalFeedback() > 0 ? (
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          state={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />)
        : (<Notification/>)
        }
      </Section>
    </>
  }
}

export default App;
