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
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { lastUpdateDate } from "./update-date";

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

  const links = [
    <NavLink
      label="Bio"
      href="/"
      variant="subtle"
      active={window.location.pathname === "/"}
    />,
    <NavLink
      label="Publications"
      href="/publications"
      variant="subtle"
      active={window.location.pathname === "/publications"}
    />,
  ];

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
                {links.map((link, index) => (
                  <Box key={index}>{link}</Box>
                ))}
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
                  {links.map((link, index) => (
                    <Menu.Item key={index}>{link}</Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Flex>
        </AppShell.Header>
        <AppShell.Main bg="background">
          <Outlet />
        </AppShell.Main>
        <AppShell.Footer>
          <Center>
            <Group justify="center">
              <Text size="xs" c={"dimmed"}>
                © Emma Broman
              </Text>
              <Text size="xs" c={"dimmed"}>
                Last updated: {lastUpdateDate}
              </Text>
            </Group>
          </Center>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
