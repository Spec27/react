import PantingList from "./components/PantingList";
import Section from "./components/Section";
import panting from "./pantings.json";

export default function App() {
  return (
    <div>
      <Section title="Топ неділі">
        <PantingList items={panting} />
      </Section>
      <Section title="Популярне">
        <PantingList items={panting} />
      </Section>
    </div>
  );
}
