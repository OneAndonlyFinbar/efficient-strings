export class EfficientString {
  string: string;
  efficiency: number;
  buildTime: number;
  constructor(string: string, efficiency: number) {
    this.string = string;
    this.efficiency = efficiency;
    this.buildTime = -1;
    return this;
  }
  build(): string {
    const start = Date.now();
    const res = functions[this.efficiency.toString()](this.string);
    const end = Date.now();
    this.buildTime = end - start;
    return res;
  }
}

const functions = {
  '1': (string: string): string => {
    return string;
  },
  '2': (string: string): string => {
    let str = '';
    const chars = string.split('');
    for(let char of chars)
      str += char;
    return str;
  },
  '3': (string: string): string => {
    let str = '';
    const chars = string.split('');
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
    for(let char of chars)
      for (let char2 of allChars)
        if(char === char2)
          str += char;
    return str;
  },
  '4': (string: string): string => {
    let str = '';
    const chars = string.split('');
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
    for(let char of chars){
      let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      while(char !== randomChar)
        randomChar = allChars[Math.floor(Math.random() * allChars.length)];
      str += char;
    }
    return str;
  },
  '5': (string: string): string => {
    let str = '';
    const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:,./<>?`~';
    str = Array(string.length).fill(0).map(() => allChars[Math.floor(Math.random() * allChars.length)]).join('');
    while(str !== string)
      str = Array(string.length).fill(0).map(() => allChars[Math.floor(Math.random() * allChars.length)]).join('');
    return str;
  }
}