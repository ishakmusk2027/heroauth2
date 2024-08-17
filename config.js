module.exports = {
  bot:  {
    owners: ["1204876472708235270","1271460395781197939","969927433165869107"],  // ايدي الاونر
    botID: "1274192216675586122",  // Bot ID
    GuildId: "1271462542237241426",   // ايدي السيرفير
    ClientId: "1274192216675586122",    // ايدي البوت
    serverinvte: "https://discord.gg/vPGJngQbUx", // انفايت سيرفر
    clientSECRET: process.env.client, // سكريت
    callbackURL: "https://heroauth2.onrender.com/login", // الكال باك
    inviteBotUrl: "https://discord.com/oauth2/authorize?client_id=1274192216675586122&permissions=377958172672&response_type=code&redirect_uri=https%3A%2F%2Fheroauth2.onrender.com%2Flogin&integration_type=0&scope=identify+guilds+guilds.join+bot", // انفايت البوت
    TheLinkVerfy: 'https://discord.com/oauth2/authorize?client_id=1274192216675586122&response_type=code&redirect_uri=https%3A%2F%2Fheroauth2.onrender.com%2Flogin&scope=identify+guilds+guilds.join', // رابط اوثو رايز بالصلاحيه ادخال الي سيرفرات
    prefix: 'h', 
    ceatogry: '1274183314596560998', // كاتوجري الي يفتح فيها تكت شراء
    TOKEN: (process.env.midd), // توكن 
    Price: 5000,   // سعر العضو الواحد
    TraId: '969927433165869107' // ايدي الي يتحوله كريديت
  },
  website: {
    PORT: "3001",
  }
}
