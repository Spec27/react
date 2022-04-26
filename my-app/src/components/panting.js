import PropTypes from "prop-types";
import defaultImage from "./15. Облака.jpg";
export default function Panting(props) {
  const { imgUrl = defaultImage, title, authorName = "Невідомо", profiledUrl, price } = props;
  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Avtor: <a href={profiledUrl}>{authorName}</a>
      </p>
      <p>price: {price}many</p>
      <p>Доступність: закінчується або є в наявнсті</p>
      <button type="button">Додати до кошику</button>
    </div>
  );
}

Panting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  profiledUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
