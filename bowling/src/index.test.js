import { Bowling } from './index.js';

test("gutter game returns zero", () => {
    //arrange
    let game = new Bowling();
    for (let i = 0; i < 20; i++) {
        game.roll(0);
    }
    //act
    let actual = game.score();
    //assert
    expect(actual).toBe(0);
});

test("one open frame and all rest gutters returns sum of its pins knocked down", () => {
    //arrange
    let game = new Bowling();
    game.roll(2);
    game.roll(1);
    game.roll(3);
    game.roll(4);
    for (let i = 0; i < 16; i++) {
        game.roll(0);
    }
    //act
    let actual = game.score();
    //assert
    expect(actual).toBe(10);
});

test("spare returns 10 plus the next roll", () => {
    //arrange
    let game = new Bowling();
    game.roll(6);
    game.roll(4);
    game.roll(5);
    for (let i = 0; i < 17; i++) {
        game.roll(0);
    }
    //act
    let actual = game.score();
    //assert
    expect(actual).toBe(20);
});