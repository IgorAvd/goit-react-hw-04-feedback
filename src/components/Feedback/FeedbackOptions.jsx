import { BtnWrapper, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => (
        <div key={option}>
          <FeedbackBtn onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackBtn>
        </div>
      ))}
    </BtnWrapper>
  );
};
