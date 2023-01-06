const mix  = require('laravel-mix');
const rcon = require('rcon');

require('dotenv').config();
require('mix-tailwindcss');

let rconConnected = false;
let conn          = undefined;

if (!mix.inProduction()) {
    conn = new rcon(
        process.env.RCON_HOST,
        process.env.RCON_PORT,
        process.env.RCON_PASS,
        { tcp: false, challenge: false }
    );
 
    conn.on('auth', () => {
        console.log('RCON Connected');

        rconConnected = true;
    });

    conn.on('end', () => {
        console.log('RCON Connection Died');
        process.exit();
    });

    conn.on('error', (err) => {
        console.error('RCON Error', err);
    });

    conn.on('response', (msg) => {
        console.log('RCON Response', msg);
    });

    conn.connect();   
}

mix.js('src/app.js', 'dist')
    .vue({ extractStyles: true })
    .sass('src/app.scss', 'dist')
    .copy('src/nui.html', 'dist')
    .tailwind()
    .disableSuccessNotifications()
    .after(() => {
        if (!rconConnected || typeof conn === 'undefined') {
            return;
        }

        conn.send(`ensure ${process.env.RESOURCE_NAME}`);
    });
