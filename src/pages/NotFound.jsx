import { ButtonLink, Hero } from "../components/ui.jsx";

export default function NotFound({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Page not found"
        title="This page slipped out of the notebook"
        text="This page is not part of Hope's Safety Backpack story. Head back home to keep exploring the product, mission, and forms."
        graphic="/assets/graphics/page-two-graphic.svg"
        kicker="Oops page"
        chips={["Try home", "Keep exploring"]}
      >
        <ButtonLink href="/" onNavigate={onNavigate}>
          Go Home
        </ButtonLink>
      </Hero>
    </main>
  );
}
