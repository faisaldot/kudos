import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kudos | Social App" },
    { name: "description", content: "Kudos is a social app!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>The Kudos app.</h1>
    </div>
  );
}
