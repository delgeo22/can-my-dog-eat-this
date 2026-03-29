const USER_ADDED_FOODS_RAW = String.raw`
"Kefir"/dog friendly, "Kefir" is a fermented milk product that is rich in probiotics and vitamins. It is a great source of protein and calcium for dogs. Ensure only plain kefir is given to dogs. 
/* Minimal, dependency-free SPA logic */"Cheese"/friendly with caution, "Cheese" is a great source of protein and calcium for dogs. However, it should be given in moderation as it is high in calories and can cause digestive issues if given in large quantities. "Cheese" should be given in small quantities and should be avoided if the dog has a lactose intolerance.
"Mangoes"/friendly with caution, "Mangoes" are a great source of vitamin C and fibre for dogs. However, they should be given in moderation as they are high in sugar and can cause digestive issues if given in large quantities. "Mangoes" should be given in small quantities and should be avoided if the dog has a sensitive stomach.
"Apples"/dog friendly, "Apples" are a great source of fibre and vitamin C for dogs. They are great for keeping their breath fresh and their teeth clean. However, they should be given in moderation as they are high in sugar and can cause digestive issues if given in large quantities. "Apples" should be given in small quantities and should be avoided if the dog has a sensitive stomach.
"Blueberries"/dog friendly, "Blueberries" are a superfood, they're loaded with antioxidants, fibre and vitamin C. They support brain health and fight cell damage.
"Greek yogurt"/dog friendly with caution, "Greek yogurt" is a great source of protein and calcium for dogs. However, it should be given in moderation and can cause digestive issues if given in large quantities. Avoid if the dog is lactose intolerance. Always ensure it is plain and low fat with no added sugar.
"Coconut oil"/dog friendly with caution, "Coconut oil" is a great source of healthy fats and for teeth cleaning. However, it should be given in small doses and good to use in cooking. Also great applied to the skin and hair especially for any irritated areas. 
"Carrots"/dog friendly, "Carrots" are rich in fibre and vitamin KeyboardEvent. Great for supporting overall health and make a natural alternative to dental sticks.
"Eggs"/dog friendly, "Eggs" are a proteing powerhouse filled with amino acids and healthy fats. Quail, duck or chicken eggs are safest choices. Best served cooked, raw can be fed but not ideal for dogs who have a sensitive stomach or not accustomed to raw foods.
"Salmon"/dog friendly, "Salmon" is a great source of omega-3 fatty acids and protein for dogs. It is a great source of vitamins and minerals. However, it should be given in moderation as it is high in calories.
"Honey"/dog friendly with caution, "Honey" is a great source of antioxidants and vitamins for dogs. However, it should be given in moderation as it is high in sugar. 
"Pineapple"/dog friendly, "Pineapple" is a great source of vitamin C and fibre for dogs. It is a great source of vitamins and minerals. However, it should be given in moderation as it is high in sugar. 
"Papaya"/dog friendly, "Papaya" is a great source of vitamin C and fibre for dogs. It is a great source of vitamins and minerals. However, it should be given in moderation as it is high in sugar. 
"Strawberries"/dog friendly, "Strawberries" are a great source of vitamin C and fibre for dogs. It is a great source of vitamins and minerals. However, it should be given in moderation as it is high in sugar. 
"Watermelon"/dog friendly, "Watermelon" is a great source of water and vitamin C for dogs. Seeds are toxic to dogs.
"Bell peppers"/dog friendly, "Bell peppers" are a great source of vitamin A, C and E. It is a great source of vitamins and minerals. Perfect to fill with dog safe treats and freeze for a cooling natural treat.
"Courgettes/Marrow"/dog friendly, "Courgettes/Marrow" are a perfect low calorie, fibre rich food high in vitamin C and potassium. Best served cooked for sensitive tummies.
"Green beans"/dog friendly, "Green beans" are fibre rich and filled with vitamins A, C and LargestContentfulPaint. Serve cooked and finely chopped.
"Cashews"/dog friendly with caution, "Cashews" can be fed in small doses sparingly. Ensure they are unsalted and unflavoured.
"White fish"/dog friendly, "White fish" is a great low-fat high protein source with lots of omega-3. Serve plain or with dog friendly seasoning and ensure there are no bones. Great for upset tummies.
"Milk"/dog friendly, "Milk" whilst generally dog friendly for those without a lactose allergy, goat's milk is best to serve as it's more gentle.
"Peanut butter"/dog friendly with caution, "Peanut butter" is a tasty safe treat high in protein but also high in fat. Serve sparingly and ensure it is plain unsalted with no added oils or xylitol.
"Popcorn"/dog friendly with caution, Unsalted, unbuttered, air-popped "Popcorn" is ok in moderation. Be sure to pop the kernels all the way before serving.
"Tuna"/dog friendly with caution, Dogs can eat "tuna", but only in small amounts. In moderation, cooked, fresh tuna is an excellent source of omega-3 fatty acids, which promote heart and eye health. As for canned tuna, it contains small amounts of mercury and sodium, which should be avoided in excess. A little bit of canned tuna and tuna juice here and there is fine — prepared only in water, not oil — as long as it doesn't contain any spices.
"Turkey"/dog friendly, great alternative for those with chicken allergy. Remove excess skin and fat before serving and ensure there are no bones.
"Macadamia Nuts"/toxic, "Macadamia nuts" are extremely poisonous foods for dogs. They can cause vomiting, increased body temperature, inability to walk and lethargy. 
"Cranberries"/dog friendly, Fresh "Cranberries" are best, especially cooked in water. 
"Oats or Oatmeal"/dog friendly, Great source of fibre, serve cooked only.
"Rice"/dog friendly, Plain cooked white "Rice" can be great for upset stomachs to use within a gastro diet.
"Beef"/dog friendly, Lean "Beef" is a high quality protein choice with amino acids and B vitamins.
"Cauliflower"/dog friendly, "Cauliflower" is great source of fiber, vitamin C, and vitamin K. It supports digestion and the immune system, though it should be served in moderation to avoid gas.
"Dates"/dog friendly with caution, While they provide fibre and vitamins, they are very high in natural sugar and should only be given as an occasional treat. The pits must be removed as they are a choking hazard and can cause intestinal blockages.
"Camel"/dog friendly: An excellent, lean novel protein that is often hypoallergenic. It is high in protein and lower in fat than beef, making it ideal for dogs with common food sensitivities or weight management needs.
"Broccoli"/dog friendly: High in fibre and vitamin C; can be served raw or steamed. It should make up less than 10% of a dog's daily intake to avoid gastric irritation.
"Cantaloupe"/dog friendly: Packed with nutrients and rehydrating. It is high in beta-carotene, which is excellent for eye health.
"Cucumber"/dog friendly: A perfect low-calorie, hydrating snack.
"Lamb"/dog friendly: A nutrient-dense protein source rich in essential fatty acids and minerals like zinc, which supports skin and coat health.
"Pears"/dog friendly: High in copper and vitamins C and K. Ensure the core and seeds are removed.
"Spinach"/dog friendly with caution: While high in iron, it also contains oxalates, which can interfere with calcium absorption and potentially lead to kidney issues if consumed in very large quantities over time.
"Potatoes"/dog friendly with caution: Must always be served fully cooked and plain. Never feed raw potatoes or any part of the potato plant, as they contain solanine, which is toxic to dogs. Opt for sweet potato as a better alternative.
"Shrimp"/dog friendly with caution: A good source of B-vitamins and phosphorus. It must be fully cooked and completely deveined with the shell and tail removed to prevent choking.
"Avocado"/toxic, Contains persin, which can cause vomiting and diarrhea in dogs.
"Walnuts"/toxic, Especially black walnuts, which can harbor molds that produce tremorgenic mycotoxins. These can cause tremors and seizures in dogs.
"Turmeric"/dog friendly, Anti-inflammatory and great for joint health, ok to include a small amount of ground black pepper when cooking to activate the tumeric.
"Ginger"/dog friendly, Excellent for nausea and digestive disruptions.
"Parsley"/dog friendly, Freshens breath and supports urinary health.
"Basil"/dog friendly, Rich in antioxidants and antiviral properties.
"Rosemary"/dog friendly, High in iron, calcium and vitamin B6.
"Dill"/dog friendly, Anti-microbial and helps with flatulence.
"Nutmeg"/toxic, Contains myristicin, which can cause hallucinations, seizures and tremors.
"Cottage Cheese"/dog friendly: A great source of protein and calcium. Because it is lower in fat and lactose than many other cheeses, it is often used in bland diets for dogs recovering from upset stomachs. Ensure plain form is fed only.
"Celery"/dog friendly: Extremely low-calorie and hydrating. The crunchy texture helps brush teeth and can significantly improve bad breath.
"Pumpkin Seeds"/dog friendly: Contain the amino acid cucurbitin, which has been shown to paralyse and eliminate intestinal parasites like worms. They are also rich in magnesium and healthy fats.
"Quinoa"/dog friendly: A gluten-free pseudo-cereal that provides a complete protein profile. It is a healthier alternative to rice or wheat in home-cooked meals.
"Chickpeas (Garbanzo Beans)"/dog friendly with caution: A good source of plant protein and fibre. They must be thoroughly cooked and plain.
"Chia Seeds"/dog friendly with caution: A powerhouse of Omega-3 fatty acids. However, they absorb a massive amount of water; they should be soaked before serving to prevent them from expanding in the throat or gut.
"Raspberries"/dog friendly with caution: Contain high levels of antioxidants but also have small amounts of naturally occurring xylitol. Limit intake to a few berries at a time, especially for small breeds.
"Garlic"/toxic (with nuance): Contains thiosulfates which can cause oxidative damage to red blood cells, leading to anemia. While small, controlled amounts are used in some commercial pet supplements for heart health or flea prevention, household garlic (raw, cooked, or powdered) is significantly more concentrated. It is safest to categorize it as toxic for general database purposes due to the high risk of improper dosing.
"Dragon Fruit"/dog friendly: A nutrient-dense, non-toxic exotic fruit. It is high in fibre and vitamin C, which supports the immune system. Only serve the soft flesh.
"Blackberries"/dog friendly: Low in sugar and loaded with antioxidants, fibre and vitamin C. They are excellent for brain health in aging dogs.
"Kiwi"/dog friendly with caution: High in vitamin C and potassium. However, the skin and seeds contain high amounts of fibre that can cause digestive upset; it is best served peeled and in small quantities.
"Nectarines"/dog friendly with caution: High in beta-carotene and fibre. You must remove the pit entirely.
"Guava"/dog friendly with caution: A good source of vitamins A and C. While the flesh is safe, the seeds are very hard and can be difficult for some dogs to digest, so they should be removed or the fruit should be mashed.
"Pomegranate"/dog friendly with caution: While not technically toxic, the seeds are very difficult for dogs to digest and can cause severe stomach upset or vomiting. Mostly recommend avoiding it or only giving a very small amount of the juice.
"Venison"/dog friendly: A lean, high-protein meat that is lower in fat than beef. It is often used for dogs with food allergies to more common proteins like chicken.
"Duck"/dog friendly: A rich source of protein and amino acids. It is higher in fat than turkey or chicken, making it excellent for active dogs, though skin should be removed to avoid pancreatitis.
"Mussels"/dog friendly: A superfood for joints. They are a natural source of glucosamine and chondroitin, which help reduce inflammation and support mobility. They must be served cooked and plain.
"Rabbit"/dog friendly: An extremely lean, high-protein meat that is low in cholesterol. It is considered one of the most hypoallergenic meats for dogs.
"Bok Choy"/dog friendly: A low-calorie leafy green that provides vitamins A, C and K. It is excellent for bone health and heart function.
"Okra/Bamia"/dog friendly: Contains vitamins C, B and potassium. The mucilage can actually help soothe the digestive tract, though it should be served plain and chopped.
"Brussels Sprouts"/dog friendly: High in fibre and antioxidants. Like cauliflower, they can cause significant gas, so they should be introduced slowly and always cooked.
"Parsnips"/dog friendly: Rich in folic acid and potassium. They support healthy metabolism and kidney function.
"Edamame"/dog friendly with caution: Safe if served plain and out of the pod. However, because it is soy-based, some dogs may have sensitivities or allergies.
"Beetroot"/dog friendly with caution, Fresh beetroot is a great source of fibre, vitamins and minerals, but it is high in oxalates and natural sugars, so it should be fed in moderation to avoid kidney issues or weight gain.
"Oranges"/dog friendly with caution, While a good source of vitamin C and potassium, they are high in sugar and acid; they must be peeled and all seeds removed to prevent choking or digestive upset.
"Mushrooms"/dog friendly with caution, Plain, washed and cooked store-bought mushrooms are safe and offer B vitamins and potassium, but wild varieties are strictly toxic and can be life-threatening.
"Coconut"/dog friendly with caution, The lauric acid in coconut can help fight off viruses and reduce inflammation, but the high fat and calorie content means it should only be an occasional treat.
"Sardines"/dog friendly, Packed with omega-3 fatty acids, protein and vitamin D, Sardines are excellent for supporting a dog's skin, coat and joint health.
"Olives"/dog friendly with caution, Plain olives contain healthy fats and antioxidants, but they must have the pits removed to avoid choking and should never be the canned or brined versions due to high sodium levels.
"Coconut milk"/dog friendly with caution, Fine in very small amounts, but it is high in fat and should be fed sparingly.
`;

