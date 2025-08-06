import {
  AppShell,
  Box,
  Center,
  createTheme,
  Flex,
  Group,
  MantineProvider,
  NavLink,
  Text,
  Tooltip,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { FrontPage } from "./pages/FrontPage";

const theme = createTheme({
  fontFamily: "'Afacad Flux',  sans-serif",
  headings: {
    fontFamily: "'Arial', sans-serif",
  },
  components: {
    Tooltip: Tooltip.extend({
      defaultProps: {
        withArrow: true,
        transitionProps: { duration: 400, enterDelay: 400 },
        position: "top",
      },
    }),
  },
});

export function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header p="xs">
          <Flex>
            <Flex w={150} align="center">
              <Text
                size="md"
                fw={500}
                c={"green"}
                style={{ fontFamily: "Verdana" }}
              >
                Emma Broman
              </Text>
            </Flex>

            <Center flex={1}>
              <Group>
                <Box>
                  <NavLink label="Bio" />
                </Box>
                <Box>
                  <NavLink label="Publications" />
                </Box>
              </Group>
            </Center>
            <Flex w={150} align="center" />
          </Flex>
        </AppShell.Header>
        <AppShell.Main bg="background">
          <FrontPage />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
