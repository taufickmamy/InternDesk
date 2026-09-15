const THEME_KEY = "intern:theme";
const LANG_KEY = "intern:lang";

const I18N = {
  fr: {
    feed_title: "Offres des autres",
    feed_empty: "Aucune offre pour l'instant.",
    raids_title: "Raids",
    raids_announce: "Faire une annonce",
    raids_mine: "Mes annonces",
    my_posts_empty: "Vous n'avez encore rien publié.",
    compose_title: "Titre de votre annonce",
    compose_company: "Entreprise (optionnel)",
    compose_text: "Décrivez votre offre…",
    compose_image: "URL d'une image (optionnel)",
    compose_publish: "Publier",
    post_company_label: "Entreprise",
    post_candidate_label: "Candidat",
    role_label_company: "Entreprise",
    role_label_candidate: "Candidat",
    btn_logout: "Déconnexion",
    tab_login: "Connexion",
    tab_register: "Créer un compte",
    login_title: "Connexion",
    register_title: "Créer un compte",
    field_email: "Email",
    field_password: "Mot de passe",
    field_confirm: "Confirmation",
    field_lastname: "Nom",
    field_firstname: "Prénom",
    field_remember: "Se souvenir de moi",
    field_region: "Région",
    field_phone: "Numéro",
    link_forgot: "Mot de passe oublié ?",
    btn_login: "Se connecter",
    btn_register: "Créer le compte",
    role_candidate: "Postuler",
    role_company: "Entreprise",
    placeholder_email: "votre email",
    aside_eyebrow: "Suivi de stages",
    aside_title_1: "Vos stages,",
    aside_title_2: "organisés.",
    aside_text:
      "Centralisez vos candidatures, suivez chaque statut et gardez une vue claire de votre progression.",
    feature_1: "Feed d'offres",
    feature_2: "Suivi des statuts",
    feature_3: "Historique complet",
    search_title: "Recherche",
    search_sub: "Trouvez une annonce ou une entreprise.",
    search_field: "Que cherchez-vous ?",
    search_placeholder: "Titre, entreprise, mot-clé…",
    empty_search: "Aucun résultat.",
    notifications_title: "Notifications",
    notifications_sub: "Vos dernières alertes.",
    empty_notifications: "Aucune notification pour l'instant.",
    messages_title: "Messages",
    messages_sub: "Vos conversations récentes.",
    empty_messages: "Aucune conversation pour l'instant.",
    settings_title: "Paramètres",
    settings_profile: "Profil",
    settings_photo: "Photo de profil",
    settings_name: "Nom",
    settings_email: "Email",
    settings_region: "Région",
    settings_phone: "Numéro",
    settings_role: "Poste",
    settings_theme: "Thème",
    settings_mode: "Mode",
    settings_language: "Langue",
    settings_danger: "Compte",
    settings_password: "Changer le mot de passe",
    settings_delete: "Supprimer le compte",
  },
  mg: {
    feed_title: "Tolotra avy amin'ny hafa",
    feed_empty: "Mbola tsy misy tolotra.",
    raids_title: "Raids",
    raids_announce: "Manao fanambarana",
    raids_mine: "Ny fanambarako",
    my_posts_empty: "Mbola tsy namoaka ianao.",
    compose_title: "Lohatenin'ny fanambaranao",
    compose_company: "Orinasa (tsy voatery)",
    compose_text: "Farano ny tolotrao…",
    compose_image: "Rohy sary (tsy voatery)",
    compose_publish: "Hamoaka",
    post_company_label: "Orinasa",
    post_candidate_label: "Mpangataka",
    role_label_company: "Orinasa",
    role_label_candidate: "Mpikaroka",
    btn_logout: "Hiala",
    tab_login: "Hidirana",
    tab_register: "Hamorona kaonty",
    login_title: "Hidirana",
    register_title: "Hamorona kaonty",
    field_email: "Mail",
    field_password: "Teny miafina",
    field_confirm: "Fanamarinana",
    field_lastname: "Anarana",
    field_firstname: "Fanampiny",
    field_remember: "Tadidio aho",
    field_region: "Faritra",
    field_phone: "Nomerao",
    link_forgot: "Hadino ny teny miafina ?",
    btn_login: "Hiditra",
    btn_register: "Hamorona ny kaonty",
    role_candidate: "Hitady",
    role_company: "Orinasa",
    placeholder_email: "ny mailnao",
    aside_eyebrow: "Fanarahana stage",
    aside_title_1: "Ny stage-nao,",
    aside_title_2: "voarindra.",
    aside_text:
      "Angony ny fangatahanao, araho ny satan'ny tsirairay ary tazomy ny fandrosoanao.",
    feature_1: "Tabilao mazava",
    feature_2: "Fanarahana ny sata",
    feature_3: "Tantara feno",
    search_title: "Fikarohana",
    search_sub: "Mitadiava fanambarana na orinasa.",
    search_field: "Inona no karohinao ?",
    search_placeholder: "Lohateny, orinasa, teny…",
    empty_search: "Tsy misy valiny.",
    notifications_title: "Fampandrenesana",
    notifications_sub: "Ny fampandrenesana farany.",
    empty_notifications: "Mbola tsy misy fampandrenesana.",
    messages_title: "Hafatra",
    messages_sub: "Ny resadresaka farany.",
    empty_messages: "Mbola tsy misy resadresaka.",
    settings_title: "Kirakira",
    settings_profile: "Mombamomba",
    settings_photo: "Sary mombamomba",
    settings_name: "Anarana",
    settings_email: "Mail",
    settings_region: "Faritra",
    settings_phone: "Nomerao",
    settings_role: "Andraikitra",
    settings_theme: "Endrika",
    settings_mode: "Endrika",
    settings_language: "Fiteny",
    settings_danger: "Kaonty",
    settings_password: "Hanova ny teny miafina",
    settings_delete: "Mamafa ny kaonty",
  },
  en: {
    feed_title: "Others' offers",
    feed_empty: "No offer yet.",
    raids_title: "Raids",
    raids_announce: "Make an announcement",
    raids_mine: "My announcements",
    my_posts_empty: "You haven't posted anything yet.",
    compose_title: "Title of your announcement",
    compose_company: "Company (optional)",
    compose_text: "Describe your offer…",
    compose_image: "Image URL (optional)",
    compose_publish: "Publish",
    post_company_label: "Company",
    post_candidate_label: "Candidate",
    role_label_company: "Company",
    role_label_candidate: "Candidate",
    btn_logout: "Sign out",
    tab_login: "Sign in",
    tab_register: "Create account",
    login_title: "Sign in",
    register_title: "Create account",
    field_email: "Email",
    field_password: "Password",
    field_confirm: "Confirm",
    field_lastname: "Last name",
    field_firstname: "First name",
    field_remember: "Remember me",
    field_region: "Region",
    field_phone: "Phone",
    link_forgot: "Forgot password?",
    btn_login: "Sign in",
    btn_register: "Create account",
    role_candidate: "Apply",
    role_company: "Company",
    placeholder_email: "your email",
    aside_eyebrow: "Internship tracking",
    aside_title_1: "Your internships,",
    aside_title_2: "organized.",
    aside_text:
      "Centralize your applications, track every status, and keep a clear view of your progress.",
    feature_1: "Offers feed",
    feature_2: "Status tracking",
    feature_3: "Full history",
    search_title: "Search",
    search_sub: "Find an announcement or a company.",
    search_field: "What are you looking for?",
    search_placeholder: "Title, company, keyword…",
    empty_search: "No result.",
    notifications_title: "Notifications",
    notifications_sub: "Your latest alerts.",
    empty_notifications: "No notification yet.",
    messages_title: "Messages",
    messages_sub: "Your recent conversations.",
    empty_messages: "No conversation yet.",
    settings_title: "Settings",
    settings_profile: "Profile",
    settings_photo: "Profile picture",
    settings_name: "Name",
    settings_email: "Email",
    settings_region: "Region",
    settings_phone: "Phone",
    settings_role: "Role",
    settings_theme: "Theme",
    settings_mode: "Mode",
    settings_language: "Language",
    settings_danger: "Account",
    settings_password: "Change password",
    settings_delete: "Delete account",
  },
};

