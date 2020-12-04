import moment from "moment";
import { Container } from "@material-ui/core";
import { StartPanel, TrackerTable, AppTitle } from "../../components";

export const Tracker = () => {
  const now = moment().format();
  console.log(now);

  return (
    <Container maxWidth="sm">
      <AppTitle />
      <StartPanel />
      <TrackerTable />
    </Container>
  );
};