function normalizeAddedStatus(raw) {
  const s = String(raw || "").toLowerCase();
  if (s.includes("toxic")) return "toxic";
  if (s.includes("caution")) return "caution";
  return "good";
}

function parseAddedFoods(raw) {
  const lines = String(raw || "").split("\n").map((line) => line.trim()).filter(Boolean);
  const foods = [];

  for (const line of lines) {
    const firstQuote = line.indexOf('"');
    if (firstQuote === -1) continue;
    const secondQuote = line.indexOf('"', firstQuote + 1);
    if (secondQuote === -1) continue;
    const slash = line.indexOf("/", secondQuote + 1);
    if (slash === -1) continue;

    const name = line.slice(firstQuote + 1, secondQuote).trim();
    if (!name) continue;

    const tail = line.slice(slash + 1).trim();
    const sepIdx = tail.search(/[:,]/);
    const statusRaw = sepIdx === -1 ? tail : tail.slice(0, sepIdx);
    const explanation = (sepIdx === -1 ? "" : tail.slice(sepIdx + 1)).trim();

    foods.push({
      name,
      status: normalizeAddedStatus(statusRaw),
      explanation: explanation || `${name} can be fed based on status guidance and portion control.`
    });
  }

  return foods;
}

const ADDED_FOODS = parseAddedFoods(USER_ADDED_FOODS_RAW);

