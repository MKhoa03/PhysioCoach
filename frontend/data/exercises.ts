// data/exercises.ts

export type Exercise = {
  id: string;
  area: string;          // "ruecken-nacken", "schultern-arme" ...
  title: string;
  duration: string;
  thumbnail?: any;       // später: require(...)
  video?: any | null;    // später: require(...)
  description?: string;
};

export const exercises: Exercise[] = [
  // ==== RÜCKEN & NACKEN ====
  {
    id: "r1",
    area: "ruecken-nacken",
    title: "Rücken-Dehnung leicht",
    duration: "5 Min",
    thumbnail: null,
    video: null,
    description: "Sanfte Übung zur Lockerung der Rückenmuskulatur."
  },
  {
    id: "r2",
    area: "ruecken-nacken",
    title: "Nacken-Mobilisation",
    duration: "6 Min",
    thumbnail: null,
    video: null,
    description: "Löst Verspannungen im Nacken."
  },

  // ==== SCHULTERN & ARME ====
  {
    id: "s1",
    area: "schultern-arme",
    title: "Schulterkreisen",
    duration: "4 Min",
    thumbnail: null,
    video: null,
    description: "Aktiviert die Schultermuskulatur und verbessert die Haltung."
  },
  {
    id: "s2",
    area: "schultern-arme",
    title: "Arme-Dehnen",
    duration: "5 Min",
    thumbnail: null,
    video: null,
    description: "Dehnt Arme und Brustmuskulatur."
  },

  // ==== BEINE & KNIE ====
  {
    id: "b1",
    area: "beine-knie",
    title: "Knie-Mobilisation",
    duration: "5 Min",
    thumbnail: null,
    video: null,
    description: "Stärkt das Knie und verbessert die Beweglichkeit."
  },
  {
    id: "b2",
    area: "beine-knie",
    title: "Bein-Stretching leicht",
    duration: "7 Min",
    thumbnail: null,
    video: null,
    description: "Sanftes Stretching für mehr Beweglichkeit."
  }
];