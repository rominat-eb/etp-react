import 'jest-enzyme/lib';
import 'babel-polyfill';

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

configure({adapter: new Adapter()});

const CONSOLE_FAIL_TYPES = ['error', 'warn'];

const failOnConsole = (type, message) => {
    throw new Error(`Failing due to console.${type} while running test!\n\n${message}`);
};

CONSOLE_FAIL_TYPES.forEach((type) => {
    // eslint-disable-next-line no-console
    console[type] = failOnConsole.bind(null, type);
});

class LocalStorageMock {
    constructor() {
        this.store = {}
    }

    clear() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key] || null
    }

    key(index) {
        return Object.keys(this.store)[index] || null
    }

    removeItem(key) {
        delete this.store[key]
    }

    setItem(key, value) {
        this.store[key] = value + ''
    }

    get length() {
        return Object.keys(this.store).length;
    }
};

global.localStorage = new LocalStorageMock();
