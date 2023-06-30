```typescript 
enum TYPES  {
    STRING,
    NUMBER
}

type ConditionalGenericType  = {
    [TYPES.STRING]: string;
    [TYPES.NUMBER]: number;
}

let value1: ConditionalGenericType[TYPES.NUMBER] = 14; // GOOD ✅
let value2: ConditionalGenericType[TYPES.NUMBER] = "hello"; // ERROR 🔴
```