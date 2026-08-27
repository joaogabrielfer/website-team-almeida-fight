export type ModalitySlug = "boxe" | "jiu-jitsu" | "muay-thai" | "mma";

export type Modality = {
  slug: ModalitySlug;
  path: `/${ModalitySlug}`;
  number: string;
  name: string;
  label: string;
  headline: string;
  instructor: string;
  summary: string;
  focus: string;
  pillars: readonly string[];
};
