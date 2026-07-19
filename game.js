const BLUFFS = [
  ["Ask ChatGPT to hotfix production without repository access.", "No access means no code change. Telepathy is still in beta."],
  ["Train autocomplete by deleting examples users already typed.", "Deleting training examples removes signal. Bold learning strategy."],
  ["Fine-tune the chatbot using tomorrow's customer conversations.", "Future conversations are not a dataset yet."],
  ["Make the language model guarantee facts with temperature zero.", "Temperature changes sampling, not factual accuracy."],
  ["Store hallucinations in cookies so the AI remembers truth.", "Cookies preserve text, not turn fiction into fact."],
  ["Prompt the AI to ignore every prompt including this one.", "That instruction defeats itself before stand-up."],
  ["Use sentiment analysis to compile JavaScript into empathy.", "Sentiment classifiers do not compile code or feelings."],
  ["Let the chatbot approve its own security review.", "Self-approval is not independent review. Nice try, robot."],
  ["Reduce token costs by removing all vowels from prompts.", "Mangled prompts can cost accuracy without reliably saving money."],
  ["Make embeddings identical for words sharing the same first letter.", "Embeddings represent meaning, not an alphabet club."],
  ["Ask AI to infer missing invoices from company vibes.", "Accounting needs records, not algorithmic vibes."],
  ["Cache model creativity for deterministic spontaneous answers.", "Cached output is repeatable, not spontaneous."],
  ["Use CSS variables to synchronize production database replicas.", "CSS cannot coordinate server-side database replication."],
  ["Create dark mode that migrates PostgreSQL to MongoDB after sunset.", "A color preference should not replace the database engine."],
  ["Add an index to encrypted passwords for faster login lookup.", "Logins locate accounts first; password hashes should not be queried."],
  ["Vacuum MySQL by running PostgreSQL VACUUM nightly.", "PostgreSQL commands do not maintain MySQL. Databases notice details."],
  ["Store backups inside the same database being backed up.", "The same failure can erase both data and backup."],
  ["Make transactions survive server destruction without replication.", "Durability still needs surviving storage or replicas."],
  ["Convert NULL values to zero without changing any query results.", "NULL and zero have different meanings and query behavior."],
  ["Join tables faster by renaming them alphabetically.", "Names do not improve a query plan."],
  ["Prevent deadlocks by disabling all concurrent database connections.", "Serializing everything avoids concurrency by deleting its benefits."],
  ["Use Redis expiration to archive records permanently.", "Expiration deletes keys. That is an unusually brief archive."],
  ["Normalize the database by putting every field in a separate table.", "Normalization reduces anomalies; it is not table confetti."],
  ["Shard SQLite across browser tabs using localStorage.", "Browser storage cannot turn SQLite into a distributed database."],
  ["Use CSS to authenticate administrators before rendering the login form.", "CSS styles pages; it cannot authenticate anyone."],
  ["Set z-index to infinity so the modal always wins.", "CSS z-index accepts integers, not infinity."],
  ["Make browsers execute Ruby by changing the script MIME type.", "A MIME label does not install a Ruby runtime."],
  ["Fix CORS by adding a wildcard to every request URL.", "CORS is enforced through response headers, not decorative URLs."],
  ["Use alt text to compress images before download.", "Alt text improves accessibility; it does not change image bytes."],
  ["Hide API keys securely with CSS display none.", "Hidden browser content is still delivered to the user."],
  ["Send server logs through response headers as an emergency backup.", "Headers are not a safe or practical log archive."],
  ["Replace API pagination with one infinite SQL query.", "Infinite queries are incidents, not pagination."],
  ["Make React components faster by naming them Speedy.", "Identifiers do not alter rendering performance."],
  ["Use localStorage as shared session storage across devices.", "localStorage stays in one browser profile on one device."],
  ["Prevent form spam by disabling submit after the first global click.", "That blocks users, not distributed spam."],
  ["Implement offline payments without recording transactions for later.", "Unrecorded offline payments cannot be reconciled."],
  ["Make screen readers understand canvas by increasing pixel density.", "Accessibility needs semantic alternatives, not extra pixels."],
  ["Render backend errors in invisible HTML to improve uptime.", "Hiding errors from sight does not restore service."],
  ["Solve timezone bugs by removing dates after midnight.", "Midnight depends on timezone. The bug has eaten the feature."],
  ["Use WebSockets to guarantee messages arrive after disconnection.", "Disconnected sockets cannot guarantee delivery without persistence."],
  ["Compile TypeScript types into runtime database constraints automatically.", "TypeScript types disappear at runtime and do not alter schemas."],
  ["Let the browser validate permissions before calling an unsecured endpoint.", "Server authorization cannot be delegated to an untrusted client."],
  ["Encrypt passwords using Base64 twice.", "Base64 is reversible encoding, even when applied twice."],
  ["Rotate secrets by reversing their strings every Friday.", "Reversing a secret is predictable, not rotation."],
  ["Secure the admin route by renaming it to definitely-not-admin.", "Obscure URLs do not replace authorization."],
  ["Prevent SQL injection by capitalizing every SQL keyword.", "Capital letters do not parameterize hostile input."],
  ["Trust JWTs without signatures to improve client compatibility.", "Without verification, anyone can forge the token."],
  ["Add MFA by asking for the same password twice.", "Two entries of one factor are still one factor."],
  ["Block hackers by rejecting requests containing the word hacker.", "Attack traffic is not obliged to introduce itself."],
  ["Hide vulnerability reports inside private browser bookmarks.", "Bookmarks are neither remediation nor secure issue tracking."],
  ["Generate encryption keys from the current weekday.", "Seven guessable keys would make attackers very punctual."],
  ["Sanitize uploads by changing filenames to friendly names.", "Renaming does not inspect or neutralize file contents."],
  ["Make HTTPS optional for users who dislike padlocks.", "Transport security is not a cosmetic preference."],
  ["Store recovery codes in the login page source.", "Page source is public to every visitor."],
  ["Scale cloud servers by zooming the dashboard browser.", "Browser zoom changes pixels, not compute capacity."],
  ["Move latency closer to users with office DNS cache.", "One office cache does not relocate services worldwide."],
  ["Deploy the same region twice for geographic redundancy.", "Copies in one region share regional failure risk."],
  ["Reduce cloud bills by tagging every resource free-tier.", "Tags do not rewrite provider pricing."],
  ["Keep serverless functions warm with endless recursive invocation.", "That creates cost and failure, not sensible warming."],
  ["Back up an availability zone to another folder in that zone.", "Folders do not cross a zone failure boundary."],
  ["Use a CDN to accelerate database writes from every continent.", "CDNs cache content; they do not safely proxy database writes."],
  ["Autoscale down during traffic spikes to reduce congestion.", "Removing capacity during demand usually increases congestion."],
  ["Guarantee zero downtime by scheduling maintenance at midnight.", "Midnight still has users, especially on a global service."],
  ["Run Kubernetes inside one browser tab for portability.", "A browser tab is not a container orchestration cluster."],
  ["Speed up loops by removing their closing braces.", "Broken syntax is extremely fast at doing nothing."],
  ["Cache random numbers to improve unpredictability.", "Reusing random values makes them more predictable."],
  ["Optimize memory by converting every number to a string.", "Strings often use more memory and add parsing work."],
  ["Load every page upfront to make navigation instant.", "That shifts all cost into a very slow first load."],
  ["Reduce image weight by renaming PNG files to JPG.", "A filename extension does not re-encode image data."],
  ["Improve mobile battery by polling the server every millisecond briefly.", "Aggressive polling burns battery, however briefly."],
  ["Add sleeps between queries so the database catches its breath.", "Databases need capacity and tuning, not nap time."],
  ["Disable monitoring to remove all observed latency.", "Unobserved latency remains latency. The dashboard just looks calmer."],
  ["Fix failing tests by retrying until they turn green.", "Retries can hide flakes; they do not fix failures."],
  ["Deploy faster by skipping version control every Friday.", "Removing traceability does not make deployment safely faster."],
  ["Roll back production by deleting the latest Docker tag.", "Deleting a tag does not redeploy the previous image."],
  ["Store CI credentials in build logs for easier debugging.", "Logs spread secrets to readers and retention systems."],
  ["Make containers stateless by deleting data after every request.", "Stateless design externalizes state; it does not destroy user data."],
  ["Replace health checks with motivational Slack messages.", "Encouragement cannot report process or dependency health."],
  ["Prevent merge conflicts by giving everyone the same Git branch.", "Shared branches increase collisions rather than preventing them."],
  ["Achieve immutable infrastructure by never installing security updates.", "Immutable means replace deployments with patched images, not stay vulnerable."]
]

