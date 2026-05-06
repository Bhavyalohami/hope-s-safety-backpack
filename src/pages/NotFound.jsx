import { ButtonLink, Hero } from "../components/ui.jsx";

export default function NotFound({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Page not found"
        title="This Page Is Not In The Safety System"
        text="This page is not part of the Hope's Safety Backpack story. Head back home to continue exploring the product, mission, and forms."
        graphic="/assets/graphics/page-two-graphic.svg"
        theme="story"
      >
        <ButtonLink href="/" onNavigate={onNavigate}>
          Go Home
        </ButtonLink>
      </Hero>
    </main>
  );
}
