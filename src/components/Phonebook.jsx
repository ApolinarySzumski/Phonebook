import PropTypes from "prop-types";
import { Button, Form, Input, Label } from "../StyledComponents/Phonebook";
import { useDispatch } from "react-redux";

export const Phonebook = ({ contacts, data, setContacts, handleChange }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.find((contact) => contact.name === data.name) === undefined) {
      setContacts([...contacts, data]);
    } else {
      alert(`${e.target[0].value} is already in contact list`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={data.name}
        // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        value={data.number}
        // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  data: PropTypes.objectOf(PropTypes.string),
  setContacts: PropTypes.func,
  handleChange: PropTypes.func,
};
