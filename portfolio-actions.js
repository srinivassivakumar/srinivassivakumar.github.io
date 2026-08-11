const domains = [
  { name: "Wildlife", crop: [458, 101, 154, 153] },
  { name: "Cloud", crop: [758, 22, 155, 158] },
  { name: "Fashion", crop: [1038, 101, 158, 154] },
  { name: "Medical", crop: [341, 320, 159, 151] },
  { name: "Factory", crop: [1163, 319, 162, 153] },
  { name: "Finance", crop: [1130, 532, 151, 151] },
  { name: "Parallel Computing", crop: [991, 741, 174, 163] },
  { name: "AI", crop: [524, 737, 156, 158] },
  { name: "Bio", crop: [354, 532, 163, 151] }
];

const projects = [
  {
    title: "Mexo Risk Agent",
    stage: "Mexo AI",
    file: "13_mexo_risk_agent_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/sri_otd_risk_report",
    text: "Production evidence becomes an explainable delivery risk report.",
    tags: ["AI", "Risk", "Agent"]
  },
  {
    title: "Zybasys Network AI",
    stage: "Zybasys Project",
    file: "12_zybisys_network_ai_90s_game.mp4",
    github: "",
    confidential: true,
    text: "Network and IOPS metrics reveal degradation before users feel it.",
    tags: ["Network", "AI", "Ops"]
  },
  {
    title: "MyMirro Fashion AI",
    stage: "Freelance Project",
    file: "11_mymirro_fashion_ai_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/fashion-ai-segmentation",
    text: "Outfit photos become segmented wardrobe intelligence.",
    tags: ["Vision", "Segmentation", "AI"]
  },
  {
    title: "R Shiny Auto-Start",
    stage: "Wildlife Conservation Trust",
    file: "10_r_shiny_autostart_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/R-Program-Auto-Start",
    text: "Windows startup automation launches dashboards without manual steps.",
    tags: ["R", "Automation", "Dashboard"]
  },
  {
    title: "Underwater Sensor",
    stage: "Wildlife Conservation Trust",
    file: "09_underwater_sensor_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/UnderwaterSensor",
    text: "River readings are logged, timestamped and sent remotely.",
    tags: ["IoT", "Sensors", "Data"]
  },
  {
    title: "Crocodile Recognition",
    stage: "Wildlife Conservation Trust",
    file: "08_crocodile_recognition_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/ImageDetection",
    text: "Natural pattern matching identifies individual crocodiles from photos.",
    tags: ["Vision", "Wildlife", "ML"]
  },
  {
    title: "AGM 3D Tracking",
    stage: "Wildlife Conservation Trust",
    file: "07_agm_tracking_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/AGM",
    text: "Motion sensor readings are fused into GPS-free 3D paths.",
    tags: ["Python", "Sensors", "3D"]
  },
  {
    title: "Apache Spark",
    stage: "NCBS Internship",
    file: "06_apache_spark_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/Apache-Spark",
    text: "Large datasets are split across workers and merged into results.",
    tags: ["Spark", "Data", "Compute"]
  },
  {
    title: "Ceph Cluster",
    stage: "NCBS Internship",
    file: "05_ceph_cluster_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/Ceph",
    text: "Distributed storage keeps files available after node failure.",
    tags: ["Cloud", "Storage", "Reliability"]
  },
  {
    title: "Nuclei Detection",
    stage: "NCBS Internship",
    file: "04_nuclei_detection_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/Nuclei_Detection",
    text: "Microscopy images are enhanced, cleaned, outlined and counted.",
    tags: ["Vision", "Biology", "Detection"]
  },
  {
    title: "Pulmonary Fibrosis",
    stage: "Masters Project",
    file: "03_pulmonary_fibrosis_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/MLDetectionPulmonaryFibrosis",
    text: "CT scan data supports ResNet analysis and FVC decline forecasts.",
    tags: ["Healthcare", "ResNet", "Forecast"]
  },
  {
    title: "GitHub Assistant",
    stage: "Masters Project",
    file: "02_github_assistant_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/GITLab",
    text: "Repository context is scanned to answer code questions.",
    tags: ["LLM", "GitHub", "Assistant"]
  },
  {
    title: "SmartCap",
    stage: "Undergrad Project",
    file: "01_smartcap_90s_game.mp4",
    github: "https://github.com/srinivassivakumar/SmartCap",
    text: "Vital sensors feed a cap controller and phone dashboard.",
    tags: ["IoT", "Health", "Mobile"]
  }
];

const certificates = [
  {
    title: "Cognite Data Certificates",
    image: "cognite.jpg",
    link: "https://www.linkedin.com/posts/activity-7490986569814847490-leCk?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuZalUBOmhUQf8D06av4T8A-c17vRTJV4c"
  },
  {
    title: "Data Engineering Certificate",
    image: "DataEngineering.jpg",
    link: "https://www.linkedin.com/posts/activity-7484927813955866624-mSD6?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuZalUBOmhUQf8D06av4T8A-c17vRTJV4c"
  },
  {
    title: "Data Science Certificate",
    image: "DataScience.jpg",
    link: "https://www.linkedin.com/posts/activity-7431364789874102272-TImC?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuZalUBOmhUQf8D06av4T8A-c17vRTJV4c"
  },
  {
    title: "Design Patent",
    image: "patent.jpg",
    link: "https://www.linkedin.com/posts/activity-7426943511226281984-WGZH?utm_source=share&utm_medium=member_desktop&rcm=ACoAABuZalUBOmhUQf8D06av4T8A-c17vRTJV4c"
  }
];

