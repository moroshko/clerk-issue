import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};

export default authMiddleware({
  afterAuth(auth, req) {
    if (auth.isPublicRoute || auth.userId !== null) {
      return NextResponse.next();
    }

    return redirectToSignIn({ returnBackUrl: req.url });
  },
});
