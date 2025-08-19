import {
  Anchor,
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
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import { lastUpdateDate } from "./update-date";
import { ContactLinks } from "@components/ContactLinks";

const theme = createTheme({
  fontFamily: "'Afacad Flux',  sans-serif",
  headings: {
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: "600",
  },
  components: {
    Tooltip: Tooltip.extend({
      defaultProps: {
        withArrow: true,
        transitionProps: { duration: 400, enterDelay: 400 },
        position: "top",
      },
    }),
    NavLink: NavLink.extend({
      defaultProps: {
        variant: "subtle",
        style: { fontFamily: "'Work Sans', sans-serif" },
      },
    }),
  },
});

export function App() {
  const [opened, { toggle }] = useDisclosure();

  const links = [
    <NavLink label="Bio" href="/" active={window.location.pathname === "/"} />,
    <NavLink
      label="Publications"
      href="/publications"
      active={window.location.pathname === "/publications"}
    />,
  ];

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header p="xs" withBorder={false}>
          <Flex align={"center"}>
            <Flex flex={1} miw={130} align="center">
              <Anchor
                href="/"
                c="green.1"
                size="xl"
                style={{
                  fontFamily: "'Permanent Marker', cursive",
                  textWrap: "nowrap",
                }}
                underline="never"
              >
                Emma Broman
              </Anchor>
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
        <AppShell.Footer withBorder={false}>
          <Center py={"xs"}>
            <Stack gap={4}>
              <Group justify="center">
                <Text size="xs" c={"dimmed"}>
                  © Emma Broman
                </Text>
                <ContactLinks />
                <Text size="xs" c={"dimmed"}>
                  Last updated: {lastUpdateDate}
                </Text>
              </Group>
            </Stack>
          </Center>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
