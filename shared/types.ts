export type ModalitySlug = "boxe" | "jiu-jitsu" | "muay-thai" | "mma";

export type Instructor = {
  name: string;
  specialty: string;
  schedule: string;
  image: string;
  achievements: readonly string[];
};

export type Modality = {
  slug: ModalitySlug;
  path: `/${ModalitySlug}`;
  number: string;
  name: string;
  label: string;
  headline: string;
  instructor: string;
  instructors: readonly Instructor[];
  summary: string;
  focus: string;
  pillars: readonly string[];
};
