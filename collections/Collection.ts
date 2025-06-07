import type { CollectionConfig } from "payload";
import NestedBlock from "./NestedBlock";

export const Collection: CollectionConfig = {
  slug: "collection",
  fields: [
    {
      name: "blocks",
      type: "blocks",
      blocks: [NestedBlock(1)],
      required: true,
    },
  ],
};
