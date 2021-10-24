const sulis = { x: 2, y: 3, z: 1 };

// Traditional way
const x = sulis.x;
const y = sulis.y;

// Modern way
const { z: q } = sulis;

// Latihan Destructuring.js

const sulistia = { a: 25, b: 36, c: 52 };

const sulistiaFirza = {
  r: { ra: 100, ri: 21, rr: 14 },
  s: { sa: 3123, si: 2, sr: 139 },
  t: { tz: 3, tz: 23, tzx: 2138 },
};

const {
  r: { ra: sulistiara, ri: sulistiari },
} = sulistiaFirza;
const {
  t: { tz: sulistz, tzx: sulistzx },
} = sulistiaFirza;

console.log(sulistiara, sulistz, sulistzx);
