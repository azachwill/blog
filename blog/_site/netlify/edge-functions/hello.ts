import { Config } from "@netlify/edge-functions"

export default async () => {
  throw new Error("error");
};

export const config: Config = {
  path: "/hello",
  onError: "/unavailable"
}
