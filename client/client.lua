local nuiVisible = false

--
-- Functions
--

function toggleNui(toggle)
    nuiVisible = toggle

    SendNUIMessage({
        type  = 'display',
        value = toggle,
    })

    SetNuiFocus(toggle, toggle)
end

--
-- Commands
--

RegisterCommand('shownui', function()
    toggleNui(true)
end)

RegisterCommand('increment', function()
    SendNUIMessage({
        type   = 'increment',
        amount = 1,
    })
end)

--
-- NUI Callbacks
--

RegisterNUICallback('close', function(data, cb)
    toggleNui(false)

    cb({})
end)

RegisterNUICallback('incremented', function(data, cb)
    print('NUI sent incremented callback', data.count)

    cb({})
end)
