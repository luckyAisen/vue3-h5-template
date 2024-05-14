import path from 'path';
import { spawn } from 'child_process';
import fs from 'fs-extra';

const SVG_OUTPUT = 'src/icons/svg';

const SINGLE_DIR = 'src/icons/draft/single';

const SINGLE_CONFIG = 'src/icons/build/single-config.cjs';

const MULTIPLE_DIR = 'src/icons/draft/multiple';

const MULTIPLE_CONFIG = 'src/icons/build/multiple-config.cjs';

const clear = (dir) => {
  fs.readdir(dir)
    .then((files) => {
      const deletePromises = files.map((file) => {
        if (file === '.gitkeep') return;
        return fs.unlink(path.join(dir, file));
      });
      return Promise.all(deletePromises);
    })
    .catch((err) => console.error(err));
};

export const runSingle = () => {
  const cmd = spawn('npx', [`svgo -f ${SINGLE_DIR} -o ${SVG_OUTPUT} --config=${SINGLE_CONFIG}`], {
    stdio: 'inherit',
    shell: true
  });

  cmd.on('close', () => {
    clear(SINGLE_DIR);
  });
};

export const runMultiple = () => {
  const cmd = spawn(
    'npx',
    [`svgo -f ${MULTIPLE_DIR} -o ${SVG_OUTPUT} --config=${MULTIPLE_CONFIG}`],
    {
      stdio: 'inherit',
      shell: true
    }
  );

  cmd.on('close', () => {
    clear(MULTIPLE_DIR);
  });
};
