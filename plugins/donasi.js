let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • tri [0895605030379]
│ • gopay [0895605030379]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