const BASE_DB = [
  {
    name: "Grapes",
    status: "toxic",
    explanation:
      "Grapes (and raisins) can cause acute kidney failure in some dogs, and even small amounts may be dangerous. If your dog ate any, call a vet right away—don’t wait for symptoms."
  },
  {
    name: "Raisins",
    status: "toxic",
    explanation:
      "Raisins are strongly linked to kidney failure in dogs, and sensitivity varies widely by individual. Treat any ingestion as urgent and contact a veterinarian immediately."
  },
  {
    name: "Chocolate",
    status: "toxic",
    explanation:
      "Chocolate contains theobromine and caffeine, which dogs metabolize poorly and which can cause vomiting, tremors, and heart issues. Dark and baking chocolate are especially dangerous even in smaller amounts."
  },
  {
    name: "Onion",
    status: "toxic",
    explanation:
      "Onions (raw, cooked, or powdered) can damage a dog’s red blood cells and lead to anemia. Effects can be delayed, so contact your vet if your dog ate more than a tiny taste."
  },
  {
    name: "Garlic",
    status: "toxic",
    explanation:
      "Garlic is in the allium family and can cause red blood cell damage in dogs. Small crumbs are less likely to be serious, but ingestion beyond a taste warrants veterinary guidance."
  },
  {
    name: "Xylitol",
    status: "toxic",
    explanation:
      "Xylitol (a sweetener in many gums and sugar-free products) can trigger a dangerous insulin release in dogs. It may cause low blood sugar and liver injury, so treat exposure as an emergency."
  },
  {
    name: "Macadamia nuts",
    status: "toxic",
    explanation:
      "Macadamia nuts can cause weakness, tremors, vomiting, and overheating in dogs. Signs may appear within hours, so call your vet if any were eaten."
  },
  {
    name: "Alcohol",
    status: "toxic",
    explanation:
      "Alcohol is toxic to dogs and can cause low blood sugar, breathing problems, and seizures. Even small amounts can be dangerous, especially for small dogs."
  },
  {
    name: "Caffeine",
    status: "toxic",
    explanation:
      "Caffeine (coffee, energy drinks, some teas) can overstimulate a dog’s heart and nervous system. Rapid heart rate, tremors, and overheating are possible—contact a vet if ingested."
  },
  {
    name: "Avocado",
    status: "caution",
    explanation:
      "Avocado flesh is not usually highly toxic to dogs, but it’s fatty and can cause stomach upset or pancreatitis in sensitive pups. The pit and skin are a choking/obstruction hazard and should be kept away."
  },
  {
    name: "Peanut butter",
    status: "caution",
    explanation:
      "Peanut butter is often fine in small amounts and can be a great treat or pill-hider. Always check the label to ensure it contains no xylitol and avoid varieties with lots of added sugar or salt."
  },
  {
    name: "Chicken (plain, cooked)",
    status: "good",
    explanation:
      "Plain cooked chicken is generally a dog-friendly protein and is commonly used in bland diets. Skip seasoning, oils, and especially cooked bones, which can splinter."
  },
  {
    name: "Rice (plain, cooked)",
    status: "good",
    explanation:
      "Plain cooked rice is usually gentle on a dog’s stomach and is often paired with lean protein for short-term upset tummies. Keep portions modest to avoid excess calories."
  },
  {
    name: "Salmon (cooked)",
    status: "good",
    explanation:
      "Cooked salmon is generally safe and provides protein and omega-3 fats. Serve it plain and fully cooked—raw salmon can carry parasites that make dogs sick."
  },
  {
    name: "Eggs (cooked)",
    status: "good",
    explanation:
      "Cooked eggs are typically safe for dogs and are a nutritious source of protein. Avoid raw eggs and keep add-ins like butter, salt, and cheese minimal."
  },
  {
    name: "Carrots",
    status: "good",
    explanation:
      "Carrots are dog-friendly and can be served raw or cooked as a crunchy, low-calorie snack. Cut into appropriate sizes to reduce choking risk, especially for small dogs."
  },
  {
    name: "Apples (no seeds)",
    status: "good",
    explanation:
      "Apple slices are generally safe for dogs and can be a refreshing treat. Remove the core and seeds, since seeds contain compounds that can be harmful if eaten in quantity."
  },
  {
    name: "Bananas",
    status: "caution",
    explanation:
      "Bananas are usually safe for dogs in small portions and can be a handy training treat. They’re sugary, so keep servings small—especially for overweight dogs."
  },
  {
    name: "Blueberries",
    status: "good",
    explanation:
      "Blueberries are dog-friendly and make an easy, bite-sized treat. Offer a few at a time to avoid tummy upset."
  },
  {
    name: "Strawberries",
    status: "good",
    explanation:
      "Strawberries are generally safe for dogs and can be served fresh or frozen. Wash them well and avoid sugary syrups or whipped toppings."
  },
  {
    name: "Watermelon (seedless)",
    status: "good",
    explanation:
      "Seedless, rind-free watermelon is usually safe and hydrating for dogs. Too much can cause diarrhea, so keep it as a treat."
  },
  {
    name: "Grapefruit",
    status: "caution",
    explanation:
      "Grapefruit isn’t a great dog treat because it’s acidic and can upset the stomach. If offered at all, only give a tiny piece and avoid the peel and seeds."
  },
  {
    name: "Bread (plain)",
    status: "caution",
    explanation:
      "Small amounts of plain bread are usually not toxic but are mostly empty calories. Avoid breads with raisins, garlic/onion, xylitol sweeteners, or lots of seeds and nuts."
  },
  {
    name: "Cheese",
    status: "caution",
    explanation:
      "Many dogs can handle a small amount of cheese, but lactose intolerance is common and fatty cheese can trigger stomach upset. Use tiny portions and avoid heavily salted or flavored varieties."
  },
  {
    name: "Milk",
    status: "caution",
    explanation:
      "Milk isn’t toxic, but many dogs are lactose intolerant and may develop gas or diarrhea. If you offer any, keep it to a small sip and monitor."
  },
  {
    name: "Yogurt (plain)",
    status: "caution",
    explanation:
      "Plain yogurt can be okay for some dogs in small amounts, especially if they tolerate dairy. Avoid sweetened yogurts and anything containing xylitol."
  },
  {
    name: "Ice cream",
    status: "caution",
    explanation:
      "Ice cream is high in sugar and fat, and many dogs don’t tolerate lactose well. Chocolate or xylitol-containing varieties are especially dangerous—skip it or use dog-safe frozen treats instead."
  },
  {
    name: "Coconut milk",
    status: "caution",
    explanation:
      "Fine in very small amounts, but high fat content can upset digestion and may increase pancreatitis risk in sensitive dogs."
  },
  {
    name: "Turkey (plain, cooked)",
    status: "good",
    explanation:
      "Lean protein and generally great for dogs when served plain, fully cooked, and without bones, skin, or heavy seasoning."
  },
  {
    name: "Sweet potato (plain, cooked)",
    status: "good",
    explanation:
      "Rich in fibre and vitamins, and usually dog-safe when cooked plain and served in moderate portions."
  },
  {
    name: "Pumpkin (plain)",
    status: "good",
    explanation:
      "Excellent for digestion and often used to help with mild stool issues when served plain (not spiced pie filling)."
  },
  {
    name: "Turmeric",
    status: "caution",
    explanation:
      "May offer anti-inflammatory benefits, but use sparingly and with a little ground black pepper for absorption."
  },
  {
    name: "Cinnamon",
    status: "caution",
    explanation:
      "Small amounts only; larger quantities can irritate the mouth and stomach."
  },
  {
    name: "Nutmeg",
    status: "toxic",
    explanation:
      "Contains myristicin, which is toxic to dogs and can affect the nervous system."
  },
  {
    name: "Popcorn (plain, air-popped)",
    status: "caution",
    explanation:
      "Plain air-popped popcorn is usually okay as an occasional treat. Avoid butter, salt, and unpopped kernels, which can be a choking hazard or damage teeth."
  },
  {
    name: "Almonds",
    status: "caution",
    explanation:
      "Almonds aren’t typically considered highly toxic, but they can cause stomach upset and are a choking risk. Salted or flavored almonds are a poor choice for dogs."
  },
  {
    name: "Gum (sugar-free)",
    status: "toxic",
    explanation:
      "Many sugar-free gums contain xylitol, which is extremely dangerous for dogs. If gum was eaten, assume xylitol exposure until proven otherwise and contact a vet immediately."
  }
];