const questionRows = [
  ["AI", "Which output fits image segmentation?", "Pixel mask", "DNS zone"],
  ["AI", "What does a classifier usually predict?", "Category label", "File path"],
  ["AI", "Which process teaches a model from examples?", "Training", "Archiving"],
  ["AI", "What is an inference request?", "Model prediction", "Code commit"],
  ["AI", "Which dataset checks final model quality?", "Test set", "Cache"],
  ["AI", "What can reduce overfitting?", "Regularization", "Duplication"],
  ["AI", "Which metric suits balanced classification?", "Accuracy", "Disk size"],
  ["AI", "What does a feature represent?", "Input signal", "Server rack"],
  ["AI", "Which model handles ordered text well?", "Transformer", "Load balancer"],
  ["AI", "What is a model parameter?", "Learned value", "Folder name"],

  ["DevOps", "Which file defines a container build?", "Dockerfile", "Notebook"],
  ["DevOps", "What does CI run after a code change?", "Automated checks", "Payroll"],
  ["DevOps", "Which practice keeps infrastructure repeatable?", "Infrastructure as code", "Manual clicking"],
  ["DevOps", "What stores versioned source code?", "Git repository", "Image gallery"],
  ["DevOps", "What does a deployment pipeline automate?", "Software delivery", "Logo design"],
  ["DevOps", "Which artifact packages an app and dependencies?", "Container image", "Spreadsheet"],
  ["DevOps", "What is rollback used for?", "Restore prior release", "Increase storage"],
  ["DevOps", "Which environment usually faces users?", "Production", "Scratchpad"],
  ["DevOps", "What should a health check report?", "Service readiness", "Font choice"],
  ["DevOps", "Why pin dependency versions?", "Repeatable builds", "Brighter colors"],

  ["Python", "Which library handles table-like data?", "pandas", "paint"],
  ["Python", "Which keyword defines a function?", "def", "table"],
  ["Python", "What data type stores key-value pairs?", "dict", "tuple only"],
  ["Python", "Which statement handles exceptions?", "try", "paint"],
  ["Python", "What does len() return?", "Item count", "File owner"],
  ["Python", "Which syntax creates a list?", "[1, 2]", "{1: 2}"],
  ["Python", "What does import do?", "Loads a module", "Deletes a file"],
  ["Python", "Which tool installs Python packages?", "pip", "ping"],
  ["Python", "What is a virtual environment for?", "Isolated dependencies", "Screen brightness"],
  ["Python", "Which value means no value in Python?", "None", "Blankfile"],

  ["Data", "Which system splits big jobs across workers?", "Spark", "FTP"],
  ["Data", "What does ETL stand for?", "Extract transform load", "Edit test launch"],
  ["Data", "Which format stores rows and columns plainly?", "CSV", "PNG"],
  ["Data", "What does a primary key identify?", "Unique row", "Font family"],
  ["Data", "Which SQL command reads rows?", "SELECT", "PAINT"],
  ["Data", "What is a data pipeline?", "Processing flow", "Color palette"],
  ["Data", "Which storage suits relational tables?", "SQL database", "DNS server"],
  ["Data", "What does schema describe?", "Data structure", "Battery level"],
  ["Data", "Which operation combines related tables?", "JOIN", "ZOOM"],
  ["Data", "What helps queries run faster?", "Index", "Wallpaper"],

  ["MLOps", "What detects model input changes over time?", "Drift", "Zoom"],
  ["MLOps", "What stores trained model versions?", "Model registry", "DNS cache"],
  ["MLOps", "Why log model predictions?", "Monitor behavior", "Change fonts"],
  ["MLOps", "What should trigger model retraining?", "Quality decay", "New logo"],
  ["MLOps", "Which process moves a model into service?", "Deployment", "Cropping"],
  ["MLOps", "What does feature validation catch?", "Bad inputs", "Slow typing"],
  ["MLOps", "Which metric tracks prediction delay?", "Latency", "Contrast"],
  ["MLOps", "What makes experiments comparable?", "Tracked parameters", "Random folders"],
  ["MLOps", "Why use a champion-challenger test?", "Compare models", "Resize images"],
  ["MLOps", "What should a model endpoint return?", "Prediction", "Git branch"],

  ["Cloud", "What stores large images and artifacts?", "Object store", "DNS"],
  ["Cloud", "Which service runs code without managing servers?", "Serverless", "Spreadsheet"],
  ["Cloud", "What does autoscaling change?", "Resource count", "File extension"],
  ["Cloud", "Which component distributes incoming traffic?", "Load balancer", "Text editor"],
  ["Cloud", "What is a cloud region?", "Geographic location", "Password type"],
  ["Cloud", "Which storage behaves like a virtual disk?", "Block storage", "DNS record"],
  ["Cloud", "What does IAM control?", "Access permissions", "Image colors"],
  ["Cloud", "Why use multiple availability zones?", "Higher resilience", "Larger fonts"],
  ["Cloud", "What does a CDN cache near users?", "Web content", "Source commits"],
  ["Cloud", "Which model charges for consumed resources?", "Pay as you go", "Paper invoice only"],

  ["Ops", "Which signal catches a slow service?", "Latency", "Logo"],
  ["Ops", "What does uptime measure?", "Service availability", "Code length"],
  ["Ops", "Which record describes an event over time?", "Log", "Icon"],
  ["Ops", "What does an alert notify?", "Abnormal condition", "Color change"],
  ["Ops", "Which metric shows requests per second?", "Throughput", "Resolution"],
  ["Ops", "What is an incident runbook?", "Response guide", "Design mockup"],
  ["Ops", "Why define an SLO?", "Set reliability target", "Rename server"],
  ["Ops", "What does CPU saturation indicate?", "Resource pressure", "Strong password"],
  ["Ops", "Which check confirms a dependency works?", "Health probe", "Spell check"],
  ["Ops", "What should follow a major incident?", "Postmortem", "Logo refresh"],

  ["Security", "Where should production secrets stay?", "Secret vault", "Git repo"],
  ["Security", "What does MFA add to login?", "Second factor", "Second username"],
  ["Security", "Which principle grants minimum access?", "Least privilege", "Open access"],
  ["Security", "What protects data while traveling?", "Encryption", "Compression only"],
  ["Security", "Which attack floods a service with traffic?", "DDoS", "Refactor"],
  ["Security", "What should happen to an exposed key?", "Rotate it", "Rename it"],
  ["Security", "Which scan finds known dependency flaws?", "Vulnerability scan", "Image crop"],
  ["Security", "What does authentication verify?", "Identity", "Screen size"],
  ["Security", "What does authorization decide?", "Allowed actions", "Password length only"],
  ["Security", "Why validate user input?", "Prevent injection", "Improve brightness"],

  ["Vision", "What helps locate objects in images?", "Detection", "Shuffle"],
  ["Vision", "Which task assigns a class to each pixel?", "Segmentation", "Sorting"],
  ["Vision", "What is a bounding box?", "Object rectangle", "Database table"],
  ["Vision", "Which operation changes image dimensions?", "Resize", "Commit"],
  ["Vision", "What does OCR extract from images?", "Text", "Network routes"],
  ["Vision", "Which color format has red green and blue channels?", "RGB", "CSV"],
  ["Vision", "What does data augmentation create?", "Training variations", "User accounts"],
  ["Vision", "Which metric compares predicted and true boxes?", "IoU", "CPU"],
  ["Vision", "What can edge detection highlight?", "Boundaries", "Passwords"],
  ["Vision", "Which device captures a visual frame?", "Camera", "Router"],

  ["Automation", "What does idempotent automation mean?", "Repeat safe", "Once only"],
  ["Automation", "Which trigger runs work on a schedule?", "Cron", "Crop"],
  ["Automation", "What should a failed workflow provide?", "Clear error", "Silent exit"],
  ["Automation", "Why retry a temporary failure?", "Recover automatically", "Change design"],
  ["Automation", "Which format commonly stores workflow configuration?", "YAML", "JPEG"],
  ["Automation", "What is a webhook?", "Event callback", "Image border"],
  ["Automation", "Which task is best for automation?", "Repeated process", "One-time sketch"],
  ["Automation", "What prevents duplicate job execution?", "Lock", "Font"],
  ["Automation", "Why record automation logs?", "Trace outcomes", "Add decoration"],
  ["Automation", "What should a dry run do?", "Preview changes", "Delete production"]
];

