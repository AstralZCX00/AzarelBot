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
        message.author.send({ embeds: [embed1] })
    }
})