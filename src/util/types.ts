export interface PublicationData {
  title: string;
  authors: string[];
  venue: string;
  type: "Paper" | "Short Paper" | "Poster" | "Review Paper" | "Abstract";
  year: number;
  abstract: string;
  date: string; // ISO date string
  pdf: string; // Link to pdf
  doi?: string; // DOI link
  bib?: string; // Link to bibtex file (for download)
  thumbnail?: string; // Link to a thumbnail image
  code?: string; // Link to code repository
  website?: string; // Link to project website
  poster?: string; // Link to poster PDF/image
  video?: string; // Link to video
}