const questions = questionRows.map(([topic, q, correct, wrong]) => ({
  topic,
  q,
  options: [correct, wrong],
  answer: 0
}));

function svgScreen(title) {
  const safe = title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#08121b"/><path d="M0 40H640M0 96H640M0 152H640M0 208H640M0 264H640M0 320H640M64 0V360M128 0V360M192 0V360M256 0V360M320 0V360M384 0V360M448 0V360M512 0V360M576 0V360" stroke="#41d9ff" stroke-opacity=".22" stroke-width="2"/><rect x="56" y="68" width="528" height="224" fill="none" stroke="#ffd34e" stroke-width="8"/><text x="320" y="166" fill="#f6f1df" font-family="monospace" font-size="32" font-weight="900" text-anchor="middle">${safe}</text><text x="320" y="214" fill="#41d9ff" font-family="monospace" font-size="20" font-weight="900" text-anchor="middle">CLICK TO PLAY VIDEO</text></svg>`)}`;
}

function renderDomains() {
  const wheel = document.querySelector("#domainWheel");
  const spotlight = document.querySelector("#domainSpotlight");
  const list = document.querySelector("#domainList");
  if (!wheel || !list) return;
  const step = 360 / domains.length;
  wheel.innerHTML = domains.map((domain, index) => {
    const delay = `${index * -2.8}s`;
    const [x, y, cropWidth, cropHeight] = domain.crop;
    return `<span class="orbit-node" style="--angle:${index * step}deg; --counter-angle:${index * -step}deg; --focus-delay:${delay}"><span class="domain-badge sprite-badge" role="img" aria-label="${domain.name}"><span class="domain-sprite" style="width:${cropWidth}px;height:${cropHeight}px"><img src="srigame.png" alt="" style="left:-${x}px;top:-${y}px"></span></span></span>`;
  }).join("");
  if (spotlight) spotlight.innerHTML = domains.map((domain, index) => `<span class="spotlight-item" style="--focus-delay:${index * -2.8}s"><span>DOMAIN</span><strong>${domain.name}</strong></span>`).join("");
  list.innerHTML = domains.map((domain) => `<li>${domain.name}</li>`).join("");
}

