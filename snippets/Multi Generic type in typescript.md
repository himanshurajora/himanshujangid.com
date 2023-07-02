I don't completely know if it is called multi generic type but it' seems to be, A simple example of how I implement this type of generic type in typescript for type safety being a type liking person and one of a type.

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

// more flavour to it
type TypeFactory<T extends A, K extends TYPES> = T[K];
let b: TypeFactory<A, TYPES.STRING> = "hello"; // ✅ GOOD, type: string

```

#typescript