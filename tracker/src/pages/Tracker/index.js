import { Container } from "@material-ui/core";
import { StartPanel, TrackerTable, AppTitle } from "../../components";

export const Tracker = () => {
  return (
    <Container maxWidth="sm">
      <AppTitle />
      <StartPanel />
      <TrackerTable />
    </Container>
  );
};
