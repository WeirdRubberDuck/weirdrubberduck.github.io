import {
  AppShell,
  Box,
  Center,
  Container,
  createTheme,
  Group,
  MantineProvider,
  NavLink,
  Paper,
  Text,
} from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "'Afacad Flux',  sans-serif",
  headings: {
    fontFamily: "'Arial', sans-serif",
  },
});

export function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header p="xs">
          <Text
            size="lg"
            fw={"bold"}
            variant="gradient"
            gradient={{ from: "yellow", to: "forestgreen" }}
            style={{
              fontFamily: "'Arial', sans-serif",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Emma Broman
          </Text>
          <Center>
            <Group>
              <Box>
                <NavLink label="Bio" />
              </Box>
              <Box>
                <NavLink label="Publications" />
              </Box>
            </Group>
          </Center>
        </AppShell.Header>
        <AppShell.Main bg="dark.9">
          <Container p={"md"}>
            <Paper p="md">
              <Text>This page is a work in progress.</Text>
            </Paper>
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
