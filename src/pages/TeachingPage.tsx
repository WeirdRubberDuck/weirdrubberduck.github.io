import { Container, Title, Text, List, Anchor, Divider } from "@mantine/core";
import { IconSize } from "@util/enums";
import { PiStudentFill } from "react-icons/pi";

export function TeachingPage() {
  const theses = [
    {
      year: 2024,
      authors: "Dennis Moradkhani & Tim Olsson",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-215337",
      title:
        "Cloud-Based Tablet User Interface for Real-Time Touch Interaction in OpenSpace",
    },
    {
      year: 2023,
      authors: "Andreas Engberg",
      link: "https://liu.diva-portal.org/smash/record.jsf?pid=diva2%3A1889204&dswid=-4189",
      title:
        "Investigating the Chemical Cartography of the Galaxy Through Visualization",
    },
    {
      year: 2023,
      authors: "Märta Nilsson & Robin Ridell",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-199028",
      title:
        "Using Point Cloud Interpolation to Present a Cosmic View of Life on Earth",
    },
    {
      year: 2022,
      authors: "Victor Lindquist & Jacob Molin",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-196497",
      title:
        "Astronomy Software Integration with OpenSpace in Distributed Systems",
    },
    {
      year: 2022,
      authors: "Emma Segolsson & Linn Storesund",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-190669",
      title:
        "A Cosmic View of Life on Earth: Visualizing the relationship between species DNA in a threedimensional space",
    },
    {
      year: 2021,
      authors: "Ester Lindgren & Ylva Selling",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-192108",
      title:
        "Interactive Visualization of Astronomy Images: Integrating AAS WorldWide Telescope into OpenSpace",
    },
    {
      year: 2020,
      authors: "Aniisa Bihi & Johanna Granström",
      link: "https://urn.kb.se/resolve?urn=urn:nbn:se:liu:diva-173569",
      title: "Astronomy Software Integration with OpenSpace",
    },
  ];
  return (
    <Container p={"md"}>
      <Title order={2} mb={"md"}>
        Teaching
      </Title>
      <Text>
        I'm involved in teaching as a teaching assistant in the following
        topics:
      </Text>
      <List>
        <List.Item>
          <Anchor href="https://studieinfo.liu.se/kurs/TNM079/">
            Modelling and Animation
          </Anchor>
          , Linköping University, 2021-now
        </List.Item>
        <List.Item>
          <Anchor href="https://studieinfo.liu.se/kurs/TNM093/">
            Practical Data Visualization and Virtual Reality
          </Anchor>
          , Linköping University, 2020-now
        </List.Item>
      </List>
      <Divider my={"lg"} />
      <Title order={3} mt={"lg"} mb={"md"}>
        M.Sc. Thesis Supervision
      </Title>
      <Text>
        I also have the pleasure of supervising M.Sc. students at Linköping
        University. The following M.Sc. theses were completed by students in the
        Media Technology and Engineering program.
      </Text>
      <List
        mt={"md"}
        spacing={"sm"}
        icon={<PiStudentFill size={IconSize.md} />}
      >
        {theses.map((thesis) => (
          <List.Item key={thesis.year + thesis.authors}>
            {thesis.year}, {thesis.authors} <br />
            <Anchor href={thesis.link}>{thesis.title}</Anchor>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
