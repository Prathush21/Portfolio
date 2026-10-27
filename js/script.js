// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
});

// Typed.js for typewriter effect
const typed = new Typed(".typed-text", {
  strings: [
    "Machine Learning Engineer",
    "Agentic AI Engineer",
    "LLM Systems Engineer",
    "Researcher in Explainable AI",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Active link highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").substring(1) === current) {
      item.classList.add("active");
    }
  });
});

// Experience tabs functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      button.classList.add("active");
      const target = button.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });

  // Initialize first tab as active
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
});

// Navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href").substring(1) === current) {
        item.classList.add("active");
      }
    });
  });
});

// Project demo lightbox
document.addEventListener("DOMContentLoaded", function () {
  const PROJECT_DEMOS = {
    xai: {
      eyebrow: "SegXperts — Desktop App",
      title: "XAI for Image Segmentation of Cervical Cancer Cells",
      steps: [
        {
          label: "Step 1 of 5 · Upload",
          text: "Load a single cervical cell image or a zipped batch, and the app confirms the upload before moving on to configuration.",
          src: "images/projects/xai/step1.gif",
          poster: "images/projects/xai/step1-poster.jpg",
          animated: true,
        },
        {
          label: "Step 2 of 5 · Configure",
          text: "Pick the backbone and XAI method — XceptionNet + GradCAM++ or VGGNet + LRP — set the magnification in µ/pixel, then generate the segmentation masks.",
          src: "images/projects/xai/step2.gif",
          poster: "images/projects/xai/step2-poster.jpg",
          animated: true,
        },
        {
          label: "Step 3 of 5 · Summary view",
          text: "Every uploaded cell appears beside its predicted mask, with nucleus, cytoplasm and background separated pixel by pixel.",
          src: "images/projects/xai/step3.jpg",
          poster: "images/projects/xai/step3.jpg",
          animated: false,
        },
        {
          label: "Step 4 of 5 · Detailed view",
          text: "Compare the original image, the segmentation mask and the XAI heatmap that produced it, alongside the derived descriptors — nucleus area, cytoplasm area and N:C ratio.",
          src: "images/projects/xai/step4.gif",
          poster: "images/projects/xai/step4-poster.jpg",
          animated: true,
        },
        {
          label: "Step 5 of 5 · Export",
          text: "Download the whole run — masks, heatmaps and descriptor metrics — as a single zip archive.",
          src: "images/projects/xai/step5.gif",
          poster: "images/projects/xai/step5-poster.jpg",
          animated: true,
        },
      ],
    },
    "damage-control": {
      eyebrow: "ChallengerX 2023 Winner",
      title: "Damage Control \u2014 Disaster Damage Prediction Platform",
      steps: [
        {
          label: "Product walkthrough",
          text: "A hurricane warning for Naperville sets the scenario: map the electricity distribution assets, draw the damage zones, predict severity across the network, and schedule restoration crews through IFS DSE.",
          video: "images/projects/damage-control/pitch.mp4",
          poster: "images/projects/damage-control/poster.jpg",
        },
      ],
    },
    roads: {
      eyebrow: "Tableau \u2014 6.2M Records",
      title: "US Road Construction and Closures Dashboard",
      steps: [
        {
          label: "View 1 of 2 \u00b7 Severity overview",
          text: "Average closure severity by state, shown alongside closure volume for each weekday and how average severity shifts through the hours of the day.",
          src: "images/projects/roads/overview.jpg",
          poster: "images/projects/roads/overview.jpg",
          animated: false,
        },
        {
          label: "View 2 of 2 \u00b7 Closure map",
          text: "Individual construction and closure events plotted across the United States, showing where incidents cluster along the road network.",
          src: "images/projects/roads/closure-map.jpg",
          poster: "images/projects/roads/closure-map.jpg",
          animated: false,
        },
      ],
    },
  };

  const modal = document.getElementById("demo-modal");
  if (!modal) return;

  const dialog = modal.querySelector(".demo-modal__dialog");
  const eyebrow = document.getElementById("demo-modal-eyebrow");
  const title = document.getElementById("demo-modal-title");
  const media = document.getElementById("demo-media");
  const video = document.getElementById("demo-video");
  const spinner = document.getElementById("demo-spinner");
  const playBtn = document.getElementById("demo-play");
  const replayBtn = document.getElementById("demo-replay");
  const prevBtn = document.getElementById("demo-prev");
  const nextBtn = document.getElementById("demo-next");
  const stepLabel = document.getElementById("demo-step-label");
  const stepText = document.getElementById("demo-step-text");
  const dots = document.getElementById("demo-dots");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let steps = [];
  let index = 0;
  let loadToken = 0;
  let lastFocused = null;

  function buildDots() {
    dots.innerHTML = "";
    steps.forEach((step, i) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = i + 1;
      button.setAttribute("aria-label", step.label);
      button.addEventListener("click", () => goTo(i));
      li.appendChild(button);
      dots.appendChild(li);
    });
  }

  function stopVideo() {
    video.pause();
    video.hidden = true;
    video.removeAttribute("src");
    video.load();
  }

  function playStep() {
    const step = steps[index];
    const token = ++loadToken;
    playBtn.hidden = true;
    replayBtn.hidden = true;
    spinner.hidden = false;

    // Fetch the GIF fully before swapping it in, so it plays from frame one.
    const probe = new Image();
    probe.onload = () => {
      if (token !== loadToken) return;
      media.src = step.src;
      spinner.hidden = true;
      replayBtn.hidden = false;
    };
    probe.onerror = () => {
      if (token !== loadToken) return;
      spinner.hidden = true;
      playBtn.hidden = false;
    };
    probe.src = step.src;
  }

  function replayStep() {
    const step = steps[index];
    media.src = step.poster;
    requestAnimationFrame(() => {
      media.src = step.src;
    });
  }

  function goTo(i) {
    index = (i + steps.length) % steps.length;
    const step = steps[index];

    loadToken++;
    spinner.hidden = true;
    replayBtn.hidden = true;
    playBtn.hidden = true;
    stopVideo();

    stepLabel.textContent = step.label;
    stepText.textContent = step.text;

    Array.from(dots.querySelectorAll("button")).forEach((button, i) => {
      button.setAttribute("aria-current", i === index ? "true" : "false");
    });

    // A lone step needs no arrows or dots.
    const single = steps.length === 1;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
    dots.hidden = single;

    if (step.video) {
      media.hidden = true;
      media.removeAttribute("src");
      video.poster = step.poster;
      video.src = step.video;
      video.hidden = false;
      return;
    }

    media.hidden = false;
    media.src = step.poster;
    media.alt = step.label + ". " + step.text;

    if (step.animated) {
      if (reduceMotion) {
        playBtn.hidden = false;
      } else {
        playStep();
      }
    }

    // Warm the neighbouring posters so stepping through feels instant.
    const neighbour = steps[(index + 1) % steps.length];
    new Image().src = neighbour.poster;
  }

  function openDemo(key) {
    const demo = PROJECT_DEMOS[key];
    if (!demo) return;

    lastFocused = document.activeElement;
    steps = demo.steps;
    eyebrow.textContent = demo.eyebrow;
    title.textContent = demo.title;
    buildDots();

    modal.hidden = false;
    document.body.classList.add("demo-open");
    goTo(0);
    modal.querySelector(".demo-modal__close").focus();
  }

  function closeDemo() {
    loadToken++;
    modal.hidden = true;
    document.body.classList.remove("demo-open");
    stopVideo();
    media.removeAttribute("src");
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll("[data-demo]").forEach((trigger) => {
    trigger.addEventListener("click", () =>
      openDemo(trigger.getAttribute("data-demo"))
    );
  });

  modal.querySelectorAll("[data-demo-close]").forEach((el) => {
    el.addEventListener("click", closeDemo);
  });

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  playBtn.addEventListener("click", playStep);
  replayBtn.addEventListener("click", replayStep);

  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;

    if (e.key === "Escape") {
      closeDemo();
    } else if (e.key === "ArrowLeft") {
      if (document.activeElement !== video) goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      if (document.activeElement !== video) goTo(index + 1);
    } else if (e.key === "Tab") {
      // Keep focus inside the dialog while it is open.
      const focusable = dialog.querySelectorAll(
        "button:not([hidden]):not(:disabled)"
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
});