function renderProjects() {
  const target = document.querySelector("#projectRows");
  if (!target) return;
  target.innerHTML = projects.map((project, index) => {
    const side = index % 2 === 0 ? "side-left" : "side-right";
    const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");
    return `<article class="project-row ${side}">
      <span class="branch-tip"></span>
      <button class="project-card" type="button" data-project-index="${index}" aria-label="Open ${project.title} video">
        <div class="project-copy">
          <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
          <p class="project-stage">${project.stage}</p>
          <h2>${project.title}</h2>
          <p>${project.text}</p>
          <ul>${tags}</ul>
          ${project.confidential ? `<span class="private-note">GITHUB CONFIDENTIAL</span>` : ""}
        </div>
        <div class="pixel-screen">
          <div class="screen-topbar"><span>${project.file}</span><span class="live-dot">READY</span></div>
          <img class="project-thumb" src="${svgScreen(project.title)}" alt="">
          <span class="play-chip">OPEN VIDEO</span>
        </div>
      </button>
    </article>`;
  }).join("");
}

function renderCertificates() {
  const target = document.querySelector("#certificateRoots");
  if (!target) return;
  target.innerHTML = certificates.map((cert, index) => `<button class="root-card" type="button" data-certificate-index="${index}" aria-label="Open ${cert.title}">
    <span class="root-wire"></span>
    <img src="${cert.image}" alt="${cert.title}">
    <h3>${cert.title}</h3>
    <p>Click to expand certificate image.</p>
  </button>`).join("");
}

function openElement(element) {
  element.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeElement(element) {
  element.hidden = true;
  document.body.style.overflow = "";
}

function setupModals() {
  const resumeModal = document.querySelector("#resumeModal");
  const projectModal = document.querySelector("#projectModal");
  const certModal = document.querySelector("#certificateModal");
  const video = document.querySelector("#projectVideo");

  document.querySelectorAll("[data-open-resume]").forEach((button) => {
    button.addEventListener("click", () => openElement(resumeModal));
  });

  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-project-index]");
    if (projectButton) {
      const project = projects[Number(projectButton.dataset.projectIndex)];
      document.querySelector("#projectModalTitle").textContent = project.title;
      document.querySelector("#projectMeta").textContent = `${project.stage}. ${project.text}`;
      const github = document.querySelector("#projectGithub");
      const confidential = document.querySelector("#projectConfidential");
      if (project.confidential) {
        github.hidden = true;
        github.removeAttribute("href");
        confidential.hidden = false;
      } else {
        github.hidden = false;
        github.href = project.github;
        confidential.hidden = true;
      }
      video.src = project.file;
      video.currentTime = 0;
      openElement(projectModal);
      video.play().catch(() => {});
    }

    const certButton = event.target.closest("[data-certificate-index]");
    if (certButton) {
      const cert = certificates[Number(certButton.dataset.certificateIndex)];
      document.querySelector("#certificateModalTitle").textContent = cert.title;
      const image = document.querySelector("#certificateImage");
      image.src = cert.image;
      image.alt = cert.title;
      document.querySelector("#certificateLink").href = cert.link;
      openElement(certModal);
    }

    if (event.target.matches("[data-close-modal]") || event.target.classList.contains("modal-overlay")) {
      [resumeModal, projectModal, certModal].forEach((modal) => closeElement(modal));
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      [resumeModal, projectModal, certModal].forEach((modal) => {
        if (!modal.hidden) closeElement(modal);
      });
      video.pause();
    }
  });
}

function setupNotes() {
  const title = document.querySelector("#noteTitle");
  const comments = document.querySelector("#noteComments");
  const image = document.querySelector("#noteImage");
  const preview = document.querySelector("#notePreview");
  if (!title || !comments || !image || !preview) return;

  function updatePreview(src = "") {
    const heading = title.value.trim() || "Untitled future note";
    const body = comments.value.trim() || "No comments yet.";
    preview.innerHTML = `<strong>${heading}</strong><p>${body}</p>${src ? `<img src="${src}" alt="Selected note preview">` : ""}`;
  }

  title.addEventListener("input", () => updatePreview(preview.dataset.src || ""));
  comments.addEventListener("input", () => updatePreview(preview.dataset.src || ""));
  image.addEventListener("change", () => {
    const file = image.files && image.files[0];
    if (!file) {
      preview.dataset.src = "";
      updatePreview("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      preview.dataset.src = reader.result;
      updatePreview(reader.result);
    };
    reader.readAsDataURL(file);
  });
  updatePreview();
}

function setupNavSpy() {
  const links = [...document.querySelectorAll(".site-header nav a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const activate = (id) => links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === id));
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    activate(`#${visible.target.id}`);
  }, { threshold: [0.2, 0.45, 0.7] });
  sections.forEach((section) => observer.observe(section));
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (!section) return;
      event.preventDefault();
      history.pushState(null, "", link.getAttribute("href"));
      activate(link.getAttribute("href"));
      section.scrollIntoView({ block: "start" });
    });
  });
  if (window.location.hash) {
    activate(window.location.hash);
    const scrollHash = () => {
      const section = document.querySelector(window.location.hash);
      activate(window.location.hash);
      section?.scrollIntoView({ block: "start" });
    };
    [100, 550, 1200, 2200].forEach((delay) => setTimeout(scrollHash, delay));
    window.addEventListener("load", () => setTimeout(scrollHash, 120));
  }
}

