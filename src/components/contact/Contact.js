import PropTypes from 'prop-types';
import { ContactWrap, ContactTitle, DeleteButton } from './Contact.styled';

const Contact = ({ name, number, onDeleteContact, contactId }) => {
  return (
    <ContactWrap>
      <ContactTitle>{name}:</ContactTitle>
      <ContactTitle>{number}</ContactTitle>
      <DeleteButton type="button" onClick={() => onDeleteContact(contactId)}>
        Delete contact
      </DeleteButton>
    </ContactWrap>
  );
};

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
