const CracoAlias = require("craco-alias")
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
        }
    ]
}