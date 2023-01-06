fx_version 'cerulean'
games      { 'gta5' }
lua54      'yes'

author      'CharlesHacks#9999 <charles@charleshacks.com>'
description 'Vue + Tailwind Boilerplate for FiveM'

--
-- Client
--

client_scripts {
    'client/client.lua',
}

--
-- NUI
--

ui_page 'nui/dist/nui.html'

files {
    'nui/dist/nui.html',
    'nui/dist/app.js',
    'nui/dist/app.css',
}
