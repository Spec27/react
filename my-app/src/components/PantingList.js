import Panting from "./panting";
import PropTypes, { array } from "prop-types";
function PantingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Panting
            key={item.id}
            imgUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            profiledUrl={item.author.url}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}
PantingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default PantingList;
