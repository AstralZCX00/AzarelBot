const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"] }
)

client.login(process.env.token)

client.on("ready", () => {
console.log("bot online")
})
client.on("guildMemberAdd", (message) => {
console.log ("nuovo utente")
})

client.on("messageCreate", message => {
    if (message.content == "!schedaOC") {
        var embedticketoc = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC')
        .setDescription('Clicca sul bottone per inviare la tua scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        
        var button1 = new Discord.MessageButton()
            .setLabel("Invia la tua scheda OC")
            .setCustomId("apriTicket1")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embedticketoc], components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket1") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "957218530917498921", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386350959665232",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386704942161971",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957214369094205480",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send('Grazie per aver aperto un ticket, gli staffer sono a tua disposizione!')
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "+/close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha già accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

client.on("messageCreate", message => {
    if (message.content == "!partner") {
        var embedticketpartner = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('PARTNERSHIP')
        .setDescription('Clicca sul bottone per richiedere una partnership')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        
        var button1 = new Discord.MessageButton()
            .setLabel("richiedi una partner")
            .setCustomId("apriTicket2")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embedticketpartner], components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket2") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "957218530917498921", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386350959665232",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386704942161971",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957214369094205480",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send('Grazie per aver aperto un ticket, attendi la risposta di un addetto partner!')
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "+/close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha già accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket2") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "957218530917498921", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386350959665232",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386704942161971",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957214369094205480",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send('Grazie per aver aperto un ticket, attendi la risposta di un addetto partner!')
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "+/close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha già accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

client.on("messageCreate", message => {
    if (message.content == "!ticketgenerale") {
        var embedticketgenerale = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('TICKET GENERALE')
        .setDescription('Clicca sul bottone per aprire un ticket generale')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        
        var button1 = new Discord.MessageButton()
            .setLabel("richiedi una partner")
            .setCustomId("apriTicket3")
            .setStyle("PRIMARY")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embedticketgenerale], components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket3") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "957218530917498921", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386350959665232",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386704942161971",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957214369094205480",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send('Grazie per aver aperto un ticket, attendi la risposta di uno staffer!')
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "+/close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha già accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket2") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("Hai gia un ticket aperto").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "957218530917498921", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386350959665232",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957386704942161971",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "957214369094205480",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            canale.send('Grazie per aver aperto un ticket, attendi la risposta di un addetto partner!')
        })
    }
})

