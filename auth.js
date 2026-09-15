const ID = {
  SESSION: "intern:session",
  USERS: "intern:users",
  REQS: "intern:requests",
  POSTS: "intern:posts",
};

const uid = () =>
  crypto && crypto.randomUUID
    ? crypto.randomUUID()
    : "u_" + Math.random().toString(36).slice(2) + Date.now().toString(36);

const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw === "" || raw === "undefined") return fallback;
      const val = JSON.parse(raw);
      return val ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },
};

const Auth = {
  currentUser() {
    const u = store.get(ID.SESSION, null);
    if (!u || typeof u !== "object" || !u.id) return null;
    return u;
  },

  login(email, password) {
    if (email === "johanes" && password === "johanes") {
      const user = {
        id: "johanes",
        email: "johanes",
        firstName: "Johanes",
        lastName: "",
        role: "candidate",
        region: "Antananarivo",
        phone: "+261 34 00 000 00",
      };
      store.set(ID.SESSION, user);
      return { ok: true, user };
    }

    const users = store.get(ID.USERS, []);
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (found) {
      store.set(ID.SESSION, found);
      return { ok: true, user: found };
    }

    return { ok: false, error: "Email ou mot de passe invalide." };
  },

  register({ firstName, lastName, email, password, role, region, phone }) {
    const users = store.get(ID.USERS, []);
    if (users.some((u) => u.email === email)) {
      return { ok: false, error: "Cet email est déjà utilisé." };
    }
    const user = {
      id: uid(),
      firstName,
      lastName,
      email,
      password,
      role: role || "candidate",
      region: region || "",
      phone: phone || "",
    };
    users.push(user);
    store.set(ID.USERS, users);
    store.set(ID.SESSION, user);
    return { ok: true, user };
  },

  logout() {
    localStorage.removeItem(ID.SESSION);
    window.location.href = "auth.html";
  },

  requireAuth() {
    const u = this.currentUser();
    if (!u) {
      window.location.href = "auth.html";
      return null;
    }
    return u;
  },

  redirectIfLogged() {
    if (this.currentUser()) window.location.href = "index.html";
  },
};

const Requests = {
  all() {
    const user = Auth.currentUser();
    if (!user) return [];
    return store.get(ID.REQS, []).filter((r) => r.userId === user.id);
  },
  add(data) {
    const user = Auth.currentUser();
    if (!user) return null;
    const all = store.get(ID.REQS, []);
    const req = {
      id: uid(),
      userId: user.id,
      createdAt: new Date().toISOString(),
      ...data,
    };
    all.push(req);
    store.set(ID.REQS, all);
    return req;
  },
  remove(id) {
    const all = store.get(ID.REQS, []).filter((r) => r.id !== id);
    store.set(ID.REQS, all);
  },
};

const Posts = {
  all() {
    return store
      .get(ID.POSTS, [])
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },
  add(data) {
    const user = Auth.currentUser();
    if (!user) return null;
    const all = store.get(ID.POSTS, []);
    const post = {
      id: uid(),
      userId: user.id,
      author: (user.firstName || "") + " " + (user.lastName || ""),
      authorRole: user.role || "candidate",
      authorAvatar: localStorage.getItem("intern:avatar") || "",
      region: user.region || "",
      createdAt: new Date().toISOString(),
      ...data,
    };
    all.push(post);
    store.set(ID.POSTS, all);
    return post;
  },
  remove(id) {
    const all = store.get(ID.POSTS, []).filter((p) => p.id !== id);
    store.set(ID.POSTS, all);
  },
};
