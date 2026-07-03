// Nature Adventure Educational Game Core Script

// ----------------------------------------------------
// 1. GAME DATA & BIOME CONFIGURATION
// ----------------------------------------------------

const biomesData = {
  rainforest: {
    title: "Tropical Rainforest",
    bgClass: "rainforest-bg",
    climate: "Warm & Very Wet",
    narrative: "Welcome to the Rainforest! It is warm all year and gets lots of rain. Tall trees grow closely together, creating layers where monkeys, frogs, and toucans live.",
    defaultSeason: "summer",
    items: [
      { id: "rf_sloth", name: "Three-Toed Sloth", icon: "🦥", x: 75, y: 55, type: "animal", fact: "Sloths move very slowly to save energy. They spend almost their entire lives hanging upside down from trees!" },
      { id: "rf_toucan", name: "Toco Toucan", icon: "🐦", x: 20, y: 35, type: "animal", fact: "Toucans have giant, colorful bills that help them reach fruits on branches that are too weak to support their weight." },
      { id: "rf_frog", name: "Poison Dart Frog", icon: "🐸", x: 45, y: 78, type: "animal", fact: "These tiny frogs are brightly colored to warn predators that their skin contains dangerous poison!" },
      { id: "rf_jaguar", name: "Jaguar", icon: "🐆", x: 60, y: 72, type: "animal", fact: "Jaguars are the largest cats in the Americas. Unlike most cats, they are amazing swimmers and love the water!" },
      { id: "rf_orchid", name: "Rainforest Orchid", icon: "🌸", x: 10, y: 80, type: "plant", fact: "Orchids grow high up on trees rather than in soil, helping them reach valuable sunlight in the dark forest." },
      { id: "rf_butterfly", name: "Morpho Butterfly", icon: "🦋", x: 50, y: 48, type: "animal", fact: "The Blue Morpho butterfly has microscopic scales on its wings that reflect light, making them look metallic blue." }
    ],
    game: {
      title: "Rainforest Layers Matcher",
      instruction: "Drag each creature to the correct forest layer where they spend their time!",
      draggables: [
        { id: "drag_sloth", name: "🦥 Sloth", match: "canopy" },
        { id: "drag_frog", name: "🐸 Poison Frog", match: "floor" },
        { id: "drag_toucan", name: "🐦 Toucan", match: "canopy" },
        { id: "drag_jaguar", name: "🐆 Jaguar", match: "floor" }
      ],
      targets: [
        { id: "floor", label: "🌿 Forest Floor (Ground level, dark & damp)" },
        { id: "canopy", label: "🌳 Canopy Layer (Leafy tree tops, sunny)" }
      ]
    },
    quiz: [
      {
        q: "Why do Poison Dart Frogs have bright, colorful skin?",
        options: [
          "To warn predators they are poisonous",
          "To hide in the dark soil",
          "To stay cool in the hot sun"
        ],
        answer: 0
      },
      {
        q: "Which layer of the rainforest is made of leafy tree tops?",
        options: [
          "The Forest Floor",
          "The Understory",
          "The Canopy Layer"
        ],
        answer: 2
      },
      {
        q: "True or False: Jaguars are excellent swimmers and enjoy water.",
        options: [
          "True! They love water",
          "False! They hate water"
        ],
        answer: 0
      }
    ],
    rewards: {
      badge: "Rainforest Scout 🏆",
      sticker: "🐒 Monkey Sticker",
      outfit: "Explorer Hat 🤠"
    }
  },
  desert: {
    title: "Sizzling Desert",
    bgClass: "desert-bg",
    climate: "Hot & Extremely Dry",
    narrative: "Welcome to the Desert! It gets very little rain. Plants like cacti store water in their thick stems, and animals hide underground to stay cool during hot days.",
    defaultSeason: "summer",
    items: [
      { id: "ds_camel", name: "Dromedary Camel", icon: "🐪", x: 70, y: 65, type: "animal", fact: "Camels store fat (not water!) in their humps. This fat provides energy when food and water are hard to find." },
      { id: "ds_fox", name: "Fennec Fox", icon: "🦊", x: 15, y: 78, type: "animal", fact: "Fennec Foxes have giant ears that act like fans to release heat and keep them cool, and help them hear bugs underground!" },
      { id: "ds_cactus", name: "Saguaro Cactus", icon: "🌵", x: 85, y: 50, type: "plant", fact: "The Saguaro Cactus stores water inside its spongy stems. It can grow up to 50 feet tall and live for 150 years!" },
      { id: "ds_snake", name: "Sidewinder Snake", icon: "🐍", x: 45, y: 82, type: "animal", fact: "Sidewinders crawl sideways! This sideways sliding motion prevents their bodies from touching the hot sand too much." },
      { id: "ds_lizard", name: "Gila Monster", icon: "🦎", x: 30, y: 80, type: "animal", fact: "The Gila Monster is a venomous lizard that stores fat in its tail. It spends 90% of its life underground!" }
    ],
    game: {
      title: "Desert Water Survival",
      instruction: "Help class animals survive! Sort them into whether they STORE water or SAVE water by escaping heat.",
      draggables: [
        { id: "drag_cactus", name: "🌵 Saguaro Cactus", match: "store" },
        { id: "drag_camel", name: "🐪 Camel", match: "store" },
        { id: "drag_fox", name: "🦊 Fennec Fox (Hides)", match: "save" },
        { id: "drag_lizard", name: "🦎 Gila Monster (Underground)", match: "save" }
      ],
      targets: [
        { id: "store", label: "💧 Stores Water inside body" },
        { id: "save", label: "☀️ Saves Water by hiding from hot sun" }
      ]
    },
    quiz: [
      {
        q: "What do camels store inside their humps?",
        options: [
          "Fresh drinking water",
          "Fat for food energy",
          "Soft desert sand"
        ],
        answer: 1
      },
      {
        q: "Why does the Fennec Fox have giant ears?",
        options: [
          "To fly over dunes",
          "To release body heat and stay cool",
          "To keep sand out of its eyes"
        ],
        answer: 1
      },
      {
        q: "How does the Sidewinder Snake move over hot sand?",
        options: [
          "It rolls like a log",
          "It glides in a sideways loop",
          "It runs on tiny invisible legs"
        ],
        answer: 1
      }
    ],
    rewards: {
      badge: "Desert Nomad 🏆",
      sticker: "🌵 Cactus Sticker",
      outfit: "Desert Goggles 🥽"
    }
  },
  grassland: {
    title: "Rolling Grassland",
    bgClass: "grassland-bg",
    climate: "Mild & Windy",
    narrative: "Welcome to the Grasslands! These wide plains are dominated by grasses rather than tall trees. Large herds of bison and busy prairie dogs call this home.",
    defaultSeason: "spring",
    items: [
      { id: "gl_bison", name: "American Bison", icon: "🦬", x: 70, y: 62, type: "animal", fact: "Bison are massive grazers that eat grass. Their thick fur coats protect them from freezing prairie winds in winter." },
      { id: "gl_pdog", name: "Prairie Dog", icon: "🐿️", x: 25, y: 78, type: "animal", fact: "Prairie Dogs live in giant underground burrow systems called 'towns'. They bark like dogs to warn each other of danger!" },
      { id: "gl_monarch", name: "Monarch Butterfly", icon: "🦋", x: 45, y: 45, type: "animal", fact: "Monarch butterflies fly thousands of miles to Mexico every autumn to escape the cold winter winds." },
      { id: "gl_sunflower", name: "Wild Sunflower", icon: "🌻", x: 10, y: 70, type: "plant", fact: "Young sunflowers perform 'heliotropism'—they turn their flower heads to track the sun from east to west every day!" }
    ],
    game: {
      title: "Grassland Food Chain",
      instruction: "Arrange the food chain from the producer (bottom) to the top predator!",
      draggables: [
        { id: "chain_grass", name: "🌻 Wild Sunflower", match: "producer" },
        { id: "chain_bug", name: "🦗 Grasshopper", match: "herbivore" },
        { id: "chain_coyote", name: "🦊 Coyote", match: "carnivore" }
      ],
      targets: [
        { id: "producer", label: "🌱 1. Producer (Gets energy from sun)" },
        { id: "herbivore", label: "🦗 2. Herbivore (Eats plants)" },
        { id: "carnivore", label: "🦊 3. Carnivore (Eats other animals)" }
      ]
    },
    quiz: [
      {
        q: "What is the dominant type of plant in a grassland?",
        options: [
          "Tall pine trees",
          "Grasses and wildflowers",
          "Giant green cacti"
        ],
        answer: 1
      },
      {
        q: "How do prairie dogs warn their friends of danger?",
        options: [
          "They bark and whistle",
          "They send text messages",
          "They hide and stay silent"
        ],
        answer: 0
      },
      {
        q: "Where do Monarch Butterflies migrate to in the autumn?",
        options: [
          "The North Pole",
          "Mexico",
          "Underground caves"
        ],
        answer: 1
      }
    ],
    rewards: {
      badge: "Prairie Ranger 🏆",
      sticker: "🦬 Bison Sticker",
      outfit: "Green Backpack 🎒"
    }
  },
  tundra: {
    title: "Frozen Tundra",
    bgClass: "tundra-bg",
    climate: "Freezing Cold & Windy",
    narrative: "Welcome to the Tundra! It is one of the coldest biomes on Earth. The ground is frozen solid underneath, but arctic poppies bloom in the short summer.",
    defaultSeason: "winter",
    items: [
      { id: "td_bear", name: "Polar Bear", icon: "🐻‍❄️", x: 75, y: 60, type: "animal", fact: "Polar Bear fur is actually clear and hollow, not white! The fur reflects light to look white and traps warm air." },
      { id: "td_fox", name: "Arctic Fox", icon: "🦊", x: 20, y: 78, type: "animal", fact: "Arctic Foxes have white fur in the winter to hide in the snow, but it turns brown in the summer to hide among rocks!" },
      { id: "td_owl", name: "Snowy Owl", icon: "🦉", x: 45, y: 35, type: "animal", fact: "Unlike most owls, Snowy Owls are active during the day. Their white feathers keep them warm in freezing winds." },
      { id: "td_poppy", name: "Arctic Poppy", icon: "🌼", x: 10, y: 80, type: "plant", fact: "Arctic Poppies are cup-shaped to absorb sunlight and face the sun all day to stay warm." }
    ],
    game: {
      title: "Arctic Adaptation Matcher",
      instruction: "Match the tundra animal to its smart winter survival strategy!",
      draggables: [
        { id: "adapt_fox", name: "🦊 Arctic Fox", match: "camouflage" },
        { id: "adapt_bear", name: "🐻‍❄️ Polar Bear", match: "blubber" },
        { id: "adapt_caribou", name: "🦌 Caribou (Migration)", match: "travel" }
      ],
      targets: [
        { id: "camouflage", label: "❄️ Color-changing fur for camouflage" },
        { id: "blubber", label: "🔥 Thick blubber and hollow fur for warmth" },
        { id: "travel", label: "✈️ Migrates south to find food" }
      ]
    },
    quiz: [
      {
        q: "What color is a polar bear's skin underneath its fur?",
        options: [
          "Pink",
          "Black",
          "White"
        ],
        answer: 1
      },
      {
        q: "How does the Arctic Fox's coat change between winter and summer?",
        options: [
          "It grows spikes",
          "It turns from white to brown",
          "It falls off completely"
        ],
        answer: 1
      },
      {
        q: "What is the frozen layer of soil in the tundra called?",
        options: [
          "Ice cap",
          "Permafrost",
          "Tundra mud"
        ],
        answer: 1
      }
    ],
    rewards: {
      badge: "Polar Pioneer 🏆",
      sticker: "🐻‍❄️ Polar Bear Sticker",
      outfit: "Warm Winter Parka 🧥"
    }
  },
  savanna: {
    title: "Sunny Savanna",
    bgClass: "savanna-bg",
    climate: "Hot with Wet & Dry seasons",
    narrative: "Welcome to the Savanna! It is a hot grassland with scattered trees. Large herds of giraffes, zebras, and elephants live here and share the watering holes.",
    defaultSeason: "summer",
    items: [
      { id: "sv_lion", name: "African Lion", icon: "🦁", x: 70, y: 65, type: "animal", fact: "Lions live in family groups called prides. Female lions (lionesses) work together to do most of the hunting." },
      { id: "sv_elephant", name: "Savanna Elephant", icon: "🐘", x: 25, y: 60, type: "animal", fact: "Elephants fan their giant ears to cool down. They also spray water and mud on their skin to protect against sunburn!" },
      { id: "sv_giraffe", name: "Masai Giraffe", icon: "🦒", x: 85, y: 45, type: "animal", fact: "Giraffes have prehensile blue-black tongues that are up to 20 inches long, letting them eat thorny acacia leaves easily." },
      { id: "sv_zebra", name: "Plains Zebra", icon: "🦓", x: 55, y: 72, type: "animal", fact: "Every zebra has a unique pattern of stripes, like human fingerprints! Stripes help confuse biting flies and predators." }
    ],
    game: {
      title: "Watering Hole Sorter",
      instruction: "Sort these savanna animals into Plant-eaters (Herbivores) and Meat-eaters (Carnivores)!",
      draggables: [
        { id: "feed_lion", name: "🦁 Lion", match: "carnivore" },
        { id: "feed_zebra", name: "🦓 Zebra", match: "herbivore" },
        { id: "feed_giraffe", name: "🦒 Giraffe", match: "herbivore" },
        { id: "feed_cheetah", name: "🐆 Cheetah", match: "carnivore" }
      ],
      targets: [
        { id: "herbivore", label: "🌿 Herbivores (Eat leaves and grass)" },
        { id: "carnivore", label: "🥩 Carnivores (Hunt other animals)" }
      ]
    },
    quiz: [
      {
        q: "Why do elephants spray mud and dust on their backs?",
        options: [
          "To look like rocks",
          "To act as natural sunscreen and bug spray",
          "To make friends with zebras"
        ],
        answer: 1
      },
      {
        q: "True or False: Every zebra's stripe pattern is unique.",
        options: [
          "True! No two zebras are identical",
          "False! They are all exactly identical"
        ],
        answer: 0
      },
      {
        q: "How long can a giraffe's tongue be?",
        options: [
          "5 inches",
          "20 inches",
          "50 inches"
        ],
        answer: 1
      }
    ],
    rewards: {
      badge: "Savanna Scout 🏆",
      sticker: "🦁 Lion Sticker",
      outfit: "Binoculars 🥽"
    }
  },
  temperate: {
    title: "Temperate Forest",
    bgClass: "temperate-bg",
    climate: "Cool & Seasonal",
    narrative: "Welcome to the Temperate Forest! This biome experiences all four seasons clearly. Broad-leaved trees like oaks drop their leaves in autumn to prepare for winter.",
    defaultSeason: "autumn",
    items: [
      { id: "tf_bear", name: "Grizzly Bear", icon: "🐻", x: 70, y: 65, type: "animal", fact: "Grizzly bears eat up to 90 pounds of food every day in autumn to gain weight before they sleep through the cold winter!" },
      { id: "tf_fox", name: "Red Fox", icon: "🦊", x: 25, y: 78, type: "animal", fact: "Red Foxes have amazing hearing. They can hear small mice squeaking and tunneling deep under the snow!" },
      { id: "tf_deer", name: "White-Tailed Deer", icon: "🦌", x: 50, y: 60, type: "animal", fact: "Male deer (bucks) grow new antlers every spring, which are soft and fuzzy, and shed them after winter." },
      { id: "tf_oak", name: "Oak Tree Leaf", icon: "🍁", x: 85, y: 48, type: "plant", fact: "Oak trees drop their leaves in autumn. This helps them conserve water and survive the dry winter freeze." }
    ],
    game: {
      title: "Leaf Sorting Academy",
      instruction: "Sort the foliage! Match the leaves to their correct plant group.",
      draggables: [
        { id: "leaf_oak", name: "🍁 Maple Leaf (Broad)", match: "deciduous" },
        { id: "leaf_pine", name: "🌲 Pine Needle (Sharp)", match: "conifer" }
      ],
      targets: [
        { id: "deciduous", label: "🍂 Deciduous (Leaves fall in Autumn)" },
        { id: "conifer", label: "🌲 Conifer (Needles stay green all year)" }
      ]
    },
    quiz: [
      {
        q: "Why do deciduous trees drop their leaves in autumn?",
        options: [
          "They are tired of them",
          "To save water and survive winter cold",
          "To feed the forest earthworms"
        ],
        answer: 1
      },
      {
        q: "How does the Red Fox hunt for food under the snow?",
        options: [
          "It uses its heat-vision eyes",
          "It listens for squeaks with its sharp ears",
          "It digs giant tunnels everywhere"
        ],
        answer: 1
      },
      {
        q: "What do male deer shed every year in winter?",
        options: [
          "Their antlers",
          "Their tails",
          "Their winter fur coat"
        ],
        answer: 0
      }
    ],
    rewards: {
      badge: "Forest Guide 🏆",
      sticker: "🦊 Red Fox Sticker",
      outfit: "Camping Lantern 🔦"
    }
  },
  taiga: {
    title: "Spooky Taiga",
    bgClass: "taiga-bg",
    climate: "Cold & Snowy",
    narrative: "Welcome to the Taiga, also called the Boreal Forest! It is the largest land biome, covered in cone-bearing evergreen trees that stand strong against heavy snow.",
    defaultSeason: "winter",
    items: [
      { id: "tg_moose", name: "Moose", icon: "🫎", x: 65, y: 60, type: "animal", fact: "Moose are the largest of the deer family. They have wide hooves that act like snowshoes to walk on deep snow!" },
      { id: "tg_wolf", name: "Gray Wolf", icon: "🐺", x: 20, y: 72, type: "animal", fact: "Wolves live and hunt in family groups called packs. They howl to call their pack and warn other wolves away." },
      { id: "tg_lynx", name: "Canada Lynx", icon: "🐱", x: 45, y: 78, type: "animal", fact: "The Lynx has extra-wide paws with thick fur that keeps them warm and prevents them from sinking in snow." },
      { id: "tg_pine", name: "Pine Cone", icon: "🌲", x: 85, y: 50, type: "plant", fact: "Evergreens keep their needles all year. Their dark green needles absorb light to start growing in early spring." }
    ],
    game: {
      title: "Taiga Track Matcher",
      instruction: "Match each taiga animal to its unique footprint track!",
      draggables: [
        { id: "track_moose", name: "🫎 Moose Track (Large & Hooved)", match: "moose" },
        { id: "track_wolf", name: "🐺 Wolf Track (Paw print with claws)", match: "wolf" }
      ],
      targets: [
        { id: "moose", label: "🦶 Hoofed Print (Leaves deep holes)" },
        { id: "wolf", label: "🐾 Clawed Pad Print (Looks like dog print)" }
      ]
    },
    quiz: [
      {
        q: "What is another name for the Taiga biome?",
        options: [
          "The Wet Jungle",
          "The Boreal Forest",
          "The Great Steppe"
        ],
        answer: 1
      },
      {
        q: "Why do evergreens keep their needles green all winter?",
        options: [
          "To stay fashionable",
          "To photosynthesize immediately in spring",
          "Because they are made of plastic"
        ],
        answer: 1
      },
      {
        q: "What feature helps the Lynx walk on deep snow?",
        options: [
          "Super light bones",
          "Extra-wide furry paws that act like snowshoes",
          "Tiny wings on its back"
        ],
        answer: 1
      }
    ],
    rewards: {
      badge: "Taiga Tracker 🏆",
      sticker: "🐺 Wolf Sticker",
      outfit: "Camping Compass 🧭"
    }
  }
};

