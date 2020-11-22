import { Que } from '../src/Que/Que';
import { QueItem } from '../src/QueItem';

const set = [
  new QueItem<string>('test', 2),
  new QueItem<string>('test', 1),
  new QueItem<string>('test', 4),
];

const sortedSet = [
  set[1],
  set[0],
  set[2],
];

describe('Que', () => {
  let que: Que<string>;

  beforeEach(() => {
    que = new Que(set);
  });

  it('should initialize and sort items', () => {
    expect(que.list).toStrictEqual(sortedSet);
  });

  it('should get element with min priority', () => {
    expect(que.getMinimum()).toStrictEqual(sortedSet[0]);
  });

  it('should get element with max priority', () => {
    expect(que.getMaximum()).toStrictEqual(sortedSet[2]);
  });

  it('should get element by priority', () => {
    expect(que.getItemByPriority(1)).toStrictEqual(sortedSet[0]);
  });

  it('should get element by id', () => {
    expect(que.getItemById(sortedSet[0].id)).toStrictEqual(sortedSet[0]);
  });

  it('should change item in the list', () => {
    que.getItemByPriority(1)!.value = 'changed';

    expect(que.list[0].value).toBe('changed');
  });

  it('should get and remove element with min priority', () => {
    expect(que.extractMinimum()).toStrictEqual(sortedSet[0]);

    expect(que.list).toStrictEqual([
      sortedSet[1],
      sortedSet[2]
    ]);
  });

  it('should get and remove element with max priority', () => {
    expect(que.extractMaximum()).toStrictEqual(sortedSet[2]);

    expect(que.list).toStrictEqual([
      sortedSet[0],
      sortedSet[1]
    ]);
  });

  it('should remove item by priority', () => {
    que.removeByPriority(4);

    expect(que.list).toStrictEqual([
      sortedSet[0],
      sortedSet[1]
    ]);
  });

  it('should remove item by id', () => {
    que.removeById(que.getMaximum().id);

    expect(que.list).toStrictEqual([
      sortedSet[0],
      sortedSet[1]
    ]);
  });

  describe('insert item according to its priority', () => {
    it('should insert at the beginning', () => {
      const minItem = new QueItem('test', 0);

      que.insert(minItem);

      expect(que.list).toStrictEqual([
        minItem,
        ...sortedSet
      ]);
    });

    it('should insert at the end', () => {
      const minItem = new QueItem('test', 10);

      que.insert(minItem);

      expect(que.list).toStrictEqual([
        ...sortedSet,
        minItem,
      ]);
    });

    it('should insert at the middle', () => {
      const minItem = new QueItem('test', 3);

      que.insert(minItem);

      expect(que.list).toStrictEqual([
        sortedSet[0],
        sortedSet[1],
        minItem,
        sortedSet[2],
      ]);
    });
  });
});
