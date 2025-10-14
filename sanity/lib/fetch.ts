import { client } from "./client";
import { queries,slug } from "./query";

export async function fetchData(
  type: keyof typeof queries | keyof typeof slug,
  slugValue?: string
) {
  let queryString: string;

  if (slugValue && slug[type as keyof typeof slug]) {
    queryString = (slug[type as keyof typeof slug] as (slug: string) => string)(slugValue);
  } else if (queries[type as keyof typeof queries]) {
    queryString = queries[type as keyof typeof queries] as string;
  } else {
    throw new Error("Invalid query type");
  }

  const data = await client.fetch(queryString);
  return data;
}