const travelVehicles = {
  rainforest: { icon: "🛶", name: "Canoe" },
  desert: { icon: "🚙", name: "Jeep" },
  grassland: { icon: "🎈", name: "Hot Air Balloon" },
  tundra: { icon: "🚂", name: "Train" },
  savanna: { icon: "🚙", name: "Jeep" },
  temperate: { icon: "🚶", name: "Hiking Boots" },
  taiga: { icon: "🚢", name: "Steamboat" }
};

// ----------------------------------------------------
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ----------------------------------------------------

let gameState = {
  explorerName: "Super Explorer",
  coins: 0,
  stars: 0,
  unlockedBiomes: ["rainforest"],
  discoveredItems: [],
  badges: [],
  currentScreen: "screen-welcome",
  currentSeason: "summer",
  currentTimeOfDay: "day",
  audioOn: false,
  voiceOn: true,
  dyslexiaFontOn: false
};

// Load progress from LocalStorage
function loadGameProgress() {
  const saved = localStorage.getItem("nature_adventure_save");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      gameState = { ...gameState, ...parsed };
      // Sync DOM elements
      document.getElementById("coin-count").innerText = gameState.coins;
      document.getElementById("star-count").innerText = gameState.stars;
      document.getElementById("explorer-name").value = gameState.explorerName;
      updateMapNodes();
    } catch (e) {
      console.error("Save state corrupt, starting fresh");
    }
  }
}

