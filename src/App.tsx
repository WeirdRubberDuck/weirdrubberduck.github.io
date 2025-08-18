import {
  AppShell,
  Box,
  Burger,
  Center,
  createTheme,
  Flex,
  Group,
  MantineProvider,
  Menu,
  NavLink,
  Text,
  Tooltip,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { FrontPage } from "./pages/FrontPage";
import { useDisclosure } from "@mantine/hooks";
import { Route, Routes } from "react-router";
import { PublicationsPage } from "@pages/publications/PublicationsPage";

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
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header p="xs">
          <Flex align={"center"}>
            <Flex flex={1} miw={130} align="center">
              <Text
                size="md"
                fw={500}
                c={"green.3"}
                style={{ fontFamily: "Verdana" }}
              >
                Emma Broman
              </Text>
            </Flex>

            <Center flex={3} visibleFrom="xs">
              <Group>
                <Box>
                  <NavLink label="Bio" href="/" />
                </Box>
                <Box>
                  <NavLink label="Publications" href="/publications" />
                </Box>
              </Group>
            </Center>
            <Flex flex={1} miw={130} align="center" justify="flex-end">
              <Menu opened={opened} onChange={toggle}>
                <Menu.Target>
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="xs"
                    size="sm"
                    aria-label="Toggle navigation"
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Bio</Menu.Item>
                  <Menu.Item>Publications</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Flex>
        </AppShell.Header>
        <AppShell.Main bg="background">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
