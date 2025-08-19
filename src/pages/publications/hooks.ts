import { useEffect, useState } from "react";
import type { PublicationData } from "@util/types";

export function usePublications() {
  const [publications, setPublications] = useState<PublicationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPublications() {
      // @TODO (2025-08-19) Eventually fix warning:
      // "Assets in public directory cannot be imported from JavaScript."
      // but for now it seems to work just fine
      const records = import.meta.glob("/public/content/publications/*.json", {
        eager: true, // Import all matching files directly
        import: "default",
      });

      const publications: PublicationData[] = Object.values(records).map(
        (record) => record as PublicationData
      );

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
