import Link from "next/link";
import { TutorialStep } from "./tutorial-step";
import { ArrowUpRight } from "lucide-react";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      {process.env.VERCEL_ENV === "preview" ||
      process.env.VERCEL_ENV === "production" ? (
        <TutorialStep title="Set up redirect urls">
          <p>
            It looks like this App is hosted on Vercel. But no backend
            environment variables are detected.
          </p>
        </TutorialStep>
      ) : null}
      <TutorialStep title="Sign In to the portal to begin.">
        <p>
          Head over to the{" "}
          <Link
            href="/sign-in"
            className="font-bold hover:underline text-foreground/80"
          >
            Sign In
          </Link>{" "}
          page and loginto the portal to begin. The admin will provide you with
          the necessary credentials.
        </p>
      </TutorialStep>
    </ol>
  );
}
