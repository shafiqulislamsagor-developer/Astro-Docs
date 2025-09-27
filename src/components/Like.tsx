import { withState } from "@astrojs/react/actions";
import { actions } from "astro:actions";
import { useActionState } from "react";
import Test from "./Test";

export function Like({ postId }: { postId: string }) {
  const [state, action, pending] = useActionState(
    withState(actions.like),
    { data: 0, error: undefined } // initial likes and errors
  );

  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />
      <button disabled={pending}>{state.data} ❤️</button>
      <Test>
        <h1>hi</h1>
        <h1>hi</h1>
        <h1>hi</h1>
      </Test>
    </form>
  );
}
