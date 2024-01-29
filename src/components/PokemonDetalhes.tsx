import { } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listarPorId } from "../store/modules/pokemon/actions";

function PokemonDetalhes() {
  const pokemon = useAppSelector((state) => state.pokemonDetalhes);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(listarPorId(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container paddingY={2} spacing={1}>
          <Card
            sx={{
              width: "100%",
              backgroundColor: "#7b4ad6",
            }}
            elevation={5}
          >
            <Typography
              gutterBottom
              variant="h4"
              color="#f2ddff"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign={"center"}
              marginTop={5}
            >
              {pokemon.nome}
            </Typography>
            <CardContent sx={{ display: "flex" }}>
              <Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <Box
                    component="img"
                    src={pokemon.imagemURL}
                    width="22
                    0px"
                  ></Box>
                </Grid>
              </Grid>

              <Grid item xs={4} sm={3} md={3} marginBottom={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#f2ddff"
                  marginBottom={0.75}
                >
                  Informações Gerais
                </Typography>
                <Stack flexDirection="row" gap={1}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.secondary"
                  >
                    XP:
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="#b8ccf6">
                    {pokemon.baseExpirience}
                  </Typography>
                </Stack>

                <Stack flexDirection="row" gap={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Altura:
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="#b8ccf6">
                    {pokemon.altura}
                  </Typography>
                </Stack>

                <Stack flexDirection="row" gap={1}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Largura:
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="#b8ccf6">
                    {pokemon.largura}
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={4} sm={3} md={3} marginBottom={2}>
                <Typography variant="body1" fontWeight="bold" color="#f2ddff">
                  Habilidades
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pokemon.habilidades.map((item) => (
                    <Stack fontWeight="bold">{item}</Stack>
                  ))}
                </Typography>
              </Grid>

              <Grid item xs={4} sm={3} md={3}>
                <Typography variant="body1" fontWeight="bold" color="#f2ddff">
                  Estatísticas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {pokemon.stats.map((item) => (
                    <Stack flexDirection="row" gap={1}>
                      <Typography fontWeight="bold">{item.nome}:</Typography>
                      <Typography fontWeight="bold" color="#b8ccf6">
                        {item.baseStat}
                      </Typography>
                    </Stack>
                  ))}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
}

export default PokemonDetalhes;
