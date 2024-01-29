import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BotaoHome from "../components/BotaoHome";
import { useAppSelector } from "../store/hooks";

function Pokedex() {

    // const pokedex: Pokedex[] = useAppSelector((state) => state.pokedex);
    const pokemons = useAppSelector((state) => state.pokedex)


    return (
      <Box>
        <Stack sx={{ paddingTop: "20px" }} alignItems="center">
          <Typography color="#ed6c02" variant="h4" fontWeight="bold">
            POKEDEX
          </Typography>
        </Stack>
        <Container maxWidth="lg">
          <Grid container maxHeight="100%">
            {pokemons.map((pokemon) => (
              <Grid marginLeft="30px" marginTop="40px" item>
                <Box
                  component="img"
                  src={pokemon.imagemURL}
                  height="150px"
                ></Box>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                  color="#ffff"
                >
                  {pokemon.nome}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>

        <BotaoHome />
      </Box>
    );
}

export default Pokedex