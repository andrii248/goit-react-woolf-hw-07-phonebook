import { deleteContact } from '../../redux/contacts/operations';
import css from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  function dltBtn(id) {
    dispatch(deleteContact(id));
  }

  return (
    <li className={css.item} id={id}>
      {name}: {number}
      <button
        className={css.btn}
        type="button"
        disabled={isLoading}
        onClick={() => dltBtn(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
