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

 


}



);
