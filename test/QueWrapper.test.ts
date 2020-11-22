import { QueWrapper } from '../src/Que/QueWrapper';
import { QueItem } from '../src/QueItem';
import { Que } from '../src/Que/Que';

jest.mock('../src/Que/Que', () => {
  const extractMinimum = jest.fn().mockReturnValue({});
  const extractMaximum = jest.fn().mockReturnValue({});

  const getMinimum = jest.fn().mockReturnValue({});
  const getMaximum = jest.fn().mockReturnValue({});

  const getItemById = jest.fn().mockReturnValue({});
  const getItemByPriority = jest.fn().mockReturnValue({});

  const removeById = jest.fn().mockReturnValue({});
  const removeByPriority = jest.fn().mockReturnValue({});

  const insert = jest.fn().mockReturnValue({});

  return {
    Que: jest.fn().mockReturnValue({
      extractMinimum,
      extractMaximum,
      getMinimum,
      getMaximum,
      getItemById,
      getItemByPriority,
      removeById,
      removeByPriority,
      insert,
      list: [],
    })
  }
});

const que = new Que([]);

jest.mock('nanoid', () => ({
  nanoid: () => 'test'
}));

describe('QueWrapper', () => {
  beforeEach(() => {
    (Que as jest.Mock).mockClear();
  });

  describe('initialize', () => {
    it('should init with empty array when no args provided', () => {
      new QueWrapper();

      expect(Que).toBeCalledWith([]);
    });

    it('should init with empty array when it provided', () => {
      new QueWrapper([]);

      expect(Que).toBeCalledWith([]);
    });

    it('should init with array of que items when it provided', () => {
      const items = [new QueItem('test', 0)];

      new QueWrapper(items);

      expect(Que).toBeCalledWith(items);
    });

    it('should init with array of que items when raw array provided', () => {
      const items = ['test'];

      new QueWrapper(items);

      expect(Que).toBeCalledWith([
        new QueItem('test', 0)
      ]);
    });
  });

  describe('insert', () => {
    let wrapper: QueWrapper<string>;

    beforeEach(() => {
      wrapper = new QueWrapper<string>();
    });

    it('should insert passed que item', () => {
      const item = new QueItem('test', 0);

      wrapper.insert(item);

      expect(que.insert).toBeCalledWith(item);
    });

    it('should insert generated que item', () => {
      wrapper.insert('test', 1);

      expect(que.insert).toBeCalledWith(new QueItem('test', 1));
    });
  });

  describe('removeBy', () => {
    let wrapper: QueWrapper<string>;

    beforeEach(() => {
      wrapper = new QueWrapper<string>();
    });

    it('should remove item by id', () => {
      wrapper.removeBy({ id: 'test' });

      expect(que.removeById).toBeCalledWith('test');
    });

    it('should remove item by priority', () => {
      wrapper.removeBy({ priority: 1 });

      expect(que.removeByPriority).toBeCalledWith(1);
    });

    it('should remove item by id prior on priority', () => {
      wrapper.removeBy({ id: 'test2', priority: 1 });

      expect(que.removeById).toBeCalledWith('test2');
    });
  });

  describe('getItemBy', () => {
    let wrapper: QueWrapper<string>;

    beforeEach(() => {
      wrapper = new QueWrapper<string>();
    });

    it('should get item by id', () => {
      wrapper.getItemBy({ id: 'test' });

      expect(que.getItemById).toBeCalledWith('test');
    });

    it('should get item by priority', () => {
      wrapper.getItemBy({ priority: 1 });

      expect(que.getItemByPriority).toBeCalledWith(1);
    });

    it('should get item by id prior on priority', () => {
      wrapper.getItemBy({ id: 'test2', priority: 1 });

      expect(que.getItemById).toBeCalledWith('test2');
    });
  });

  describe('getBorders', () => {
    let wrapper: QueWrapper<string>;

    beforeEach(() => {
      wrapper = new QueWrapper<string>();
    });

    it('should get item with min priority', () => {
      wrapper.getBorders({ min: true });

      expect(que.getMinimum).toBeCalledWith();
    });

    it('should get item with max priority', () => {
      wrapper.getBorders({ max: true });

      expect(que.getMaximum).toBeCalledWith();
    });
  });

  describe('extractBorders', () => {
    let wrapper: QueWrapper<string>;

    beforeEach(() => {
      wrapper = new QueWrapper<string>();
    });

    it('should extract item with min priority', () => {
      wrapper.extractBorders({ min: true });

      expect(que.extractMinimum).toBeCalledWith();
    });

    it('should extract item with max priority', () => {
      wrapper.extractBorders({ max: true });

      expect(que.extractMaximum).toBeCalledWith();
    });
  });
});
