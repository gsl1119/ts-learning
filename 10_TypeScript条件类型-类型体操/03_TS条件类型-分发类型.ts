type toArray<T> = T extends any ? T[] : never

// number[]



type NumAarry = toArray<number>

// number[]|string[]而不是(number|string)[]
type NumAndStringArray = toArray<number | string>


