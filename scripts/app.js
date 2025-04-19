document.addEventListener("DOMContentLoaded", () => {
    console.log("Drafting Tool Loaded");
    const bannedChamps = [];
    const champions = [
        "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Amumu", "Anivia", "Annie", "Aphelios",
        "Ashe", "AurelionSol", "Aurora", "Azir", "Bard", "BelVeth", "Blitzcrank", "Brand", "Braum", "Briar",
        "Caitlyn", "Camille", "Cassiopeia", "ChoGath", "Corki", "Darius", "Diana", "DrMundo", "Draven",
        "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen",
        "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern",
        "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "KaiSa", "Kalista", "Karma", "Karthus", "Kassadin",
        "Katarina", "Kayle", "Kayn", "Kennen", "KhaZix", "Kindred", "Kled", "KogMaw", "KSante", "LeBlanc",
        "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai",
        "MasterYi", "Mel", "Milio", "MissFortune", "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus",
        "Neeko", "Nidalee", "Nilah", "Nocturne", "NunuWillump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy",
        "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "RekSai", "Rell", "RenataGlasc", "Renekton", "Rengar",
        "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana",
        "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench",
        "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate",
        "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "VelKoz", "Vex", "Vi", "Viego", "Viktor",
        "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick",
        "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
    ];
    const roleMap = {
        All: champions,
        Top: [
            "Aatrox", "Akali", "Ambessa", "Aurora", "Camille", "Cassiopeia", "ChoGath", "Darius", "DrMundo",
            "Fiora", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Gwen", "Heimerdinger", "Illaoi",
            "Irelia", "Jax", "Jayce", "KSante", "Kayle", "Kennen", "Kled", "Malphite", "Maokai",
            "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven",
            "Rumble", "Ryze", "Sett", "Shen", "Singed", "Sion", "Swain", "Sylas",
            "TahmKench", "Teemo", "Trundle", "Tryndamere", "Udyr", "Urgot", "Vayne", "Vladimir", "Volibear",
            "Warwick", "Wukong", "Yasuo", "Yone", "Yorick", "Zac"
        ],
        Jungle: [
            "Ambessa", "Amumu", "BelVeth", "Briar", "Diana", "DrMundo", "Ekko", "Elise", "Evelynn",
            "Fiddlesticks", "Graves", "Gwen", "Hecarim", "Ivern", "JarvanIV", "Jax", "Karthus", "Kayn",
            "KhaZix", "Kindred", "LeeSin", "Lillia", "Maokai", "MasterYi", "Nidalee", "Nocturne", "NunuWillump",
            "Pantheon", "Poppy", "Qiyana", "Rammus", "RekSai", "Rengar", "Sejuani", "Shaco", "Shyvana",
            "Skarner", "Taliyah", "Talon", "Teemo", "Udyr", "Vi", "Viego", "Volibear", "Warwick",
            "Wukong", "XinZhao", "Zac", "Zed", "Zyra"
        ],
        Mid: [
            "Ahri", "Akali", "Akshan", "Ambessa", "Anivia", "Annie", "AurelionSol", "Aurora", "Azir",
            "Brand", "Cassiopeia", "ChoGath", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Gragas",
            "Hwei", "Irelia", "Jayce", "Kassadin", "Katarina", "Kayle", "Kennen", "LeBlanc",
            "Lissandra", "Lux", "Malphite", "Malzahar", "Mel", "Naafiri",
            "Neeko", "Orianna", "Pantheon", "Qiyana", "Ryze", "Smolder", "Swain",
            "Sylas", "Syndra", "Taliyah", "Talon", "Tristana", "TwistedFate", "Veigar", "VelKoz",
            "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs", "Zoe"
        ],
        ADC: [
            "Aphelios", "Ashe", "Brand", "Caitlyn", "Corki", "Draven", "Ezreal", "Hwei", "Jhin",
            "Jinx", "KaiSa", "Kalista", "Karthus", "KogMaw", "Lucian", "Mel", "MissFortune", "Nilah",
            "Samira", "Seraphine", "Sivir", "Smolder", "Swain", "Tristana", "Twitch", "Varus", "Vayne",
            "Veigar", "Xayah", "Yasuo", "Zeri", "Ziggs"
        ],
        Support: [
            "Alistar", "Bard", "Blitzcrank", "Brand", "Braum", "Camille", "ChoGath", "Galio", "Gragas",
            "Hwei", "Janna", "Karma", "LeBlanc", "Leona", "Lulu", "Lux", "Malphite", "Maokai",
            "Milio", "Mel", "Morgana", "Nami", "Nautilus", "Neeko", "Pantheon", "Poppy", "Pyke", "Rakan",
            "RenataGlasc", "Rell", "Senna", "Seraphine", "Shaco", "Shen", "Sona", "Soraka", "Swain",
            "Sylas", "TahmKench", "Taric", "Thresh", "VelKoz", "Xerath", "Yuumi", "Zac", "Zilean", "Zoe", "Zyra"
        ]
    };
    //flex filtering (champs in 2+ roles)
    const roleCounts = {};
    Object.keys(roleMap).forEach(role => {
        if (role === "All" || role === "Flex") return; 
        roleMap[role].forEach(champ => {
            roleCounts[champ] = (roleCounts[champ] || 0) + 1;
        });
    });
    roleMap.Flex = Object.keys(roleCounts).filter(name => roleCounts[name] >= 2);
    const playerMap = {
        Melonik: [
            "Aatrox", "Ambessa", "Camille", "Fiora", "Gangplank", "Gnar", "Gragas", "Gwen", "Irelia", "Jax",
            "Jayce", "KSante", "Kennen", "Rumble", "Sion"
        ],
        Cinkrof: [
            "Brand", "DrMundo", "Gwen", "JarvanIV", "Jax", "LeeSin", "Maokai", "Mordekaiser",
            "Naafiri", "Nocturne", "Sejuani", "Skarner", "Trundle", "Viego", "Vi", "Wukong",
            "XinZhao", "Zac", "Zyra"
        ],
        Secrett: ["Ahri", "Akali","Azir","Corki","Hwei","Jayce","Orianna","Sylas","Syndra","Tristana","Viktor",
        ],
        Odi11: [
            "Aphelios", "Corki", "Ezreal", "Jinx", "KaiSa", "MissFortune", "Seraphine", "Smolder", "Tristana",
            "Twitch", "Varus", "Veigar", "Xayah", "Zeri"
        ],
        Kaseko: [
            "Alistar", "Bard", "Braum", "Karma", "Leona", "Lulu", "Milio", "Nami", "Nautilus", "Poppy", "Rakan",
            "RenataGlasc", "Rell"
        ]
    };
    const container = document.getElementById("champion-list");
    const renderChampions = (list, query = "") => {
        container.innerHTML = "";
        const normalizedQuery = query.trim().toLowerCase();
        const showBannedInSearch = normalizedQuery.length >= 3;
        const matchingAvailable = [];
        const matchingBanned = [];
        list.forEach(name => {
            const isBanned = bannedChamps.includes(name);
            const nameMatch = name.toLowerCase().includes(normalizedQuery);
            if (query && !nameMatch) return; 
            if (isBanned && showBannedInSearch) {
                matchingBanned.push(name);
            } else if (!isBanned) {
                matchingAvailable.push(name);
            }
        });
        const displayList = [...matchingAvailable, ...matchingBanned];
        displayList.forEach(name => {
            const isBanned = bannedChamps.includes(name);

            const img = document.createElement("img");
            img.src = isBanned ? `images/champions/banned.png` : `images/champions/${name}.png`;
            img.alt = name;
            img.title = name;
            img.classList.add("champion-icon");
            container.appendChild(img);
        });
    };
    renderChampions(champions);
    container.addEventListener("click", (e) => {
        if (e.target.tagName !== "IMG") return;
        const name = e.target.alt;
        if (
            editingIndex !== null &&
            !bannedChamps.includes(name) &&
            gameData[editingIndex].length < 10
        ) {
            gameData[editingIndex].push(name);
            bannedChamps.push(name);
            renderGame(editingIndex);
            renderChampions(champions);
            localStorage.setItem("savedDraft", JSON.stringify(gameData));

        }
    });
// role filtering
    document.querySelectorAll("#filters button").forEach(btn => {
        btn.addEventListener("click", () => {
            const role = btn.id;
            renderChampions(roleMap[role] || champions);
        });
    });
    // player filtering
    document.querySelectorAll(".player").forEach(playerDiv => {
        playerDiv.addEventListener("click", () => {
            const name = playerDiv.dataset.player;
            renderChampions(playerMap[name] || champions);
        });
    });
    // Champion name search filter
    document.getElementById("champion-search").addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const matches = champions.filter(champ =>
            champ.toLowerCase().includes(query)
        );
        renderChampions(matches, query);
    });
    const gameData = [[], [], [], [], []];
    let editingIndex = null;
    const gameContainer = document.getElementById("games");
    function createGameBoxes() {
        for (let i = 0; i < 5; i++) {
            const box = document.createElement("div");
            box.classList.add("game-box");
            box.dataset.index = i;
            box.innerHTML = `
          <div class="game-box-title">Game ${i + 1}</div>
          <div class="champion-picks" id="game-picks-${i}"></div>
          <div class="game-actions" id="game-actions-${i}">
            <button class="edit-btn"><img src="images/pictograms/edit.png" alt="Edit"> edit</button>
            <button class="delete-btn"><img src="images/pictograms/delete.png" alt="Delete"> delete</button>
          </div>
        `;
            gameContainer.appendChild(box);
        }
    }
    createGameBoxes();
    const saved = localStorage.getItem("savedDraft");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (let i = 0; i < 5; i++) {
                gameData[i] = parsed[i] || [];
                gameData[i].forEach(champ => {
                    if (!bannedChamps.includes(champ)) bannedChamps.push(champ);
                });
                renderGame(i);
            }
            renderChampions(champions);
        } catch {
            console.log("Could not load saved draft.");
        }
    }

    gameContainer.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        const box = btn.closest(".game-box");
        const index = parseInt(box.dataset.index);
        if (btn.classList.contains("edit-btn")) {
            startEditing(index);
        } else if (btn.classList.contains("delete-btn")) {
            deleteGame(index);
        } else if (btn.classList.contains("save-btn")) {
            saveGame(index);
        }
    });
    function startEditing(index) {
        if (editingIndex !== null && editingIndex !== index) {
            saveGame(editingIndex);
        }
        document.querySelectorAll(".game-box").forEach(box => {
            box.classList.remove("editing");
        });
        editingIndex = index;
        const box = gameContainer.children[index];
        box.classList.add("editing");
        const actions = box.querySelector(".game-actions");
        actions.innerHTML = `<button class="save-btn"><img src="images/pictograms/save.png" alt="Save"> save</button>`;
        renderGame(index);
    }
    function saveGame(index) {
        const box = gameContainer.children[index];
        box.classList.remove("editing");
        editingIndex = null;
        const actions = box.querySelector(".game-actions");
        actions.innerHTML = `
        <button class="edit-btn"><img src="images/pictograms/edit.png" alt="Edit"> edit</button>
        <button class="delete-btn"><img src="images/pictograms/delete.png" alt="Delete"> delete</button>
    `;
        renderGame(index); 
        renderChampions(champions); 
        localStorage.setItem("savedDraft", JSON.stringify(gameData));
    }
    function deleteGame(index) {
        gameData[index].forEach(name => {
            const banIdx = bannedChamps.indexOf(name);
            if (banIdx > -1) bannedChamps.splice(banIdx, 1);
        });
        gameData[index] = [];
        renderGame(index);
        renderChampions(champions);
        renderChampions(champions);
        localStorage.setItem("savedDraft", JSON.stringify(gameData));

    }
    function renderGame(index) {
        const container = document.getElementById(`game-picks-${index}`);
        container.innerHTML = "";
        const isEditing = editingIndex === index;
        for (let i = 0; i < 10; i++) {
            const wrapper = document.createElement("div");
            wrapper.classList.add("champion-wrapper");
            wrapper.dataset.index = i;
            const champ = gameData[index][i];
            if (champ) {
                const img = document.createElement("img");
                img.src = `images/champions/${champ}.png`;
                img.alt = champ;
                img.title = champ;
                img.classList.add("champion-icon-small");
                img.dataset.name = champ;
                wrapper.appendChild(img);
                if (isEditing) {
                    // Add delete X
                    const cross = document.createElement("img");
                    cross.src = "images/pictograms/cross.png";
                    cross.classList.add("delete-cross");
                    cross.title = "Remove";
                    cross.addEventListener("click", (e) => {
                        e.stopPropagation();
                        gameData[index].splice(i, 1);
                        const banIdx = bannedChamps.indexOf(champ);
                        if (banIdx > -1) bannedChamps.splice(banIdx, 1);
                        renderGame(index);
                        renderChampions(champions);
                    });
                    wrapper.appendChild(cross);
                    // Drag & Drop to swap
                    wrapper.draggable = true;
                    wrapper.addEventListener("dragstart", (e) => {
                        e.dataTransfer.setData("text/plain", i);
                    });
                    wrapper.addEventListener("dragover", (e) => e.preventDefault());
                    wrapper.addEventListener("drop", (e) => {
                        e.preventDefault();
                        const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
                        const toIndex = i;
                        if (
                            fromIndex !== toIndex &&
                            gameData[index][fromIndex] &&
                            gameData[index][toIndex]
                        ) {
                            // SWAP logic
                            const temp = gameData[index][fromIndex];
                            gameData[index][fromIndex] = gameData[index][toIndex];
                            gameData[index][toIndex] = temp;
                            renderGame(index);
                        }
                    });
                }
            }
            container.appendChild(wrapper);
        }
    }
    // save/copy/upload/ draft
    document.getElementById("copy-draft").addEventListener("click", () => {
        const code = JSON.stringify(gameData);
        navigator.clipboard.writeText(code).then(() => alert("Draft copied!"));
    });
    document.getElementById("load-draft").addEventListener("click", () => {
        const input = prompt("Paste draft code:");
        try {
            const parsed = JSON.parse(input);
            for (let i = 0; i < 5; i++) {
                gameData[i] = parsed[i] || [];
                gameData[i].forEach(champ => {
                    if (!bannedChamps.includes(champ)) bannedChamps.push(champ);
                });
                renderGame(i);
            }
            renderChampions(champions);
            localStorage.setItem("savedDraft", JSON.stringify(gameData));
        } catch {
            alert("Invalid draft code!");
        }
    });

});