function applyTheme(theme) {
  document.body.classList.toggle("theme-light", theme === "light");
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  applyTheme(theme);
}

function initThemeToggle() {
  const root = document.getElementById("themeToggle");
  if (!root) return;
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme]");
    if (!btn) return;
    const next = btn.dataset.theme;
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

function initPasswordToggles() {
  document.querySelectorAll("[data-toggle-password]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      const icon = btn.querySelector(".field-password__icon");
      if (icon) {
        icon.src = isPassword
          ? "images/mdpvisible.png"
          : "images/mdpinvisible.png";
      }
    });
  });
}

function initEnterNavigation() {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const target = e.target;
      if (!target.matches("input")) return;
      if (target.type === "submit" || target.type === "button") return;

      const fields = [...form.querySelectorAll("input")].filter(
        (el) =>
          !el.disabled &&
          el.type !== "hidden" &&
          el.type !== "submit" &&
          el.type !== "button",
      );
      const index = fields.indexOf(target);
      if (index === -1) return;

      if (index === fields.length - 1) return;

      e.preventDefault();
      fields[index + 1].focus();
    });
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  document.querySelectorAll(".lang-switch__option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.querySelectorAll(".mini-switch__btn[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const icon = document.getElementById("langSwitchIcon");
  if (icon) icon.src = `images/${lang}.png`;

  const page = document.body.dataset.page;
  if (page === "app") {
    renderFeed();
    renderMyPosts();
    const input = document.getElementById("searchInput");
    renderSearch(input ? input.value.trim() : "");
    refreshRoleLabel();
  }
}

function initLangSwitch() {
  const root = document.getElementById("langSwitch");
  const trigger = document.getElementById("langSwitchBtn");
  if (!root || !trigger) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    root.classList.toggle("open");
    trigger.setAttribute(
      "aria-expanded",
      root.classList.contains("open") ? "true" : "false",
    );
  });

  root.addEventListener("click", (e) => {
    const opt = e.target.closest("[data-lang]");
    if (!opt) return;
    const next = opt.dataset.lang;
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
    root.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) {
      root.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function initMiniLangSwitch() {
  const root = document.getElementById("langSwitch");
  if (!root) return;
  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".mini-switch__btn[data-lang]");
    if (!btn) return;
    const next = btn.dataset.lang;
    localStorage.setItem(LANG_KEY, next);
    applyLang(next);
  });
}