function dedupeFoods(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = norm(item.name);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

const DB = dedupeFoods([...ADDED_FOODS, ...BASE_DB]);

const STATUS_META = {
  good: { label: "Dog friendly", cls: "good" },
  caution: { label: "Friendly with caution", cls: "caution" },
  toxic: { label: "Toxic", cls: "toxic" }
};

const ALIASES = new Map([
  ["pb", "peanut butter"],
  ["peanutbutter", "peanut butter"],
  ["xylitol gum", "gum (sugar-free)"],
  ["gum", "gum (sugar-free)"],
  ["choc", "chocolate"],
  ["dark chocolate", "chocolate"],
  ["baking chocolate", "chocolate"],
  ["raisins", "raisins"],
  ["grape", "grapes"],
  ["grapes", "grapes"],
  ["avocado", "avocado"],
  ["macadamia", "macadamia nuts"],
  ["macadamias", "macadamia nuts"],
  ["almond", "almonds"],
  ["apple", "apples (no seeds)"],
  ["apples", "apples (no seeds)"],
  ["watermelon", "watermelon (seedless)"],
  ["popcorn", "popcorn (plain, air-popped)"],
  ["yogurt", "yogurt (plain)"],
  ["eggs", "eggs (cooked)"],
  ["egg", "eggs (cooked)"],
  ["salmon", "salmon (cooked)"],
  ["chicken", "chicken (plain, cooked)"],
  ["rice", "rice (plain, cooked)"],
  ["banana", "bananas"],
  ["turkey", "turkey (plain, cooked)"],
  ["sweet potato", "sweet potato (plain, cooked)"],
  ["sweet potatoes", "sweet potato (plain, cooked)"],
  ["pumpkin", "pumpkin (plain)"],
  ["coconut milk", "coconut milk"]
]);

function norm(s) {
  return String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s()-]/g, " ")
    .replace(/\s+/g, " ");
}

