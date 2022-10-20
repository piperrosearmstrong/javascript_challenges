const searchCandies = require('./searchCandies');

describe ('searchCandies', () => {
  it('returns Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toStrictEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Mars', () => {
    expect(searchCandies('Ma', 2)).toStrictEqual([ 'Mars' ]);
  });

  it('returns Mars and Maltesers', () => {
    expect(searchCandies('ma', 10)).toStrictEqual([ 'Mars', 'Maltesers' ]);
  });

  it('returns Skitties, Skittles and Starburst', () => {
    expect(searchCandies('S', 10)).toStrictEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns Skitties and Skittles', () => {
    expect(searchCandies('S', 4)).toStrictEqual([ 'Skitties', 'Skittles' ]);
  });
});