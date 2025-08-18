import { useEffect, useState } from "react";
import type { PublicationData } from "@util/types";

export function usePublications() {
  const [publications, setPublications] = useState<PublicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPublications() {
      const files = import.meta.glob("/public/content/publications/*.json");
      const publicationPromises = Object.values(files).map(async (load) => {
        const mod = await load();
        return (mod as { default: PublicationData }).default;
      });
      const publications: PublicationData[] = await Promise.all(
        publicationPromises
      );

      console.log(publications);

      try {
        setPublications(publications);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchPublications();
  }, []);

  return { publications, loading, error };
}
