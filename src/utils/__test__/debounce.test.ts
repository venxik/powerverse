import { debounce } from '@Utils/debounce';

describe('debounce', () => {
  it('should update value after debounce', () => {
    jest.useFakeTimers();
    let item = 'before';
    const debounceFunction = debounce(() => {
      item = 'after';
    }, 1000);
    debounceFunction();
    jest.advanceTimersByTime(1500);
    expect(item).toBe('after');
  });
});
