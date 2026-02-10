import React from "react";
import Button from "./buttons";
import Card from "./card";
import SmallCard from "./smallCard";

export default function CardHero({ ontitle, subtitle, onPressed }) {
  return (
    <Card
      top="An old-school way to budget"
      ontitle={ontitle}
      subtitle={subtitle}
    >
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button>I'm ready</Button>
        <Button variant="secondary" onClick={onPressed}>
          Change Background
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-[var(--muted)]">
        <SmallCard title="Fast" descrp="Add an expense in seconds." />
        <SmallCard title="Clear" descrp="Simple totals, no noise" />
        <SmallCard title="Vintage" descrp="Warm coffee-house feel." />
      </div>
    </Card>
  );
}
