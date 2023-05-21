import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css';

const FeedBackOptions = ({ options, onLeaveFeedback }) => {

    return options.map(option => (
        (
            <button  
                className={css.feedBackOptions}
                type="button"
                name={option}
                key={option}
                onClick={() => onLeaveFeedback(option)}>{option}
            </button>)
    ))
};

export default FeedBackOptions;
   
FeedBackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}