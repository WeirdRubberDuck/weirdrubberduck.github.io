export interface PublicationData {
  title: string;
  authors: string[];
  venue: string;
  type: "Paper" | "Short Paper" | "Poster" | "Review Paper" | "Abstract";
  year: number;
  date: string; // ISO date string
  doi: string;
  pdf: string;
  bib: string;
  thumbnail: string;
  code: string;
}
