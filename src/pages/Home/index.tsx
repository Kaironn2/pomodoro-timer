import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';
import { CountDown } from '../../components/Countdown';

export function Home() {
  useEffect(() => {
    document.title = 'Tomato';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
