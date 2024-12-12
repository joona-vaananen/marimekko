import * as migration_20241212_164625 from './20241212_164625';
import * as migration_20241212_170731 from './20241212_170731';

export const migrations = [
  {
    up: migration_20241212_164625.up,
    down: migration_20241212_164625.down,
    name: '20241212_164625',
  },
  {
    up: migration_20241212_170731.up,
    down: migration_20241212_170731.down,
    name: '20241212_170731'
  },
];
