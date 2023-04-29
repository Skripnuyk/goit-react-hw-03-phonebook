import Contact from '../contact';
import PropTypes from 'prop-types';
import { List, ListItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Contact
              name={name}
              number={number}
              contactId={id}
              onDeleteContact={onDeleteContact}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.prototype = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
