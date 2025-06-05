import {
  Heading,
  Container,
  Grid,
  Theme,
} from "@radix-ui/themes";

import { SiteCard } from "./SiteCard";

import { sites } from "../config"

function App() {
  //const sites = ["https://google.com", "https://youtube.com", "https://gosuslugi.ru", "https://2ch.su", "https://proton.me", "https://crackmes.one", "https://4chan.org", "https://8kun.top", "https://habr.com"]

  return (
    <Theme>
      <Container size="1">
        <center>
          <Heading>DownDetecter</Heading>
        </center>
      </Container>
      <Grid columns="3" gap="6" width="auto">
        { sites.map((site, index) => (
          <SiteCard key={index} url={site} />
        ))}
      </Grid>
    </Theme>
  )
}

export default App
