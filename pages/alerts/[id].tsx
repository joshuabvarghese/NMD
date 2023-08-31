import { useRouter } from "next/router";
import Container from "../../components/Container";

const AlertsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <p>Alert: {id}</p>
    </Container>
  );
};

export default AlertsPage;