const GOODS = [
  ["Add a dark mode toggle and persist the user's preference.", "A focused UI improvement with sensible persistence."],
  ["Index user emails after measuring slow account queries.", "Measured query optimization: suspiciously responsible."],
  ["Validate uploaded file types and enforce size limits server-side.", "Server-side validation protects the actual trust boundary."],
  ["Retry transient API failures with exponential backoff and jitter.", "Backoff and jitter reduce synchronized retry storms."],
  ["Add pagination to the audit log endpoint.", "Bounded responses keep large logs usable."],
  ["Rotate exposed credentials and invalidate existing sessions.", "Compromised credentials and sessions both need revocation."],
  ["Cache hashed static assets with a long expiration.", "Content hashes make long-lived browser caching safe."],
  ["Add a health endpoint covering database connectivity.", "Dependency health belongs in a meaningful readiness check."],
  ["Record failed logins without storing submitted passwords.", "Useful security signals do not require collecting passwords."],
  ["Use parameterized queries for account search filters.", "Parameters separate query structure from untrusted values."],
  ["Add ARIA labels to icon-only navigation buttons.", "Accessible names make unlabeled icons understandable."],
  ["Compress uploaded images while preserving their aspect ratio.", "Smaller assets without accidental stretching. Lovely."],
  ["Add an integration test for expired password reset links.", "Expiry is a security boundary worth testing."],
  ["Move production secrets into a managed secret store.", "Centralized secret storage improves access control and rotation."],
  ["Add a database restoration drill to the quarterly checklist.", "A backup is only useful if restoration works."],
  ["Return consistent JSON errors from the public API.", "Stable error shapes help clients handle failure."],
  ["Add request IDs to logs and response headers.", "Shared identifiers make distributed requests traceable."],
  ["Lazy-load dashboard charts below the initial viewport.", "Deferring offscreen work can improve initial load time."],
  ["Show optimistic status while a comment is saving.", "Immediate feedback can improve perceived responsiveness."],
  ["Document rollback steps for the next production release.", "Prepared rollback instructions reduce incident improvisation."]
]