client.on("messageCreate", message => {
    if (message.content == "+/close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: true
                })
                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }
        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.permissions.has("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }
                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)
                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha già accesso al ticket")
                    return
                }
                if (utente.permissions.has("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }
                message.channel.permissionOverwrites.edit(utente, {
                    VIEW_CHANNEL: false
                })
                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

client.on("messageCreate", (message) => {
    if (message.content == "+/vladimir") {
        var embed1 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC VLADIMIR')
        .setDescription('nei fields sottostanti troveri la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Vladimir Javier Blake',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '179cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Uomo',
                 inline: false
             },
             {
                 name: 'Età',
                 value: 'indefinita',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'svariate cicatrici sul corpo, ali nere con apertura fino a 210cm, sono come ricoperte di ghiaccio e questo rende le piume taglienti e resistenti ma allo stesso tempo leggere',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Zeta',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: 'Il suo carattere è pieno di ontraddizzioni, è una persona calma ma al contempo irritabile e impulsivo, non ama particolarmente relazionarsi con le persone a causa del suo passato, è una persona che si concentra su ogni minimo particolare, odia essere disturbato, non sopporta la mancanza di rispetto e non sopporta definirsi superiore agli altri.',
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Birevo, in Russia, successivamente trasferitosi a Klin e poi a Mosca fino all'inizio delle guerre",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Eterosessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Croce nera (primordiali)',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: 'Dominazione del fuoco, dominazione della paura, volo, amplificazione delle abilità fisiche 8:1',
                inline: false
            },
            {
                name: 'Punto debole',
                value: "Colpi alla schiena quando le ali sono aperte, l'utilizzo del dominio della paura (più avrà sofferto il bersaglio in vita sua e più sarà difficile fargli effetto, ciò richiede un utilizzo maggiore di energia, e per questo l'utilizzo prolungato dai 3 minuti, nel caso dell'utilizzo massimo, fino ai 10 minuti, nel caso dell'utilizzo minimo, è dereterio).",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/957201956076679168/957634120668835840/WhatsApp_Image_2022-03-24_at_23.14.16.jpeg')
        message.author.send({ embeds: [embed1] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/jack") {
        var embed2 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC JACK')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Jack Hawk',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '180cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Uomo',
                 inline: false
             },
             {
                 name: 'Età',
                 value: '19',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'i suoi  capelli lunghi e lisci di un colore   castano sono raccolti in delle piccole trecce, che si porta sempre a lato del capo,seguono gli occhi spettrali di un colore tendente al azzurro.  Sul viso ha degli accenni di peluria.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Fiaccola',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: 'è  un ragazzo che ama stare per le sue,non ama il baccano e chi è  presuntuoso. Cerca sempre di mantenere la pace e di aiutare il prossimo, inoltre non teme andare in battaglia.  Se si conosce bene è  un ragazzo simpatico e divertente.',
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Inghilterra",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Eterosessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Croce nera (primordiali)',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: 'Dominazione del fuoco',
                inline: false
            },
            {
                name: 'Punto debole',
                value: "il suo punto debole è  il suo stesso potere se sfrutta troppo il suo potere le sue braccia  si creperanno mandandole fuoriuso per un po'  di tempo.",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/957201956076679168/957634289762201630/20210420_225811-2.jpg')
        message.author.send({ embeds: [embed2] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/ellie") {
        var embed4 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC ELLIE')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Ellie Ham,',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '173cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Donna',
                 inline: false
             },
             {
                 name: 'Età',
                 value: '19',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'occhi gialli e capelli bianchi a causa di una voglia presente sulla testa, qualche lentiggine e tratti leggeri che non ti farebbero mai dubitare sia una cacciatrice, magrolina ma abbastanza muscolosa.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'El, L',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "Schiva e fredda,darebbe il mondo per suo fratello ma solo per lui, non si apre con nessuno e tende a preferire l'essere in solitudine piuttosto che passare del tempo con altri anche se della sua stessa fazione.",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Azar",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Bisessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Poliset',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: 'Dominazione del fuoco, volo',
                inline: false
            },
            {
                name: 'Punto debole',
                value: "La storia della sua vita e di sua madre, l'abbandono di suo fratello, facile irritabilità ",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/957986337594695690/957987668304756756/image0.jpg')
        message.author.send({ embeds: [embed4] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/yukino") {
        var embed5 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC YUKINO')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Yukino Kenma,',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '175cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Donna',
                 inline: false
             },
             {
                 name: 'Età',
                 value: '20',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'Magra ma con muscoli ben formati.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Volpe Ghiacciata, Reitō kitsune',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "Gentile, Protettiva, Molto aperta alle amicizie ma diffidente (spesso cerca delle prove dell'effettiva lealtà), Vendicativa",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Shirakawa",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Pansessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Poliset',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: "Dominio dell'acqua, prestazioni fisiche ampliicate (velocità).",
                inline: false
            },
            {
                name: 'Punto debole',
                value: "Temperature troppo alte (abituata a vivere nel gelo il suo corpo non sopporta oltre i 60 gradi) ed il vento forte (sbilancia l'acqua ed alcuni suoi movimenti deve ricalcolarli).",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/958376643875983440/958376703216979998/Akame_-_BLu.jpg')
        message.author.send({ embeds: [embed5] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/jimiko") {
        var embed6 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC JIMIKO')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Jimiko Meino',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '192cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Donna',
                 inline: false
             },
             {
                 name: 'Età',
                 value: '36',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'Capelli neri e lunghi, occhi color rosso, corpo snello, pelle leggermente pallida.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Drughal "Testament"',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "ambiversa, calma e tranquilla, cazzara (molte battute scomode), masochista, protettiva",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Indeterminato, da scoprire in RP",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Indeterminato, da scoprire in RP',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Poliset',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: "Dominio del fuoco, prestazioni fisiche ampliicate (velocità).",
                inline: false
            },
            {
                name: 'Punto debole',
                value: "dolci e odia le cose carine, il combattimento a mani nude è un grave problema.",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/958378816353484891/958379039524028527/cb4.jpg')
        message.author.send({ embeds: [embed6] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/lexan") {
        var embed6 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC LEXAN')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Lexan Hayer',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '180cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Uomo',
                 inline: false
             },
             {
                 name: 'Età',
                 value: '22',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'È un ragazzo decisamente alto per i suoi gusti, infatti ha la beata altezza di un metro e ottanta, con un peso abbastanza bilanciato di settantacinque chili, ha una capigliatura dai colori corvini con le punte rosse che gli vanno appena sotto la spalla, che però tiene sempre solo da un lato unico, i suoi occhi sono a dir poco sottili, quasi taglienti e le pupille di un giallo luminoso mettono in risalto il tutto che va ad unirsi ad una pelle dal colore roseo lievemente scuro, sul braccio sinistro ha il tatuaggio di un drago che fa a spirale dal suo polso fino a dietro la spalla.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Mumeitou / Akaryū',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "Lexian è un ragazzo decisamente freddo e distaccato da praticare chiunque, soprattutto dalle persone che gli sembrano appiccicose fin da subito, ma anche con chi gli è gentile fatica ad essere cortese, per lui non è cattiveria questo comportamento è semplicemente mancanza di fiducia nel approcciarsi alle altre persone. Preferisce di gran lunga stare da solo piuttosto che in gruppo essendo una persona solitaria sin dalla nascita. Non è per niente sicuro di sé infatti quando inizia a fare una qualsiasi cosa è finisce con il successo ammette di aver avuto solo fortuna.",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Dintorni del Giappone, non definito",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Eterosessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Poliset',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: "Dominio del fuoco.",
                inline: false
            },
            {
                name: 'Punto debole',
                value: "I dominatori dell'acqua sono uno dei suoi principali punti deboli non essendo molto in grado di contrastarli se non con la sua propria arma, in generale le cose fredde (anche l'acqua per esempio, preferisce piuttosto berla calda).",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/960945203076821063/960963585016737812/IMG_20220405_200210.jpg')
        message.author.send({ embeds: [embed6] })
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "+/ailith") {
        var embed7 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC AILITH')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Ailith Casey',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '165cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Donna',
                 inline: false
             },
             {
                 name: 'Età',
                 value: 'Indefinita',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'Lunghi capelli corvini, ad incorniciare un viso bellissimo ,dalla pelle perfettamente levigata ,e bianca. Occhi così bui da racchiudere una notte così fonda di universi e costellazioni sconosciute. Un corpo formoso e longilineo allo stesso tempo, così fragile ed esile, ma resistente al  contempo, agile e flessuoso. Labbra piccole e carnose, su un sorriso a volte misterioso e lontano.',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Orion',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "Non è facile per lei fidarsi all'istante, non si può dire che si concerne ad atteggiamenti smielati e pressanti in effusioni con chi che sia. Può essere distante , rinchiusa nei suoi silenzi, leale e amichevole con chi ne attrae la fiducia. In battaglia cerca di essere riflessiva e studiare il proprio avversario. Non è necessariamente crudele con chi non se lo merita. Perspicace e coraggiosa, per certi versi timida, e malinconica nel suo intimo.",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Non definito",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Eterosessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Croce Nera',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: "Dominio dell'energia",
                inline: false
            },
            {
                name: 'Punto debole',
                value: "non può usarlo troppo allungo perché influisce sulla sua energia fisica, che deve essere ripristinata a causa dell'uso del seishin.",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/961273761351495710/961285799389855874/31287ae3bdebb72f767fad092d0126f7.jpg')
        message.author.send({ embeds: [embed7] })
    }
})



client.on("messageCreate", (message) => {
    if (message.content == "+/nesrin") {
        var embed7 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC NESRIN')
        .setDescription('nei fields sottostanti troverai la scheda OC')
        .setThumbnail('https://cdn.discordapp.com/attachments/957201956076679168/957599205961105448/Logo_azarel.png')
        .addField('\u200b', '\u200b')
        .addFields(
             {
                 name: 'Nome',
                 value: 'Nesrin Bladeheart',
                 inline: false 
             },
             {
                 name: 'Altezza',
                 value: '164cm',
                 inline: false
             },
             {
                 name: 'Sesso',
                 value: 'Donna',
                 inline: false
             },
             {
                 name: 'Età',
                 value: 'Indefinita',
                 inline: false
             },
             {
                 name: 'Caratteristiche fisiche',
                 value: 'ha una pelle chiara, non si abbronza ma in compenso si scotta molto facilmente. Ha i capelli di un colore strano che ha ereditato dalla madre, infatti, sono di un rosa non troppo acceso e sono ricci, mentre gli occhi sono di un azzurro scuro verso il blu, cambia a seconda dei mood e del tempo atmosferico. Non sembra avere un aspetto fisico molto sviluppato ma in realtà i muscoli funzionano bene',
                 inline: false
             },
             {
                 name: 'Soprannome',
                 value: 'Rin',
                 inline: false
             },
             {
                 name: 'Carattere',
                 value: "Nesrin è una ragazza ambiverta, le piace stare in compagnia di persone a lei care con cui ridere e scherzare, ma allo stesso tempo spesso ha bisogno anche dei suoi spazi e di tempo per stare da sola. È una ragazza molto curiosa, e questa sua curiosità spesso la caccia nei guai. È una ragazza molto impacciata e qualche volta distratta, ma ha un istinto materno e al contempo giovanile, infatti le piacciono i bambini e giocare con loro, ma un suo difetto è quello di intromettersi nelle conversazioni altrui qualora le sembrino interessanti.",
                 inline: false
             },
             {
                 name: 'Luogo di nascita',
                 value: "Romania, Bucarest",
                 inline: false
             },
             {
                 name: 'Orientamento sessuale',
                 value: 'Eterosessuale',
                 inline: false
             }
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Fazione',
                value: 'Extrin',
                inline: false 
            },
        )
        .addField('\u200b', '\u200b')
        .addFields(
            {
                name: 'Poteri',
                value: "Dominio dell'aria, velocità amplificata",
                inline: false
            },
            {
                name: 'Punto debole',
                value: "La schiena, è caduta molte volte quando era giovane e adesso se esagera con gli sforzi fisici rimane quasi paralizzata per diversi giorni, e al inguine, se fa delle falcate troppo grandi lo sente fare un scrocchiare e da lì si accascia un attimo per non rischiare di stirare il muscolo. Riguardo ai poteri fa fatica, un bel po' a gestire venti di temperature troppo alte o basse.",
                inline: false
            },
            {
                name: 'Storia',
                value: 'Indeterminata, da scoprire in RP',
                inline: false
            }
        )
        .setImage('https://cdn.discordapp.com/attachments/968197911005503589/968198316984795136/nesrin.jpg')
        message.author.send({ embeds: [embed7] })
    }
})



//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

const mysql = require("mysql");
var con = mysql.createPool({
        host: "us-cdbr-east-05.cleardb.net",
        port: 3306,
        user: "bb9210d8668d7b",
        password: process.env.passwordDatabase,
        database: "heroku_558b669792d3d18"
})

client.on("message", message => {
        con.query("SELECT * FROM users", function (err, result) {
                if (err) {
                        console.log(err)
                        return
                }

                var users = result;

                var index = users.findIndex(x => x.id == message.author.id)
                if (index < 0) {
                        con.query("INSERT INTO users VALUES ('" + message.member.user.username + "', " + message.author.id + ", 3)", function (err, result) {
                                if (err) {
                                        console.log(err)
                                        return
                                }
                        })
                }
                else {
                        var xp = users[index].xp;
                        xp = xp + 3;
                        con.query("UPDATE users SET xp = " + xp + " WHERE id = " + message.author.id, function (err, result) {
                                if (err) {
                                        console.log(err)
                                        return
                                }
                        })
                }

        })


        if (message.content == "+/livello") {
                con.query("SELECT * FROM users", function (err, result) {
                        if (err) {
                                console.log(err)
                                return
                        }

                        var users = result;
                        var index = users.findIndex(x => x.id == message.author.id)
                        if (index < 0) {
                                message.channel.send("Hai 0 punti esperienza");
                        }
                        else {
                                var xp = users[index].xp;
                                message.channel.send("Hai " + xp + "xp " + message.author.toString());
                        }
                })
        }
})