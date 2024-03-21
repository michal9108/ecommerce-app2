import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skN78aqmErmZCHPke6eE5bSShM6ITNXD3Mc5HNL6p26GkpPXJpljiELJsHCiahs3pUSyLpxQPcJoXHqEYlGlzEWwTr3F8ZY74QXKHMuvtI0LGyBFQwSs3dUvEvFqFotTr90RcnRH4SybjAQiWp1VoQmgp7GHdTAEqbKS6tYqhfYEWKZY5GnI",
})
