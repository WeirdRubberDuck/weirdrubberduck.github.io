import {
  ActionIcon,
  Container,
  Group,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";

import { FaEnvelope, FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { IconSize } from "@util/enums";
import { FaGoogleScholar } from "react-icons/fa6";

export function FrontPage() {
  return (
    <Container p={"md"}>
      <Group align="flex-start" gap={"xl"}>
        <Paper p="md" flex={2} miw={250}>
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

        <Paper p="md" flex={1} miw={200}>
          <Text mb={"sm"}>About me</Text>
          <Text c={"dimmed"}>PhD Student and Research Engineer</Text>
          <Text c={"dimmed"}>Linköping University</Text>

          <Group mt="md" gap={"xs"}>
            <Tooltip label="LinkedIn">
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
            </Tooltip>

            <Tooltip label="Github">
              <ActionIcon
                variant="subtle"
                onClick={() =>
                  window.open("https://github.com/WeirdRubberDuck", "_blank")
                }
              >
                <FaGithub size={IconSize.sm} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Google Scholar">
              <ActionIcon
                variant="subtle"
                onClick={() =>
                  window.open(
                    "https://scholar.google.com/citations?user=yOk0rWoAAAAJ&hl=sv",
                    "_blank"
                  )
                }
              >
                <FaGoogleScholar size={IconSize.sm} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="ORCID">
              <ActionIcon
                variant="subtle"
                onClick={() =>
                  window.open("https://orcid.org/0009-0006-0072-5134", "_blank")
                }
              >
                <FaOrcid size={IconSize.sm} />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Email">
              <ActionIcon
                variant="subtle"
                onClick={() =>
                  window.open("mailto:emma.broman@liu.se", "_blank")
                }
              >
                <FaEnvelope size={IconSize.sm} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Paper>
      </Group>
    </Container>
  );
}
