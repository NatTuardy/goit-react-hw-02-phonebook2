import PropTypes from 'prop-types'

const ContactItem = ({ data, onDelete }) => {
  const contactsList = data.map(({ name, id, number }) => (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <li
          key={id}
          className="list-group-item d-flex justify-content-between align-items-start col-md-6"
        >
          {name}: {number}
          <button
            onClick={() => onDelete(id)}
            type="submit"
            className="btn btn-primary align-items-end btn-sm"
          >
            Delete
          </button>
        </li>
      </div>
    </>
  ));
  return <>{contactsList}</>;
};

export default ContactItem;

ContactItem.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
}