// Save progress to LocalStorage
function saveGameProgress() {
  localStorage.setItem("nature_adventure_save", JSON.stringify(gameState));
}

// ----------------------------------------------------
// 3. SOUND & SPEECH SYNTHESIS ENGINE
// ----------------------------------------------------

let currentBGMusic = null;

function toggleMusic() {
  gameState.audioOn = !gameState.audioOn;
  const audioBtn = document.getElementById("btn-audio");
  playClickSound();

  if (gameState.audioOn) {
    audioBtn.classList.add("active");
    // Start ambient background sound
    startAmbientMusic();
  } else {
    audioBtn.classList.remove("active");
    stopAmbientMusic();
  }
  saveGameProgress();
}

function startAmbientMusic() {
  const birds = document.getElementById("sound-birds");
  if (birds) {
    birds.volume = 0.2;
    birds.play().catch(e => console.log("Audio block: user interaction required first"));
  }
}

function stopAmbientMusic() {
  const birds = document.getElementById("sound-birds");
  const rain = document.getElementById("sound-rain");
  if (birds) birds.pause();
  if (rain) rain.pause();
}

function toggleVoice() {
  gameState.voiceOn = !gameState.voiceOn;
  const voiceBtn = document.getElementById("btn-voice");
  playClickSound();

  if (gameState.voiceOn) {
    voiceBtn.classList.add("active");
    speakText("Voice Guide is active!");
  } else {
    voiceBtn.classList.remove("active");
    window.speechSynthesis.cancel();
  }
  saveGameProgress();
}