function setupLegacyGame() {
  const overlay = document.querySelector("#gameOverlay");
  const canvas = document.querySelector("#gameCanvas");
  const ctx = canvas.getContext("2d");
  const intro = document.querySelector("#gameIntro");
  const scoreEl = document.querySelector("#gameScore");
  const roundEl = document.querySelector("#gameRound");
  const paddleEl = document.querySelector("#gamePaddle");
  const speedEl = document.querySelector("#gameSpeed");
  const topicEl = document.querySelector("#questionTopic");
  const questionEl = document.querySelector("#questionText");
  const width = canvas.width;
  const height = canvas.height;
  let state;
  let frame = 0;
  let keys = { left: false, right: false };
  let pointerX = null;

  function shuffledQuestion(round) {
    const base = questions[round % questions.length];
    if (round % 2 === 0) return { ...base, options: [...base.options], answer: base.answer };
    return { ...base, options: [base.options[1], base.options[0]], answer: base.answer === 0 ? 1 : 0 };
  }

  function resetRound(keepQuestion = false) {
    if (!keepQuestion) state.question = shuffledQuestion(state.round);
    state.brick = { x: width / 2 - 62, y: 72, width: 124, height: 28, alive: true };
    state.ball = { x: state.paddle.x + state.paddle.width / 2, y: height - 74, vx: 3.8 * state.speed, vy: -4.2 * state.speed };
    state.answers = [];
    state.mode = "break";
    updateHud();
  }

  function start() {
    state = {
      score: 0,
      round: 0,
      speed: 1,
      paddle: { x: width / 2 - 80, y: height - 42, width: 160, minWidth: 34 },
      question: shuffledQuestion(0),
      answers: [],
      mode: "break",
      message: ""
    };
    intro.hidden = true;
    resetRound(true);
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(tick);
  }

  function updateHud() {
    if (!state) return;
    scoreEl.textContent = state.score;
    roundEl.textContent = String(state.round + 1).padStart(2, "0");
    paddleEl.textContent = `${Math.round(state.paddle.width / 160 * 100)}%`;
    speedEl.textContent = `${state.speed.toFixed(1)}x`;
    topicEl.textContent = state.question.topic;
    questionEl.textContent = state.message || state.question.q;
  }

  function releaseAnswers() {
    const correctLeft = state.round % 2 === 0;
    const lanes = [
      { x: width * .27 - 80, label: state.question.options[correctLeft ? state.question.answer : 1 - state.question.answer], correct: correctLeft },
      { x: width * .73 - 80, label: state.question.options[correctLeft ? 1 - state.question.answer : state.question.answer], correct: !correctLeft }
    ];
    state.answers = lanes.map((lane) => ({ ...lane, y: 118, width: 160, height: 34, vy: 2.25 * state.speed }));
    state.mode = "answer";
    state.message = state.question.q;
    updateHud();
  }

  function resolveAnswer(answer) {
    if (answer.correct) {
      state.score += 1;
      state.message = "Correct. Log size protected.";
      if (state.score > 0 && state.score % 5 === 0) state.speed += .22;
    } else {
      state.paddle.width = Math.max(state.paddle.minWidth, state.paddle.width / 2);
      state.message = "Wrong answer. Log size halved.";
    }
    state.round += 1;
    if (state.round >= questions.length) state.round = 0;
    setTimeout(() => resetRound(false), 760);
    updateHud();
  }

  function missAnswer() {
    state.paddle.width = Math.max(state.paddle.minWidth, state.paddle.width * .72);
    state.message = "Missed answer. Log shrank, but never reaches zero.";
    state.round += 1;
    setTimeout(() => resetRound(false), 760);
    updateHud();
  }

  function tick() {
    if (overlay.hidden || !state) return;
    move();
    draw();
    frame = requestAnimationFrame(tick);
  }

  function move() {
    if (keys.left) state.paddle.x -= 8 * state.speed;
    if (keys.right) state.paddle.x += 8 * state.speed;
    if (pointerX !== null) state.paddle.x = pointerX - state.paddle.width / 2;
    state.paddle.x = Math.max(8, Math.min(width - state.paddle.width - 8, state.paddle.x));

    if (state.mode === "break") {
      const ball = state.ball;
      ball.x += ball.vx;
      ball.y += ball.vy;
      if (ball.x <= 9 || ball.x >= width - 9) ball.vx *= -1;
      if (ball.y <= 9) ball.vy = Math.abs(ball.vy);
      if (ball.y + 8 >= state.paddle.y && ball.y < state.paddle.y + 18 && ball.x >= state.paddle.x && ball.x <= state.paddle.x + state.paddle.width && ball.vy > 0) {
        const hit = (ball.x - (state.paddle.x + state.paddle.width / 2)) / (state.paddle.width / 2);
        ball.vx = hit * 5.8 * state.speed;
        ball.vy = -Math.abs(ball.vy);
      }
      const brick = state.brick;
      if (brick.alive && ball.x + 8 > brick.x && ball.x - 8 < brick.x + brick.width && ball.y + 8 > brick.y && ball.y - 8 < brick.y + brick.height) {
        brick.alive = false;
        releaseAnswers();
      }
      if (ball.y > height + 16) {
        ball.x = state.paddle.x + state.paddle.width / 2;
        ball.y = height - 74;
        ball.vy = -Math.abs(ball.vy);
      }
    } else if (state.mode === "answer") {
      state.answers.forEach((answer) => { answer.y += answer.vy; });
      const caught = state.answers.find((answer) => answer.y + answer.height >= state.paddle.y && answer.y < state.paddle.y + 22 && answer.x + answer.width >= state.paddle.x && answer.x <= state.paddle.x + state.paddle.width);
      if (caught) resolveAnswer(caught);
      else if (state.answers.every((answer) => answer.y > height + 20)) missAnswer();
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(65,217,255,.18)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (state.brick.alive) {
      ctx.fillStyle = "#05090f";
      ctx.fillRect(state.brick.x + 6, state.brick.y + 6, state.brick.width, state.brick.height);
      ctx.fillStyle = "#ff554f";
      ctx.fillRect(state.brick.x, state.brick.y, state.brick.width, state.brick.height);
      ctx.fillStyle = "#f6f1df";
      ctx.font = "900 12px monospace";
      ctx.textAlign = "center";
      ctx.fillText("QUESTION", state.brick.x + state.brick.width / 2, state.brick.y + 19);
    }

    state.answers.forEach((answer) => {
      ctx.fillStyle = answer.correct ? "#47ce74" : "#3974ff";
      ctx.fillRect(answer.x, answer.y, answer.width, answer.height);
      ctx.strokeStyle = "#f6f1df";
      ctx.lineWidth = 4;
      ctx.strokeRect(answer.x, answer.y, answer.width, answer.height);
      ctx.fillStyle = "#071019";
      ctx.font = "900 15px monospace";
      ctx.textAlign = "center";
      ctx.fillText(answer.label, answer.x + answer.width / 2, answer.y + 22);
    });

    ctx.fillStyle = "#ffd34e";
    ctx.fillRect(state.paddle.x + 8, state.paddle.y + 8, state.paddle.width, 14);
    ctx.fillStyle = "#f6f1df";
    ctx.fillRect(state.paddle.x, state.paddle.y, state.paddle.width, 14);
    ctx.fillStyle = "#41d9ff";
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  document.querySelectorAll("[data-open-game]").forEach((button) => {
    button.addEventListener("click", () => {
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      intro.hidden = false;
      if (state) draw();
    });
  });
  document.querySelector("#startGame").addEventListener("click", start);
  document.querySelector("[data-close-game]").addEventListener("click", closeGame);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeGame();
  });
  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width * width;
  });
  canvas.addEventListener("pointerleave", () => { pointerX = null; });
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") keys.left = true;
    if (event.key === "ArrowRight") keys.right = true;
    if (event.key === "Escape" && !overlay.hidden) closeGame();
  });
  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") keys.left = false;
    if (event.key === "ArrowRight") keys.right = false;
  });

  function closeGame() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    cancelAnimationFrame(frame);
    keys = { left: false, right: false };
  }
}

