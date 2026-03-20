import MainRouter from "../src/app/router/MainRouter.tsx";
import { AppProviders } from "./app/providers/AppProviders.tsx";

export default function App() {
  return (
    <AppProviders>
      <MainRouter />
    </AppProviders>
  );
}
