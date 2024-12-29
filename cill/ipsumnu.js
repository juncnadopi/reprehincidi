const vega = {
    isObject: function(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }
};
