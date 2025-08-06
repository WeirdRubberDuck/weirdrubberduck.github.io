import { ActionIcon, Container, Group, Paper, Text } from "@mantine/core";
import "@mantine/core/styles.css";
import { FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { IconSize } from "../util/enums";

export function FrontPage() {
  return (
    <Container p={"md"}>
      <Group align="flex-start" gap={"md"}>
        <Paper p="md" flex={3}>
          <Text mb={"sm"}>Hi, I'm Emma.</Text>
          <Text mb={"sm"}>
            I'm a PhD student and research engineer in the{" "}
            <a href="https://www.liu.se/en/research/immersive-visualization">
              immersive visualization unit
            </a>{" "}
            at Linköping University, Sweden. A large portion of my work goes
            into the developent of the{" "}
            <a href="https://www.openspaceproject.com/">OpenSpace software</a>.
          </Text>
          <Text>
            This page is a work in progress and is not yet functional, but here
            are some links for now. Feel free to connect!
          </Text>
        </Paper>
        <Paper p="md" flex={2}>
          <Text mb={"sm"}>About me</Text>
          <Text c={"dimmed"}>PhD Student and Research Engineer</Text>
          <Text c={"dimmed"}>Linköping University</Text>

          <Group mt="md" gap={"xs"}>
            <ActionIcon variant="subtle">
              <FaLinkedin
                size={IconSize.sm}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/emmamariebroman/",
                    "_blank"
                  )
                }
              />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() =>
                window.open("https://github.com/WeirdRubberDuck", "_blank")
              }
            >
              <FaGithub size={IconSize.sm} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              onClick={() =>
                window.open("https://orcid.org/0009-0006-0072-5134", "_blank")
              }
            >
              <FaOrcid size={IconSize.sm} />
            </ActionIcon>
          </Group>
        </Paper>
      </Group>
    </Container>
  );
}
