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
    roll(3);
    roll(4);
    for (let i = 0; i < 16; i++) {
        roll(0);
    }

    let actual = score();

    expect(actual).toBe(10);
});

test("spare returns 10 plus the next roll", () => {
    roll(6);
    roll(4);
    roll(5);
    for (let i = 0; i < 17; i++) {
        roll(0);

    }
    let actual = score();

    expect(actual).toBe(20);
});