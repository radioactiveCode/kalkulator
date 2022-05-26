const path = require('path');

module.exports =
{
    mode : 'production',
    entry:
    {
        main: path.resolve(__dirname, 'src/scripts/kalkulatorWidok.js'),
    },
    output:
    {
        path : path.resolve(__dirname, 'dst'),
        filename : 'kalkulator.js',
        clean: true,
    },
    module:
    {
        rules: 
        [
            {
                test: /\.css$/,
                use:
                [
                    'style-loader',
                    'css-loader'   
                ]
            }
        ]
    }
}