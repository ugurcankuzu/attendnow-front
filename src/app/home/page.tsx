"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [tkn, setTkn] = useState("");
  useEffect(() => {
    window.userEvents.getJWTFromUserData();
    window.userEvents.onGetJWTFromUserData((jwtTkn: string) => {
      setTkn(jwtTkn);
    });
  });
  return <h1>{tkn}</h1>
}
