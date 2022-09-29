import { useEffect, useRef, useState } from "react";
import { getHandlers } from "./handlers";
import { setupWorker, SetupWorkerApi } from "msw";
import { FoodResponse } from "./DevTools";

export type WorkerConfig = {
  foodResponse: FoodResponse;
};

export function useWorker(config: WorkerConfig) {
  const [isReady, setIsReady] = useState(false);
  const configRef = useRef(config);

  useEffect(() => {
    configRef.current = config;
  }, [config]);

  useEffect(() => {
    const worker = setupWorker(...getHandlers(configRef));

    const startWorker = async (worker: SetupWorkerApi) => {
      await worker.start();
      setIsReady(true);
    };

    startWorker(worker);
  }, []);

  return isReady;
}
