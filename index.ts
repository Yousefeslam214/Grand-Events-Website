function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  const arr: string[] = s.split('');
  for (let i = 0; i < arr.length; i++) {
    const current = romanMap[arr[i]];
    res += current;
  }
  return res;
}

// romanToInt("III"); // 3
