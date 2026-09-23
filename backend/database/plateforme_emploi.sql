-- =====================================================================
--  Plateforme d'offres d'emploi et de stage  -  PostgreSQL
--  Contenu : suppression, création des tables, index, vue,
--            données de test, exemples de requêtes
--  Exécuter sur une base vide (les ids des données de test
--  supposent que les compteurs d'identifiants partent de 1).
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- 0. Nettoyage (ordre inverse des dépendances)
-- ---------------------------------------------------------------------
DROP VIEW  IF EXISTS v_offres_publiees;
DROP TABLE IF EXISTS moderation          CASCADE;
DROP TABLE IF EXISTS candidat_competence CASCADE;
DROP TABLE IF EXISTS offre_competence    CASCADE;
DROP TABLE IF EXISTS favori              CASCADE;
DROP TABLE IF EXISTS candidature         CASCADE;
DROP TABLE IF EXISTS offre               CASCADE;
DROP TABLE IF EXISTS administrateur      CASCADE;
DROP TABLE IF EXISTS competence          CASCADE;
DROP TABLE IF EXISTS categorie           CASCADE;
DROP TABLE IF EXISTS type_offre          CASCADE;
DROP TABLE IF EXISTS entreprise          CASCADE;
DROP TABLE IF EXISTS candidat            CASCADE;

-- ---------------------------------------------------------------------
-- 1. Tables issues des entités
-- ---------------------------------------------------------------------
CREATE TABLE candidat (
    id_candidat       INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nom               VARCHAR(50)  NOT NULL,
    prenom            VARCHAR(50)  NOT NULL,
    email             VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe      VARCHAR(255) NOT NULL,          -- hash (bcrypt / argon2)
    telephone         VARCHAR(20),
    ville             VARCHAR(80),
    niveau_etude      VARCHAR(50),
    cv                VARCHAR(255),                   -- chemin du fichier
    date_inscription  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE entreprise (
    id_entreprise     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nom               VARCHAR(100) NOT NULL,
    secteur_activite  VARCHAR(100),
    description       TEXT,
    site_web          VARCHAR(255),
    email             VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe      VARCHAR(255) NOT NULL,          -- hash
    logo              VARCHAR(255),
    adresse           VARCHAR(255),
    ville             VARCHAR(80)
);

CREATE TABLE administrateur (
    id_admin          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nom               VARCHAR(50)  NOT NULL,
    email             VARCHAR(100) NOT NULL UNIQUE,
    mot_de_passe      VARCHAR(255) NOT NULL           -- hash
);

CREATE TABLE type_offre (
    id_type           INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    libelle           VARCHAR(50)  NOT NULL UNIQUE
);

CREATE TABLE categorie (
    id_categorie      INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    libelle           VARCHAR(80)  NOT NULL UNIQUE
);

CREATE TABLE competence (
    id_competence     INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    libelle           VARCHAR(80)  NOT NULL UNIQUE
);

CREATE TABLE offre (
    id_offre          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    titre             VARCHAR(150) NOT NULL,
    description       TEXT         NOT NULL,
    lieu              VARCHAR(100),
    date_publication  DATE         NOT NULL DEFAULT CURRENT_DATE,
    date_expiration   DATE,
    remuneration      NUMERIC(10,2),                  -- salaire ou gratification, peut être NULL
    duree_mois        INT,                            -- stages uniquement, peut être NULL
    statut            VARCHAR(20)  NOT NULL DEFAULT 'en_attente',
    id_entreprise     INT NOT NULL,
    id_type           INT NOT NULL,
    id_categorie      INT NOT NULL,

    CONSTRAINT ck_offre_statut
        CHECK (statut IN ('en_attente', 'publiee', 'refusee', 'expiree')),
    CONSTRAINT ck_offre_remuneration
        CHECK (remuneration IS NULL OR remuneration >= 0),
    CONSTRAINT ck_offre_duree
        CHECK (duree_mois IS NULL OR duree_mois > 0),
    CONSTRAINT ck_offre_dates
        CHECK (date_expiration IS NULL OR date_expiration >= date_publication),

    CONSTRAINT fk_offre_entreprise
        FOREIGN KEY (id_entreprise) REFERENCES entreprise (id_entreprise)
        ON DELETE CASCADE,
    CONSTRAINT fk_offre_type
        FOREIGN KEY (id_type) REFERENCES type_offre (id_type)
        ON DELETE RESTRICT,
    CONSTRAINT fk_offre_categorie
        FOREIGN KEY (id_categorie) REFERENCES categorie (id_categorie)
        ON DELETE RESTRICT
);

-- ---------------------------------------------------------------------
-- 2. Tables issues des associations (0,n)-(0,n)
-- ---------------------------------------------------------------------

-- POSTULER
CREATE TABLE candidature (
    id_candidat        INT NOT NULL,
    id_offre           INT NOT NULL,
    date_candidature   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    statut             VARCHAR(20) NOT NULL DEFAULT 'en_attente',
    lettre_motivation  TEXT,

    PRIMARY KEY (id_candidat, id_offre),               -- une seule candidature par offre
    CONSTRAINT ck_candidature_statut
        CHECK (statut IN ('en_attente', 'acceptee', 'refusee')),
    CONSTRAINT fk_candidature_candidat
        FOREIGN KEY (id_candidat) REFERENCES candidat (id_candidat)
        ON DELETE CASCADE,
    CONSTRAINT fk_candidature_offre
        FOREIGN KEY (id_offre) REFERENCES offre (id_offre)
        ON DELETE RESTRICT                             -- on garde l'historique
);

-- ENREGISTRER (favoris)
CREATE TABLE favori (
    id_candidat  INT NOT NULL,
    id_offre     INT NOT NULL,
    date_ajout   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id_candidat, id_offre),
    CONSTRAINT fk_favori_candidat
        FOREIGN KEY (id_candidat) REFERENCES candidat (id_candidat)
        ON DELETE CASCADE,
    CONSTRAINT fk_favori_offre
        FOREIGN KEY (id_offre) REFERENCES offre (id_offre)
        ON DELETE CASCADE
);

-- REQUERIR
CREATE TABLE offre_competence (
    id_offre        INT NOT NULL,
    id_competence   INT NOT NULL,
    niveau_requis   SMALLINT NOT NULL DEFAULT 1,       -- 1 débutant, 2 intermédiaire, 3 avancé

    PRIMARY KEY (id_offre, id_competence),
    CONSTRAINT ck_offre_competence_niveau
        CHECK (niveau_requis BETWEEN 1 AND 3),
    CONSTRAINT fk_oc_offre
        FOREIGN KEY (id_offre) REFERENCES offre (id_offre)
        ON DELETE CASCADE,
    CONSTRAINT fk_oc_competence
        FOREIGN KEY (id_competence) REFERENCES competence (id_competence)
        ON DELETE CASCADE
);

-- POSSEDER
CREATE TABLE candidat_competence (
    id_candidat     INT NOT NULL,
    id_competence   INT NOT NULL,
    niveau          SMALLINT NOT NULL DEFAULT 1,       -- 1 débutant, 2 intermédiaire, 3 avancé

    PRIMARY KEY (id_candidat, id_competence),
    CONSTRAINT ck_candidat_competence_niveau
        CHECK (niveau BETWEEN 1 AND 3),
    CONSTRAINT fk_cc_candidat
        FOREIGN KEY (id_candidat) REFERENCES candidat (id_candidat)
        ON DELETE CASCADE,
    CONSTRAINT fk_cc_competence
        FOREIGN KEY (id_competence) REFERENCES competence (id_competence)
        ON DELETE CASCADE
);

-- MODERER
CREATE TABLE moderation (
    id_admin          INT NOT NULL,
    id_offre          INT NOT NULL,
    date_moderation   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    decision          VARCHAR(20) NOT NULL,

    PRIMARY KEY (id_admin, id_offre),
    CONSTRAINT ck_moderation_decision
        CHECK (decision IN ('approuvee', 'refusee')),
    CONSTRAINT fk_moderation_admin
        FOREIGN KEY (id_admin) REFERENCES administrateur (id_admin)
        ON DELETE RESTRICT,
    CONSTRAINT fk_moderation_offre
        FOREIGN KEY (id_offre) REFERENCES offre (id_offre)
        ON DELETE CASCADE
);

-- ---------------------------------------------------------------------
-- 3. Index (les clés primaires composées couvrent déjà la 1re colonne)
-- ---------------------------------------------------------------------
CREATE INDEX idx_offre_entreprise   ON offre (id_entreprise);
CREATE INDEX idx_offre_type         ON offre (id_type);
CREATE INDEX idx_offre_categorie    ON offre (id_categorie);
CREATE INDEX idx_offre_statut_date  ON offre (statut, date_publication DESC);
CREATE INDEX idx_candidature_offre  ON candidature (id_offre);
CREATE INDEX idx_favori_offre       ON favori (id_offre);
CREATE INDEX idx_oc_competence      ON offre_competence (id_competence);
CREATE INDEX idx_cc_competence      ON candidat_competence (id_competence);
CREATE INDEX idx_moderation_offre   ON moderation (id_offre);

-- ---------------------------------------------------------------------
-- 4. Vue : offres visibles par les candidats
-- ---------------------------------------------------------------------
CREATE VIEW v_offres_publiees AS
SELECT  o.id_offre,
        o.titre,
        o.lieu,
        o.date_publication,
        o.date_expiration,
        o.remuneration,
        o.duree_mois,
        t.libelle AS type_offre,
        c.libelle AS categorie,
        e.nom     AS entreprise
FROM    offre o
JOIN    type_offre t ON t.id_type      = o.id_type
JOIN    categorie  c ON c.id_categorie = o.id_categorie
JOIN    entreprise e ON e.id_entreprise = o.id_entreprise
WHERE   o.statut = 'publiee'
  AND  (o.date_expiration IS NULL OR o.date_expiration >= CURRENT_DATE);

-- ---------------------------------------------------------------------
-- 5. Données de test (les mots de passe sont des faux hash)
-- ---------------------------------------------------------------------
INSERT INTO type_offre (libelle) VALUES
    ('CDI'), ('CDD'), ('Stage'), ('Alternance'), ('Freelance');          -- ids 1 à 5

INSERT INTO categorie (libelle) VALUES
    ('Informatique'), ('Marketing'), ('Finance'),
    ('Ressources humaines'), ('Design');                                 -- ids 1 à 5

INSERT INTO competence (libelle) VALUES
    ('Python'), ('SQL'), ('JavaScript'), ('Excel'),
    ('Anglais'), ('Communication');                                      -- ids 1 à 6

INSERT INTO entreprise (nom, secteur_activite, description, site_web, email, mot_de_passe, adresse, ville) VALUES
    ('TechNova',       'Informatique', 'Editeur de logiciels.',      'https://technova.example',  'rh@technova.example',   '$2b$12$FAUX_HASH_ENTREPRISE_1', '12 rue des Lilas',  'Ville A'),
    ('FinConseil',     'Finance',      'Cabinet de conseil.',        'https://finconseil.example','rh@finconseil.example', '$2b$12$FAUX_HASH_ENTREPRISE_2', '3 avenue Centrale', 'Ville B'),
    ('Studio Créatif', 'Communication','Agence de design et de marketing.', NULL,                 'jobs@studio.example',   '$2b$12$FAUX_HASH_ENTREPRISE_3', '8 place du Marché', 'Ville A');  -- ids 1 à 3

INSERT INTO candidat (nom, prenom, email, mot_de_passe, telephone, ville, niveau_etude) VALUES
    ('Rakoto',  'Aina',  'aina@example.com',  '$2b$12$FAUX_HASH_CANDIDAT_1', '0340000001', 'Ville A', 'Licence'),
    ('Rabe',    'Tsiky', 'tsiky@example.com', '$2b$12$FAUX_HASH_CANDIDAT_2', '0340000002', 'Ville B', 'Master'),
    ('Randria', 'Hery',  'hery@example.com',  '$2b$12$FAUX_HASH_CANDIDAT_3', '0340000003', 'Ville A', 'Bac+2');   -- ids 1 à 3

INSERT INTO administrateur (nom, email, mot_de_passe) VALUES
    ('Admin', 'admin@plateforme.example', '$2b$12$FAUX_HASH_ADMIN_1');                              -- id 1

INSERT INTO offre (titre, description, lieu, date_publication, date_expiration,
                   remuneration, duree_mois, statut, id_entreprise, id_type, id_categorie) VALUES
    ('Développeur Python',        'Développement d''API et de services internes.', 'Ville A', CURRENT_DATE - 5, CURRENT_DATE + 30, 2500.00, NULL, 'publiee',    1, 1, 1),  -- id 1
    ('Stage Développeur Web',     'Stage de 6 mois sur notre application web.',    'Ville A', CURRENT_DATE - 3, CURRENT_DATE + 20,  400.00, 6,    'publiee',    1, 3, 1),  -- id 2
    ('Analyste financier',        'Analyse de portefeuilles et reporting.',        'Ville B', CURRENT_DATE - 7, CURRENT_DATE + 25, 2200.00, NULL, 'publiee',    2, 1, 3),  -- id 3
    ('Stage Marketing digital',   'Stage de 3 mois : réseaux sociaux et contenu.', 'Ville A', CURRENT_DATE - 2, CURRENT_DATE + 15,  300.00, 3,    'publiee',    3, 3, 2),  -- id 4
    ('Designer UI',               'Conception d''interfaces pour applications.',   'Ville A', CURRENT_DATE,     CURRENT_DATE + 30, 1800.00, NULL, 'en_attente', 3, 2, 5);  -- id 5

INSERT INTO offre_competence (id_offre, id_competence, niveau_requis) VALUES
    (1, 1, 3), (1, 2, 2),
    (2, 3, 2), (2, 2, 1),
    (3, 4, 3), (3, 5, 2),
    (4, 6, 2), (4, 5, 1);

INSERT INTO candidat_competence (id_candidat, id_competence, niveau) VALUES
    (1, 1, 3), (1, 2, 2), (1, 5, 2),
    (2, 6, 3), (2, 5, 2),
    (3, 4, 2), (3, 2, 1);

INSERT INTO candidature (id_candidat, id_offre, statut, lettre_motivation) VALUES
    (1, 1, 'en_attente', 'Je suis très intéressé par ce poste.'),
    (1, 2, 'refusee',    'Candidature pour le stage web.'),
    (2, 4, 'acceptee',   'Motivée par le marketing digital.'),
    (3, 3, 'en_attente', NULL);

INSERT INTO favori (id_candidat, id_offre) VALUES
    (1, 2), (2, 4), (3, 3);

INSERT INTO moderation (id_admin, id_offre, decision) VALUES
    (1, 1, 'approuvee'), (1, 2, 'approuvee'),
    (1, 3, 'approuvee'), (1, 4, 'approuvee');

COMMIT;

-- =====================================================================
-- 6. Exemples de requêtes
-- =====================================================================

-- 6.1 Toutes les offres publiées et encore valides
-- SELECT * FROM v_offres_publiees ORDER BY date_publication DESC;

-- 6.2 Uniquement les offres de stage
-- SELECT * FROM v_offres_publiees WHERE type_offre = 'Stage';

-- 6.3 Recherche par mot-clé et catégorie
-- SELECT * FROM v_offres_publiees
-- WHERE categorie = 'Informatique' AND titre ILIKE '%python%';

-- 6.4 Candidatures d'un candidat (ici id 1)
-- SELECT o.titre, e.nom AS entreprise, c.date_candidature, c.statut
-- FROM candidature c
-- JOIN offre o      ON o.id_offre = c.id_offre
-- JOIN entreprise e ON e.id_entreprise = o.id_entreprise
-- WHERE c.id_candidat = 1
-- ORDER BY c.date_candidature DESC;

-- 6.5 Candidats ayant postulé à une offre d'une entreprise (ici id 1)
-- SELECT o.titre, ca.nom, ca.prenom, c.statut
-- FROM offre o
-- JOIN candidature c ON c.id_offre = o.id_offre
-- JOIN candidat ca   ON ca.id_candidat = c.id_candidat
-- WHERE o.id_entreprise = 1;

-- 6.6 Offres recommandées pour un candidat (compétences en commun, ici id 1)
-- SELECT o.id_offre, o.titre, COUNT(*) AS competences_communes
-- FROM offre o
-- JOIN offre_competence oc     ON oc.id_offre = o.id_offre
-- JOIN candidat_competence cc  ON cc.id_competence = oc.id_competence
--                             AND cc.id_candidat = 1
-- WHERE o.statut = 'publiee'
-- GROUP BY o.id_offre, o.titre
-- ORDER BY competences_communes DESC;

-- 6.7 Nombre de candidatures par offre
-- SELECT o.titre, COUNT(c.id_candidat) AS nb_candidatures
-- FROM offre o
-- LEFT JOIN candidature c ON c.id_offre = o.id_offre
-- GROUP BY o.id_offre, o.titre
-- ORDER BY nb_candidatures DESC;

-- 6.8 Marquer comme expirées les offres dont la date est dépassée
-- UPDATE offre SET statut = 'expiree'
-- WHERE statut = 'publiee' AND date_expiration < CURRENT_DATE;
