let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com"
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu"
    }
  ];
  
  function showContact(contactList, index) {
    if (contactList instanceof Array && index >= 0 && index < contactList.length) {
      console.log(contactList[index]);
    } else {
      console.log("Invalid arguments for showContact function.");
    }
  }
  
  function showAllContacts(contactList) {
    if (contactList instanceof Array) {
      contactList.forEach(contact => console.log(contact));
    } else {
      console.log("Invalid argument for showAllContacts function.");
    }
  }
  
  function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
      const newContact = { name, phone, email };
      contactList.push(newContact);
      console.log("New contact added:", newContact);
    } else {
      console.log("Invalid arguments for addNewContact function.");
    }
  }
  
  showContact(contacts, 1);
  showAllContacts(contacts);
  addNewContact(contacts, "John Doe", "123-456-7890", "john.doe@example.com");
  