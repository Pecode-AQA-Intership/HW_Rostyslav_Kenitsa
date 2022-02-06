const faker = require('faker');
export const BASE_URL = 'https://demoqa.com/text-box';
export const FAKE_DATA = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    currentAddress: faker.address.streetAddress(),
    permanentAddress: faker.address.secondaryAddress(),
    image: faker.image.avatar()
};