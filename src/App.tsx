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
        bdrs: "sm",
      },
    }),
  },
});

export function App() {
  const [opened, { toggle }] = useDisclosure();

  const links = [
    { label: "Bio", href: "/" },
    {
      label: "Publications",
      href: "/publications",
    },
  ];

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell header={{ height: 60 }} footer={{ height: 50 }} padding="md">
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
                  <Box key={index}>
                    <NavLink
                      label={link.label}
                      href={link.href}
                      active={window.location.pathname === link.href}
                    />
                  </Box>
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
                    <Menu.Item
                      key={index}
                      component="a"
                      href={link.href}
                      c={
                        window.location.pathname === link.href
                          ? "blue.4" // @TODO Use primary color instead
                          : undefined
                      }
                    >
                      {link.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Flex>
        </AppShell.Header>

        <AppShell.Main bg="background">
          <Outlet />
          <Group justify="center" wrap="nowrap" mt={"md"} hiddenFrom="xs">
            <Text size="xs" c={"dimmed"}>
              © Emma Broman
            </Text>
            <Text size="xs" c={"dimmed"}>
              Last updated: {lastUpdateDate}
            </Text>
          </Group>
        </AppShell.Main>

        <AppShell.Footer withBorder={false}>
          <Center py={"xs"}>
            <Group justify="center" wrap="nowrap">
              <Text size="xs" c={"dimmed"} visibleFrom="xs">
                © Emma Broman
              </Text>
              <ContactLinks />
              <Text size="xs" c={"dimmed"} visibleFrom="xs">
                Last updated: {lastUpdateDate}
              </Text>
            </Group>
          </Center>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
