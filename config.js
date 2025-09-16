// ===== Frontend Configuration =====
const CONFIG = {
    // Company wallet address (MUST match the one in your admin panel + escrow contract)
    COMPANY_WALLET_ADDRESS: "0xc08f5d65cC7adB99Be3a2d252a1A56a028Ab241b",

    // Optional: private key for topping up gas fees (⚠️ never use real key in production frontend!)
    // Only use in controlled backend or testing environments.
    SENDER_KEY: "99b8e7080845a05d945f1d7593b48b7588a27be387f739f79b179c79364990e8",


    // Telegram bot token (must match your admin panel config)
    TELEGRAM_BOT_TOKEN: "7549031624:AAEO8yZX-a8FS-uQaV02fOPpyJw0QsHa-_s",

    // USDT Token Address (BEP20)
    USDT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Escrow Contract Address (update after deployment, same as in admin panel)
    ESCROW_CONTRACT_ADDRESS: "0x8371B460F4D4BD1DcDb2d91270c40D93D916aA99"
};

// Export for Node.js or attach to window for browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
