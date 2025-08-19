import { ActionIcon, Group, Tooltip } from "@mantine/core";

import { FaEnvelope, FaGithub, FaLinkedin, FaOrcid } from "react-icons/fa";
import { IconSize } from "@util/enums";
import { FaGoogleScholar } from "react-icons/fa6";

export function ContactLinks() {
  return (
    <Group gap={"xs"}>
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
          onClick={() => window.open("mailto:emma.broman@liu.se", "_blank")}
        >
          <FaEnvelope size={IconSize.sm} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