function speakText(text) {
  if (!gameState.voiceOn) return;
  // Cancel previous speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; // Slightly slower for kids
  utterance.pitch = 1.15; // Friendly high pitch
  window.speechSynthesis.speak(utterance);
}

function speakTextById(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    speakText(el.innerText);
  }
}

function playClickSound() {
  const sfx = document.getElementById("sound-click");
  if (sfx) {
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  }
}

function playSuccessSound() {
  const sfx = document.getElementById("sound-success");
  if (sfx) {
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  }
}

function playChimeSound() {
  const sfx = document.getElementById("sound-chime");
  if (sfx) {
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  }
}

// ----------------------------------------------------
// 4. ACCESSIBILITY CONTROLLER
// ----------------------------------------------------

function toggleDyslexiaFont() {
  gameState.dyslexiaFontOn = !gameState.dyslexiaFontOn;
  const btn = document.getElementById("btn-dyslexia");
  playClickSound();

  if (gameState.dyslexiaFontOn) {
    btn.classList.add("active");
    document.body.classList.add("dyslexia-active");
    document.body.classList.remove("dyslexia-default");
  } else {
    btn.classList.remove("active");
    document.body.classList.remove("dyslexia-active");
    document.body.classList.add("dyslexia-default");
  }
  saveGameProgress();
}

