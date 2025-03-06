import { createTheme } from "@mui/material";

export const getMuiTheme = () =>
  createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: "#f2f2f2",
            fontWeight: "800 !important",
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          data: {
            fontWeight: "800 !important",
          },
        },
      },
      MUIDataTableToolbar: {
        styleOverrides: {
          left: {
            textAlign: "right",
          },
        },
      },
    },
  });
