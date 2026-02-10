const { toCelsius, toFahrenheit, movingAverage } = require('../src/utils/conversions');

describe('Pruebas de Clima y Conversión', () => {
    
    // para grados celsius
    test('32F debe ser 0.0C', () => {
        expect(toCelsius(32)).toBe(0.0);
    });
    test('-40F debe ser -40.0C', () => {
        expect(toCelsius(-40)).toBe(-40.0);
    });
    test('Debe lanzar TypeError si no es número', () => {
        expect(() => toCelsius('hola')).toThrow(TypeError);
    });

    // para farengeit
    test('0C debe ser 32.000F', () => {
        expect(toFahrenheit(0)).toBe(32.0);
    });
    test('100C debe ser 212.0F', () => {
        expect(toFahrenheit(100)).toBe(212.0);
    });
    test('Debe lanzar TypeError si entrada invalida', () => {
        expect(() => toFahrenheit(null)).toThrow(TypeError);
    });

    // casos para moving average
    test('Caso base 1: [10,20,30,40], w=2', () => {
        expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
    });
    test('Caso base 2: [1,2,3], w=3', () => {
        expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
    });
    test('Error: Array con strings lanza TypeError', () => {
        expect(() => movingAverage([1, 'a'], 2)).toThrow(TypeError);
    });
    test('Error: Ventana fuera de rango lanza RangeError', () => {
        expect(() => movingAverage([1, 2, 3], 5)).toThrow(RangeError); // w > length
        expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError); // w < 2
    });
});
