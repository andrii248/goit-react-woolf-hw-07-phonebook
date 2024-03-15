export const filterContactList = (key, contacts, filteredValue) => {
  contacts.filter(contact =>
    contact[key].toLowerCase().includes(filteredValue.toLowerCase())
  );
};