// ----------------------------------------------------
// 5. NAVIGATION & SCREEN RENDERING
// ----------------------------------------------------

function showScreen(screenId) {
  document.querySelectorAll(".game-screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
  gameState.currentScreen = screenId;
  saveGameProgress();
}

function startAdventure() {
  playClickSound();
  const nameInput = document.getElementById("explorer-name").value.trim();
  if (nameInput) {
    gameState.explorerName = nameInput;
  }
  
  showScreen("screen-map");
  speakText("Welcome to the World Map! Select a Biome to begin your adventure!");
}

function updateMapNodes() {
  Object.keys(biomesData).forEach(key => {
    const node = document.getElementById(`node-${key}`);
    if (node) {
      if (gameState.unlockedBiomes.includes(key)) {
        node.classList.remove("locked");
        node.classList.add("unlocked");
        node.querySelector(".biome-status").innerText = "Unlocked";
      } else {
        node.classList.add("locked");
        node.classList.remove("unlocked");
        node.querySelector(".biome-status").innerText = "🔒 Locked";
      }
    }
  });
}

function selectBiome(biomeKey) {
  if (!gameState.unlockedBiomes.includes(biomeKey)) {
    playClickSound();
    speakText("This biome is locked. Complete the previous biomes to unlock it!");
    return;
  }

  // Animation Travel on Map
  playChimeSound();
  const vehicle = document.getElementById("travel-vehicle");
  const targetNode = document.getElementById(`node-${biomeKey}`);
  const mapScreen = document.getElementById("screen-map");
  
  if (vehicle && targetNode && mapScreen) {
    const targetRect = targetNode.getBoundingClientRect();
    const mapRect = mapScreen.getBoundingClientRect();
    
    // Set vehicle icon based on biome destination
    const vehicleConfig = travelVehicles[biomeKey] || { icon: "🚙" };
    vehicle.innerText = vehicleConfig.icon;
    vehicle.style.display = "block";
    
    // Move to starting position if first run, or move straight to node
    vehicle.style.left = `${targetRect.left - mapRect.left + (targetRect.width / 2)}px`;
    vehicle.style.top = `${targetRect.top - mapRect.top + (targetRect.height / 2)}px`;
  }

  speakText(`Traveling to the ${biomesData[biomeKey].title}!`);

  setTimeout(() => {
    loadBiome(biomeKey);
  }, 1600);
}

// ----------------------------------------------------
// 6. BIOME EXPLORATION & WEATHER DYNAMICS
// ----------------------------------------------------

let activeBiomeKey = "rainforest";

function loadBiome(biomeKey) {
  activeBiomeKey = biomeKey;
  const data = biomesData[biomeKey];
  
  // Set UI Details
  document.getElementById("explorer-biome-title").innerText = data.title;
  
  const env = document.getElementById("biome-environment");
  env.className = ""; // Reset
  env.classList.add(data.bgClass);
  
  // Reset Season & Time of Day to Defaults
  setSeason(data.defaultSeason || "summer", true);
  setTimeOfDay("day", true);
  
  // Render Clickable Creatures
  renderBiomeItems(biomeKey);
  
  // Show Screen
  showScreen("screen-explorer");
  
  // Play Welcome Narration
  speakText(data.narrative);

  // Play Sound Effects
  if (gameState.audioOn) {
    const rainSound = document.getElementById("sound-rain");
    if (biomeKey === "rainforest" && rainSound) {
      rainSound.volume = 0.15;
      rainSound.play().catch(() => {});
    }
  }
}

function renderBiomeItems(biomeKey) {
  const container = document.getElementById("clickable-elements-container");
  container.innerHTML = ""; // Clear
  
  const items = biomesData[biomeKey].items;
  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "clickable-item";
    el.id = `item-${item.id}`;
    el.style.left = `${item.x}%`;
    el.style.top = `${item.y}%`;
    el.innerText = item.icon;
    el.title = item.name;
    
    if (gameState.discoveredItems.includes(item.id)) {
      el.classList.add("discovered");
    }
    
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      discoverItem(item);
    });
    
    container.appendChild(el);
  });
}

