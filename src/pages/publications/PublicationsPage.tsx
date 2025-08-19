import { Accordion, Container, Divider, Title } from "@mantine/core";
import { Publication } from "./Publication";
import { usePublications } from "./hooks";

export function PublicationsPage() {
  const { publications, error } = usePublications();

  if (error) return <Container p={"md"}>Error: {error.message}</Container>;

  return (
    <Container p={"md"}>
      <Title order={2} my={"lg"}>
        Publications
      </Title>
      <Accordion variant="separated" chevron={<></>}>
        {publications
          .sort((a, b) => b.year - a.year)
          .map((pub) => (
            <Accordion.Item key={pub.title} value={pub.title}>
              <Accordion.Control aria-label={pub.title}>
                <Publication data={pub} />
              </Accordion.Control>
              <Accordion.Panel>
                <Divider mb={"xs"} />
                {pub.abstract}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
      </Accordion>
    </Container>
  );
}
