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
  
  let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
      console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
  };
  
  let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
      for (contact of contacts) {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
      }
    }
  };
  
  let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
      contacts.push({
        name: name,
        phone: phone,
        email: email
      });
    }
  };
  
  let sortContacts = function (contacts, attribute) {
    if (contacts instanceof Array) {
      contacts.sort((a, b) => {
        if (a[attribute] > b[attribute]) {
          return 1;
        } else if (a[attribute] < b[attribute]) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  };

  console.log("Before sorting:");
  showAllContacts(contacts);

  sortContacts(contacts, 'name');
  console.log("\nAfter sorting by name:");
  showAllContacts(contacts);
  
  sortContacts(contacts, 'phone');
  console.log("\nAfter sorting by phone:");
  showAllContacts(contacts);

  sortContacts(contacts, 'email');
  console.log("\nAfter sorting by email:");
  showAllContacts(contacts);
  