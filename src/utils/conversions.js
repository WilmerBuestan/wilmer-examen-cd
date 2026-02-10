function toCelsius(f) {
    if (typeof f !== 'number' || !isFinite(f)) {
        throw new TypeError('ingrese su debe ser un numero finito pero para los grados celsius');
    }
    const result = (f - 32) * 5 / 9;
    return Number(result.toFixed(1));
}

function toFahrenheit(c) {
    if (typeof c !== 'number' || !isFinite(c)) {
        throw new TypeError('Ingrese si debe ser un numero finito para los grados farengeit');
    }
    const result = (c * 9 / 5) + 32;
    return Number(result.toFixed(1));
}

function movingAverage(series, window) {
    if (!Array.isArray(series) || series.some((n) => typeof n !== 'number' || !isFinite(n))) {
        throw new TypeError('la serie debe ser una continuacion de los numeros debe ser un array');
    }
    if (typeof window !== 'number' || !Number.isInteger(window)) {
        throw new TypeError('la ventana debe tner un integer');
    }
    if (window < 2 || window > series.length) {
        throw new RangeError('fuera de rango de la ventana');
    }

    const result = [];
    for (let i = 0; i <= series.length - window; i++) {
        const chunk = series.slice(i, i + window);
        const sum = chunk.reduce((acc, val) => acc + val, 0);
        const avg = sum / window;
        result.push(Number(avg.toFixed(2)));
    }
    return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };