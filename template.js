const guide = document.querySelector(".typing-guide");
const promptInput = document.querySelector(".creator textarea");
const form = document.querySelector(".creator");
const WIZSTAR_BASE_URL = "https://wizstar.com";
let promptIndex = 0;
let promptText = "";
let deleting = false;

const promptCopy = {
  en: [
    "【Guide the user to describe the goal, audience, content, or product】",
    "【Guide the user to add the specific result they want】",
    "【Guide the user to provide the context, style, or other required details】",
  ],
  es: [
    "【Guía para describir el objetivo, la audiencia, el contenido o el producto】",
    "【Guía para indicar el resultado concreto que deseas obtener】",
    "【Guía para añadir el contexto, el estilo u otra información necesaria】",
  ],
  "zh-CN": [
    "【引导用户描述目标、受众、内容或产品】",
    "【引导用户补充希望获得的具体结果】",
    "【引导用户填写场景、风格或其他必要信息】",
  ],
  "zh-TW": [
    "【引導使用者描述目標、受眾、內容或產品】",
    "【引導使用者補充希望獲得的具體結果】",
    "【引導使用者填寫場景、風格或其他必要資訊】",
  ],
};

function currentPromptCopy() {
  const locale = window.WizstarTemplateI18n?.getLocale?.() || document.documentElement.lang || "en";
  return promptCopy[locale] || promptCopy.en;
}

function typeGuide() {
  const prompts = currentPromptCopy();
  const target = prompts[promptIndex];
  let delay = deleting ? 28 : 48;
  if (!deleting && promptText === target) {
    deleting = true;
    delay = 1800;
  } else if (deleting && promptText === "") {
    deleting = false;
    promptIndex = (promptIndex + 1) % prompts.length;
    delay = 280;
  } else {
    promptText = deleting ? target.slice(0, promptText.length - 1) : target.slice(0, promptText.length + 1);
  }
  guide.textContent = promptInput.value ? "" : promptText;
  window.setTimeout(typeGuide, delay);
}

window.addEventListener("wizstar:localechange", () => {
  promptIndex = 0;
  promptText = "";
  deleting = false;
  if (guide && !promptInput?.value) guide.textContent = "";
});

function prepareNavbar(navbar) {
  const root = navbar.shadowRoot;
  if (!root) return false;

  root.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href?.startsWith("/")) link.href = `${WIZSTAR_BASE_URL}${href}`;
  });

  if (!root.querySelector("style[data-template-language-visibility]")) {
    const style = document.createElement("style");
    style.dataset.templateLanguageVisibility = "true";
    style.textContent = "@media (max-width:819px){.languageWrap,.languageButton{display:inline-flex !important}}";
    root.appendChild(style);
  }
  return true;
}

function connectNavbar() {
  const navbar = document.querySelector("wizstar-navbar");
  if (!navbar?.shadowRoot) {
    window.setTimeout(connectNavbar, 50);
    return;
  }
  prepareNavbar(navbar);
  if (!connectNavbar.observer) {
    connectNavbar.observer = new MutationObserver(() => prepareNavbar(navbar));
    connectNavbar.observer.observe(navbar.shadowRoot, { childList: true, subtree: true });
  }
}

function setupDropdowns() {
  const menus = Array.from(document.querySelectorAll(".control-menu"));
  menus.forEach((menu) => {
    const trigger = menu.querySelector(".dropdown-trigger");
    const options = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    if (!trigger || trigger.dataset.bound === "true") return;
    trigger.dataset.bound = "true";
    trigger.addEventListener("click", () => {
      const open = menu.classList.contains("is-open");
      menus.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
      });
      menu.classList.toggle("is-open", !open);
      trigger.setAttribute("aria-expanded", String(!open));
    });
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.dataset.value;
        const current = menu.querySelector(".control-value");
        if (value && current) current.textContent = value;
        options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
        menu.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      });
    });
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest(".control-menu")) return;
    menus.forEach((menu) => {
      menu.classList.remove("is-open");
      menu.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    menus.forEach((menu) => {
      menu.classList.remove("is-open");
      menu.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupPromptAutoResize() {
  const textarea = document.querySelector(".creator textarea");
  const promptField = textarea?.closest(".prompt-field");
  if (!textarea || !promptField || textarea.dataset.autoResize === "true") return;
  textarea.dataset.autoResize = "true";
  const resize = () => {
    textarea.style.height = "auto";
    const height = Math.max(textarea.scrollHeight, 82);
    textarea.style.height = `${height}px`;
    promptField.style.minHeight = `${height}px`;
  };
  textarea.addEventListener("input", resize);
  window.addEventListener("resize", resize);
  resize();
}

function getRailLoopWidth(track, itemCount) {
  if (!track || itemCount === 0) return 0;
  const first = track.children[0];
  const nextSetFirst = track.children[itemCount];
  if (first && nextSetFirst) {
    const width = nextSetFirst.offsetLeft - first.offsetLeft;
    if (width > 0) return width;
  }
  return track.scrollWidth / 3;
}

function normalizeRailScroll(viewport, track, itemCount) {
  const loopWidth = getRailLoopWidth(track, itemCount);
  if (!loopWidth) return 0;
  const before = viewport.scrollLeft;
  const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  const edge = 1;
  let normalized = before;
  if (before <= edge) normalized = before + loopWidth;
  else if (before >= maxScroll - edge) normalized = before - loopWidth;
  if (Math.abs(normalized - before) > 0.01) viewport.scrollLeft = normalized;
  return normalized - before;
}

// Template media rule: use the source video's ratio for the frame, then let CSS cover fill it.
function applyShowcaseVideoRatio(card, video) {
  if (!card || !video) return;
  card.classList.remove("is-portrait", "is-square");
  if (!video.videoWidth || !video.videoHeight) return;
  card.style.setProperty("--showcase-ratio", String(video.videoWidth / video.videoHeight));
  if (video.videoHeight > video.videoWidth * 1.08) card.classList.add("is-portrait");
  else if (Math.abs(video.videoWidth - video.videoHeight) / Math.max(video.videoWidth, video.videoHeight) < 0.08) {
    card.classList.add("is-square");
  }
}

function setupShowcaseRail() {
  const viewport = document.querySelector(".creation-row");
  const track = document.querySelector(".creation-track");
  if (!viewport || !track || viewport.dataset.railReady === "true") return;
  const sourceCards = Array.from(track.children);
  const itemCount = sourceCards.length;
  if (!itemCount) return;
  track.append(...sourceCards.map((card) => card.cloneNode(true)), ...sourceCards.map((card) => card.cloneNode(true)));
  viewport.dataset.railReady = "true";

  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let hover = false;
  let pauseUntil = 0;
  let last = performance.now();

  const pause = (duration) => { pauseUntil = performance.now() + duration; };
  const tick = (now) => {
    const loopWidth = getRailLoopWidth(track, itemCount);
    const shouldMove = !dragging && !hover && now >= pauseUntil && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shouldMove && loopWidth > 0) viewport.scrollLeft += (now - last) * 0.055;
    normalizeRailScroll(viewport, track, itemCount);
    last = now;
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(() => {
    const loopWidth = getRailLoopWidth(track, itemCount);
    if (loopWidth > 0) viewport.scrollLeft = loopWidth;
    requestAnimationFrame(tick);
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartScroll = viewport.scrollLeft;
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add("is-dragging");
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    viewport.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    pause(1800);
  };
  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("pointerleave", endDrag);
  viewport.addEventListener("wheel", () => pause(1200), { passive: true });
  viewport.querySelectorAll(".showcase-card").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "touch") hover = true;
    });
    card.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch") {
        hover = false;
        pause(250);
      }
    });
    card.addEventListener("focusin", () => { hover = true; });
    card.addEventListener("focusout", () => { hover = false; });
    const video = card.querySelector("video");
    const soundButton = card.querySelector(".sound-toggle");
    if (!video || !soundButton) return;
    const updateVideoRatio = () => applyShowcaseVideoRatio(card, video);
    updateVideoRatio();
    video.addEventListener("loadedmetadata", updateVideoRatio);
    let pointerToggle = false;
    const updateSoundIcon = () => {
      soundButton.innerHTML = video.muted
        ? '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9.5v5h3.2l4.3 3.4V6.1L7.2 9.5H4Z"></path><path d="m17 9 4 6m0-6-4 6"></path></svg>'
        : '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9.5v5h3.2l4.3 3.4V6.1L7.2 9.5H4Z"></path><path d="M15.2 9.2a4.2 4.2 0 0 1 0 5.6M17.8 6.7a7.8 7.8 0 0 1 0 10.6"></path></svg>';
    };
    const toggleSound = () => {
      video.muted = !video.muted;
      video.defaultMuted = video.muted;
      video.volume = 1;
      soundButton.classList.toggle("is-muted", video.muted);
      soundButton.setAttribute("aria-pressed", String(!video.muted));
      soundButton.setAttribute("aria-label", video.muted ? "【播放视频声音】" : "【静音视频】");
      soundButton.setAttribute("title", video.muted ? "【播放声音】" : "【静音】");
      updateSoundIcon();
      video.play().catch(() => undefined);
    };
    soundButton.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      event.preventDefault();
      pointerToggle = true;
      toggleSound();
    });
    soundButton.addEventListener("pointerup", (event) => {
      event.stopPropagation();
      window.setTimeout(() => { pointerToggle = false; }, 0);
    });
    soundButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (pointerToggle) return;
      toggleSound();
    });
    updateSoundIcon();
  });
}

function setupCommentRail() {
  const viewport = document.querySelector(".comment-marquee");
  const track = document.querySelector(".comment-track");
  if (!viewport || !track || viewport.dataset.railReady === "true") return;
  const cards = Array.from(track.children);
  const itemCount = cards.length / 2;
  if (!itemCount) return;
  viewport.dataset.railReady = "true";

  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let hover = false;
  let pauseUntil = 0;
  let last = performance.now();
  const pause = (duration) => { pauseUntil = performance.now() + duration; };
  const tick = (now) => {
    const loopWidth = getRailLoopWidth(track, itemCount);
    const desktopMotion = window.matchMedia("(min-width:681px)").matches;
    if (!dragging && !hover && desktopMotion && now >= pauseUntil && !window.matchMedia("(prefers-reduced-motion: reduce)").matches && loopWidth > 0) {
      viewport.scrollLeft += (now - last) * 0.045;
    }
    normalizeRailScroll(viewport, track, itemCount);
    last = now;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(() => {
    const loopWidth = getRailLoopWidth(track, itemCount);
    if (loopWidth > 0) viewport.scrollLeft = loopWidth;
    requestAnimationFrame(tick);
  });

  viewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartScroll = viewport.scrollLeft;
    viewport.setPointerCapture?.(event.pointerId);
    viewport.classList.add("is-dragging");
    pause(1800);
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    viewport.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    pause(1800);
  };
  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("pointerleave", endDrag);
  viewport.addEventListener("wheel", () => pause(1200), { passive: true });
  viewport.addEventListener("mouseenter", () => { hover = true; });
  viewport.addEventListener("mouseleave", () => { hover = false; pause(250); });
  viewport.addEventListener("focusin", () => { hover = true; });
  viewport.addEventListener("focusout", () => { hover = false; });
}

function setupFeatureVideos() {
  document.querySelectorAll(".feature-sound-video").forEach((container) => {
    const video = container.querySelector("video");
    const soundButton = container.querySelector(".feature-sound-toggle");
    if (!video || !soundButton || soundButton.dataset.bound === "true") return;
    soundButton.dataset.bound = "true";
    const media = container.closest(".feature-promotion-media");
    const updateVideoRatio = () => {
      if (!media || !video.videoWidth || !video.videoHeight) return;
      const ratio = video.videoWidth / video.videoHeight;
      media.style.setProperty("--feature-video-ratio", `${video.videoWidth} / ${video.videoHeight}`);
      media.classList.toggle("is-portrait", ratio < 0.92);
      media.classList.toggle("is-square", Math.abs(ratio - 1) < 0.08);
    };
    updateVideoRatio();
    video.addEventListener("loadedmetadata", updateVideoRatio);
    let pointerToggle = false;
    const updateSoundIcon = () => {
      soundButton.innerHTML = video.muted
        ? '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9.5v5h3.2l4.3 3.4V6.1L7.2 9.5H4Z"></path><path d="m17 9 4 6m0-6-4 6"></path></svg>'
        : '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 9.5v5h3.2l4.3 3.4V6.1L7.2 9.5H4Z"></path><path d="M15.2 9.2a4.2 4.2 0 0 1 0 5.6M17.8 6.7a7.8 7.8 0 0 1 0 10.6"></path></svg>';
    };
    const toggleSound = () => {
      video.muted = !video.muted;
      video.defaultMuted = video.muted;
      video.volume = 1;
      soundButton.classList.toggle("is-muted", video.muted);
      soundButton.setAttribute("aria-pressed", String(!video.muted));
      soundButton.setAttribute("aria-label", video.muted ? "【播放功能视频声音】" : "【静音功能视频】");
      soundButton.setAttribute("title", video.muted ? "【播放声音】" : "【静音】");
      updateSoundIcon();
      video.play().catch(() => undefined);
    };
    soundButton.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      event.preventDefault();
      pointerToggle = true;
      toggleSound();
    });
    soundButton.addEventListener("pointerup", (event) => {
      event.stopPropagation();
      window.setTimeout(() => { pointerToggle = false; }, 0);
    });
    soundButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (pointerToggle) return;
      toggleSound();
    });
    video.addEventListener("loadeddata", () => video.play().catch(() => undefined), { once: true });
    updateSoundIcon();
  });
}

function setupFeatureReveal() {
  const nodes = document.querySelectorAll("[data-feature-reveal]");
  if (!nodes.length || !("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.14, rootMargin: "0px 0px -5%" });
  nodes.forEach((node) => observer.observe(node));
}

function setupFinalCta() {
  const cta = document.querySelector(".final-cta");
  if (!cta || cta.dataset.trailBound === "true") return;
  cta.dataset.trailBound = "true";
  const assets = [
    "trail-12.png", "trail-03.png", "trail-17.png", "trail-08.png",
    "trail-01.png", "trail-15.png", "trail-06.png", "trail-19.png",
    "trail-10.png", "trail-04.png", "trail-14.png", "trail-07.png",
    "trail-18.png", "trail-02.png", "trail-11.png",
  ];
  let lastFrame = 0;
  let frameIndex = 0;
  cta.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const now = performance.now();
    if (now - lastFrame < 95) return;
    lastFrame = now;
    const bounds = cta.getBoundingClientRect();
    const frame = document.createElement("span");
    const index = frameIndex++;
    frame.className = "cta-trail-frame";
    frame.setAttribute("aria-hidden", "true");
    frame.style.left = `${event.clientX - bounds.left}px`;
    frame.style.top = `${event.clientY - bounds.top}px`;
    frame.style.backgroundImage = `url("./assets/cta-trail/${assets[index % assets.length]}")`;
    frame.style.setProperty("--trail-rotate", `${[-7, 5, -3, 8][index % 4]}deg`);
    cta.appendChild(frame);
    window.setTimeout(() => frame.remove(), 1050);
  });
}

function setupFooterLinks() {
  const footer = document.querySelector("wizstar-footer");
  const shadow = footer?.shadowRoot;
  if (!shadow) {
    window.setTimeout(setupFooterLinks, 100);
    return;
  }
  const baseUrl = "https://wizstar.com";
  shadow.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/i.test(href)) return;
    link.setAttribute("href", `${baseUrl}${href.startsWith("/") ? href : `/${href}`}`);
  });
}

promptInput.addEventListener("input", () => { guide.style.display = promptInput.value ? "none" : "block"; });
form.addEventListener("submit", (event) => event.preventDefault());
typeGuide();
connectNavbar();
setupDropdowns();
setupPromptAutoResize();
setupShowcaseRail();
setupCommentRail();
setupFeatureVideos();
setupFeatureReveal();
setupFinalCta();
setupFooterLinks();
