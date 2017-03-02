import deepFreeze from '../index';
import { expect } from 'chai';

describe('Deep Freeze', () => {
    it('should change the person', () => {
        let personBefore = {
          firstName: 'Joe',
          lastName: 'Due'
        };

        let personAfter = {
          firstName: 'Joe',
          lastName: 'Due'
        };

        try {
          personBefore.firstName = 'firstName';
        } catch(e){
        };

        expect(personBefore).to.not.deep.equal(personAfter);
    });

    it('should not change the person', () => {
        let personBefore = {
          firstName: 'Joe',
          lastName: 'Due'
        };

        let personAfter = {
          firstName: 'Joe',
          lastName: 'Due'
        };

        try {
          deepFreeze(personBefore);

          personBefore.firstName = 'firstName';
        } catch(e){
        };

        expect(personBefore).to.deep.equal(personAfter);
    });
})