# DeckLink
Group project for a social network dedicated to card collectors

# 🏢 Architecture
```
📂 decklink/
├── 📂 backend (Express.js)
│ ├── 📂 src
│ │ ├── 📂 config
│ │ ├── 📂 controllers
│ │ ├── 📂 models
│ │ ├── 📂 repositories
│ │ ├── 📂 routes
│ │ ├── 📂 services
│ │ ├── 📜 server.js
│ ├── 📂 tests
│ ├── 📜 package.json
│ ├── 📜 .env
│ ├── 📜 README.md
```

📌 Main Features
🔹 User Management
Secure sign-up and login with authentication (email + password or via OAuth).

User profile with avatar, duel history, and statistics.

Role system: user, moderator, and administrator.

🔄 Card Trading
🔁 Trade proposals with validation from both parties.

📊 Balancing system: Automatic comparison of card values.

🛡️ Secure mode with a moderator guarantee to prevent scams.

💬 Discussion & Community
📌 Structured forum: Dedicated categories (strategies, events, duels, etc.).

🚫 Anti-spam system with inappropriate message filtering.

👍 Reactions and voting system to highlight the best discussions.

⚔ Battles & Tournaments
🆚 Duel mode: Player battles following official rules.

🎲 Card wagering (optional) for high-stakes matches.

🏆 Player rankings with rewards for top duelists.

⚖️ Moderator arbitration in case of disputes.

🎉 Events & Tournaments
📅 Event management: Registration, notifications, and participant tracking.

🏅 Organized tournaments with rewards (cards, virtual currency, bonuses).

🔥 Special events: Group trades, strategy conferences, exclusive challenges.

🛠️ Tools & Security
🔍 Advanced search: Filters to find specific cards.

🛡️ Moderation system: Abuse reporting, automatic sanctions, and dispute management.