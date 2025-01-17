const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
 
 it('should be a function', () => {
     const turn = new Turn();
     expect(Turn).to.be.a('function')
 });

 it('should be an instance of Turn', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceof(Turn)
 });

 it('should instanciate a guess to the question', () => {
     const turn = new Turn('pug')
     expect(turn.guess).to.equal('pug')
 });

 let card;
 beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
 });

 it('should also instanciate an object or the current card' , () => {
    const turn = new Turn('sea otter', card)
    expect(turn.cardInPlay).to.equal(card)
 });

 it('should have a method to return the guess', () => {
    const turn = new Turn('pug')
    expect(turn.returnGuess()).to.equal('pug')
 });

 it.skip('should have method to return the card', () => {
    const turn = new Turn('pug', card)
    expect(turn.returnCard()).to.equal(card)
    // expect(turn.returnCard()).to.equal(cardInPlay)
 });

 it.skip('should have method that returns a boolean for the correct card answer', () => {
    const turn = new Turn('pug', card)
    const turn1 = new Turn('sea otter', card)
    expect(turn.evaluateGuess()).to.equal(false)
    expect(turn1.evaluateGuess()).to.equal(true)
 });

 it.skip('should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', () => {
     const turn = new Turn('pug', card);
     const turn2 = new Turn('sea otter', card);
     expect(turn.giveFeedback()).to.equal('incorrect!');
     expect(turn2.giveFeedback()).to.equal('correct!');
  });
});