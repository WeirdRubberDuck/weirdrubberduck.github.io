import { Container, Stack, Title } from "@mantine/core";
import { Publication } from "./Publication";
import { usePublications } from "./hooks";

export function PublicationsPage() {
  const { publications, error } = usePublications();

  if (error) return <Container p={"md"}>Error: {error.message}</Container>;

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