const TICKETS = [
  ...BLUFFS.map(([summary, reason], index) => ({ id: `B${String(index + 1).padStart(3, "0")}`, summary, verdict: "bluff", reason })),
  ...GOODS.map(([summary, reason], index) => ({ id: `G${String(index + 1).padStart(3, "0")}`, summary, verdict: "good", reason }))
]

function shuffle(items, random = Math.random) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

class CategoryDeck {
  constructor(items, random = Math.random) {
    this.items = items
    this.random = random
    this.pool = []
  }

  draw(count) {
    const drawn = []
    while (drawn.length < count) {
      if (!this.pool.length) this.pool = shuffle(this.items, this.random)
      drawn.push(this.pool.pop())
    }
    return drawn
  }
}

class RunDecks {
  constructor(tickets = TICKETS, random = Math.random) {
    this.random = random
    this.bluffs = new CategoryDeck(tickets.filter(ticket => ticket.verdict === "bluff"), random)
    this.goods = new CategoryDeck(tickets.filter(ticket => ticket.verdict === "good"), random)
  }

  nextRun() {
    return shuffle([...this.bluffs.draw(8), ...this.goods.draw(2)], this.random)
  }
}

class GameModel {
  constructor(tickets) {
    this.tickets = tickets
    this.index = 0
    this.score = 0
    this.lives = 3
    this.locked = false
  }

  get current() { return this.tickets[this.index] }
  get done() { return this.index >= this.tickets.length || this.lives <= 0 }

  answer(choice) {
    if (this.locked || this.done) return null
    this.locked = true
    const ticket = this.current
    const correct = choice === ticket.verdict
    if (correct) this.score++
    else this.lives--
    this.index++
    return { ticket, correct }
  }