function setSeason(season, skipSFX = false) {
  gameState.currentSeason = season;
  if (!skipSFX) playClickSound();
  
  // Update Season Badge
  const badge = document.getElementById("current-season-badge");
  const seasonLabels = { spring: "🌸 Spring", summer: "☀️ Summer", autumn: "🍂 Autumn", winter: "❄️ Winter" };
  badge.innerText = seasonLabels[season];
  
  // Visual Adjustments (Filters, overlays, particles)
  const weather = document.getElementById("weather-effect");
  weather.className = ""; // Reset
  
  // Stop background rain/wind audio if not raining
  const rainAudio = document.getElementById("sound-rain");
  if (rainAudio) rainAudio.pause();
  
  if (season === "winter") {
    weather.classList.add("effect-snow");
    speakText("Winter is here! Brrr, it is freezing cold and covered in white snow!");
  } else if (season === "spring") {
    speakText("Spring has arrived! Flowers are starting to bloom and baby animals are born!");
  } else if (season === "autumn") {
    weather.classList.add("effect-leaves");
    speakText("Autumn time! Colorful leaves are floating down from deciduous trees!");
  } else {
    // Summer or Rain
    if (activeBiomeKey === "rainforest") {
      weather.classList.add("effect-rain");
      if (gameState.audioOn && rainAudio) {
        rainAudio.volume = 0.15;
        rainAudio.play().catch(() => {});
      }
      speakText("Summer showers! The rainforest gets heavy rain to help the lush green plants grow!");
    } else {
      speakText("Summer is warm and bright! The sunshine makes all the wildlife highly active!");
    }
  }

  // Update button active state
  document.querySelectorAll(".season-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.classList.contains(`${season}-btn`)) {
      btn.classList.add("active");
    }
  });
  
  saveGameProgress();
}

function setTimeOfDay(time, skipSFX = false) {
  gameState.currentTimeOfDay = time;
  if (!skipSFX) playClickSound();
  
  const overlay = document.getElementById("time-overlay");
  overlay.className = "";
  
  if (time === "night") {
    overlay.classList.add("night-time");
    speakText("Night falls. Nocturnal animals wake up to explore!");
  } else {
    overlay.classList.add("day-time");
    speakText("Good morning! The sun rises over the biome.");
  }

  // Toggle active button highlight
  document.querySelectorAll(".time-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.innerText.includes("Day") && time === "day") btn.classList.add("active");
    if (btn.innerText.includes("Night") && time === "night") btn.classList.add("active");
  });

  saveGameProgress();
}

function goToMap() {
  playClickSound();
  showScreen("screen-map");
}

// ----------------------------------------------------
// 7. ITEM DISCOVERY & COLLECTION
// ----------------------------------------------------

function discoverItem(item) {
  playSuccessSound();
  
  const isNew = !gameState.discoveredItems.includes(item.id);
  if (isNew) {
    gameState.discoveredItems.push(item.id);
    gameState.coins += 10;
    document.getElementById("coin-count").innerText = gameState.coins;
    
    // Add mark
    const el = document.getElementById(`item-${item.id}`);
    if (el) el.classList.add("discovered");
  }
  
  // Show Explorer Notebook with details directly
  openBookDetails(item);
  saveGameProgress();
}

// ----------------------------------------------------
// 8. NATURE NOTEBOOK DIALOGS
// ----------------------------------------------------

let currentBookTab = "animals";

function openBook() {
  playClickSound();
  const modal = document.getElementById("book-modal");
  modal.classList.add("active");
  renderBookGrid();
}

function closeModal(modalId) {
  playClickSound();
  document.getElementById(modalId).classList.remove("active");
}

function switchBookTab(tabName) {
  playClickSound();
  currentBookTab = tabName;
  
  document.querySelectorAll(".book-tabs .tab-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase().includes(tabName)) {
      btn.classList.add("active");
    }
  });
  
  renderBookGrid();
}

