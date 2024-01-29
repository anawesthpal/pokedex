import { Box, Fab, ImageList, ImageListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FloatButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/pokedex");
  }
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Fab
        aria-label="add"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          bottom: "65px",
          right: "8px",
          position: "fixed",
          width: "80px",
          
          ":hover": { backgroundColor: "transparent" },
        }}
        onClick={() => handleClick()}
      >
        <ImageList sx={{ justifyContent: "center", display: "flex" }}>
          <ImageListItem>
            <img src="/src/assets/pokedex.webp" />
          </ImageListItem>
        </ImageList>
      </Fab>
    </Box>
  );
}

export default FloatButton;
