import { roll, score } from './index.js';
test("gutter game returns zero", () => {
    for (let i = 0; i < 20; i++) {
        roll(0);
    }

    let actual = score();

    expect(actual).toBe(0);
});

test("one open frame and all rest gutters returns sum of its pins knocked down", () => {
    roll(2);
    roll(1);
    for (let i = 0; i < 18; i++) {
        roll(0);
    }

});