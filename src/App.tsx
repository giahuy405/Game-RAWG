import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GridGames from "./components/GridGames"
import Genre, { GenreTypes } from "./components/Genre"
import { useState } from "react"
import PlatFormSelector from "./components/PlatFormSelector"
import { PlatForm } from "./hooks/usePlatform"
import Sort, { OptionSort } from "./components/Sort"


function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreTypes | undefined>(undefined);
  const [selectPlatform, setSelectPlatform] = useState<PlatForm | undefined>(undefined)
  const [sortGame, setSortGame] = useState<OptionSort | undefined>(undefined);

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        padding={3}
      >
        <GridItem area='nav' >
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area='aside' >
            <Genre setSelectedGenre={setSelectedGenre} selectedGenre={selectedGenre} />
          </GridItem>
        </Show>
        <GridItem area='main' marginTop={4}  >
          <HStack gap={3} >
            <PlatFormSelector selectPlatform={selectPlatform} setSelectPlatform={setSelectPlatform} />
            <Sort setSortGame={setSortGame} sortGame={sortGame} />
          </HStack>
          <GridGames selectedGenre={selectedGenre} selectPlatform={selectPlatform} sortGame={sortGame} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
