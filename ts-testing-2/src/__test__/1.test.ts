import { sum, calculateSquareSurfaceArea } from "../1";

//test suite
describe("sum function", () => {
    //test case
    test("should return 5 when given inputs is 2 and 3", () => {
        //Given
        const num1 = 2;
        const num2 = 3;

        //When
        const result = sum(num1, num2)

        //Then
        expect(result).toBe(5)
    });

    test("should return 0 when given inputs is -2 and 2", () => {
        //Given
        const num1 = -2;
        const num2 = 2;

        //When
        const result = sum(num1, num2)

        //Then
        expect(result).toBe(0)
    });
})


describe("calculate square surface area function", () => {
    //test case
    test("should return 9 when given inputs 3", () => {
        //Given
        const side = 3;

        //When
        const result = calculateSquareSurfaceArea(3)

        //Then
        expect(result).toBe(9)
    });
})
