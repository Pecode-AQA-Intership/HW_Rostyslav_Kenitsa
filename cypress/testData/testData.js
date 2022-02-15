const faker = require('faker');
export const LOGIN_PAGE_ENDPOINT = 'text-box';
export const ADD_USER_PAGE_ENDPOINT = 'webtables';
export const EDIT_TEST = 'editTest';
export const EDIT_TEST_NUMBERS = 1;
export const FAKE_DATA = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    image: faker.image.avatar(),
    lastName: faker.name.lastName(),
    age: faker.random.number(99),
    salary: faker.random.number(9999),
    department: faker.commerce.department()
};

export const USERS_DATA = [
    FAKE_DATA.lastName,
    FAKE_DATA.email,
    FAKE_DATA.age,
    FAKE_DATA.salary,
    FAKE_DATA.department
];