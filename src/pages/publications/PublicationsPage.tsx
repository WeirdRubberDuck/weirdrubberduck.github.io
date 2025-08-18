import { Container, Stack, Title } from "@mantine/core";
import { Publication } from "./Publication";
import { usePublications } from "./hooks";

export function PublicationsPage() {
  const { publications, loading, error } = usePublications();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(publications);

  return (
    <Container p={"md"}>
      <Title order={2} my={"lg"}>
        Publications
      </Title>
      <Stack>
        {publications
          .sort((a, b) => b.year - a.year)
          .map((pub) => (
            <Publication key={pub.title} data={pub} />
          ))}
      </Stack>
    </Container>
  );
}
