import { getPayload } from "payload";
import config from "@payload-config";

export default async function Home() {
  const payload = await getPayload({
    config,
  });
  const data = await payload.find({
    collection: "collection",
  });
  console.log(data.docs);
  return (
    <div>
      A thing
    </div>
  );
}