function renderBookGrid() {
  document.getElementById("book-grid").style.display = "grid";
  document.getElementById("book-details").style.display = "none";
  
  const grid = document.getElementById("book-grid");
  grid.innerHTML = "";
  
  if (currentBookTab === "items") {
    // Render rewards/outfits
    const rewardsList = [
      { id: "badge_rf", name: "Rainforest Badge", icon: "🏆", biome: "rainforest", desc: "Awarded for completing the Rainforest quiz!" },
      { id: "badge_ds", name: "Desert Badge", icon: "🏆", biome: "desert", desc: "Awarded for completing the Desert quiz!" },
      { id: "badge_gl", name: "Grassland Badge", icon: "🏆", biome: "grassland", desc: "Awarded for completing the Grassland quiz!" },
      { id: "hat_ds", name: "Explorer Hat", icon: "🤠", biome: "rainforest", desc: "Style item unlocked!" },
      { id: "glasses_ds", name: "Explorer Goggles", icon: "🥽", biome: "desert", desc: "Desert sand-protection gear!" },
      { id: "bag_gl", name: "Green Backpack", icon: "🎒", biome: "grassland", desc: "Pack for wild travels!" }
    ];
    
    rewardsList.forEach(item => {
      const el = document.createElement("div");
      const isUnlocked = gameState.badges.includes(item.id) || gameState.discoveredItems.length > 5; // Unlocks some gear early
      
      el.className = `discovery-card ${isUnlocked ? '' : 'locked'}`;
      el.innerHTML = `
        <span class="card-icon">${item.icon}</span>
        <h4>${item.name}</h4>
      `;
      
      if (isUnlocked) {
        el.onclick = () => {
          speakText(`${item.name}. ${item.desc}`);
        };
      } else {
        el.onclick = () => {
          speakText("This item is locked. Earn it by finishing quizzes and exploration!");
        };
      }
      grid.appendChild(el);
    });
    return;
  }
  
  // Render Animals / Plants
  Object.keys(biomesData).forEach(biomeKey => {
    const biome = biomesData[biomeKey];
    biome.items.forEach(item => {
      if (item.type !== currentBookTab) return;
      
      const isDiscovered = gameState.discoveredItems.includes(item.id);
      const el = document.createElement("div");
      el.className = `discovery-card ${isDiscovered ? '' : 'locked'}`;
      el.innerHTML = `
        <span class="card-icon">${isDiscovered ? item.icon : '❓'}</span>
        <h4>${isDiscovered ? item.name : 'Unknown'}</h4>
      `;
      
      if (isDiscovered) {
        el.onclick = () => openBookDetails(item);
      } else {
        el.onclick = () => {
          speakText("This discovery is locked. Find it inside the biome explorer screen!");
        };
      }
      
      grid.appendChild(el);
    });
  });
}

function openBookDetails(item) {
  document.getElementById("book-modal").classList.add("active");
  document.getElementById("book-grid").style.display = "none";
  
  const details = document.getElementById("book-details");
  details.style.display = "block";
  
  // Fill details view
  document.getElementById("detail-icon").innerText = item.icon;
  document.getElementById("detail-name").innerText = item.name;
  
  const biomeTitle = biomesData[activeBiomeKey].title;
  document.getElementById("detail-biome").innerText = biomeTitle;
  document.getElementById("detail-habitat").innerText = biomeTitle;
  document.getElementById("detail-climate").innerText = biomesData[activeBiomeKey].climate;
  document.getElementById("detail-fact").innerText = item.fact;
  
  // Narrate
  speakText(`${item.name}. Discovery facts: ${item.fact}`);
}

function hideBookDetails() {
  playClickSound();
  renderBookGrid();
}

// ----------------------------------------------------
// 9. MINI-GAME LOGIC (DRAG & DROP)
// ----------------------------------------------------

let miniGameScore = 0;

function openMiniGame() {
  playClickSound();
  const modal = document.getElementById("game-modal");
  const data = biomesData[activeBiomeKey].game;
  
  document.getElementById("game-title").innerText = data.title;
  document.getElementById("game-feedback").innerText = data.instruction;
  
  const workspace = document.getElementById("game-workspace");
  workspace.innerHTML = `
    <div class="matching-game">
      <div class="drag-items-container" id="drag-box">
        <!-- Draggables loaded -->
      </div>
      <div class="drop-targets-container" id="drop-box">
        <!-- Drop targets loaded -->
      </div>
    </div>
  `;
  
  // Load targets
  const dropBox = document.getElementById("drop-box");
  data.targets.forEach(t => {
    const el = document.createElement("div");
    el.className = "drop-target";
    el.id = `target-${t.id}`;
    el.dataset.id = t.id;
    el.innerHTML = `<span>${t.label}</span>`;
    
    // Add dragover/drop listeners
    el.addEventListener("dragover", dragOver);
    el.addEventListener("dragleave", dragLeave);
    el.addEventListener("drop", dropItem);
    
    dropBox.appendChild(el);
  });

  // Load draggables
  const dragBox = document.getElementById("drag-box");
  data.draggables.forEach(d => {
    const el = document.createElement("div");
    el.className = "drag-item";
    el.draggable = true;
    el.id = d.id;
    el.innerText = d.name;
    el.dataset.match = d.match;
    
    el.addEventListener("dragstart", dragStart);
    
    dragBox.appendChild(el);
  });
  
  // Narrate instructions
  speakText(data.instruction);
  
  modal.classList.add("active");
  document.getElementById("game-submit-btn").style.display = "block";
}

let draggedElement = null;

function dragStart(e) {
  draggedElement = e.target;
}

function dragOver(e) {
  e.preventDefault();
  e.target.closest(".drop-target").classList.add("hovered");
}

function dragLeave(e) {
  e.target.closest(".drop-target").classList.remove("hovered");
}

function dropItem(e) {
  e.preventDefault();
  const target = e.target.closest(".drop-target");
  target.classList.remove("hovered");
  
  if (draggedElement) {
    const itemClone = document.createElement("div");
    itemClone.className = "filled-item";
    itemClone.innerText = draggedElement.innerText;
    itemClone.dataset.match = draggedElement.dataset.match;
    itemClone.dataset.targetId = target.dataset.id;
    
    // Remove original draggable
    draggedElement.remove();
    draggedElement = null;
    
    target.appendChild(itemClone);
    playClickSound();
  }
}

