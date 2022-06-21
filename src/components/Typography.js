import PropTypes from 'prop-types';

const MyText = ({ text, type }) => {
  switch (type) {
    case 'h1':
      return <h1 className="text-6xl font-bold text-primaryD ">{text}</h1>;
    case 'h3':
      return <h3 className="text-2xl font-bold text-textDark">{text}</h3>;
    default:
      return <h3 className="text-2xl font-bold text-textDark">{text}</h3>;
  }
};

MyText.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MyText;
