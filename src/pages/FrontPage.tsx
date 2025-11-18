import { ContactLinks } from "@components/ContactLinks";
import {
  Anchor,
  Box,
  Container,
  Group,
  Paper,
  Text,
  Image,
} from "@mantine/core";

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
            at Linköping University. A large portion of my work goes into the
            development of the{" "}
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
          <Text mb={"sm"}>Contact</Text>
          <Text c={"dimmed"}>Emma Broman</Text>
          <Text c={"dimmed"}>PhD Student and Research Engineer</Text>
          <Text c={"dimmed"}>Linköping University, Sweden</Text>
          <Box mt={"xs"}>
            <ContactLinks />
          </Box>
        </Paper>
      </Group>

      <Group justify="center" pt="lg">
        <Anchor href="https://liu.se/en">
          <Image
            src="/images/LiU_primary_white.png"
            alt="Linköping University Logo"
            maw="256"
          />
        </Anchor>
        <Anchor href="https://www.openspaceproject.com/">
          <Image
            src="/images/openspace-horiz-logo.png"
            alt="OpenSpace Logo"
            maw="256"
          />
        </Anchor>
      </Group>
    </Container>
  );
}
