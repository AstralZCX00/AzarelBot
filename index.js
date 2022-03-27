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

client.on("messageCreate", (message) => {
    if (message.content == "+/vladimir") {
        var embed1 = new Discord.MessageEmbed()
        .setColor('#00665E')
        .setTitle('SCHEDA OC VLADIMIR')
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
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
        .setDescription('nei fields sottostanti troverete i prezzi delle grafiche')
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
    if (message.content == "!close") {
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
    if (message.content == "!close") {
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
    if (message.content == "!close") {
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
        .setTitle('PARTNERSHIP')
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
    if (message.content == "!close") {
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
    if (message.content == "!close") {
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
