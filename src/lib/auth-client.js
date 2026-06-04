"use client";

import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import {
  useCallback,
  useEffect,
  useState,
} from "react";

export const authClient = createAuthClient({
  baseURL:process.env.BETTER_AUTH_URL,
  plugins:[
    jwtClient()
  ]
});

export const { signIn, signUp, useSession } = authClient;

export const useAuthSession = () => {
  const [state, setState] = useState({
    data: null,
    error: null,
    isPending: true,
  });

  const refetch = useCallback(async () => {
    const session = await authClient.getSession();

    setState({
      data: session.data,
      error: session.error,
      isPending: false,
    });

    return session;
  }, []);

  useEffect(() => {
    let isActive = true;

    const loadSession = async () => {
      const session = await authClient.getSession();

      if (!isActive) return;

      setState({
        data: session.data,
        error: session.error,
        isPending: false,
      });
    };

    loadSession();

    authClient.$store.listen(
      "$sessionSignal",
      loadSession
    );

    return () => {
      isActive = false;
    };
  }, []);

  return {
    ...state,
    refetch,
  };
};
