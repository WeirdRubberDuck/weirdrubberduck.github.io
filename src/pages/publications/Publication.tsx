import {
  Card,
  Image,
  Group,
  Stack,
  Title,
  AspectRatio,
  Text,
} from "@mantine/core";
import "@mantine/core/styles.css";
import type { PublicationData } from "@util/types";
import { Fragment } from "react/jsx-runtime";

export function Publication({ data }: { data: PublicationData }) {
  console.log(data);

  return (
    <Card p={"md"}>
      <Group wrap="nowrap" align="top">
        <AspectRatio ratio={3 / 2} w={200}>
          <Image
            src={data.thumbnail}
            alt="Publication Image"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </AspectRatio>
        <Stack flex={1}>
          <Title order={3} size={"md"}>
            {data.title}
          </Title>
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
          <Group>
            {data.pdf && (
              <a href={data.pdf} target="_blank">
                PDF
              </a>
            )}
            {data.bib && (
              <a href={data.bib} target="_blank">
                BibTeX
              </a>
            )}
            {data.code && (
              <a href={data.code} target="_blank">
                Code
              </a>
            )}
          </Group>
        </Stack>
        <Stack align="end" justify="space-between">
          <Text>{data.year}</Text>
          <Text>{data.type}</Text>
        </Stack>
      </Group>
    </Card>
  );
}
