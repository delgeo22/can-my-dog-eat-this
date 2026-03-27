/* Minimal, dependency-free SPA logic */

const DB = [
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
  ["rice", "rice (plain, cooked)"]
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
      </div>
    </article>
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
    "Grapes",
    "Chocolate",
    "Peanut butter",
    "Chicken (plain, cooked)",
    "Onion",
    "Carrots",
    "Xylitol",
    "Watermelon (seedless)"
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

