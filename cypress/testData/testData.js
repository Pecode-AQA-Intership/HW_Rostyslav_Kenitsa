const faker = require('faker');
export const BASE_URL = 'https://demoqa.com/';
export const LOGIN_PAGE_ENDPOINT = 'text-box';
export const ADD_USER_PAGE_ENDPOINT = 'webtables';
export const EDIT_TEST = 'editTest';
export const EDIT_TEST_NUMBERS = 1;
export const SUBJECT = 'Finance and Credit';
export const FAKE_DATA = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    image: faker.image.avatar(),
    lastName: faker.name.lastName(),
    age: faker.random.number(99),
    salary: faker.random.number(9999),
    department: faker.commerce.department(),
    phoneNumber: faker.phone.phoneNumber(),
    avatar: faker.internet.avatar(),
    day: faker.random.number({ min: 1, max: 28 }),
    month: faker.date.month(),
    year: faker.random.number({ min: 1960, max: 2005 })
};
export const USERS_DATA = [
    FAKE_DATA.lastName,
    FAKE_DATA.email,
    FAKE_DATA.age,
    FAKE_DATA.salary,
    FAKE_DATA.department
];