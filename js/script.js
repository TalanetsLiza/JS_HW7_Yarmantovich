"use strict";

{
    // Контакты

    const isValidAge = (age) => /^\d{1,3}$/.test(age);
    const isValidTel = (tel) => /^\+\d{1,3}\(\d{2,3}\)\d{7}$/.test(tel);
    const isValidEmail = (email) => /^[a-zA-Z]{1}[a-zA-Z0-9]+@[\w\.\-]+\.[a-z]{2,11}$/.test(email);
    const isValidName = (name) => /^[А-ЯA-Z]{1}[а-яa-z]+ [А-ЯA-Z]{1}[а-яa-z]+ [А-ЯA-Z]{1}[а-яa-z]+$/.test(name);

    const ContactBook = function() {
        const contacts = [];

        this.addContact = (name, age, tel, email) => {
            const contact = {
                name,
                age,
                tel,
                email,
            };

            if (!isValidName(name)) {
                console.log("Невозможно создать контакт. Некорректно указанно ФИО", contact);
                return;
            }

            if (!isValidAge(age) || age < 18) {
                console.log("Невозможно создать контакт. Некорректный возраст", contact);
                return;
            }

            if (!isValidTel(tel)) {
                console.log("Невозможно создать контакт. Некорректно указан номер телефонфа", contact);
                return;
            }

            if (!isValidEmail(email)) {
                console.log("Невозможно создать контакт. Некорректно указана электронная почта", contact);
                return;
            }

            contacts.push(contact);
        };

        this.searchContacts = (search) => {
            const result = [];
            for (let i = 0; i < contacts.length; i++) {
                const item = contacts[i];

                const isNameInclude = item.name.toLowerCase().includes(search.toLowerCase());
                const isTelInclude = item.tel.toLowerCase().includes(search.toLowerCase());
                const isEmailInclude = item.email.toLowerCase().includes(search.toLowerCase());
                const isAgeInclude = item.age.toString().toLowerCase().includes(search.toLowerCase());

                if (isNameInclude || isTelInclude || isEmailInclude || isAgeInclude) {
                    result.push(item);
                }
            }
            return result;
        }
        this.getContacts = () => contacts;
    }

    const book = new ContactBook();
    
    console.log(book.getContacts());

    book.addContact("Иванов Иван Иванович", 14, "+375(29)3333332", "namrfve@gmail.com");
    book.addContact("Иванов Иван Иванович", 18, "+375(33)7474749", "name@gmail.com");
    book.addContact("Иванов Иван Иванович", 35, "+375(29)3458652", "name@gmail.com");
    book.addContact("Иванов Иван Иванович", 23, "+375(29)4356457", "name@gmail.com");
    book.addContact("Иванов Иван Иванович", 44, "+375(29)8646805", "namvdece/gmail.com");
    book.addContact("Иванов Иван Иванович", 21, "+375(29)2368064", "name@gmail.com");

    console.log("contacts", book.getContacts());
    console.log("search", book.searchContacts("49"));

    console.log(book.contacts);

}