function checkMiniGame() {
  const data = biomesData[activeBiomeKey].game;
  const targets = document.querySelectorAll(".drop-target");
  let correctCount = 0;
  let totalMatches = data.draggables.length;
  
  targets.forEach(t => {
    const filledItems = t.querySelectorAll(".filled-item");
    filledItems.forEach(item => {
      if (item.dataset.match === t.dataset.id) {
        correctCount++;
      }
    });
  });

  if (correctCount === totalMatches) {
    playSuccessSound();
    gameState.coins += 50;
    document.getElementById("coin-count").innerText = gameState.coins;
    document.getElementById("game-feedback").innerText = "Fantastic! You completed the ecosystem challenge! +50 Coins! 🪙";
    speakText("Fantastic! You completed the ecosystem challenge! You earned 50 Nature Coins.");
    
    setTimeout(() => {
      document.getElementById("game-modal").classList.remove("active");
    }, 2000);
  } else {
    playClickSound();
    document.getElementById("game-feedback").innerText = "Oops! Some components are in the wrong place. Let's try again!";
    speakText("Oops! Some items are in the wrong place. Let's try again!");
    
    // Reload Mini-Game to reset
    setTimeout(() => {
      openMiniGame();
    }, 1500);
  }
  
  saveGameProgress();
}

// ----------------------------------------------------
// 10. BIOME QUIZ ENGINE
// ----------------------------------------------------

let currentQuestionIndex = 0;
let quizScore = 0;

function openQuiz() {
  playClickSound();
  currentQuestionIndex = 0;
  quizScore = 0;
  
  const modal = document.getElementById("quiz-modal");
  modal.classList.add("active");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const data = biomesData[activeBiomeKey].quiz[currentQuestionIndex];
  
  // Progress dot tracker
  const dots = document.querySelectorAll("#quiz-progress-dots .dot");
  dots.forEach((dot, idx) => {
    dot.className = "dot";
    if (idx === currentQuestionIndex) dot.classList.add("active");
    if (idx < currentQuestionIndex) dot.classList.add("correct");
  });
  
  document.getElementById("quiz-question-text").innerText = data.q;
  document.getElementById("quiz-feedback").innerText = `Question ${currentQuestionIndex + 1} of 3`;
  
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";
  
  data.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.innerText = opt;
    btn.onclick = () => submitAnswer(idx, btn);
    container.appendChild(btn);
  });
  
  // Speech question
  speakText(`Question: ${data.q}`);
}

function submitAnswer(selectedIndex, selectedBtn) {
  const data = biomesData[activeBiomeKey].quiz[currentQuestionIndex];
  const correctIndex = data.answer;
  
  // Disable option buttons click
  document.querySelectorAll(".quiz-opt-btn").forEach(btn => btn.disabled = true);
  
  if (selectedIndex === correctIndex) {
    selectedBtn.classList.add("correct");
    playSuccessSound();
    quizScore++;
    document.getElementById("quiz-feedback").innerText = "Spot on! That is correct! 🌟";
    speakText("Spot on! That is correct!");
  } else {
    selectedBtn.classList.add("wrong");
    // Show correct answer in green
    const btns = document.querySelectorAll(".quiz-opt-btn");
    btns[correctIndex].classList.add("correct");
    playClickSound();
    document.getElementById("quiz-feedback").innerText = "Not quite! Remember that for next time!";
    speakText("Not quite! Let's check the correct answer.");
  }
  
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 3) {
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }, 2200);
}

function finishQuiz() {
  gameState.stars += quizScore;
  document.getElementById("star-count").innerText = gameState.stars;
  
  // If passed (2 out of 3 correct)
  if (quizScore >= 2) {
    playSuccessSound();
    
    // Unlock next biome if any
    unlockNextBiome();
    
    // Reward badge
    const badgeId = `badge_${activeBiomeKey}`;
    if (!gameState.badges.includes(badgeId)) {
      gameState.badges.push(badgeId);
      showRewardBadge(badgeId);
    } else {
      speakText(`Congratulations! You scored ${quizScore} out of 3 stars!`);
      document.getElementById("quiz-modal").classList.remove("active");
    }
  } else {
    speakText(`You earned ${quizScore} stars. Try the quiz again to unlock the next world!`);
    document.getElementById("quiz-modal").classList.remove("active");
  }
  
  saveGameProgress();
}

function unlockNextBiome() {
  const keys = Object.keys(biomesData);
  const currentIdx = keys.indexOf(activeBiomeKey);
  
  if (currentIdx !== -1 && currentIdx < keys.length - 1) {
    const nextKey = keys[currentIdx + 1];
    if (!gameState.unlockedBiomes.includes(nextKey)) {
      gameState.unlockedBiomes.push(nextKey);
      updateMapNodes();
    }
  }
}

// ----------------------------------------------------
// 11. REWARDS & BADGES DISPLAY
// ----------------------------------------------------

function showRewardBadge(badgeId) {
  document.getElementById("quiz-modal").classList.remove("active");
  
  const banner = document.getElementById("reward-banner");
  const data = biomesData[activeBiomeKey].rewards;
  
  document.getElementById("reward-title").innerText = "New Badge Unlocked!";
  document.getElementById("reward-desc").innerText = `Congratulations! You are officially a ${data.badge}! Unlocked: ${data.sticker} & ${data.outfit}`;
  
  banner.classList.add("active");
  playChimeSound();
  
  speakText(`Excellent job! You unlocked the ${data.badge} badge, plus new clothing stickers!`);
}

function dismissReward() {
  playClickSound();
  document.getElementById("reward-banner").classList.remove("active");
  showScreen("screen-map");
}

// ----------------------------------------------------
// 12. INITIALIZATION
// ----------------------------------------------------

window.addEventListener("DOMContentLoaded", () => {
  loadGameProgress();
});