function initSettingsMenu() {
  const menu = document.querySelector(".settings-menu");
  if (!menu) return;

  const switchPane = (name) => {
    menu
      .querySelectorAll(".settings-menu__btn")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.settingsTab === name),
      );
    document.querySelectorAll(".settings-pane").forEach((p) => {
      p.hidden = p.dataset.settingsPane !== name;
    });
  };

  menu.querySelectorAll(".settings-menu__btn").forEach((btn) => {
    btn.addEventListener("click", () => switchPane(btn.dataset.settingsTab));
  });

  switchPane("profile");
}

initTheme();

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initPasswordToggles();
  initLangSwitch();
  initMiniLangSwitch();
  initEnterNavigation();
  initSettingsMenu();

  const lang = localStorage.getItem(LANG_KEY) || "fr";
  applyLang(lang);

  const page = document.body.dataset.page;
  if (page === "auth") initAuth();
  if (page === "app") initApp();
});

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const show = (el, msg) => {
  if (el) {
    el.textContent = msg;
    el.hidden = false;
  }
};
const hide = (el) => {
  if (el) el.hidden = true;
};
const fmtDate = (iso) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};
const fmtTimeAgo = (iso) => {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "à l'instant";
  if (min < 60) return `il y a ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 7) return `il y a ${d} j`;
  return fmtDate(iso);
};
const escapeHtml = (s = "") =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );

function initAuth() {
  Auth.redirectIfLogged();

  const switchTab = (name) => {
    $$(".auth-tab").forEach((t) =>
      t.classList.toggle("active", t.dataset.authTab === name),
    );
    $$(".auth-panel").forEach((p) => (p.hidden = p.dataset.authPanel !== name));
    if (location.hash !== "#" + name)
      history.replaceState(null, "", "#" + name);
  };

  $$(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.authTab));
  });

  if (location.hash === "#register") switchTab("register");
  else switchTab("login");

  const loginForm = $("#loginForm");
  const loginErr = $("#loginError");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    hide(loginErr);
    const email = $("#loginEmail").value.trim();
    const password = $("#loginPassword").value;
    if (!email || !password)
      return show(loginErr, "Merci de remplir tous les champs.");
    const res = Auth.login(email, password);
    if (!res.ok) return show(loginErr, res.error);
    window.location.href = "index.html";
  });

  const regForm = $("#registerForm");
  const regErr = $("#registerError");
  const regOk = $("#registerSuccess");
  regForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    hide(regErr);
    hide(regOk);
    const role = regForm.querySelector('input[name="role"]:checked')?.value;
    const firstName = $("#firstName").value.trim();
    const lastName = $("#lastName").value.trim();
    const email = $("#registerEmail").value.trim();
    const region = $("#registerRegion")?.value.trim() || "";
    const phone = $("#registerPhone")?.value.trim() || "";
    const password = $("#registerPassword").value;
    const confirm = $("#registerConfirm").value;
    if (!firstName || !lastName || !email || !password)
      return show(regErr, "Tous les champs sont obligatoires.");
    if (password.length < 6)
      return show(
        regErr,
        "Le mot de passe doit contenir au moins 6 caractères.",
      );
    if (password !== confirm)
      return show(regErr, "Les mots de passe ne correspondent pas.");
    const res = Auth.register({
      firstName,
      lastName,
      email,
      password,
      role,
      region,
      phone,
    });
    if (!res.ok) return show(regErr, res.error);
    show(regOk, "Compte créé avec succès ! Redirection…");
    setTimeout(() => (location.href = "index.html"), 800);
  });
}

function buildPostCard(p) {
  const dict = I18N[document.documentElement.lang] || I18N.fr;
  const initial = (p.author || "?").trim().charAt(0).toUpperCase();
  const roleClass =
    p.authorRole === "company"
      ? "feed-card__role--company"
      : "feed-card__role--candidate";
  const roleLabel =
    p.authorRole === "company"
      ? dict.post_company_label
      : dict.post_candidate_label;

  const card = document.createElement("article");
  card.className = "feed-card";
  card.innerHTML = `
    <header class="feed-card__head">
      <span class="feed-card__avatar">
        ${p.authorAvatar ? `<img src="${p.authorAvatar}" alt="" />` : escapeHtml(initial)}
      </span>
      <span class="feed-card__meta">
        <span class="feed-card__author">${escapeHtml(p.author || "")}</span>
        <span class="feed-card__time">${fmtTimeAgo(p.createdAt)}</span>
      </span>
    </header>
    <div class="feed-card__body">
      <span class="feed-card__role ${roleClass}">${roleLabel}</span>
      <h3 class="feed-card__title">${escapeHtml(p.title || "")}</h3>
      ${p.company ? `<p class="feed-card__company">${escapeHtml(p.company)}</p>` : ""}
      ${p.text ? `<p class="feed-card__text">${escapeHtml(p.text)}</p>` : ""}
    </div>
    ${p.image ? `<img class="feed-card__image" src="${escapeHtml(p.image)}" alt="" />` : ""}
    <footer class="feed-card__foot">
      <span class="feed-card__region">${escapeHtml(p.region || "")}</span>
    </footer>
  `;
  return card;
}

function renderFeed() {
  const list = document.getElementById("feedList");
  const empty = document.getElementById("feedEmpty");
  if (!list) return;

  const me = Auth.currentUser();
  const posts = Posts.all().filter((p) => !me || p.userId !== me.id);

  list.innerHTML = "";
  if (!posts.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  posts.forEach((p) => list.appendChild(buildPostCard(p)));
}

function renderMyPosts() {
  const list = document.getElementById("myPostsList");
  const empty = document.getElementById("myPostsEmpty");
  if (!list) return;

  const me = Auth.currentUser();
  if (!me) return;
  const mine = Posts.all().filter((p) => p.userId === me.id);

  list.innerHTML = "";
  if (!mine.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  mine.forEach((p) => list.appendChild(buildPostCard(p)));
}

function renderSearch(query) {
  const list = document.getElementById("searchList");
  const empty = document.getElementById("emptySearch");
  if (!list) return;

  const q = (query || "").toLowerCase().trim();
  const posts = Posts.all().filter((p) => {
    if (!q) return true;
    const hay = [
      p.title || "",
      p.company || "",
      p.text || "",
      p.author || "",
      p.region || "",
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });

  list.innerHTML = "";
  if (!posts.length) {
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  posts.forEach((p) => list.appendChild(buildPostCard(p)));
}

function refreshRoleLabel() {
  const user = Auth.currentUser();
  const el = document.getElementById("settingsRole");
  if (!user || !el) return;
  const dict = I18N[document.documentElement.lang] || I18N.fr;
  el.textContent =
    user.role === "company"
      ? dict.role_label_company
      : dict.role_label_candidate;
}

function initApp() {
  const user = Auth.requireAuth();
  if (!user) return;
  document.body.classList.remove("auth-pending");

  renderFeed();
  renderMyPosts();
  renderSearch("");

  $("#settingsName").textContent = (
    (user.firstName || "") +
    " " +
    (user.lastName || "")
  ).trim();
  $("#settingsEmail").textContent = user.email || "—";
  $("#settingsRegion").textContent = user.region || "—";
  $("#settingsPhone").textContent = user.phone || "—";
  refreshRoleLabel();

  const avatarKey = "intern:avatar";

  const renderAvatar = () => {
    const preview = $("#profilePreview");
    if (!preview) return;
    const saved = localStorage.getItem(avatarKey);
    if (saved) {
      preview.innerHTML = `<img src="${saved}" alt="" />`;
    } else {
      const initial = (user.firstName || user.email || "?")
        .trim()
        .charAt(0)
        .toUpperCase();
      preview.innerHTML = `<span id="profileInitial">${initial}</span>`;
    }
  };

  renderAvatar();

  $("#logoutBtn")?.addEventListener("click", () => Auth.logout());

  $("#profilePhotoBtn")?.addEventListener("click", () => {
    $("#profilePhotoInput")?.click();
  });

  $("#profilePhotoInput")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      localStorage.setItem(avatarKey, ev.target.result);
      renderAvatar();
      renderFeed();
      renderMyPosts();
      const input = document.getElementById("searchInput");
      renderSearch(input ? input.value.trim() : "");
    };
    reader.readAsDataURL(file);
  });

  $("#profilePreview")?.addEventListener("click", () => {
    const saved = localStorage.getItem(avatarKey);
    if (!saved) return;
    const viewer = $("#avatarViewer");
    const img = $("#avatarViewerImg");
    if (!viewer || !img) return;
    img.src = saved;
    viewer.hidden = false;
  });

  $("#avatarViewerClose")?.addEventListener("click", () => {
    const viewer = $("#avatarViewer");
    if (viewer) viewer.hidden = true;
  });

  $("#avatarViewer")?.addEventListener("click", (e) => {
    if (e.target.id === "avatarViewer") {
      e.currentTarget.hidden = true;
    }
  });

  const announceBtn = $("#announceBtn");
  const composeForm = $("#composeForm");
  announceBtn?.addEventListener("click", () => {
    if (composeForm) composeForm.hidden = !composeForm.hidden;
  });

  const composeErr = $("#composeError");
  composeForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    hide(composeErr);
    const title = $("#composeTitle").value.trim();
    const company = $("#composeCompany").value.trim();
    const text = $("#composeText").value.trim();
    const image = $("#composeImage").value.trim();
    if (!title) return show(composeErr, "Le titre est obligatoire.");

    Posts.add({ title, company, text, image });
    composeForm.reset();
    composeForm.hidden = true;
    renderFeed();
    renderMyPosts();
    const input = document.getElementById("searchInput");
    renderSearch(input ? input.value.trim() : "");
  });

  const searchInput = $("#searchInput");
  searchInput?.addEventListener("input", () => {
    renderSearch(searchInput.value);
  });

  const switchView = (name) => {
    $$(".app-nav__btn[data-app-tab]").forEach((b) =>
      b.classList.toggle("active", b.dataset.appTab === name),
    );
    $$(".app-view").forEach((v) => (v.hidden = v.dataset.appView !== name));
    if (location.hash !== "#" + name)
      history.replaceState(null, "", "#" + name);
  };

  $$(".app-nav__btn[data-app-tab]").forEach((btn) => {
    btn.addEventListener("click", () => switchView(btn.dataset.appTab));
  });

  const hash = location.hash.replace("#", "");
  const validViews = [
    "home",
    "messages",
    "raids",
    "notifications",
    "search",
    "settings",
  ];
  if (validViews.includes(hash)) switchView(hash);
  else switchView("raids");
}
