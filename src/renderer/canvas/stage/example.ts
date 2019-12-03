import { OBJECT } from '../context';

const generator = () => {
  let table: OBJECT[][] = [];

  const iOffst = 10;
  const jOffst = 10;

  for (let i = 0; i <= iOffst; i ++) {
    let record: OBJECT[] = [];
    for (let j = 0; j <= jOffst; j ++) {
      if (i === 0 || j === jOffst || i === iOffst || j === 0 ) {
        record.push(OBJECT.Outline);
      } else {
        record.push(OBJECT.Load);
      }
    }
    table.push(record);
  }
  return table;
};

export const stage1 = generator();