  unlock() { this.locked = false }
}

function rankFor(score) {
  if (score === 10) return "Jira Oracle"
  if (score >= 8) return "Bluff Hunter"
  if (score >= 5) return "Sprint Survivor"
  return "Requirements Rookie"
}

if (typeof module !== "undefined") module.exports = { TICKETS, CategoryDeck, RunDecks, GameModel, rankFor, shuffle }

if (typeof document !== "undefined") {
  const $ = selector => document.querySelector(selector)
  const game = $("#game")
  const scene = $("#scene")
  const summary = $("#ticket-summary")
  const ticketId = $("#ticket-id")
  const feedback = $("#feedback")
  const score = $("#score")
  const round = $("#round")
  const hearts = $("#hearts")
  const actions = $("#actions")
  const buttons = [...actions.querySelectorAll("button")]
  const gameOver = $("#game-over")
  const decks = new RunDecks()
  let model

  const images = {
    neutral: "assets/developer-neutral.png",
    caught: "assets/developer-caught.png",
    smug: "assets/developer-smug.png"
  }
  Object.values(images).forEach(src => { const image = new Image(); image.src = src })

  function setScene(reaction) {
    scene.src = images[reaction]
    scene.alt = reaction === "caught"
      ? "The developer in a black CODE hoodie sweats after being caught bluffing."
      : reaction === "smug"
        ? "The developer in a black CODE hoodie gives a smug smile."
        : "A cheeky developer in a black CODE hoodie offers you a task card."
  }

  function renderHearts() {
    hearts.replaceChildren(...[0, 1, 2].map(index => {
      const heart = document.createElement("span")
      heart.className = `heart${index >= model.lives ? " lost" : ""}`
      heart.textContent = "♥"
      heart.setAttribute("aria-hidden", "true")
      return heart
    }))
    hearts.setAttribute("aria-label", `${model.lives} ${model.lives === 1 ? "life" : "lives"} remaining`)
  }

  function renderTicket() {
    const ticket = model.current
    summary.textContent = ticket.summary
    ticketId.textContent = ticket.id
    round.textContent = model.index + 1
    feedback.textContent = ""
    feedback.className = "feedback"
    game.classList.remove("correct", "wrong")
    setScene("neutral")
    buttons.forEach(button => { button.disabled = false })
  }

  function showEnd() {
    $("#final-score").textContent = model.score
    $("#rank").textContent = `Rank: ${rankFor(model.score)}`
    $("#result-title").textContent = model.lives ? "You survived Jira!" : "The backlog won!"
    gameOver.hidden = false
    $("#replay").focus()
  }

  function answer(choice) {
    const result = model.answer(choice)
    if (!result) return
    buttons.forEach(button => { button.disabled = true })
    score.textContent = model.score
    renderHearts()

    if (result.correct) {
      feedback.innerHTML = result.ticket.verdict === "bluff"
        ? "<strong>Caught it!</strong> Pure sprint fiction."
        : "<strong>Good call!</strong> Suspiciously sensible."
      feedback.classList.add("correct")
      game.classList.add("correct")
      if (result.ticket.verdict === "bluff") setScene("caught")
    } else {
      feedback.innerHTML = `<strong>Nope.</strong> ${result.ticket.reason}`
      game.classList.add("wrong")
      setScene("smug")
    }

    setTimeout(() => {
      model.unlock()
      if (model.done) showEnd()
      else renderTicket()
    }, 1200)
  }

  function startRun() {
    model = new GameModel(decks.nextRun())
    score.textContent = "0"
    gameOver.hidden = true
    renderHearts()
    renderTicket()
  }

  actions.addEventListener("click", event => {
    const button = event.target.closest("button[data-answer]")
    if (button) answer(button.dataset.answer)
  })

  document.addEventListener("keydown", event => {
    if (event.metaKey || event.ctrlKey || event.altKey || event.repeat || gameOver.hidden === false) return
    if (event.key.toLowerCase() === "b") answer("bluff")
    if (event.key.toLowerCase() === "g") answer("good")
  })

  $("#replay").addEventListener("click", startRun)
  startRun()
}
