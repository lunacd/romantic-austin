import { Block } from "payload";

export default function NestedBlock(depth: number): Block {
  const nested = depth == 0 ? [] : [NestedBlock(depth - 1)];
  return {
    slug: "nested",
    fields: [
      {
        name: "blocks",
        type: "blocks",
        required: true,
        blocks: nested,
      },
    ],
  };
}
