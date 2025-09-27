import { getActionState } from "@astrojs/react/actions";
import { defineAction, type SafeResult } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  like: defineAction({
    input: z.object({
      postId: z.string(),
    }),
    handler: async ({ postId }, ctx) => {
      const { data: currentLikes = 0, error } = await getActionState<
        SafeResult<any, number>
      >(ctx);

      // handle errors
      if (error) throw error;

      // write to database
      return currentLikes + 1;
    },
  }),
};