function bestMatch(query) {
  const q0 = norm(query);
  if (!q0) return null;

  const q = ALIASES.get(q0) || q0;

  // Exact match (normalized)
  const exact = DB.find((item) => norm(item.name) === q);
  if (exact) return exact;

  // Contains match (either direction)
  const contains = DB.find((item) => norm(item.name).includes(q) || q.includes(norm(item.name)));
  if (contains) return contains;

  // Token overlap score
  const qTokens = new Set(q.split(" ").filter(Boolean));
  let best = null;
  let bestScore = 0;
  for (const item of DB) {
    const tokens = norm(item.name).split(" ").filter(Boolean);
    let score = 0;
    for (const t of tokens) if (qTokens.has(t)) score += 1;
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return bestScore >= 1 ? best : null;
}

function renderEmpty(query) {
  const el = document.getElementById("result");
  if (!query) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = `
    <div class="empty">
      No match for <strong>${escapeHtml(query)}</strong>. Try a simpler name (e.g., “chocolate” instead of a brand).
    </div>
  `;
}

function renderResult(item) {
  const meta = STATUS_META[item.status] || STATUS_META.caution;
  const el = document.getElementById("result");
  el.innerHTML = `
    <article class="card state state--${meta.cls}">
      <div class="card__top">
        <h2 class="food">${escapeHtml(item.name)}</h2>
        <div class="badge badge--${meta.cls}" aria-label="Status: ${meta.label}">
          <span class="badge__dot" aria-hidden="true"></span>
          <span>${meta.label}</span>
        </div>
      </div>
      <div class="card__body">
        <p>${escapeHtml(item.explanation)}</p>
        ${renderPromo(item.status)}
      </div>
    </article>
  `;
}

function renderPromo(status) {
  if (status !== "good" && status !== "caution") return "";
  return `
    <div class="promo">
      <p class="promo__text">
        Want to feed your dog something chef-made? Bark & Dine delivers fresh, vet-conscious dog meals in Dubai
      </p>
      <a
        class="promo__btn"
        href="https://www.instagram.com/barkanddine"
        target="_blank"
        rel="noopener noreferrer"
      >See our menu →</a>
    </div>
  `;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildChips() {
  const picks = [
    "Chicken",
    "Banana",
    "Grapes",
    "Chocolate",
    "Sweet potato",
    "Pumpkin"
  ];
  const chips = document.getElementById("chips");
  chips.innerHTML = picks
    .map(
      (name) => `<button type="button" class="chip" data-chip="${escapeHtml(name)}">${escapeHtml(name)}</button>`
    )
    .join("");
  chips.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-chip]");
    if (!btn) return;
    const value = btn.getAttribute("data-chip") || "";
    const input = document.getElementById("q");
    input.value = value;
    input.focus();
    update(value);
  });
}

function update(value) {
  const query = value ?? document.getElementById("q").value;
  const match = bestMatch(query);
  if (!query.trim()) {
    renderEmpty("");
    return;
  }
  if (!match) {
    renderEmpty(query);
    return;
  }
  renderResult(match);
}

function main() {
  buildChips();

  const input = document.getElementById("q");
  const clearBtn = document.getElementById("clearBtn");
  const form = document.getElementById("searchForm");

  const params = new URLSearchParams(window.location.search);
  const initial = params.get("q");
  if (initial) {
    input.value = initial;
    update(initial);
  }

  input.addEventListener("input", () => update());
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    update();
  });
  clearBtn.addEventListener("click", () => {
    input.value = "";
    input.focus();
    update("");
  });
}

main();

