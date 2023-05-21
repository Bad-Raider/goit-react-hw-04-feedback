import React, { useState } from 'react';
import Section from './Section/Section';
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
   
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (value) => {
    switch (value) {
      case "good":
        setGoog(good + 1);
        break
      case "neutral":
        setNeutral(neutral + 1);
        break
      case "bad":
        setBad(bad + 1);
        break
      default:
        return
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage =()=> {
    const total = countTotalFeedback();
    const goodFeedBack = good;
    const result = goodFeedBack * 100 / total;
        
    return parseInt(result, 10);    
  };

  
  return <>
    <Section title="Please leave feedback">
      <FeedBackOptions
        options={["good", "neutral", "bad"]}
        onLeaveFeedback={addFeedback}
      />
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() > 0 ? (
        <Statistics
        neutral={neutral}
        good={good}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />)
        : (<Notification />)
      }
    </Section>
  </>;
};

export default App;
