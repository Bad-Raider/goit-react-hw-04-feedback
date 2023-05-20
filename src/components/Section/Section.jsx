import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={css.sections}>
        <h2>{title}</h2>
        {children}
      </section>
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}