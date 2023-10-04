import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./SectionTitle/Section";
import { AppWraper } from "./AppStyle";
import { SiBuymeacoffee } from 'react-icons/si';
import { useState } from "react";

export default function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });



  const handlAddOption = (optionName) => {
    setOptions((prevState) => ({
      ...prevState,
      [optionName]: prevState[optionName] + 1,
    }))
  };


  const countTotalFeedback = () => {
    return options.good + options.neutral + options.bad;
  };



  const countPositiveFeedbackPercentage = () => {
    return Math.round((options.good * 100) / countTotalFeedback()) ?? 0;
  };


  return (
    <AppWraper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handlAddOption()}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) :
          <Notification message="There is no feedback" />}
      </Section>
      <SiBuymeacoffee style={{
        fontSize: "180px",
        position: "absolute",
        top: "43%",
        left: "-3%",
        rotate: "30deg"
      }} />
    </AppWraper>
  );
};