function setupGame() {
  const overlay = document.querySelector("#gameOverlay");
  const canvas = document.querySelector("#gameCanvas");
  const ctx = canvas?.getContext("2d");
  const intro = document.querySelector("#gameIntro");
  const scoreEl = document.querySelector("#gameScore");
  const roundEl = document.querySelector("#gameRound");
  const paddleEl = document.querySelector("#gamePaddle");
  const speedEl = document.querySelector("#gameSpeed");
  const topicEl = document.querySelector("#questionTopic");
  const questionEl = document.querySelector("#questionText");
  if (!overlay || !canvas || !ctx || !intro) return;

  const width = canvas.width;
  const height = canvas.height;
  const normalPaddleWidth = 200;
  const minPaddleWidth = 90;
  let state;
  let frame = 0;
  let keys = { left: false, right: false };
  let pointerX = null;

  function shuffledQuestionPool() {
    const pool = questions.map((question) => ({ ...question, options: [...question.options] }));
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }
    return pool;
  }

  function buildBrickWall() {
    const rows = [7, 6, 5, 4];
    const brickWidth = 84;
    const brickHeight = 24;
    const gap = 10;
    return rows.flatMap((count, row) => {
      const rowWidth = count * brickWidth + (count - 1) * gap;
      const startX = (width - rowWidth) / 2;
      return Array.from({ length: count }, (_, column) => ({
        x: startX + column * (brickWidth + gap),
        y: 64 + row * (brickHeight + 9),
        width: brickWidth,
        height: brickHeight,
        row,
        alive: true
      }));
    });
  }

  function resetBall(direction = 1) {
    state.ball = {
      x: state.paddle.x + state.paddle.width / 2,
      y: state.paddle.y - 15,
      vx: 2.4 * state.speed * direction,
      vy: -3.05 * state.speed
    };
  }

  function start() {
    const questionQueue = shuffledQuestionPool();
    state = {
      score: 0,
      round: 0,
      speed: .65,
      destroyedBricks: 0,
      questionIndex: 0,
      questionQueue,
      paddle: {
        x: width / 2 - normalPaddleWidth / 2,
        y: height - 58,
        width: normalPaddleWidth,
        targetWidth: normalPaddleWidth
      },
      question: questionQueue[0],
      bricks: buildBrickWall(),
      answers: [],
      mode: "break",
      message: "",
      transitionAt: 0
    };
    resetBall();
    intro.hidden = true;
    updateHud();
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(tick);
  }

  function updateHud() {
    if (!state) return;
    scoreEl.textContent = state.score;
    roundEl.textContent = String((state.round % questions.length) + 1).padStart(2, "0");
    paddleEl.textContent = `${Math.round(state.paddle.width / normalPaddleWidth * 100)}%`;
    speedEl.textContent = `${state.speed.toFixed(2)}x`;
    topicEl.textContent = state.question.topic;
    questionEl.textContent = state.message || state.question.q;
  }

  function releaseAnswers() {
    const order = Math.random() < .5 ? [0, 1] : [1, 0];
    const answerWidth = 190;
    const centers = [width * .27, width * .73];
    state.answers = order.map((optionIndex, lane) => ({
      x: centers[lane] - answerWidth / 2,
      y: 188,
      width: answerWidth,
      height: 42,
      vy: .72 * state.speed,
      label: state.question.options[optionIndex],
      correct: optionIndex === state.question.answer,
      lane
    }));
    state.mode = "answer";
    state.message = "";
    updateHud();
  }

  function finishAnswer(result) {
    if (state.mode !== "answer") return;
    if (result === "correct") {
      state.score += 1;
      state.paddle.targetWidth = Math.min(normalPaddleWidth, state.paddle.targetWidth + 18);
      state.message = "Correct. Paddle rebuilding.";
    } else if (result === "wrong") {
      state.paddle.targetWidth = Math.max(minPaddleWidth, state.paddle.targetWidth - 30);
      state.message = "Wrong answer. Paddle shrinking.";
    } else {
      state.paddle.targetWidth = Math.max(minPaddleWidth, state.paddle.targetWidth - 16);
      state.message = "Answer missed. Try the next one.";
    }
    state.answers = [];
    state.mode = "feedback";
    state.transitionAt = performance.now() + 900;
    updateHud();
  }

  function nextQuestion() {
    state.round += 1;
    state.questionIndex += 1;
    if (state.questionIndex >= state.questionQueue.length) {
      state.questionQueue = shuffledQuestionPool();
      state.questionIndex = 0;
    }
    state.question = state.questionQueue[state.questionIndex];
    state.message = "";
    state.mode = "break";
    state.transitionAt = 0;
    if (!state.bricks.some((brick) => brick.alive)) state.bricks = buildBrickWall();
    updateHud();
  }

  function movePaddle() {
    const previousWidth = state.paddle.width;
    state.paddle.width += (state.paddle.targetWidth - state.paddle.width) * .055;
    state.paddle.x -= (state.paddle.width - previousWidth) / 2;
    if (Math.abs(state.paddle.targetWidth - state.paddle.width) < .2) state.paddle.width = state.paddle.targetWidth;
    if (keys.left) state.paddle.x -= 6.4;
    if (keys.right) state.paddle.x += 6.4;
    if (pointerX !== null) state.paddle.x += (pointerX - state.paddle.width / 2 - state.paddle.x) * .24;
    state.paddle.x = Math.max(8, Math.min(width - state.paddle.width - 8, state.paddle.x));
  }

  function moveBall(keepInPlay = false) {
    const ball = state.ball;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x <= 9) {
      ball.x = 9;
      ball.vx = Math.abs(ball.vx);
    } else if (ball.x >= width - 9) {
      ball.x = width - 9;
      ball.vx = -Math.abs(ball.vx);
    }
    if (ball.y <= 9) {
      ball.y = 9;
      ball.vy = Math.abs(ball.vy);
    }

    const paddle = state.paddle;
    if (ball.vy > 0 && ball.y + 8 >= paddle.y && ball.y - 8 <= paddle.y + 26 && ball.x >= paddle.x && ball.x <= paddle.x + paddle.width) {
      const offset = (ball.x - (paddle.x + paddle.width / 2)) / (paddle.width / 2);
      ball.y = paddle.y - 9;
      ball.vx = Math.max(-4.2, Math.min(4.2, offset * 3.8)) * state.speed;
      ball.vy = -3.05 * state.speed;
    }

    if (ball.y > height + 14) {
      if (keepInPlay) {
        ball.y = height - 9;
        ball.vy = -Math.abs(ball.vy);
      } else {
        resetBall(ball.vx < 0 ? -1 : 1);
      }
    }
  }

  function hitBrick() {
    if (state.mode !== "break") return;
    const ball = state.ball;
    const brick = state.bricks.find((item) => item.alive &&
      ball.x + 8 > item.x && ball.x - 8 < item.x + item.width &&
      ball.y + 8 > item.y && ball.y - 8 < item.y + item.height);
    if (!brick) return;
    brick.alive = false;
    state.destroyedBricks += 1;
    state.speed = Math.min(1, .65 + state.destroyedBricks * .012);
    ball.vy *= -1;
    releaseAnswers();
  }

  function move() {
    movePaddle();
    if (state.mode === "feedback") {
      moveBall(true);
      if (performance.now() >= state.transitionAt) nextQuestion();
      return;
    }

    moveBall();
    hitBrick();
    if (state.mode !== "answer") return;

    state.answers.forEach((answer) => { answer.y += answer.vy; });
    const paddle = state.paddle;
    const caught = state.answers.find((answer) =>
      answer.y + answer.height >= paddle.y && answer.y <= paddle.y + 26 &&
      answer.x + answer.width >= paddle.x && answer.x <= paddle.x + paddle.width);
    if (caught) finishAnswer(caught.correct ? "correct" : "wrong");
    else if (state.answers.every((answer) => answer.y > height + 20)) finishAnswer("missed");
  }

  function drawBrick(brick) {
    const colors = ["#ff554f", "#ffd34e", "#41d9ff", "#47ce74"];
    ctx.fillStyle = "#02050a";
    ctx.fillRect(brick.x + 5, brick.y + 5, brick.width, brick.height);
    ctx.fillStyle = colors[brick.row];
    ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
    ctx.strokeStyle = "#f6f1df";
    ctx.lineWidth = 2;
    ctx.strokeRect(brick.x, brick.y, brick.width, brick.height);
  }

  function drawAnswer(answer) {
    ctx.fillStyle = "#02050a";
    ctx.fillRect(answer.x + 6, answer.y + 6, answer.width, answer.height);
    ctx.fillStyle = answer.lane === 0 ? "#3974ff" : "#8b4cc4";
    ctx.fillRect(answer.x, answer.y, answer.width, answer.height);
    ctx.strokeStyle = "#f6f1df";
    ctx.lineWidth = 4;
    ctx.strokeRect(answer.x, answer.y, answer.width, answer.height);
    ctx.fillStyle = "#f6f1df";
    ctx.font = "900 14px monospace";
    ctx.textAlign = "center";
    ctx.fillText(answer.label, answer.x + answer.width / 2, answer.y + 26);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(65,217,255,.15)";
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    state.bricks.filter((brick) => brick.alive).forEach(drawBrick);
    state.answers.forEach(drawAnswer);

    const log = state.paddle;
    ctx.fillStyle = "#32170f";
    ctx.fillRect(log.x - 4, log.y - 4, log.width + 8, 30);
    ctx.fillStyle = "#9a5732";
    ctx.fillRect(log.x, log.y, log.width, 22);
    ctx.fillStyle = "#d18543";
    ctx.fillRect(log.x + 8, log.y + 4, Math.max(0, log.width - 16), 5);
    ctx.fillStyle = "#e3a45e";
    ctx.beginPath();
    ctx.ellipse(log.x + 5, log.y + 11, 8, 11, 0, 0, Math.PI * 2);
    ctx.ellipse(log.x + log.width - 5, log.y + 11, 8, 11, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#5a2d22";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(log.x + 5, log.y + 11, 4, 7, 0, 0, Math.PI * 2);
    ctx.ellipse(log.x + log.width - 5, log.y + 11, 4, 7, 0, 0, Math.PI * 2);
    ctx.stroke();
    if (log.width >= 118) {
      ctx.fillStyle = "#28140e";
      ctx.font = "900 11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("WOOD LOG", log.x + log.width / 2, log.y + 17);
    }

    ctx.fillStyle = "#41d9ff";
    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  function tick() {
    if (overlay.hidden || !state) return;
    move();
    draw();
    updateHud();
    frame = requestAnimationFrame(tick);
  }

  function closeGame() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    cancelAnimationFrame(frame);
    keys = { left: false, right: false };
    pointerX = null;
  }

  document.querySelectorAll("[data-open-game]").forEach((button) => {
    button.addEventListener("click", () => {
      overlay.hidden = false;
      document.body.style.overflow = "hidden";
      intro.hidden = false;
      if (state) draw();
    });
  });
  document.querySelector("#startGame")?.addEventListener("click", start);
  document.querySelector("[data-close-game]")?.addEventListener("click", closeGame);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeGame();
  });
  canvas.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width * width;
  });
  canvas.addEventListener("pointerleave", () => { pointerX = null; });
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") keys.left = true;
    if (event.key === "ArrowRight") keys.right = true;
    if (event.key === "Escape" && !overlay.hidden) closeGame();
  });
  window.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft") keys.left = false;
    if (event.key === "ArrowRight") keys.right = false;
  });
}

renderDomains();
renderProjects();
renderCertificates();
setupModals();
setupNotes();
setupNavSpy();
setupGame();
