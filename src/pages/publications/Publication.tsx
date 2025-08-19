import {
  Card,
  Image,
  Group,
  Stack,
  Title,
  AspectRatio,
  Text,
  Anchor,
  Flex,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { IconSize } from "@util/enums";
import type { PublicationData } from "@util/types";
import { FaCode, FaRegFilePdf } from "react-icons/fa";
import { SiDoi } from "react-icons/si";
import { Fragment } from "react/jsx-runtime";

export function Publication({ data }: { data: PublicationData }) {
  console.log(data);

  return (
    <Card p={"md"}>
      <Group wrap="nowrap" align="top">
        <AspectRatio ratio={3 / 2} w={200} visibleFrom="sm">
          <Image
            src={data.thumbnail}
            alt="Publication Image"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </AspectRatio>
        <Stack flex={1}>
          <Group justify="space-between" align="top">
            <Title order={3} flex={1} size={"md"}>
              {data.title}
            </Title>
            <Text>{data.year}</Text>
          </Group>
          <Text>
            {data.authors.map((author, idx) => (
              <Fragment key={author + idx}>
                {author === "Emma Broman" ? (
                  <Text span>{author}</Text>
                ) : (
                  <Text span c={"dimmed"}>
                    {author}
                  </Text>
                )}
                {idx < data.authors.length - 1 && ", "}
              </Fragment>
            ))}
          </Text>
          <Text c="dimmed">{data.venue}</Text>
          <Group justify="space-between">
            <Group gap={"xs"}>
              {data.pdf && (
                <Anchor href={data.doi} target="_blank">
                  <Flex align={"center"} gap={4}>
                    <FaRegFilePdf size={IconSize.xs} />
                    PDF
                  </Flex>
                </Anchor>
              )}

              {data.bib && (
                <Anchor href={data.bib} target="_blank" download>
                  BibTeX
                </Anchor>
              )}
              {data.code && (
                <Anchor href={data.code} target="_blank">
                  <Flex align={"center"} gap={4}>
                    <FaCode size={IconSize.xs} />
                    Code
                  </Flex>{" "}
                </Anchor>
              )}
              {data.doi && (
                <Anchor href={data.doi} target="_blank">
                  <Flex align={"center"} gap={4}>
                    <SiDoi size={IconSize.xs} />
                    DOI
                  </Flex>
                </Anchor>
              )}
            </Group>
            <Text>{data.type}</Text>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
}
