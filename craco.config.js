const CracoAlias = require("craco-alias")
const CracoLess = require("craco-less")

const path = require("path")

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                aliases: {
                    "@": path.resolve(__dirname, "../src")
                }
            }
        },
        {
            plugin: CracoLess,
        }
    ]
}