import * as migration_20241212_164625 from './20241212_164625';
import * as migration_20241212_170731 from './20241212_170731';
import * as migration_20241212_171607 from './20241212_171607';
import * as migration_20241214_153129 from './20241214_153129';

export const migrations = [
  {
    up: migration_20241212_164625.up,
    down: migration_20241212_164625.down,
    name: '20241212_164625',
  },
  {
    up: migration_20241212_170731.up,
    down: migration_20241212_170731.down,
    name: '20241212_170731',
  },
  {
    up: migration_20241212_171607.up,
    down: migration_20241212_171607.down,
    name: '20241212_171607',
  },
  {
    up: migration_20241214_153129.up,
    down: migration_20241214_153129.down,
    name: '20241214_153129'
  },
];
