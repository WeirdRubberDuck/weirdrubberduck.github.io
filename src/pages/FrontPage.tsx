import { ContactLinks } from "@components/ContactLinks";
import { Anchor, Box, Container, Group, Paper, Text } from "@mantine/core";

export function FrontPage() {
  return (
    <Container p={"md"}>
      <Group align="flex-start" gap={"lg"}>
        <Paper p="md" flex={2} miw={250}>
          <Text size="xl" mb={"sm"}>
            Hi, I'm Emma
          </Text>
          <Text mb={"sm"}>
            a PhD student and research engineer in the{" "}
            <Anchor href="https://www.liu.se/en/research/immersive-visualization">
              immersive visualization unit
            </Anchor>{" "}
            at Linköping University, Sweden. A large portion of my work goes
            into the development of the{" "}
            <Anchor href="https://www.openspaceproject.com/">
              OpenSpace software
            </Anchor>
            .
          </Text>
          <Text>
            My research focuses on visualization for digital domes,
            planetariums, and astronomy applications. Feel free to connect!
          </Text>
        </Paper>

        <Paper p="md" flex={1} miw={200}>
          <Text mb={"sm"}>About me</Text>
          <Text c={"dimmed"}>PhD Student and Research Engineer</Text>
          <Text c={"dimmed"}>Linköping University, Sweden</Text>
          <Box mt={"xs"}>
            <ContactLinks />
          </Box>
        </Paper>
      </Group>
    </Container>
  );
}
